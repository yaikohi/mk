import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/** User table */
export const users = sqliteTable('users', {
    id: integer('id').primaryKey(),
    username: text('full_name'),
})
