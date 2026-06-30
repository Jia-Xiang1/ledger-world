import type { AppPage } from '../types/navigation';

export const appConfig = {
  appName: '記帳天地',
  englishName: 'Ledger World',
  codeName: 'Project X',
  version: '0.1.1-alpha.1',
  slogan: '記錄生活，掌握每一天。',
  productLine: 'Foundation Aurora',
  modules: [
    { id: 'accounting' as AppPage, label: '記帳', icon: 'BookOpen', enabled: true, order: 1 },
    { id: 'settings' as AppPage, label: '設定', icon: 'Settings', enabled: true, order: 99 }
  ]
};
