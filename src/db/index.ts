import Database from "better-sqlite3";
import path from "path";

const isProd = process.env.NODE_ENV === "production";
// Use in-memory SQLite for now to support free deployment tiers (like Render Free).
// When you subscribe to a paid Render plan, we can swap this back to a persistent file path.
const dbPath = isProd ? ":memory:" : path.resolve(process.cwd(), "data.db");

let db: Database.Database;

export function initDb() {
  db = new Database(dbPath);

  // Create tables
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      name TEXT,
      email TEXT,
      phone TEXT,
      business_name TEXT,
      service TEXT,
      budget_range TEXT,
      timeline TEXT,
      status TEXT DEFAULT 'new',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS appointments (
      id TEXT PRIMARY KEY,
      lead_id TEXT,
      requested_time TEXT,
      timezone TEXT,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(lead_id) REFERENCES leads(id)
    );

    CREATE TABLE IF NOT EXISTS chat_logs (
      id TEXT PRIMARY KEY,
      session_id TEXT,
      role TEXT,
      content TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

export function getDb() {
  if (!db) {
    initDb();
  }
  return db;
}
