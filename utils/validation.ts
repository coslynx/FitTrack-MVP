import { Goal } from '../types';

export const validateGoal = ({
  name,
  target,
  deadline,
}: Pick<Goal, 'name' | 'target' | 'deadline'>): string[] => {
  const errors: string[] = [];

  if (!name || name.trim() === '') {
    errors.push('Goal name is required.');
  }

  if (!target || target.trim() === '') {
    errors.push('Goal target is required.');
  }

  if (!deadline) {
    errors.push('Deadline is required.');
  } else if (deadline < new Date()) {
    errors.push('Deadline must be a future date.');
  }

  return errors;
};