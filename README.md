# telele-apps

## 初期設定

ルートディレクトリで以下コマンドを実行

```sh
yarn install
```

## 各アプリのコマンド実行

ルートからは以下コマンド

```sh
# 例（Storybook実行）
yarn client sb
# 例（Next.js起動）
yarn client dev
```

各アプリのディレクトリに移動すればアプリ内の script 実行可能

```sh
cd apps/client
yarn sb
```

## 開発用 DB のビルド

```sh
docker-compose build
```

## 開発用 DB の実行

```sh
docker-compose up -d
```

## game-service の DB マイグレーション

```sh
yarn game-service prisma generate

yarn game-service prisma migrate dev
```

## game-service の DB を リセットし DB へ反映(本番では使用しない)

```sh
yarn game-service prisma migrate reset
```

## game-service seed で データを投入

```sh
 yarn game-service prisma db seed
```

## Prisma の GUI ツール起動

```sh
yarn game-service prisma studio
```

## Generate Protobuf

```sh
bash protobuf.sh <ディレクトリ名> <protoファイル名>
```
