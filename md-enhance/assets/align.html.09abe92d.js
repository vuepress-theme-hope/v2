import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as v,c as m,a as s,w as a,b as e,e as l,d as n}from"./app.c92924a3.js";const b={},h=l(`<p>By injecting configuration into vuepress-plugin-container, you can use</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: center
Paragraph to center
:::

::: right
Right paragraph
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To customize your paragraph alignment.</p><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2>`,4),g=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // Enable Align
      align: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),p=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");

module.exports = {
  plugins: [
    mdEnhancePlugin({
      // Enable Align
      align: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),f={class:"custom-container danger"},x=e("p",{class:"custom-container-title"},"Warning",-1),k=e("p",null,"VuePress Theme Hope V2 version is still in W.I.P, the API may have",-1),y=e("div",{style:{"text-align":"center"}},[e("p",null,"Significant changes.")],-1),P=e("p",null,"If you meet a bug during usage, you can",-1),E={style:{"text-align":"right"}},I={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues",target:"_blank",rel:"noopener noreferrer"},V=n("open an issue"),T=n("."),w=l(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:::: danger
VuePress Theme Hope V2 version is still in W.I.P, the API may have

::: center
Significant changes.
:::

If you meet a bug during usage, you can

::: right
<span class="token url">[<span class="token content">open an issue</span>](<span class="token url">https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues</span>)</span>.
:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function A(C,S){const r=i("CodeTabs"),t=i("ExternalLinkIcon");return v(),m("div",null,[h,s(r,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:d,value:c,isActive:u})=>[g]),tab1:a(({title:d,value:c,isActive:u})=>[p]),_:1}),_,e("div",f,[x,k,y,P,e("div",E,[e("p",null,[e("a",I,[V,s(t)]),T])])]),w])}var W=o(b,[["render",A],["__file","align.html.vue"]]);export{W as default};
