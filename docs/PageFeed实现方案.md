# PageFeed 实现方案

## 一句话

像刷社交媒体一样刷企业 landing page / HTML，并让 AI 帮你拆解它为什么能卖、哪里值得学、能不能改写成你的版本。

## 核心判断

第一版不要做成“网页收藏夹”，那会很无聊。它必须有一个立刻让人想继续刷的瞬间：

> 我刷到一个页面，3 秒知道它卖什么，10 秒看懂它的转化结构，30 秒可以收藏/拆解/改写成我自己的 landing page。

所以产品不是“收集网页”，而是：

- 发现好页面
- 看懂页面策略
- 收藏成自己的 swipe file
- 用 AI 把别人的结构转成自己的文案/页面

## 第一版用户

优先做给这些人：

- 独立开发者
- SaaS / AI 工具创始人
- 出海产品和外贸团队
- 增长/市场/内容负责人
- landing page 设计师
- 帮客户做官网/落地页的 agency

先不要做给“大众用户”。企业页面不是大众娱乐内容，第一版要偏专业刷灵感和拆竞品。

## 产品结构

### 1. Feed 信息流

用户打开就是可刷页面流。

每张卡片包含：

- landing page 截图
- 公司名 / 产品名
- 一句话解释它卖什么
- 行业标签
- 页面类型：SaaS、AI 工具、外贸、agency、app、infra、devtool 等
- AI 提炼的核心 offer
- CTA
- 收藏按钮
- 查看拆解按钮

第一版可以上下刷，后面再做左右滑。

### 2. AI 拆解页

点击某个页面后，进入详细拆解。

拆解字段：

- 这家公司卖什么
- 目标用户是谁
- 核心痛点
- 核心承诺
- 首屏标题
- 副标题
- CTA 文案
- 页面结构
- 定价是否露出
- 社会证明：客户 logo、评价、案例、数据
- 转化路径
- 页面亮点
- 可学习的文案模式
- 可能的问题

关键是不要写得像 SEO 审计报告，要写得像一个很懂增长的人在旁边讲：

> 它首屏厉害的地方是没有讲功能，而是先讲了 buyer 想要的结果。

### 3. 收藏夹 / Swipe File

用户可以按用途收藏：

- 首屏标题
- CTA
- Pricing
- Demo request
- 社会证明
- AI Agent 页面
- B2B SaaS 页面
- Developer tool 页面
- 外贸转化页

这个是长期留存点。

### 4. AI 改写 / Remix

这是最应该优先做的付费功能。

用户输入：

- 我的产品是什么
- 面向谁
- 想参考哪个页面
- 想生成首屏 / 整页结构 / CTA / Pricing copy

输出：

- 参考该页面结构生成的新首屏
- 3 个标题方向
- 一版完整 landing page outline
- CTA 文案
- 可直接给设计/开发用的 section 列表

一句话：不是只看别人怎么写，而是马上帮我写我的。

## 技术架构

## 最小成本上线平台

### 如果它理论上应该是 App

第一版不要做 iOS 原生 App，也不要交 Apple Developer Program 年费。Apple 官方当前仍标注 Apple Developer Program 为 99 美元/年；对现在这个验证阶段来说，这笔钱不是最大问题，真正的问题是 App Store 审核、上架素材、版本发布、原生开发和用户安装门槛都会拖慢验证。

更适合的方式是：

> 做一个移动端优先的 PWA / H5，让用户像用 App 一样从手机打开、收藏到桌面、全屏浏览。

落地方式：

- 用 Next.js 做移动端优先 Web App。
- 加 `manifest.json`、App icon、启动图、主题色，让它可以 Add to Home Screen。
- 首页做成全屏 feed，不要像网页后台。
- 移动端底部导航：Feed、收藏、Remix、我的。
- 分享链接直接打开页面，不强迫下载。
- 后续有用户和收入后，再用 Capacitor / Expo 包成 iOS / Android。

为什么 PWA 最适合 PageFeed：

- 不需要 Apple 开发者账号。
- 不需要 App Store 审核。
- 分享传播更顺，点链接就能看。
- 产品本质是内容流 + 收藏 + AI 生成，Web 很适合。
- 后续如果真的需要原生能力，可以复用同一套前端逻辑。

需要接受的限制：

- iOS 上用户需要手动“添加到主屏幕”，不能像 App Store 那样自然安装。
- iOS Web Push 虽然已经支持，但通常要求用户先把 Web App 加到主屏幕，并从主屏幕打开后授权。
- 离线能力、后台任务、原生分享体验会比原生 App 弱。

但这些都不是第一版核心。第一版只需要验证：

> 用户会不会在手机上刷 landing page，并收藏/Remix。

所以阶段路线：

1. **PWA/H5**：0 iOS 成本，最快验证。
2. **Android APK / Google Play**：如果需要，Android 上架成本和门槛通常更低。
3. **iOS 原生壳**：有留存/付费后，再交 Apple 开发者年费。
4. **真正原生 App**：当需要强推送、离线、本地缓存、系统级分享、原生手势时再做。

### 推荐组合

第一版用：

