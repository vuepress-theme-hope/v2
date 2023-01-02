import{_ as u,W as p,X as v,a1 as b,Y as t,Z as e,$ as n,a0 as s,a2 as c,g as o}from"./framework-346270e9.js";const m={},k=n("p",null,"让你的 VuePress 站点中的 Markdown 文件支持选项卡。",-1),h=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 添加选项卡支持"),s(`
      tabs`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 添加选项卡支持"),s(`
      `),n("span",{class:"token literal-property property"},"tabs"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=c(`<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>你需要将选项卡包装在 <code>tabs</code> 容器中。</p><p>你可以在 <code>tabs</code> 容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件。</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

<span class="token comment">&lt;!-- 这里，fruit 将用作 id，它是可选的 --&gt;</span>

<span class="token comment">&lt;!-- 选项卡内容 --&gt;</span>

:::
</code></pre></div><p>在这个容器内，你应该使用 <code>@tab</code> 标记来标记和分隔选项卡内容。</p><p>在 <code>@tab</code> 标记后，你可以添加文本 <code>:active</code> 默认激活选项卡，之后的文本将被解析为选项卡标题。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab 标题 1

<span class="token comment">&lt;!-- tab 1 内容 --&gt;</span>

@tab 标题 2

<span class="token comment">&lt;!-- tab 2 内容 --&gt;</span>

@tab:active 标题 3

<span class="token comment">&lt;!-- tab 3 将会被默认激活 --&gt;</span>

<span class="token comment">&lt;!-- tab 3 内容 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，标题将用作选项卡的值，但你可以使用 id 后缀覆盖它。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab 标题 1

<span class="token comment">&lt;!-- 此处，选项卡 1 的标题“标题 1”将用作值。 --&gt;</span>

<span class="token comment">&lt;!-- tab 1 内容 --&gt;</span>

@tab 标题 2#值 2

<span class="token comment">&lt;!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值--&gt;</span>

<span class="token comment">&lt;!-- tab 2 内容 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),x={class:"hint-container info"},w=n("p",{class:"hint-container-title"},"一起切换并保持选择",-1),A=n("p",null,"如果你想让一些选项卡组一起切换，你可以使用相同的选项卡 ID 来绑定它们。",-1),y=n("p",null,"针对每个选项卡 ID 的选择会被存储并进行持久化。",-1),B=n("p",null,"下方是一个案例。",-1),N=n("p",null,"选择包管理器:",-1),j=n("p",null,"npm 应该与 Node.js 被一同安装。",-1),T=n("p",null,"如果你使用的是 Node.js v16+，你可以使用 corepack 来启用 pnpm:",-1),V=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("corepack prepare pnpm@7.21.0 "),n("span",{class:"token parameter variable"},"--activated"),s(`
`)])])],-1),C=n("p",null,"否则，你可以使用 npm 安装它:",-1),E=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-g"),s(),n("span",{class:"token function"},"pnpm"),s(`
`)])])],-1),P=n("p",null,[s("安装 "),n("code",null,"vuepress-plugin-md-enhance"),s(":")],-1),D=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-md-enhance@next
`)])])],-1),O=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-md-enhance@next
`)])])],-1),S=n("h2",{id:"案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),s(" 案例")],-1),I=n("p",null,"一个水果选项卡列表:",-1),J=n("p",null,"Apple",-1),M=n("p",null,"Banana",-1),W=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个水果选项卡列表:</p>`,2),X=n("p",null,"Apple",-1),Y=n("p",null,"Banana",-1),Z=n("p",null,"Orange",-1),$=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个没有绑定 id 的水果选项卡列表:</p>`,2),q=n("p",null,"Apple",-1),z=n("p",null,"Banana",-1),F=n("p",null,"Orange",-1),G=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function H(K,L){const r=o("CodeTabs"),d=o("Tabs");return p(),v("div",null,[k,b(" more "),h,t(r,{id:"7",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:a,value:i,isActive:l})=>[g]),tab1:e(({title:a,value:i,isActive:l})=>[_]),_:1}),f,n("div",x,[w,A,y,B,N,t(d,{id:"49",data:[{title:"npm"},{title:"pnpm"}],"tab-id":"shell"},{tab0:e(({title:a,value:i,isActive:l})=>[j]),tab1:e(({title:a,value:i,isActive:l})=>[T,V,C,E]),_:1}),P,t(d,{id:"69",data:[{title:"使用 npm",id:"npm"},{title:"使用 pnpm",id:"pnpm"}],"tab-id":"shell"},{tab0:e(({title:a,value:i,isActive:l})=>[D]),tab1:e(({title:a,value:i,isActive:l})=>[O]),_:1})]),S,I,t(d,{id:"84",data:[{title:"apple",id:"apple"},{title:"banana",id:"banana"}],"tab-id":"fruit"},{tab0:e(({title:a,value:i,isActive:l})=>[J]),tab1:e(({title:a,value:i,isActive:l})=>[M]),_:1}),W,t(d,{id:"100",data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:e(({title:a,value:i,isActive:l})=>[X]),tab1:e(({title:a,value:i,isActive:l})=>[Y]),tab2:e(({title:a,value:i,isActive:l})=>[Z]),_:1}),$,t(d,{id:"121",data:[{title:"apple"},{title:"banana"},{title:"orange"}]},{tab0:e(({title:a,value:i,isActive:l})=>[q]),tab1:e(({title:a,value:i,isActive:l})=>[z]),tab2:e(({title:a,value:i,isActive:l})=>[F]),_:1}),G])}const R=u(m,[["render",H],["__file","tabs.html.vue"]]);export{R as default};
