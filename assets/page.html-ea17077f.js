import{a3 as e,Z as n,_ as a,a5 as s}from"./framework-f408d5b9.js";const i={},o=s(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="obsolete" tabindex="-1"><a class="header-anchor" href="#obsolete" aria-hidden="true">#</a> Obsolete</h3><ul><li><p>mark <code>time</code> as deprecated, use <code>date</code> instead</p></li><li><p>mark <code>categories</code> as deprecated, use <code>category</code> instead</p></li><li><p>mark <code>tags</code> as deprecated, use <code>tag</code> instead</p></li></ul><h3 id="changes" tabindex="-1"><a class="header-anchor" href="#changes" aria-hidden="true">#</a> Changes</h3><ul><li><p>change <code>author</code> type from <code>string | undefined</code> to <code>AuthorInfo[] | AuthorInfo | string[] | string | undefined</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Author name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author website
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This change allows you to add multiple authors and set up sites for them.</p></li><li><p><code>date</code> only supports standard DateString mark with <code>-</code></p></li><li><p>change <code>category</code> type from <code>string | undefined</code> to <code>string[] | string | undefined</code></p><p>The theme supports multiple categories.</p></li><li><p>change <code>pageInfo</code> type from <code>PageInfo[] | false</code> to <code>ArticleInfo[] | false</code>.</p><p>Available values ​​change from <code>&quot;author&quot;</code>, <code>&quot;time&quot;</code>, <code>&quot;category&quot;</code>, <code>&quot;tag&quot;</code>, <code>&quot;reading-time&quot;</code>, <code>&quot;word&quot;</code>, <code>&quot;visitor&quot;</code> to <code>&quot;Author&quot;</code>, <code>&quot;Date&quot;</code>, <code>&quot;Original&quot;</code>, <code>&quot;Category&quot;</code>, <code>&quot;Tag&quot;</code>, <code>&quot;ReadingTime&quot;</code>, <code>&quot;Word&quot;</code>, <code>&quot;Visitor&quot;</code></p></li><li><p>rename <code>sidebarDepth</code> to <code>headerDepth</code></p></li><li><p>rename <code>copyrightText</code> to <code>copyright</code></p></li><li><p>rename <code>anchorDisplay</code> to <code>toc</code></p></li><li><p>rename <code>updateTime</code> to <code>lastUpdated</code></p></li><li><p>change <code>prev</code> and <code>next</code> types from <code>string | false</code> to <code>AutoLinkOptions | string | false</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h3 id="deletion" tabindex="-1"><a class="header-anchor" href="#deletion" aria-hidden="true">#</a> Deletion</h3><ul><li><p>remove <code>password</code></p><p>For security reasons, V2 removes this method of encrypting the original text of the cipher.</p></li><li><p>remove <code>copyright</code></p><p>Related plugin is not yet compatible with V2.</p></li><li><p>remove <code>mediaLink</code></p><p>Footer no longer displays media links.</p></li></ul><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2><ul><li><p>Code demo syntax changed</p><p>Before:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [vue] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [react] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: normal-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: vue-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: react-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Code Group changed to code tab</p><p>Before:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: code-tabs

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab:active npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> init vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h2><h3 id="project-homepage" tabindex="-1"><a class="header-anchor" href="#project-homepage" aria-hidden="true">#</a> Project HomePage</h3><p>Project HomePage frontmatter options are change.</p><ul><li>rename <code>title</code> to <code>heroText</code></li><li>rename <code>darkHeroImage</code> to <code>heroImageDark</code></li><li>rename <code>action</code> to <code>actions</code></li></ul>`,13),d=[o];function c(t,l){return n(),a("div",null,d)}const p=e(i,[["render",c],["__file","page.html.vue"]]);export{p as default};
