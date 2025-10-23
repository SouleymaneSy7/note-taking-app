import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
});

export const env = envSchema.safeParse(process.env);
