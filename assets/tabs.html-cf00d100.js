import{a3 as u,Z as p,_ as v,a4 as b,$ as l,a0 as s,a1 as n,a2 as e,a5 as d,q as o}from"./framework-f408d5b9.js";const m={},h=n("p",null,"Пусть файл Markdown на вкладках поддержки вашего сайта VuePress.",-1),k=n("h2",{id:"конфиг",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#конфиг","aria-hidden":"true"},"#"),e(" Конфиг")],-1),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  theme`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      mdEnhance`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        tabs`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        `),n("span",{class:"token literal-property property"},"tabs"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=d(`<h2 id="использование" tabindex="-1"><a class="header-anchor" href="#использование" aria-hidden="true">#</a> Использование</h2><p>Вам нужно обернуть вкладки в контейнер <code>tabs</code>.</p><p>Вы можете добавить суффикс идентификатора в контейнер <code>tabs</code>, который будет использоваться как ID вкладки. Все вкладки с одинаковым идентификатором будут иметь одно и то же событие переключения.</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

<span class="token comment">&lt;!-- here, fruit will be used as id, it&#39;s optional --&gt;</span>

<span class="token comment">&lt;!-- tabs content --&gt;</span>

:::
</code></pre></div><p>Внутри этого контейнера вы должны использовать маркер <code>@tab</code>, чтобы пометить и разделить содержимое вкладки.</p><p>За маркером <code>@tab</code> вы можете добавить текст <code>:active</code>, чтобы активировать вкладку по умолчанию, и текст будет разрешен как заголовок вкладки.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab title 1

<span class="token comment">&lt;!-- tab 1 content --&gt;</span>

@tab title 2

<span class="token comment">&lt;!-- tab 2 content --&gt;</span>

@tab:active title 3

<span class="token comment">&lt;!-- tab 3 will be activated by default --&gt;</span>

<span class="token comment">&lt;!-- tab 3 content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>По умолчанию заголовок будет использоваться как значение вкладки, но вы можете переопределить его, используя суффикс идентификатора.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab title 1

<span class="token comment">&lt;!-- here, tab 1&#39;s title &quot;title 1&quot; will be used as value. --&gt;</span>

<span class="token comment">&lt;!-- tab 1 content --&gt;</span>

@tab title 2#value2

<span class="token comment">&lt;!-- here, tab 2&#39;s title will be &quot;title 2&quot;, but it will bind a value with &quot;value2&quot; --&gt;</span>

<span class="token comment">&lt;!-- tab 2 content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),w={class:"hint-container info"},x=n("p",{class:"hint-container-title"},"Переключение вместе и постоянный выбор",-1),y=n("p",null,"Если вы хотите, чтобы некоторые группы вкладок переключались вместе, вы можете использовать один и тот же идентификатор вкладки для их привязки. Вот пример:",-1),A=n("p",null,"Кроме того, ваш выбор с этим идентификатором вкладки будет сохранен и сохранен.",-1),T=n("p",null,"Выберите менеджер пакетов:",-1),B=n("p",null,"npm должен быть установлен вместе с Node.js.",-1),q=n("p",null,"Если вы используете Node.js v16+, вы можете использовать corepack для включения pnpm:",-1),C=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("corepack prepare pnpm@7.21.0 "),n("span",{class:"token parameter variable"},"--activated"),e(`
`)])])],-1),N=n("p",null,"В противном случае вы можете установить его с помощью npm:",-1),j=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-g"),e(),n("span",{class:"token function"},"pnpm"),e(`
`)])])],-1),V=n("p",null,[e("Установка "),n("code",null,"vuepress-plugin-md-enhance"),e(":")],-1),O=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance@next
`)])])],-1),D=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance@next
`)])])],-1),E=n("h2",{id:"демо",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#демо","aria-hidden":"true"},"#"),e(" Демо")],-1),S=n("p",null,"Вкладка фруктов:",-1),U=n("p",null,"Apple",-1),I=n("p",null,"Banana",-1),J=d(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Еще одна вкладка фруктов:</p>`,2),M=n("p",null,"Apple",-1),P=n("p",null,"Banana",-1),Z=n("p",null,"Orange",-1),$=d(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Вкладка фруктов без id:</p>`,2),z=n("p",null,"Apple",-1),F=n("p",null,"Banana",-1),G=n("p",null,"Orange",-1),H=d(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function K(L,Q){const r=o("CodeTabs"),c=o("Tabs");return p(),v("div",null,[h,b(" more "),k,l(r,{id:"7",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:s(({title:a,value:i,isActive:t})=>[g]),tab1:s(({title:a,value:i,isActive:t})=>[_]),_:1}),f,n("div",w,[x,y,A,T,l(c,{id:"46",data:[{title:"npm"},{title:"pnpm"}],"tab-id":"shell"},{tab0:s(({title:a,value:i,isActive:t})=>[B]),tab1:s(({title:a,value:i,isActive:t})=>[q,C,N,j]),_:1}),V,l(c,{id:"66",data:[{title:"Использование npm",id:"npm"},{title:"Использование pnpm",id:"pnpm"}],"tab-id":"shell"},{tab0:s(({title:a,value:i,isActive:t})=>[O]),tab1:s(({title:a,value:i,isActive:t})=>[D]),_:1})]),E,S,l(c,{id:"81",data:[{title:"apple",id:"apple"},{title:"banana",id:"banana"}],"tab-id":"fruit"},{tab0:s(({title:a,value:i,isActive:t})=>[U]),tab1:s(({title:a,value:i,isActive:t})=>[I]),_:1}),J,l(c,{id:"97",data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:s(({title:a,value:i,isActive:t})=>[M]),tab1:s(({title:a,value:i,isActive:t})=>[P]),tab2:s(({title:a,value:i,isActive:t})=>[Z]),_:1}),$,l(c,{id:"118",data:[{title:"apple"},{title:"banana"},{title:"orange"}]},{tab0:s(({title:a,value:i,isActive:t})=>[z]),tab1:s(({title:a,value:i,isActive:t})=>[F]),tab2:s(({title:a,value:i,isActive:t})=>[G]),_:1}),H])}const W=u(m,[["render",K],["__file","tabs.html.vue"]]);export{W as default};
