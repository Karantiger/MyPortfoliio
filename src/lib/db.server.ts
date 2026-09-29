// SQLite storage layer (Node's built-in node:sqlite driver).
//
// The database file lives at SQLITE_DB_PATH (default ./data/portfolio.db) and is
// created + seeded from src/content/* on first use, so a fresh checkout always
// has the full portfolio content available.
import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

import { projects as projectSeed } from "./portfolio-data";
import { experienceSeed } from "../content/experience";
import { educationSeed } from "../content/education";
import { skillGroupsSeed, conceptsSeed } from "../content/skills";
import { achievementsSeed } from "../content/achievements";
import type { CollectionKey, SiteSettings } from "./collections";
import { SITE_NAME, SITE_TAGLINE, TWITTER_HANDLE, DEFAULT_OG_IMAGE } from "./site";

let db: DatabaseSync | undefined;

const DB_PATH = resolve(process.env["SQLITE_DB_PATH"] ?? "data/portfolio.db");

export const defaultSettings: SiteSettings = {
  siteTitle: `${SITE_NAME} — ${SITE_TAGLINE}`,
  siteDescription:
    "Portfolio of Karan Kumar Bind, a Computer Science student and Java developer building web and mobile applications with Java, Spring Boot, React and MySQL.",
  ogImage: DEFAULT_OG_IMAGE,
  googleSiteVerification: "",
  bingSiteVerification: "",
  twitterHandle: TWITTER_HANDLE,
  keywords:
    "Karan Kumar Bind, Java developer, full stack developer, computer science student, Spring Boot, React, portfolio",
};

export function getDb(): DatabaseSync {
  if (db) return db;

  mkdirSync(dirname(DB_PATH), { recursive: true });
  const database = new DatabaseSync(DB_PATH);
  database.exec("PRAGMA journal_mode = WAL");
  database.exec("PRAGMA foreign_keys = ON");

  database.exec(`
    CREATE TABLE IF NOT EXISTS content_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      collection TEXT NOT NULL,
      position INTEGER NOT NULL DEFAULT 0,
      data TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_content_collection ON content_items (collection, position);

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      is_read INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  db = database;
  seed(database);
  return database;
}

function seedCollection(database: DatabaseSync, collection: string, rows: unknown[]) {
  const count = database
    .prepare("SELECT COUNT(*) AS count FROM content_items WHERE collection = ?")
    .get(collection) as { count: number };
  if (count.count > 0) return;

  const insert = database.prepare(
    "INSERT INTO content_items (collection, position, data) VALUES (?, ?, ?)",
  );
  rows.forEach((row, index) => insert.run(collection, index, JSON.stringify(row)));
}

function seed(database: DatabaseSync) {
  seedCollection(database, "projects", projectSeed);
  seedCollection(database, "experience", experienceSeed);
  seedCollection(database, "education", educationSeed);
  seedCollection(database, "skills", skillGroupsSeed);
  seedCollection(database, "achievements", achievementsSeed);
  seedCollection(database, "concepts", conceptsSeed);

  const setSetting = database.prepare(
    "INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO NOTHING",
  );
  for (const [key, value] of Object.entries(defaultSettings)) {
    setSetting.run(key, String(value));
  }
}

export type StoredRecord = {
  id: number;
  position: number;
  data: Record<string, unknown>;
  updatedAt: string;
};

export function listItems(collection: CollectionKey | "concepts"): StoredRecord[] {
  const rows = getDb()
    .prepare(
      "SELECT id, position, data, updated_at FROM content_items WHERE collection = ? ORDER BY position ASC, id ASC",
    )
    .all(collection) as { id: number; position: number; data: string; updated_at: string }[];

  return rows.map((row) => ({
    id: row.id,
    position: row.position,
    data: JSON.parse(row.data) as Record<string, unknown>,
    updatedAt: row.updated_at,
  }));
}

export function itemData<T>(collection: CollectionKey | "concepts", fallback: T[]): T[] {
  const items = listItems(collection);
  if (items.length === 0) return fallback;
  return items.map((item) => item.data as T);
}

export function createItem(collection: string, data: Record<string, unknown>): number {
  const database = getDb();
  const next = database
    .prepare("SELECT COALESCE(MAX(position), -1) + 1 AS pos FROM content_items WHERE collection = ?")
    .get(collection) as { pos: number };
  const result = database
    .prepare("INSERT INTO content_items (collection, position, data) VALUES (?, ?, ?)")
    .run(collection, next.pos, JSON.stringify(data));
  return Number(result.lastInsertRowid);
}

export function updateItem(collection: string, id: number, data: Record<string, unknown>) {
  getDb()
    .prepare(
      "UPDATE content_items SET data = ?, updated_at = datetime('now') WHERE id = ? AND collection = ?",
    )
    .run(JSON.stringify(data), id, collection);
}

export function deleteItem(collection: string, id: number) {
  getDb()
    .prepare("DELETE FROM content_items WHERE id = ? AND collection = ?")
    .run(id, collection);
}

export function moveItem(collection: string, id: number, direction: "up" | "down") {
  const items = listItems(collection as CollectionKey);
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return;
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (swapWith < 0 || swapWith >= items.length) return;

  const update = getDb().prepare(
    "UPDATE content_items SET position = ? WHERE id = ? AND collection = ?",
  );
  update.run(items[swapWith].position, items[index].id, collection);
  update.run(items[index].position, items[swapWith].id, collection);
}

export function getSettings(): SiteSettings {
  const rows = getDb().prepare("SELECT key, value FROM settings").all() as {
    key: string;
    value: string;
  }[];
  const stored = Object.fromEntries(rows.map((row) => [row.key, row.value]));
  return { ...defaultSettings, ...stored } as SiteSettings;
}

export function saveSettings(values: Partial<SiteSettings>) {
  const statement = getDb().prepare(
    "INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
  );
  for (const [key, value] of Object.entries(values)) {
    if (key in defaultSettings) statement.run(key, String(value ?? ""));
  }
}

export type MessageRow = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: number;
  created_at: string;
};

export function insertMessage(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  getDb()
    .prepare("INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)")
    .run(input.name, input.email, input.subject, input.message);
}

export function listMessages(): MessageRow[] {
  return getDb()
    .prepare("SELECT * FROM messages ORDER BY created_at DESC, id DESC")
    .all() as MessageRow[];
}

export function markMessageRead(id: number, isRead: boolean) {
  getDb()
    .prepare("UPDATE messages SET is_read = ? WHERE id = ?")
    .run(isRead ? 1 : 0, id);
}

export function deleteMessage(id: number) {
  getDb().prepare("DELETE FROM messages WHERE id = ?").run(id);
}

export function countItems(collection: string): number {
  const row = getDb()
    .prepare("SELECT COUNT(*) AS count FROM content_items WHERE collection = ?")
    .get(collection) as { count: number };
  return row.count;
}

export function countUnreadMessages(): number {
  const row = getDb()
    .prepare("SELECT COUNT(*) AS count FROM messages WHERE is_read = 0")
    .get() as { count: number };
  return row.count;
}
