import{f as e}from"./app.94b00fbb.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=e(`<p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6BCF\u4E2A\u9875\u9762\u7684 frontmatter\uFF0C\u6765\u5BF9\u6BCF\u4E2A Feed \u9879\u76EE\u751F\u6210\u8FDB\u884C\u5355\u72EC\u7684\u63A7\u5236\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u6587\u7AE0\u5747\u4F1A\u88AB\u6DFB\u52A0\u81F3 feed \u6D41\u3002\u5982\u679C\u4F60\u60F3\u5728 feed \u4E2D\u79FB\u9664\u7279\u5B9A\u9875\u9762\uFF0C\u4F60\u53EF\u4EE5\u5728 frontmatter \u4E2D\u8BBE\u7F6E <code>feed.enable</code> \u4E3A <code>false</code></p><h2 id="frontmatter-\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#frontmatter-\u9009\u9879" aria-hidden="true">#</a> FrontMatter \u9009\u9879</h2><p>\u5F71\u54CD Feed \u9879\u76EE\u751F\u6210\u7684 frontmatter \u9009\u9879\u5982\u4E0B:</p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u7531 VuePress \u81EA\u52A8\u751F\u6210\uFF0C\u9ED8\u8BA4\u4E3A\u9875\u9762\u7684 h1 \u5185\u5BB9</p><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u9875\u9762\u63CF\u8FF0</p><h2 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> article</h2><ul><li>\u7C7B\u578B: <code>boolean</code></li></ul><p>\u8BE5\u9875\u9762\u662F\u5426\u662F\u6587\u7AE0</p><blockquote><p>\u5982\u679C\u6B64\u9879\u8BBE\u7F6E\u4E3A <code>false</code>\uFF0C\u5219\u8BE5\u9875\u4E0D\u4F1A\u5305\u542B\u5728\u6700\u7EC8\u7684 feed \u4E2D\u3002</p></blockquote><h3 id="copyrighttext" tabindex="-1"><a class="header-anchor" href="#copyrighttext" aria-hidden="true">#</a> copyrightText</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u9875\u9762\u7248\u6743\u4FE1\u606F</p><h3 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h3><ul><li>\u7C7B\u578B: <code>Date</code></li></ul><p>\u9875\u9762\u7684\u53D1\u5E03\u65E5\u671F</p><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><ul><li>\u7C7B\u578B: <code>string</code> (\u56FE\u7247\u7684\u5B8C\u6574\u6216\u7EDD\u5BF9\u94FE\u63A5)</li></ul><p>\u9875\u9762\u7684\u5C01\u9762/\u5206\u4EAB\u56FE</p><h2 id="frontmatter-\u4E2D\u7684-feed-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#frontmatter-\u4E2D\u7684-feed-\u914D\u7F6E" aria-hidden="true">#</a> FrontMatter \u4E2D\u7684 Feed \u914D\u7F6E</h2><h3 id="feed-enable" tabindex="-1"><a class="header-anchor" href="#feed-enable" aria-hidden="true">#</a> feed.enable</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>true</code></li></ul><p>\u8BE5\u9875\u9762\u662F\u5426\u4E3A Feed \u9879\u76EE</p><h3 id="feed-title" tabindex="-1"><a class="header-anchor" href="#feed-title" aria-hidden="true">#</a> feed.title</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Feed \u9879\u76EE\u7684\u6807\u9898</p><h3 id="feed-description" tabindex="-1"><a class="header-anchor" href="#feed-description" aria-hidden="true">#</a> feed.description</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Feed \u9879\u76EE\u7684\u63CF\u8FF0</p><h3 id="feed-content" tabindex="-1"><a class="header-anchor" href="#feed-content" aria-hidden="true">#</a> feed.content</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Feed \u9879\u76EE\u7684\u5185\u5BB9</p><h3 id="feed-author" tabindex="-1"><a class="header-anchor" href="#feed-author" aria-hidden="true">#</a> feed.author</h3><ul><li>\u7C7B\u578B: <code>FeedAuthor[] | FeedAuthor</code></li></ul><p>Feed \u9879\u76EE\u7684\u4F5C\u8005</p><details class="custom-block details"><summary>\`FeedAuthor\` \u683C\u5F0F</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** \u4F5C\u8005\u59D3\u540D */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u4F5C\u8005\u7535\u5B50\u90AE\u7BB1 */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u4F5C\u8005\u7F51\u7AD9 */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * \u4F5C\u8005\u5934\u50CF\u5730\u5740
   *
   * \u6B63\u65B9\u5F62\uFF0C\u6700\u597D\u4E0D\u5C0F\u4E8E 128\xD7128\uFF0C\u900F\u660E\u80CC\u666F
   */</span>
  avator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details><h3 id="feed-contributor" tabindex="-1"><a class="header-anchor" href="#feed-contributor" aria-hidden="true">#</a> feed.contributor</h3><ul><li>\u7C7B\u578B: <code>FeedContributor[] | FeedContributor</code></li></ul><p>Feed \u9879\u76EE\u7684\u8D21\u732E\u8005</p><details class="custom-block details"><summary>\`FeedContributor\` \u683C\u5F0F</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedContributor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** \u8D21\u732E\u8005\u59D3\u540D */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u8D21\u732E\u8005\u7535\u5B50\u90AE\u7BB1 */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u8D21\u732E\u8005\u7F51\u7AD9 */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * \u8D21\u732E\u8005\u5934\u50CF\u5730\u5740
   *
   * \u6B63\u65B9\u5F62\uFF0C\u6700\u597D\u4E0D\u5C0F\u4E8E 128\xD7128\uFF0C\u900F\u660E\u80CC\u666F
   */</span>
  avator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details><h3 id="feed-guid" tabindex="-1"><a class="header-anchor" href="#feed-guid" aria-hidden="true">#</a> feed.guid</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Feed \u9879\u76EE\u7684\u6807\u8BC6\u7B26\uFF0C\u7528\u4E8E\u6807\u8BC6 Feed \u9879\u76EE\u3002</p><h2 id="\u9ED8\u8BA4\u751F\u6210\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u751F\u6210\u903B\u8F91" aria-hidden="true">#</a> \u9ED8\u8BA4\u751F\u6210\u903B\u8F91</h2><ul><li><p><strong>title</strong></p><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u542B\u4E49: Feed \u9879\u76EE\u7684\u6807\u9898</li><li>\u503C: <ul><li><code>frontmatter.feed.title</code></li><li>\u5982\u679C\u4E0A\u8FF0\u672A\u63D0\u4F9B\uFF0C\u56DE\u9000\u5230 <code>frontmatter.title</code></li></ul></li></ul></li><li><p><strong>link</strong></p><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u542B\u4E49: Feed \u9879\u76EE\u7684\u94FE\u63A5</li><li>\u503C: <ul><li>\u9875\u9762\u7684\u6C38\u4E45\u94FE\u63A5</li><li>\u82E5\u4E0A\u8FF0\u4E0D\u5B58\u5728\uFF0C\u56DE\u9000\u5230\u9875\u9762\u94FE\u63A5</li></ul></li></ul></li><li><p><strong>description</strong></p><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u542B\u4E49: Feed \u9879\u76EE\u7684\u63CF\u8FF0</li><li>\u503C: <ul><li><code>frontmatter.feed.description</code></li><li>\u5982\u679C\u4E0A\u8FF0\u672A\u63D0\u4F9B\uFF0C\u56DE\u9000\u5230 <code>frontmatter.description</code></li><li>\u5982\u679C\u4E0A\u8FF0\u672A\u63D0\u4F9B\uFF0C\u56DE\u9000\u5230 <code>$page.excerpt</code></li></ul></li></ul></li><li><p><strong>author</strong></p><ul><li><p>\u7C7B\u578B: <code>FeedAuthor[] | FeedAuthor</code></p></li><li><p>\u542B\u4E49: Feed \u9879\u76EE\u7684\u4F5C\u8005</p></li><li><p>\u503C:</p><ul><li><p><code>frontmatter.feed.author</code></p></li><li><p>\u5982\u679C\u4E0A\u8FF0\u672A\u63D0\u4F9B\uFF0C\u56DE\u9000\u5230 <code>frontmatter.author</code></p><p>(<code>string</code> \u7C7B\u578B\uFF0C\u4EC5\u751F\u6210 <code>name</code>)</p></li><li><p>\u5982\u679C\u4E0A\u8FF0\u672A\u63D0\u4F9B\uFF0C\u56DE\u9000\u5230 <code>themeConfig.author</code></p><p>(<code>string</code> \u7C7B\u578B\uFF0C\u4EC5\u751F\u6210 <code>name</code>)</p></li></ul></li></ul></li><li><p><strong>contributor</strong></p><ul><li><p>\u7C7B\u578B: <code>FeedContributor[] | FeedContributor</code></p></li><li><p>\u542B\u4E49: Feed \u9879\u76EE\u7684\u8D21\u732E\u8005</p></li><li><p>\u503C:</p><ul><li><p><code>frontmatter.feed.contributor</code></p></li><li><p>\u5982\u679C\u4E0A\u8FF0\u672A\u63D0\u4F9B\uFF0C\u56DE\u9000\u5230 <code>frontmatter.author</code></p><p>(<code>string</code> \u7C7B\u578B\uFF0C\u4EC5\u751F\u6210 <code>name</code>)</p></li><li><p>\u5982\u679C\u4E0A\u8FF0\u672A\u63D0\u4F9B\uFF0C\u56DE\u9000\u5230 <code>themeConfig.author</code></p><p>(<code>string</code> \u7C7B\u578B\uFF0C\u4EC5\u751F\u6210 <code>name</code>)</p></li></ul></li></ul></li><li><p><strong>category</strong></p><ul><li><p>\u7C7B\u578B: <code>FeedCategory[] | FeedCategory</code></p></li><li><p>\u542B\u4E49: Feed \u9879\u76EE\u7684\u5206\u7C7B</p></li><li><p>\u503C:</p><ul><li><p><code>frontmatter.feed.category</code></p></li><li><p>\u5982\u679C\u4E0A\u8FF0\u672A\u63D0\u4F9B\uFF0C\u56DE\u9000\u5230 <code>frontmatter.category</code></p><p>(<code>string</code> \u7C7B\u578B\uFF0C\u4EC5\u751F\u6210 <code>name</code>)</p></li></ul></li></ul></li><li><p><strong>pubDate</strong></p><ul><li>\u7C7B\u578B: <code>Date</code></li><li>\u542B\u4E49: Feed \u9879\u76EE\u7684\u53D1\u5E03\u65E5\u671F</li><li>\u503C: <code>frontmatter.time</code></li></ul></li><li><p><strong>lastUpdated</strong></p><ul><li>\u7C7B\u578B: <code>Date</code></li><li>\u542B\u4E49: Feed \u9879\u76EE\u7684\u66F4\u65B0\u65E5\u671F</li><li>\u503C: \u901A\u8FC7 Git \u751F\u6210</li></ul></li><li><p><strong>content</strong></p><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u542B\u4E49: Feed \u9879\u76EE\u7684\u5185\u5BB9</li><li>\u503C: \u7ECF\u8FC7\u5904\u7406\u7684\u9875\u9762\u7684 HTML \u5185\u5BB9</li></ul></li><li><p><strong>image</strong></p><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u542B\u4E49: Feed \u9879\u76EE\u7684\u5C01\u9762</li><li>\u503C: <ul><li><code>frontmatter.image</code></li><li>\u5982\u679C\u4E0A\u8FF0\u672A\u63D0\u4F9B\uFF0C\u56DE\u9000\u5230\u9875\u9762\u5185\u5BB9\u4E2D\u7B2C\u4E00\u4E2A\u975E\u76F8\u5BF9\u94FE\u63A5\u7684\u56FE\u7247\u5730\u5740</li></ul></li></ul></li><li><p><strong>enclosure</strong></p><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u542B\u4E49: Feed \u9879\u76EE\u7684\u5A92\u4F53</li><li>\u503C: \u901A\u8FC7\u4E0A\u65B9\u7684 image \u9009\u9879\u751F\u6210</li></ul></li><li><p><strong>copyright</strong></p><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u542B\u4E49: Feed \u9879\u76EE\u7684\u7248\u6743\u4FE1\u606F</li><li>\u503C: <ul><li><code>frontmatter.copyrightText</code></li><li>\u5982\u679C\u4E0A\u8FF0\u672A\u63D0\u4F9B\uFF0C\u5C1D\u8BD5\u751F\u6210 <code>Copyright by author</code> \u7248\u6743\u4FE1\u606F</li></ul></li></ul></li></ul>`,49);function l(t,i){return s}var c=n(a,[["render",l]]);export{c as default};