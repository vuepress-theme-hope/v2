import{f as n}from"./app.c5df45b9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> selector</h2><ul><li>Type: <code>string</code></li><li>Default: <code>&#39;.theme-default-content :not(a) &gt; img&#39;</code></li></ul><p>Image selector</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h2><p>Options passed to <a href="http://photoswipe.com/" target="_blank" rel="noopener noreferrer"><strong>photo-swipe</strong></a></p><h2 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h2><ul><li>Type: <code>number</code></li><li>Default: <code>500</code></li></ul><p>The delay of operating dom, in ms.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>If the theme you are using has a switching animation, it is recommended to configure this option to <code>Switch animation duration + 200</code>.</p></div><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PhowoSwipeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Close button label text
   */</span>
  close<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Full screen button label text
   */</span>
  fullscreen<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Share button label text
   */</span>
  share<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Zoom button label text
   */</span>
  zoom<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Previous image button label text
   */</span>
  prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Next image button label text
   */</span>
  next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Share button config
   */</span>
  buttons<span class="token operator">:</span> PhotoSwipeDefaultUI<span class="token punctuation">.</span>ShareButtonData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>Locales config.</p>`,12);function p(t,l){return e}var r=s(a,[["render",p]]);export{r as default};
