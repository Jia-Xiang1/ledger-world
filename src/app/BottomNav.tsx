import { BookOpen, Home, Settings } from 'lucide-react';
import type { AppPage } from '../types/navigation';

interface BottomNavProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

const items: Array<{ page: AppPage; label: string; icon: typeof Home }> = [
  { page: 'dashboard', label: '首頁', icon: Home },
  { page: 'accounting', label: '記帳', icon: BookOpen },
  { page: 'settings', label: '設定', icon: Settings }
];

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="主要導覽">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <button key={item.page} className={`nav-item ${currentPage === item.page ? 'active' : ''}`} onClick={() => onNavigate(item.page)}>
            <Icon size={20} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
