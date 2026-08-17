const landingPages = [
  {
    id: "linear",
    company: "Linear",
    title: "Issue tracking with taste",
    url: "https://linear.app",
    domain: "linear.app",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flinear.app?w=1200",
    filters: ["saas", "devtool"],
    kind: "B2B SaaS",
    tags: ["Productivity", "Design-led", "Team workflow"],
    summary: "把项目管理从功能清单变成速度感和秩序感，首屏几乎不解释功能，先卖工作流的质感。",
    offer: "A faster way to build products",
    cta: "Start building",
    audience: "产品团队、工程团队、创业公司",
    pain: "任务系统太慢、太散、太像行政工具。",
    structure: ["结果型 headline", "产品动画/截图", "高密度客户 logo", "功能模块拆分", "团队协作 proof"],
    patterns: ["少讲功能，多讲速度和手感。", "黑白灰基调压住工具感，让产品显得更高级。", "CTA 不像销售动作，更像开始使用。"],
    investor: {
      stage: "Series A+",
      scale: "全球 PLG 团队工具，付费意愿明确",
      signal: "工程/产品团队愿意为速度和协作秩序付费，品类有明确预算。",
      thesis: "适合看 Devtool / B2B SaaS 的投资人，重点看团队工作流替代和 PLG 扩张。",
      risk: "项目管理赛道拥挤，需要证明迁移成本和组织级留存。",
    },
  },
  {
    id: "vercel",
    company: "Vercel",
    title: "Front-end cloud, but bigger",
    url: "https://vercel.com",
    domain: "vercel.com",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fvercel.com?w=1200",
    filters: ["devtool", "saas"],
    kind: "Devtool",
    tags: ["Infra", "Developer", "Enterprise"],
    summary: "从部署平台升级成前端云，首屏把开发者速度和企业级基础设施合在一起讲。",
    offer: "Build and deploy the best web experiences",
    cta: "Start deploying",
    audience: "前端团队、平台工程、增长型技术公司",
    pain: "前端发布链路慢，性能和协作分散。",
    structure: ["强定位 headline", "开发者 proof", "产品能力分层", "企业客户背书", "文档入口"],
    patterns: ["把技术复杂度翻译成发布速度。", "用生态和客户规模建立安全感。", "CTA 和开发动作绑定，而不是泛泛注册。"],
    investor: {
      stage: "Growth",
      scale: "开发者生态 + 企业客户双轮驱动",
      signal: "从工具扩成云平台，ARPU 和企业化空间比单点部署工具更大。",
      thesis: "适合看 Infra / Devtool 的投资人，重点看生态入口和平台化能力。",
      risk: "基础设施产品需要持续压住毛利、性能和竞品替代压力。",
    },
  },
  {
    id: "supabase",
    company: "Supabase",
    title: "Open source Firebase alternative",
    url: "https://supabase.com",
    domain: "supabase.com",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsupabase.com?w=1200",
    filters: ["devtool", "saas"],
    kind: "Backend",
    tags: ["Open source", "Database", "Auth"],
    summary: "直接占位 Firebase alternative，降低用户理解成本，再用数据库、Auth、Storage 等模块补齐购买理由。",
    offer: "Build in a weekend, scale to millions",
    cta: "Start your project",
    audience: "独立开发者、创业团队、全栈工程师",
    pain: "自己搭后端太慢，传统 BaaS 又怕锁定。",
    structure: ["类比定位", "模块化能力", "代码片段", "开源信任", "模板入口"],
    patterns: ["用一个熟悉对标完成定位。", "把技术选择包装成创业速度。", "开源是信任资产，不只是标签。"],
    investor: {
      stage: "Series A",
      scale: "开源社区 + 云托管商业化",
      signal: "强对标降低理解成本，开源 adoption 可转化为托管收入。",
      thesis: "适合看 Devtool / Infra 的投资人，重点看开源势能如何变成云收入。",
      risk: "开源用户多不等于付费强，需要看托管转化和企业安全需求。",
    },
  },
  {
    id: "framer",
    company: "Framer",
    title: "Design ships as a website",
    url: "https://framer.com",
    domain: "framer.com",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fframer.com?w=1200",
    filters: ["saas", "commerce"],
    kind: "Website builder",
    tags: ["Design", "No-code", "Marketing site"],
    summary: "卖点不是建站，而是把设计师手里的视觉直接变成上线页面，降低设计到发布的摩擦。",
    offer: "Design and publish stunning sites",
    cta: "Start for free",
    audience: "设计师、创始人、营销团队",
    pain: "设计稿好看，但上线慢、还原差。",
    structure: ["视觉强首屏", "模板/案例", "交互动效", "CMS 能力", "团队协作"],
    patterns: ["让用户先被视觉说服。", "把 no-code 讲成 creative control。", "模板不是素材库，是成交样板。"],
    investor: {
      stage: "Series A+",
      scale: "创作者 + 营销团队付费工具",
      signal: "把设计和发布合并，缩短营销站上线周期，天然适合模板和生态扩张。",
      thesis: "适合看 SaaS / Creator tooling 的投资人，重点看设计师入口和团队协作扩张。",
      risk: "No-code 建站竞争激烈，需要证明差异化审美和发布效率。",
    },
  },
  {
    id: "stripe",
    company: "Stripe",
    title: "Payments as infrastructure",
    url: "https://stripe.com",
    domain: "stripe.com",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fstripe.com?w=1200",
    filters: ["saas", "commerce"],
    kind: "Fintech",
    tags: ["Payments", "Enterprise", "API"],
    summary: "页面把支付从单点工具升级成商业基础设施，强在产品范围、信任和开发者友好度同时出现。",
    offer: "Financial infrastructure to grow revenue",
    cta: "Start now",
    audience: "SaaS、电商、平台型公司、企业开发者",
    pain: "收款、订阅、税务、风控和全球化支付复杂。",
    structure: ["大命题 headline", "产品矩阵", "开发者 API", "企业 proof", "全球化能力"],
    patterns: ["把具体功能放进更大的商业叙事。", "同时服务 CEO 和 developer。", "用规模感降低采购风险。"],
    investor: {
      stage: "Growth",
      scale: "成熟企业级基础设施，交易规模驱动收入",
      signal: "从支付切入金融基础设施，收入和客户规模随商家 GMV 增长。",
      thesis: "适合看 Fintech / Infra 的投资人，重点看支付入口和增值金融服务。",
      risk: "监管、风控、国际化和大型客户议价会影响增长质量。",
    },
  },
  {
    id: "notion",
    company: "Notion",
    title: "Workspace as a blank canvas",
    url: "https://notion.so",
    domain: "notion.so",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.notion.so?w=1200",
    filters: ["saas", "ai"],
    kind: "Workspace",
    tags: ["Docs", "AI", "Collaboration"],
    summary: "从文档工具延展到 AI workspace，核心不是功能堆叠，而是把团队知识和执行放在同一个地方。",
    offer: "One workspace for your team",
    cta: "Get Notion free",
    audience: "知识工作者、创业团队、运营/产品团队",
    pain: "文档、任务、知识库和 AI 助手分散。",
    structure: ["泛人群 headline", "使用场景网格", "模板入口", "AI 能力", "团队协作 proof"],
    patterns: ["把空白画布变成多场景入口。", "模板承担 onboarding。", "AI 是 workspace 的增强，不是单独卖点。"],
    investor: {
      stage: "Growth",
      scale: "个人免费入口 + 团队席位扩张",
      signal: "从个人 productivity 进入团队 workspace，AI 增强有提高付费和留存的空间。",
      thesis: "适合看 AI / SaaS 的投资人，重点看个人到团队的扩张路径。",
      risk: "Workspace 赛道容易功能膨胀，需要看核心使用频次和团队付费深度。",
    },
  },
  {
    id: "intercom",
    company: "Intercom",
    title: "AI customer service as outcome",
    url: "https://intercom.com",
    domain: "intercom.com",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.intercom.com?w=1200",
    filters: ["ai", "saas"],
    kind: "AI Support",
    tags: ["Customer support", "AI agent", "B2B"],
    summary: "不是讲聊天机器人，而是讲支持团队的 resolution 和成本效率，买点更靠近业务结果。",
    offer: "AI-first customer service",
    cta: "Get a demo",
    audience: "客服团队、SaaS 公司、支持运营负责人",
    pain: "客服量上涨，人工响应慢，成本持续增加。",
    structure: ["AI-first 定位", "业务指标", "产品套件", "客户案例", "Demo CTA"],
    patterns: ["AI 不单独炫技，必须落到指标。", "B2B 首屏 CTA 更偏 demo。", "客户案例比功能介绍更有安全感。"],
    investor: {
      stage: "Series A+",
      scale: "客服预算明确，AI agent 可直接关联降本",
      signal: "AI 客服能用 resolution rate、人工替代率和响应成本证明 ROI。",
      thesis: "适合看 AI Agent / B2B SaaS 的投资人，重点看业务指标和部署深度。",
      risk: "需要验证复杂场景准确率、客户数据接入和品牌风险。",
    },
  },
  {
    id: "shopify",
    company: "Shopify",
    title: "Commerce operating system",
    url: "https://shopify.com",
    domain: "shopify.com",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.shopify.com?w=1200",
    filters: ["commerce", "saas"],
    kind: "Commerce",
    tags: ["Ecommerce", "SMB", "Creator"],
    summary: "把开店、支付、营销、物流放进一个创业叙事里，用户买的不是工具，是开始卖东西的确定性。",
    offer: "Start and grow your business",
    cta: "Start free trial",
    audience: "品牌主、创作者、独立站卖家、中小商家",
    pain: "从 0 开店涉及太多工具和流程。",
    structure: ["创业动机", "开店入口", "销售渠道", "支付/物流", "商家故事"],
    patterns: ["把复杂电商能力翻译成开店信心。", "免费试用降低起步阻力。", "商家故事让平台不显得冷。"],
    investor: {
      stage: "Growth",
      scale: "SMB 长尾 + 品牌商家生态",
      signal: "从建站到支付、履约、营销，多个收入层可叠加。",
      thesis: "适合看 Commerce / Cross-border 的投资人，重点看商家生命周期和生态抽成。",
      risk: "SMB 流失率、获客成本和宏观消费周期会影响质量。",
    },
  },
];

