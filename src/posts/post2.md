---
title: 'DockerでReactの開発環境を設定する'
created_at: '2020-02-09'
updated_at: '2020-02-09'
thumbnail: '/images/DockerReact.png'
tag: 'React'
---

# Dockerをインストールする
***
こちらのページが参考になったでこちらを参照してください。

[Windows 10 HomeへのDocker Desktopインストールが何事もなく簡単にできるようになっていた (2020.12時点)](https://qiita.com/zaki-lknr/items/db99909ba1eb27803456)

<br>

# ディレクトリの作成
***

コマンドプロンプトで以下を実行

```python
$ mkdir docker-react
$ cd docker-react
```

<br>

# Dockerfileの作成
***

docker-react/Dockerfileに以下を記載

```python
FROM node:14.5.0-alpine
WORKDIR /usr/src/app
```

# docker-compose.ymlを作成
***

docker-react/docker-compose.ymlに以下を記載

```python
version: '3'
services:
  node:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - ./:/usr/src/app # ローカルとコンテナ内をつなぐ
    command: sh -c "cd react-sample && yarn start"
    ports:
      - "3000:3000"
    stdin_open: true #serverが停止してしまうのを防ぐ
    environment:
      - CHOKIDAR_USEPOLLING=true #変更を反映させる
```

<br>

# コンテナを生成

***
```python
$ docker-compose build
```
<br>

# create-react-app

***
```python
$ docker-compose run --rm node sh -c "npm install -g create-react-app && create-react-app react-sample"
```
<br>

# コンテナを立ち上げる

***
```python
$ docker-compose up
```
<br>

# アクセスする
***
[http://localhost:3000/](http://localhost:3000/ )

ここにアクセスして下のようになればOK!!

<img src="https://user-images.githubusercontent.com/70618595/107318367-f70ce200-6adf-11eb-80c6-d538dc88a91f.png" width="70%">