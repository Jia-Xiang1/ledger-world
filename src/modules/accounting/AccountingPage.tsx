import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Card } from '../../shared/components/Card';
import { PageHeader } from '../../shared/components/PageHeader';
import { formatMoney, todayInputValue } from '../../shared/utils/date';
import { TransactionForm } from './components/TransactionForm';
import { TransactionList } from './components/TransactionList';
import { createTransaction, loadTransactions, saveTransactions, updateTransaction } from './services/accountingStorage';
import { getMonthStats, getTodayStats } from './services/accountingStats';
import type { Transaction, TransactionDraft } from './types/accounting';

const initialDraft: TransactionDraft = {
  type: 'expense',
  amount: '',
  category: '餐飲',
  date: todayInputValue(),
  note: ''
};

export function AccountingPage() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => loadTransactions());
  const [draft, setDraft] = useState<TransactionDraft>(initialDraft);
  const [editing, setEditing] = useState<Transaction | null>(null);
  const [keyword, setKeyword] = useState('');

  useEffect(() => saveTransactions(transactions), [transactions]);

  const todayStats = useMemo(() => getTodayStats(transactions), [transactions]);
  const monthStats = useMemo(() => getMonthStats(transactions), [transactions]);
  const filtered = useMemo(() => {
    const normalized = keyword.trim().toLowerCase();
    const sorted = [...transactions].sort((a, b) => `${b.date}${b.createdAt}`.localeCompare(`${a.date}${a.createdAt}`));
    if (!normalized) return sorted;
    return sorted.filter((item) => `${item.category} ${item.note} ${item.date}`.toLowerCase().includes(normalized));
  }, [keyword, transactions]);

  const submit = () => {
    if (!draft.amount || Number(draft.amount) <= 0) {
      alert('請輸入有效金額');
      return;
    }
    if (editing) {
      setTransactions((items) => items.map((item) => item.id === editing.id ? updateTransaction(item, draft) : item));
      setEditing(null);
    } else {
      setTransactions((items) => [createTransaction(draft), ...items]);
    }
    setDraft(initialDraft);
  };

  const edit = (transaction: Transaction) => {
    setEditing(transaction);
    setDraft({
      type: transaction.type,
      amount: String(transaction.amount),
      category: transaction.category,
      date: transaction.date,
      note: transaction.note
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const remove = (id: string) => {
    if (!confirm('確定要刪除這筆記錄嗎？')) return;
    setTransactions((items) => items.filter((item) => item.id !== id));
  };

  return (
    <main className="page">
      <PageHeader title="記帳" subtitle="收入與支出，都在這裡慢慢整理。" />
      <div className="grid two">
        <Card>
          <p className="muted">今日收入</p>
          <div className="stat-value income">{formatMoney(todayStats.income)}</div>
        </Card>
        <Card>
          <p className="muted">今日支出</p>
          <div className="stat-value expense">{formatMoney(todayStats.expense)}</div>
        </Card>
      </div>
      <div style={{ height: 16 }} />
      <Card>
        <p className="muted">本月結餘</p>
        <div className={`stat-value ${monthStats.balance >= 0 ? 'income' : 'expense'}`}>{formatMoney(monthStats.balance)}</div>
      </Card>
      <div style={{ height: 16 }} />
      <TransactionForm draft={draft} editing={editing} onChange={setDraft} onSubmit={submit} onCancelEdit={() => { setEditing(null); setDraft(initialDraft); }} />
      <div style={{ height: 16 }} />
      <Card>
        <h2>最近記錄</h2>
        <div className="form-row">
          <label className="label" htmlFor="search">搜尋</label>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: 16, top: 16, color: 'var(--color-muted)' }} />
            <input id="search" className="input" style={{ paddingLeft: 46 }} placeholder="分類、備註或日期" value={keyword} onChange={(event) => setKeyword(event.target.value)} />
          </div>
        </div>
        <TransactionList transactions={filtered} onEdit={edit} onDelete={remove} />
      </Card>
    </main>
  );
}
