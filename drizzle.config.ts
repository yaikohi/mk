import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/server/db/schema.ts",
  connectionString: process.env.LIBSQL_DB_URL,
  out: "./src/server/db/migrations"
} satisfies Config;