const founderProfiles = [
  {
    id: "guillermo-vercel",
    pageId: "vercel",
    name: "Guillermo Rauch",
    handle: "@rauchg",
    role: "Founder · Vercel",
    avatar: "GR",
    hook: "把前端发布变成一条基础设施曲线。",
    pitch:
      "从开发者部署入口切进企业前端云，核心信号是生态入口、团队协作频次和企业化 ARPU。",
    ask: "正在找懂 developer adoption 和 enterprise motion 的投资人。",
    defaultDm: "Hi Guillermo，我想了解 Vercel 现在最想链接哪类生态伙伴和投资人。",
    baseLikes: 12800,
    accent: "#00d1ff",
  },
  {
    id: "paul-supabase",
    pageId: "supabase",
    name: "Paul Copplestone",
    handle: "@kiwicopple",
    role: "Founder · Supabase",
    avatar: "PC",
    hook: "开源社区是分发，云托管才是商业化。",
    pitch:
      "用 Firebase alternative 降低理解成本，再把数据库、Auth、Storage 变成创业团队的后端默认入口。",
    ask: "适合聊开源势能、托管转化和 devtool 定价。",
    defaultDm: "Hi Paul，我在看开源项目如何转成云收入，想听听 Supabase 的 early GTM。",
    baseLikes: 9600,
    accent: "#3ee486",
  },
  {
    id: "karri-linear",
    pageId: "linear",
    name: "Karri Saarinen",
    handle: "@karrisaarinen",
    role: "Founder · Linear",
    avatar: "KS",
    hook: "项目管理不是表格，是速度感和秩序感。",
    pitch:
      "把高频团队工作流做得足够有品味，靠产品体验、PLG 和工程团队口碑形成替代路径。",
    ask: "想见重视 product-led growth 和团队工具留存的投资人。",
    defaultDm: "Hi Karri，我想请教 Linear 如何把产品手感变成真实的团队付费意愿。",
    baseLikes: 8800,
    accent: "#9a7cff",
  },
  {
    id: "ivan-notion",
    pageId: "notion",
    name: "Ivan Zhao",
    handle: "@ivanhzhao",
    role: "Founder · Notion",
    avatar: "IZ",
    hook: "一个 workspace，可以从个人习惯长进团队预算。",
    pitch:
      "先用个人 productivity 拉入口，再用模板、团队协作和 AI workspace 扩到组织级留存。",
    ask: "适合聊 AI workspace、团队席位扩张和知识工作流。",
    defaultDm: "Hi Ivan，我在研究个人工具到团队付费的扩张路径，想约 15 分钟交流。",
    baseLikes: 15300,
    accent: "#ffcf5a",
  },
  {
    id: "patrick-stripe",
    pageId: "stripe",
    name: "Patrick Collison",
    handle: "@patrickc",
    role: "Founder · Stripe",
    avatar: "PC",
    hook: "支付不是按钮，是商业基础设施。",
    pitch:
      "从 API 体验切入，再用全球收款、风控、税务和平台能力扩到企业关键路径。",
    ask: "适合聊 fintech infra、开发者信任和平台化收入。",
    defaultDm: "Hi Patrick，我想了解支付入口如何继续扩成金融基础设施平台。",
    baseLikes: 18100,
    accent: "#635bff",
  },
  {
    id: "tobi-shopify",
    pageId: "shopify",
    name: "Tobi Lutke",
    handle: "@tobi",
    role: "Founder · Shopify",
    avatar: "TL",
    hook: "开店、支付、渠道、履约，是一个 commerce OS。",
    pitch:
      "长尾商家从建站切入，生命周期里叠加支付、物流、营销和生态抽成。",
    ask: "适合聊 commerce infra、SMB 留存和商家生态。",
    defaultDm: "Hi Tobi，我想了解 Shopify 如何判断商家生态里下一层平台机会。",
    baseLikes: 11900,
    accent: "#95bf47",
  },
];

