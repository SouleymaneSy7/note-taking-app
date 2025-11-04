import z from "zod";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

import { user } from "./users.schema";
import { notes } from "./notes.schema";

export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  noteId: integer("note_id").references(() => notes.id, {
    onDelete: "cascade",
  }),
  userId: text("user_id").references(() => user.id, {
    onDelete: "cascade",
  }),
});

export const tagsRelations = relations(tags, ({ one }) => ({
  note: one(notes, {
    fields: [tags.noteId],
    references: [notes.id],
  }),
  author: one(user, {
    fields: [tags.userId],
    references: [user.id],
  }),
}));

export const tagsSchema = createInsertSchema(tags);
export type TagsSchemaType = z.infer<typeof tagsSchema>;
