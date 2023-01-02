import{a3 as e,Z as n,_ as a,a5 as s}from"./framework-f408d5b9.js";const i={},t=s(`<p>You can configure the following options in the frontmatter of the page to control plugin behavior.</p><h2 id="copyright2-plugin" tabindex="-1"><a class="header-anchor" href="#copyright2-plugin" aria-hidden="true">#</a> <code>copyright2</code> Plugin</h2><h3 id="copy-triggerwords" tabindex="-1"><a class="header-anchor" href="#copy-triggerwords" aria-hidden="true">#</a> copy.triggerWords</h3><ul><li>Type: <code>number</code></li><li>Default: <code>100</code></li></ul><p>Min words triggering copyright append</p><h3 id="copy-disablecopy" tabindex="-1"><a class="header-anchor" href="#copy-disablecopy" aria-hidden="true">#</a> copy.disableCopy</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Disable copy</p><h3 id="copy-disableselection" tabindex="-1"><a class="header-anchor" href="#copy-disableselection" aria-hidden="true">#</a> copy.disableSelection</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Disable selection</p><h2 id="feed2-plugin" tabindex="-1"><a class="header-anchor" href="#feed2-plugin" aria-hidden="true">#</a> <code>feed2</code> Plugin</h2><h3 id="feed-title" tabindex="-1"><a class="header-anchor" href="#feed-title" aria-hidden="true">#</a> feed.title</h3><ul><li>Type: <code>string</code></li></ul><p>The title of the feed item</p><h3 id="feed-description" tabindex="-1"><a class="header-anchor" href="#feed-description" aria-hidden="true">#</a> feed.description</h3><ul><li>Type: <code>string</code></li></ul><p>Description of the feed item</p><h3 id="feed-content" tabindex="-1"><a class="header-anchor" href="#feed-content" aria-hidden="true">#</a> feed.content</h3><ul><li>Type: <code>string</code></li></ul><p>The content of the feed item</p><h3 id="feed-author" tabindex="-1"><a class="header-anchor" href="#feed-author" aria-hidden="true">#</a> feed.author</h3><ul><li>Type: <code>FeedAuthor[] | FeedAuthor</code></li></ul><p>The author of the feed item</p><details class="hint-container details"><summary>FeedAuthor format</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="feed-contributor" tabindex="-1"><a class="header-anchor" href="#feed-contributor" aria-hidden="true">#</a> feed.contributor</h3><ul><li>Type: <code>FeedContributor[] | FeedContributor</code></li></ul><p>Contributors to feed item</p><details class="hint-container details"><summary>FeedContributor format</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedContributor</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="feed-guid" tabindex="-1"><a class="header-anchor" href="#feed-guid" aria-hidden="true">#</a> feed.guid</h3><ul><li>Type: <code>string</code></li></ul><p>The identifier of feed item, used to identify the feed item.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>You should make sure this is globally unique.</p></div><h2 id="sitemap2-plugin" tabindex="-1"><a class="header-anchor" href="#sitemap2-plugin" aria-hidden="true">#</a> <code>sitemap2</code> Plugin</h2><h3 id="sitemap-changefreq" tabindex="-1"><a class="header-anchor" href="#sitemap-changefreq" aria-hidden="true">#</a> sitemap.changefreq</h3><ul><li>Type: <code>&quot;always&quot; | &quot;hourly&quot; | &quot;daily&quot; | &quot;weekly&quot; | &quot;monthly&quot; | &quot;yearly&quot; | &quot;never&quot;</code></li><li>Default: <code>&quot;daily&quot;</code></li></ul><p>Page default update frequency. This will override changefreq in Plugin Options.</p><h3 id="sitemap-exclude" tabindex="-1"><a class="header-anchor" href="#sitemap-exclude" aria-hidden="true">#</a> sitemap.exclude</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether exclude the page from sitemap</p><h3 id="sitemap-priority" tabindex="-1"><a class="header-anchor" href="#sitemap-priority" aria-hidden="true">#</a> sitemap.priority</h3><ul><li>Type: <code>number</code></li><li>Default: <code>0.5</code></li></ul><p>Page priority, range from <code>0</code> to <code>1</code>.</p>`,43),o=[t];function l(d,r){return n(),a("div",null,o)}const p=e(i,[["render",l],["__file","plugins.html.vue"]]);export{p as default};
