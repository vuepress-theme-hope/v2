import{_ as d,W as i,X as l,Y as r,Z as s,$ as e,a0 as a,a1 as h,E as p}from"./framework-eb069dea.js";const u={},_=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),a(" 安装")],-1),v=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),a(),e("span",{class:"token function"},"add"),a(),e("span",{class:"token parameter variable"},"-D"),a(` vuepress-shared@next
`)])])],-1),b=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),a(),e("span",{class:"token function"},"add"),a(),e("span",{class:"token parameter variable"},"-D"),a(` vuepress-shared@next
`)])])],-1),m=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),a(" i "),e("span",{class:"token parameter variable"},"-D"),a(` vuepress-shared@next
`)])])],-1),x=h('<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>VuePress 同时运行在 Node.js 端和浏览器端，我们称之为 <code>node</code> 和 <code>client</code>。</p><p>因此，你应该注意导入正确的文件，因为 Node.js 具有内置模块并能够访问文件系统，并且浏览器具有全局变量，如 <code>window</code> 或 <code>navigator</code>。</p></div><ul><li>在 Node 端，你应该从 <code>vuepress-shared/node</code> 导入函数。</li><li>在客户端，你应该从 <code>vuepress-shared/client</code> 导入函数。</li></ul>',3);function f(g,k){const o=p("CodeTabs");return i(),l("div",null,[_,r(o,{id:"3",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:s(({title:t,value:n,isActive:c})=>[v]),tab1:s(({title:t,value:n,isActive:c})=>[b]),tab2:s(({title:t,value:n,isActive:c})=>[m]),_:1}),x])}const V=d(u,[["render",f],["__file","index.html.vue"]]);export{V as default};
