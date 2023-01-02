import{a3 as n,Z as e,_ as s,a5 as a}from"./framework-f408d5b9.js";const i={},d=a(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="废弃" tabindex="-1"><a class="header-anchor" href="#废弃" aria-hidden="true">#</a> 废弃</h3><ul><li><p><code>time</code> 标记为废弃，请使用 <code>date</code></p></li><li><p><code>categories</code> 标记为废弃，请使用 <code>category</code></p></li><li><p><code>tags</code> 标记为废弃，请使用 <code>tag</code></p></li></ul><h3 id="变更" tabindex="-1"><a class="header-anchor" href="#变更" aria-hidden="true">#</a> 变更</h3><ul><li><p><code>author</code> 类型从 <code>string | undefined</code> 改为 <code>AuthorInfo[] | AuthorInfo | string[] | string | undefined</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 作者姓名
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者网站
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者 Email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此改动允许你添加多个作者，并为其设置网站。</p></li><li><p><code>date</code> 现在仅支持使用 <code>-</code> 标记的标准 DateString</p></li><li><p><code>category</code> 类型从 <code>string | undefined</code> 改为 <code>string[] | string | undefined</code></p><p>主题现在支持多个分类。</p></li><li><p><code>pageInfo</code> 类型从 <code>PageInfo[] | false</code> 改为 <code>ArticleInfo[] | false</code>。</p><p>可填入的值从 <code>&quot;author&quot;</code>, <code>&quot;time&quot;</code>, <code>&quot;category&quot;</code>, <code>&quot;tag&quot;</code>, <code>&quot;reading-time&quot;</code>, <code>&quot;word&quot;</code>, <code>&quot;visitor&quot;</code> 改为 <code>&quot;Author&quot;</code>, <code>&quot;Date&quot;</code>, <code>&quot;Original&quot;</code>, <code>&quot;Category&quot;</code>, <code>&quot;Tag&quot;</code>, <code>&quot;ReadingTime&quot;</code>, <code>&quot;Word&quot;</code>, <code>&quot;PageView&quot;</code></p></li><li><p><code>sidebarDepth</code> 重命名为 <code>headerDepth</code></p></li><li><p><code>copyrightText</code> 重命名为 <code>copyright</code></p></li><li><p><code>anchorDisplay</code> 重命名为 <code>toc</code></p></li><li><p><code>updateTime</code> 重命名为 <code>lastUpdated</code></p></li><li><p><code>prev</code> 和 <code>next</code> 类型由 <code>string | false</code> 改为 <code>AutoLinkOptions | string | false</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h3 id="移除" tabindex="-1"><a class="header-anchor" href="#移除" aria-hidden="true">#</a> 移除</h3><ul><li><p>移除 <code>password</code></p><p>出于安全性考虑 V2 移除了这种通过密码原文加密的方式。</p></li><li><p>移除原 <code>copyright</code></p><p>相关插件暂未适配 V2。</p></li><li><p>移除 <code>mediaLink</code></p><p>页脚不再展示媒体链接。</p></li></ul><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2><ul><li><p>代码演示语法变更</p><p>旧语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [vue] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [react] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: normal-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: vue-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: react-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>代码组语法变更</p><p>旧语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: code-tabs

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab:active npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> init vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h2><h3 id="项目主页" tabindex="-1"><a class="header-anchor" href="#项目主页" aria-hidden="true">#</a> 项目主页</h3><p>项目主页 frontmatter 选项已更改。</p><ul><li><code>title</code> 重命名为 <code>heroText</code></li><li><code>darkHeroImage</code> 重命名为 <code>heroImageDark</code></li><li><code>action</code> 重命名为 <code>actions</code></li></ul>`,13),c=[d];function o(l,t){return e(),s("div",null,c)}const r=n(i,[["render",o],["__file","page.html.vue"]]);export{r as default};
