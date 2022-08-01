import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as d,a as c,w as s,b as e,f as o,g as u,r as b}from"./app.bdb7652d.js";const h={},m=e("p",null,"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0444\u0430\u0439\u043B Markdown \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 VuePress.",-1),v=e("h2",{id:"\u043A\u043E\u043D\u0444\u0438\u0433",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u043A\u043E\u043D\u0444\u0438\u0433","aria-hidden":"true"},"#"),o(" \u041A\u043E\u043D\u0444\u0438\u0433")],-1),p=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        tasklist: true,
      },
    },
  }),
});
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        tasklist: true,
      },
    },
  }),
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=u(`<h2 id="\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441" tabindex="-1"><a class="header-anchor" href="#\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441" aria-hidden="true">#</a> \u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441</h2><ul><li>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 <code>- [ ] \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u0435\u043A\u0441\u0442</code> \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0435\u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0437\u0430\u0434\u0430\u0447\u0438.</li><li>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 <code>- [x] \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u0435\u043A\u0441\u0442</code> \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0437\u0430\u0434\u0430\u0447\u0438. (\u0417\u0430\u0433\u043B\u0430\u0432\u043D\u0430\u044F <code>X</code> \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F)</li></ul><h2 id="\u0434\u0435\u043C\u043E" tabindex="-1"><a class="header-anchor" href="#\u0434\u0435\u043C\u043E" aria-hidden="true">#</a> \u0414\u0435\u043C\u043E</h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> \u041F\u043B\u0430\u043D \u0410</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> \u041F\u043B\u0430\u043D \u0411</label></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ] \u041F\u043B\u0430\u043D \u0410
<span class="token list punctuation">-</span> [x] \u041F\u043B\u0430\u043D \u0411
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function x(_,f){const i=b("CodeTabs");return r(),d("div",null,[m,v,c(i,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:s(({title:l,value:n,isActive:a})=>[p]),tab1:s(({title:l,value:n,isActive:a})=>[g]),_:1}),k])}var w=t(h,[["render",x],["__file","tasklist.html.vue"]]);export{w as default};
