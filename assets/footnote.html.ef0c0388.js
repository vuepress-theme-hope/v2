import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as r,c,a as d,w as n,b as e,f as u,g as p}from"./app.625f2658.js";const f={},h=e("p",null,"\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301\u811A\u6CE8\u3002",-1),v=e("h2",{id:"\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E","aria-hidden":"true"},"#"),u(" \u914D\u7F6E")],-1),b=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        footnote: true,
      },
    },
  }),
});
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),m=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        footnote: true,
      },
    },
  }),
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=p(`<h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><ul><li><p>\u5728 Markdown \u4E2D\u4F7F\u7528 <code>[^\u951A\u70B9\u6587\u5B57]</code> \u6765\u5B9A\u4E49\u811A\u6CE8\u3002</p></li><li><p>\u5728\u4E4B\u540E\u7684\u4EFB\u4F55\u4F4D\u7F6E\u4F7F\u7528 <code>[^\u951A\u70B9\u6587\u5B57]: ...</code> \u6765\u63CF\u8FF0\u811A\u6CE8\u5185\u5BB9\u3002</p></li><li><p>\u5982\u679C\u811A\u6CE8\u5305\u542B\u591A\u4E2A\u6BB5\u843D\uFF0C\u5176\u540E\u7684\u6BB5\u843D\u5E94\u5F53\u4FDD\u6301\u53CC\u5C42\u7F29\u8FDB\u3002</p></li></ul><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><p>\u811A\u6CE8 1 \u94FE\u63A5<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p><p>\u811A\u6CE8 2 \u94FE\u63A5<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>.</p><p>\u884C\u5185\u7684\u811A\u6CE8<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup> \u5B9A\u4E49.</p><p>\u91CD\u590D\u7684\u9875\u811A\u5B9A\u4E49<sup class="footnote-ref"><a href="#footnote2">[2:1]</a><a class="footnote-anchor" id="footnote-ref2:1"></a></sup>.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>\u811A\u6CE8 1 \u94FE\u63A5[^first].

\u811A\u6CE8 2 \u94FE\u63A5[^second].

\u884C\u5185\u7684\u811A\u6CE8^[Text of inline footnote] \u5B9A\u4E49.

\u91CD\u590D\u7684\u9875\u811A\u5B9A\u4E49[^second].

<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">^first</span><span class="token punctuation">]</span><span class="token punctuation">:</span> \u811A\u6CE8</span> <span class="token bold"><span class="token punctuation">**</span><span class="token content">\u53EF\u4EE5\u5305\u542B\u7279\u6B8A\u6807\u8BB0</span><span class="token punctuation">**</span></span>

<span class="token code keyword">    \u4E5F\u53EF\u4EE5\u7531\u591A\u4E2A\u6BB5\u843D\u7EC4\u6210</span>

<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">^second</span><span class="token punctuation">]</span><span class="token punctuation">:</span> \u811A\u6CE8\u6587\u5B57\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>\u811A\u6CE8 <strong>\u53EF\u4EE5\u5305\u542B\u7279\u6B8A\u6807\u8BB0</strong></p><p>\u4E5F\u53EF\u4EE5\u7531\u591A\u4E2A\u6BB5\u843D\u7EC4\u6210 <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="footnote2" class="footnote-item"><p>\u811A\u6CE8\u6587\u5B57\u3002 <a href="#footnote-ref2" class="footnote-backref">\u21A9\uFE0E</a> <a href="#footnote-ref2:1" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="footnote3" class="footnote-item"><p>Text of inline footnote <a href="#footnote-ref3" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,10);function k(_,x){const s=l("CodeTabs");return r(),c("div",null,[h,v,d(s,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:a,value:o,isActive:i})=>[b]),tab1:n(({title:a,value:o,isActive:i})=>[m]),_:1}),g])}var C=t(f,[["render",k],["__file","footnote.html.vue"]]);export{C as default};
