import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,g as s}from"./app.625f2658.js";const i={},d=s(`<p>\u4F60\u53EF\u4EE5\u5728\u9875\u9762\u7684 frontmatter \u914D\u7F6E\u4EE5\u4E0B\u9009\u9879\u63A7\u5236\u63D2\u4EF6\u884C\u4E3A\u3002</p><h2 id="copyright2-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#copyright2-\u63D2\u4EF6" aria-hidden="true">#</a> copyright2 \u63D2\u4EF6</h2><h3 id="copy-triggerwords" tabindex="-1"><a class="header-anchor" href="#copy-triggerwords" aria-hidden="true">#</a> copy.triggerWords</h3><ul><li>\u7C7B\u578B: <code>number</code></li><li>\u9ED8\u8BA4\u503C: <code>100</code></li></ul><p>\u89E6\u53D1\u9644\u52A0\u7248\u6743\u7684\u6700\u5C0F\u5B57\u6570</p><h3 id="copy-disablecopy" tabindex="-1"><a class="header-anchor" href="#copy-disablecopy" aria-hidden="true">#</a> copy.disableCopy</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u7981\u7528\u590D\u5236</p><h3 id="copy-disableselection" tabindex="-1"><a class="header-anchor" href="#copy-disableselection" aria-hidden="true">#</a> copy.disableSelection</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u7981\u7528\u9009\u62E9</p><h2 id="feed2-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#feed2-\u63D2\u4EF6" aria-hidden="true">#</a> feed2 \u63D2\u4EF6</h2><h3 id="feed-title" tabindex="-1"><a class="header-anchor" href="#feed-title" aria-hidden="true">#</a> feed.title</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Feed \u9879\u76EE\u7684\u6807\u9898</p><h3 id="feed-description" tabindex="-1"><a class="header-anchor" href="#feed-description" aria-hidden="true">#</a> feed.description</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Feed \u9879\u76EE\u7684\u63CF\u8FF0</p><h3 id="feed-content" tabindex="-1"><a class="header-anchor" href="#feed-content" aria-hidden="true">#</a> feed.content</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Feed \u9879\u76EE\u7684\u5185\u5BB9</p><h3 id="feed-author" tabindex="-1"><a class="header-anchor" href="#feed-author" aria-hidden="true">#</a> feed.author</h3><ul><li>\u7C7B\u578B: <code>FeedAuthor[] | FeedAuthor</code></li></ul><p>Feed \u9879\u76EE\u7684\u4F5C\u8005</p><details class="custom-container details"><summary>FeedAuthor \u683C\u5F0F</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u4F5C\u8005\u540D\u5B57
   */</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4F5C\u8005\u90AE\u4EF6
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4F5C\u8005\u7F51\u7AD9
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4F5C\u8005\u5934\u50CF
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="feed-contributor" tabindex="-1"><a class="header-anchor" href="#feed-contributor" aria-hidden="true">#</a> feed.contributor</h3><ul><li>\u7C7B\u578B: <code>FeedContributor[] | FeedContributor</code></li></ul><p>Feed \u9879\u76EE\u7684\u8D21\u732E\u8005</p><details class="custom-container details"><summary>FeedContributor \u683C\u5F0F</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedContributor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u4F5C\u8005\u540D\u5B57
   */</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4F5C\u8005\u90AE\u4EF6
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4F5C\u8005\u7F51\u7AD9
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4F5C\u8005\u5934\u50CF
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="feed-guid" tabindex="-1"><a class="header-anchor" href="#feed-guid" aria-hidden="true">#</a> feed.guid</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Feed \u9879\u76EE\u7684\u6807\u8BC6\u7B26\uFF0C\u7528\u4E8E\u6807\u8BC6 Feed \u9879\u76EE\u3002</p><div class="custom-container note"><p class="custom-container-title">\u6CE8</p><p>\u4F60\u5E94\u8BE5\u786E\u4FDD\u6B64\u9879\u5168\u5C40\u552F\u4E00\u3002</p></div><h2 id="sitemap2-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#sitemap2-\u63D2\u4EF6" aria-hidden="true">#</a> sitemap2 \u63D2\u4EF6</h2><h3 id="sitemap-changefreq" tabindex="-1"><a class="header-anchor" href="#sitemap-changefreq" aria-hidden="true">#</a> sitemap.changefreq</h3><ul><li>\u7C7B\u578B: <code>&quot;always&quot; | &quot;hourly&quot; | &quot;daily&quot; | &quot;weekly&quot; | &quot;monthly&quot; | &quot;yearly&quot; | &quot;never&quot;</code></li><li>\u9ED8\u8BA4\u503C: <code>&quot;daily&quot;</code></li></ul><p>\u9875\u9762\u9ED8\u8BA4\u66F4\u65B0\u9891\u7387\u3002\u5B83\u4F1A\u8986\u76D6\u63D2\u4EF6\u9009\u9879\u4E2D\u7684 <a href="#changefreq">changefreq</a> \u9009\u9879\u3002</p><h3 id="sitemap-exclude" tabindex="-1"><a class="header-anchor" href="#sitemap-exclude" aria-hidden="true">#</a> sitemap.exclude</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u662F\u5426\u4E0D\u8F93\u51FA\u6B64\u9875\u9762\u5230 Sitemap</p><h3 id="sitemap-priority" tabindex="-1"><a class="header-anchor" href="#sitemap-priority" aria-hidden="true">#</a> sitemap.priority</h3><ul><li>\u7C7B\u578B: <code>number</code></li><li>\u9ED8\u8BA4\u503C: <code>0.5</code></li></ul><p>\u9875\u9762\u4F18\u5148\u7EA7\uFF0C\u8303\u56F4 <code>0</code> \u81F3 <code>1</code>\u3002</p>`,43),l=[d];function o(t,c){return n(),a("div",null,l)}var u=e(i,[["render",o],["__file","plugins.html.vue"]]);export{u as default};
