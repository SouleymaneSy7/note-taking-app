import z from "zod";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { pgTable, serial, text, boolean, timestamp } from "drizzle-orm/pg-core";

import { user } from "./users.schema";
import { tags } from "./tags.schema";

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  content: text("content").notNull(),
  is_archived: boolean("is_archived").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});

export const notesRelations = relations(notes, ({ one, many }) => ({
  author: one(user, {
    fields: [notes.userId],
    references: [user.id],
  }),
  tags: many(tags),
}));

export const noteSchema = createInsertSchema(notes);
export type NoteSchemaType = z.infer<typeof noteSchema>;
