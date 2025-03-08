## Node.js の初期化

```bash
npm init -y
```

## TypeScript のセットアップ

```bash
npm install -D typescript ts-node @types/node
```

- typescript：TypeScript コンパイラ
- ts-node：TypeScript を直接実行できるツール
- @types/node：Node.js の型定義

## TypeScript の設定ファイル作成

```bash
npx tsc --init
```

- tsconfig.json を編集

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

- target: 最新の JavaScript 標準 (ESNext)
- module: Node.js では CommonJS を指定
- rootDir: ソースコードディレクトリ (src)
- outDir: コンパイル後の出力ディレクトリ (dist)
- strict: 厳格な型チェックを有効化
- esModuleInterop: import/require の互換性を向上

## エントリーファイルの作成

- src/index.ts を作成し、以下のコードを追加

```ts
const main = () => {
  console.log("Hello, TypeScript + Node.js!");
};

main();
```

## スクリプトの追加 (package.json)

- package.json に scripts を追加

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "ts-node src/index.ts"
}
```

- build：TypeScript コードをコンパイル
- start：コンパイル後のコードを実行
- dev：ts-node を使って直接実行

## 開発用サーバー (nodemon) の導入

- 変更を検知して自動再起動する nodemon をインストール

```bash
npm install -D nodemon
```

- package.json に dev:start スクリプトを追加：

```json
"scripts": {
  "dev:start": "nodemon --ext ts --exec ts-node src/index.ts"
}
```

## 実行

- ① 開発モードで実行 (nodemon + ts-node)

```bash
npm run dev:start
```

② ビルド & 実行

```bash
npm run build
npm start
```

## ESLint & Prettier の導入 (推奨)

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier
```

- 設定ファイル .eslintrc.json を作成：

```json
{
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

- .prettierrc を作成：

```json
{
  "semi": false,
  "singleQuote": true
}
```

- フォーマット & Lint チェック

```bash
npm run lint
npm run format
```
