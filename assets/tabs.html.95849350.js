import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{o as b,c as m,a as d,w as n,b as e,f as a,g as c,r as v}from"./app.bdb7652d.js";const o={},p=e("p",null,"\u041F\u0443\u0441\u0442\u044C \u0444\u0430\u0439\u043B Markdown \u043D\u0430 \u0432\u043A\u043B\u0430\u0434\u043A\u0430\u0445 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 VuePress.",-1),h=e("h2",{id:"\u043A\u043E\u043D\u0444\u0438\u0433",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u043A\u043E\u043D\u0444\u0438\u0433","aria-hidden":"true"},"#"),a(" \u041A\u043E\u043D\u0444\u0438\u0433")],-1),g=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        tabs: true,
      },
    },
  }),
});
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        tabs: true,
      },
    },
  }),
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=c(`<h2 id="\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435" tabindex="-1"><a class="header-anchor" href="#\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435" aria-hidden="true">#</a> \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435</h2><p>\u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043E\u0431\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043A\u043B\u0430\u0434\u043A\u0438 \u0432 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 <code>tabs</code>.</p><p>\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0443\u0444\u0444\u0438\u043A\u0441 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430 \u0432 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 <code>tabs</code>, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A ID \u0432\u043A\u043B\u0430\u0434\u043A\u0438. \u0412\u0441\u0435 \u0432\u043A\u043B\u0430\u0434\u043A\u0438 \u0441 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u043C \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C \u0431\u0443\u0434\u0443\u0442 \u0438\u043C\u0435\u0442\u044C \u043E\u0434\u043D\u043E \u0438 \u0442\u043E \u0436\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs#fruit

<span class="token comment">&lt;!-- here, fruit will be used as id, it&#39;s optional --&gt;</span>

<span class="token comment">&lt;!-- tabs content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u0412\u043D\u0443\u0442\u0440\u0438 \u044D\u0442\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u0432\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0430\u0440\u043A\u0435\u0440 <code>@tab</code>, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0432\u043A\u043B\u0430\u0434\u043A\u0438.</p><p>\u0417\u0430 \u043C\u0430\u0440\u043A\u0435\u0440\u043E\u043C <code>@tab</code> \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442 <code>:active</code>, \u0447\u0442\u043E\u0431\u044B \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0438 \u0442\u0435\u043A\u0441\u0442 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D \u043A\u0430\u043A \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0432\u043A\u043B\u0430\u0434\u043A\u0438.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs

@tab title 1

<span class="token comment">&lt;!-- tab 1 content --&gt;</span>

@tab title 2

<span class="token comment">&lt;!-- tab 2 content --&gt;</span>

@tab:active title 3

<span class="token comment">&lt;!-- tab 3 will be activated by default --&gt;</span>

<span class="token comment">&lt;!-- tab 3 content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u043A\u043B\u0430\u0434\u043A\u0438, \u043D\u043E \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0435\u0433\u043E, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0441\u0443\u0444\u0444\u0438\u043A\u0441 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs

@tab title 1

<span class="token comment">&lt;!-- here, tab 1&#39;s title &quot;title 1&quot; will be used as value. --&gt;</span>

<span class="token comment">&lt;!-- tab 1 content --&gt;</span>

@tab title 2#value2

<span class="token comment">&lt;!-- here, tab 2&#39;s title will be &quot;title 2&quot;, but it will bind a value with &quot;value2&quot; --&gt;</span>

<span class="token comment">&lt;!-- tab 2 content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),k={class:"custom-container info"},x=e("p",{class:"custom-container-title"},"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432\u043C\u0435\u0441\u0442\u0435 \u0438 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440",-1),w=e("p",null,"\u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0432\u043A\u043B\u0430\u0434\u043E\u043A \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u043B\u0438\u0441\u044C \u0432\u043C\u0435\u0441\u0442\u0435, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0434\u0438\u043D \u0438 \u0442\u043E\u0442 \u0436\u0435 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0432\u043A\u043B\u0430\u0434\u043A\u0438 \u0434\u043B\u044F \u0438\u0445 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438. \u0412\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440:",-1),A=e("p",null,"\u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0432\u0430\u0448 \u0432\u044B\u0431\u043E\u0440 \u0441 \u044D\u0442\u0438\u043C \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C \u0432\u043A\u043B\u0430\u0434\u043A\u0438 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D.",-1),T=e("p",null,"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u0430\u043A\u0435\u0442\u043E\u0432:",-1),B=e("p",null,"npm \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 Node.js.",-1),q=e("p",null,"\u0415\u0441\u043B\u0438 \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 Node.js v16+, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C corepack \u0434\u043B\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F pnpm:",-1),C=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,`corepack prepare pnpm@7.6.0 --activated
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),N=e("p",null,"\u0412 \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E npm:",-1),V=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),a(" i -g "),e("span",{class:"token function"},"pnpm"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),O=e("p",null,[a("\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 "),e("code",null,"vuepress-plugin-md-enhance"),a(":")],-1),j=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),a(` i -D vuepress-plugin-md-enhance@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),D=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),a(),e("span",{class:"token function"},"add"),a(` -D vuepress-plugin-md-enhance@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),E=e("h2",{id:"\u0434\u0435\u043C\u043E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u0434\u0435\u043C\u043E","aria-hidden":"true"},"#"),a(" \u0414\u0435\u043C\u043E")],-1),S=e("p",null,"\u0412\u043A\u043B\u0430\u0434\u043A\u0430 \u0444\u0440\u0443\u043A\u0442\u043E\u0432:",-1),U=e("p",null,"Apple",-1),y=e("p",null,"Banana",-1),I=c(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u0415\u0449\u0435 \u043E\u0434\u043D\u0430 \u0432\u043A\u043B\u0430\u0434\u043A\u0430 \u0444\u0440\u0443\u043A\u0442\u043E\u0432:</p>`,2),J=e("p",null,"Apple",-1),M=e("p",null,"Banana",-1),P=e("p",null,"Orange",-1),z=c(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u0412\u043A\u043B\u0430\u0434\u043A\u0430 \u0444\u0440\u0443\u043A\u0442\u043E\u0432 \u0431\u0435\u0437 id:</p>`,2),F=e("p",null,"Apple",-1),G=e("p",null,"Banana",-1),H=e("p",null,"Orange",-1),K=c(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function L(Q,R){const r=v("CodeTabs"),t=v("Tabs");return b(),m("div",null,[p,h,d(r,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:i,value:s,isActive:l})=>[g]),tab1:n(({title:i,value:s,isActive:l})=>[_]),_:1}),f,e("div",k,[x,w,A,T,d(t,{data:[{title:"npm"},{title:"pnpm"}],"tab-id":"shell"},{tab0:n(({title:i,value:s,isActive:l})=>[B]),tab1:n(({title:i,value:s,isActive:l})=>[q,C,N,V]),_:1}),O,d(t,{data:[{title:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 npm",value:"npm"},{title:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 pnpm",value:"pnpm"}],"tab-id":"shell"},{tab0:n(({title:i,value:s,isActive:l})=>[j]),tab1:n(({title:i,value:s,isActive:l})=>[D]),_:1})]),E,S,d(t,{data:[{title:"apple",value:"apple"},{title:"banana",value:"banana"}],"tab-id":"fruit"},{tab0:n(({title:i,value:s,isActive:l})=>[U]),tab1:n(({title:i,value:s,isActive:l})=>[y]),_:1}),I,d(t,{data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:n(({title:i,value:s,isActive:l})=>[J]),tab1:n(({title:i,value:s,isActive:l})=>[M]),tab2:n(({title:i,value:s,isActive:l})=>[P]),_:1}),z,d(t,{data:[{title:"apple"},{title:"banana"},{title:"orange"}]},{tab0:n(({title:i,value:s,isActive:l})=>[F]),tab1:n(({title:i,value:s,isActive:l})=>[G]),tab2:n(({title:i,value:s,isActive:l})=>[H]),_:1}),K])}var Y=u(o,[["render",L],["__file","tabs.html.vue"]]);export{Y as default};
