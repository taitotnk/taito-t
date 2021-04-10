---
title: '初めてのハッカソン ~オンライン開発合宿vol.1~ に参加した'
created_at: '2020-03-27'
updated_at: '2020-03-27'
thumbnail: '/images/geek-project-post.jpg'
tag: 'ハッカソン'
---


# ハッカソンに参加してきた
***
先日にサポーターズさん主催の「初めてのハッカソン　~オンライン開発合宿vol.1~」に  
友人の[アリーカくん](https://twitter.com/aleeeeeca)と二人で参加してきました。

なんとメンターには、VOYAGE GROUP現役エンジニアの[三浦さん](https://twitter.com/hironomiu)が深夜まで
フルサポートで支援して下さりました。（遅くまでありがとうございます。）

またなんとなんと、、、  
特別ゲスト&審査員に株式会社DeNAのCTO [小林さん](https://twitter.com/nekokak)まで来てくださりました！！  

審査員&盛り上げ役にサポーターズ代表 [楓さん](https://twitter.com/kaepon1219)、司会&盛り上げ役に[上野さん](https://twitter.com/nacopaguu)（このお二人が盛り上げてくれたおかげで緊張せずに最後まで頑張ることができました！）  
という豪華すぎだろ、、、って感じの体制で開催してくださりました。本当にありがとうございますm(__)m

<br>

# 参加した経緯
***
- 今までインプットばかりしていてアウトプットができていなかった
- 単純にハッカソンに参加してみたかった
- 久しぶりにチーム開発したかった  
  
ざっとこんな感じです。

<br>

# ハッカソンの内容
***
- 開催期間：3月20日~21日の2日間
- テーマ：自由
- 使用ツール：Zoom, Slack
<br>

# 作成したもの
***
## Morpho music（読み方：モーフォミュージック）
<img src="https://taito-t.com/images/morphomusic_logo.jpg" width="100%">  

これは、LINEで受けっとたメッセージを形態素解析して、解析結果を使って曲検索を行ってくれるLINEボットアプリです。  
名前についてる**Morpho**は**Morphological**（形態学的）からとっています。

**↓こちらからMorphomusicを追加できます(詳しい機能はこちらで紹介しています)** 
[https://morphomusic.netlify.app/](Morphomusic)
  
<br>

# 作成した理由
***
- 同じような曲ばかりきいてしまうので、音楽の幅を広げたかったから
- 新しい曲を探す方法が少ないと感じたから
- 単純に形態素解析を使ってみたかったから
- Messaging APIを使ってみたかったから
  
<br>

# 形態素解析ってなに？
***
簡単に説明すると、私たちが普段使っている言葉「自然言語」の単語の意味が分かる最小単位まで分割する技術のことです。  

**例)**

- **今日の天気は良いですね**  

- **今日/の/天気/は/良い/です/ね**  

こんな感じに分析してくれます。

<br>

# 使用技術
***
<img src="https://taito-t.com/images/post4_architecture.jpg" width="100%"> 
↑簡易版を自分で作成してみました。  
<br>

<img src="/images/post4_architecture_detail.jpg" width="100%">  
↑詳しいアーキテクチャ図はアリーカ君に作成してもらいました。

<br>


# バックエンドを担当した
***
自分は主にBotとその周辺を担当しました。  

**担当場所**
- Bot
- DB
- Messaging API
- GCP Natural Language API
- iTunes Search API

<br>

# Botの解説
***
使用ライブラリなど
```toml
[tool.poetry]
name = "morphomusic"
version = "0.1.0"
description = ""
authors = ["Your Name <you@example.com>"]

[tool.poetry.dependencies]
python = "^3.8"
Django = "^3.1.7"
django-cors-headers = "^3.7.0"
line-bot-sdk = "^1.19.0"
requests = "^2.25.1"
psycopg2 = "^2.8.6"
django-heroku = "^0.3.1"
gunicorn = "^20.0.4"

[tool.poetry.dev-dependencies]
flake8 = "^3.9.0"
autopep8 = "^1.5.6"

[build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"

```
<br>

今回はBotServerをDjangoで作成しています。
また、短期間で急いで開発しているので、雑なコードになっている可能性がありますのでご了承ください...

```python
#api/models.py

from django.db import models
import datetime


class Lineuser(models.Model):
    user_id = models.CharField(max_length=256)
    stop = models.BooleanField(default=False)


class Song(models.Model):
    line_user = models.ForeignKey(Lineuser, on_delete=models.CASCADE)
    song_name = models.CharField(max_length=128)
    artist_name = models.CharField(max_length=128)
    buy_url = models.URLField()
    artwork_url = models.URLField()
    created_date = models.DateTimeField(default=datetime.datetime.now)

```
今回はapiとbotのアプリをDjangoプロジェクトで立ち上げているので、apiのほうでmodel管理をしています。

<br>

```python
#bot/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('callback/', views.callback)
]

```
'callback/'を叩くと、views.pyのcallback関数が呼ばれます。


<br>

```python
#bot/views.py

from django.conf import settings
from django.http import HttpResponse, HttpResponseForbidden
import json
import requests
import urllib
import re
from django.views.decorators.csrf import csrf_exempt
from api.models import Song, Lineuser
from linebot import (
    LineBotApi, WebhookHandler
)
from linebot.exceptions import (
    InvalidSignatureError, LineBotApiError
)
from linebot.models import (
    MessageEvent, TextMessage, TextSendMessage, StickerSendMessage,
)
```
views.pyで処理を書いていきます。
viwes.pyは約300行のコードとなっているので上から分解しながら説明していきます。  
必要なモジュールを適宜importします。

<br>

```python
#bot/views.py

# アクセストークンとシークレットの取得
line_bot_api = LineBotApi(
    channel_access_token=settings.LINE_CHANNEL_ACCESS_TOKEN)
handler = WebhookHandler(channel_secret=settings.LINE_CHANNEL_SECRET)


@csrf_exempt
def callback(request):
    # ヘッダーから署名のための値抽出
    signature = request.META['HTTP_X_LINE_SIGNATURE']
    # リクエストのボディ抽出
    body = request.body.decode('utf-8')

    try:
        # 署名検証が通れば関数呼び出し
        handler.handle(body, signature)

    except LineBotApiError as err:
        print("LINE Messaging API Error: %s\n" % err.message)

    except InvalidSignatureError:
        # 署名検証失敗のときは例外
        return HttpResponseForbidden()
    return HttpResponse('OK', status=200)
```
callback関数はこんな感じになっています。  
一番上の**LINE_CHANNEL_ACCESS_TOKEN**と**LINE_CHANNEL_SECRET**は適宜自分で取得したものに置き換えてください。  
また、CSRF検証を無効化したいので、**@csrf_exempt**これを忘れずにつけます。

<br>

```python
#bot/views.py

@handler.add(MessageEvent, message=TextMessage)
def handle_song_message(event):
    # 送信されたメッセージ
    text = event.message.text
    # 送信したユーザーのuserId
    user_id = event.source.user_id
```

上のcallback関数で認証が通ればこの関数が呼ばれます。  
この関数はメッセージのイベントでかつそのメッセージがテキストメッセージだった場合に呼び出されます。  
ここでtext変数に送信されたテキストメッセージの内容とuser_id変数にユーザーのIDを格納します。

<br>

```python
#bot/views.py

#送信されたメッセージが20文字より多い場合はエラー処理
if len(text) > 20:
    Lineuser_obj = Lineuser.objects.get(user_id=user_id)
    # 停止されていれば20文字以上のメッセージを送信できる
    if Lineuser_obj.stop is False:
        line_bot_api.reply_message(
            event.reply_token,
            [
                TextSendMessage(text="20文字以下のメッセージを送ってください"),
                StickerSendMessage(package_id="11537",
                                    sticker_id="52002739")
            ]
        )
```
ここで送られてきたメッセージが20文字以上だったらエラー処理をします。  
送信される文字が多いと、その分単語数が増えてしまい、１度にたくさんの曲情報が出力されてしまうので制限を設けました。  
しかし、LineuserモデルのstopカラムがTrueだった場合は、ボットが停止状態なので、20文字以上の文字が送れるようにしています。

<br>

```python
#bot/views.py

elif text == "履歴":
        line_bot_api.reply_message(
            event.reply_token,
            [
                TextSendMessage(text="こちらから履歴が見られます" + "\n"
                                "URL: https://liff.line.me/1655768482-PVW85dOD")
            ]
        )
elif text == "停止":
    Lineuser_obj = Lineuser.objects.get(user_id=user_id)
    # すでに停止状態
    if Lineuser_obj.stop is True:
        line_bot_api.reply_message(
            event.reply_token,
            [
                TextSendMessage(text="既にbotは停止状態です。")
            ]
        )
    # 停止されていなければ停止状態に更新する
    else:
        Lineuser_obj.stop = True
        Lineuser_obj.save()
        line_bot_api.reply_message(
            event.reply_token,
            [
                TextSendMessage(text="bot返信機能を停止しました。")
            ]
        )
elif text == "解除":
    Lineuser_obj = Lineuser.objects.get(user_id=user_id)
    # 停止されていれば解除する
    if Lineuser_obj.stop is True:
        Lineuser_obj.stop = False
        Lineuser_obj.save()
        line_bot_api.reply_message(
            event.reply_token,
            [
                TextSendMessage(text="bot返信機能の停止を解除しました。")
            ]
        )
    # 停止されていなければそのまま
    else:
        line_bot_api.reply_message(
            event.reply_token,
            [
                TextSendMessage(text="停止していないので解除状態です。")
            ]
        )
```
送信されたメッセージが"履歴"だったら個人の曲情報の履歴が見れるページのURLを返します。  
メッセージが"停止"だったら、LineuserモデルのstopカラムをTrue更新します。（既にTrueだったら"既にbotは停止状態です。"というメッセージを返します。）  
メッセージが"解除"だった場合は、stopカラムをFalseに更新します。（既にFalseだった場合は"停止していないので解除状態です。"というメッセージを返します。）  

続きは長くなるので今回はここまでで