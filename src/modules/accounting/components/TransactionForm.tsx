import { Save } from 'lucide-react';
import { Button } from '../../../shared/components/Button';
import { todayInputValue } from '../../../shared/utils/date';
import type { Transaction, TransactionDraft, TransactionType } from '../types/accounting';

interface TransactionFormProps {
  draft: TransactionDraft;
  editing: Transaction | null;
  onChange: (draft: TransactionDraft) => void;
  onSubmit: () => void;
  onCancelEdit: () => void;
}

const categories = ['餐飲', '交通', '購物', '薪資', '店務', '其他'];

export function TransactionForm({ draft, editing, onChange, onSubmit, onCancelEdit }: TransactionFormProps) {
  const setField = <K extends keyof TransactionDraft>(key: K, value: TransactionDraft[K]) => onChange({ ...draft, [key]: value });

  return (
    <div className="card x-watermark">
      <h2>{editing ? '編輯記錄' : '新增一筆'}</h2>
      <div className="segment" role="tablist" aria-label="收入支出">
        {(['income', 'expense'] as TransactionType[]).map((type) => (
          <button key={type} className={draft.type === type ? 'active' : ''} onClick={() => setField('type', type)}>
            {type === 'income' ? '收入' : '支出'}
          </button>
        ))}
      </div>
      <div style={{ height: 16 }} />
      <div className="form-row">
        <label className="label" htmlFor="amount">金額</label>
        <input id="amount" className="input" type="number" inputMode="numeric" min="0" placeholder="例如 120" value={draft.amount} onChange={(event) => setField('amount', event.target.value)} />
      </div>
      <div className="form-row">
        <label className="label" htmlFor="category">分類</label>
        <select id="category" className="select" value={draft.category} onChange={(event) => setField('category', event.target.value)}>
          {categories.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
      </div>
      <div className="form-row">
        <label className="label" htmlFor="date">日期</label>
        <input id="date" className="input" type="date" value={draft.date || todayInputValue()} onChange={(event) => setField('date', event.target.value)} />
      </div>
      <div className="form-row">
        <label className="label" htmlFor="note">備註</label>
        <textarea id="note" className="textarea" placeholder="可留空" value={draft.note} onChange={(event) => setField('note', event.target.value)} />
      </div>
      <div className="grid two">
        <Button onClick={onSubmit}><Save size={18} />{editing ? '儲存修改' : '儲存'}</Button>
        {editing ? <Button variant="ghost" onClick={onCancelEdit}>取消</Button> : <Button variant="ghost" onClick={() => onChange({ type: 'expense', amount: '', category: '餐飲', date: todayInputValue(), note: '' })}>清空</Button>}
      </div>
    </div>
  );
}
