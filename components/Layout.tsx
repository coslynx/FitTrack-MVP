import { useSession } from "next-auth/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;