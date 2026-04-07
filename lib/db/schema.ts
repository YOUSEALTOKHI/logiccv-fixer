import { sqliteTable, integer, text, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  name: text('name'),
  password: text('password').notNull(),
  language: text('language').default('en'), // en or ar
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
  updatedAt: text('updated_at').default('CURRENT_TIMESTAMP'),
});

export const cvs = sqliteTable('cvs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').references(() => users.id),
  title: text('title'),
  content: text('content', { mode: 'json' }), // JSON object for CV data
  atsScore: integer('ats_score'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
  updatedAt: text('updated_at').default('CURRENT_TIMESTAMP'),
});

export const orders = sqliteTable('orders', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').references(() => users.id),
  plan: text('plan').notNull(), // free, pro, premium
  amount: integer('amount'),
  status: text('status').default('pending'), // pending, completed, failed
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const referrals = sqliteTable('referrals', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  referrerId: integer('referrer_id').references(() => users.id),
  referredEmail: text('referred_email'),
  status: text('status').default('pending'), // pending, completed
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});