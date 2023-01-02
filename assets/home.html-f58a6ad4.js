import{a3 as n,Z as e,_ as s,a5 as a}from"./framework-f408d5b9.js";const i={},l=a(`<h2 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>设置为 <code>true</code> 时启用首页样式</p><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>设置页面标题，会用于路径导航、页面增强等。</p><h2 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext" aria-hidden="true">#</a> heroText</h2><ul><li>类型: <code>string | false</code></li><li>默认值: <code>&quot;Hello&quot;</code></li></ul><p>主页标题</p><h2 id="tagline" tabindex="-1"><a class="header-anchor" href="#tagline" aria-hidden="true">#</a> tagline</h2><ul><li>类型: <code>string | false</code></li><li>默认值: <code>&quot;Welcome to your VuePress site&quot;</code></li></ul><p>附加文字描述</p><h2 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>主页图标 (logo) 地址，需要填入绝对路径 (图片需要放入 <code>.vuepress/public</code> 文件夹)</p><h2 id="heroimagedark" tabindex="-1"><a class="header-anchor" href="#heroimagedark" aria-hidden="true">#</a> heroImageDark</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>深色模式下主页图标 (logo) 地址，需要填入绝对路径 (图片需要放入 <code>.vuepress/public</code> 文件夹)，默认同 <code>heroImage</code>。</p><h2 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>主页图标的替代文字</p><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h2><ul><li><p>类型: <code>ThemeHomeActionOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeHomeActionOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 操作名称
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 操作链接
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 操作类型
   * <span class="token keyword">@default</span> &#39;default&#39;
   */</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;primary&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>主页操作</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h2><ul><li><p>类型: <code>ThemeHomeFeatureOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeHomeFeatureOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 功能名称
   */</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 功能描述
   */</span>
  details<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 功能图标
   *
   * <span class="token keyword">@description</span> 支持图片链接或者图标字体类
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 功能链接
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>特性说明</p>`,27),t=[l];function o(c,d){return e(),s("div",null,t)}const p=n(i,[["render",o],["__file","home.html.vue"]]);export{p as default};
