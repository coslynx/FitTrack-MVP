import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useStore } from '@/store';
import Button from './Button';

const Header = () => {
  const { data: session } = useSession();
  const { user, setUser } = useStore();

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-800">FitTrack</h1>
        </Link>
        <div className="flex items-center">
          {session ? (
            <>
              <span className="mr-4 text-gray-600">
                Welcome, {user?.name}
              </span>
              <Button onClick={() => setUser(null)} className="bg-red-500 hover:bg-red-600">
                Logout
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button className="bg-blue-500 hover:bg-blue-600">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;