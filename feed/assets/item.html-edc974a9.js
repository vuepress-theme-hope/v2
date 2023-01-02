import{_ as e,W as n,X as a,a1 as s}from"./framework-eb069dea.js";const i={},d=s(`<p>你可以通过配置每个页面的 Frontmatter，来对每个 Feed 项目生成进行单独的控制。</p><h2 id="添加与移除" tabindex="-1"><a class="header-anchor" href="#添加与移除" aria-hidden="true">#</a> 添加与移除</h2><p>默认情况下，所有文章均会被添加至 feed 流。如果你想在 feed 中移除特定页面，你可以在 frontmatter 中设置 <code>feed: false</code>。</p><h2 id="默认读取内容" tabindex="-1"><a class="header-anchor" href="#默认读取内容" aria-hidden="true">#</a> 默认读取内容</h2><p>Feed 项目生成中会读取 <code>page.except</code> 和页面的原本内容。</p><p>Feed 项目生成中读取的 frontmatter 选项及对应含义如下:</p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>类型: <code>string</code></li></ul><p>由 VuePress 自动生成，默认为页面的 h1 内容</p><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3><ul><li>类型: <code>string</code></li></ul><p>页面描述</p><h3 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h3><ul><li>类型: <code>Date</code></li></ul><p>页面的发布日期</p><h3 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> article</h3><ul><li>类型: <code>boolean</code></li></ul><p>该页面是否是文章</p><blockquote><p>如果此项设置为 <code>false</code>，则该页不会包含在最终的 feed 中。</p></blockquote><h3 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h3><ul><li>类型: <code>string</code></li></ul><p>页面版权信息</p><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><ul><li>类型: <code>string</code></li></ul><p>页面的封面/分享图，需为完整链接或绝对链接。</p><h2 id="frontmatter-中的-feed-配置" tabindex="-1"><a class="header-anchor" href="#frontmatter-中的-feed-配置" aria-hidden="true">#</a> FrontMatter 中的 Feed 配置</h2><h3 id="feed-title" tabindex="-1"><a class="header-anchor" href="#feed-title" aria-hidden="true">#</a> feed.title</h3><ul><li>类型: <code>string</code></li></ul><p>Feed 项目的标题</p><h3 id="feed-description" tabindex="-1"><a class="header-anchor" href="#feed-description" aria-hidden="true">#</a> feed.description</h3><ul><li>类型: <code>string</code></li></ul><p>Feed 项目的描述</p><h3 id="feed-content" tabindex="-1"><a class="header-anchor" href="#feed-content" aria-hidden="true">#</a> feed.content</h3><ul><li>类型: <code>string</code></li></ul><p>Feed 项目的内容</p><h3 id="feed-author" tabindex="-1"><a class="header-anchor" href="#feed-author" aria-hidden="true">#</a> feed.author</h3><ul><li>类型: <code>FeedAuthor[] | FeedAuthor</code></li></ul><p>Feed 项目的作者</p><details class="hint-container details"><summary>FeedAuthor 格式</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="feed-guid" tabindex="-1"><a class="header-anchor" href="#feed-guid" aria-hidden="true">#</a> feed.guid</h3><ul><li>类型: <code>string</code></li></ul><p>Feed 项目的标识符，用于标识 Feed 项目。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>你应该确保此项全局唯一。</p></div>`,47),t=[d];function l(r,c){return n(),a("div",null,t)}const p=e(i,[["render",l],["__file","item.html.vue"]]);export{p as default};
