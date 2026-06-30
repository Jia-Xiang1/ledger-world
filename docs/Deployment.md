# GitHub Pages 部署說明

本專案使用 GitHub Actions 自動部署到 GitHub Pages。

## 第一次設定

1. 將此版本覆蓋到 `ledger-world` Repository。
2. 使用 GitHub Desktop Commit 並 Push。
3. 到 GitHub Repository：`Settings` → `Pages`。
4. 將 Source 改為 **GitHub Actions**。
5. 到 `Actions` 分頁確認 `Deploy Ledger World to GitHub Pages` 執行成功。
6. 網址為：`https://jia-xiang1.github.io/ledger-world/`

## 之後更新

之後每次只需要：

1. 覆蓋新版本檔案。
2. GitHub Desktop Commit。
3. Push origin。
4. GitHub Actions 會自動 build 並部署。

## 注意

- 不需要手動上傳 `dist`。
- 不需要手動執行 `npm run build`。
- 如果 Actions 失敗，先檢查 `Actions` 分頁中的錯誤訊息。
