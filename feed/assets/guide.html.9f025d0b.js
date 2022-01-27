import{r as c,o as p,a as l,d as n,b as a,w as o,F as r,f as t,e}from"./app.7ad3f9be.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=t('<h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p><code>vuepress-plugin-feed2</code> \u63D2\u4EF6\u4F1A\u81EA\u52A8\u4E3A\u4F60\u751F\u6210\u4EE5\u4E0B\u4E09\u79CD\u683C\u5F0F\u7684 feed \u6587\u4EF6:</p><ul><li>Atom 1.0</li><li>JSON 1.1</li><li>RSS 2.0</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Atom \u548C JSON \u662F\u4E3A\u4E86\u63D0\u4F9B\u66F4\u591A Feed \u8F6F\u4EF6\u7684\u9002\u914D\u800C\u63D0\u4F9B\u7684\u3002</p><p>\u5982\u679C\u53EF\u4EE5\uFF0C\u8BF7\u5C3D\u53EF\u80FD\u4F7F\u7528 RSS\u3002</p></div><p>\u8003\u8651\u5230\u73B0\u5728 Feed \u5DF2\u7ECF\u5F88\u5C0F\u4F17\uFF0C\u672C\u63D2\u4EF6\u65E8\u5728\u63D0\u4F9B\u6700\u5C0F\u914D\u7F6E\u6765\u5C3D\u53EF\u80FD\u81EA\u52A8\u751F\u6210\u8BE6\u7EC6\u7684 Feed \u6587\u4EF6\u3002\u5F53\u7136\u672C\u63D2\u4EF6\u4E5F\u9884\u7559\u4E86\u5145\u8DB3\u7684\u8BBE\u7F6E\u9879\uFF0C\u4EE5\u8BA9\u4F60\u81EA\u7531\u5B9A\u4E49 Feed \u7684\u8F93\u51FA\u5185\u5BB9\u3002</p><p>\u4E3A\u4E86\u6B63\u786E\u751F\u6210\u94FE\u63A5\u5730\u5740\uFF0C\u4F60\u9700\u8981\u5728\u63D2\u4EF6\u9009\u9879\u6216\u8005 themeConfig \u4E2D\u63D0\u4F9B <code>hostname</code> (\u90E8\u7F72\u57DF\u540D)\u3002\u5176\u4ED6\u9009\u9879\u5747\u662F\u9009\u586B\u7684\u3002</p><h2 id="\u9891\u9053\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9891\u9053\u8BBE\u7F6E" aria-hidden="true">#</a> \u9891\u9053\u8BBE\u7F6E</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>channel</code> \u9009\u9879\u6765\u81EA\u81EA\u5B9A\u4E49 Feed \u9891\u9053\u7684\u5404\u9879\u4FE1\u606F\u3002</p><p>\u6211\u4EEC\u63A8\u8350\u8FDB\u884C\u5982\u4E0B\u8BBE\u7F6E:</p><ul><li>\u5C06\u5EFA\u7ACB Feed \u7684\u65E5\u671F\u8F6C\u6362\u4E3A ISOString \u5199\u5165\u5230 <code>channel.pubDate</code> \u4E2D</li><li>\u901A\u8FC7 <code>channel.ttl</code> \u4E2D\u8BBE\u7F6E\u5185\u5BB9\u7684\u66F4\u65B0\u5468\u671F(\u5355\u4F4D: \u5206\u949F)</li><li>\u901A\u8FC7 <code>channel.copyright</code> \u8BBE\u7F6E\u7248\u6743\u4FE1\u606F</li><li>\u901A\u8FC7 <code>channel.author</code> \u8BBE\u7F6E\u9891\u9053\u4F5C\u8005\uFF0C\u6216\u8BBE\u7F6E <code>themeConfig.author</code> \u4E3A\u4F5C\u8005\u540D\u79F0\u3002</li></ul><div class="custom-container tip"><p class="custom-container-title">\u9ED8\u8BA4\u9891\u9053\u8BBE\u7F6E</p><ul><li><p>\u9891\u9053\u7684\u6807\u9898\u3001\u63CF\u8FF0\u9ED8\u8BA4\u4E3A\u7AD9\u70B9\u7684\u540D\u79F0\u4E0E\u94FE\u63A5\u3002</p></li><li><p>\u9891\u9053\u7684\u94FE\u63A5\u3001\u6700\u540E\u66F4\u65B0\u65F6\u95F4\u4F1A\u7531\u63D2\u4EF6\u81EA\u52A8\u751F\u6210\u3002</p></li><li><p>\u9891\u9053\u7684\u7248\u6743\u4FE1\u606F\u4F1A\u5C1D\u8BD5\u4ECE\u9875\u811A\u7684\u7248\u6743\u4FE1\u606F\u4E2D\u8BFB\u53D6\u3002</p></li></ul></div>',11),m=e("\u8BE6\u7EC6\u7684\u9009\u9879\u53CA\u5176\u9ED8\u8BA4\u503C\u8BE6\u89C1 "),b=e("\u914D\u7F6E \u2192 \u9891\u9053\u8BBE\u7F6E"),h=t(`<h2 id="\u9879\u76EE\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u8BBE\u7F6E" aria-hidden="true">#</a> \u9879\u76EE\u8BBE\u7F6E</h2><h3 id="\u9879\u76EE\u9ED8\u8BA4\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u9ED8\u8BA4\u751F\u6210" aria-hidden="true">#</a> \u9879\u76EE\u9ED8\u8BA4\u751F\u6210</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u6587\u7AE0\u5747\u4F1A\u88AB\u6DFB\u52A0\u81F3 feed \u6D41\u3002</p><div class="custom-container info"><p class="custom-container-title">\u6587\u7AE0</p><p>\u6240\u6709 <code>frontmatter.article</code> \u4E0D\u4E3A <code>false</code> \u4E14\u4E0D\u662F\u4E3B\u9875\u7684\u9875\u9762\u5747\u4F1A\u88AB\u89C6\u4E3A\u6587\u7AE0\u3002</p></div><p><code>vuepress-plugin-feed2</code> \u4F1A\u4ECE frontmatter \u4E2D\u8BFB\u53D6\u4EE5\u4E0B\u5185\u5BB9:</p><ul><li><p><code>description</code>: \u6587\u7AE0\u7684\u63CF\u8FF0\u4FE1\u606F</p></li><li><p><code>author</code>: \u6587\u7AE0\u7684\u4F5C\u8005\u540D\u79F0</p></li><li><p><code>copyrightText</code>: \u6587\u7AE0\u7684\u7248\u6743\u4FE1\u606F</p></li><li><p><code>time</code>: \u6587\u7AE0\u7684\u53D1\u5E03\u65F6\u95F4</p></li><li><p><code>image</code>: \u6587\u7AE0\u7684\u5C01\u9762</p></li></ul><p><code>vuepress-plugin-feed2</code> \u4E5F\u4F1A\u4F7F\u7528\u4EE5\u4E0B\u5185\u5BB9:</p><ul><li><code>page.excerpt</code>: \u5728 <code>&lt;!-- more --&gt;</code> \u6CE8\u91CA\u524D\u7684\u5185\u5BB9\uFF0C\u7528\u4F5C\u6587\u7AE0\u7684\u5907\u9009\u63CF\u8FF0</li><li>\u9875\u9762\u6E32\u67D3\u7684\u7F51\u9875\u5185\u5BB9: \u7528\u4E8E\u63CF\u8FF0 Feed \u9879\u76EE\u7684\u5185\u5BB9</li></ul><h3 id="\u81EA\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49</h3><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E frontmatter \u4E2D\u7684 feed \u9009\u9879\uFF0C\u5BF9\u7279\u5B9A\u6587\u7AE0\u7684 feed \u9879\u76EE\u751F\u6210\u8FDB\u884C\u63A7\u5236\u3002</p><p>\u5982\u679C\u4F60\u60F3\u5728 feed \u4E2D\u79FB\u9664\u6307\u5B9A\u9875\u9762\uFF0C\u4F60\u53EF\u4EE5\u5728\u8BE5\u9875\u9762\u7684 frontmatter \u4E2D\u5C06 <code>feed.enable</code> \u8BBE\u7F6E\u4E3A <code>false</code>\u3002</p><p>\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>frontmatter.feed</code> \u76F4\u63A5\u5411 feed \u63D2\u4EF6\u4F20\u5165\u5185\u5BB9\u3002\u652F\u6301\u7684\u9009\u9879\u5982\u4E0B:</p><ul><li><p><code>feed.title</code>: \u4E3A Feed \u9879\u76EE\u8986\u76D6\u9ED8\u8BA4\u7684\u6587\u7AE0\u6807\u9898</p></li><li><p><code>feed.description</code>: \u4E3A Feed \u9879\u76EE\u8986\u76D6\u9ED8\u8BA4\u7684\u6587\u7AE0\u63CF\u8FF0</p></li><li><p><code>feed.author</code>: \u8BBE\u7F6E\u591A\u4E2A\u4F5C\u8005\u4E0E\u8BE6\u7EC6\u7684\u4F5C\u8005\u4FE1\u606F\uFF0C\u683C\u5F0F\u4E3A <code>FeedAuthor[] | FeedAuthor</code>\u3002</p><blockquote><p>\u9ED8\u8BA4\u8BFB\u53D6 <code>frontmatter.author</code>\u3002</p></blockquote><details class="custom-block details"><summary>FeedAuthor \u683C\u5F0F</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details></li><li><p><code>feed.contributor</code>: \u8BBE\u7F6E\u591A\u4E2A\u8D21\u732E\u8005\u4E0E\u8BE6\u7EC6\u7684\u8D21\u732E\u8005\u4FE1\u606F\uFF0C\u683C\u5F0F\u4E3A <code>FeedContributor[] | FeedContributor</code></p><blockquote><p><code>FeedContributor</code> \u9009\u9879\u4E0E <code>FeedAuthor</code> \u5B8C\u5168\u76F8\u540C\u3002 \u8BE5\u9009\u9879\u9ED8\u8BA4\u540C <code>feed.author</code>\u3002</p></blockquote></li><li><p><code>feed.category</code>: \u8BBE\u7F6E\u591A\u4E2A\u8BE6\u7EC6\u7684\u5206\u7C7B\u4FE1\u606F\uFF0C\u683C\u5F0F\u4E3A <code>FeedCategory[] | FeedCategory</code></p><details class="custom-block details"><summary>FeedCategory \u683C\u5F0F</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedCategory</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** \u5206\u7C7B\u540D\u79F0 */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * \u5206\u7C7B\u7684\u57DF\u540D
   *
   * <span class="token keyword">@description</span> rss format only
   */</span>
  domain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * \u5206\u7C7B scheme \u7684 URI
   *
   * <span class="token keyword">@description</span> atom format only
   */</span>
  scheme<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details></li><li><p><code>feed.guid</code>: \u8986\u76D6\u9ED8\u8BA4\u7684 Feed \u9879\u76EE\u6807\u8BC6\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u9875\u9762\u6C38\u4E45\u94FE\u63A5\uFF0C\u82E5\u4E0D\u5B58\u5728\u56DE\u9000\u5230\u9875\u9762\u94FE\u63A5\u3002</p></li></ul>`,13),k=e("\u8BE6\u7EC6\u7684\u9009\u9879\u53CA\u5176\u9ED8\u8BA4\u503C\u8BE6\u89C1 "),f=e("\u914D\u7F6E \u2192 \u9879\u76EE\u8BBE\u7F6E"),g=n("h2",{id:"\u8F93\u51FA\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8F93\u51FA\u914D\u7F6E","aria-hidden":"true"},"#"),e(" \u8F93\u51FA\u914D\u7F6E")],-1),_=n("p",null,[e("\u4F60\u53EF\u901A\u8FC7\u914D\u7F6E\u9009\u9879\u4E2D\u7684 "),n("code",null,"output"),e(" \u6765\u51B3\u5B9A\u8F93\u51FA\u54EA\u4E9B\u683C\u5F0F\u7684 Feed \u6587\u4EF6\u4EE5\u53CA\u5B83\u4EEC\u7684\u4F4D\u7F6E\u3002")],-1),F=e("\u8BE6\u7EC6\u7684\u9009\u9879\u53CA\u5176\u9ED8\u8BA4\u503C\u8BE6\u89C1 "),v=e("\u914D\u7F6E \u2192 \u8F93\u51FA\u8BBE\u7F6E");function y(x,C){const s=c("RouterLink");return p(),l(r,null,[u,n("p",null,[m,a(s,{to:"/zh/config/channel.html"},{default:o(()=>[b]),_:1})]),h,n("p",null,[k,a(s,{to:"/zh/config/item.html"},{default:o(()=>[f]),_:1})]),g,_,n("p",null,[F,a(s,{to:"/zh/config/#output"},{default:o(()=>[v]),_:1})])],64)}var w=i(d,[["render",y]]);export{w as default};
