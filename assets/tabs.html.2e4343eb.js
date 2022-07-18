import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{r as v,o as b,c as m,a as d,w as n,b as e,f as l,g as c}from"./app.afdcb3d7.js";const o={},p=e("p",null,"\u8BA9\u4F60\u7684 Markdown \u6587\u4EF6\u652F\u6301\u4F9B\u9009\u9879\u5361\u3002",-1),h=e("h2",{id:"\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E","aria-hidden":"true"},"#"),l(" \u914D\u7F6E")],-1),g=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // \u6DFB\u52A0\u9009\u9879\u5361\u652F\u6301
        tabs: true,
      },
    },
  }),
});
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // \u6DFB\u52A0\u9009\u9879\u5361\u652F\u6301
        tabs: true,
      },
    },
  }),
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=c(`<h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><p>\u4F60\u9700\u8981\u5C06\u9009\u9879\u5361\u5305\u88C5\u5728 <code>tabs</code> \u5BB9\u5668\u4E2D\u3002</p><p>\u4F60\u53EF\u4EE5\u5728 <code>tabs</code> \u5BB9\u5668\u4E2D\u6DFB\u52A0\u4E00\u4E2A id \u540E\u7F00\uFF0C\u8BE5\u540E\u7F00\u5C06\u7528\u4F5C\u9009\u9879\u5361 id\u3002 \u6240\u6709\u5177\u6709\u76F8\u540C id \u7684\u9009\u9879\u5361\u5C06\u5171\u4EAB\u76F8\u540C\u7684\u5207\u6362\u4E8B\u4EF6\u3002</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs#fruit

<span class="token comment">&lt;!-- \u8FD9\u91CC\uFF0Cfruit \u5C06\u7528\u4F5C id\uFF0C\u5B83\u662F\u53EF\u9009\u7684 --&gt;</span>

<span class="token comment">&lt;!-- \u9009\u9879\u5361\u5185\u5BB9 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u5BB9\u5668\u5185\uFF0C\u4F60\u5E94\u8BE5\u4F7F\u7528 <code>@tab</code> \u6807\u8BB0\u6765\u6807\u8BB0\u548C\u5206\u9694\u9009\u9879\u5361\u5185\u5BB9\u3002</p><p>\u5728 <code>@tab</code> \u6807\u8BB0\u540E\uFF0C\u4F60\u53EF\u4EE5\u6DFB\u52A0\u6587\u672C <code>:active</code> \u9ED8\u8BA4\u6FC0\u6D3B\u9009\u9879\u5361\uFF0C\u4E4B\u540E\u7684\u6587\u672C\u5C06\u88AB\u89E3\u6790\u4E3A\u9009\u9879\u5361\u6807\u9898\u3002</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs

@tab \u6807\u9898 1

<span class="token comment">&lt;!-- tab 1 \u5185\u5BB9 --&gt;</span>

@tab \u6807\u9898 2

<span class="token comment">&lt;!-- tab 2 \u5185\u5BB9 --&gt;</span>

@tab:active \u6807\u9898 3

<span class="token comment">&lt;!-- tab 3 \u5C06\u4F1A\u88AB\u9ED8\u8BA4\u6FC0\u6D3B --&gt;</span>

<span class="token comment">&lt;!-- tab 3 \u5185\u5BB9 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6807\u9898\u5C06\u7528\u4F5C\u9009\u9879\u5361\u7684\u503C\uFF0C\u4F46\u4F60\u53EF\u4EE5\u4F7F\u7528 id \u540E\u7F00\u8986\u76D6\u5B83\u3002</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs

@tab \u6807\u9898 1

<span class="token comment">&lt;!-- \u6B64\u5904\uFF0C\u9009\u9879\u5361 1 \u7684\u6807\u9898\u201C\u6807\u9898 1\u201D\u5C06\u7528\u4F5C\u503C\u3002 --&gt;</span>

<span class="token comment">&lt;!-- tab 1 \u5185\u5BB9 --&gt;</span>

@tab \u6807\u9898 2#\u503C 2

<span class="token comment">&lt;!-- \u8FD9\u91CC\uFF0Ctab 2 \u7684\u6807\u9898\u5C06\u662F \u201C\u6807\u9898 2\u201D\uFF0C\u4F46\u5B83\u4F1A\u4F7F\u7528 \u201C\u503C 2\u201D \u4F5C\u4E3A\u9009\u9879\u5361\u7684\u503C--&gt;</span>

<span class="token comment">&lt;!-- tab 2 \u5185\u5BB9 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),k={class:"custom-container info"},x=e("p",{class:"custom-container-title"},"\u4E00\u8D77\u5207\u6362\u5E76\u4FDD\u6301\u9009\u62E9",-1),A=e("p",null,"\u5982\u679C\u4F60\u60F3\u8BA9\u4E00\u4E9B\u9009\u9879\u5361\u7EC4\u4E00\u8D77\u5207\u6362\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u76F8\u540C\u7684\u9009\u9879\u5361 ID \u6765\u7ED1\u5B9A\u5B83\u4EEC\u3002",-1),w=e("p",null,"\u9488\u5BF9\u6BCF\u4E2A\u9009\u9879\u5361 ID \u7684\u9009\u62E9\u4F1A\u88AB\u5B58\u50A8\u5E76\u8FDB\u884C\u6301\u4E45\u5316\u3002",-1),T=e("p",null,"\u4E0B\u65B9\u662F\u4E00\u4E2A\u6848\u4F8B\u3002",-1),B=e("p",null,"\u9009\u62E9\u5305\u7BA1\u7406\u5668:",-1),C=e("p",null,"npm \u5E94\u8BE5\u4E0E Node.js \u88AB\u4E00\u540C\u5B89\u88C5\u3002",-1),N=e("p",null,"\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F Node.js v16+\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 corepack \u6765\u542F\u7528 pnpm:",-1),D=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,`corepack prepare pnpm@7.2.1 --activated
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),O=e("p",null,"\u5426\u5219\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 npm \u5B89\u88C5\u5B83:",-1),V=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),l(" i -g "),e("span",{class:"token function"},"pnpm"),l(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),j=e("p",null,[l("\u5B89\u88C5 "),e("code",null,"vuepress-plugin-md-enhance"),l(":")],-1),E=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),l(` i -D vuepress-plugin-md-enhance@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),S=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),l(),e("span",{class:"token function"},"add"),l(` -D vuepress-plugin-md-enhance@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),I=e("h2",{id:"\u6848\u4F8B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6848\u4F8B","aria-hidden":"true"},"#"),l(" \u6848\u4F8B")],-1),U=e("p",null,"\u4E00\u4E2A\u6C34\u679C\u9009\u9879\u5361\u5217\u8868:",-1),q=e("p",null,"Apple",-1),J=e("p",null,"Banana",-1),M=c(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u4E00\u4E2A\u6C34\u679C\u9009\u9879\u5361\u5217\u8868:</p>`,2),y=e("p",null,"Apple",-1),z=e("p",null,"Banana",-1),F=e("p",null,"Orange",-1),G=c(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u4E2A\u6CA1\u6709\u7ED1\u5B9A id \u7684\u6C34\u679C\u9009\u9879\u5361\u5217\u8868:</p>`,2),H=e("p",null,"Apple",-1),K=e("p",null,"Banana",-1),L=e("p",null,"Orange",-1),P=c(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function Q(R,W){const r=v("CodeTabs"),t=v("Tabs");return b(),m("div",null,[p,h,d(r,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:i,value:s,isActive:a})=>[g]),tab1:n(({title:i,value:s,isActive:a})=>[_]),_:1}),f,e("div",k,[x,A,w,T,B,d(t,{data:[{title:"npm"},{title:"pnpm"}],"tab-id":"shell"},{tab0:n(({title:i,value:s,isActive:a})=>[C]),tab1:n(({title:i,value:s,isActive:a})=>[N,D,O,V]),_:1}),j,d(t,{data:[{title:"\u4F7F\u7528 npm",value:"npm"},{title:"\u4F7F\u7528 pnpm",value:"pnpm"}],"tab-id":"shell"},{tab0:n(({title:i,value:s,isActive:a})=>[E]),tab1:n(({title:i,value:s,isActive:a})=>[S]),_:1})]),I,U,d(t,{data:[{title:"apple",value:"apple"},{title:"banana",value:"banana"}],"tab-id":"fruit"},{tab0:n(({title:i,value:s,isActive:a})=>[q]),tab1:n(({title:i,value:s,isActive:a})=>[J]),_:1}),M,d(t,{data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:n(({title:i,value:s,isActive:a})=>[y]),tab1:n(({title:i,value:s,isActive:a})=>[z]),tab2:n(({title:i,value:s,isActive:a})=>[F]),_:1}),G,d(t,{data:[{title:"apple"},{title:"banana"},{title:"orange"}]},{tab0:n(({title:i,value:s,isActive:a})=>[H]),tab1:n(({title:i,value:s,isActive:a})=>[K]),tab2:n(({title:i,value:s,isActive:a})=>[L]),_:1}),P])}var Z=u(o,[["render",Q],["__file","tabs.html.vue"]]);export{Z as default};
