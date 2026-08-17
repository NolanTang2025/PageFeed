# PageFeed PWA MVP

一个零依赖静态 PWA 原型，用来验证“像刷社交媒体一样刷 landing page，并做 AI 拆解/收藏/Remix”的产品感觉。

## 运行

```bash
python3 -m http.server 4173
```

然后打开：

```text
http://localhost:4173
```

## 当前功能

- 移动端优先 Feed
- 行业筛选和搜索
- 页面详情拆解
- 本地收藏
- 本地 Remix 生成
- PWA manifest + service worker

## 下一步

- 接 Supabase 登录和云端收藏
- 接 Playwright 截图 worker
- 接 AI 结构化页面分析
- 接 R2 存截图和 HTML 快照
