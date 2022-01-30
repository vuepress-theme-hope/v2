import{j as s}from"./app.1de3a271.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},e=s(`<p>\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301\u4EFB\u52A1\u5217\u8868\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;md-enhance&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u542F\u7528\u4EFB\u52A1\u5217\u8868</span>
        <span class="token literal-property property">tasklist</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><ul><li>\u4F7F\u7528 <code>- [ ] \u4E00\u4E9B\u6587\u5B57</code> \u6E32\u67D3\u4E00\u4E2A\u672A\u52FE\u9009\u7684\u4EFB\u52A1\u9879</li><li>\u4F7F\u7528 <code>- [x] \u4E00\u4E9B\u6587\u5B57</code> \u6E32\u67D3\u4E00\u4E2A\u52FE\u9009\u4E86\u7684\u4EFB\u52A1\u9879 (\u6211\u4EEC\u4E5F\u652F\u6301\u5927\u5199\u7684 <code>X</code>)</li></ul><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" id="task-item-0"><label class="task-list-item-label" for="task-item-0"> Plan A</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-1"><label class="task-list-item-label" for="task-item-1"> Plan B</label></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ] Plan A
<span class="token list punctuation">-</span> [x] Plan B
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,8);function t(l,p){return e}var r=a(n,[["render",t]]);export{r as default};