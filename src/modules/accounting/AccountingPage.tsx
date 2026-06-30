import { Plus } from 'lucide-react';
import type { Transaction } from '../../types/transaction';
import { TransactionList } from './TransactionList';
export function AccountingPage({records,onAdd,onEdit,onDelete}:{records:Transaction[];onAdd:()=>void;onEdit:(r:Transaction)=>void;onDelete:(id:string)=>void}){
 return <main style={{display:'flex',flexDirection:'column',gap:18}}><section className="card"><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}><div><h1 className="page-title" style={{margin:'0 0 6px'}}>記帳</h1><div style={{color:'var(--muted)',fontWeight:700}}>慢慢累積，也是一種進步。</div></div><button className="btn btn-primary" onClick={onAdd} style={{display:'flex',alignItems:'center',gap:6}}><Plus size={18}/>新增</button></div></section><section className="card"><h2 className="page-title" style={{fontSize:26,marginTop:0}}>所有紀錄</h2><TransactionList records={records} onEdit={onEdit} onDelete={onDelete}/></section></main>
}
