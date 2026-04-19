import { sqliteTable, text, integer, real, primaryKey, index, uniqueIndex } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

// 1. Users Table
export const users = sqliteTable(
  'users',
  {
    id: text('id').primaryKey(),
    email: text('email').notNull().unique(),
    password: text('password'),
    firstName: text('first_name'),
    lastName: text('last_name'),
    language: text('language').default('en'),
    phoneNumber: text('phone_number'),
    country: text('country'),
    companyName: text('company_name'),
    accountType: text('account_type').default('free'), // free, basic, pro, premium
    createdAt: integer('created_at').default(sql`(cast(unixepoch() as int))`),
    updatedAt: integer('updated_at').default(sql`(cast(unixepoch() as int))`),
  },
  (table) => [
    uniqueIndex('email_idx').on(table.email),
    index('account_type_idx').on(table.accountType),
  ]
);

// 2. CVs Table
export const cvs = sqliteTable(
  'cvs',
  {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id),
    fileName: text('file_name').notNull(),
    fileUrl: text('file_url').notNull(),
    fileType: text('file_type'), // pdf, docx, doc
    rawText: text('raw_text'),
    isAnalyzed: integer('is_analyzed').default(0),
    createdAt: integer('created_at').default(sql`(cast(unixepoch() as int))`),
    updatedAt: integer('updated_at').default(sql`(cast(unixepoch() as int))`),
  },
  (table) => [
    index('user_id_idx').on(table.userId),
    index('created_at_idx').on(table.createdAt),
  ]
);

// 3. ATS Analysis Table
export const atsAnalysis = sqliteTable(
  'ats_analysis',
  {
    id: text('id').primaryKey(),
    cvId: text('cv_id').notNull().references(() => cvs.id),
    userId: text('user_id').notNull().references(() => users.id),
    atsScore: integer('ats_score'),
    keywords: text('keywords'), // JSON array
    suggestions: text('suggestions'), // JSON array
    strengths: text('strengths'), // JSON object
    weaknesses: text('weaknesses'), // JSON object
    parsingAccuracy: real('parsing_accuracy'),
    createdAt: integer('created_at').default(sql`(cast(unixepoch() as int))`),
  },
  (table) => [
    uniqueIndex('cv_id_idx').on(table.cvId),
    index('user_id_idx').on(table.userId),
  ]
);

// 4. Orders Table
export const orders = sqliteTable(
  'orders',
  {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id),
    plan: text('plan').notNull(), // basic, pro, premium, 24h
    amount: real('amount').notNull(),
    status: text('status').default('pending'), // pending, completed, failed
    paymentId: text('payment_id').references(() => payments.id),
    createdAt: integer('created_at').default(sql`(cast(unixepoch() as int))`),
    completedAt: integer('completed_at'),
  },
  (table) => [
    index('user_id_idx').on(table.userId),
    index('status_idx').on(table.status),
  ]
);

// 5. Payments Table
export const payments = sqliteTable(
  'payments',
  {
    id: text('id').primaryKey(),
    orderId: text('order_id').notNull().references(() => orders.id),
    userId: text('user_id').notNull().references(() => users.id),
    amount: real('amount').notNull(),
    currency: text('currency').default('USD'),
    method: text('method'), // card, paypal, stripe
    status: text('status').default('pending'), // pending, success, failed
    transactionId: text('transaction_id').unique(),
    createdAt: integer('created_at').default(sql`(cast(unixepoch() as int))`),
  },
  (table) => [
    index('user_id_idx').on(table.userId),
    index('status_idx').on(table.status),
  ]
);

// 6. Affiliates Table
export const affiliates = sqliteTable(
  'affiliates',
  {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id),
    affiliateCode: text('affiliate_code').notNull().unique(),
    commission: real('commission').default(0), // Total earned
    commissionRate: real('commission_rate').default(0.1), // 10% default
    status: text('status').default('active'), // active, inactive, suspended
    createdAt: integer('created_at').default(sql`(cast(unixepoch() as int))`),
  },
  (table) => [
    uniqueIndex('code_idx').on(table.affiliateCode),
    index('commission_idx').on(table.commission),
  ]
);

