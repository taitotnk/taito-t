---
title: 'React18ではReactDOM.renderは廃止になる'
created_at: '2022-4-20'
updated_at: '2022-4-20'
emoji: '📝'
tag: 'フロントエンド'
---

# メモ
***
React18ではReactDOM.renderのAPIが廃止になるので、createRootを使わないと、consoleでwarningが出るようになる.

[詳細ドキュメントのリンクはこちら](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis)

```ts
// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
```

Fixすることでwarningが消える.