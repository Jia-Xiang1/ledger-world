# Changelog

## v0.1.1-alpha.1 - Foundation Aurora Deploy

### 新增

- 新增 GitHub Actions 自動部署流程。
- 新增 GitHub Pages 部署文件。
- 新增 `.gitattributes`，統一換行格式。
- 新增 `.editorconfig`，統一編輯器格式。
- 調整 Vite `base` 為 `/ledger-world/`，適配 GitHub Pages 專案網址。

### 改善

- 更新 App 版本顯示。
- 更新 Service Worker cache 名稱。
- 更新 README 部署說明。

## v0.1.0-alpha.1 - Foundation Aurora

### 新增

- 建立 React + TypeScript + Vite 專案。
- 建立暖色手帳風 Design Token。
- 新增 Dashboard 首頁。
- 新增記帳模組：新增、編輯、刪除、搜尋。
- 新增設定中心：系統資訊、開發日誌、更新紀錄。
- 新增 PWA manifest、Service Worker 與 X App Icon。
- 新增 README、ROADMAP、Design System 文件。

### 已知限制

- 目前資料儲存在手機／瀏覽器本機 localStorage。
- 尚未串接 Supabase。
- 尚未加入圖表統計。


## v0.1.2-alpha.1 - Deployment fix

### 修正

- 修正 GitHub Actions 在安裝相依套件時失敗的問題。
- 將 Node.js 版本調整為 20 LTS。
- 修正 package-lock 來源網址，避免指向非公開 registry。
