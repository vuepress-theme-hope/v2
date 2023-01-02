import{_ as t,Z as l,$ as c,a2 as n,a3 as s,a0 as e,a1 as o,a4 as i,I as p}from"./framework-b3333173.js";const d={},r=i(`<h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h2><ul><li><p>Type: <code>AvailableComponent[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AvailableComponent</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;AudioPlayer&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Badge&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;BiliBili&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;CodePen&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;FontIcon&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;PDF&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;StackBlitz&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;VideoPlayer&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;YouTube&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>[]</code></p></li></ul><p>Components to be registered.</p><p>Available component names:</p><ul><li><code>&quot;AudioPlayer&quot;</code></li><li><code>&quot;Badge&quot;</code></li><li><code>&quot;BiliBili&quot;</code></li><li><code>&quot;CodePen&quot;</code></li><li><code>&quot;FontIcon&quot;</code></li><li><code>&quot;PDF&quot;</code></li><li><code>&quot;StackBlitz&quot;</code></li><li><code>&quot;VideoPlayer&quot;</code></li><li><code>&quot;YouTube&quot;</code></li></ul><h2 id="componentsoptions" tabindex="-1"><a class="header-anchor" href="#componentsoptions" aria-hidden="true">#</a> componentsOptions</h2><p>Global config for components.</p><h3 id="componentsoptions-fonticon-assets" tabindex="-1"><a class="header-anchor" href="#componentsoptions-fonticon-assets" aria-hidden="true">#</a> componentsOptions.fontIcon.assets</h3>`,8),u=n("li",null,[s("Type: "),n("code",null,'"iconfont" | "fontawesome" | `//${string}` | `http://${string}` | `https://${string}` ')],-1),m=n("li",null,"Required: No",-1),v=n("p",null,[s("Link of font icon asset, "),n("code",null,"'iconfont'"),s(" and "),n("code",null,"'fontawesome'"),s(" keywords are supported.")],-1),k=n("h3",{id:"componentsoptions-fonticon-prefix",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componentsoptions-fonticon-prefix","aria-hidden":"true"},"#"),s(" componentsOptions.fontIcon.prefix")],-1),b=n("li",null,[s("Type: "),n("code",null,"string")],-1),h=n("li",null,"Default: Inferred from assets",-1),g=n("p",null,"Class prefix of font icon",-1),f=n("h3",{id:"componentsoptions-pdf-pdfjs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componentsoptions-pdf-pdfjs","aria-hidden":"true"},"#"),s(" componentsOptions.pdf.pdfjs")],-1),_=n("li",null,[s("Type: "),n("code",null,"string")],-1),y=n("li",null,"Required: No",-1),q=n("p",null,"Location to pdfjs viewer.",-1),T=n("h2",{id:"rootcomponents",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rootcomponents","aria-hidden":"true"},"#"),s(" rootComponents")],-1),x=n("p",null,"Components to be mounted at root.",-1),C=n("h3",{id:"rootcomponents-addthis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rootcomponents-addthis","aria-hidden":"true"},"#"),s(" rootComponents.addThis")],-1),w=n("li",null,[s("Type: "),n("code",null,"string | false")],-1),D=n("li",null,[s("Default: "),n("code",null,"false")],-1),P=n("p",null,"Public ID of addThis.",-1),L=n("h3",{id:"rootcomponents-backtotop",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rootcomponents-backtotop","aria-hidden":"true"},"#"),s(" rootComponents.backToTop")],-1),B=n("li",null,[s("Type: "),n("code",null,"boolean | number")],-1),N=n("li",null,[s("Default: "),n("code",null,"false")],-1),F=n("p",null,"Whether enabling backToTop button. When setting a number, it will be used as BackToTop button threshold distance (in pixels), default is 300.",-1),R=n("h3",{id:"rootcomponents-notice",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rootcomponents-notice","aria-hidden":"true"},"#"),s(" rootComponents.notice")],-1),S=i(`<li><p>Type: <code>NoticeOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">NoticeLocaleOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Notice title
   */</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Notice content
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Notice footer
   */</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Action text
     */</span>
    text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Action link
     */</span>
    link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Action type
     *
     * <span class="token keyword">@default</span> &#39;default
     */</span>
    type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;primary&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">NoticeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Notice locales Options
   */</span>
  locales<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> NoticeLocaleOptions<span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Notice key
   *
   * <span class="token keyword">@description</span> Used to identify and store the notice status
   */</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether show notice only once or show it in every visit
   *
   * <span class="token keyword">@description</span> If \`key\` is not provided, this option will be ignored
   *
   * <span class="token keyword">@default</span> false
   */</span>
  showOnce<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether the notice shall be confirmed
   *
   * <span class="token keyword">@default</span> true
   */</span>
  confirm<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether the notice should appear fullscreen
   *
   * <span class="token keyword">@default</span> false
   */</span>
  fullscreen<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li>`,2),A=n("p",null,"Details:",-1),O=i(`<p>Config for global notice.</p><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><p>Component locales.</p><h3 id="locales-backtotop" tabindex="-1"><a class="header-anchor" href="#locales-backtotop" aria-hidden="true">#</a> locales.backToTop</h3><ul><li><p>Type: <code>BackToTopLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BackToTopLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Back to top button label text
   */</span>
  backToTop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BackToTopLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> BackToTopLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locales config for BackToTop button.</p><h3 id="locales-catalog" tabindex="-1"><a class="header-anchor" href="#locales-catalog" aria-hidden="true">#</a> locales.catalog</h3><ul><li><p>Type: <code>CatalogLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CatalogLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Catalog title
   */</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CatalogLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> CatalogLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locales config for catalog component.</p><h3 id="locales-pdf" tabindex="-1"><a class="header-anchor" href="#locales-pdf" aria-hidden="true">#</a> locales.pdf</h3><ul><li><p>Type: <code>PDFLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PDFLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * PDF hint text
   *
   * <span class="token keyword">@description</span> Only used if the browser does not support embedding PDF and no PDFJS URL is provided.
   * [url] will be replaced by actual PDF link.
   */</span>
  hint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PDFLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> CatalogLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locales config for pdf component.</p><details class="hint-container details"><summary>Built-in Supported Languages</summary><ul><li><strong>Simplified Chinese</strong> (zh-CN)</li><li><strong>Traditional Chinese</strong> (zh-TW)</li><li><strong>English (United States)</strong> (en-US)</li><li><strong>German</strong> (de-AT)</li><li><strong>Russian</strong> (ru-RU)</li><li><strong>Ukrainian</strong> (uk-UA)</li><li><strong>Vietnamese</strong> (vi-VN)</li><li><strong>Portuguese (Brazil)</strong> (pt-BR)</li><li><strong>Polish</strong> (pl-PL)</li><li><strong>French</strong> (fr-FR)</li><li><strong>Spanish</strong> (es-ES)</li><li><strong>Slovak</strong> (sk-SK)</li><li><strong>Japanese</strong> (ja-JP)</li><li><strong>Turkish</strong> (tr-TR)</li><li><strong>Korean</strong> (ko-KR)</li></ul></details>`,13);function I(G,V){const a=p("RouterLink");return l(),c("div",null,[r,n("ul",null,[u,m,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide/fonticon.html"},{default:o(()=>[s("Guide → FontIcon")]),_:1})])])])]),v,k,n("ul",null,[b,h,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide/fonticon.html"},{default:o(()=>[s("Guide → FontIcon")]),_:1})])])])]),g,f,n("ul",null,[_,y,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide/pdf.html#pdfjs-viewer"},{default:o(()=>[s("Guide → PDF → PDFJS")]),_:1})])])])]),q,T,x,C,n("ul",null,[w,D,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide/addthis.html#usage"},{default:o(()=>[s("Guide → AddThis")]),_:1})])])])]),P,L,n("ul",null,[B,N,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide/backtotop.html"},{default:o(()=>[s("Guide → BackToTop")]),_:1})])])])]),F,R,n("ul",null,[S,n("li",null,[A,n("ul",null,[n("li",null,[e(a,{to:"/guide/notice.html"},{default:o(()=>[s("Guide → Notice")]),_:1})])])])]),O])}const j=t(d,[["render",I],["__file","config.html.vue"]]);export{j as default};
