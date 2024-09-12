import { User } from '../types';
import api from './api';

export const getSession = async () => {
  try {
    const response = await api.getSession();

    if (response.ok) {
      const session = await response.json();
      return session as User;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
};

export const getGoals = async (userId: number) => {
  try {
    const response = await api.getGoals(userId);

    if (response.ok) {
      return await response.json();
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching goals:', error);
    return [];
  }
};

export const getWorkouts = async (userId: number) => {
  try {
    const response = await api.getWorkouts(userId);

    if (response.ok) {
      return await response.json();
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching workouts:', error);
    return [];
  }
};