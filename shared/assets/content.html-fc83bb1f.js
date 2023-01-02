import{_ as n,W as s,X as a,a1 as e}from"./framework-eb069dea.js";const t={},p=e(`<p>与内容相关的函数应该在 Node 侧被调用，你应该仅在 Node 端代码中从 <code>vuepress-shared/node</code> 导入它们。</p><h2 id="getpageexcerpt" tabindex="-1"><a class="header-anchor" href="#getpageexcerpt" aria-hidden="true">#</a> getPageExcerpt</h2><p>获取页面摘要</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PageExcerptOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 摘要分隔符
   *
   * <span class="token keyword">@default</span> &#39;&lt;!-- more --&gt;&#39;
   */</span>
  excerptSeparator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 摘要的长度
   *
   * <span class="token keyword">@description</span> 摘要的长度会尽可能的接近这个值
   *
   * <span class="token keyword">@default</span> 300
   */</span>
  excerptLength<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 被认为是自定义元素的标签
   *
   * <span class="token keyword">@description</span> 用于判断一个标签是否是自定义元素，因为在摘要中，所有的 vue 组件都会被移除
   */</span>
  isCustomElement<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPageExcerpt</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  app<span class="token operator">:</span> App<span class="token punctuation">,</span>
  page<span class="token operator">:</span> Page<span class="token punctuation">,</span>
  options<span class="token operator">:</span> PageExcerptOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getpagetext" tabindex="-1"><a class="header-anchor" href="#getpagetext" aria-hidden="true">#</a> getPageText</h2><p>获取页面纯文本。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>此函数基于简易的 md2text，有诸多限制，不保证转换结果的准确性。</p></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPageText</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div>`,8),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","content.html.vue"]]);export{d as default};