const storageKeys = {
  saved: "pagefeed.saved",
  remixCount: "pagefeed.remixCount",
  investorProfile: "pagefeed.investorProfile",
  founderLiked: "pagefeed.founderLiked",
  founderFollowed: "pagefeed.founderFollowed",
  founderDms: "pagefeed.founderDms",
};

const state = {
  activeFilter: "all",
  query: "",
  saved: new Set(JSON.parse(localStorage.getItem(storageKeys.saved) || "[]")),
  remixCount: Number(localStorage.getItem(storageKeys.remixCount) || "0"),
  investorProfile: JSON.parse(localStorage.getItem(storageKeys.investorProfile) || "null"),
  founderLiked: new Set(JSON.parse(localStorage.getItem(storageKeys.founderLiked) || "[]")),
  founderFollowed: new Set(
    JSON.parse(localStorage.getItem(storageKeys.founderFollowed) || "[]"),
  ),
  founderDms: JSON.parse(localStorage.getItem(storageKeys.founderDms) || "{}"),
  activeDmFounderId: null,
  kycStep: 0,
  kycDraft: {
    field: "AI / Agent",
    stage: "Seed",
    scale: "100k-1M ARR",
    region: "Global",
    thesis: "",
  },
};

const elements = {
  founderReel: document.querySelector("#founder-reel"),
  feedStack: document.querySelector("#feed-stack"),
  savedGrid: document.querySelector("#saved-grid"),
  savedEmpty: document.querySelector("#saved-empty"),
  savedCount: document.querySelector("#saved-count"),
  visibleCount: document.querySelector("#visible-count"),
  searchToggle: document.querySelector("#search-toggle"),
  searchPanel: document.querySelector("#search-panel"),
  searchInput: document.querySelector("#search-input"),
  segments: document.querySelectorAll(".segment"),
  navItems: document.querySelectorAll(".nav-item"),
  views: document.querySelectorAll(".view"),
  sourcePage: document.querySelector("#source-page"),
  remixForm: document.querySelector("#remix-form"),
  productBrief: document.querySelector("#product-brief"),
  toneSelect: document.querySelector("#tone-select"),
  remixOutput: document.querySelector("#remix-output"),
  metricPages: document.querySelector("#metric-pages"),
  metricSaved: document.querySelector("#metric-saved"),
  metricRemix: document.querySelector("#metric-remix"),
  detailSheet: document.querySelector("#detail-sheet"),
  detailContent: document.querySelector("#detail-content"),
  detailClose: document.querySelector("#detail-close"),
  dmSheet: document.querySelector("#dm-sheet"),
  dmContent: document.querySelector("#dm-content"),
  dmForm: document.querySelector("#dm-form"),
  dmMessageInput: document.querySelector("#dm-message-input"),
  dmClose: document.querySelector("#dm-close"),
  installButton: document.querySelector("#install-button"),
  investorDialog: document.querySelector("#investor-dialog"),
  investorForm: document.querySelector("#investor-form"),
  investorThesisInput: document.querySelector("#investor-thesis-input"),
  investorProfileTitle: document.querySelector("#investor-profile-title"),
  investorProfileSummary: document.querySelector("#investor-profile-summary"),
  editInvestorProfile: document.querySelector("#edit-investor-profile"),
  skipInvestorProfile: document.querySelector("#skip-investor-profile"),
  kycSteps: document.querySelectorAll(".kyc-step"),
  kycStepTrack: document.querySelector("#kyc-step-track"),
  kycStepLabel: document.querySelector("#kyc-step-label"),
  kycProgressFill: document.querySelector("#kyc-progress-fill"),
  kycBack: document.querySelector("#kyc-back"),
  kycNext: document.querySelector("#kyc-next"),
  kycSubmit: document.querySelector("#kyc-submit"),
  kycSummary: document.querySelector("#kyc-summary"),
  template: document.querySelector("#page-card-template"),
};

