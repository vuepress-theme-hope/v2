import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o,c as b,a as t,w as n,b as e,d as l,e as c}from"./app.6c8e4fde.js";const m={},p=e("p",null,"Let the Markdown file in your VuePress site support tabs.",-1),h=e("h2",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),l(" Config")],-1),g=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // adds tabs support
      tabs: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");

module.exports = {
  plugins: [
    mdEnhancePlugin({
      // adds tabs support
      tabs: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=c(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>You need to wrap your tabs in <code>tabs</code> container.</p><p>You can add an id suffix in <code>tabs</code> container, which will be used as tab id. All tabs with same id will share same switch event.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs#fruit

<span class="token comment">&lt;!-- here, fruit will be used as id, it&#39;s optional --&gt;</span>

<span class="token comment">&lt;!-- tabs content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Inside this container, you should use <code>@tab</code> marker to mark and sperate tab contents.</p><p>Behind <code>@tab</code> marker, you can add text <code>:active</code> to activate the tab by default, and the text will be resolved as tab title.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs

@tab title 1

<span class="token comment">&lt;!-- tab 1 content --&gt;</span>

@tab title 2

<span class="token comment">&lt;!-- tab 2 content --&gt;</span>

@tab:active title 3

<span class="token comment">&lt;!-- tab 3 will be activated by default --&gt;</span>

<span class="token comment">&lt;!-- tab 3 content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, the title will be used as value of tab, but you can override it using id suffix.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs

@tab title 1

<span class="token comment">&lt;!-- here, tab 1&#39;s title &quot;title 1&quot; will be used as value. --&gt;</span>

<span class="token comment">&lt;!-- tab 1 content --&gt;</span>

@tab title 2#value2

<span class="token comment">&lt;!-- here, tab 2&#39;s title will be &quot;title 2&quot;, but it will bind a value with &quot;value2&quot; --&gt;</span>

<span class="token comment">&lt;!-- tab 2 content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),w={class:"custom-container info"},k=e("p",{class:"custom-container-title"},"Switching together and persisting choise",-1),x=e("p",null,"If you want to make some tab groups switch together, you can use same tab id to bind them.",-1),A=e("p",null,"Also, your choise with that tab id will be stored and persisted.",-1),y=e("p",null,"Here is an exmple:",-1),B=e("p",null,"Choose a package manager:",-1),q=e("p",null,"npm should be installed with Node.js.",-1),C=e("p",null,"If you are using Node.js v16+, you can use corepack to enable pnpm:",-1),N=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,`corepack prepare pnpm@7.2.1 --activated
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),T=e("p",null,"Otherwise, you can install it with npm:",-1),E=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),l(" i -g "),e("span",{class:"token function"},"pnpm"),l(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),O=e("p",null,[l("Install "),e("code",null,"vuepress-plugin-md-enhance"),l(":")],-1),P=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),l(` i -D vuepress-plugin-md-enhance@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),V=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),l(),e("span",{class:"token function"},"add"),l(` -D vuepress-plugin-md-enhance@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),I=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),l(" Demo")],-1),S=e("p",null,"A tab of fruit:",-1),j=e("p",null,"Apple",-1),D=e("p",null,"Banana",-1),U=c(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another tab of fruit:</p>`,2),Y=e("p",null,"Apple",-1),H=e("p",null,"Banana",-1),J=e("p",null,"Orange",-1),L=c(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A tab of fruit without id:</p>`,2),M=e("p",null,"Apple",-1),z=e("p",null,"Banana",-1),F=e("p",null,"Orange",-1),G=c(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function K(Q,R){const u=r("CodeTabs"),d=r("Tabs");return o(),b("div",null,[p,h,t(u,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:i,value:s,isActive:a})=>[g]),tab1:n(({title:i,value:s,isActive:a})=>[_]),_:1}),f,e("div",w,[k,x,A,y,B,t(d,{data:[{title:"npm"},{title:"pnpm"}],"tab-id":"shell"},{tab0:n(({title:i,value:s,isActive:a})=>[q]),tab1:n(({title:i,value:s,isActive:a})=>[C,N,T,E]),_:1}),O,t(d,{data:[{title:"Using npm",value:"npm"},{title:"Using pnpm",value:"pnpm"}],"tab-id":"shell"},{tab0:n(({title:i,value:s,isActive:a})=>[P]),tab1:n(({title:i,value:s,isActive:a})=>[V]),_:1})]),I,S,t(d,{data:[{title:"apple",value:"apple"},{title:"banana",value:"banana"}],"tab-id":"fruit"},{tab0:n(({title:i,value:s,isActive:a})=>[j]),tab1:n(({title:i,value:s,isActive:a})=>[D]),_:1}),U,t(d,{data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:n(({title:i,value:s,isActive:a})=>[Y]),tab1:n(({title:i,value:s,isActive:a})=>[H]),tab2:n(({title:i,value:s,isActive:a})=>[J]),_:1}),L,t(d,{data:[{title:"apple"},{title:"banana"},{title:"orange"}]},{tab0:n(({title:i,value:s,isActive:a})=>[M]),tab1:n(({title:i,value:s,isActive:a})=>[z]),tab2:n(({title:i,value:s,isActive:a})=>[F]),_:1}),G])}var Z=v(m,[["render",K],["__file","tabs.html.vue"]]);export{Z as default};
