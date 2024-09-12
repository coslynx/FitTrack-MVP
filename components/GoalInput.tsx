import { useState } from 'react';
import { useStore } from '@/store';
import { useSession } from 'next-auth/react';
import Button from './Button';
import { toast } from 'react-hot-toast';
import { validateGoal } from '@/utils/validation';
import api from '@/utils/api';

interface GoalInputProps {
  onClose: () => void;
}

const GoalInput = ({ onClose }: GoalInputProps) => {
  const { user } = useStore();
  const { data: session } = useSession();
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateGoal({ name, target, deadline });

    if (validationErrors.length) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await api.createGoal({ name, target, deadline, userId: user?.id });

      if (response.ok) {
        toast.success('Goal created successfully!');
        onClose();
      } else {
        toast.error('Failed to create goal. Please try again.');
      }
    } catch (error) {
      console.error('Error creating goal:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Set a New Goal</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Goal Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="target" className="block text-gray-700 font-bold mb-2">
              Target
            </label>
            <input
              type="text"
              id="target"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="deadline" className="block text-gray-700 font-bold mb-2">
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={deadline ? deadline.toISOString().split('T')[0] : ''}
              onChange={(e) => setDeadline(new Date(e.target.value))}
              required
            />
          </div>
          <div className="flex justify-end">
            <Button type="button" onClick={onClose} className="mr-2">
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Creating...' : 'Create Goal'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoalInput;