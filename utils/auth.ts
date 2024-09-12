import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const userId = session.user.id;

  if (req.method === 'GET') {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ message: 'Failed to fetch user' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}