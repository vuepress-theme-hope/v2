import{_ as u,W as r,X as d,Y as i,Z as a,$ as n,a0 as s,E as c}from"./framework-ecf98296.js";const k={},m=n("p",null,"Let your images support preview, zoom, share, swipe view and download.",-1),h=n("h2",{id:"how-to-use",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-to-use","aria-hidden":"true"},"#"),s(" How to use")],-1),v=n("h3",{id:"install",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#"),s(" Install")],-1),g=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-photo-swipe@next
`)])])],-1),b=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-photo-swipe@next
`)])])],-1),_=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-photo-swipe@next
`)])])],-1),f=n("h3",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),s(" Usage")],-1),w=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" photoSwipePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-photo-swipe"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"photoSwipePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// your options"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" photoSwipePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-photo-swipe"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"photoSwipePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// your options"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h2",{id:"migrating-from-v1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#migrating-from-v1","aria-hidden":"true"},"#"),s(" Migrating from V1")],-1);function S(A,j){const l=c("CodeTabs"),p=c("RouterLink");return r(),d("div",null,[m,h,v,i(l,{id:"9",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:a(({title:e,value:t,isActive:o})=>[g]),tab1:a(({title:e,value:t,isActive:o})=>[b]),tab2:a(({title:e,value:t,isActive:o})=>[_]),_:1}),f,i(l,{id:"23",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[w]),tab1:a(({title:e,value:t,isActive:o})=>[x]),_:1}),y,n("p",null,[s("For details, see "),i(p,{to:"/migration.html"},{default:a(()=>[s("Migration Guide")]),_:1}),s(".")])])}const P=u(k,[["render",S],["__file","index.html.vue"]]);export{P as default};
