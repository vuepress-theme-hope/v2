import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as h,c as p,a as s,w as t,b as e,d as n,e as a}from"./app.c92924a3.js";const b={},v=e("p",null,"Let the Markdown file in your VuePress site support presentation.",-1),_=e("h2",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),n(" Config")],-1),g=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // Enable presentation
      presentation: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");

module.exports = {
  plugins: [
    mdEnhancePlugin({
      // Enable presentation
      presentation: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=a('<p>You can also pass an object for configuration.</p><p><code>presentation.plugins</code> receives an array of strings, allowing you to freely config whether to enable some preset plugins.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Acceptable plugins are:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul></div><p>You can also use <code>presentation.revealConfig</code> set configuration options passed to Reveal.js globally.</p>',4),k=n("Reveal.js also provides "),q={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},y=n("more plugins"),w=n(". If you need a specific plugin, please submit a "),j={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},E=n("Feature Request"),P=n(" on GitHub."),T=a(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><ul><li>Use <code>---</code> to split slides</li><li>Use <code>--</code> to split the slides second time (vertical display)</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>@slidestart [theme]

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Theme available(replace <code>[theme]</code> with them):</p><ul><li><code>auto</code> (Default)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,5),C=n("For details, see "),R=n("Themes demo"),F=n("."),L=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),V=n("Please see "),B=n("Presentation Demo"),D=e("h2",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),n(" Options")],-1),N=e("p",null,[n("You can set "),e("code",null,"reveal"),n(" to pass options to reveal.js per page in frontmatter, you can also set "),e("code",null,"presentation"),n(" in plugin options to set reveal.js globally.")],-1),S=n("For more options, see "),A={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},H=n("reveal.js config"),I=n(". For more usage, see "),Y={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},z=n("reveal.js documatation");function M(U,G){const r=o("CodeTabs"),i=o("ExternalLinkIcon"),l=o("RouterLink");return h(),p("div",null,[v,_,s(r,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:t(({title:d,value:c,isActive:u})=>[g]),tab1:t(({title:d,value:c,isActive:u})=>[f]),_:1}),x,e("p",null,[k,e("a",q,[y,s(i)]),w,e("a",j,[E,s(i)]),P]),T,e("p",null,[C,s(l,{to:"/guide/presentation/themes.html"},{default:t(()=>[R]),_:1}),F]),L,e("p",null,[V,s(l,{to:"/guide/presentation/demo.html"},{default:t(()=>[B]),_:1})]),D,N,e("p",null,[S,e("a",A,[H,s(i)]),I,e("a",Y,[z,s(i)])])])}var K=m(b,[["render",M],["__file","index.html.vue"]]);export{K as default};
