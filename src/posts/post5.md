---
title: '【備忘録】next/imageのsrcで外部URLを使用する場合'
created_at: '2020-11-01'
updated_at: '2020-11-01'
emoji: '📝'
tag: 'Next.js'
---


# お久しぶりです
***
随分とブログを書くのをサボってしまったTaitoです.

なぜこんなにも書くのをサボってしまったのか考えてみたところ、技術ブログを書くという行動のハードルが高かったのかなと感じています.

これからはハードルを下げて、エラーなどで詰まってしまった際の備忘録など、メモ程度でもブログを更新していこうと思います！

# next/imageでsrcに外部URLを指定する際の注意点
***
いつもNext.jsを使用する際にお世話になる`next/image`は、画像の最適化をよしなにやってくれたりなど
非常に便利なコンポーネントです.

私もよく利用させていただくのですが、srcに外部URLを指定したい時などあると思います.(自分の場合は、Firebase auth のGoogleログインで取得したプロフィール画像をsrcに指定する場合)

**"When using an external URL, you must add it to domains in next.config.js."**

上記のようにドキュメントには、next.config.jsの外部URLのドメインを追加する必要があると書かれています.

[next/imageのドキュメント](https://nextjs.org/docs/api-reference/next/image#:~:text=When%20using%20an%20external%20URL%2C%20you%20must%20add%20it%20to%20domains%20in%20next.config.js.)

```js
// next.config.js

module.exports = {
    images: {
        domains: ["lh3.googleusercontent.com"],
        // よしなにdomainsのところを自分が使用したいドメインに置き換えてください
    },
}
```

こんなかんじでnext/imageが使えるようになります.