// src/actions/get-auth-status.ts

"use server";

import { currentUser } from "@clerk/nextjs/server";
import { usersDb } from "@/lib/cloudant";

const getAuthStatus = async () => {
  const user = await currentUser();

  if (!user?.id || !user?.primaryEmailAddress?.emailAddress) {
    return { error: "User not found" };
  }

  const clerkId = user.id;

  try {
    const existingUser = await usersDb.get(clerkId).catch(() => null);
    // console.log("existingUser", existingUser);

    if (!existingUser) {
      const newUser = {
        _id: clerkId,
        email: user.primaryEmailAddress.emailAddress,
        name: user.fullName || user.firstName || "",
        createdAt: new Date().toISOString(),
      };

      await usersDb.insert(newUser);
    }

    return { success: true };
  } catch (error) {
    console.error("Cloudant error:", error);
    return { error: "Failed to access database" };
  }
};

export default getAuthStatus;
