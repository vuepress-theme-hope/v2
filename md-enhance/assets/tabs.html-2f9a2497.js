import{_ as r,W as p,X as v,a1 as b,Y as l,Z as a,$ as n,a0 as e,a2 as c,g as o}from"./framework-346270e9.js";const m={},h=n("p",null,"Let the Markdown file in your VuePress site support tabs.",-1),g=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),e(" Config")],-1),k=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// adds tabs support"),e(`
      tabs`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// adds tabs support"),e(`
      `),n("span",{class:"token literal-property property"},"tabs"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=c(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>You need to wrap your tabs in <code>tabs</code> container.</p><p>You can add an id suffix in <code>tabs</code> container, which will be used as tab id. All tabs with same id will share same switch event.</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

<span class="token comment">&lt;!-- here, fruit will be used as id, it&#39;s optional --&gt;</span>

<span class="token comment">&lt;!-- tabs content --&gt;</span>

:::
</code></pre></div><p>Inside this container, you should use <code>@tab</code> marker to mark and separate tab contents.</p><p>Behind <code>@tab</code> marker, you can add text <code>:active</code> to activate the tab by default, and the text will be resolved as tab title.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab title 1

<span class="token comment">&lt;!-- tab 1 content --&gt;</span>

@tab title 2

<span class="token comment">&lt;!-- tab 2 content --&gt;</span>

@tab:active title 3

<span class="token comment">&lt;!-- tab 3 will be activated by default --&gt;</span>

<span class="token comment">&lt;!-- tab 3 content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, the title will be used as value of tab, but you can override it using id suffix.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab title 1

<span class="token comment">&lt;!-- here, tab 1&#39;s title &quot;title 1&quot; will be used as value. --&gt;</span>

<span class="token comment">&lt;!-- tab 1 content --&gt;</span>

@tab title 2#value2

<span class="token comment">&lt;!-- here, tab 2&#39;s title will be &quot;title 2&quot;, but it will bind a value with &quot;value2&quot; --&gt;</span>

<span class="token comment">&lt;!-- tab 2 content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),w={class:"hint-container info"},x=n("p",{class:"hint-container-title"},"Switching together and persisting choice",-1),y=n("p",null,"If you want to make some tab groups switch together, you can use same tab id to bind them.",-1),A=n("p",null,"Also, your choice with that tab id will be stored and persisted.",-1),B=n("p",null,"Here is an example:",-1),C=n("p",null,"Choose a package manager:",-1),N=n("p",null,"npm should be installed with Node.js.",-1),j=n("p",null,"If you are using Node.js v16+, you can use corepack to enable pnpm:",-1),q=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("corepack prepare pnpm@7.21.0 "),n("span",{class:"token parameter variable"},"--activated"),e(`
`)])])],-1),T=n("p",null,"Otherwise, you can install it with npm:",-1),V=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-g"),e(),n("span",{class:"token function"},"pnpm"),e(`
`)])])],-1),E=n("p",null,[e("Install "),n("code",null,"vuepress-plugin-md-enhance"),e(":")],-1),O=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance@next
`)])])],-1),P=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance@next
`)])])],-1),I=n("h2",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),e(" Demo")],-1),S=n("p",null,"A tab of fruit:",-1),D=n("p",null,"Apple",-1),U=n("p",null,"Banana",-1),Y=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another tab of fruit:</p>`,2),H=n("p",null,"Apple",-1),J=n("p",null,"Banana",-1),L=n("p",null,"Orange",-1),M=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A tab of fruit without id:</p>`,2),W=n("p",null,"Apple",-1),X=n("p",null,"Banana",-1),Z=n("p",null,"Orange",-1),$=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function z(F,G){const u=o("CodeTabs"),d=o("Tabs");return p(),v("div",null,[h,b(" more "),g,l(u,{id:"7",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:s,value:i,isActive:t})=>[k]),tab1:a(({title:s,value:i,isActive:t})=>[_]),_:1}),f,n("div",w,[x,y,A,B,C,l(d,{id:"49",data:[{title:"npm"},{title:"pnpm"}],"tab-id":"shell"},{tab0:a(({title:s,value:i,isActive:t})=>[N]),tab1:a(({title:s,value:i,isActive:t})=>[j,q,T,V]),_:1}),E,l(d,{id:"69",data:[{title:"Using npm",id:"npm"},{title:"Using pnpm",id:"pnpm"}],"tab-id":"shell"},{tab0:a(({title:s,value:i,isActive:t})=>[O]),tab1:a(({title:s,value:i,isActive:t})=>[P]),_:1})]),I,S,l(d,{id:"84",data:[{title:"apple",id:"apple"},{title:"banana",id:"banana"}],"tab-id":"fruit"},{tab0:a(({title:s,value:i,isActive:t})=>[D]),tab1:a(({title:s,value:i,isActive:t})=>[U]),_:1}),Y,l(d,{id:"100",data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:a(({title:s,value:i,isActive:t})=>[H]),tab1:a(({title:s,value:i,isActive:t})=>[J]),tab2:a(({title:s,value:i,isActive:t})=>[L]),_:1}),M,l(d,{id:"121",data:[{title:"apple"},{title:"banana"},{title:"orange"}]},{tab0:a(({title:s,value:i,isActive:t})=>[W]),tab1:a(({title:s,value:i,isActive:t})=>[X]),tab2:a(({title:s,value:i,isActive:t})=>[Z]),_:1}),$])}const Q=r(m,[["render",z],["__file","tabs.html.vue"]]);export{Q as default};
