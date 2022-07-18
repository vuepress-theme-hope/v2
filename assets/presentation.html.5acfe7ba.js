import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as v,c as h,b as e,a as s,w as a,f as n,g as l}from"./app.625f2658.js";const m={},b=e("p",null,"\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301\u5E7B\u706F\u7247\u3002",-1),_=n("\u672C\u63D2\u4EF6\u5229\u7528\u4E86 "),g={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},k=n("reveal.js"),A=n(" \u6765\u652F\u6301\u8FD9\u4E00\u529F\u80FD\u3002"),f=e("h2",{id:"\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E","aria-hidden":"true"},"#"),n(" \u914D\u7F6E")],-1),E=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
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
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),B=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
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
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=l('<p>\u4F60\u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u4EE5\u8FDB\u884C\u66F4\u8BE6\u7EC6\u7684\u914D\u7F6E\u3002</p><p><code>presentation.plugins</code> \u63A5\u6536\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u53EF\u4EE5\u81EA\u7531\u914D\u7F6E\u662F\u5426\u542F\u7528\u4E00\u4E9B\u9884\u8BBE\u7684\u63D2\u4EF6\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u53EF\u63A5\u53D7\u7684\u63D2\u4EF6\u6709:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul></div><p>\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528 <code>presentation.revealConfig</code> \u6765\u914D\u7F6E\u5168\u5C40\u4F20\u9012\u7ED9 Reveal.js \u7684\u914D\u7F6E\u9009\u9879\u3002</p>',4),j=n("Reveal.js \u8FD8\u63D0\u4F9B\u4E86"),q={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},C=n("\u66F4\u591A\u7684\u63D2\u4EF6"),w=n("\u3002\u5982\u679C\u4F60\u9700\u8981\u67D0\u4E2A\u7279\u5B9A\u7684\u63D2\u4EF6\uFF0C\u8BF7\u5728 GitHub \u4E0A\u63D0\u51FA "),F={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},T=n("Feature Request"),D=l(`<h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><ul><li>\u4F7F\u7528 <code>---</code> \u5206\u5272\u5E7B\u706F\u7247</li><li>\u4F7F\u7528 <code>--</code> \u5BF9\u5E7B\u706F\u7247\u8FDB\u884C\u4E8C\u6B21\u5206\u5272(\u5782\u76F4\u663E\u793A)</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>@slidestart [theme]

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76EE\u524D\u53EF\u7528\u7684\u4E3B\u9898(\u8BF7\u4F7F\u7528\u5B83\u4EEC\u76F4\u63A5\u66FF\u6362 <code>[theme]</code>):</p><ul><li><code>auto</code> (\u9ED8\u8BA4)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,5),V=n("\u4E3B\u9898\u6F14\u793A\uFF0C\u8BF7\u8BE6\u89C1 "),z={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/guide/presentation/themes.html",target:"_blank",rel:"noopener noreferrer"},N=n("\u5E7B\u706F\u7247\u4E3B\u9898"),P=e("h2",{id:"\u6F14\u793A",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6F14\u793A","aria-hidden":"true"},"#"),n(" \u6F14\u793A")],-1),R=l(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>@slidestart

<span class="token title important"><span class="token punctuation">##</span> \u5E7B\u706F\u7247 1</span>

\u4E00\u4E2A\u6709\u6587\u5B57\u548C <span class="token url">[<span class="token content">\u94FE\u63A5</span>](<span class="token url">https://mrhope.site</span>)</span> \u7684\u6BB5\u843D

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> \u5E7B\u706F\u7247 2</span>

<span class="token list punctuation">-</span> \u9879\u76EE 1
<span class="token list punctuation">-</span> \u9879\u76EE 2

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> \u5E7B\u706F\u7247 3.1</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

--

<span class="token title important"><span class="token punctuation">##</span> \u5E7B\u706F\u7247 3.2</span>

$$
J(\\theta_0,\\theta_1) = \\sum_{i=0}
$$

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),$={class:"custom-container tip"},H=e("p",{class:"custom-container-title"},"\u63D0\u793A",-1),J=n("\u8BE6\u7EC6\u4E0E\u5B8C\u6574\u7684\u6F14\u793A\u8BE6\u89C1 "),S={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/guide/presentation/demo.html",target:"_blank",rel:"noopener noreferrer"},y=n("\u5E7B\u706F\u7247\u6F14\u793A"),I=n("\u3002"),L=e("h2",{id:"\u9009\u9879",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u9009\u9879","aria-hidden":"true"},"#"),n(" \u9009\u9879")],-1),M=e("p",null,[n("\u4F60\u53EF\u4EE5\u5728 Frontmatter \u8BBE\u7F6E "),e("code",null,"reveal"),n(" \u4EE5\u8BBE\u7F6E\u7279\u5B9A\u9875\u9762\u7684 reveal.js \u9009\u9879\uFF0C\u4E5F\u53EF\u4EE5\u5728\u63D2\u4EF6\u9009\u9879\u4E2D\u8BBE\u7F6E "),e("code",null,"presentation"),n(" \u4EE5\u5168\u5C40\u8BBE\u7F6E reveal.js\u3002")],-1),U=n("\u66F4\u591A\u9009\u9879\uFF0C\u8BF7\u53C2\u89C1"),G={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},K=n("reveal.js config"),O=n("\uFF0C\u66F4\u591A\u7528\u6CD5\uFF0C\u8BF7\u53C2\u9605 "),Q={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},W=n("reveal.js \u6587\u6863"),X=n("\u3002");function Y(Z,ee){const i=t("ExternalLinkIcon"),o=t("CodeTabs"),d=t("Presentation");return v(),h("div",null,[b,e("p",null,[_,e("a",g,[k,s(i)]),A]),f,s(o,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:c,value:r,isActive:u})=>[E]),tab1:a(({title:c,value:r,isActive:u})=>[B]),_:1}),x,e("p",null,[j,e("a",q,[C,s(i)]),w,e("a",F,[T,s(i)])]),D,e("p",null,[V,e("a",z,[N,s(i)])]),P,s(d,{id:"presentation-64a56fb2","data-code":"%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%201%0A%0A%E4%B8%80%E4%B8%AA%E6%9C%89%E6%96%87%E5%AD%97%E5%92%8C%20%5B%E9%93%BE%E6%8E%A5%5D(https%3A%2F%2Fmrhope.site)%20%E7%9A%84%E6%AE%B5%E8%90%BD%0A%0A---%0A%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%202%0A%0A-%20%E9%A1%B9%E7%9B%AE%201%0A-%20%E9%A1%B9%E7%9B%AE%202%0A%0A---%0A%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%203.1%0A%0A%60%60%60js%0Aconst%20a%20%3D%201%3B%0A%60%60%60%0A%0A--%0A%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%203.2%0A%0A%24%24%0AJ(%5Ctheta_0%2C%5Ctheta_1)%20%3D%20%5Csum_%7Bi%3D0%7D%0A%24%24%0A",theme:"auto"}),R,e("div",$,[H,e("p",null,[J,e("a",S,[y,s(i)]),I])]),L,M,e("p",null,[U,e("a",G,[K,s(i)]),O,e("a",Q,[W,s(i)]),X])])}var ie=p(m,[["render",Y],["__file","presentation.html.vue"]]);export{ie as default};
