import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useStore } from '@/store';
import api from '@/utils/api';

interface WorkoutData {
  name: string;
  duration: number;
  calories: number;
  date: Date;
}

const ProgressChart = () => {
  const { user } = useStore();
  const [workoutData, setWorkoutData] = useState<WorkoutData[]>([]);

  useEffect(() => {
    const fetchWorkoutData = async () => {
      if (user) {
        try {
          const data = await api.getWorkouts(user.id);
          setWorkoutData(data);
        } catch (error) {
          console.error('Error fetching workout data:', error);
        }
      }
    };

    fetchWorkoutData();
  }, [user]);

  const data = workoutData.map((workout) => ({
    name: workout.date.toLocaleDateString(),
    duration: workout.duration,
    calories: workout.calories,
  }));

  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="duration" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="calories" stroke="#82ca9d" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default ProgressChart;