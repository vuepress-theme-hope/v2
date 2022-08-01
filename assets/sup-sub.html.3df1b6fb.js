import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c,a as d,w as s,b as e,f as u,g as h,r as o}from"./app.bdb7652d.js";const b={},m=e("p",null,"\u041F\u0443\u0441\u0442\u044C \u0444\u0430\u0439\u043B Markdown \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435 VuePress \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043D\u0438\u0436\u043D\u0438\u0439 \u0438 \u0432\u0435\u0440\u0445\u043D\u0438\u0439 \u0438\u043D\u0434\u0435\u043A\u0441\u044B.",-1),v=e("h2",{id:"\u043A\u043E\u043D\u0444\u0438\u0433",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u043A\u043E\u043D\u0444\u0438\u0433","aria-hidden":"true"},"#"),u(" \u041A\u043E\u043D\u0444\u0438\u0433")],-1),p=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // Enable Subscript
        sub: true,
        // Enable  Superscript
        sup: true,
      },
    },
  }),
});
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // Enable Subscript
        sub: true,
        // Enable  Superscript
        sup: true,
      },
    },
  }),
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=h(`<h2 id="\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441" tabindex="-1"><a class="header-anchor" href="#\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441" aria-hidden="true">#</a> \u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441</h2><ul><li>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 <code>^ ^</code>, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C \u0432\u0435\u0440\u0445\u043D\u0438\u0439 \u0438\u043D\u0434\u0435\u043A\u0441.</li><li>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 <code>~ ~</code>, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C \u043D\u0438\u0436\u043D\u0438\u0439 \u0438\u043D\u0434\u0435\u043A\u0441.</li></ul><h2 id="\u0434\u0435\u043C\u043E" tabindex="-1"><a class="header-anchor" href="#\u0434\u0435\u043C\u043E" aria-hidden="true">#</a> \u0414\u0435\u043C\u043E</h2><ul><li>19<sup>th</sup></li><li>H<sub>2</sub>O</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 19^th^
<span class="token list punctuation">-</span> H<span class="token strike"><span class="token punctuation">~</span><span class="token content">2</span><span class="token punctuation">~</span></span>O
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function f(x,k){const n=o("CodeTabs");return t(),c("div",null,[m,v,d(n,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:s(({title:i,value:l,isActive:a})=>[p]),tab1:s(({title:i,value:l,isActive:a})=>[g]),_:1}),_])}var E=r(b,[["render",f],["__file","sup-sub.html.vue"]]);export{E as default};
