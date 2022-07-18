import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as u,o,c as r,a as c,w as s,b as n,f as e,g as p}from"./app.afdcb3d7.js";const v={},b=n("p",null,"The theme provides you you code tabs support.",-1),m=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),e(" Config")],-1),h=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        codetabs: true,
      },
    },
  }),
});
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        codetabs: true,
      },
    },
  }),
};
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),e(" Usage")],-1),_=n("p",null,"This is the same as tabs function, but it's special built for code blocks.",-1),f=n("p",null,[e("Only code fence after "),n("code",null,"@tab"),e(" marker is allowed inside code tabs, other markdown content will be ignored.")],-1),x=n("h2",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),e(" Demo")],-1),y=n("p",null,"Install VuePress Theme Hope:",-1),D=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(` -D vuepress-theme-hope@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"add"),e(` -D vuepress-theme-hope@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(` i -D vuepress-theme-hope@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),A=n("p",null,"Install VuePress Plugin Markdown Enhance:",-1),C=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(` -D vuepress-plugin-md-enhance@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"add"),e(` -D vuepress-plugin-md-enhance@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(` i -D vuepress-plugin-md-enhance@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),E=p(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Install VuePress Theme Hope:

::: code-tabs#shell

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-theme-hope@next</span>
<span class="token punctuation">\`\`\`</span></span>

@tab yarn

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-theme-hope@next</span>
<span class="token punctuation">\`\`\`</span></span>

@tab:active npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> i -D vuepress-theme-hope@next</span>
<span class="token punctuation">\`\`\`</span></span>

:::

Install VuePress Plugin Markdown Enhance:

::: code-tabs#shell

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-plugin-md-enhance@next</span>
<span class="token punctuation">\`\`\`</span></span>

@tab yarn

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-plugin-md-enhance@next</span>
<span class="token punctuation">\`\`\`</span></span>

@tab:active npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> i -D vuepress-plugin-md-enhance@next</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function I(N,B){const t=u("CodeTabs");return o(),r("div",null,[b,m,c(t,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:s(({title:a,value:i,isActive:l})=>[h]),tab1:s(({title:a,value:i,isActive:l})=>[g]),_:1}),k,_,f,x,y,c(t,{data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],active:2,"tab-id":"shell"},{tab0:s(({title:a,value:i,isActive:l})=>[D]),tab1:s(({title:a,value:i,isActive:l})=>[T]),tab2:s(({title:a,value:i,isActive:l})=>[w]),_:1}),A,c(t,{data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],active:2,"tab-id":"shell"},{tab0:s(({title:a,value:i,isActive:l})=>[C]),tab1:s(({title:a,value:i,isActive:l})=>[V]),tab2:s(({title:a,value:i,isActive:l})=>[P]),_:1}),E])}var H=d(v,[["render",I],["__file","code-tabs.html.vue"]]);export{H as default};
