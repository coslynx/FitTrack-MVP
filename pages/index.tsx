import { useSession } from "next-auth/react";
import { useStore } from "@/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { data: session } = useSession();
  const { user } = useStore();
  const router = useRouter();

  if (session) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Welcome to FitTrack!
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Track your fitness progress, set goals, and connect with a supportive
          community.
        </p>
        <Link href="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login / Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;