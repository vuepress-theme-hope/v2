import{_ as n,W as e,X as s,a1 as a}from"./framework-eb069dea.js";const i={},t=a(`<p>你可以通过控制插件选项中的 <code>getter</code> 来完全控制 Feed 项目的生成。</p><h2 id="getter-title" tabindex="-1"><a class="header-anchor" href="#getter-title" aria-hidden="true">#</a> getter.title</h2><ul><li>类型: <code>(page: Page) =&gt; string</code></li></ul><p>项目标题获取器</p><h2 id="getter-link" tabindex="-1"><a class="header-anchor" href="#getter-link" aria-hidden="true">#</a> getter.link</h2><ul><li>类型: <code>(page: Page) =&gt; string</code></li></ul><p>项目链接获取器</p><h2 id="getter-description" tabindex="-1"><a class="header-anchor" href="#getter-description" aria-hidden="true">#</a> getter.description</h2><ul><li>类型: <code>(page: Page) =&gt; string | undefined</code></li></ul><p>项目描述获取器</p><div class="hint-container note"><p class="hint-container-title">注</p><p>由于为 Atom 在摘要中支持 HTML，所以如果可能的话，你可以在这里返回 HTML 内容，但内容必须以标记 <code>html:</code> 开头。</p></div><h2 id="getter-content" tabindex="-1"><a class="header-anchor" href="#getter-content" aria-hidden="true">#</a> getter.content</h2><ul><li>类型: <code>(page: Page) =&gt; string</code></li></ul><p>项目内容获取器</p><h2 id="getter-author" tabindex="-1"><a class="header-anchor" href="#getter-author" aria-hidden="true">#</a> getter.author</h2><ul><li>类型: <code>(page: Page) =&gt; FeedAuthor[]</code></li></ul><p>项目作者获取器。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>获取器应在作者信息缺失时返回空数组。</p></div><details class="hint-container details"><summary>FeedAuthor 格式</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 作者名字
   */</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者邮件
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者网站
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者头像
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-category" tabindex="-1"><a class="header-anchor" href="#getter-category" aria-hidden="true">#</a> getter.category</h2><ul><li>类型: <code>(page: Page) =&gt; FeedCategory[] | undefined</code></li></ul><p>项目分类获取器。</p><details class="hint-container details"><summary>FeedCategory 格式</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedCategory</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 分类名称
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 标识分类法的字符串
   *
   * <span class="token keyword">@description</span> rss format only
   */</span>
  domain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * URI 标识的分类 scheme
   *
   * <span class="token keyword">@description</span> atom format only
   */</span>
  scheme<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-enclosure" tabindex="-1"><a class="header-anchor" href="#getter-enclosure" aria-hidden="true">#</a> getter.enclosure</h2><ul><li>类型: <code>(page: Page) =&gt; FeedEnclosure | undefined</code></li></ul><p>项目附件获取器。</p><details class="hint-container details"><summary>FeedEnclosure 格式</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedEnclosure</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Enclosure 地址
   */</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 类型
   *
   * <span class="token keyword">@description</span> 应为一个标准的 MIME 类型，rss format only
   */</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 按照字节数计算的大小
   *
   * <span class="token keyword">@description</span> rss format only
   */</span>
  length<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-publishdate" tabindex="-1"><a class="header-anchor" href="#getter-publishdate" aria-hidden="true">#</a> getter.publishDate</h2><ul><li>类型: <code>(page: Page) =&gt; Date | undefined</code></li></ul><p>项目发布日期获取器</p><h2 id="getter-lastupdatedate" tabindex="-1"><a class="header-anchor" href="#getter-lastupdatedate" aria-hidden="true">#</a> getter.lastUpdateDate</h2><ul><li>类型: <code>(page: Page) =&gt; Date</code></li></ul><p>项目最后更新日期获取器</p><h2 id="getter-image" tabindex="-1"><a class="header-anchor" href="#getter-image" aria-hidden="true">#</a> getter.image</h2><ul><li>类型: <code>(page: Page) =&gt; string</code></li></ul><p>项目图片获取器</p><div class="hint-container note"><p class="hint-container-title">注</p><p>请注意你必须确保返回一个完整的 URL。</p></div><h2 id="getter-contributor" tabindex="-1"><a class="header-anchor" href="#getter-contributor" aria-hidden="true">#</a> getter.contributor</h2><ul><li>类型: <code>(page: Page) =&gt; FeedContributor[]</code></li></ul><p>项目贡献者获取器</p><div class="hint-container note"><p class="hint-container-title">注</p><p>获取器应在贡献者信息缺失时返回空数组。</p></div><details class="hint-container details"><summary>FeedContributor 格式</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedContributor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 作者名字
   */</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者邮件
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者网站
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者头像
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-copyright" tabindex="-1"><a class="header-anchor" href="#getter-copyright" aria-hidden="true">#</a> getter.copyright</h2><ul><li>类型: <code>(page: Page) =&gt; string | undefined</code></li></ul><p>项目版权获取器</p>`,45),l=[t];function c(d,r){return e(),s("div",null,l)}const p=n(i,[["render",c],["__file","getter.html.vue"]]);export{p as default};