// 7. Referrals Table
export const referrals = sqliteTable(
  'referrals',
  {
    id: text('id').primaryKey(),
    affiliateId: text('affiliate_id').notNull().references(() => affiliates.id),
    referredUserId: text('referred_user_id').notNull().references(() => users.id),
    status: text('status').default('pending'), // pending, converted, expired
    conversionValue: real('conversion_value').default(0),
    createdAt: integer('created_at').default(sql`(cast(unixepoch() as int))`),
    convertedAt: integer('converted_at'),
  },
  (table) => [
    index('affiliate_id_idx').on(table.affiliateId),
    index('status_idx').on(table.status),
  ]
);

// 8. Messages Table
export const messages = sqliteTable(
  'messages',
  {
    id: text('id').primaryKey(),
    senderId: text('sender_id').notNull().references(() => users.id),
    recipientId: text('recipient_id').notNull().references(() => users.id),
    subject: text('subject'),
    body: text('body').notNull(),
    isRead: integer('is_read').default(0),
    createdAt: integer('created_at').default(sql`(cast(unixepoch() as int))`),
  },
  (table) => [
    index('recipient_id_idx').on(table.recipientId),
    index('created_at_idx').on(table.createdAt),
  ]
);

// 9. Saved Jobs Table
export const savedJobs = sqliteTable(
  'saved_jobs',
  {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id),
    jobTitle: text('job_title').notNull(),
    company: text('company').notNull(),
    description: text('description'),
    url: text('url'),
    match: real('match'), // Percentage match with CV
    createdAt: integer('created_at').default(sql`(cast(unixepoch() as int))`),
  },
  (table) => [
    index('user_id_idx').on(table.userId),
    index('match_idx').on(table.match),
  ]
);

// 10. Team Members Table
export const teamMembers = sqliteTable(
  'team_members',
  {
    id: text('id').primaryKey(),
    teamLeadId: text('team_lead_id').notNull().references(() => users.id),
    memberId: text('member_id').notNull().references(() => users.id),
    role: text('role').default('member'), // owner, admin, member
    joinedAt: integer('joined_at').default(sql`(cast(unixepoch() as int))`),
  },
  (table) => [
    uniqueIndex('team_member_idx').on(table.teamLeadId, table.memberId),
    index('role_idx').on(table.role),
  ]
);

// 11. Security Logs Table
export const securityLogs = sqliteTable(
  'security_logs',
  {
    id: text('id').primaryKey(),
    userId: text('user_id').references(() => users.id),
    action: text('action').notNull(), // login, logout, password_change, etc
    ipAddress: text('ip_address'),
    userAgent: text('user_agent'),
    status: text('status'), // success, failed
    createdAt: integer('created_at').default(sql`(cast(unixepoch() as int))`),
  },
  (table) => [
    index('user_id_idx').on(table.userId),
    index('action_idx').on(table.action),
  ]
);

// 12. IP Blacklist Table
export const ipBlacklist = sqliteTable(
  'ip_blacklist',
  {
    id: text('id').primaryKey(),
    ipAddress: text('ip_address').notNull().unique(),
    reason: text('reason'),
    createdAt: integer('created_at').default(sql`(cast(unixepoch() as int))`),
    expiresAt: integer('expires_at'),
  },
  (table) => [
    uniqueIndex('ip_idx').on(table.ipAddress),
    index('expires_idx').on(table.expiresAt),
  ]
);

// Export all tables
export type User = typeof users.$inferSelect;
export type CV = typeof cvs.$inferSelect;
export type ATSAnalysis = typeof atsAnalysis.$inferSelect;
export type Order = typeof orders.$inferSelect;
export type Payment = typeof payments.$inferSelect;
export type Affiliate = typeof affiliates.$inferSelect;
export type Referral = typeof referrals.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type SavedJob = typeof savedJobs.$inferSelect;
export type TeamMember = typeof teamMembers.$inferSelect;
export type SecurityLog = typeof securityLogs.$inferSelect;
export type IPBlacklist = typeof ipBlacklist.$inferSelect;
