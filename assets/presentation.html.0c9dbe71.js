import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as m,c as h,a as s,w as l,b as e,f as n,g as a}from"./app.afdcb3d7.js";const v={},b=e("p",null,"Let the Markdown file in your VuePress site support presentation.",-1),_=e("h2",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),n(" Config")],-1),g=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        presentation: true,
      },
    },
  }),
});
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        presentation: true,
      },
    },
  }),
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=e("code",null,"vuepress-plugin-md-enhance",-1),A=n(" uses "),x={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},w=n("reveal.js"),j=n(" to support this feature."),q=a('<p>You can also pass an object for configuration.</p><p><code>presentation.plugins</code> receives an array of strings, allowing you to freely config whether to enable some preset plugins.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Acceptable plugins are:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul></div><p>You can also use <code>presentation.revealConfig</code> set configuration options passed to Reveal.js globally.</p>',4),y=n("Reveal.js also provides "),C={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},S=n("more plugins"),T=n(". If you need a specific plugin, please submit a "),D={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},F=n("Feature Request"),I=n(" on GitHub."),B=a(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><ul><li>Use <code>---</code> to split slides</li><li>Use <code>--</code> to split the slides second time (vertical display)</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>@slidestart [theme]

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Theme available(replace <code>[theme]</code> with them):</p><ul><li><code>auto</code> (Default)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,5),E=n("For details, see "),P={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/guide/presentation/themes.html",target:"_blank",rel:"noopener noreferrer"},V=n("Themes demo"),N=n("."),R=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),U=a(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>@slidestart

<span class="token title important"><span class="token punctuation">##</span> Slide 1</span>

A paragraph with some text and a <span class="token url">[<span class="token content">link</span>](<span class="token url">https://mrhope.site</span>)</span>

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> Slide 2</span>

<span class="token list punctuation">-</span> Item 1
<span class="token list punctuation">-</span> Item 2

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> Slide 3.1</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

--

<span class="token title important"><span class="token punctuation">##</span> Slide 3.2</span>

$$
J(\\theta_0,\\theta_1) = \\sum_{i=0}
$$

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),$={class:"custom-container info"},H=e("p",{class:"custom-container-title"},"Info",-1),J=n("For detailed demo, please see "),L={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/guide/presentation/demo.html",target:"_blank",rel:"noopener noreferrer"},Y=n("Presentation Demo"),z=e("h2",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),n(" Options")],-1),M=e("p",null,[n("You can set "),e("code",null,"reveal"),n(" to pass options to reveal.js per page in frontmatter, you can also set "),e("code",null,"presentation"),n(" in plugin options to set reveal.js globally.")],-1),G=n("For more options, see "),O={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},K=n("reveal.js config"),Q=n(". For more usage, see "),W={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},X=n("reveal.js documatation");function Z(ee,ne){const o=t("CodeTabs"),i=t("ExternalLinkIcon"),d=t("Presentation");return m(),h("div",null,[b,_,s(o,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:l(({title:r,value:c,isActive:u})=>[g]),tab1:l(({title:r,value:c,isActive:u})=>[f]),_:1}),e("p",null,[k,A,e("a",x,[w,s(i)]),j]),q,e("p",null,[y,e("a",C,[S,s(i)]),T,e("a",D,[F,s(i)]),I]),B,e("p",null,[E,e("a",P,[V,s(i)]),N]),R,s(d,{id:"presentation-64a56fb4","data-code":"%0A%23%23%20Slide%201%0A%0AA%20paragraph%20with%20some%20text%20and%20a%20%5Blink%5D(https%3A%2F%2Fmrhope.site)%0A%0A---%0A%0A%23%23%20Slide%202%0A%0A-%20Item%201%0A-%20Item%202%0A%0A---%0A%0A%23%23%20Slide%203.1%0A%0A%60%60%60js%0Aconst%20a%20%3D%201%3B%0A%60%60%60%0A%0A--%0A%0A%23%23%20Slide%203.2%0A%0A%24%24%0AJ(%5Ctheta_0%2C%5Ctheta_1)%20%3D%20%5Csum_%7Bi%3D0%7D%0A%24%24%0A",theme:"auto"}),U,e("div",$,[H,e("p",null,[J,e("a",L,[Y,s(i)])])]),z,M,e("p",null,[G,e("a",O,[K,s(i)]),Q,e("a",W,[X,s(i)])])])}var te=p(v,[["render",Z],["__file","presentation.html.vue"]]);export{te as default};
