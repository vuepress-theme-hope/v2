import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as s,g as a}from"./app.bdb7652d.js";const i={},d=a(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="\u5E9F\u5F03" tabindex="-1"><a class="header-anchor" href="#\u5E9F\u5F03" aria-hidden="true">#</a> \u5E9F\u5F03</h3><ul><li><p><code>time</code> \u6807\u8BB0\u4E3A\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 <code>date</code></p></li><li><p><code>categories</code> \u6807\u8BB0\u4E3A\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 <code>category</code></p></li><li><p><code>tags</code> \u6807\u8BB0\u4E3A\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 <code>tag</code></p></li></ul><h3 id="\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u53D8\u66F4" aria-hidden="true">#</a> \u53D8\u66F4</h3><ul><li><p><code>author</code> \u7C7B\u578B\u4ECE <code>string | undefined</code> \u6539\u4E3A <code>AuthorInfo[] | AuthorInfo | string[] | string | undefined</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u6539\u52A8\u5141\u8BB8\u4F60\u6DFB\u52A0\u591A\u4E2A\u4F5C\u8005\uFF0C\u5E76\u4E3A\u5176\u8BBE\u7F6E\u7F51\u7AD9\u3002</p></li><li><p><code>date</code> \u73B0\u5728\u4EC5\u652F\u6301\u4F7F\u7528 <code>-</code> \u6807\u8BB0\u7684\u6807\u51C6 DateString</p></li><li><p><code>category</code> \u7C7B\u578B\u4ECE <code>string | undefined</code> \u6539\u4E3A <code>string[] | string | undefined</code></p><p>\u4E3B\u9898\u73B0\u5728\u652F\u6301\u591A\u4E2A\u5206\u7C7B\u3002</p></li><li><p><code>pageInfo</code> \u7C7B\u578B\u4ECE <code>PageInfo[] | false</code> \u6539\u4E3A <code>ArticleInfo[] | false</code>\u3002</p><p>\u53EF\u586B\u5165\u7684\u503C\u4ECE <code>&quot;author&quot;</code>, <code>&quot;time&quot;</code>, <code>&quot;category&quot;</code>, <code>&quot;tag&quot;</code>, <code>&quot;reading-time&quot;</code>, <code>&quot;word&quot;</code>, <code>&quot;visitor&quot;</code> \u6539\u4E3A <code>&quot;Author&quot;</code>, <code>&quot;Date&quot;</code>, <code>&quot;Original&quot;</code>, <code>&quot;Category&quot;</code>, <code>&quot;Tag&quot;</code>, <code>&quot;ReadingTime&quot;</code>, <code>&quot;Word&quot;</code>, <code>&quot;PageView&quot;</code></p></li><li><p><code>sidebarDepth</code> \u91CD\u547D\u540D\u4E3A <code>headerDepth</code></p></li><li><p><code>copyrightText</code> \u91CD\u547D\u540D\u4E3A <code>copyright</code></p></li><li><p><code>anchorDisplay</code> \u91CD\u547D\u540D\u4E3A <code>toc</code></p></li><li><p><code>updateTime</code> \u91CD\u547D\u540D\u4E3A <code>lastUpdated</code></p></li><li><p><code>prev</code> \u548C <code>next</code> \u7C7B\u578B\u7531 <code>string | false</code> \u6539\u4E3A <code>AutoLink | string | false</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AutoLink</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="\u79FB\u9664" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664" aria-hidden="true">#</a> \u79FB\u9664</h3><ul><li><p>\u79FB\u9664 <code>password</code></p><p>\u51FA\u4E8E\u5B89\u5168\u6027\u8003\u8651 V2 \u79FB\u9664\u4E86\u8FD9\u79CD\u901A\u8FC7\u5BC6\u7801\u539F\u6587\u52A0\u5BC6\u7684\u65B9\u5F0F\u3002</p></li><li><p>\u79FB\u9664\u539F <code>copyright</code></p><p>\u76F8\u5173\u63D2\u4EF6\u6682\u672A\u9002\u914D V2\u3002</p></li><li><p>\u79FB\u9664 <code>mediaLink</code></p><p>\u9875\u811A\u4E0D\u518D\u5C55\u793A\u5A92\u4F53\u94FE\u63A5\u3002</p></li></ul><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2><ul><li><p>\u4EE3\u7801\u6F14\u793A\u8BED\u6CD5\u53D8\u66F4</p><p>\u65E7\u8BED\u6CD5:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [vue] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [react] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B0\u8BED\u6CD5:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: normal-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: vue-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: react-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4EE3\u7801\u7EC4\u8BED\u6CD5\u53D8\u66F4</p><p>\u65E7\u8BED\u6CD5:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:::: code-group

::: code-group-item pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: code-group-item npm:active

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> init vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B0\u8BED\u6CD5:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: code-tabs

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab:active npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> init vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40" aria-hidden="true">#</a> \u5E03\u5C40</h2><h3 id="\u9879\u76EE\u4E3B\u9875" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4E3B\u9875" aria-hidden="true">#</a> \u9879\u76EE\u4E3B\u9875</h3><p>\u9879\u76EE\u4E3B\u9875 frontmatter \u9009\u9879\u5DF2\u66F4\u6539\u3002</p><ul><li><code>title</code> \u91CD\u547D\u540D\u4E3A <code>heroText</code></li><li><code>darkHeroImage</code> \u91CD\u547D\u540D\u4E3A <code>heroImageDark</code></li><li><code>action</code> \u91CD\u547D\u540D\u4E3A <code>actions</code></li></ul>`,13),c=[d];function o(l,t){return e(),s("div",null,c)}var u=n(i,[["render",o],["__file","page.html.vue"]]);export{u as default};
