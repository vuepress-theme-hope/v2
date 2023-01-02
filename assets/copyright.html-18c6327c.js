import{a3 as e,Z as n,_ as a,a5 as s}from"./framework-f408d5b9.js";const i={},l=s(`<h2 id="intro" tabindex="-1"><a class="header-anchor" href="#intro" aria-hidden="true">#</a> Intro</h2><p>The <code>vuepress-plugin-copyright2</code> plugin can append copyright information when users copy content from your site. Also, you can disable site copy or selection with this plugin.</p><p>This plugin is disabled by default.</p><p><code>vuepress-theme-hope</code> passes <code>plugins.copyright</code> in theme options as plugin options to <code>vuepress-plugin-copyright2</code> plugin.</p><h2 id="plugin-options" tabindex="-1"><a class="header-anchor" href="#plugin-options" aria-hidden="true">#</a> Plugin Options</h2><h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Deploy hostname</p><h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3><ul><li>Type: <code>string | ((page: Page) =&gt; string)</code></li><li>Required: No</li></ul><p>Author Information</p><h3 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> license</h3><ul><li>Type: <code>string | ((page: Page) =&gt; string)</code></li><li>Required: No</li></ul><p>License Information</p><h3 id="triggerwords" tabindex="-1"><a class="header-anchor" href="#triggerwords" aria-hidden="true">#</a> triggerWords</h3><ul><li>Type: <code>number</code></li><li>Default: <code>100</code></li></ul><p>Min words triggering copyright append</p><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> global</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether enabled globally</p><h3 id="disablecopy" tabindex="-1"><a class="header-anchor" href="#disablecopy" aria-hidden="true">#</a> disableCopy</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Disable copy</p><h3 id="disableselection" tabindex="-1"><a class="header-anchor" href="#disableselection" aria-hidden="true">#</a> disableSelection</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Disable selection</p><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>CopyrightLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CopyrightLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Author text
   *
   * <span class="token keyword">@description</span> \`:author\` will be replaced by author
   */</span>
  author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * License text
   *
   * <span class="token keyword">@description</span> \`:license\` will be replaced by current license
   */</span>
  license<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Link text
   *
   * <span class="token keyword">@description</span> \`:url\` will be replaced by current page link
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CopyrightLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> CopyrightLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locale config for copyright plugin.</p>`,29),o=[l];function c(t,d){return n(),a("div",null,o)}const p=e(i,[["render",c],["__file","copyright.html.vue"]]);export{p as default};
