import { useSession } from "next-auth/react";
import { useStore } from "@/store";
import { useState, useEffect } from "react";
import api from "@/utils/api";
import GoalInput from "@/components/GoalInput";
import ProgressChart from "@/components/ProgressChart";
import SocialShareButton from "@/components/SocialShareButton";
import Button from "@/components/Button";
import { toast } from "react-hot-toast";

const DashboardPage = () => {
  const { data: session } = useSession();
  const { user, goals, addGoal } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const workoutsData = await api.getWorkouts(user.id);
          setWorkouts(workoutsData);
        } catch (error) {
          console.error("Error fetching workouts:", error);
          toast.error("Failed to fetch workouts. Please try again.");
        }
      }
    };

    fetchData();
  }, [user]);

  const handleGoalCreate = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <Button onClick={handleGoalCreate} className="bg-blue-500 hover:bg-blue-600">
          Create Goal
        </Button>
      </div>
      {user && (
        <>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Profile</h3>
            <p className="text-gray-600">
              Name: {user.name}
              <br />
              Email: {user.email}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Goals</h3>
            <ul>
              {goals.map((goal) => (
                <li key={goal.id} className="text-gray-600">
                  {goal.name} - Target: {goal.target} - Deadline:{" "}
                  {goal.deadline.toLocaleDateString()}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Workout Progress</h3>
            {workouts.length ? (
              <>
                <ProgressChart />
                <div className="mt-4">
                  <SocialShareButton
                    url={`https://www.your-app-url.com/dashboard`}
                    title={`Check out my workout progress on FitTrack!`}
                  />
                </div>
              </>
            ) : (
              <p className="text-gray-600">
                No workout data available yet. Start logging your workouts!
              </p>
            )}
          </div>
        </>
      )}
      {isModalOpen && (
        <GoalInput onClose={handleModalClose} />
      )}
    </div>
  );
};

export default DashboardPage;