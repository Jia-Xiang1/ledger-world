import { useState } from 'react';
import { Dashboard } from './Dashboard';
import { BottomNav } from './BottomNav';
import { AccountingPage } from '../modules/accounting/AccountingPage';
import { SettingsPage } from '../modules/settings/SettingsPage';
import type { AppPage } from '../types/navigation';

export function App() {
  const [page, setPage] = useState<AppPage>('dashboard');

  return (
    <div className="app-shell">
      {page === 'dashboard' ? <Dashboard onNavigate={setPage} /> : null}
      {page === 'accounting' ? <AccountingPage /> : null}
      {page === 'settings' ? <SettingsPage /> : null}
      <BottomNav currentPage={page} onNavigate={setPage} />
    </div>
  );
}
