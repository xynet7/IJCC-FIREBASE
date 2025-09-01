
"use client";

import React, { createContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import type { AuthContextType, User } from '@/lib/definitions';
import { useToast } from '@/hooks/use-toast';
import { auth } from '@/lib/firebase';


export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName || "User",
          email: firebaseUser.email || "",
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !user && (pathname === '/dashboard' || pathname === '/summarizer')) {
      router.push('/login');
    }
  }, [user, loading, pathname, router]);


  const login = async (email: string, pass: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      toast({ title: 'Success', description: 'Logged in successfully!' });
      router.push('/dashboard');
      return true;
    } catch (error: any) {
      let errorMessage = "An unknown error occurred.";
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        errorMessage = 'Invalid email or password.';
      } else {
        errorMessage = error.message;
      }
      toast({ variant: 'destructive', title: 'Error', description: errorMessage });
      return false;
    }
  };

  const register = async (name: string, email: string, pass: string) => {
     try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(userCredential.user, {
        displayName: name
      });
      
      // Manually update the user state after profile update
      setUser({
          id: userCredential.user.uid,
          name: name,
          email: email,
      });

      toast({ title: 'Success', description: 'Account created successfully!' });
      router.push('/dashboard');
      return true;
    } catch (error: any) {
      let errorMessage = "An unknown error occurred.";
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'An account with this email already exists.';
      } else {
        errorMessage = error.message;
      }
      toast({ variant: 'destructive', title: 'Error', description: errorMessage });
      return false;
    }
  };

  const logout = async () => {
    try {
        await signOut(auth);
        router.push('/');
        toast({ title: 'Logged Out', description: 'You have been logged out.' });
    } catch(error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
    }
  };

  const value = { user, login, logout, register, loading };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
