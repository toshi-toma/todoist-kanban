# Todoist APIについて

## 概要
Sync APIとREST APIの2種類が用意されている

- [Sync API | API Documantaion](https://developer.todoist.com/sync/v7/)
- [REST API | API Documantaion](https://doist.github.io/todoist-api/rest/v8/)

Sync APIはREST APIに比べて豊富な機能が揃っているが、REST APIのほうが扱いやすい。  
また、REST APIでプロジェクト、タスク、ラベル周りの機能は揃っているのでREST APIを利用するので良さそう。

## 認証
認証方法はいくつか用意されている

- APIトークン(シンプル)
- OAuth | Todoist App
  - [Todoist App Management](https://developer.todoist.com/appconsole.html)で作成可能
