import{a3 as p,Z as i,_ as u,a4 as r,$ as l,a0 as e,a1 as n,a2 as s,a5 as k,q as d}from"./framework-f408d5b9.js";const m={},v=n("p",null,[n("code",null,"vuepress-theme-hope"),s(" 和默认主题一样，同样支持继承。")],-1),h=n("p",null,[s("你可以根据自己的需求在 "),n("code",null,"vuepress-theme-hope"),s(" 的基础上二次创作自己的主题并本地使用或发布它。")],-1),b=k('<h2 id="继承主题" tabindex="-1"><a class="header-anchor" href="#继承主题" aria-hidden="true">#</a> 继承主题</h2><p>你需要为自己的主题创建一个入口文件，并从 <code>vuepress-theme-hope</code> 中导入 <code>hopeTheme</code>。</p><p>在你的入口文件中，设置 <code>extends: hopeTheme(options)</code> 声明继承 <code>vuepress-theme-hope</code> 主题。</p><p>你自己新创建的主题的同名别名 (<code>alias</code>) 和 同名布局 (<code>layouts</code>) 的优先级高于被继承主题 <code>vuepress-theme-hope</code>，这意味着你可以通过主题 API 的 <code>alias</code> 选项覆盖 <code>vuepress-theme-hope</code> 主题的组件，也可以通过客户端配置文件的同名布局覆盖 <code>vuepress-theme-hope</code> 主题的布局。</p><p>主题提供了如下布局</p><ul><li>Layout</li><li>NotFound</li><li>Slide (仅在幻灯片启用时可用)</li><li>BlogCategory (仅在博客启用时可用)</li><li>BlogHome (仅在博客启用时可用)</li><li>BlogType (仅在博客启用时可用)</li><li>Timeline (仅在博客启用时可用)</li></ul>',6),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/theme/index.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getDirname"),n("span",{class:"token punctuation"},","),s(" path "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" ThemeOptions "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" __dirname "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getDirname"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vuepress-theme-local"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token keyword"},"extends"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`

  alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 你可以在这里覆盖或新增别名"),s(`
    `),n("span",{class:"token comment"},"// 比如这里我们将 vuepress-theme-hope 主页组件改为自己主题下的 components/HomePage.vue"),s(`
    `),n("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s(`
      __dirname`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"./components/HomePage.vue"'),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/theme/index.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getDirname"),n("span",{class:"token punctuation"},","),s(" path "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" __dirname "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getDirname"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"options"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vuepress-theme-local"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token keyword"},"extends"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token literal-property property"},"alias"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 你可以在这里覆盖或新增别名"),s(`
    `),n("span",{class:"token comment"},"// 比如这里我们将 vuepress-theme-hope 主页组件改为自己主题下的 components/HomePage.vue"),s(`
    `),n("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s(`
      __dirname`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"./components/HomePage.vue"'),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("p",null,[s("你也可以通过主题客户端文件的 "),n("code",null,"layouts"),s(" 覆盖或新增 "),n("code",null,"vuepress-theme-hope"),s(" 提供的布局。")],-1),_=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/theme/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineClientConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/client"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Changelog "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./layouts/Changelog.vue"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Layout "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./layouts/Layout.vue"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineClientConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 你可以在这里覆盖或新增布局"),s(`
  layouts`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 比如这里我们将 vuepress-theme-hope 的默认布局改为自己主题下的 layouts/Layout.vue"),s(`
    Layout`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// 同时我们新增了一个 Changelog 布局"),s(`
    Changelog`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/theme/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineClientConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/client"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Changelog "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./layouts/Changelog.vue"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Layout "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./layouts/Layout.vue"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineClientConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 你可以在这里覆盖或新增布局"),s(`
  `),n("span",{class:"token literal-property property"},"layouts"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 比如这里我们将 vuepress-theme-hope 的默认布局改为自己主题下的 layouts/Layout.vue"),s(`
    Layout`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// 同时我们新增了一个 Changelog 布局"),s(`
    Changelog`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function C(x,T){const c=d("CodeTabs");return i(),u("div",null,[v,h,r(" more "),b,l(c,{id:"59",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:a,value:t,isActive:o})=>[g]),tab1:e(({title:a,value:t,isActive:o})=>[y]),_:1}),f,l(c,{id:"70",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:a,value:t,isActive:o})=>[_]),tab1:e(({title:a,value:t,isActive:o})=>[w]),_:1})])}const j=p(m,[["render",C],["__file","extend.html.vue"]]);export{j as default};
