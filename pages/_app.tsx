import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth/react/types';
import { useState, useEffect } from 'react';
import { create } from 'zustand';
import { ToastContainer } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { api } from '@/utils/api';
import Layout from '@/components/Layout';
import HomePage from '@/pages/index';
import LoginPage from '@/pages/login';
import DashboardPage from '@/pages/dashboard';

export interface User {
  id: number;
  name: string;
  email: string;
}

interface Goal {
  id: number;
  name: string;
  target: string;
  deadline: Date;
  userId: number;
}

interface Store {
  user: User | null;
  goals: Goal[];
  setUser: (user: User | null) => void;
  addGoal: (goal: Goal) => void;
}

const useStore = create<Store>((set) => ({
  user: null,
  goals: [],
  setUser: (user) => set({ user }),
  addGoal: (goal) => set((state) => ({ goals: [...state.goals, goal] })),
}));

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  const [session, setSession] = useState<Session | null>(null);
  const { user, setUser } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const sessionData = await api.getSession();
      setSession(sessionData);
      if (sessionData?.user) {
        setUser(sessionData.user);
        const goals = await api.getGoals(sessionData.user.id);
        useStore.getState().addGoal(...goals);
      }
    };

    fetchData();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/dashboard',
          element: <DashboardPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <SessionProvider session={session}>
        <RouterProvider router={router} />
      </SessionProvider>
      <ToastContainer />
    </>
  );
}