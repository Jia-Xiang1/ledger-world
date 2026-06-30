import type { Transaction } from '../types/accounting';
import { isSameDay, isSameMonth } from '../../../shared/utils/date';

export function sumByType(transactions: Transaction[], type: 'income' | 'expense'): number {
  return transactions.filter((item) => item.type === type).reduce((total, item) => total + item.amount, 0);
}

export function getTodayStats(transactions: Transaction[]) {
  const today = transactions.filter((item) => isSameDay(item.date));
  const income = sumByType(today, 'income');
  const expense = sumByType(today, 'expense');
  return { income, expense, balance: income - expense };
}

export function getMonthStats(transactions: Transaction[]) {
  const month = transactions.filter((item) => isSameMonth(item.date));
  const income = sumByType(month, 'income');
  const expense = sumByType(month, 'expense');
  return { income, expense, balance: income - expense };
}
