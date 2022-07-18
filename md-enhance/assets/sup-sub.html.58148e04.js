import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as d,c,a as u,w as n,b as e,d as b,e as o}from"./app.c92924a3.js";const m={},v=e("p",null,"\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301\u4E0A\u4E0B\u89D2\u6807\u3002",-1),h=e("h2",{id:"\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E","aria-hidden":"true"},"#"),b(" \u914D\u7F6E")],-1),p=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // \u542F\u7528\u4E0B\u89D2\u6807\u529F\u80FD
      sub: true,
      // \u542F\u7528\u4E0A\u89D2\u6807
      sup: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");

module.exports = {
  plugins: [
    mdEnhancePlugin({
      // \u542F\u7528\u4E0B\u89D2\u6807\u529F\u80FD
      sub: true,
      // \u542F\u7528\u4E0A\u89D2\u6807
      sup: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=o(`<h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><ul><li>\u4F7F\u7528 <code>^ ^</code> \u8FDB\u884C\u4E0A\u89D2\u6807\u6807\u6CE8\u3002</li><li>\u4F7F\u7528 <code>~ ~</code> \u8FDB\u884C\u4E0B\u89D2\u6807\u6807\u6CE8\u3002</li></ul><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><ul><li>19<sup>th</sup></li><li>H<sub>2</sub>O</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 19^th^
<span class="token list punctuation">-</span> H<span class="token strike"><span class="token punctuation">~</span><span class="token content">2</span><span class="token punctuation">~</span></span>O
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function x(f,k){const s=t("CodeTabs");return d(),c("div",null,[v,h,u(s,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:i,value:l,isActive:a})=>[p]),tab1:n(({title:i,value:l,isActive:a})=>[g]),_:1}),_])}var P=r(m,[["render",x],["__file","sup-sub.html.vue"]]);export{P as default};