let deferredInstallPrompt = null;
let kycAdvanceTimer = null;

function getFilteredPages() {
  return landingPages.filter((page) => {
    const matchesFilter =
      state.activeFilter === "all" || page.filters.includes(state.activeFilter);
    const query = state.query.trim().toLowerCase();
    if (!query) return matchesFilter;

    const haystack = [
      page.company,
      page.title,
      page.domain,
      page.kind,
      page.summary,
      page.offer,
      page.cta,
      page.audience,
      page.investor.stage,
      page.investor.scale,
      page.investor.signal,
      page.investor.thesis,
      page.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return matchesFilter && haystack.includes(query);
  });
}

function getPageById(pageId) {
  return landingPages.find((page) => page.id === pageId);
}

function getFounderById(founderId) {
  return founderProfiles.find((profile) => profile.id === founderId);
}

function formatCompactNumber(value) {
  if (value >= 10000) return `${(value / 10000).toFixed(value >= 100000 ? 0 : 1)}w`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
  return String(value);
}

function renderAll() {
  renderFounderFeed();
  renderFeed();
  renderSaved();
  renderRemixSources();
  renderMetrics();
  renderInvestorProfile();
}

function renderFounderFeed() {
  if (!elements.founderReel) return;

  elements.founderReel.innerHTML = "";
  founderProfiles.forEach((profile) => {
    const page = getPageById(profile.pageId);
    if (!page) return;
    elements.founderReel.appendChild(createFounderCard(profile, page));
  });
}

function createFounderCard(profile, page) {
  const node = document.createElement("article");
  node.className = "founder-reel-card";
  node.dataset.founderId = profile.id;
  node.style.setProperty("--reel-image", `url("${page.image}")`);
  node.style.setProperty("--founder-accent", profile.accent);

  node.innerHTML = `
    <img class="founder-reel-bg" src="${page.image}" alt="${page.company} landing page preview" loading="lazy" />
    <div class="founder-reel-fallback" aria-hidden="true">${profile.avatar}</div>
    <div class="founder-reel-shade" aria-hidden="true"></div>
    <div class="founder-copy">
      <div class="founder-identity">
        <span class="founder-avatar">${profile.avatar}</span>
        <div>
          <strong>${profile.name}</strong>
          <span>${profile.role}</span>
        </div>
      </div>
      <p class="founder-handle">${profile.handle} · ${page.company} · ${page.kind}</p>
      <h2>${profile.hook}</h2>
      <p class="founder-pitch">${profile.pitch}</p>
      <div class="founder-tags">
        ${page.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </div>
    <div class="founder-actions" aria-label="${profile.name} 的互动">
      <button class="reel-action reel-like" type="button" aria-label="点赞 ${profile.name}">
        <span aria-hidden="true">♥</span>
        <b></b>
      </button>
      <button class="reel-action reel-save" type="button" aria-label="收藏 ${page.company}">
        <span aria-hidden="true">◆</span>
        <b></b>
      </button>
      <button class="reel-action reel-follow" type="button" aria-label="关注 ${profile.name}">
        <span aria-hidden="true">＋</span>
        <b></b>
      </button>
      <button class="reel-action reel-dm" type="button" aria-label="DM ${profile.name}">
        <span aria-hidden="true">✉</span>
        <b></b>
      </button>
    </div>
  `;

  const image = node.querySelector(".founder-reel-bg");
  image.addEventListener("error", () => node.classList.add("has-fallback"));

  node.querySelector(".reel-like").addEventListener("click", () => {
    toggleFounderLike(profile.id);
    syncFounderCard(node, profile);
  });

  node.querySelector(".reel-save").addEventListener("click", () => {
    toggleFounderSave(profile.pageId);
    syncFounderCard(node, profile);
  });

  node.querySelector(".reel-follow").addEventListener("click", () => {
    toggleFounderFollow(profile.id);
    syncFounderCard(node, profile);
  });

  node.querySelector(".reel-dm").addEventListener("click", () => showFounderDm(profile.id));

  syncFounderCard(node, profile);
  return node;
}

function syncFounderCard(node, profile) {
  const isLiked = state.founderLiked.has(profile.id);
  const isSaved = state.saved.has(profile.pageId);
  const isFollowed = state.founderFollowed.has(profile.id);
  const hasDm = Boolean(state.founderDms[profile.id]?.length);

  const likeButton = node.querySelector(".reel-like");
  const saveButton = node.querySelector(".reel-save");
  const followButton = node.querySelector(".reel-follow");
  const dmButton = node.querySelector(".reel-dm");

  likeButton.classList.toggle("active", isLiked);
  likeButton.querySelector("b").textContent = formatCompactNumber(profile.baseLikes + (isLiked ? 1 : 0));

  saveButton.classList.toggle("active", isSaved);
  saveButton.querySelector("b").textContent = isSaved ? "已收藏" : "收藏";

  followButton.classList.toggle("active", isFollowed);
  followButton.querySelector("b").textContent = isFollowed ? "已关注" : "关注";

  dmButton.classList.toggle("active", hasDm);
  dmButton.querySelector("b").textContent = hasDm ? "已 DM" : "DM";
}

function toggleFounderLike(founderId) {
  if (state.founderLiked.has(founderId)) state.founderLiked.delete(founderId);
  else state.founderLiked.add(founderId);
  localStorage.setItem(storageKeys.founderLiked, JSON.stringify([...state.founderLiked]));
}

function toggleFounderSave(pageId) {
  if (state.saved.has(pageId)) state.saved.delete(pageId);
  else state.saved.add(pageId);
  localStorage.setItem(storageKeys.saved, JSON.stringify([...state.saved]));
  renderFeed();
  renderSaved();
  renderMetrics();
}

function toggleFounderFollow(founderId) {
  if (state.founderFollowed.has(founderId)) state.founderFollowed.delete(founderId);
  else state.founderFollowed.add(founderId);
  localStorage.setItem(storageKeys.founderFollowed, JSON.stringify([...state.founderFollowed]));
}

function showFounderDm(founderId) {
  const profile = getFounderById(founderId);
  const page = profile ? getPageById(profile.pageId) : null;
  if (!profile || !page) return;

  state.activeDmFounderId = founderId;
  const sentCount = state.founderDms[founderId]?.length || 0;
  elements.dmContent.innerHTML = `
    <div class="dm-founder-head">
      <span class="founder-avatar">${profile.avatar}</span>
      <div>
        <p class="eyebrow">Founder DM</p>
        <h2 id="dm-title">${profile.name}</h2>
        <p>${profile.role} · ${profile.handle}</p>
      </div>
    </div>
    <div class="dm-founder-context">
      <strong>${profile.ask}</strong>
      <span>${page.company} · ${page.investor.signal}</span>
      <em>${sentCount ? `已发送 ${sentCount} 条本地 DM 草稿` : "还没有发送过 DM"}</em>
    </div>
  `;
  elements.dmMessageInput.value = profile.defaultDm;
  if (typeof elements.dmSheet.showModal === "function") elements.dmSheet.showModal();
  window.setTimeout(() => elements.dmMessageInput.focus(), 80);
}

function updateFounderDmButton(founderId) {
  const card = elements.founderReel?.querySelector(`[data-founder-id="${founderId}"]`);
  const profile = getFounderById(founderId);
  if (card && profile) syncFounderCard(card, profile);
}

function renderFeed() {
  const pages = getFilteredPages();
  elements.feedStack.innerHTML = "";
  elements.visibleCount.textContent = String(pages.length);
  pages.forEach((page) => elements.feedStack.appendChild(createPageCard(page)));
}

function renderSaved() {
  const savedPages = landingPages.filter((page) => state.saved.has(page.id));
  elements.savedGrid.innerHTML = "";
  elements.savedCount.textContent = String(savedPages.length);
  elements.savedEmpty.classList.toggle("active", savedPages.length === 0);
  savedPages.forEach((page) => elements.savedGrid.appendChild(createPageCard(page, true)));
}

function renderRemixSources(selectedId) {
  elements.sourcePage.innerHTML = landingPages
    .map((page) => {
      const selected = selectedId === page.id ? "selected" : "";
      return `<option value="${page.id}" ${selected}>${page.company} · ${page.kind}</option>`;
    })
    .join("");
}

function renderMetrics() {
  elements.metricPages.textContent = String(landingPages.length);
  elements.metricSaved.textContent = String(state.saved.size);
  elements.metricRemix.textContent = String(state.remixCount);
}

function createPageCard(page, compact = false) {
  const node = elements.template.content.firstElementChild.cloneNode(true);
  const image = node.querySelector(".page-thumb");
  const thumbWrap = node.querySelector(".thumb-wrap");

  thumbWrap.style.setProperty("--thumb-bg", `url("${page.image}")`);
  image.src = page.image;
  image.alt = `${page.company} landing page screenshot`;
  image.addEventListener("error", () => thumbWrap.classList.add("has-fallback"));

  node.querySelector("h3").textContent = page.title;
  node.querySelector(".company").textContent = page.company;
  node.querySelector(".domain").textContent = page.domain;
  node.querySelector(".page-kind").textContent = page.kind;
  node.querySelector(".summary").textContent = page.summary;
  node.querySelector(".investor-thesis").textContent = getInvestorMemo(page);
  node.querySelector(".offer").textContent = page.offer;
  node.querySelector(".cta").textContent = page.cta;
  node.querySelector(".open-link").href = page.url;

  const tags = node.querySelector(".tag-row");
  tags.innerHTML = page.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

  const saveButton = node.querySelector(".save-button");
  syncSaveButton(saveButton, page.id);
  saveButton.addEventListener("click", () => toggleSave(page.id));

  node.querySelector(".details-button").addEventListener("click", () => showDetails(page.id));
  node.querySelector(".remix-button").addEventListener("click", () => {
    showView("remix-view");
    renderRemixSources(page.id);
    elements.productBrief.focus();
  });

  if (compact) node.querySelector(".summary").textContent = page.offer;
  return node;
}

function getInvestorMemo(page) {
  const profile = state.investorProfile;
  if (!profile) return page.investor.thesis;

  return `${profile.field} · ${profile.stage} 视角：${page.investor.signal}`;
}

function renderInvestorProfile() {
  const profile = state.investorProfile;
  if (!profile) {
    elements.investorProfileTitle.textContent = "还没设置投资偏好";
    elements.investorProfileSummary.textContent =
      "设置你的关注领域、阶段和项目规模，Feed 会用投资人口径解释每个页面。";
    elements.editInvestorProfile.textContent = "设置";
    return;
  }

  elements.investorProfileTitle.textContent = `${profile.field} · ${profile.stage}`;
  elements.investorProfileSummary.textContent =
    `${profile.scale} · ${profile.region}${profile.thesis ? ` · ${profile.thesis}` : ""}`;
  elements.editInvestorProfile.textContent = "调整";
}

function syncSaveButton(button, pageId) {
  const isSaved = state.saved.has(pageId);
  button.classList.toggle("saved", isSaved);
  button.textContent = isSaved ? "♥" : "♡";
}

function toggleSave(pageId) {
  if (state.saved.has(pageId)) state.saved.delete(pageId);
  else state.saved.add(pageId);
  localStorage.setItem(storageKeys.saved, JSON.stringify([...state.saved]));
  renderAll();
}

function showDetails(pageId) {
  const page = landingPages.find((item) => item.id === pageId);
  if (!page) return;

  elements.detailContent.innerHTML = `
    <div class="detail-hero">
      <img src="${page.image}" alt="${page.company} landing page screenshot" />
      <div>
        <p class="eyebrow">${page.kind} · ${page.domain}</p>
        <h2>${page.company}</h2>
        <p class="summary">${page.summary}</p>
      </div>
    </div>
    <div class="detail-section">
      <h4>Positioning</h4>
      <ul class="detail-list">
        <li><strong>卖点：</strong>${page.offer}</li>
        <li><strong>用户：</strong>${page.audience}</li>
        <li><strong>痛点：</strong>${page.pain}</li>
        <li><strong>CTA：</strong>${page.cta}</li>
      </ul>
    </div>
    <div class="detail-section">
      <h4>Investor Memo</h4>
      <ul class="detail-list">
        <li><strong>阶段线索：</strong>${page.investor.stage}</li>
        <li><strong>规模线索：</strong>${page.investor.scale}</li>
        <li><strong>为什么值得看：</strong>${page.investor.signal}</li>
        <li><strong>尽调问题：</strong>${page.investor.risk}</li>
      </ul>
    </div>
    <div class="detail-section">
      <h4>Page Structure</h4>
      <ul class="detail-list">
        ${page.structure.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
    <div class="detail-section">
      <h4>What To Learn</h4>
      <ul class="detail-list">
        ${page.patterns.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;

  if (typeof elements.detailSheet.showModal === "function") elements.detailSheet.showModal();
}

function showView(viewId) {
  elements.views.forEach((view) => view.classList.toggle("active", view.id === viewId));
  elements.navItems.forEach((item) =>
    item.classList.toggle("active", item.dataset.view === viewId),
  );
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showInvestorDialog() {
  const profile = state.investorProfile;
  clearKycAdvance();
  state.kycStep = 0;
  state.kycDraft = profile
    ? { ...profile }
    : {
        field: "AI / Agent",
        stage: "Seed",
        scale: "100k-1M ARR",
        region: "Global",
        thesis: "",
      };
  elements.investorThesisInput.value = state.kycDraft.thesis || "";
  renderKyc();

  if (typeof elements.investorDialog.showModal === "function" && !elements.investorDialog.open) {
    elements.investorDialog.showModal();
  }
}

function setKycStep(step) {
  clearKycAdvance();
  const lastStep = elements.kycSteps.length - 1;
  state.kycStep = Math.max(0, Math.min(step, lastStep));
  renderKyc();
}

function clearKycAdvance() {
  if (!kycAdvanceTimer) return;
  window.clearTimeout(kycAdvanceTimer);
  kycAdvanceTimer = null;
}

function scheduleKycAdvance() {
  const fromStep = state.kycStep;
  const nextStep = fromStep + 1;
  const lastStep = elements.kycSteps.length - 1;
  if (nextStep > lastStep) return;

  clearKycAdvance();
  kycAdvanceTimer = window.setTimeout(() => {
    if (state.kycStep === fromStep) setKycStep(nextStep);
  }, 260);
}

function saveInvestorProfile() {
  state.kycDraft.thesis = elements.investorThesisInput.value.trim();
  state.investorProfile = {
    ...state.kycDraft,
  };
  localStorage.setItem(storageKeys.investorProfile, JSON.stringify(state.investorProfile));
  renderAll();
}

function renderKyc() {
  const totalSteps = elements.kycSteps.length;
  elements.kycSteps.forEach((step) => {
    const isActive = Number(step.dataset.step) === state.kycStep;
    step.classList.toggle("active", isActive);
    step.setAttribute("aria-hidden", String(!isActive));
  });
  elements.kycStepLabel.textContent = `第 ${state.kycStep + 1} / ${totalSteps} 步`;
  elements.kycProgressFill.style.width = `${((state.kycStep + 1) / totalSteps) * 100}%`;
  elements.kycStepTrack?.style.setProperty("--kyc-offset", `${state.kycStep * -100}%`);
  elements.kycBack.disabled = state.kycStep === 0;
  elements.kycNext.style.display = state.kycStep === totalSteps - 1 ? "none" : "inline-flex";
  elements.kycSubmit.style.display = state.kycStep === totalSteps - 1 ? "inline-flex" : "none";

  document.querySelectorAll(".choice-card, .market-row button").forEach((button) => {
    const group = button.closest("[data-key]");
    const key = group?.dataset.key;
    if (!key) return;
    button.classList.toggle("selected", state.kycDraft[key] === button.dataset.value);
  });

  elements.kycSummary.innerHTML = `
    <span>${state.kycDraft.field}</span>
    <span>${state.kycDraft.stage}</span>
    <span>${state.kycDraft.scale}</span>
    <span>${state.kycDraft.region}</span>
  `;
}

function generateRemix(source, brief, tone) {
  const product = brief.trim() || "一个帮团队更快上线 AI 产品的工具";
  const toneMap = {
    sharp: ["少一点试错，多一点上线。", "把复杂流程压成一个清楚入口。"],
    warm: ["让每一步推进都更安心。", "从第一次尝试到长期使用，都有人替你把细节理顺。"],
    technical: ["用结构化工作流降低集成和维护成本。", "让核心链路可观测、可复用、可扩展。"],
    playful: ["别再拿表格和截图硬凑流程。", "把混乱收进一个能跑的工作台。"],
  };

  const [lineOne, lineTwo] = toneMap[tone] || toneMap.sharp;

  return {
    headline: `${product}，${lineOne}`,
    subheadline: `参考 ${source.company} 的页面结构：先讲结果，再讲路径。面向${source.audience}，把“${source.pain}”转成一个更容易下单/预约/试用的承诺。`,
    cta: source.cta.includes("Demo") || source.cta.includes("demo") ? "预约演示" : "开始试用",
    sections: [
      `首屏：一句话讲清楚结果。${lineTwo}`,
      `痛点：把用户现在的摩擦写具体，不要泛泛说效率低。`,
      `方案：用 3 个模块解释产品如何把问题变简单。`,
      `证据：放客户、案例、数据或真实工作流截图。`,
      `转化：主 CTA 保持一个，副 CTA 放案例或 demo。`,
    ],
  };
}

elements.searchToggle.addEventListener("click", () => {
  elements.searchPanel.classList.toggle("active");
  if (elements.searchPanel.classList.contains("active")) elements.searchInput.focus();
});

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderFeed();
});

elements.segments.forEach((segment) => {
  segment.addEventListener("click", () => {
    state.activeFilter = segment.dataset.filter;
    elements.segments.forEach((item) => item.classList.remove("active"));
    segment.classList.add("active");
    renderFeed();
  });
});

elements.navItems.forEach((item) => {
  item.addEventListener("click", () => showView(item.dataset.view));
});

elements.detailClose.addEventListener("click", () => elements.detailSheet.close());

elements.dmClose.addEventListener("click", () => elements.dmSheet.close());

elements.dmForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const founderId = state.activeDmFounderId;
  const message = elements.dmMessageInput.value.trim();
  if (!founderId || !message) {
    elements.dmMessageInput.focus();
    return;
  }

  state.founderDms[founderId] = [
    ...(state.founderDms[founderId] || []),
    {
      body: message,
      sentAt: new Date().toISOString(),
    },
  ];
  localStorage.setItem(storageKeys.founderDms, JSON.stringify(state.founderDms));
  updateFounderDmButton(founderId);
  elements.dmSheet.close();
});

elements.editInvestorProfile.addEventListener("click", showInvestorDialog);

elements.skipInvestorProfile.addEventListener("click", () => {
  clearKycAdvance();
  elements.investorDialog.close();
});

document.querySelectorAll(".choice-card, .market-row button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest("[data-key]");
    const key = group?.dataset.key;
    if (!key) return;
    state.kycDraft[key] = button.dataset.value;
    renderKyc();
    scheduleKycAdvance();
  });
});

elements.kycBack.addEventListener("click", () => {
  setKycStep(state.kycStep - 1);
});

elements.kycNext.addEventListener("click", () => {
  setKycStep(state.kycStep + 1);
});

elements.investorThesisInput.addEventListener("input", (event) => {
  state.kycDraft.thesis = event.target.value.trim();
});

elements.investorForm.addEventListener("submit", () => {
  clearKycAdvance();
  saveInvestorProfile();
});

elements.remixForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const source = landingPages.find((page) => page.id === elements.sourcePage.value);
  if (!source) return;

  const result = generateRemix(source, elements.productBrief.value, elements.toneSelect.value);
  state.remixCount += 1;
  localStorage.setItem(storageKeys.remixCount, String(state.remixCount));
  renderMetrics();

  elements.remixOutput.classList.add("active");
  elements.remixOutput.innerHTML = `
    <p class="eyebrow">Remixed from ${source.company}</p>
    <h3>${result.headline}</h3>
    <dl>
      <dt>副标题</dt>
      <dd>${result.subheadline}</dd>
      <dt>主 CTA</dt>
      <dd>${result.cta}</dd>
      <dt>页面结构</dt>
      <dd>${result.sections.map((section) => `<p>${section}</p>`).join("")}</dd>
    </dl>
  `;
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  elements.installButton.classList.add("is-visible");
});

elements.installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  elements.installButton.classList.remove("is-visible");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

renderAll();
