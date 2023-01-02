import{a3 as p,Z as c,_ as r,a1 as n,a2 as s,$ as a,a0 as t,a5 as e,q as l}from"./framework-f408d5b9.js";const d={},u=n("div",{class:"hint-container danger"},[n("p",{class:"hint-container-title"},"警告"),n("p",null,"这些选项很重要，需要你正确配置。")],-1),v={id:"hostname",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#hostname","aria-hidden":"true"},"#",-1),k=e(`<ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>当前网站部署到的域名。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>它应该包含完整协议 (如: <code>https://example.com</code>)。</p></div><h2 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h2><ul><li><p>类型: <code>Author</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AuthorName</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 作者姓名
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者网站
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者 Email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> AuthorName <span class="token operator">|</span> AuthorName<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>文章显示的默认作者</p><h2 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h2>`,7),b=e(`<li><p>类型: <code>NavbarConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 项目文字
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 项目图标
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 项目无障碍标签
   */</span>
  ariaLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 当前页面链接
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \`&lt;a&gt;\` 标签的 \`rel\` 属性
   */</span>
  rel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \`&lt;a&gt;\` 标签的 \`target\` 属性
   */</span>
  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 匹配激活的正则表达式
   */</span>
  activeMatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">NavGroup<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 当前分组的页面前缀
   */</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 当前分组的链接
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 当前分组的子项
   */</span>
  children<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">NavbarItem</span> <span class="token operator">=</span> AutoLinkOptions<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">NavbarGroup</span> <span class="token operator">=</span> NavGroup<span class="token operator">&lt;</span>NavbarGroup <span class="token operator">|</span> NavbarItem <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">NavbarConfig</span> <span class="token operator">=</span> <span class="token punctuation">(</span>NavbarItem <span class="token operator">|</span> NavbarGroup <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),h=n("p",null,"导航栏配置",-1),g=n("h2",{id:"sidebar",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),s(" sidebar")],-1),y=e(`<li><p>类型: <code>SidebarConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 项目文字
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 项目图标
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 项目无障碍标签
   */</span>
  ariaLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 当前页面链接
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \`&lt;a&gt;\` 标签的 \`rel\` 属性
   */</span>
  rel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \`&lt;a&gt;\` 标签的 \`target\` 属性
   */</span>
  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 匹配激活的正则表达式
   */</span>
  activeMatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarPageItem</span> <span class="token operator">=</span> AutoLinkOptions<span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">SidebarGroupItem</span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 当前分组的页面前缀
   */</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 当前分组的链接
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 当前分组的链接是否可折叠
   *
   * <span class="token keyword">@default</span> false
   */</span>
  collapsible<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 当前分组的子项
   */</span>
  children<span class="token operator">:</span> <span class="token punctuation">(</span>
    <span class="token operator">|</span> SidebarPageItem
    <span class="token operator">|</span> SidebarGroupItem
    <span class="token operator">|</span> SidebarStructureItem
    <span class="token operator">|</span> <span class="token builtin">string</span>
  <span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SidebarStructureItem</span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 当前分组的页面前缀
   */</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 当前分组的链接
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 当前分组的链接是否可折叠
   *
   * <span class="token keyword">@default</span> false
   */</span>
  collapsible<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarItem</span> <span class="token operator">=</span>
  <span class="token operator">|</span> SidebarPageItem
  <span class="token operator">|</span> SidebarGroupItem
  <span class="token operator">|</span> SidebarStructureItem
  <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarArrayConfig</span> <span class="token operator">=</span> SidebarItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarObjectConfig</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
  <span class="token builtin">string</span><span class="token punctuation">,</span>
  SidebarArrayConfig <span class="token operator">|</span> <span class="token string">&quot;structure&quot;</span> <span class="token operator">|</span> <span class="token boolean">false</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarConfig</span> <span class="token operator">=</span> SidebarArrayConfig <span class="token operator">|</span> SidebarObjectConfig<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),f=n("p",null,"侧边栏配置",-1),_=n("h2",{id:"locales",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#locales","aria-hidden":"true"},"#"),s(" locales")],-1),x=n("li",null,[s("类型: "),n("code",null,"Record<string, ThemeLocaleOptions>")],-1),w=e('<p>主题的多语言配置，你可以在这里分别为每个语言设置单独的选项。</p><h2 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h2><ul><li>类型: <code>boolean</code></li><li>默认值: 是否在使用 <code>--debug</code> 标识</li></ul><p>是否需要在开发服务器启用完整功能与热更新。 是否在开发服务器中启用热重载。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>通常，你会希望:</p><ul><li>开发服务器可以被尽快启动</li><li>对项目的修改可以在开发服务器上快速生效，并避免重新启动整个 VuePress 应用程序。</li></ul><p>为了达到这个预期，主题需要在开发服务器上的跳过一些耗时操作，并且需要在开发服务器上禁用一些由页面修改触发的耗时功能，以提高项目启动和热更新的速度。同时，由于一些修改会改变 VuePress 的底层原始数据，这些修改会导致网页刷新并重新加载整个 VuePress 应用程序。为了避免在修改 Markdown 时频繁的页面重新加载 (即: 触发页面刷新并且获得几秒钟的白屏)，该主题禁用了开发服务器上的某些功能。</p><p>默认情况下，开发服务器拥有以下限制:</p><ul><li>不启用基于 Git 的功能，包括贡献者、自动创建日期和最后更新时间 (调用 Git 程序以及文件 IO 会导致高耗时)</li><li>结构化侧边栏只会在应用启动时生成，后续不会更新 (侧边栏排序和索引取决于每个页面 frontmatter，Markdown 内容的任何变化都会触发重新计算，因此大量页面会导致高耗时)</li><li>博客文章、标签、分类和每个分类中的文章列表不会随着开发服务器更新 (Markdown 内容的任何变化都会触发重新计算，所以大量的页面会导致高耗时)</li><li>博客文章信息不含阅读时间和字数信息 (Markdown 内容的任何更改都会更改页面字数信息，并因更新了 VuePress 底层原始数据导致页面刷新)</li></ul><p>启用它意味着你接受每次修改都会触发一些高耗时计算并且整个应用程序将重新启动，这通常会导致页面刷新，并在在性能较弱的环境中获得数秒白屏。</p></div>',5);function I(S,N){const o=l("Badge"),i=l("RouterLink");return c(),r("div",null,[u,n("h2",v,[m,s(" hostname "),a(o,{text:"仅限 Root",type:"warning"})]),k,n("ul",null,[b,n("li",null,[n("p",null,[s("详情: "),a(i,{to:"/zh/guide/layout/navbar.html"},{default:t(()=>[s("布局 → 导航栏")]),_:1})])])]),h,g,n("ul",null,[y,n("li",null,[n("p",null,[s("详情: "),a(i,{to:"/zh/guide/layout/sidebar.html"},{default:t(()=>[s("布局 → 侧边栏")]),_:1})])])]),f,_,n("ul",null,[x,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[a(i,{to:"/zh/config/theme/i18n.html"},{default:t(()=>[s("主题多语言配置")]),_:1})])])])]),w])}const O=p(d,[["render",I],["__file","basic.html.vue"]]);export{O as default};
