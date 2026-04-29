import {
  pgTable,
  serial,
  varchar,
  timestamp,
  text,
  numeric,
  integer,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  role: varchar('role', { length: 50 }).notNull().default('user'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  imageUrl: varchar('image_url', { length: 500 }).notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  description: varchar('description', { length: 800 }).notNull(),
  category: text('category').notNull(),
});

export const Cart = pgTable('cart', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull(),
   imageUrl: varchar('image_url', { length: 500 }).notNull(),
  productId: integer('product_id').notNull(),
  quantity: integer('quantity').notNull().default(1),
  createdAt: timestamp('created_at').defaultNow(),
});
