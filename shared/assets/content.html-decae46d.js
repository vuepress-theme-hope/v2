import{_ as n,W as s,X as a,a1 as e}from"./framework-eb069dea.js";const t={},p=e(`<p>Content related function be called at node side, you shall import them from <code>vuepress-shared/node</code> in node side code only.</p><h2 id="getpageexcerpt" tabindex="-1"><a class="header-anchor" href="#getpageexcerpt" aria-hidden="true">#</a> getPageExcerpt</h2><p>Get page excerpt.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PageExcerptOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Excerpt separator
   *
   * <span class="token keyword">@default</span> &#39;&lt;!-- more --&gt;&#39;
   */</span>
  excerptSeparator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Length of excerpt
   *
   * <span class="token keyword">@description</span> Excerpt length will be the minimal possible length reaching this value
   *
   * <span class="token keyword">@default</span> 300
   */</span>
  excerptLength<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tags which is considered as custom elements
   *
   * <span class="token keyword">@description</span> This is used to determine whether a tag is a custom element since all vue components are removed in excerpt
   */</span>
  isCustomElement<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPageExcerpt</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  app<span class="token operator">:</span> App<span class="token punctuation">,</span>
  page<span class="token operator">:</span> Page<span class="token punctuation">,</span>
  options<span class="token operator">:</span> PageExcerptOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getpagetext" tabindex="-1"><a class="header-anchor" href="#getpagetext" aria-hidden="true">#</a> getPageText</h2><p>Get page plain text.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>This function is based on a simple md2text, which has many limitations and does not guarantee the accuracy of the conversion results.</p></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPageText</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div>`,8),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","content.html.vue"]]);export{d as default};
