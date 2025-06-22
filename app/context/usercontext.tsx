'use client';

import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface User {
  userId: string;
  name: string;
  email: string;
  role: 'passenger' | 'driver' | 'both';
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loadUser: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const loadUser = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const decoded = jwtDecode<User>(token);
        setUser(decoded);
      } catch (err) {
        console.error('Invalid token:', err);
        setUser(null);
      }
    }
  }
useEffect(() => {
    loadUser()
    // Listen for storage changes (other tabs)
    const onStorage = () => loadUser()
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])
  return (
    <UserContext.Provider value={{ user, setUser ,loadUser}}>{children}</UserContext.Provider>
  );
};
