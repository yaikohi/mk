import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({ url: 'DATABASE_URL', authToken: 'DATABASE_AUTH_TOKEN' });
export const db = drizzle(client);

/** User return type when queried */
// export type User = InferModel<typeof users>

/** User insert type */
// export type InsertUser = InferModel<typeof users, 'insert'>

// export const usersFromDb = await db.select().from(users).all()