- 前端和 API：Vercel
- 数据库/Auth：Supabase
- 截图和 HTML 快照存储：Cloudflare R2
- 抓取/截图 worker：先本地脚本或手动触发，不要一开始常驻云服务
- AI 分析：先用你已有 API key，批量处理前 100-200 个页面

这个组合的好处：

- 上线快，Next.js 直接部署。
- 数据库、登录、收藏夹可以很快搭起来。
- R2 存截图便宜，且对外分发没有传统对象存储 egress 压力。
- 抓取任务先本地跑，可以避免早期为了几十个页面付 worker/server 钱。
- 后续如果真有人用，再把抓取 worker 挪到 Railway / Render / Cloudflare Workers / 独立 VPS。

### 为什么不先上纯 no-code

Lovable / Replit / Bolt 适合快速搭壳，但 PageFeed 的关键在：

- 批量抓页面
- Playwright 截图
- HTML 清洗
- AI 结构化分析
- 存大量图片和快照
- 后续可能做竞品监控

这些不是纯前端原型，后面很容易撞到平台 credit、任务时长、存储、后台 worker 的限制。可以用 AI builder 辅助写 UI，但生产底座建议还是 Vercel + Supabase + R2。

### 预算预估

冷启动/验证期：

- Vercel Hobby：0 美元/月，只适合个人/非商业验证。
- Supabase Free：0 美元/月，够 100-200 个页面和少量内测用户。
- Cloudflare R2 Free：0 美元/月，10GB-month 够存早期截图。
- AI API：按量，先控制在 100-200 个页面分析。
- 域名：可先不用；要正式一点再买。

如果开始收钱/公开商业化：

- Vercel Pro：20 美元/月起。
- Supabase Pro：25 美元/月起。
- R2：早期通常仍很低。
- AI API：按 remix 次数和页面分析次数计费，是最需要限额的地方。

### 第一版成本控制原则

- 不做实时抓取，先做精选库。
- 不让用户无限提交 URL。
- 每个新页面先进入待审核队列。
- AI 分析缓存结果，不重复分析同一个页面。
- Remix 设每日/月度次数限制。
- 截图压缩成 webp，保留原图但限制大小。
- 不存所有历史快照，第一版只存最新版。

### 什么时候升级

出现这些信号再升级：

- 内测用户每天都回来刷。
- 收藏和 remix 使用率明显。
- 100-200 个页面不够看，需要持续入库。
- 用户愿意付费或愿意邀请同事使用。
- 抓取/截图变成瓶颈，才单独上 worker。

### 推荐技术栈

前端：

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui 或自定义轻组件

后端：

- Next.js API routes / server actions 起步即可
- 后续再拆 worker 服务

数据库：

- Supabase Postgres
- pgvector 做语义搜索

文件存储：

- Supabase Storage / S3 / Cloudflare R2
- 存截图、HTML 快照、favicon

页面抓取：

- Playwright
- 第一版可以本地或轻 worker 跑
- 后续用队列异步处理

AI：

- OpenAI / 兼容 API
- 第一版用结构化 JSON 输出
- 对页面内容和截图生成摘要、标签、拆解

搜索：

- 第一版 Postgres full text + pgvector
- 后续可以加 Meilisearch / Typesense / Elasticsearch

### 数据流程

1. 输入 URL

来源可以是：

- 你手动录入
- 用户提交
- Product Hunt / directories / 自建清单
- 外贸/SaaS/AI 工具榜单

2. 抓取页面

Playwright 打开页面，生成：

- desktop screenshot
- mobile screenshot
- full-page screenshot
- title
- meta description
- HTML
- 可见文本
- H1/H2
- links
- buttons / CTA
- pricing keyword
- tech hints

3. 清洗内容

从 HTML 中提取：

- 首屏文案
- section 顺序
- CTA 文案
- 表单字段
- FAQ
- pricing
- testimonial
- logo wall
- 页面语言

4. AI 结构化分析

让模型输出统一 JSON：

```json
{
  "product_name": "",
  "company_name": "",
  "category": "",
  "target_audience": "",
  "core_offer": "",
  "pain_points": [],
  "hero_headline": "",
  "hero_subheadline": "",
  "primary_cta": "",
  "secondary_cta": "",
  "page_structure": [],
  "proof_points": [],
  "pricing_visible": true,
  "positioning_summary": "",
  "copywriting_patterns": [],
  "design_patterns": [],
  "conversion_notes": [],
  "tags": []
}
```

5. 存储

核心表：

- pages
- page_snapshots
- page_analysis
- tags
- collections
- saved_pages
- users
- remix_jobs

6. Feed 排序

第一版排序逻辑：

- 人工精选优先
- 新增页面优先
- 用户选择的行业标签优先
- 收藏率高的页面优先

后续可以做：

- 根据用户收藏行为推荐
- 根据用户产品类型推荐
- 根据相似页面推荐
- 根据“我想学某种转化结构”推荐

## 数据模型草案

### pages

- id
- url
- canonical_url
- domain
- title
- description
- favicon_url
- language
- status
- created_at
- updated_at

### page_snapshots

