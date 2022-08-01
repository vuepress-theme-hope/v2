import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as s,e as a}from"./app.7ce3092f.js";const i={},t=a(`<p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236\u63D2\u4EF6\u9009\u9879\u4E2D\u7684 <code>getter</code> \u6765\u5B8C\u5168\u63A7\u5236 Feed \u9879\u76EE\u7684\u751F\u6210\u3002</p><h2 id="getter-title" tabindex="-1"><a class="header-anchor" href="#getter-title" aria-hidden="true">#</a> getter.title</h2><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; string</code></li></ul><p>\u9879\u76EE\u6807\u9898\u83B7\u53D6\u5668</p><h2 id="getter-link" tabindex="-1"><a class="header-anchor" href="#getter-link" aria-hidden="true">#</a> getter.link</h2><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; string</code></li></ul><p>\u9879\u76EE\u94FE\u63A5\u83B7\u53D6\u5668</p><h2 id="getter-description" tabindex="-1"><a class="header-anchor" href="#getter-description" aria-hidden="true">#</a> getter.description</h2><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; string | undefined</code></li></ul><p>\u9879\u76EE\u63CF\u8FF0\u83B7\u53D6\u5668</p><div class="custom-container note"><p class="custom-container-title">\u6CE8</p><p>\u7531\u4E8E\u4E3A Atom \u5728\u6458\u8981\u4E2D\u652F\u6301 HTML\uFF0C\u6240\u4EE5\u5982\u679C\u53EF\u80FD\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u8FD4\u56DE HTML \u5185\u5BB9\uFF0C\u4F46\u5185\u5BB9\u5FC5\u987B\u4EE5\u6807\u8BB0 <code>html:</code> \u5F00\u5934\u3002</p></div><h2 id="getter-content" tabindex="-1"><a class="header-anchor" href="#getter-content" aria-hidden="true">#</a> getter.content</h2><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; string</code></li></ul><p>\u9879\u76EE\u5185\u5BB9\u83B7\u53D6\u5668</p><h2 id="getter-author" tabindex="-1"><a class="header-anchor" href="#getter-author" aria-hidden="true">#</a> getter.author</h2><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; FeedAuthor[]</code></li></ul><p>\u9879\u76EE\u4F5C\u8005\u83B7\u53D6\u5668\u3002</p><div class="custom-container note"><p class="custom-container-title">\u6CE8</p><p>\u83B7\u53D6\u5668\u5E94\u5728\u4F5C\u8005\u4FE1\u606F\u7F3A\u5931\u65F6\u8FD4\u56DE\u7A7A\u6570\u7EC4\u3002</p></div><details class="custom-container details"><summary>FeedAuthor \u683C\u5F0F</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-category" tabindex="-1"><a class="header-anchor" href="#getter-category" aria-hidden="true">#</a> getter.category</h2><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; FeedCategory[] | undefined</code></li></ul><p>\u9879\u76EE\u5206\u7C7B\u83B7\u53D6\u5668\u3002</p><details class="custom-container details"><summary>FeedCategory \u683C\u5F0F</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedCategory</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u5206\u7C7B\u540D\u79F0
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u6807\u8BC6\u5206\u7C7B\u6CD5\u7684\u5B57\u7B26\u4E32
   *
   * <span class="token keyword">@description</span> rss format only
   */</span>
  domain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * URI \u6807\u8BC6\u7684\u5206\u7C7B scheme
   *
   * <span class="token keyword">@description</span> atom format only
   */</span>
  scheme<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-enclosure" tabindex="-1"><a class="header-anchor" href="#getter-enclosure" aria-hidden="true">#</a> getter.enclosure</h2><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; FeedEnclosure | undefined</code></li></ul><p>\u9879\u76EE\u9644\u4EF6\u83B7\u53D6\u5668\u3002</p><details class="custom-container details"><summary>FeedEnclosure \u683C\u5F0F</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedEnclosure</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Enclosure \u5730\u5740
   */</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u7C7B\u578B
   *
   * <span class="token keyword">@description</span> \u5E94\u4E3A\u4E00\u4E2A\u6807\u51C6\u7684 MIME \u7C7B\u578B\uFF0Crss format only
   */</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u6309\u7167\u5B57\u8282\u6570\u8BA1\u7B97\u7684\u5927\u5C0F
   *
   * <span class="token keyword">@description</span> rss format only
   */</span>
  length<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-publishdate" tabindex="-1"><a class="header-anchor" href="#getter-publishdate" aria-hidden="true">#</a> getter.publishDate</h2><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; Date | undefined</code></li></ul><p>\u9879\u76EE\u53D1\u5E03\u65E5\u671F\u83B7\u53D6\u5668</p><h2 id="getter-lastupdatedate" tabindex="-1"><a class="header-anchor" href="#getter-lastupdatedate" aria-hidden="true">#</a> getter.lastUpdateDate</h2><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; Date</code></li></ul><p>\u9879\u76EE\u6700\u540E\u66F4\u65B0\u65E5\u671F\u83B7\u53D6\u5668</p><h2 id="getter-image" tabindex="-1"><a class="header-anchor" href="#getter-image" aria-hidden="true">#</a> getter.image</h2><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; string</code></li></ul><p>\u9879\u76EE\u56FE\u7247\u83B7\u53D6\u5668</p><div class="custom-container note"><p class="custom-container-title">\u6CE8</p><p>\u8BF7\u6CE8\u610F\u4F60\u5FC5\u987B\u786E\u4FDD\u8FD4\u56DE\u4E00\u4E2A\u5B8C\u6574\u7684 URL\u3002</p></div><h2 id="getter-contributor" tabindex="-1"><a class="header-anchor" href="#getter-contributor" aria-hidden="true">#</a> getter.contributor</h2><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; FeedContributor[]</code></li></ul><p>\u9879\u76EE\u8D21\u732E\u8005\u83B7\u53D6\u5668</p><div class="custom-container note"><p class="custom-container-title">\u6CE8</p><p>\u83B7\u53D6\u5668\u5E94\u5728\u8D21\u732E\u8005\u4FE1\u606F\u7F3A\u5931\u65F6\u8FD4\u56DE\u7A7A\u6570\u7EC4\u3002</p></div><details class="custom-container details"><summary>FeedContributor \u683C\u5F0F</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedContributor</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-copyright" tabindex="-1"><a class="header-anchor" href="#getter-copyright" aria-hidden="true">#</a> getter.copyright</h2><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; string | undefined</code></li></ul><p>\u9879\u76EE\u7248\u6743\u83B7\u53D6\u5668</p>`,45),l=[t];function c(r,d){return e(),s("div",null,l)}var u=n(i,[["render",c],["__file","getter.html.vue"]]);export{u as default};
