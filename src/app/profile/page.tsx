
"use client";

import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { doc, getDoc, DocumentData } from 'firebase/firestore';

export default function ProfilePage() {
  const { user, loading: authLoading } = useAuth();
  const [profileData, setProfileData] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

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
          setProfileData(docSnap.data());
        } else {
          console.log("No such document!");
          // This could happen if a user was created before the firestore logic was added
          // You could create the document here if needed
        }
        setLoading(false);
      };
      fetchProfileData();
    }
  }, [user]);

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

  const getInitials = (email: string | null | undefined) => {
    if (!email) return 'U';
    return email.charAt(0).toUpperCase();
  };

  return (
    <div className="container py-12">
       <div className="mx-auto max-w-lg">
          <Card>
            <CardHeader className="items-center text-center">
                <Avatar className="h-24 w-24 mb-4 text-3xl">
                    <AvatarFallback>{getInitials(user.email)}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-3xl">Profile</CardTitle>
                <CardDescription>Your personal account details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="font-semibold">{user.email}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">User ID</p>
                    <p className="font-semibold text-xs">{user.uid}</p>
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
                <Button onClick={handleLogout} className="w-full">
                    Logout
                </Button>
            </CardContent>
          </Card>
       </div>
    </div>
  );
}
