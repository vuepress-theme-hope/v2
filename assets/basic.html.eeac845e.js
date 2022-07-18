import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as c,c as r,b as n,a,w as o,f as s,g as e}from"./app.625f2658.js";const u={},d=n("div",{class:"custom-container danger"},[n("p",{class:"custom-container-title"},"Warning"),n("p",null,"These options are important and require you to configure them correctly.")],-1),k={id:"hostname",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#hostname","aria-hidden":"true"},"#",-1),m=s(" hostname "),b=e(`<ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>Domain which the site will be deployed to.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>It should contain full protocol (eg: <code>https://example.com</code>).</p></div><h2 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h2><ul><li><p>Type: <code>Author</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AuthorInfo</span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Global default author.</p><h2 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h2>`,7),h=e(`<li><p>Type: <code>HopeThemeNavbarConfig</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TextItem</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  ariaLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AutoLink</span> <span class="token keyword">extends</span> <span class="token class-name">TextItem</span> <span class="token punctuation">{</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  rel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  activeMatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">HopeThemeNavGroup<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">TextItem</span> <span class="token punctuation">{</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">HopeThemeNavbarItem</span> <span class="token operator">=</span> AutoLink<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">HopeThemeNavbarGroup</span> <span class="token operator">=</span> HopeThemeNavGroup<span class="token operator">&lt;</span>
  HopeThemeNavbarGroup <span class="token operator">|</span> HopeThemeNavbarItem <span class="token operator">|</span> <span class="token builtin">string</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">HopeThemeNavbarConfig</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">|</span> HopeThemeNavbarItem
  <span class="token operator">|</span> HopeThemeNavbarGroup
  <span class="token operator">|</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),g=s("Details: "),y=s("Layout \u2192 Navbar"),_=n("p",null,"Navbar config",-1),f=n("h2",{id:"sidebar",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),s(" sidebar")],-1),T=e(`<li><p>Type: <code>HopeThemeSidebarConfig</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TextItem</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  ariaLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AutoLink</span> <span class="token keyword">extends</span> <span class="token class-name">TextItem</span> <span class="token punctuation">{</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  rel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  activeMatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">HopeThemeSidebarPageItem</span> <span class="token operator">=</span> AutoLink<span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">HopeThemeSidebarGroupItem</span> <span class="token keyword">extends</span> <span class="token class-name">TextItem</span> <span class="token punctuation">{</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  collapsable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  children<span class="token operator">:</span> <span class="token punctuation">(</span>
    <span class="token operator">|</span> HopeThemeSidebarPageItem
    <span class="token operator">|</span> HopeThemeSidebarGroupItem
    <span class="token operator">|</span> HopeThemeSidebarStructureItem
    <span class="token operator">|</span> <span class="token builtin">string</span>
  <span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">HopeThemeSidebarStructureItem</span> <span class="token keyword">extends</span> <span class="token class-name">TextItem</span> <span class="token punctuation">{</span>
  prefix<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  collapsable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">HopeThemeSidebarItem</span> <span class="token operator">=</span>
  <span class="token operator">|</span> HopeThemeSidebarPageItem
  <span class="token operator">|</span> HopeThemeSidebarGroupItem
  <span class="token operator">|</span> HopeThemeSidebarStructureItem
  <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">HopeThemeSidebarArrayConfig</span> <span class="token operator">=</span> HopeThemeSidebarItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">HopeThemeSidebarObjectConfig</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
  <span class="token builtin">string</span><span class="token punctuation">,</span>
  HopeThemeSidebarArrayConfig <span class="token operator">|</span> <span class="token string">&quot;structure&quot;</span> <span class="token operator">|</span> <span class="token boolean">false</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">HopeThemeSidebarConfig</span> <span class="token operator">=</span>
  <span class="token operator">|</span> HopeThemeSidebarArrayConfig
  <span class="token operator">|</span> HopeThemeSidebarObjectConfig<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),x=s("Details: "),H=s("Layout \u2192 Sidebar"),w=n("p",null,"Sidebar config",-1),I=n("h2",{id:"locales",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#locales","aria-hidden":"true"},"#"),s(" locales")],-1),S=n("ul",null,[n("li",null,[s("Type: "),n("code",null,"Record<string, HopeThemeLocaleOptions>")])],-1),N=n("p",null,"I18n config of the theme, where you can set options for each language separately.",-1);function A(C,L){const i=p("Badge"),t=p("RouterLink");return c(),r("div",null,[d,n("h2",k,[v,m,a(i,{text:"Root only",type:"warning"})]),b,n("ul",null,[h,n("li",null,[n("p",null,[g,a(t,{to:"/guide/layout/navbar.html"},{default:o(()=>[y]),_:1})])])]),_,f,n("ul",null,[T,n("li",null,[n("p",null,[x,a(t,{to:"/guide/layout/sidebar.html"},{default:o(()=>[H]),_:1})])])]),w,I,S,N])}var R=l(u,[["render",A],["__file","basic.html.vue"]]);export{R as default};
