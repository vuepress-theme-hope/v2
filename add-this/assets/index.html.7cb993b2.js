import{r as l,o as c,a as p,b as a,w as e,F as u,d as s,e as n}from"./app.c0b74699.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=s("h2",{id:"how-to-use",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#how-to-use","aria-hidden":"true"},"#"),n(" How to use")],-1),k=s("h3",{id:"install",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#"),n(" Install")],-1),b=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token function"},"add"),n(` -D vuepress-plugin-add-this@next
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br")])],-1),m=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),n(` i -D vuepress-plugin-add-this@next
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br")])],-1),h=s("h3",{id:"usage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),n(" Usage")],-1),_=s("div",{class:"language-typescript ext-ts line-numbers-mode"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" addThis "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-plugin-add-this"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token punctuation"},"{"),n(`
  plugins`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token function"},"addThis"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(" pubid"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"your pubid"'),n(),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br")])],-1),g=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"language-javascript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.js"),n(`
`),s("span",{class:"token keyword"},"const"),n(),s("span",{class:"token punctuation"},"{"),n(" addThis "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"require"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"vuepress-plugin-add-this"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`

module`),s("span",{class:"token punctuation"},"."),n("exports "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token literal-property property"},"plugins"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token function"},"addThis"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token literal-property property"},"pubid"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"your pubid"'),n(),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br")])],-1);function f(v,x){const t=l("CodeGroupItem"),o=l("CodeGroup");return c(),p(u,null,[d,k,a(o,null,{default:e(()=>[a(t,{title:"yarn"},{default:e(()=>[b]),_:1}),a(t,{title:"npm"},{default:e(()=>[m]),_:1})]),_:1}),h,a(o,null,{default:e(()=>[a(t,{title:"ts"},{default:e(()=>[_]),_:1}),a(t,{title:"js"},{default:e(()=>[g]),_:1})]),_:1})],64)}var j=r(i,[["render",f]]);export{j as default};