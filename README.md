# 記帳天地 Ledger World

> 記錄生活，掌握每一天。

記帳天地是一款暖色手帳風的個人記帳 PWA，採 React + TypeScript + Vite 製作，並以 GitHub Pages 部署。

## 目前版本

`v0.1.1-alpha.1` — Foundation Aurora

## 已完成

- Dashboard 首頁
- 記帳模組：新增、編輯、刪除、搜尋
- 設定中心：系統資訊、開發日誌、更新紀錄
- 暖色手帳風 Design Token
- PWA：manifest、service worker、X App Icon
- GitHub Actions 自動部署 GitHub Pages
- `.gitattributes` 與 `.editorconfig` 基礎規範

## 本機開發

```bash
npm install
npm run dev
```

## 建置

```bash
npm run build
```

## GitHub Pages 部署

本專案已內建 GitHub Actions。Push 到 `main` 後會自動建置並部署。

第一次使用請到：

`Settings` → `Pages` → `Source` → 選擇 **GitHub Actions**

詳見：[`docs/Deployment.md`](docs/Deployment.md)

## 專案結構

```text
src/
├── app
├── modules
│   ├── accounting
│   └── settings
├── shared
├── styles
└── types
```

## 目前限制

- 資料暫存在瀏覽器本機 `localStorage`。
- 尚未串接 Supabase。
- 尚未加入圖表統計。
