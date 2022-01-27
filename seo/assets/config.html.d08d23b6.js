import{f as n}from"./app.61379ac1.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=n(`<h2 id="\u63D2\u4EF6\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u9009\u9879" aria-hidden="true">#</a> \u63D2\u4EF6\u9009\u9879</h2><h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u9ED8\u8BA4\u4F5C\u8005</p><h3 id="twitterid" tabindex="-1"><a class="header-anchor" href="#twitterid" aria-hidden="true">#</a> twitterID</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u586B\u5165\u4F60\u7684 twitter \u7528\u6237\u540D</p><h3 id="restrictions" tabindex="-1"><a class="header-anchor" href="#restrictions" aria-hidden="true">#</a> restrictions</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u5185\u5BB9\u7684\u5E74\u9F84\u5206\u7EA7\uFF0C\u683C\u5F0F\u4E3A <code>[int]+</code>\uFF0C\u5982 <code>&#39;13+&#39;</code></p><h3 id="seo" tabindex="-1"><a class="header-anchor" href="#seo" aria-hidden="true">#</a> seo</h3><ul><li>\u7C7B\u578B: <code>(info: PageSeoInfo) =&gt; Record&lt;string, string&gt;</code></li></ul><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u6B64\u9009\u9879\u6765\u6CE8\u5165\u65B0\u7684\u6216\u8986\u76D6\u6389\u9ED8\u8BA4\u751F\u6210\u7684 SEO\uFF0C\u4F60\u9700\u8981\u6309\u7167 <code>&lt;property&gt;: &lt;content&gt;</code> \u7684\u683C\u5F0F\u6765\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u3002</p><h3 id="custommeta" tabindex="-1"><a class="header-anchor" href="#custommeta" aria-hidden="true">#</a> customMeta</h3><ul><li>\u7C7B\u578B: <code>(meta: Meta[], info: PageSeoInfo) =&gt; void</code></li></ul><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u6B64\u9009\u9879\u6765\u76F4\u63A5\u6CE8\u5165\u4EFB\u610F\u683C\u5F0F\u7684 <code>&lt;meta&gt;</code> \u6807\u7B7E\u5230 <code>&lt;head&gt;</code>\u3002</p><h2 id="\u76F8\u5173\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u63A5\u53E3" aria-hidden="true">#</a> \u76F8\u5173\u63A5\u53E3</h2><ul><li><p><code>PageSeoInfo</code> \u7684\u63A5\u53E3\u7C7B\u578B\u5982\u4E0B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PageSeoInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** \u9875\u9762\u5BF9\u8C61 */</span>
  page<span class="token operator">:</span> Page<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u7AD9\u70B9\u5BF9\u8C61 */</span>
  site<span class="token operator">:</span> SiteConfig<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u4E3B\u9898\u914D\u7F6E */</span>
  themeConfig<span class="token operator">:</span> ThemeConfig<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u652F\u6301\u7684\u591A\u8BED\u8A00 */</span>
  locales<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u5F53\u524D\u9875\u9762\u5730\u5740 */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li><p><code>Meta</code> \u7684\u63A5\u53E3\u7C7B\u578B\u4E3A <code>Record&lt;&quot;content&quot; | &quot;name&quot; | &quot;charset&quot; | &quot;http-equiv&quot;, string&gt;</code></p><p><code>Meta</code> \u5BF9\u8C61\u7684\u952E\u4F1A\u6E32\u67D3\u4E3A meta \u6807\u7B7E\u7684\u5C5E\u6027\uFF0C\u503C\u4F1A\u6E32\u67D3\u4E3A\u5BF9\u5E94\u5C5E\u6027\u7684\u503C\u3002</p><p>\u8BE6\u60C5\u8BF7\u89C1 <a href="https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html#meta" target="_blank" rel="noopener noreferrer">Frontmatter \u2192 Meta</a></p></li></ul>`,18);function t(o,c){return s}var i=e(a,[["render",t]]);export{i as default};
