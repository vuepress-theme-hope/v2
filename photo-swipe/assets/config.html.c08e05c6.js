import{f as n}from"./app.c5df45b9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> selector</h2><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;.theme-default-content :not(a) &gt; img&#39;</code></li></ul><p>\u56FE\u7247\u9009\u62E9\u5668</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h2><p>\u4F20\u9012\u7ED9 <a href="http://photoswipe.com/" target="_blank" rel="noopener noreferrer"><strong>photo-swipe</strong></a> \u7684\u989D\u5916\u9009\u9879</p><h2 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h2><ul><li>\u7C7B\u578B: <code>number</code></li><li>\u9ED8\u8BA4\u503C: <code>500</code></li></ul><p>\u64CD\u4F5C\u9875\u9762 DOM \u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D ms\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u4F60\u4F7F\u7528\u7684\u4E3B\u9898\u6709\u5207\u6362\u52A8\u753B\uFF0C\u5EFA\u8BAE\u914D\u7F6E\u6B64\u9009\u9879\u4E3A <code>\u5207\u6362\u52A8\u753B\u65F6\u957F + 200</code>\u3002</p></div><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PhowoSwipeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u5173\u95ED\u6309\u94AE\u6807\u7B7E\u6587\u5B57
   */</span>
  close<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u5168\u5C4F\u6309\u94AE\u6807\u7B7E\u6587\u5B57
   */</span>
  fullscreen<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u5206\u4EAB\u6309\u94AE\u6807\u7B7E\u6587\u5B57
   */</span>
  share<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u7F29\u653E\u6309\u94AE\u6807\u7B7E\u6587\u5B57
   */</span>
  zoom<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4E0A\u4E00\u5F20\u56FE\u7247\u6309\u94AE\u6807\u7B7E\u6587\u5B57
   */</span>
  prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4E0B\u4E00\u5F20\u56FE\u7247\u6309\u94AE\u6807\u7B7E\u6587\u5B57
   */</span>
  next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u529F\u80FD\u6309\u94AE\u914D\u7F6E
   */</span>
  buttons<span class="token operator">:</span> PhotoSwipeDefaultUI<span class="token punctuation">.</span>ShareButtonData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u56FD\u9645\u5316\u914D\u7F6E\u3002</p>`,12);function p(l,c){return e}var o=s(a,[["render",p]]);export{o as default};
