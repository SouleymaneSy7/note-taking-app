import { createAuthClient } from "better-auth/react";
import { env } from "@/utils/env";

export const authClient = createAuthClient({
  baseURL: env.data?.BETTER_AUTH_URL || "http://localhost:3000",
});

export const { signIn, signUp, signOut, useSession } = authClient;
