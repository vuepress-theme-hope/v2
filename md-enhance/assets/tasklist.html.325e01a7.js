import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o as c,c as r,a as o,w as s,b as e,d as u,e as b}from"./app.c92924a3.js";const m={},v=e("p",null,"\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301\u4EFB\u52A1\u5217\u8868\u3002",-1),p=e("h2",{id:"\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E","aria-hidden":"true"},"#"),u(" \u914D\u7F6E")],-1),h=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // \u542F\u7528\u4EFB\u52A1\u5217\u8868
      tasklist: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");

module.exports = {
  plugins: [
    mdEnhancePlugin({
      // \u542F\u7528\u4EFB\u52A1\u5217\u8868
      tasklist: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=b(`<h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><ul><li>\u4F7F\u7528 <code>- [ ] \u4E00\u4E9B\u6587\u5B57</code> \u6E32\u67D3\u4E00\u4E2A\u672A\u52FE\u9009\u7684\u4EFB\u52A1\u9879</li><li>\u4F7F\u7528 <code>- [x] \u4E00\u4E9B\u6587\u5B57</code> \u6E32\u67D3\u4E00\u4E2A\u52FE\u9009\u4E86\u7684\u4EFB\u52A1\u9879 (\u6211\u4EEC\u4E5F\u652F\u6301\u5927\u5199\u7684 <code>X</code>)</li></ul><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ] Plan A
<span class="token list punctuation">-</span> [x] Plan B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7" aria-hidden="true">#</a> \u9AD8\u7EA7</h2><p>\u9664\u4E86\u5728\u63D2\u4EF6\u9009\u9879\u4E2D\u8BBE\u7F6E <code>tasklist: true</code> \u4E4B\u5916\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5C06\u5BF9\u8C61\u4F5C\u4E3A\u9009\u9879\u4F20\u9012\u7ED9\u5B83\u3002\u53EF\u7528\u9009\u9879\u5982\u4E0B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TaskListOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u662F\u5426\u7981\u7528 checkbox
   *
   * <span class="token keyword">@default</span> true
   */</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u662F\u5426\u4F7F\u7528 \`&lt;label&gt;\` \u6765\u5305\u88F9\u6587\u5B57
   *
   * <span class="token keyword">@default</span> true
   */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function x(_,f){const n=d("CodeTabs");return c(),r("div",null,[v,p,o(n,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:s(({title:a,value:i,isActive:l})=>[h]),tab1:s(({title:a,value:i,isActive:l})=>[k]),_:1}),g])}var y=t(m,[["render",x],["__file","tasklist.html.vue"]]);export{y as default};
