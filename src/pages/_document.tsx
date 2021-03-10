import Document, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument