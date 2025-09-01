"use client";
import { useContext } from 'react';
import { AuthContext } from '@/components/auth-provider';
import type { AuthContextType } from '@/lib/definitions';


export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
