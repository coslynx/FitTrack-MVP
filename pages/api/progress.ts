import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = session.user.id;

  if (req.method === "GET") {
    try {
      const workouts = await prisma.workout.findMany({
        where: { userId },
        orderBy: { date: "desc" },
      });

      return res.status(200).json(workouts);
    } catch (error) {
      console.error("Error fetching workouts:", error);
      return res.status(500).json({ message: "Failed to fetch workouts" });
    }
  } else if (req.method === "POST") {
    try {
      const { name, duration, calories, date } = req.body;

      if (!name || !duration || !calories || !date) {
        return res.status(400).json({
          message: "Missing required fields",
        });
      }

      const workout = await prisma.workout.create({
        data: {
          name,
          duration,
          calories,
          date: new Date(date),
          user: { connect: { id: userId } },
        },
      });

      return res.status(201).json(workout);
    } catch (error) {
      console.error("Error creating workout:", error);
      return res.status(500).json({ message: "Failed to create workout" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}