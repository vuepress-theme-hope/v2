import{a3 as p,Z as c,_ as r,a4 as d,a1 as n,a2 as s,$ as a,a0 as t,a5 as e,q as l}from"./framework-f408d5b9.js";const u={},v=n("div",{class:"hint-container danger"},[n("p",{class:"hint-container-title"},"Предупреждение"),n("p",null,"Эти параметры важны и требуют правильной настройки.")],-1),m={id:"hostname",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#hostname","aria-hidden":"true"},"#",-1),b=e(`<ul><li>Тип: <code>string</code></li><li>Обязательный: Да</li></ul><p>Домен, на который будет развернут сайт.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Он должен содержать полный протокол (например: <code>https://example.com</code>).</p></div><h2 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h2><ul><li><p>Тип: <code>Author</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AuthorName</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Author name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author website
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> AuthorName <span class="token operator">|</span> AuthorName<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Обязательный: Нет</p></li></ul><p>Глобальный автор по умолчанию.</p><h2 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h2>`,7),h=e(`<li><p>Тип: <code>NavbarConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Text of item
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Icon of item
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Aria label of item
   */</span>
  ariaLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * link of item
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Rel of \`&lt;a&gt;\` tag
   */</span>
  rel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Target of \`&lt;a&gt;\` tag
   */</span>
  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Regexp mode to be active
   */</span>
  activeMatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">NavGroup<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Link prefix of current group
   */</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Link of current group
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Children of current group
   */</span>
  children<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">NavbarItem</span> <span class="token operator">=</span> AutoLinkOptions<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">NavbarGroup</span> <span class="token operator">=</span> NavGroup<span class="token operator">&lt;</span>NavbarGroup <span class="token operator">|</span> NavbarItem <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">NavbarConfig</span> <span class="token operator">=</span> <span class="token punctuation">(</span>NavbarItem <span class="token operator">|</span> NavbarGroup <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),g=n("p",null,"Конфигурация панели навигации",-1),f=n("h2",{id:"sidebar",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),s(" sidebar")],-1),y=e(`<li><p>Тип: <code>SidebarConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Text of item
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Icon of item
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Aria label of item
   */</span>
  ariaLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * link of item
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Rel of \`&lt;a&gt;\` tag
   */</span>
  rel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Target of \`&lt;a&gt;\` tag
   */</span>
  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Regexp mode to be active
   */</span>
  activeMatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarPageItem</span> <span class="token operator">=</span> AutoLinkOptions<span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">SidebarGroupItem</span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Link prefix of current group
   */</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Link of current group
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether current group is collapsible
   *
   * <span class="token keyword">@default</span> false
   */</span>
  collapsible<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Children of current group
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
   * Link prefix of current group
   */</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Link of current group
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether current group is collapsible
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),w=n("p",null,"Конфигурация боковой панели",-1),x=n("h2",{id:"locales",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#locales","aria-hidden":"true"},"#"),s(" locales")],-1),_=n("li",null,[s("Тип: "),n("code",null,"Record<string, ThemeLocaleOptions>")],-1),I=e('<p>I18n конфиг темы, где можно задать параметры для каждого языка отдельно.</p><h2 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h2><ul><li>Type: <code>boolean</code></li><li>Default: Whether using <code>--debug</code> flag</li></ul><p>Whether to enable hot reload in the development server.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Normally, you will expect:</p><ul><li>devServer can be started as soon as possible</li><li>changes in markdown can take effect fast on the devServer, and avoid restarting the entire VuePress application.</li></ul><p>In order to achieve this expectation, the theme needs to skip some time-consuming operations on the devServer, and it needs to disable some time-consuming functions that are triggered by page modifications on the devServer to improve the speed of project startup and hot update. At the same time, because some modifications will change the underlying raw data of VuePress, these modifications will cause the web page refresh and reload the entire VuePress application. In order to avoid frequent page reloads (i.e.: Page refresh is triggered and you are getting a blank screen for a few seconds) when modifying Markdown, the theme disables some features on the devServer.</p><p>By default, devServer has the following limitations:</p><ul><li>Git-based features will not be enabled, including contributors, automatic creating date and last update time (Calling Git binary and making file IO causes high time consumption)</li><li>The structured sidebar will only be generated when the application starts, and will not be updated subsequently (Sidebar sorting and indexing depends on every page frontmatter, any change in Markdown content will trigger recalculation, so large number of pages will result high time consumption)</li><li>Blog articles, tags, categories and lists of articles in each category will not be updated with the devServer (Any change in Markdown content will trigger recalculation, so large number of pages will result high time consumption)</li><li>ReadingTime and Word Info in blog article information are not injected (Any change in Markdown content will change the page word count information, so a VuePress underlying raw data is updated causing page refresh)</li></ul><p>Enabling it means you accept that every modification will trigger some expensive recalculations and the whole application will restart, which usually results refreshing the page and a few seconds of blank screen in environments with weak performance.</p></div>',5);function S(A,N){const o=l("Badge"),i=l("RouterLink");return c(),r("div",null,[v,d(" more "),n("h2",m,[k,s(" hostname "),a(o,{text:"Только root",type:"warning"})]),b,n("ul",null,[h,n("li",null,[n("p",null,[s("Детали: "),a(i,{to:"/ru/guide/layout/navbar.html"},{default:t(()=>[s("Макет → Панель навигации")]),_:1})])])]),g,f,n("ul",null,[y,n("li",null,[n("p",null,[s("Детали: "),a(i,{to:"/ru/guide/layout/sidebar.html"},{default:t(()=>[s("Макет → Боковая панель")]),_:1})])])]),w,x,n("ul",null,[_,n("li",null,[s("Детали: "),n("ul",null,[n("li",null,[a(i,{to:"/ru/config/theme/i18n.html"},{default:t(()=>[s("Конфигурация мультиязыка темы")]),_:1})])])])]),I])}const C=p(u,[["render",S],["__file","basic.html.vue"]]);export{C as default};
