import{a3 as e,Z as n,_ as a,a5 as s}from"./framework-f408d5b9.js";const i={},d=s(`<p>你可以在页面的 frontmatter 配置以下选项控制插件行为。</p><h2 id="copyright2-插件" tabindex="-1"><a class="header-anchor" href="#copyright2-插件" aria-hidden="true">#</a> copyright2 插件</h2><h3 id="copy-triggerwords" tabindex="-1"><a class="header-anchor" href="#copy-triggerwords" aria-hidden="true">#</a> copy.triggerWords</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>100</code></li></ul><p>触发附加版权的最小字数</p><h3 id="copy-disablecopy" tabindex="-1"><a class="header-anchor" href="#copy-disablecopy" aria-hidden="true">#</a> copy.disableCopy</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>禁用复制</p><h3 id="copy-disableselection" tabindex="-1"><a class="header-anchor" href="#copy-disableselection" aria-hidden="true">#</a> copy.disableSelection</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>禁用选择</p><h2 id="feed2-插件" tabindex="-1"><a class="header-anchor" href="#feed2-插件" aria-hidden="true">#</a> feed2 插件</h2><h3 id="feed-title" tabindex="-1"><a class="header-anchor" href="#feed-title" aria-hidden="true">#</a> feed.title</h3><ul><li>类型: <code>string</code></li></ul><p>Feed 项目的标题</p><h3 id="feed-description" tabindex="-1"><a class="header-anchor" href="#feed-description" aria-hidden="true">#</a> feed.description</h3><ul><li>类型: <code>string</code></li></ul><p>Feed 项目的描述</p><h3 id="feed-content" tabindex="-1"><a class="header-anchor" href="#feed-content" aria-hidden="true">#</a> feed.content</h3><ul><li>类型: <code>string</code></li></ul><p>Feed 项目的内容</p><h3 id="feed-author" tabindex="-1"><a class="header-anchor" href="#feed-author" aria-hidden="true">#</a> feed.author</h3><ul><li>类型: <code>FeedAuthor[] | FeedAuthor</code></li></ul><p>Feed 项目的作者</p><details class="hint-container details"><summary>FeedAuthor 格式</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="feed-contributor" tabindex="-1"><a class="header-anchor" href="#feed-contributor" aria-hidden="true">#</a> feed.contributor</h3><ul><li>类型: <code>FeedContributor[] | FeedContributor</code></li></ul><p>Feed 项目的贡献者</p><details class="hint-container details"><summary>FeedContributor 格式</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedContributor</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="feed-guid" tabindex="-1"><a class="header-anchor" href="#feed-guid" aria-hidden="true">#</a> feed.guid</h3><ul><li>类型: <code>string</code></li></ul><p>Feed 项目的标识符，用于标识 Feed 项目。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>你应该确保此项全局唯一。</p></div><h2 id="sitemap2-插件" tabindex="-1"><a class="header-anchor" href="#sitemap2-插件" aria-hidden="true">#</a> sitemap2 插件</h2><h3 id="sitemap-changefreq" tabindex="-1"><a class="header-anchor" href="#sitemap-changefreq" aria-hidden="true">#</a> sitemap.changefreq</h3><ul><li>类型: <code>&quot;always&quot; | &quot;hourly&quot; | &quot;daily&quot; | &quot;weekly&quot; | &quot;monthly&quot; | &quot;yearly&quot; | &quot;never&quot;</code></li><li>默认值: <code>&quot;daily&quot;</code></li></ul><p>页面默认更新频率。它会覆盖插件选项中的 changefreq 选项。</p><h3 id="sitemap-exclude" tabindex="-1"><a class="header-anchor" href="#sitemap-exclude" aria-hidden="true">#</a> sitemap.exclude</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否不输出此页面到 Sitemap</p><h3 id="sitemap-priority" tabindex="-1"><a class="header-anchor" href="#sitemap-priority" aria-hidden="true">#</a> sitemap.priority</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>0.5</code></li></ul><p>页面优先级，范围 <code>0</code> 至 <code>1</code>。</p>`,43),l=[d];function t(o,c){return n(),a("div",null,l)}const p=e(i,[["render",t],["__file","plugins.html.vue"]]);export{p as default};
