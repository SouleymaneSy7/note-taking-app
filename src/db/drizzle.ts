import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

import { env } from "@/utils/env";
import * as schema from "./schema";

config({ path: ".env.local" });

const sql = neon(env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
