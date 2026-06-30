import type { Transaction } from '../../types/transaction';
export function TransactionList({ records, onEdit, onDelete, limit }: { records: Transaction[]; onEdit?: (record: Transaction) => void; onDelete?: (id: string) => void; limit?: number }) {
  const list = limit ? records.slice(0, limit) : records;
  if (list.length === 0) return <div className="empty">🌿<br/>今天還沒有任何紀錄<br/>按下新增，開始留下第一筆生活。</div>;
  return <div>{list.map((r)=><div className="transaction" key={r.id}><div><div style={{fontWeight:900}}>{r.category}</div><div style={{fontSize:13,color:'var(--muted)',marginTop:4}}>{r.date}{r.note ? ` · ${r.note}` : ''}</div></div><div style={{textAlign:'right'}}><div className="amount" style={{fontSize:18,color:r.type==='income'?'var(--income)':'var(--expense)'}}>{r.type==='income'?'+':'-'}NT${r.amount.toLocaleString()}</div>{onEdit && <div style={{display:'flex',gap:8,marginTop:8,justifyContent:'flex-end'}}><button className="tag" onClick={()=>onEdit(r)}>編輯</button>{onDelete && <button className="tag" style={{color:'var(--expense)'}} onClick={()=>onDelete(r.id)}>刪除</button>}</div>}</div></div>)}</div>;
}
