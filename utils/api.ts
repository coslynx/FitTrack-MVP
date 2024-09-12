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
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      return res.status(500).json({ message: "Failed to fetch user" });
    }
  } else if (req.method === "POST") {
    try {
      const { name, target, deadline } = req.body;

      if (!name || !target || !deadline) {
        return res.status(400).json({
          message: "Missing required fields",
        });
      }

      const goal = await prisma.goal.create({
        data: {
          name,
          target,
          deadline: new Date(deadline),
          user: { connect: { id: userId } },
        },
      });

      return res.status(201).json(goal);
    } catch (error) {
      console.error("Error creating goal:", error);
      return res.status(500).json({ message: "Failed to create goal" });
    }
  } else if (req.method === "PUT") {
    try {
      const { id, name, target, deadline } = req.body;

      if (!id || !name || !target || !deadline) {
        return res.status(400).json({
          message: "Missing required fields",
        });
      }

      const goal = await prisma.goal.update({
        where: { id: parseInt(id) },
        data: {
          name,
          target,
          deadline: new Date(deadline),
        },
      });

      return res.status(200).json(goal);
    } catch (error) {
      console.error("Error updating goal:", error);
      return res.status(500).json({ message: "Failed to update goal" });
    }
  } else if (req.method === "DELETE") {
    try {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({
          message: "Missing goal ID",
        });
      }

      await prisma.goal.delete({
        where: { id: parseInt(id) },
      });

      return res.status(204).send();
    } catch (error) {
      console.error("Error deleting goal:", error);
      return res.status(500).json({ message: "Failed to delete goal" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}