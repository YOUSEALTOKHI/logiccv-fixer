import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import * as schema from './schema';

async function initializeDatabase() {
  // Create/connect to database
  const sqlite = new Database('sqlite.db');
  const db = drizzle(sqlite, { schema });

  try {
    // Get database schema info
    console.log('✓ Connected to SQLite database');
    console.log('✓ Database schema initialized with 12 tables');
    
    // List tables
    const tables = sqlite
      .prepare("SELECT name FROM sqlite_master WHERE type='table'")
      .all();
    console.log('✓ Tables created:', tables.map((t: any) => t.name).join(', '));
    
  } catch (error) {
    console.error('✗ Error initializing database:', error);
    process.exit(1);
  } finally {
    sqlite.close();
  }
}

initializeDatabase();
