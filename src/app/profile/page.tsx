
"use client";

import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signOut } from 'firebase/auth';
import { auth, db, storage } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Edit2 } from 'lucide-react';
import { doc, getDoc, setDoc, updateDoc, DocumentData } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile, User } from "firebase/auth";

export default function ProfilePage() {
  const { user, loading: authLoading } = useAuth();
  const [profileData, setProfileData] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<File | Blob | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);


  const fetchProfileData = useCallback(async (currentUser: User) => {
    setLoading(true);
    try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            setProfileData(data);
            setName(data.displayName || currentUser.displayName || '');
            setPhotoPreview(data.photoURL || currentUser.photoURL || null);
        } else {
            // If no document, use auth data as a fallback and prepare to create one
            const initialData = {
                uid: currentUser.uid,
                email: currentUser.email,
                displayName: currentUser.displayName || currentUser.email?.split('@')[0] || '',
                photoURL: currentUser.photoURL || null,
                createdAt: new Date(),
                membershipTier: "none",
            };
            await setDoc(userDocRef, initialData);
            setProfileData(initialData);
            setName(initialData.displayName);
            setPhotoPreview(initialData.photoURL);
        }
    } catch (error) {
        console.error("Failed to fetch or create profile data:", error);
        toast({ variant: 'destructive', title: 'Error', description: 'Could not load profile data.' });
    } finally {
        setLoading(false);
    }
  }, [toast]);


  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      fetchProfileData(user);
    }
  }, [user, fetchProfileData]);

  const resizeImage = (file: File): Promise<Blob> => {
    const MAX_WIDTH = 400;
    const MAX_HEIGHT = 400;

    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = () => {
            let width = image.width;
            let height = image.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            
            if (!ctx) {
              return reject(new Error('Could not get canvas context'));
            }

            ctx.drawImage(image, 0, 0, width, height);

            canvas.toBlob(
                (blob) => {
                    if (blob) {
                        resolve(blob);
                    } else {
                        reject(new Error('Canvas to Blob conversion failed'));
                    }
                },
                file.type,
                0.9 // 90% quality
            );
        };
        image.onerror = (error) => {
            reject(error);
        };
    });
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        const resizedBlob = await resizeImage(file);
        setPhoto(resizedBlob);
        setPhotoPreview(URL.createObjectURL(resizedBlob));
      } catch (error) {
        console.error("Image resize failed:", error);
        toast({
          variant: "destructive",
          title: "Image Error",
          description: "Could not process the selected image."
        });
      }
    }
  };

  const uploadPhoto = async (userId: string, photoFile: Blob): Promise<string> => {
      const storageRef = ref(storage, `profile_pictures/${userId}`);
      const snapshot = await uploadBytes(storageRef, photoFile);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
  };
  
  const updateUserProfile = async (userId: string, dataToUpdate: Partial<DocumentData>) => {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, dataToUpdate);
  
      if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
              displayName: dataToUpdate.displayName,
              photoURL: dataToUpdate.photoURL,
          });
      }
  };


  const handleUpdateProfile = async () => {
    if (!user) return;
    setUpdating(true);

    try {
        let photoURL = photoPreview;

        if (photo) {
            photoURL = await uploadPhoto(user.uid, photo);
        }

        const updatedData = {
            displayName: name,
            photoURL: photoURL || null,
        };

        await updateUserProfile(user.uid, updatedData);
        
        // Optimistically update local state to reflect changes immediately
        setProfileData(prev => ({...prev, ...updatedData}));
        setPhotoPreview(photoURL);
        
        toast({ title: 'Success', description: 'Profile updated successfully!' });

    } catch (error: any) {
        console.error("Profile update failed:", error);
         toast({
            variant: "destructive",
            title: "Update Failed",
            description: error.code === 'storage/unauthorized' 
                ? "Permission denied. Please check storage security rules." 
                : "An unexpected error occurred while updating your profile.",
        });
    } finally {
        setUpdating(false);
        setPhoto(null); // Clear the staged photo file
    }
  };


  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({ title: 'Success', description: 'Logged out successfully!' });
      router.push('/login');
    } catch (error: any) {
       toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };
  
  if (authLoading || loading || !user) {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Loader2 className="h-16 w-16 animate-spin text-primary" />
        </div>
    );
  }

  const getInitials = (name: string | null | undefined) => {
    if (!name) return user?.email?.charAt(0).toUpperCase() || 'U';
    const nameParts = name.split(' ');
    if (nameParts.length > 1 && nameParts[1]) {
        return nameParts[0].charAt(0) + nameParts[1].charAt(0);
    }
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="container py-12">
       <div className="mx-auto max-w-lg">
          <Card>
            <CardHeader className="items-center text-center">
                <div className="relative">
                    <Avatar className="h-24 w-24 mb-4 text-3xl">
                        <AvatarImage src={photoPreview || undefined} alt={name || 'User'} />
                        <AvatarFallback>{getInitials(name)}</AvatarFallback>
                    </Avatar>
                    <Button 
                        variant="outline" 
                        size="icon"
                        className="absolute bottom-4 right-0 rounded-full h-8 w-8 bg-background"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <Edit2 className="h-4 w-4" />
                        <span className="sr-only">Change photo</span>
                    </Button>
                    <Input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handlePhotoChange}
                        className="hidden"
                        accept="image/png, image/jpeg"
                    />
                </div>
                <CardTitle className="font-headline text-3xl">Profile</CardTitle>
                <CardDescription>Your personal account details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="font-semibold">{user.email}</p>
                </div>
                {profileData && profileData.createdAt && (
                  <>
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Joined On</p>
                        <p className="font-semibold text-sm">{profileData.createdAt.toDate().toLocaleDateString()}</p>
                    </div>
                  </>
                )}
                {profileData && profileData.membershipTier && (
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Membership Status</p>
                        <p className="font-semibold text-sm capitalize">{profileData.membershipTier}</p>
                    </div>
                )}
                 <Button onClick={handleUpdateProfile} className="w-full" disabled={updating}>
                    {updating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                </Button>
            </CardContent>
            <CardFooter>
                 <Button onClick={handleLogout} className="w-null" variant="outline">
                    Logout
                </Button>
            </CardFooter>
          </Card>
       </div>
    </div>
  );
}

    

    
