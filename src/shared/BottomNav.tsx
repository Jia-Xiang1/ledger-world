import { Home, NotebookPen, Settings } from 'lucide-react';
export type Tab = 'dashboard' | 'accounting' | 'settings';
export function BottomNav({ active, onChange }: { active: Tab; onChange: (tab: Tab) => void }) {
  const items = [
    { id: 'dashboard' as const, label: '首頁', icon: Home },
    { id: 'accounting' as const, label: '記帳', icon: NotebookPen },
    { id: 'settings' as const, label: '設定', icon: Settings },
  ];
  return <nav className="bottom-nav">{items.map((item) => { const Icon = item.icon; return <button key={item.id} className={`nav-item ${active === item.id ? 'active' : ''}`} onClick={() => onChange(item.id)}><Icon size={20}/><span>{item.label}</span></button>; })}</nav>;
}
