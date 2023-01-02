import{a3 as u,Z as r,_ as d,$ as c,a0 as e,a1 as n,a2 as s,a5 as k,q as l}from"./framework-f408d5b9.js";const h={},m=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),_=n("p",null,[s("在 "),n("code",null,"[dir]"),s(" 文件夹内新建 vuepress-theme-hope 项目:")],-1),v=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(" create vuepress-theme-hope@next "),n("span",{class:"token punctuation"},"["),s("dir"),n("span",{class:"token punctuation"},"]"),s(`
`)])])],-1),g=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" init vuepress-theme-hope@next "),n("span",{class:"token punctuation"},"["),s("dir"),n("span",{class:"token punctuation"},"]"),s(`
`)])])],-1),f=k('<div class="hint-container note"><p class="hint-container-title">注</p><p>这里的 <code>[dir]</code> 是一个参数，你需要使用真实的文件夹名称替换它，例如 <code>docs</code>、<code>blog</code> 或其他你喜欢的名称。</p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>请在配置文件中导入并使用 <code>hopeTheme</code> 以使用 <code>vuepress-theme-hope</code>。</p>',3),b=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 此处放置主题配置"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),x=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 此处放置主题配置"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),y={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/docs/theme/src/.vuepress/config.ts",target:"_blank",rel:"noopener noreferrer"};function w(T,C){const p=l("CodeTabs"),i=l("ExternalLinkIcon");return r(),d("div",null,[m,_,c(p,{id:"6",data:[{title:"pnpm"},{title:"npm"}],"tab-id":"shell"},{tab0:e(({title:t,value:a,isActive:o})=>[v]),tab1:e(({title:t,value:a,isActive:o})=>[g]),_:1}),f,c(p,{id:"25",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:t,value:a,isActive:o})=>[b]),tab1:e(({title:t,value:a,isActive:o})=>[x]),_:1}),n("p",null,[s("你可以查看 "),n("a",y,[s("本文档配置"),c(i)]),s(" 作为一个配置参考。")])])}const A=u(h,[["render",w],["__file","install.html.vue"]]);export{A as default};