- id
- page_id
- screenshot_desktop_url
- screenshot_mobile_url
- html_snapshot_url
- text_snapshot
- captured_at
- viewport
- http_status

### page_analysis

- id
- page_id
- product_name
- company_name
- category
- target_audience
- core_offer
- hero_headline
- hero_subheadline
- primary_cta
- page_structure_json
- proof_points_json
- pricing_visible
- positioning_summary
- copywriting_patterns_json
- design_patterns_json
- conversion_notes_json
- tags_json
- embedding
- model
- analyzed_at

### collections

- id
- user_id
- name
- description
- created_at

### saved_pages

- id
- user_id
- page_id
- collection_id
- note
- created_at

### remix_jobs

- id
- user_id
- source_page_id
- product_brief
- output_type
- result_json
- created_at

## 7 天 MLP

### Day 1：手动数据集

- 收集 100 个 landing page
- 先聚焦 3 类：AI 工具、B2B SaaS、外贸服务
- 手动标注 5-8 个标签

### Day 2：截图和抽取脚本

- 用 Playwright 批量截图
- 保存 desktop / mobile screenshot
- 抽取 title、meta、H1/H2、CTA、正文文本

### Day 3：AI 分析

- 写结构化 prompt
- 每个页面生成 JSON 分析
- 人工抽查 20 个，修 prompt

### Day 4：Feed UI

- 做首页信息流
- 支持行业筛选
- 支持搜索
- 支持点击进入详情页

### Day 5：收藏夹

- 登录可以先用 magic link / GitHub / Google
- 支持收藏到默认 collection
- 支持给页面加 note

### Day 6：Remix 功能

- 用户输入自己的产品描述
- 选择一个参考页面
- 生成：首屏标题、副标题、CTA、页面结构

### Day 7：内测

- 找 20 个用户
- 每人完成 3 个动作：刷 10 个页面、收藏 3 个、remix 1 次
- 记录他们是否觉得“这个比自己搜 landing page 快很多”

## 第一版页面

### 首页 / Feed

必须好刷，不要像数据库后台。

布局：

- 左侧筛选：行业、页面类型、目标用户、语言
- 中间主 feed：大截图 + AI 一句话拆解
- 右侧可选：当前页面的关键拆解

移动端：

- 单列卡片
- 截图优先
- 点开后看拆解

### 页面详情

结构：

- 截图
- AI summary
- Hero 拆解
- CTA 拆解
- 页面结构
- 可学习点
- Remix 按钮

### Remix 页面

输入：

- 我的产品
- 我的目标用户
- 想要的语气
- 想参考哪个页面

输出：

- 3 个标题
- 首屏文案
- 页面 section outline
- CTA
- 小红书/推特/LinkedIn 宣发文案可选

## MLP 体验标准

第一版最重要的不是功能多，而是“刷起来有爽感”。

必须做到：

- 截图大而清楚
- 每张卡 3 秒内看懂卖什么
- AI 拆解不要废话
- 收藏要快
- Remix 输出要能直接复制
- 标签要有判断力，不要全是泛词

用户应该产生的感觉：

> 我本来只是想找灵感，结果它直接帮我看懂了竞品。

## 付费设计

免费：

- 每天刷固定数量页面
- 每月 3 次 remix
- 收藏数量有限

Pro：

- 无限收藏
- 更多 remix
- 导出 swipe file
- 按行业/竞品建 collection
- AI 深度拆解

Team / Agency：

- 团队 collection
- 客户项目分组
- 竞品监控
- 每周页面变化摘要
- 白标导出报告

## 增长入口

最容易传播的内容不是产品本身，而是页面拆解。

可以自动生成：

- “这个 AI 产品的首屏为什么有效”
- “10 个高转化 CTA”
- “本周 20 个值得收藏的 SaaS landing page”
- “外贸网站首页常见 5 个错误”
- “我用 PageFeed 拆了 30 个 AI Agent 官网”

这些可以发小红书、X、即刻、公众号、LinkedIn。

## 法务和风控

第一版尽量保守：

- 只抓公开页面
- 不抓登录后内容
- 不绕过 paywall
- 不保存敏感个人信息
- 尊重 robots.txt 和站点限制
- 截图和 HTML 快照只用于分析与引用，不要包装成对方授权素材
- 允许站点 owner 请求移除

## 先不要做的东西

- 不要做浏览器插件
- 不要做完整竞品监控系统
- 不要做复杂团队权限
- 不要做网页编辑器
- 不要做全自动大规模爬虫
- 不要一开始就做社交评论区

这些都可以后面做。第一版只证明一个问题：

> 创业者/增长/设计师会不会像刷内容一样刷 landing page，并愿意用 AI 拆解和 remix。

## 最小成功标准

7 天内：

- 100 个精选页面入库
- 20 个内测用户
- 每人平均浏览 20+ 页面
- 每人平均收藏 3+ 页面
- 至少 8 人使用 remix
- 至少 5 人说愿意继续用
- 至少 3 人愿意付费

如果达不到：

- 先检查页面质量是不是不够精选
- 再检查 AI 拆解是不是太泛
- 最后才判断需求不成立
