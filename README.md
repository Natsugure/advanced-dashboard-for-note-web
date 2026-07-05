# Advanced Dashboard for note (Web)

[note](https://note.com/) のクリエイター向けに、記事の統計データ（ビュー・コメント・スキ 等）をグラフや表で見やすく可視化する非公式Webダッシュボードです。

note 本体には過去データの一覧性やグラフ表示機能が乏しいため、専用の Chrome 拡張機能で取得した統計データを本サービスのAPIに送信し、このダッシュボード上で推移グラフや記事別ランキングとして閲覧できるようにしています。

> **Note:** 本サービスは非公式のファンサービスであり、note株式会社および note 公式サービスとは一切関係ありません。

## 主な機能

- **推移タブ**: ビュー・コメント数などの日次推移を折れ線グラフで表示
- **記事別タブ**: 記事ごとの統計を棒グラフ・テーブルで表示
- **デモページ** (`/demo`): 会員登録前でもモックデータでダッシュボードを体験可能
- **会員認証**: [Clerk](https://clerk.com/) によるサインアップ・ログイン
- Chrome 拡張機能未連携時のオンボーディング導線（ヘルプページ・ストア誘導）

## 技術スタック

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)（ビルド、`@rolldown/plugin-babel` 経由で React Compiler を有効化）
- [React Router v7](https://reactrouter.com/)
- [Mantine](https://mantine.dev/)（UIコンポーネント・チャート・通知）/ [Recharts](https://recharts.org/)
- [Clerk](https://clerk.com/)（認証）
- [openapi-fetch](https://openapi-ts.dev/openapi-fetch/) / [openapi-typescript](https://openapi-ts.dev/)（バックエンドAPIとの型安全な通信）
- パッケージ管理: [pnpm](https://pnpm.io/)

## セットアップ

### 前提条件

- Node.js
- pnpm
- [バックエンドAPIサーバー（別リポジトリ）](https://github.com/Natsugure/advanced-dashboard-for-note-api)

### インストール

```bash
pnpm install
```

### 環境変数

`.env.example` を参考に `.env` を作成し、以下を設定してください。

| 変数名 | 説明 |
| --- | --- |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk の Publishable Key |
| `VITE_API_BASE_URL` | バックエンドAPIのベースURL |

Clerk のルーティング関連の環境変数（サインイン/サインアップURL等）は `.env.example` にデフォルト値が記載済みです。

### 開発サーバーの起動

```bash
pnpm dev
```

## スクリプト

| コマンド | 説明 |
| --- | --- |
| `pnpm dev` | 開発サーバーを起動 |
| `pnpm build` | 型チェック後、本番用ビルドを生成 |
| `pnpm preview` | ビルド成果物をローカルでプレビュー |
| `pnpm lint` | ESLint によるコード検査 |
| `pnpm generate:api-types` | ローカルのバックエンドAPI（`http://localhost:8787/docs`）のOpenAPIスキーマから型定義 (`src/types/api.ts`) を生成 |

## ディレクトリ構成

```
src/
├── features/          # 機能単位のモジュール
│   ├── auth/          # 認証（Clerk連携、ログイン/サインアップ）
│   ├── dashboard/     # ダッシュボード本体（推移・記事別タブ）
│   ├── demo/          # 未登録ユーザー向けデモ（モックデータ）
│   ├── help/          # ヘルプ、利用規約、プライバシーポリシー
│   ├── promotion/     # トップ（未ログイン時のLP）
│   └── settings/      # 設定ページ
├── infrastructures/   # API通信フック（openapi-fetch ベース）
├── routers/           # ルーティング定義
├── shared/            # 共通レイアウト・コンポーネント
└── types/             # OpenAPIスキーマから生成された型定義
```
