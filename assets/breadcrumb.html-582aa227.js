import{a3 as a,Z as r,_ as d,a1 as e,a2 as o,$ as t,a4 as l,a5 as _,q as n}from"./framework-f408d5b9.js";const i={},u=e("code",null,"vuepress-theme-hope",-1),h=e("code",null,"breadcrumb",-1),f=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),m=e("code",null,"true",-1),p=e("p",null,"无需任何额外配置，一个和主题色相符合的路径导航会显示在页面内容最上方，帮助阅读者理解文档结构。",-1),b=e("code",null,"breadcrumbIcon",-1),x=e("code",null,"true",-1),g={class:"hint-container warning"},E=e("p",{class:"hint-container-title"},"注意事项",-1),k={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"请尤其注意，为主页也设置一个标题!",-1),B=e("hr",{class:"footnotes-sep"},null,-1),N={class:"footnotes"},V={class:"footnotes-list"},I={id:"footnote1",class:"footnote-item"},y=e("strong",null,"支持页面配置",-1),A=_('<p><strong>支持页面配置</strong> 指主题允许页面的配置覆盖全局的配置。这意味着你可以在全局启用的情况下，在特定页面将其禁用，或在全局禁用的情况下在特定页面启用。</p><details class="hint-container details"><summary>例子</summary><p>以路径导航为例:</p><p>该功能默认全局启用，即主题选项中 <code>breadcrumb</code> 默认为 <code>true</code>，同时你可以在特定页面的 frontmatter 中设置 <code>breadcrumb: false</code> 来局部禁用它。</p><p>当然你也可以在主题选项中设置 <code>breadcrumb: false</code> 来全局禁用它，之在特定页面的 frontmatter 中设置 <code>breadcrumb: true</code> 来局部启用它。</p></details><a href="#footnote-ref1" class="footnote-backref">↩︎</a>',3);function C(D,L){const s=n("Badge"),c=n("ExternalLinkIcon");return r(),d("div",null,[e("p",null,[u,o(" 添加了开箱即用的路径导航支持，你可以通过 "),h,o(" 字段控制它 "),t(s,{text:"支持页面配置"}),o(),f,o("，默认的值为 "),m,o("。")]),p,e("p",null,[o("你也可以通过 "),b,o(" 字段 "),t(s,{text:"支持页面配置"}),o(" 控制路径导航的图标显示，默认值为 "),x,o("。")]),l(" more "),e("div",g,[E,e("p",null,[o("为了保证路径导航更好的提示，建议在每一个路径下创建 "),e("a",k,[o("README.md"),t(c)]),o(" 文件，同时为它们设置标题。否则，路径导航将因对应层级文件夹没有主页，无法生成标题与链接而忽略那一层级。")]),v]),B,e("section",N,[e("ol",V,[e("li",I,[e("p",null,[y,o(),t(s,{text:"支持页面配置"})]),A])])])])}const R=a(i,[["render",C],["__file","breadcrumb.html.vue"]]);export{R as default};
