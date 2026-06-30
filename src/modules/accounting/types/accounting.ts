export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  category: string;
  date: string;
  note: string;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionDraft {
  type: TransactionType;
  amount: string;
  category: string;
  date: string;
  note: string;
}
