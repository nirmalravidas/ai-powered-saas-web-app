// lib/subscription.ts
import { auth } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkSubscription = async () => {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { plan: 'free', isActive: false }; // Default to free plan if no user
    }

    const userSubscription = await db.userSubscription.findUnique({
      where: { userId },
      select: {
        plan: true,
        amount: true,
        status: true,
        receipt: true,
      },
    });

    if (
      !userSubscription ||
      !userSubscription.amount ||
      !userSubscription.status
    ) {
      return { plan: 'free', isActive: false }; // No subscription, default to free
    }

    // Check if the subscription is still active
    const userApiCount = await db.userApiLimit.findUnique({
      where: { userId },
      select: {
        plan: true,
        count: true,
      },
    });

    const isActive = (userApiCount?.count ?? 0) > 0;

    // Determine the plan type based on the price ID
    let plan = 'free';
    if (userSubscription.plan === "pro") {
      plan = 'pro';
    } else if (userSubscription.plan === "premier") {
      plan = 'premier';
    }

    return { plan, isActive };

  } catch (error) {
    console.error("Error checking subscription:", error);
    return { plan: 'free', isActive: false }; // Fallback in case of error
  }
}