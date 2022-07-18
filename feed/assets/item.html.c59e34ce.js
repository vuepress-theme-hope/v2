import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e as s}from"./app.9cc44152.js";const i={},d=s(`<p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6BCF\u4E2A\u9875\u9762\u7684 Frontmatter\uFF0C\u6765\u5BF9\u6BCF\u4E2A Feed \u9879\u76EE\u751F\u6210\u8FDB\u884C\u5355\u72EC\u7684\u63A7\u5236\u3002</p><h2 id="\u6DFB\u52A0\u4E0E\u79FB\u9664" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4E0E\u79FB\u9664" aria-hidden="true">#</a> \u6DFB\u52A0\u4E0E\u79FB\u9664</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u6587\u7AE0\u5747\u4F1A\u88AB\u6DFB\u52A0\u81F3 feed \u6D41\u3002\u5982\u679C\u4F60\u60F3\u5728 feed \u4E2D\u79FB\u9664\u7279\u5B9A\u9875\u9762\uFF0C\u4F60\u53EF\u4EE5\u5728 frontmatter \u4E2D\u8BBE\u7F6E <code>feed: false</code>\u3002</p><h2 id="\u9ED8\u8BA4\u8BFB\u53D6\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u8BFB\u53D6\u5185\u5BB9" aria-hidden="true">#</a> \u9ED8\u8BA4\u8BFB\u53D6\u5185\u5BB9</h2><p>Feed \u9879\u76EE\u751F\u6210\u4E2D\u4F1A\u8BFB\u53D6 <code>page.except</code> \u548C\u9875\u9762\u7684\u539F\u672C\u5185\u5BB9\u3002</p><p>Feed \u9879\u76EE\u751F\u6210\u4E2D\u8BFB\u53D6\u7684 frontmatter \u9009\u9879\u53CA\u5BF9\u5E94\u542B\u4E49\u5982\u4E0B:</p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u7531 VuePress \u81EA\u52A8\u751F\u6210\uFF0C\u9ED8\u8BA4\u4E3A\u9875\u9762\u7684 h1 \u5185\u5BB9</p><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u9875\u9762\u63CF\u8FF0</p><h3 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h3><ul><li>\u7C7B\u578B: <code>Date</code></li></ul><p>\u9875\u9762\u7684\u53D1\u5E03\u65E5\u671F</p><h3 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> article</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li></ul><p>\u8BE5\u9875\u9762\u662F\u5426\u662F\u6587\u7AE0</p><blockquote><p>\u5982\u679C\u6B64\u9879\u8BBE\u7F6E\u4E3A <code>false</code>\uFF0C\u5219\u8BE5\u9875\u4E0D\u4F1A\u5305\u542B\u5728\u6700\u7EC8\u7684 feed \u4E2D\u3002</p></blockquote><h3 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u9875\u9762\u7248\u6743\u4FE1\u606F</p><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u9875\u9762\u7684\u5C01\u9762/\u5206\u4EAB\u56FE\uFF0C\u9700\u4E3A\u5B8C\u6574\u94FE\u63A5\u6216\u7EDD\u5BF9\u94FE\u63A5\u3002</p><h2 id="frontmatter-\u4E2D\u7684-feed-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#frontmatter-\u4E2D\u7684-feed-\u914D\u7F6E" aria-hidden="true">#</a> FrontMatter \u4E2D\u7684 Feed \u914D\u7F6E</h2><h3 id="feed-title" tabindex="-1"><a class="header-anchor" href="#feed-title" aria-hidden="true">#</a> feed.title</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Feed \u9879\u76EE\u7684\u6807\u9898</p><h3 id="feed-description" tabindex="-1"><a class="header-anchor" href="#feed-description" aria-hidden="true">#</a> feed.description</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Feed \u9879\u76EE\u7684\u63CF\u8FF0</p><h3 id="feed-content" tabindex="-1"><a class="header-anchor" href="#feed-content" aria-hidden="true">#</a> feed.content</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Feed \u9879\u76EE\u7684\u5185\u5BB9</p><h3 id="feed-author" tabindex="-1"><a class="header-anchor" href="#feed-author" aria-hidden="true">#</a> feed.author</h3><ul><li>\u7C7B\u578B: <code>FeedAuthor[] | FeedAuthor</code></li></ul><p>Feed \u9879\u76EE\u7684\u4F5C\u8005</p><details class="custom-container details"><summary>FeedAuthor \u683C\u5F0F</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="feed-guid" tabindex="-1"><a class="header-anchor" href="#feed-guid" aria-hidden="true">#</a> feed.guid</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Feed \u9879\u76EE\u7684\u6807\u8BC6\u7B26\uFF0C\u7528\u4E8E\u6807\u8BC6 Feed \u9879\u76EE\u3002</p><div class="custom-container note"><p class="custom-container-title">\u6CE8</p><p>\u4F60\u5E94\u8BE5\u786E\u4FDD\u6B64\u9879\u5168\u5C40\u552F\u4E00\u3002</p></div>`,47),t=[d];function l(r,c){return n(),a("div",null,t)}var u=e(i,[["render",l],["__file","item.html.vue"]]);export{u as default};
