import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust this import path as needed

// Define the shape of the request body
interface RequestBody {
  email: string;
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { email }: RequestBody = await request.json();

    // Validate the email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Save the email to the database
    const newSubscription = await prisma.subscription.create({
      data: {
        email,
      },
    });

    // Return success response
    return NextResponse.json({
      message: "Successfully subscribed",
      subscription: newSubscription,
    });
  } catch (error) {
    console.error("Error subscribing:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
