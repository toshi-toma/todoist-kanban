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

## REST API

[API Documantaion](https://doist.github.io/todoist-api/rest/v8/)

### 認証について
  - Authorization headerに`Bearer $token`を付与する
  - `Bearer $token`はTodoist personal API tokenまたはOAuth API token
  
### プロジェクト
[プロジェクト | API Documantaion](https://doist.github.io/todoist-api/rest/v8/#projects)

#### 全プロジェクト取得

URI: https://beta.todoist.com/API/v8/projects  
METHOD: GET

```js
fetch('https://beta.todoist.com/API/v8/projects',
 {
   headers: {
     Authorization: `Bearer ${API_TOKEN}`
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

[
    {
        "id": 1234,
        "name": "Inbox",
        "comment_count": 10,
        "order": 1,
        "indent": 1
    }
]
```

### タスク

#### 全タスク取得

[API Documantaion](https://doist.github.io/todoist-api/rest/v8/#get-active-tasks)

URI: https://beta.todoist.com/API/v8/tasks  
METHOD: GET

```js
fetch('https://beta.todoist.com/API/v8/tasks',
 {
   headers: {
     Authorization: `Bearer ${API_TOKEN}`
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

[
    {
        "id": 123,
        "project_id": 234,
        "content": "Inbox",
        "comment_count": 10,
        "order": 1,
        "indent": 1,
        "priority": 1,
        "url": "https://todoist.com/showTask?id=123"
    },
    ...
]
```

#### タスク情報の更新

[API Documantaion](https://doist.github.io/todoist-api/rest/v8/#get-active-tasks)

URI: https://beta.todoist.com/API/v8/tasks/{Id}  
METHOD: POST

```js

var data = {content: "any tasks"};

fetch('https://beta.todoist.com/API/v8/tasks/2992089009',
 {
    method: "POST",
    headers: {
     'Authorization': `Bearer ${API_TOKEN}`,
     "X-Request-Id": '57635133-1208-4684-9a85-5a358bb8c016',
     "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

```
