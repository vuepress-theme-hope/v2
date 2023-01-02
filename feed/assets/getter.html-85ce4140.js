import{_ as n,W as e,X as s,a1 as a}from"./framework-eb069dea.js";const t={},i=a(`<p>You can take full control of feed items generation by setting <code>getter</code> in the plugin options.</p><h2 id="getter-title" tabindex="-1"><a class="header-anchor" href="#getter-title" aria-hidden="true">#</a> getter.title</h2><ul><li>Type: <code>(page: Page) =&gt; string</code></li></ul><p>Item title getter</p><h2 id="getter-link" tabindex="-1"><a class="header-anchor" href="#getter-link" aria-hidden="true">#</a> getter.link</h2><ul><li>Type: <code>(page: Page) =&gt; string</code></li></ul><p>Item link getter</p><h2 id="getter-description" tabindex="-1"><a class="header-anchor" href="#getter-description" aria-hidden="true">#</a> getter.description</h2><ul><li>Type: <code>(page: Page) =&gt; string | undefined</code></li></ul><p>Item description getter</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>Due to Atom support HTML in summary, so you can return HTML content here if possible, but the content must start with mark <code>html:</code>.</p></div><h2 id="getter-content" tabindex="-1"><a class="header-anchor" href="#getter-content" aria-hidden="true">#</a> getter.content</h2><ul><li>Type: <code>(page: Page) =&gt; string</code></li></ul><p>Item content getter</p><h2 id="getter-author" tabindex="-1"><a class="header-anchor" href="#getter-author" aria-hidden="true">#</a> getter.author</h2><ul><li>Type: <code>(page: Page) =&gt; FeedAuthor[]</code></li></ul><p>Item author getter.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>The getter should return an empty array when author information is missing.</p></div><details class="hint-container details"><summary>FeedAuthor format</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Author name
   */</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author site
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author avatar
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-category" tabindex="-1"><a class="header-anchor" href="#getter-category" aria-hidden="true">#</a> getter.category</h2><ul><li>Type: <code>(page: Page) =&gt; FeedCategory[] | undefined</code></li></ul><p>Item category getter.</p><details class="hint-container details"><summary>FeedCategory format</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedCategory</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Category Name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * A string that identifies a categorization taxonomy
   *
   * <span class="token keyword">@description</span> rss format only
   */</span>
  domain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * the categorization scheme via a URI
   *
   * <span class="token keyword">@description</span> atom format only
   */</span>
  scheme<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-enclosure" tabindex="-1"><a class="header-anchor" href="#getter-enclosure" aria-hidden="true">#</a> getter.enclosure</h2><ul><li>Type: <code>(page: Page) =&gt; FeedEnclosure | undefined</code></li></ul><p>Item enclosure getter.</p><details class="hint-container details"><summary>FeedEnclosure format</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedEnclosure</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Enclosure link
   */</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * what its type is
   *
   * <span class="token keyword">@description</span> should be a standard MIME Type, rss format only
   */</span>
  Type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Size in bytes
   *
   * <span class="token keyword">@description</span> rss format only
   */</span>
  length<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-publishdate" tabindex="-1"><a class="header-anchor" href="#getter-publishdate" aria-hidden="true">#</a> getter.publishDate</h2><ul><li>Type: <code>(page: Page) =&gt; Date | undefined</code></li></ul><p>Item release date getter</p><h2 id="getter-lastupdatedate" tabindex="-1"><a class="header-anchor" href="#getter-lastupdatedate" aria-hidden="true">#</a> getter.lastUpdateDate</h2><ul><li>Type: <code>(page: Page) =&gt; Date</code></li></ul><p>Item last update date getter</p><h2 id="getter-image" tabindex="-1"><a class="header-anchor" href="#getter-image" aria-hidden="true">#</a> getter.image</h2><ul><li>Type: <code>(page: Page) =&gt; string</code></li></ul><p>Item Image Getter</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>Make sure you are returning a full URL.</p></div><h2 id="getter-contributor" tabindex="-1"><a class="header-anchor" href="#getter-contributor" aria-hidden="true">#</a> getter.contributor</h2><ul><li>Type: <code>(page: Page) =&gt; FeedContributor[]</code></li></ul><p>Item Contributor Getter</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>The getter should return an empty array when contributor information is missing.</p></div><details class="hint-container details"><summary>FeedContributor format</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedContributor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Author name
   */</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author site
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author avatar
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-copyright" tabindex="-1"><a class="header-anchor" href="#getter-copyright" aria-hidden="true">#</a> getter.copyright</h2><ul><li>Type: <code>(page: Page) =&gt; string | undefined</code></li></ul><p>Item copyright getter</p>`,45),r=[i];function l(o,c){return e(),s("div",null,r)}const p=n(t,[["render",l],["__file","getter.html.vue"]]);export{p as default};
