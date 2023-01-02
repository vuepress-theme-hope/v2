import{a3 as e,Z as n,_ as a,a5 as s}from"./framework-f408d5b9.js";const i={},l=s(`<h2 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Enable homepage style when setting to <code>true</code></p><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Page title, will be used in breadcrumb, seo, etc.</p><h2 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext" aria-hidden="true">#</a> heroText</h2><ul><li>Type: <code>string | false</code></li><li>Default: <code>&quot;Hello&quot;</code></li></ul><p>Hero Title</p><h2 id="tagline" tabindex="-1"><a class="header-anchor" href="#tagline" aria-hidden="true">#</a> tagline</h2><ul><li>Type: <code>string | false</code></li><li>Default: <code>&quot;Welcome to your VuePress site&quot;</code></li></ul><p>Short description in hero</p><h2 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Home hero (logo) image address, need to fill in the absolute path (pictures need to be placed in the <code>.vuepress/public</code> folder)</p><h2 id="heroimagedark" tabindex="-1"><a class="header-anchor" href="#heroimagedark" aria-hidden="true">#</a> heroImageDark</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Darkmode Home hero (logo) image address, need to fill in the absolute path (pictures need to be placed in the <code>.vuepress/public</code> folder), will be the same as <code>heroImage</code> by default.</p><h2 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Home icon alt text</p><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h2><ul><li><p>Type: <code>ThemeHomeActionOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeHomeActionOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Action name
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Action link
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Type of action
   * <span class="token keyword">@default</span> &#39;default&#39;
   */</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;primary&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Home actions</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h2><ul><li><p>Type: <code>ThemeHomeFeatureOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeHomeFeatureOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Feature name
   */</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Feature description
   */</span>
  details<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Feature icon
   *
   * <span class="token keyword">@description</span> image link or icon fontClass are supported
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Feature link
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Features description.</p>`,27),t=[l];function o(d,c){return n(),a("div",null,t)}const p=e(i,[["render",o],["__file","home.html.vue"]]);export{p as default};
