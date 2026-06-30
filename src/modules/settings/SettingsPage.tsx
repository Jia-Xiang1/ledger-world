import { Card } from '../../shared/components/Card';
import { PageHeader } from '../../shared/components/PageHeader';
import { appConfig } from '../../app/app.config';

const sections = [
  { title: '個人設定', body: '預留：名稱、常用分類、顯示偏好。' },
  { title: '介面設定', body: '目前固定暖色手帳風；主題切換日後再加入。' },
  { title: '備份與還原', body: '目前資料存在本機；下一階段可匯出 JSON，後續串接 Supabase。' },
  { title: '系統資訊', body: `${appConfig.appName} · ${appConfig.version} · ${appConfig.productLine}` },
  { title: '開發日誌', body: 'Foundation Alpha：建立 Dashboard、記帳、設定、PWA、模組化架構與 GitHub Actions 自動部署。' },
  { title: '更新紀錄', body: 'v0.1.1-alpha.1：加入 GitHub Actions 自動部署、GitHub Pages 設定與換行格式規範。' },
  { title: '關於', body: appConfig.slogan }
];

export function SettingsPage() {
  return (
    <main className="page">
      <PageHeader title="設定" subtitle="系統相關內容統一放在這裡。" />
      <div className="grid">
        {sections.map((section) => (
          <Card key={section.title}>
            <h2>{section.title}</h2>
            <p className="muted" style={{ marginBottom: 0 }}>{section.body}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
