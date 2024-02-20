FROM node:20.11.1-alpine3.19 as build-stage

ENV TZ Asia/Tokyo

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# 実行ステージ
FROM node:20.11.1-alpine3.19
ENV TZ Asia/Tokyo

WORKDIR /app

# ビルドステージから必要なファイルのみをコピー
COPY --from=build-stage /app/.output ./.output
COPY --from=build-stage /app/package.json ./package.json

RUN npm install --omit=dev --ignore-scripts

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
