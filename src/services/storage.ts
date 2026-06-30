import type { Transaction } from '../types/transaction';
const KEY = 'ledger-world-transactions-v1';
export function loadTransactions(): Transaction[] {
  try { const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : []; } catch { return []; }
}
export function saveTransactions(records: Transaction[]) { localStorage.setItem(KEY, JSON.stringify(records)); }
