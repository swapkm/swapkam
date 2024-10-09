// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Declare a variable to hold the Prisma client
let prisma: PrismaClient | undefined;

const getPrismaClient = () => {
  // If we are in production, create a new PrismaClient instance
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  }

  // In development, check if a Prisma client already exists
  if (!prisma) {
    prisma = new PrismaClient();
  }

  return prisma;
};

export default getPrismaClient();
