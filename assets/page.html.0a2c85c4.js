import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as s,g as a}from"./app.bdb7652d.js";const i={},d=a(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="\u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0435\u0435" tabindex="-1"><a class="header-anchor" href="#\u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0435\u0435" aria-hidden="true">#</a> \u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0435\u0435</h3><ul><li><p>\u043F\u043E\u043C\u0435\u0447\u0435\u043D\u043E <code>time</code> \u043A\u0430\u043A \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0435\u0435, \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C <code>date</code></p></li><li><p>\u043F\u043E\u043C\u0435\u0447\u0435\u043D\u043E <code>categories</code> \u043A\u0430\u043A \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0435\u0435, \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C <code>category</code></p></li><li><p>\u043F\u043E\u043C\u0435\u0447\u0435\u043D\u043E <code>tags</code> \u043A\u0430\u043A \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0435\u0435, \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C <code>tag</code></p></li></ul><h3 id="\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" tabindex="-1"><a class="header-anchor" href="#\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" aria-hidden="true">#</a> \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F</h3><ul><li><p>\u0438\u0437\u043C\u0435\u043D\u0435\u043D \u0442\u0438\u043F <code>author</code> \u0441 <code>string | undefined</code> \u043D\u0430 <code>AuthorInfo[] | AuthorInfo | string[] | string | undefined</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u042D\u0442\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0432\u0430\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0430\u0432\u0442\u043E\u0440\u043E\u0432 \u0438 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u043D\u0438\u0445 \u0441\u0430\u0439\u0442\u044B.</p></li><li><p><code>date</code> \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0443\u044E \u043C\u0435\u0442\u043A\u0443 DateString \u0441 <code>-</code></p></li><li><p>\u0438\u0437\u043C\u0435\u043D\u0435\u043D \u0442\u0438\u043F <code>category</code> \u0441 <code>string | undefined</code> \u043D\u0430 <code>string[] | string | undefined</code></p><p>\u0422\u0435\u043C\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439.</p></li><li><p>\u0438\u0437\u043C\u0435\u043D\u0435\u043D \u0442\u0438\u043F <code>pageInfo</code> \u0441 <code>PageInfo[] | false</code> \u043D\u0430 <code>ArticleInfo[] | false</code>.</p><p>\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0441 <code>&quot;author&quot;</code>, <code>&quot;time&quot;</code>, <code>&quot;category&quot;</code>, <code>&quot;tag&quot;</code>, <code>&quot;reading-time&quot;</code>, <code>&quot;word&quot;</code>, <code>&quot;visitor&quot;</code> \u043D\u0430 <code>&quot;Author&quot;</code>, <code>&quot;Date&quot;</code>, <code>&quot;Original&quot;</code>, <code>&quot;Category&quot;</code>, <code>&quot;Tag&quot;</code>, <code>&quot;ReadingTime&quot;</code>, <code>&quot;Word&quot;</code>, <code>&quot;Visitor&quot;</code></p></li><li><p>\u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043E <code>sidebarDepth</code> \u0432 <code>headerDepth</code></p></li><li><p>\u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043E <code>copyrightText</code> \u0432 <code>copyright</code></p></li><li><p>\u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043E <code>anchorDisplay</code> \u0432 <code>toc</code></p></li><li><p>\u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043E <code>updateTime</code> \u0432 <code>lastUpdated</code></p></li><li><p>\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u044B \u0442\u0438\u043F\u044B <code>prev</code> \u0438 <code>next</code> \u0441 <code>string | false</code> \u043D\u0430 <code>AutoLink | string | false</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AutoLink</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F" tabindex="-1"><a class="header-anchor" href="#\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F" aria-hidden="true">#</a> \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u044F</h3><ul><li><p>\u0443\u0434\u0430\u043B\u0435\u043D\u043E <code>password</code></p><p>\u0418\u0437 \u0441\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 V2 \u0443\u0431\u0438\u0440\u0430\u0435\u0442 \u044D\u0442\u043E\u0442 \u043C\u0435\u0442\u043E\u0434 \u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0448\u0438\u0444\u0440\u0430.</p></li><li><p>\u0443\u0434\u0430\u043B\u0435\u043D\u043E <code>copyright</code></p><p>\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0439 \u043F\u043B\u0430\u0433\u0438\u043D \u0435\u0449\u0435 \u043D\u0435 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 V2.</p></li><li><p>\u0443\u0434\u0430\u043B\u0435\u043D\u043E <code>mediaLink</code></p><p>\u0424\u0443\u0442\u0435\u0440 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043C\u0435\u0434\u0438\u0430-\u0441\u0441\u044B\u043B\u043A\u0438.</p></li></ul><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2><ul><li><p>\u0418\u0437\u043C\u0435\u043D\u0435\u043D \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441 \u0434\u0435\u043C\u043E-\u043A\u043E\u0434\u0430</p><p>\u0414\u043E:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [vue] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [react] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u041F\u043E\u0441\u043B\u0435:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: normal-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: vue-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: react-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u043E\u0434\u043E\u0432 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430 \u043D\u0430 \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u043A\u043E\u0434\u0430</p><p>\u0414\u043E:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:::: code-group

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u041F\u043E\u0441\u043B\u0435:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: code-tabs

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab:active npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> init vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u043C\u0430\u043A\u0435\u0442" tabindex="-1"><a class="header-anchor" href="#\u043C\u0430\u043A\u0435\u0442" aria-hidden="true">#</a> \u041C\u0430\u043A\u0435\u0442</h2><h3 id="\u0434\u043E\u043C\u0430\u0448\u043D\u044F\u044F-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430-\u043F\u0440\u043E\u0435\u043A\u0442\u0430" tabindex="-1"><a class="header-anchor" href="#\u0434\u043E\u043C\u0430\u0448\u043D\u044F\u044F-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430-\u043F\u0440\u043E\u0435\u043A\u0442\u0430" aria-hidden="true">#</a> \u0414\u043E\u043C\u0430\u0448\u043D\u044F\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430</h3><p>\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u044B \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B frontmatter \u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u0430.</p><ul><li>\u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043E <code>title</code> \u0432 <code>heroText</code></li><li>\u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043E <code>darkHeroImage</code> \u0432 <code>heroImageDark</code></li><li>\u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043E <code>action</code> \u0432 <code>actions</code></li></ul>`,13),c=[d];function o(l,t){return e(),s("div",null,c)}var u=n(i,[["render",o],["__file","page.html.vue"]]);export{u as default};
