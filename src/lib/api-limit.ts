import { auth } from "@clerk/nextjs/server";
import { MAX_FREE_COUNTS, MAX_PRO_COUNTS, MAX_PREMIER_COUNTS } from "@/utils";
import { db } from "./prisma";
import { checkSubscription } from "./subscription";

// Helper function to get the maximum API limit based on the user's plan
export const getApiLimitByPlan = (plan: 'free' | 'pro' | 'premier'): number => {
  switch (plan) {
    case 'pro':
      return MAX_PRO_COUNTS;
    case 'premier':
      return MAX_PREMIER_COUNTS;
    default:
      return MAX_FREE_COUNTS;
  }
};

// Main function to increase the API limit for the user
export const increaseApiLimit = async () => {
  const { userId } = await auth();
  if (!userId) return;

  const userApiLimit = await db.userApiLimit.findUnique({
    where: { userId },
  });

  // Determine the user's plan type: Free, Pro, or Advanced
  const isSubscribed = await checkSubscription();
  let userPlan: 'free' | 'pro' | 'premier' = 'free';

  // Check if the user has a subscription and determine the plan type
  if (isSubscribed) {
    const userSubscription = await db.userSubscription.findUnique({
      where: { userId },
      select: { plan: true },
    });
    
    if (userSubscription?.plan === 'pro') {
      userPlan = 'pro';
    } else if (userSubscription?.plan === 'premier') {
      userPlan = 'premier';
    }
  }

  // Update the user's API usage count
  if (userApiLimit) {
    await db.userApiLimit.update({
      where: { userId },
      data: { 
        count: userApiLimit.count + 1 
      },
    });
  } else {
    await db.userApiLimit.create({
      data: {
        userId,
        count: 1,
        plan: userPlan,
      },
    });
  }
};

// Function to check if the user has reached their API limit based on their plan
export const checkApiLimit = async () => {
  const { userId } = await auth();
  if (!userId) return 0; // Return 0 if no user ID is found

  const userApiLimit = await db.userApiLimit.findUnique({
    where: { userId },
  });

  // Ensure userApiLimit is valid and return the count or 0 if not found
  return userApiLimit ? userApiLimit.count : 0;
};

// Function to get the current API count for the user
export const getApiLimit = async () => {
  const { userId } = await auth();
  if (!userId) return 0;

  const userApiLimit = await db.userApiLimit.findUnique({
    where: { userId },
  });

  return userApiLimit ? userApiLimit.count : 0;
}