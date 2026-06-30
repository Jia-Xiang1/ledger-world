import type { Transaction, TransactionDraft } from '../types/accounting';

const STORAGE_KEY = 'ledger-world.transactions.v1';

export function loadTransactions(): Transaction[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Transaction[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveTransactions(transactions: Transaction[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

export function createTransaction(draft: TransactionDraft): Transaction {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    type: draft.type,
    amount: Number(draft.amount),
    category: draft.category.trim() || '未分類',
    date: draft.date,
    note: draft.note.trim(),
    createdAt: now,
    updatedAt: now
  };
}

export function updateTransaction(original: Transaction, draft: TransactionDraft): Transaction {
  return {
    ...original,
    type: draft.type,
    amount: Number(draft.amount),
    category: draft.category.trim() || '未分類',
    date: draft.date,
    note: draft.note.trim(),
    updatedAt: new Date().toISOString()
  };
}
