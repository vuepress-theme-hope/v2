import{j as n}from"./app.f637ecf4.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301\u4E0A\u4E0B\u89D2\u6807\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;md-enhance&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u542F\u7528\u4E0B\u89D2\u6807\u529F\u80FD</span>
        <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// \u542F\u7528\u4E0A\u89D2\u6807</span>
        <span class="token literal-property property">sup</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><ul><li>\u4F7F\u7528 <code>^ ^</code> \u8FDB\u884C\u4E0A\u89D2\u6807\u6807\u6CE8\u3002</li><li>\u4F7F\u7528 <code>~ ~</code> \u8FDB\u884C\u4E0B\u89D2\u6807\u6807\u6CE8\u3002</li></ul><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><ul><li>19<sup>th</sup></li><li>H<sub>2</sub>O</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 19^th^
<span class="token list punctuation">-</span> H<span class="token strike"><span class="token punctuation">~</span><span class="token content">2</span><span class="token punctuation">~</span></span>O
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,8);function p(t,l){return e}var o=s(a,[["render",p]]);export{o as default};