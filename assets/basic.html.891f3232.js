import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as c,c as r,b as n,a,w as o,f as s,g as e}from"./app.625f2658.js";const u={},d=n("div",{class:"custom-container danger"},[n("p",{class:"custom-container-title"},"\u8B66\u544A"),n("p",null,"\u8FD9\u4E9B\u9009\u9879\u5F88\u91CD\u8981\uFF0C\u9700\u8981\u4F60\u6B63\u786E\u914D\u7F6E\u3002")],-1),k={id:"hostname",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#hostname","aria-hidden":"true"},"#",-1),m=s(" hostname "),b=e(`<ul><li>\u7C7B\u578B: <code>string</code></li><li>\u5FC5\u586B: \u662F</li></ul><p>\u5F53\u524D\u7F51\u7AD9\u90E8\u7F72\u5230\u7684\u57DF\u540D\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5B83\u5E94\u8BE5\u5305\u542B\u5B8C\u6574\u534F\u8BAE (\u5982: <code>https://example.com</code>)\u3002</p></div><h2 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h2><ul><li><p>\u7C7B\u578B: <code>Author</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AuthorInfo</span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5FC5\u586B: \u5426</p></li></ul><p>\u6587\u7AE0\u663E\u793A\u7684\u9ED8\u8BA4\u4F5C\u8005</p><h2 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h2>`,7),h=e(`<li><p>\u7C7B\u578B: <code>HopeThemeNavbarConfig</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TextItem</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),g=s("\u8BE6\u60C5: "),_=s("\u5E03\u5C40 \u2192 \u5BFC\u822A\u680F"),y=n("p",null,"\u5BFC\u822A\u680F\u914D\u7F6E",-1),f=n("h2",{id:"sidebar",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),s(" sidebar")],-1),T=e(`<li><p>\u7C7B\u578B: <code>HopeThemeSidebarConfig</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TextItem</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),x=s("\u8BE6\u60C5: "),H=s("\u5E03\u5C40 \u2192 \u4FA7\u8FB9\u680F"),w=n("p",null,"\u4FA7\u8FB9\u680F\u914D\u7F6E",-1),I=n("h2",{id:"locales",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#locales","aria-hidden":"true"},"#"),s(" locales")],-1),S=n("ul",null,[n("li",null,[s("\u7C7B\u578B: "),n("code",null,"Record<string, HopeThemeLocaleOptions>")])],-1),N=n("p",null,"\u4E3B\u9898\u7684\u591A\u8BED\u8A00\u914D\u7F6E\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u5206\u522B\u4E3A\u6BCF\u4E2A\u8BED\u8A00\u8BBE\u7F6E\u5355\u72EC\u7684\u9009\u9879\u3002",-1);function A(C,L){const l=p("Badge"),t=p("RouterLink");return c(),r("div",null,[d,n("h2",k,[v,m,a(l,{text:"\u4EC5\u9650 Root",type:"warning"})]),b,n("ul",null,[h,n("li",null,[n("p",null,[g,a(t,{to:"/zh/guide/layout/navbar.html"},{default:o(()=>[_]),_:1})])])]),y,f,n("ul",null,[T,n("li",null,[n("p",null,[x,a(t,{to:"/zh/guide/layout/sidebar.html"},{default:o(()=>[H]),_:1})])])]),w,I,S,N])}var R=i(u,[["render",A],["__file","basic.html.vue"]]);export{R as default};
