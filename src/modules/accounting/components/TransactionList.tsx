import { Edit3, Trash2 } from 'lucide-react';
import { formatMoney } from '../../../shared/utils/date';
import type { Transaction } from '../types/accounting';

interface TransactionListProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: string) => void;
}

export function TransactionList({ transactions, onEdit, onDelete }: TransactionListProps) {
  if (transactions.length === 0) {
    return <div className="empty">目前還沒有記錄。先新增一筆，讓今天開始有跡可循。</div>;
  }

  return (
    <div>
      {transactions.map((item) => (
        <article className="transaction" key={item.id}>
          <div className="transaction-main">
            <div className="transaction-title">{item.category}</div>
            <div className="transaction-meta">{item.date}{item.note ? ` · ${item.note}` : ''}</div>
          </div>
          <strong className={item.type === 'income' ? 'income' : 'expense'}>
            {item.type === 'income' ? '+' : '-'}{formatMoney(item.amount)}
          </strong>
          <div className="transaction-actions">
            <button className="icon-button" aria-label="編輯" onClick={() => onEdit(item)}><Edit3 size={16} /></button>
            <button className="icon-button" aria-label="刪除" onClick={() => onDelete(item.id)}><Trash2 size={16} /></button>
          </div>
        </article>
      ))}
    </div>
  );
}
