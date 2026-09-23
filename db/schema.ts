import {sqliteTable,text} from "drizzle-orm/sqlite-core";
export const leads=sqliteTable("demo_leads",{id:text("id").primaryKey(),service:text("service").notNull(),zip:text("zip").notNull(),urgency:text("urgency").notNull(),name:text("name").notNull(),email:text("email").notNull(),phone:text("phone").notNull(),notes:text("notes").notNull(),createdAt:text("created_at").notNull()});
