
"use client";

import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signOut } from 'firebase/auth';
import { auth, db, storage } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Edit2 } from 'lucide-react';
import { doc, getDoc, updateDoc, DocumentData } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";

export default function ProfilePage() {
  const { user, loading: authLoading } = useAuth();
  const [profileData, setProfileData] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      const fetchProfileData = async () => {
        setLoading(true);
        const userDocRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProfileData(data);
          setName(data.displayName || user.displayName || '');
          setPhotoPreview(data.photoURL || user.photoURL || null);
        } else {
          console.log("No such document!");
        }
        setLoading(false);
      };
      fetchProfileData();
    }
  }, [user]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateProfile = async () => {
    if (!user) return;
    setUpdating(true);

    try {
        const userDocRef = doc(db, "users", user.uid);
        let photoURL = profileData?.photoURL || user.photoURL;

        if (photo) {
            const storageRef = ref(storage, `profile_pictures/${user.uid}`);
            const snapshot = await uploadBytes(storageRef, photo);
            photoURL = await getDownloadURL(snapshot.ref);
        }

        const updatedData: { displayName: string; photoURL?: string } = {
            displayName: name,
        };
        if(photoURL) {
            updatedData.photoURL = photoURL;
        }

        await updateDoc(userDocRef, updatedData);
        await updateProfile(user, updatedData);
        
        // Refetch data to show updated info
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProfileData(data);
          setPhotoPreview(data.photoURL || user.photoURL || null);
        }

        toast({ title: 'Success', description: 'Profile updated successfully!' });
    } catch (error: any) {
         toast({
            variant: "destructive",
            title: "Update Failed",
            description: error.message,
        });
    } finally {
        setUpdating(false);
        setPhoto(null);
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
    if (nameParts.length > 1) {
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
                {profileData && (
                  <>
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Joined On</p>
                        <p className="font-semibold text-sm">{profileData.createdAt.toDate().toLocaleDateString()}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Membership Status</p>
                        <p className="font-semibold text-sm capitalize">{profileData.membershipTier}</p>
                    </div>
                  </>
                )}
                 <Button onClick={handleUpdateProfile} className="w-full" disabled={updating}>
                    {updating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                </Button>
            </CardContent>
            <CardFooter>
                 <Button onClick={handleLogout} className="w-full" variant="outline">
                    Logout
                </Button>
            </CardFooter>
          </Card>
       </div>
    </div>
  );
}
