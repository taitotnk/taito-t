---
title: 'Next.jsとTypeScriptでポートフォリオ作り変えた'
created_at: '2020-03-03'
updated_at: '2020-03-09'
thumbnail: '/images/next.jpg'
tag: 'TypeScript'
---


# Hello World
***
こんにちは。コロナ渦でなかなか外出できない中、大学生は春休みです...

春休みはGoに入門してみたり、英語の勉強少しずつ始めてみたり、地味に充実してます。

そんな中なぜポートフォリオを作り替えたのかについて記事を記録したいと思います。

(しれっと独自ドメインをGoogle Domainsで取得しました！！ URLを見ていただけると確認できます。)

<br>

# 作り替えた理由
***
- 表示速度が遅すぎる(自分の設定が悪いかも？)
- TypeScriptを使ってみたい
- SSR, SSGを体験してみたい(ページ移動がロードなしでぬるっと切り替わるやつ)

こんな感じです。

#### 前のポートフォリオはこちら↓
[https://taito-blog.herokuapp.com/](https://taito-blog.herokuapp.com/)

しばらく待てば開けるはず、、、

<br>

# 開発環境
***
```json
//package.json

{
  "name": "myportfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "@mdx-js/loader": "^1.6.22",
    "@next/mdx": "^10.0.8",
    "gray-matter": "^4.0.2",
    "highlight.js": "^10.6.0",
    "next": "10.0.7",
    "postcss": "^8.2.7",
    "react": "17.0.1",
    "react-dom": "17.0.1",
    "remark": "^13.0.0",
    "remark-highlight.js": "^6.0.0",
    "remark-html": "^13.0.1",
    "remark-slug": "^6.0.0",
    "remark-toc": "^7.2.0",
    "tailwindcss": "^2.0.3"
  },
  "devDependencies": {
    "@types/node": "^14.14.31",
    "@types/react": "^17.0.2",
    "postcss-preset-env": "^6.7.0",
    "typescript": "^4.2.3"
  }
}

```

# まとめ
***

詳しい実装方法等は、また後で書きます。

前のポートフォリオと比較しても速度が大違いです。

後々、タグ検索とかの機能も追加していきたいと思います。

よかったらフィードバックとかしてもらえると嬉しいです！

