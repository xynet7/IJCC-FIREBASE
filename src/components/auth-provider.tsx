"use client";

import React, { createContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import type { AuthContextType, User } from '@/lib/definitions';
import { DUMMY_USERS } from '@/lib/definitions';
import { useToast } from '@/hooks/use-toast';

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('user');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading && !user && (pathname === '/dashboard' || pathname === '/summarizer')) {
      router.push('/login');
    }
  }, [user, loading, pathname, router]);


  const login = (email: string, pass: string) => {
    const foundUser = DUMMY_USERS.find(u => u.email === email && u.password === pass);
    if (foundUser) {
      const userData = { id: foundUser.id, name: foundUser.name, email: foundUser.email };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      toast({ title: 'Success', description: 'Logged in successfully!' });
      router.push('/dashboard');
      return true;
    }
    toast({ variant: 'destructive', title: 'Error', description: 'Invalid email or password.' });
    return false;
  };

  const register = (name: string, email: string, pass: string) => {
    if (DUMMY_USERS.find(u => u.email === email)) {
      toast({ variant: 'destructive', title: 'Error', description: 'User with this email already exists.' });
      return false;
    }
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      password: pass,
      interests: '',
      industry: '',
      recentActivity: ''
    };
    DUMMY_USERS.push(newUser);
    const userData = { id: newUser.id, name: newUser.name, email: newUser.email };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    toast({ title: 'Success', description: 'Account created successfully!' });
    router.push('/dashboard');
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/');
    toast({ title: 'Logged Out', description: 'You have been logged out.' });
  };

  const value = { user, login, logout, register, loading };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
