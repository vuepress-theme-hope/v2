import{a3 as k,Z as d,_ as m,a1 as n,a2 as s,$ as p,a4 as v,a0 as a,a5 as i,q as r}from"./framework-f408d5b9.js";const b={},h=n("a",{href:"#%E6%90%9C%E7%B4%A2%E6%A1%86"},"搜索框",-1),g=n("a",{href:"#%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5"},"导航栏链接",-1),y={href:"https://v2.vuepress.vuejs.org/zh/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},f=n("a",{href:"#git-%E4%BB%93%E5%BA%93%E5%92%8C%E7%BC%96%E8%BE%91%E9%93%BE%E6%8E%A5"},"仓库链接",-1),_=n("a",{href:"#%E5%A4%96%E8%A7%82%E5%BC%B9%E7%AA%97"},"外观弹窗",-1),x=n("h2",{id:"导航栏链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导航栏链接","aria-hidden":"true"},"#"),s(" 导航栏链接")],-1),w=n("p",null,[s("你可以在主题选项中通过 "),n("code",null,"navbar"),s(" 配置导航栏链接，它接受一个数组。")],-1),z=n("h3",{id:"字符串格式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字符串格式","aria-hidden":"true"},"#"),s(" 字符串格式")],-1),T=n("p",null,"配置导航栏最简单的方式，是依次填入需要展示的页面文件的路径，这样导航栏的文字、图标和链接会自动通过对应文件生成。",-1),A=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    navbar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"/zh/guide/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"/zh/config/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"/zh/faq.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),E=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"navbar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"/zh/guide/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"/zh/config/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"/zh/faq.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),j=i('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>你可以省略 <code>.md</code> 扩展名，以 <code>/</code> 结尾的路径会被推断为 <code>/README.md</code>。</p></div><h3 id="对象格式" tabindex="-1"><a class="header-anchor" href="#对象格式" aria-hidden="true">#</a> 对象格式</h3><p>如果你对页面的图标不满意或者觉得页面标题太长，你可以改为配置一个对象。可用的配置项有:</p><ul><li><code>text:</code>: 项目文字</li><li><code>link</code>: 项目链接</li><li><code>icon</code>: 项目图标 (可选)</li><li><code>activeMatch</code>: 项目激活匹配 (可选)，支持正则字符串。</li></ul>',4),S=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    navbar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"指南"'),n("span",{class:"token punctuation"},","),s(`
        link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh/guide/README.md"'),n("span",{class:"token punctuation"},","),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"creative"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 仅在 `/zh/guide/` 激活"),s(`
        activeMatch`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^/zh/guide/$"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"配置"'),n("span",{class:"token punctuation"},","),s(" link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh/config/README.md"'),n("span",{class:"token punctuation"},","),s(" icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"config"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"常见问题"'),n("span",{class:"token punctuation"},","),s(`
        link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh/faq.md"'),n("span",{class:"token punctuation"},","),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"question"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 会在 `/zh/faq` 开头的路径激活"),s(`
        `),n("span",{class:"token comment"},"// 所以当你前往 `/zh/faq/xxx.html` 时也会激活"),s(`
        activeMatch`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^/zh/faq"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"navbar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"指南"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh/guide/README.md"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"creative"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 仅在 `/zh/guide/` 激活"),s(`
        `),n("span",{class:"token literal-property property"},"activeMatch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^/zh/guide/$"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"配置"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh/config/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"config"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"常见问题"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh/faq.md"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"question"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 会在 `/zh/faq` 开头的路径激活"),s(`
        `),n("span",{class:"token comment"},"// 所以当你前往 `/zh/faq/xxx.html` 时也会激活"),s(`
        `),n("span",{class:"token literal-property property"},"activeMatch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^/zh/faq"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=i('<div class="hint-container tip"><p class="hint-container-title">activeMatch 的高级用法</p><p><code>activeMatch</code> 主要给予你控制路径是否激活的能力，比如你可能有如下链接:</p><ul><li><code>/path/</code></li><li><code>/path/a/</code></li><li><code>/path/b/</code></li></ul><p>此时你可能想避免在 <code>/path/a/</code> 以及 <code>/path/b/</code> 开头的路径下，出现两个菜单同时激活的情况。将第一项的 <code>activeMatch</code> 选项设置为 <code>^/path/(?:(?!a/|b/).*)?$</code> 就可以有效避免。</p></div><h3 id="下拉列表" tabindex="-1"><a class="header-anchor" href="#下拉列表" aria-hidden="true">#</a> 下拉列表</h3><p>如果你需要展示较多的链接，你可以将同类链接整理成下拉列表。</p><p>你需要设置对象式导航栏配置项，并提供额外的 <code>children</code> 选项设置链接列表:</p>',4),U=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    navbar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"基础"'),n("span",{class:"token punctuation"},","),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"info"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"/zh/basic/markdown.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"/zh/basic/vuepress.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"navbar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"基础"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"info"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"/zh/basic/markdown.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"/zh/basic/vuepress.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("p",null,"由于大多数情况下，导航栏的分组项目都属于同一类别，会放在同一个子目录下，它们具有相同的路径前缀。",-1),R=n("p",null,[s("为了简化配置，你可以添加 "),n("code",null,"prefix"),s(" 字段为分组的每一个子链接添加一个前缀:")],-1),q=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    navbar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"基础"'),n("span",{class:"token punctuation"},","),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"info"'),n("span",{class:"token punctuation"},","),s(`
        prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh/basic/"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"markdown.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vuepress.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"navbar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"基础"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"info"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh/basic/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"markdown.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vuepress.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("p",null,[s("此外，你还可以通过嵌套的 "),n("code",null,"children"),s(" 来在下拉列表中设置分组:")],-1),J=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    navbar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"插件列表"'),n("span",{class:"token punctuation"},","),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"plugin"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"内置插件"'),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token comment"},"/* 一些子项目 */"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"外部插件"'),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token comment"},"/* 一些子项目 */"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"navbar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"插件列表"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"plugin"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"内置插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token comment"},"/* 一些子项目 */"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"外部插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token comment"},"/* 一些子项目 */"),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("h2",{id:"禁用导航栏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用导航栏","aria-hidden":"true"},"#"),s(" 禁用导航栏")],-1),V=n("p",null,[s("你可以设置 "),n("code",null,"navbar: false"),s(" 来禁用所有页面的导航栏:")],-1),P=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    navbar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),F=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"navbar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),W=i(`<p>你也可以通过 <code>YAML front matter</code> 来禁用某个指定页面的导航栏:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">navbar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div><h2 id="网站图标" tabindex="-1"><a class="header-anchor" href="#网站图标" aria-hidden="true">#</a> 网站图标</h2><p>你可以在主题选项中使用 <code>logo</code> 来配置站点的图标，请填入绝对路径。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>请填写绝对路径并将 logo 放在 <code>.vuepress/public</code> 文件夹中。</p></div><p>配置图标后，图标将移动设备上取代先前的站点名称显示在导航栏上。</p>`,6),$=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    logo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/logo.png"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),O=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"logo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/logo.png"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),I=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,[s("你可以在主题选项中设置 "),n("code",null,"logoDark"),s(" 以在深色模式下显示另一个 Logo。")])],-1),Y=n("h2",{id:"多语言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多语言","aria-hidden":"true"},"#"),s(" 多语言")],-1),Z={href:"https://v2.vuepress.vuejs.org/zh/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},K=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    locales`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        logo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/logo.svg"'),n("span",{class:"token punctuation"},","),s(`
        navbar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* 根目录下的英文配置 */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        logo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh-logo.svg"'),n("span",{class:"token punctuation"},","),s(`
        navbar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* 中文目录下的中文配置 */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"locales"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"logo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/logo.svg"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"navbar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* 根目录下的英文配置 */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"logo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh-logo.svg"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"navbar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* 中文目录下的中文配置 */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X=n("h2",{id:"搜索框",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搜索框","aria-hidden":"true"},"#"),s(" 搜索框")],-1),nn=n("p",null,[n("code",null,"vuepress-theme-hope"),s(" 同默认主题一样，带来了搜索插件的内置支持。你可以根据自己的需要来自行添加插件并启用搜索功能。导航栏会自动出现对应的搜索框。")],-1),sn=n("h2",{id:"git-仓库和编辑链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-仓库和编辑链接","aria-hidden":"true"},"#"),s(" Git 仓库和编辑链接")],-1),an=n("p",null,[s("当你在主题选项中提供了 "),n("code",null,"repo"),s(" 选项，将会自动在每个页面的导航栏生成源文件仓库按钮。")],-1),tn=n("p",null,[s("你可以在主题选项中通过 "),n("code",null,"repoDisplay"),s(" 控制是否显示仓库按钮。")],-1),en=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 默认为 GitHub. 同时也可以是一个完整的 URL"),s(`
    repo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vuepress-theme-hope/vuepress-theme-hope"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// 自定义仓库链接文字。默认从 `repo` 中自动推断为"),s(`
    `),n("span",{class:"token comment"},'// "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。'),s(`
    repoLabel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"GitHub"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// 是否在导航栏内显示仓库链接，默认为 `true`"),s(`
    repoDisplay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),on=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 默认为 GitHub. 同时也可以是一个完整的 URL"),s(`
    `),n("span",{class:"token literal-property property"},"repo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vuepress-theme-hope/vuepress-theme-hope"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// 自定义仓库链接文字。默认从 `repo` 中自动推断为"),s(`
    `),n("span",{class:"token comment"},'// "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。'),s(`
    `),n("span",{class:"token literal-property property"},"repoLabel"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"GitHub"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// 是否在导航栏内显示仓库链接，默认为 `true`"),s(`
    `),n("span",{class:"token literal-property property"},"repoDisplay"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pn=n("h2",{id:"外观弹窗",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#外观弹窗","aria-hidden":"true"},"#"),s(" 外观弹窗")],-1),cn=n("p",null,"提供下列三种功能:",-1),ln=i('<h2 id="布局配置" tabindex="-1"><a class="header-anchor" href="#布局配置" aria-hidden="true">#</a> 布局配置</h2><p>主题允许你自定义导航栏布局。 你可以在 <code>navbarLayout</code> 选项下的 <code>left</code>、<code>center</code> 和 <code>right</code> 键中添加组件。</p><p>可用组件:</p><ul><li>Brand: 站点品牌</li><li>Links: 导航栏链接</li><li>Language: 语言切换菜单</li><li>Search: 搜索框</li><li>Outlook: 外观弹窗</li><li>Repo: 项目仓库</li></ul><p>默认情况下，我们使用以下选项:</p>',5),rn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    navbarLayout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      left`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Brand"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      center`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Links"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      right`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Language"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Repo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Outlook"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Search"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),un=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"navbarLayout"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"left"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Brand"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"center"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Links"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"right"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Language"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Repo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Outlook"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Search"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),kn=n("h2",{id:"相关助手与类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关助手与类型","aria-hidden":"true"},"#"),s(" 相关助手与类型")],-1),dn=n("p",null,[n("code",null,"vuepress-theme-hope"),s(" 将导航栏的类型导出为 "),n("code",null,"NavbarConfig"),s("，同时，提供了一个 "),n("code",null,"navbar"),s(" Helper 函数。它们可以在 TS 和 JS 中提供导航栏配置的校验与自动补全。")],-1),mn=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"它们主要应对当你将 VuePress 配置拆分成多个部分的情景。")],-1),vn=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/navbar.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" navbar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"navbar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token comment"},"/* 你的导航栏配置 */"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),bn=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/navbar.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" NavbarConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" navbarConfig"),n("span",{class:"token operator"},":"),s(" NavbarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token comment"},"/* 你的导航栏配置 */"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" navbarConfig"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),hn=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/navbar.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" navbar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"navbar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token comment"},"/* 你的导航栏配置 */"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),gn=n("h2",{id:"例子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#例子","aria-hidden":"true"},"#"),s(" 例子")],-1),yn={class:"hint-container details"},fn=n("summary",null,"本文档的导航栏配置",-1),_n=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" navbar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" zhNavbarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"navbar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token string"},'"/zh/guide/"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string"},'"/zh/config/"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string"},'"/zh/faq/"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"教程"'),n("span",{class:"token punctuation"},","),s(`
    icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"guide"'),n("span",{class:"token punctuation"},","),s(`
    prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh/cookbook/"'),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"tutorial/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"markdown/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vuepress/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string"},'"/zh/migration/"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"项目"'),n("span",{class:"token punctuation"},","),s(`
    icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"info"'),n("span",{class:"token punctuation"},","),s(`
    prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh/"'),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"changelog"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"contribution"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"插件"'),n("span",{class:"token punctuation"},","),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"plugin"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"自动目录插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tree"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/auto-catalog/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"博客插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"blog"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/blog/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"评论插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"comment"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/comment/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"组件库"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"plugin"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/components/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"代码复制插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"copy"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/copy-code/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"版权信息插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"copyright"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/copyright/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Feed 插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rss"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/feed/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"LightGallery 插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"pic"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/lightgallery/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Markdown 增强插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"markdown"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"图片预览插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"pic"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/photo-swipe/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"PWA 插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"app"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/pwa/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"阅读时间插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"read"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/reading-time/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"移除 PWA 插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"app"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/remove-pwa/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"重定向插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"navigation"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/redirect/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sass 调色板插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"palette"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/sass-palette/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"客户端搜索插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"search"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/search-pro/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Seo 插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"strong"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/seo/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"VuePress 工具函数"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"app"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/shared/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sitemap 插件"'),n("span",{class:"token punctuation"},","),s(`
            icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"sitemap"'),n("span",{class:"token punctuation"},","),s(`
            link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/sitemap/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" navbar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" zhNavbarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"navbar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token string"},'"/zh/guide/"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string"},'"/zh/config/"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string"},'"/zh/faq/"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"教程"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"guide"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh/cookbook/"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"tutorial/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"markdown/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vuepress/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string"},'"/zh/migration/"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"项目"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"info"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/zh/"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"changelog"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"contribution"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"插件"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"plugin"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"自动目录插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tree"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/auto-catalog/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"博客插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"blog"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/blog/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"评论插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"comment"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/comment/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"组件库"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"plugin"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/components/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"代码复制插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"copy"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/copy-code/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"版权信息插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"copyright"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/copyright/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Feed 插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rss"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/feed/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"LightGallery 插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"pic"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/lightgallery/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Markdown 增强插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"markdown"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"图片预览插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"pic"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/photo-swipe/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"PWA 插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"app"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/pwa/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"阅读时间插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"read"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/reading-time/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"移除 PWA 插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"app"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/remove-pwa/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"重定向插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"navigation"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/redirect/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sass 调色板插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"palette"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/sass-palette/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"客户端搜索插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"search"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/search-pro/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Seo 插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"strong"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/seo/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"VuePress 工具函数"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"app"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/shared/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sitemap 插件"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"sitemap"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuepress-theme-hope.github.io/v2/sitemap/zh/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function wn(zn,Tn){const u=r("ExternalLinkIcon"),c=r("CodeTabs"),l=r("RouterLink");return d(),m("div",null,[n("p",null,[s("导航栏可能包含你的站点名称、"),h,s("、 "),g,s("、"),n("a",y,[s("多语言支持"),p(u)]),s("、"),f,s(" 和 "),_,s("。它们均取决于你的配置。")]),v(" more "),x,w,z,T,p(c,{id:"16",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[A]),tab1:a(({title:t,value:e,isActive:o})=>[E]),_:1}),j,p(c,{id:"57",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[S]),tab1:a(({title:t,value:e,isActive:o})=>[C]),_:1}),L,p(c,{id:"99",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[U]),tab1:a(({title:t,value:e,isActive:o})=>[B]),_:1}),M,R,p(c,{id:"113",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[q]),tab1:a(({title:t,value:e,isActive:o})=>[D]),_:1}),G,p(c,{id:"124",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[J]),tab1:a(({title:t,value:e,isActive:o})=>[N]),_:1}),H,V,p(c,{id:"138",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[P]),tab1:a(({title:t,value:e,isActive:o})=>[F]),_:1}),W,p(c,{id:"164",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[$]),tab1:a(({title:t,value:e,isActive:o})=>[O]),_:1}),I,Y,n("p",null,[s("主题的导航栏支持 "),n("a",Z,[s("多语言"),p(u)]),s("，所以你可以为每个语言单独设置上面提到的导航栏选项:")]),p(c,{id:"183",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[K]),tab1:a(({title:t,value:e,isActive:o})=>[Q]),_:1}),X,nn,n("p",null,[s("关于详情，详见 "),p(l,{to:"/zh/guide/feature/search.html"},{default:a(()=>[s("功能 → 搜索")]),_:1}),s("。")]),sn,an,tn,p(c,{id:"209",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[en]),tab1:a(({title:t,value:e,isActive:o})=>[on]),_:1}),pn,cn,n("ul",null,[n("li",null,[p(l,{to:"/zh/guide/interface/theme-color.html"},{default:a(()=>[s("主题色切换")]),_:1})]),n("li",null,[p(l,{to:"/zh/guide/interface/darkmode.html"},{default:a(()=>[s("深色模式")]),_:1})]),n("li",null,[p(l,{to:"/zh/guide/interface/others.html#%E5%85%A8%E5%B1%8F%E6%8C%89%E9%92%AE"},{default:a(()=>[s("全屏按钮")]),_:1})])]),ln,p(c,{id:"284",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[rn]),tab1:a(({title:t,value:e,isActive:o})=>[un]),_:1}),kn,dn,mn,p(c,{id:"303",data:[{title:"TS Helper"},{title:"TS 类型"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[vn]),tab1:a(({title:t,value:e,isActive:o})=>[bn]),tab2:a(({title:t,value:e,isActive:o})=>[hn]),_:1}),gn,n("details",yn,[fn,p(c,{id:"318",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[_n]),tab1:a(({title:t,value:e,isActive:o})=>[xn]),_:1})])])}const En=k(b,[["render",wn],["__file","navbar.html.vue"]]);export{En as default};
