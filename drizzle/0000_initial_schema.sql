-- CVLogic Database Schema Migration

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT,
  first_name TEXT,
  last_name TEXT,
  language TEXT DEFAULT 'en',
  phone_number TEXT,
  country TEXT,
  company_name TEXT,
  account_type TEXT DEFAULT 'free',
  created_at INTEGER DEFAULT (cast(unixepoch() as int)),
  updated_at INTEGER DEFAULT (cast(unixepoch() as int))
);
CREATE UNIQUE INDEX IF NOT EXISTS email_idx ON users(email);
CREATE INDEX IF NOT EXISTS account_type_idx ON users(account_type);

-- 2. CVs Table
CREATE TABLE IF NOT EXISTS cvs (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT,
  raw_text TEXT,
  is_analyzed INTEGER DEFAULT 0,
  created_at INTEGER DEFAULT (cast(unixepoch() as int)),
  updated_at INTEGER DEFAULT (cast(unixepoch() as int)),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE INDEX IF NOT EXISTS cvs_user_id_idx ON cvs(user_id);
CREATE INDEX IF NOT EXISTS cvs_created_at_idx ON cvs(created_at);

-- 3. ATS Analysis Table
CREATE TABLE IF NOT EXISTS ats_analysis (
  id TEXT PRIMARY KEY,
  cv_id TEXT NOT NULL UNIQUE,
  user_id TEXT NOT NULL,
  ats_score INTEGER,
  keywords TEXT,
  suggestions TEXT,
  strengths TEXT,
  weaknesses TEXT,
  parsing_accuracy REAL,
  created_at INTEGER DEFAULT (cast(unixepoch() as int)),
  FOREIGN KEY (cv_id) REFERENCES cvs(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE INDEX IF NOT EXISTS ats_user_id_idx ON ats_analysis(user_id);

-- 4. Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  plan TEXT NOT NULL,
  amount REAL NOT NULL,
  status TEXT DEFAULT 'pending',
  payment_id TEXT,
  created_at INTEGER DEFAULT (cast(unixepoch() as int)),
  completed_at INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE INDEX IF NOT EXISTS orders_user_id_idx ON orders(user_id);
CREATE INDEX IF NOT EXISTS orders_status_idx ON orders(status);

-- 5. Payments Table
CREATE TABLE IF NOT EXISTS payments (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  amount REAL NOT NULL,
  currency TEXT DEFAULT 'USD',
  method TEXT,
  status TEXT DEFAULT 'pending',
  transaction_id TEXT UNIQUE,
  created_at INTEGER DEFAULT (cast(unixepoch() as int)),
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE INDEX IF NOT EXISTS payments_user_id_idx ON payments(user_id);
CREATE INDEX IF NOT EXISTS payments_status_idx ON payments(status);

-- 6. Affiliates Table
CREATE TABLE IF NOT EXISTS affiliates (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  affiliate_code TEXT NOT NULL UNIQUE,
  commission REAL DEFAULT 0,
  commission_rate REAL DEFAULT 0.1,
  status TEXT DEFAULT 'active',
  created_at INTEGER DEFAULT (cast(unixepoch() as int)),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE UNIQUE INDEX IF NOT EXISTS affiliates_code_idx ON affiliates(affiliate_code);
CREATE INDEX IF NOT EXISTS affiliates_commission_idx ON affiliates(commission);

-- 7. Referrals Table
CREATE TABLE IF NOT EXISTS referrals (
  id TEXT PRIMARY KEY,
  affiliate_id TEXT NOT NULL,
  referred_user_id TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  conversion_value REAL DEFAULT 0,
  created_at INTEGER DEFAULT (cast(unixepoch() as int)),
  converted_at INTEGER,
  FOREIGN KEY (affiliate_id) REFERENCES affiliates(id),
  FOREIGN KEY (referred_user_id) REFERENCES users(id)
);
CREATE INDEX IF NOT EXISTS referrals_affiliate_id_idx ON referrals(affiliate_id);
CREATE INDEX IF NOT EXISTS referrals_status_idx ON referrals(status);

-- 8. Messages Table
CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY,
  sender_id TEXT NOT NULL,
  recipient_id TEXT NOT NULL,
  subject TEXT,
  body TEXT NOT NULL,
  is_read INTEGER DEFAULT 0,
  created_at INTEGER DEFAULT (cast(unixepoch() as int)),
  FOREIGN KEY (sender_id) REFERENCES users(id),
  FOREIGN KEY (recipient_id) REFERENCES users(id)
);
CREATE INDEX IF NOT EXISTS messages_recipient_id_idx ON messages(recipient_id);
CREATE INDEX IF NOT EXISTS messages_created_at_idx ON messages(created_at);

-- 9. Saved Jobs Table
CREATE TABLE IF NOT EXISTS saved_jobs (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  job_title TEXT NOT NULL,
  company TEXT NOT NULL,
  description TEXT,
  url TEXT,
  match REAL,
  created_at INTEGER DEFAULT (cast(unixepoch() as int)),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE INDEX IF NOT EXISTS saved_jobs_user_id_idx ON saved_jobs(user_id);
CREATE INDEX IF NOT EXISTS saved_jobs_match_idx ON saved_jobs(match);

-- 10. Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
  id TEXT PRIMARY KEY,
  team_lead_id TEXT NOT NULL,
  member_id TEXT NOT NULL,
  role TEXT DEFAULT 'member',
  joined_at INTEGER DEFAULT (cast(unixepoch() as int)),
  FOREIGN KEY (team_lead_id) REFERENCES users(id),
  FOREIGN KEY (member_id) REFERENCES users(id)
);
CREATE UNIQUE INDEX IF NOT EXISTS team_members_idx ON team_members(team_lead_id, member_id);
CREATE INDEX IF NOT EXISTS team_members_role_idx ON team_members(role);

-- 11. Security Logs Table
CREATE TABLE IF NOT EXISTS security_logs (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  action TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  status TEXT,
  created_at INTEGER DEFAULT (cast(unixepoch() as int)),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE INDEX IF NOT EXISTS security_logs_user_id_idx ON security_logs(user_id);
CREATE INDEX IF NOT EXISTS security_logs_action_idx ON security_logs(action);

-- 12. IP Blacklist Table
CREATE TABLE IF NOT EXISTS ip_blacklist (
  id TEXT PRIMARY KEY,
  ip_address TEXT NOT NULL UNIQUE,
  reason TEXT,
  created_at INTEGER DEFAULT (cast(unixepoch() as int)),
  expires_at INTEGER
);
CREATE UNIQUE INDEX IF NOT EXISTS ip_blacklist_idx ON ip_blacklist(ip_address);
CREATE INDEX IF NOT EXISTS ip_blacklist_expires_idx ON ip_blacklist(expires_at);
