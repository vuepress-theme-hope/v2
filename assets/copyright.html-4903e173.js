import{a3 as e,Z as n,_ as a,a5 as s}from"./framework-f408d5b9.js";const i={},l=s(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>vuepress-plugin-copyright2</code> 插件默认禁用，能在用户复制站点内容时添加版权信息。此插件还可以禁用站点复制或选择。</p><p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.copyright</code> 作为插件选项传递给 <code>vuepress-plugin-copyright2</code> 插件。</p><h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项" aria-hidden="true">#</a> 插件选项</h2><h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>部署的域名</p><h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3><ul><li>类型: <code>string | ((page: Page) =&gt; string)</code></li><li>必填: 否</li></ul><p>作者信息</p><h3 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> license</h3><ul><li>类型: <code>string | ((page: Page) =&gt; string)</code></li><li>必填: 否</li></ul><p>协议信息</p><h3 id="triggerwords" tabindex="-1"><a class="header-anchor" href="#triggerwords" aria-hidden="true">#</a> triggerWords</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>100</code></li></ul><p>触发附加版权的最小字数</p><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> global</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否全局启用</p><h3 id="disablecopy" tabindex="-1"><a class="header-anchor" href="#disablecopy" aria-hidden="true">#</a> disableCopy</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>禁用复制</p><h3 id="disableselection" tabindex="-1"><a class="header-anchor" href="#disableselection" aria-hidden="true">#</a> disableSelection</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>禁用选择</p><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型: <code>CopyrightLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CopyrightLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 作者文字
   *
   * <span class="token keyword">@description</span> \`:author\` 将会被作者替换
   */</span>
  author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 协议文字
   *
   * <span class="token keyword">@description</span> \`:license\` 会被当前协议替换
   */</span>
  license<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 链接文字
   *
   * <span class="token keyword">@description</span> \`:url\` 会替换为当前页面链接
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CopyrightLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> CopyrightLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>版权插件的国际化配置。</p>`,28),c=[l];function o(d,t){return n(),a("div",null,c)}const p=e(i,[["render",o],["__file","copyright.html.vue"]]);export{p as default};
