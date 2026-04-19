#!/usr/bin/env node
import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const dbPath = resolve(process.cwd(), 'sqlite.db');
const sqlPath = resolve(process.cwd(), 'drizzle/0000_initial_schema.sql');

try {
  // Read SQL file
  const sql = readFileSync(sqlPath, 'utf-8');
  
  // Connect to database
  const sqlite = new Database(dbPath);
  
  // Execute SQL
  sqlite.exec(sql);
  
  // Verify tables
  const tables = sqlite
    .prepare("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name")
    .all();
  
  console.log('✓ Database initialized successfully!');
  console.log(`✓ Created ${tables.length} tables:`);
  tables.forEach((t: any) => {
    console.log(`  - ${t.name}`);
  });
  
  sqlite.close();
  process.exit(0);
} catch (error) {
  console.error('✗ Database initialization failed:', error);
  process.exit(1);
}
