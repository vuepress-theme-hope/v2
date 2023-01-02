import{_ as l,W as i,X as p,$ as n,a0 as s,Y as e,Z as t,a1 as o,E as c}from"./framework-eb069dea.js";const r={},u=n("h2",{id:"plugin-options",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-options","aria-hidden":"true"},"#"),s(" Plugin Options")],-1),d=n("h3",{id:"getinfo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getinfo","aria-hidden":"true"},"#"),s(" getInfo")],-1),k=n("li",null,[s("Type: "),n("code",null,"(page: Page) => Record<string, unknown>")],-1),m=n("li",null,"Required: No",-1),g=n("p",null,"Function getting article info.",-1),v=n("p",null,"Article info will injected in route meta so that they will be available later in client composables.",-1),h=n("h3",{id:"filter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#filter","aria-hidden":"true"},"#"),s(" filter")],-1),b=n("li",null,[s("Type: "),n("code",null,"(page: Page) => boolean")],-1),y=n("li",null,[s("Default: "),n("code",null,"(page) => Boolean(page.filePathRelative) && !page.frontmatter.home")],-1),f=n("p",null,"Page filter, determine whether a page should be included.",-1),_=n("p",null,"By default, all the pages generated from Markdown files but not homepage will be included as articles.",-1),w=n("h3",{id:"category",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#category","aria-hidden":"true"},"#"),s(" category")],-1),x=n("li",null,[s("Type: "),n("code",null,"BlogCategoryOptions[]")],-1),T=n("li",null,"Required: No",-1),B=n("p",null,[s("Blog category config, see "),n("a",{href:"#blog-category-config"},"Blog Category Config")],-1),C=n("h3",{id:"type",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#type","aria-hidden":"true"},"#"),s(" type")],-1),R=n("li",null,[s("Type: "),n("code",null,"BlogTypeOptions[]")],-1),D=n("li",null,"Required: No",-1),P=o('<p>Blog type config, see <a href="#blog-type-config">Blog Type Config</a></p><h3 id="slugify" tabindex="-1"><a class="header-anchor" href="#slugify" aria-hidden="true">#</a> slugify</h3><ul><li>Type: <code>(name: string) =&gt; string</code></li><li>Default: <code>(name) =&gt; name.replace(/ _/g, &#39;-&#39;).replace(/[:?*|\\\\/&lt;&gt;]/g, &quot;&quot;).toLowerCase()</code></li></ul><p>Slugify function, used to convert key name which they are register in routes.</p><h3 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt" aria-hidden="true">#</a> excerpt</h3>',5),q=n("li",null,[s("Type: "),n("code",null,"boolean")],-1),A=n("li",null,[s("Default: "),n("code",null,"true")],-1),G=n("p",null,"Whether generate excerpt for page.",-1),I=n("h3",{id:"excerptseparator",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#excerptseparator","aria-hidden":"true"},"#"),s(" excerptSeparator")],-1),E=n("li",null,[s("Type: "),n("code",null,"string")],-1),L=n("li",null,[s("Default: "),n("code",null,"<!-- more -->")],-1),N=n("p",null,"Separator used to split excerpt from page content.",-1),F=n("h3",{id:"excerptlength",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#excerptlength","aria-hidden":"true"},"#"),s(" excerptLength")],-1),S=n("li",null,[s("Type: "),n("code",null,"number")],-1),O=n("li",null,[s("Default: "),n("code",null,"300")],-1),z=n("p",null,"Length of excerpt when auto generating.",-1),W=n("div",{class:"hint-container note"},[n("p",{class:"hint-container-title"},"Note"),n("p",null,"Excerpt length will be the minimal possible length reaching this value."),n("p",null,[s("You can set it to "),n("code",null,"0"),s(" to disable auto excerpt generation.")])],-1),j=n("h3",{id:"excerptfilter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#excerptfilter","aria-hidden":"true"},"#"),s(" excerptFilter")],-1),V=n("li",null,[s("Type: "),n("code",null,"(page: Page) => boolean")],-1),Y=n("li",null,[s("Default: "),n("code",null,"filter"),s(" option")],-1),U=n("p",null,"Page filter, determine whether the plugin should generate excerpt for it.",-1),M=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"Tips"),n("p",null,[s("You should use this to skip pages that you don't need to generate excerpt for. E.g.: If users set "),n("code",null,"excerpt"),s(" or "),n("code",null,"description"),s(" in frontmatter, you may want to use them directly.")])],-1),K=n("h3",{id:"iscustomelement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#iscustomelement","aria-hidden":"true"},"#"),s(" isCustomElement")],-1),X=n("li",null,[s("Type: "),n("code",null,"(tagName: string) => boolean")],-1),Z=n("li",null,[s("Default: "),n("code",null,"() => false")],-1),$=o(`<p>Tags which is considered as custom elements.</p><p>This is used to determine whether a tag is a custom element since all vue components are removed in excerpt</p><h3 id="metascope" tabindex="-1"><a class="header-anchor" href="#metascope" aria-hidden="true">#</a> metaScope</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;_blog&quot;</code></li></ul><p>Key used when injecting info to route meta.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>Setting to an empty key will inject to route meta directly instead of a field.</p></div><h3 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h3><ul><li>Type: <code>boolean</code></li><li>Default: Whether using <code>--debug</code> flag</li></ul><p>Whether enable hotReload in devServer.</p><div class="hint-container note"><p class="hint-container-title">To theme developers</p><p>It’s disabled by default because it does have performance impact in sites with a lot of categories and types. And it can slow down hotReload speed when editing Markdown.</p><p>If users are adding or organizing your categories or tags, you may tell them to enable this, for the rest it’s better to keep it disabled.</p><p>Also, you can try to detect number of pages in users project and decide whether to enable it.</p></div><h2 id="blog-category-config" tabindex="-1"><a class="header-anchor" href="#blog-category-config" aria-hidden="true">#</a> Blog Category Config</h2><p>Blog category config should be an array, while each item is controlling a &quot;category&quot; rule.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BlogCategoryOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Unique category name
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Function getting category from page
   */</span>
  <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * A custom function to sort the pages
   */</span>
  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Path pattern of page to be registered
   *
   * <span class="token keyword">@description</span> \`:key\` will be replaced by the &quot;slugify&quot; result of the original key
   *
   * <span class="token keyword">@default</span> \`/:key/\`
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Page layout name
   *
   * <span class="token keyword">@default</span> &#39;Layout&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Frontmatter
   */</span>
  frontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Item page path pattern or custom function to be registered
   *
   * <span class="token keyword">@description</span> When filling in a string, \`:key\` and \`:name\` will be replaced by the &quot;slugify&quot; result of the original key and name
   *
   * <span class="token keyword">@default</span> \`/:key/:name/\`
   */</span>
  itemPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Item page layout name
   *
   * <span class="token keyword">@default</span> &#39;Layout&#39;
   */</span>
  itemLayout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Items Frontmatter
   */</span>
  itemFrontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    localePath<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="blog-type-config" tabindex="-1"><a class="header-anchor" href="#blog-type-config" aria-hidden="true">#</a> Blog Type Config</h2><p>Blog type config should be an array, while each item is controlling a &quot;type&quot; rule.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BlogTypeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Unique type name
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * A filter function to determine whether a page should be the type
   */</span>
  <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * A custom function to sort the pages
   */</span>
  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Page path to be registered
   *
   * <span class="token keyword">@default</span> &#39;/:key/&#39;
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Layout name
   *
   * <span class="token keyword">@default</span> &#39;Layout&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Frontmatter
   */</span>
  frontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><p>You can import the following api from <code>vuepress-plugin-blog2/client</code>.</p><ul><li><p>Blog category</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">const</span> useBlogCategory<span class="token operator">:</span> <span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComputedRef<span class="token operator">&lt;</span>BlogCategoryData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>Argument <code>key</code> should be the category unique key.</p><p>If no key is passed, the plugin will try to use the key in current path.</p></li><li><p>Blog category</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">const</span> useBlogType<span class="token operator">:</span> <span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComputedRef<span class="token operator">&lt;</span>BlogTypeData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>Argument <code>key</code> should be the type unique key.</p><p>If no key is passed, the plugin will try to use the key in current path.</p></li></ul><p>Returning values are:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Article<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Article path */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Article info */</span>
  info<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BlogCategoryData<span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Category path */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Only available when current route matches an item path
   */</span>
  currentItems<span class="token operator">?</span><span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/** Category map */</span>
  map<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** Unique key under current category */</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/** Category path of the key */</span>
      path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      <span class="token doc-comment comment">/** Category items of the key */</span>
      items<span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BlogTypeData<span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Type path */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/** Items under current type */</span>
  items<span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function H(J,Q){const a=c("RouterLink");return i(),p("div",null,[u,d,n("ul",null,[k,m,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide.html#gathering-info"},{default:t(()=>[s("Guide → Gathering Info")]),_:1})])])])]),g,v,h,n("ul",null,[b,y,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide.html#collecting-articles"},{default:t(()=>[s("Guide → Collecting Articles")]),_:1})])])])]),f,_,w,n("ul",null,[x,T,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide.html#customizing-categories-and-types"},{default:t(()=>[s("Guide → Customizing Categories and Types")]),_:1})])])])]),B,C,n("ul",null,[R,D,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide.html#customizing-categories-and-types"},{default:t(()=>[s("Guide → Customizing Categories and Types")]),_:1})])])])]),P,n("ul",null,[q,A,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide.html#generating-excerpt"},{default:t(()=>[s("Guide → Generating Excerpt")]),_:1})])])])]),G,I,n("ul",null,[E,L,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide.html#generating-excerpt"},{default:t(()=>[s("Guide → Generating Excerpt")]),_:1})])])])]),N,F,n("ul",null,[S,O,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide.html#generating-excerpt"},{default:t(()=>[s("Guide → Generating Excerpt")]),_:1})])])])]),z,W,j,n("ul",null,[V,Y,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide.html#generating-excerpt"},{default:t(()=>[s("Guide → Generating Excerpt")]),_:1})])])])]),U,M,K,n("ul",null,[X,Z,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide.html#generating-excerpt"},{default:t(()=>[s("Guide → Generating Excerpt")]),_:1})])])])]),$])}const sn=l(r,[["render",H],["__file","config.html.vue"]]);export{sn as default};
