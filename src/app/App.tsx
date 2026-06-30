import { useEffect, useMemo, useState } from 'react';
import type { Transaction, TransactionDraft, TransactionType } from '../types/transaction';
import { loadTransactions, saveTransactions } from '../services/storage';
import { BottomNav, type Tab } from '../shared/BottomNav';
import { Dashboard } from '../modules/dashboard/Dashboard';
import { AccountingPage } from '../modules/accounting/AccountingPage';
import { SettingsPage } from '../modules/settings/SettingsPage';
import { TransactionSheet } from '../modules/accounting/TransactionSheet';
export default function App(){
 const [tab,setTab]=useState<Tab>('dashboard');
 const [records,setRecords]=useState<Transaction[]>(()=>loadTransactions());
 const [sheet,setSheet]=useState<{type:TransactionType;editing?:Transaction|null}|null>(null);
 useEffect(()=>saveTransactions(records),[records]);
 const sorted=useMemo(()=>[...records].sort((a,b)=>b.date.localeCompare(a.date)||b.createdAt.localeCompare(a.createdAt)),[records]);
 const save=(draft:TransactionDraft,id?:string)=>{const amount=Number(draft.amount); if(id){setRecords(prev=>prev.map(r=>r.id===id?{...r,type:draft.type,amount,category:draft.category,date:draft.date,note:draft.note}:r));}else{setRecords(prev=>[{id:crypto.randomUUID(),type:draft.type,amount,category:draft.category,date:draft.date,note:draft.note,createdAt:new Date().toISOString()},...prev]);} setSheet(null); window.setTimeout(()=>alert('🌿 今天又完成一筆生活紀錄。'),50)};
 const del=(id:string)=>{if(confirm('確定刪除這筆紀錄嗎？'))setRecords(prev=>prev.filter(r=>r.id!==id));};
 return <div className="app-shell">{tab==='dashboard'&&<Dashboard records={sorted} onQuickAdd={(type)=>setSheet({type})} onGoAccounting={()=>setTab('accounting')}/>} {tab==='accounting'&&<AccountingPage records={sorted} onAdd={()=>setSheet({type:'expense'})} onEdit={(editing)=>setSheet({type:editing.type,editing})} onDelete={del}/>} {tab==='settings'&&<SettingsPage/>}<BottomNav active={tab} onChange={setTab}/>{sheet&&<TransactionSheet initialType={sheet.type} editing={sheet.editing} onClose={()=>setSheet(null)} onSave={save}/>}</div>;
}
