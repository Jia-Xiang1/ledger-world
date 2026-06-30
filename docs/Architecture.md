# Architecture

## 原則

1. 每個模組獨立。
2. 共用元件放在 `shared/`。
3. 資料處理放在 `services/`。
4. 型別獨立管理。
5. 首頁只顯示常用模組入口。
6. 系統資訊統一放在設定中心。

## 目前資料流

```text
UI
↓
Accounting services
↓
localStorage
```

## 未來資料流

```text
UI
↓
Module service
↓
Supabase client
↓
Supabase database
```
