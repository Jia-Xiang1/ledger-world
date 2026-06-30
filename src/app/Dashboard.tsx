import { BookOpen, Settings } from 'lucide-react';
import { Card } from '../shared/components/Card';
import { Button } from '../shared/components/Button';
import { formatMoney } from '../shared/utils/date';
import type { AppPage } from '../types/navigation';
import { loadTransactions } from '../modules/accounting/services/accountingStorage';
import { getMonthStats, getTodayStats } from '../modules/accounting/services/accountingStats';
import { appConfig } from './app.config';

interface DashboardProps {
  onNavigate: (page: AppPage) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const transactions = loadTransactions();
  const today = getTodayStats(transactions);
  const month = getMonthStats(transactions);

  return (
    <main className="page">
      <header className="header">
        <div className="brand">
          <div className="brand-mark">X</div>
          <div>
            <h1>{appConfig.appName}</h1>
            <p className="muted">{appConfig.slogan}</p>
          </div>
        </div>
      </header>
      <Card className="x-watermark">
        <h2>今天也要好好生活</h2>
        <p className="muted">把每一筆記錄留下來，未來會更清楚。</p>
      </Card>
      <div style={{ height: 16 }} />
      <div className="grid two">
        <Card>
          <p className="muted">今日收入</p>
          <div className="stat-value income">{formatMoney(today.income)}</div>
        </Card>
        <Card>
          <p className="muted">今日支出</p>
          <div className="stat-value expense">{formatMoney(today.expense)}</div>
        </Card>
      </div>
      <div style={{ height: 16 }} />
      <Card>
        <p className="muted">本月結餘</p>
        <div className={`stat-value ${month.balance >= 0 ? 'income' : 'expense'}`}>{formatMoney(month.balance)}</div>
      </Card>
      <div style={{ height: 16 }} />
      <Card>
        <h2>模組</h2>
        <div className="grid two">
          <Button onClick={() => onNavigate('accounting')}><BookOpen size={18} />記帳</Button>
          <Button variant="ghost" onClick={() => onNavigate('settings')}><Settings size={18} />設定</Button>
        </div>
      </Card>
    </main>
  );
}
