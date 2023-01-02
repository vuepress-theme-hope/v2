import{a3 as d,Z as m,_ as v,a4 as b,$ as c,a0 as a,a1 as n,a2 as s,a5 as p,q as r}from"./framework-f408d5b9.js";const g={},h=n("p",null,"侧边栏可能会包含相关的文档列表，文档标题以及博客模式下的博主信息。",-1),y=n("h2",{id:"侧边栏链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#侧边栏链接","aria-hidden":"true"},"#"),s(" 侧边栏链接")],-1),f=n("p",null,[s("站点侧边栏的配置由主题选项中的 "),n("code",null,"sidebar"),s(" 控制。")],-1),x=n("h3",{id:"字符串格式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字符串格式","aria-hidden":"true"},"#"),s(" 字符串格式")],-1),_=n("p",null,"同导航栏，你可以填入一个包含多个文件链接的数组，作为侧边栏基本的配置:",-1),w=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"/zh/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"/zh/guide/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"/zh/config/README.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),E=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"/zh/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"/zh/guide/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"/zh/config/README.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),A=p('<p>数组的每一项会自动提取对应文件的图标与标题，渲染为一个侧边栏项目。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你可以省略 <code>.md</code> 扩展名，以 <code>/</code> 结尾的路径会被推断为 <code>/README.md</code>。</p></div><h3 id="对象格式" tabindex="-1"><a class="header-anchor" href="#对象格式" aria-hidden="true">#</a> 对象格式</h3><p>同导航栏，如果你对页面的图标不满意或者觉得页面标题太长，你可以改为配置一个对象。可用的配置项有:</p><ul><li><code>text:</code> 项目文字</li><li><code>link</code> 项目链接</li><li><code>icon</code>: 项目图标 (可选)</li><li><code>activeMatch</code>: 项目激活匹配 (可选)，支持正则字符串。</li></ul>',5),j=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=p('<div class="hint-container tip"><p class="hint-container-title">activeMatch 的高级用法</p><p><code>activeMatch</code> 主要给予你控制路径是否激活的能力，比如你可能有如下链接:</p><ul><li><code>/path/</code></li><li><code>/path/a/</code></li><li><code>/path/b/</code></li></ul><p>此时你可能想避免在 <code>/path/a/</code> 以及 <code>/path/b/</code> 开头的路径下，出现两个菜单同时激活的情况。将第一项的 <code>activeMatch</code> 选项设置为 <code>^/path/(?:(?!a/|b/).*)?$</code> 就可以有效避免。</p></div><h3 id="分组与嵌套" tabindex="-1"><a class="header-anchor" href="#分组与嵌套" aria-hidden="true">#</a> 分组与嵌套</h3><p>如果你需要展示嵌套结构的侧边栏，你可以将同类链接整理成菜单分组。</p><p>你需要使用 <a href="#%E5%AF%B9%E8%B1%A1%E6%A0%BC%E5%BC%8F">对象格式</a> ，并提供额外的 <code>children</code> 选项设置链接列表。和导航栏一样，你可以在侧边栏中使用 <code>prefix</code> 来为组内的每个链接添加默认的路径前缀，并且侧边栏额外支持设置 <code>collapsible: true</code> 来使菜单分组可折叠。</p>',4),M=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 必要的，分组的标题文字"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"分组 1"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 可选的, 分组标题对应的图标"),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tip"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 可选的, 分组标题对应的链接"),s(`
        link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 可选的，会添加到每个 item 链接地址之前"),s(`
        prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 可选的, 设置分组是否可以折叠，默认值是 false,"),s(`
        collapsible`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 必要的，分组的子项目"),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"README.md"'),s(),n("span",{class:"token comment"},"/* /foo/index.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"/* ... */"),s(`
          `),n("span",{class:"token string"},'"geo.md"'),s(),n("span",{class:"token comment"},"/* /foo/geo.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"分组 2"'),n("span",{class:"token punctuation"},","),s(`
        prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/ray/"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* ... */"),s(`
          `),n("span",{class:"token string"},'"bar.md"'),s(),n("span",{class:"token comment"},"/* /ray/bar.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"baz.md"'),s(),n("span",{class:"token comment"},"/* /ray/baz.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 必要的，分组的标题文字"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"分组 1"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 可选的, 分组标题对应的图标"),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tip"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 可选的, 分组标题对应的链接"),s(`
        `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 可选的，会添加到每个 item 链接地址之前"),s(`
        `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 可选的, 设置分组是否可以折叠，默认值是 false,"),s(`
        `),n("span",{class:"token literal-property property"},"collapsible"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 必要的，分组的子项目"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"README.md"'),s(),n("span",{class:"token comment"},"/* /foo/index.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"/* ... */"),s(`
          `),n("span",{class:"token string"},'"geo.md"'),s(),n("span",{class:"token comment"},"/* /foo/geo.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"分组 2"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/ray/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* ... */"),s(`
          `),n("span",{class:"token string"},'"bar.md"'),s(),n("span",{class:"token comment"},"/* /ray/bar.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"baz.md"'),s(),n("span",{class:"token comment"},"/* /ray/baz.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("p",null,"侧边栏分组也可以进行嵌套:",-1),D=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Group"'),n("span",{class:"token punctuation"},","),s(`
        prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"baz"'),s(),n("span",{class:"token comment"},"/* /baz.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sub Group 1"'),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"quz.md"'),s(),n("span",{class:"token comment"},"/* /quz.html */"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"xyzzy.md"'),s(),n("span",{class:"token comment"},"/* /xyzzy.html */"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sub Group 2"'),n("span",{class:"token punctuation"},","),s(`
            prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"corge/"'),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token string"},'"fred.md"'),s(),n("span",{class:"token comment"},"/* /corge/fred.html */"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token string"},'"grault.md"'),s(),n("span",{class:"token comment"},"/* /corge/grault.html */"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"foo.md"'),s(),n("span",{class:"token comment"},"/* /foo.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Group"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"baz.md"'),s(),n("span",{class:"token comment"},"/* /baz.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sub Group 1"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"quz.md"'),s(),n("span",{class:"token comment"},"/* /quz.html */"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"xyzzy.md"'),s(),n("span",{class:"token comment"},"/* /xyzzy.html */"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sub Group 2"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"corge/"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token string"},'"fred.md"'),s(),n("span",{class:"token comment"},"/* /corge/fred.html */"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token string"},'"grault.md"'),s(),n("span",{class:"token comment"},"/* /corge/grault.html */"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"foo.md"'),s(),n("span",{class:"token comment"},"/* /foo.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=p(`<p>通常情况下，你可能希望搭配 <code>prefix</code> 使用来快速还原文档的结构。</p><p>比如，将你的页面文件为下述的目录结构:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│   ├─ README.md
│   ├─ one.md
│   └─ two.md
└─ bar/
    ├─ README.md
    ├─ three.md
    └─ four.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你就可以进行以下配置:</p>`,4),U=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"/"'),s(),n("span",{class:"token comment"},"/* / */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Foo"'),n("span",{class:"token punctuation"},","),s(`
        prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /foo/ */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"one"'),s(),n("span",{class:"token comment"},"/* /foo/one.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"two"'),s(),n("span",{class:"token comment"},"/* /foo/two.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Bar"'),n("span",{class:"token punctuation"},","),s(`
        prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/bar/"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /bar/ */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"three"'),s(),n("span",{class:"token comment"},"/* /bar/three.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"four"'),s(),n("span",{class:"token comment"},"/* /bar/four.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"/contact"'),s(),n("span",{class:"token comment"},"/* /contact.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"/about"'),s(),n("span",{class:"token comment"},"/* /about.html */"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"/"'),s(),n("span",{class:"token comment"},"/* / */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Foo"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /foo/ */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"one"'),s(),n("span",{class:"token comment"},"/* /foo/one.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"two"'),s(),n("span",{class:"token comment"},"/* /foo/two.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Bar"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/bar/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /bar/ */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"three"'),s(),n("span",{class:"token comment"},"/* /bar/three.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"four"'),s(),n("span",{class:"token comment"},"/* /bar/four.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"/contact"'),s(),n("span",{class:"token comment"},"/* /contact.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"/about"'),s(),n("span",{class:"token comment"},"/* /about.html */"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=p(`<h3 id="多个侧边栏" tabindex="-1"><a class="header-anchor" href="#多个侧边栏" aria-hidden="true">#</a> 多个侧边栏</h3><p>如果你想为不同的页面组来显示不同的侧边栏，你需要通过 <code>路径前缀: 侧边栏配置</code> 的格式为侧边栏配置一个对象。</p><p>比如，将你的页面文件为下述的目录结构:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│   ├─ README.md
│   ├─ one.md
│   └─ two.md
└─ bar/
    ├─ README.md
    ├─ three.md
    └─ four.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你就可以遵循以下的侧边栏配置，来为不同路径显示不同的分组:</p>`,5),F=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/foo/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /foo/ */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"one"'),s(),n("span",{class:"token comment"},"/* /foo/one.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"two"'),s(),n("span",{class:"token comment"},"/* /foo/two.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token string-property property"},'"/bar/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /bar/ */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"three"'),s(),n("span",{class:"token comment"},"/* /bar/three.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"four"'),s(),n("span",{class:"token comment"},"/* /bar/four.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"// fallback"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* / */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"contact"'),s(),n("span",{class:"token comment"},"/* /contact.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"about"'),s(),n("span",{class:"token comment"},"/* /about.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/foo/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /foo/ */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"one"'),s(),n("span",{class:"token comment"},"/* /foo/one.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"two"'),s(),n("span",{class:"token comment"},"/* /foo/two.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token string-property property"},'"/bar/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /bar/ */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"three"'),s(),n("span",{class:"token comment"},"/* /bar/three.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"four"'),s(),n("span",{class:"token comment"},"/* /bar/four.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"// fallback"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* / */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"contact"'),s(),n("span",{class:"token comment"},"/* /contact.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"about"'),s(),n("span",{class:"token comment"},"/* /about.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=p(`<h2 id="自动生成侧边栏" tabindex="-1"><a class="header-anchor" href="#自动生成侧边栏" aria-hidden="true">#</a> 自动生成侧边栏</h2><h3 id="通过标题自动生成" tabindex="-1"><a class="header-anchor" href="#通过标题自动生成" aria-hidden="true">#</a> 通过标题自动生成</h3><p>如果你希望自动生成一个仅仅包含了当前页面标题(headers)链接的侧边栏，你可以通过 frontmatter 来实现:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">sidebar</span><span class="token punctuation">:</span> heading</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>你也可以通过配置来在所有页面中启用它:</p>`,5),V=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"heading"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),G=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"heading"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")])],-1),N={id:"通过文件结构自动生成",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#通过文件结构自动生成","aria-hidden":"true"},"#",-1),$=p(`<p>你可以在上述任意侧边栏配置中，将原来的“侧边栏数组”替换为 <code>&quot;structure&quot;</code> 关键词。这会让主题自动读取本地文件，为你生成对应的侧边栏结构，以大大减少你的配置工作量。</p><p>比如对于之前在 <a href="#%E5%A4%9A%E4%B8%AA%E4%BE%A7%E8%BE%B9%E6%A0%8F">多个侧边栏</a> 提到的如下例子:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│   ├─ README.md
│   ├─ one.md
│   └─ two.md
└─ bar/
    ├─ README.md
    ├─ three.md
    └─ four.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以将原来的配置改为:</p>`,4),P=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/foo/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token string-property property"},'"/bar/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"// fallback"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* / */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"contact"'),s(),n("span",{class:"token comment"},"/* /contact.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"about"'),s(),n("span",{class:"token comment"},"/* /about.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Z=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/foo/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token string-property property"},'"/bar/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"// fallback"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* / */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"contact"'),s(),n("span",{class:"token comment"},"/* /contact.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"about"'),s(),n("span",{class:"token comment"},"/* /about.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("p",null,[s("在上述的修改中，由于原侧边栏数组即为相关路径下的全部文件，你可以轻松将其替换为 "),n("code",null,'"structure"'),s(" 关键词。")],-1),Y=n("p",null,[s("如果你使用结构生成的文件夹下嵌套了其他文件夹，则对应的文件夹会被渲染成一个分组。所以你甚至可以更加激进，比如直接设置 "),n("code",null,'sidebar: "structure"'),s(" 让你的侧边栏全部从文件结构中自动生成。")],-1),K={class:"hint-container warning"},Q=n("p",{class:"hint-container-title"},"限制",-1),W=n("p",null,[s("由于结构侧边栏取决于文件结构和 Markdown Frontmatter，因此 Markdown 的任何更改都可能更新结构侧边栏。(例如: 如下所述在 Frontmatter 中设置 "),n("code",null,"index: false"),s(")")],-1),X=n("code",null,"hotReload",-1),nn=p(`<h4 id="进阶控制" tabindex="-1"><a class="header-anchor" href="#进阶控制" aria-hidden="true">#</a> 进阶控制</h4><p>在从结构自动生成的过程中，你可以通过页面 Frontmatter 中的 <code>index</code> 选项控制同一文件夹下的文件是否被包含、并通过 <code>order</code> 控制它们的排序方式。</p><p>当你不希望页面被侧边栏收录时，你需要在 Frontmatter 中设置 <code>index: false</code>。</p><p>默认情况下，侧边栏会按照文件名的标题文字按照当前语言排序，你可以通过 <code>order</code> 来控制它们的排序方式，当你设置为正数时，它们会出现在分组最前方，越小的越靠前，当你设置为负数时，会出现在分组最后方，越大的越靠后:</p><ul><li>页面 -&gt; order: 1</li><li>页面 -&gt; order: 2</li><li>页面 -&gt; order: 3</li><li>...</li><li>含有正数 <code>order</code> 的页面在此处会根据 order 大小排序</li><li>...</li><li>不含有 <code>order</code> 选项的页面 -&gt; 标题: Axxx</li><li>...</li><li>不含有 <code>order</code> 选项的页面在此处会根据标题排序</li><li>...</li><li>不含有 <code>order</code> 选项的页面 -&gt; 标题: Zxxx</li><li>...</li><li>含有负数 <code>order</code> 的页面在此处会根据 order 大小排序</li><li>...</li><li>页面 -&gt; order: -3</li><li>页面 -&gt; order: -2</li><li>页面 -&gt; order: -1</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>README.md</code> 是一个例外，只要你不通过 <code>index: false</code> 或使其成为分组链接禁止其出现在侧边栏中，它总会在排序中成为第一项。</p></div><p>对于嵌套文件夹，其分组信息由对应文件夹下的 <code>README.md</code> 控制，你可以通过 Frontmatter 中的 <code>dir</code> 选项控制文件夹分组的行为，相关可选项目如下:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SidebarDirInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 目录标题
   *
   * <span class="token keyword">@default</span> README.md 标题
   */</span>
  text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 目录图标
   *
   * <span class="token keyword">@default</span> README.md 图标
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 目录是否可折叠
   *
   * <span class="token keyword">@default</span> true
   */</span>

  collapsible<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 目录是否可点击
   *
   * <span class="token keyword">@description</span> 将会将目录分组的链接设置为 README.md 对应的链接
   *
   * <span class="token keyword">@default</span> false
   */</span>

  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否索引此目录
   *
   * <span class="token keyword">@default</span> true
   */</span>
  index<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 目录在侧边栏中的顺序
   *
   * <span class="token keyword">@default</span> 0
   */</span>
  order<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),sn={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},an=p(`<h4 id="自定义排序" tabindex="-1"><a class="header-anchor" href="#自定义排序" aria-hidden="true">#</a> 自定义排序</h4><p>除了上面的实现外，我们还在主题选项中添加了更为强大的 <code>sidebarSorter</code> 选项。你可以传入一个或一系列内置排序器名称，也可以传递一个自己需要的排序函数对同级的侧边栏项目进行排序。</p><p>可用的关键字有:</p><ul><li><code>readme</code>: <code>README.md</code> 或 <code>readme.md</code> 在前</li><li><code>order</code>: 正序在前并按其值升序排列，负序在后并按其值降序排列</li><li><code>date</code>: 按日期升序排序</li><li><code>date-desc</code>: 按日期降序排序</li><li><code>title</code>: 按标题字母顺序排序</li><li><code>filename</code>: 按文件名字母顺序排序</li></ul><p>对应上述的进阶控制，它的默认值是 <code>[&quot;readme&quot;, &quot;order&quot;, &quot;title&quot;, &quot;filename&quot;]</code></p><h2 id="禁用侧边栏" tabindex="-1"><a class="header-anchor" href="#禁用侧边栏" aria-hidden="true">#</a> 禁用侧边栏</h2><p>你可以通过 <code>YAML front matter</code> 来禁用指定页面的侧边栏:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">sidebar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div><div class="hint-container note"><p class="hint-container-title">注</p><p>侧边栏在主页中默认禁用。</p></div><h2 id="嵌套的标题链接" tabindex="-1"><a class="header-anchor" href="#嵌套的标题链接" aria-hidden="true">#</a> 嵌套的标题链接</h2><p>默认情况下，侧边栏会自动地显示由当前页面的标题(headers)组成的链接，并按照页面本身的结构进行嵌套，你可以在主题选项中通过 <code>headerDepth</code> 来修改它的行为。默认的深度(也是最大的深度)是 <code>2</code>，它将提取到 <code>h2</code> 和 <code>h3</code> 的标题，设置成 <code>0</code> 将会禁用标题(headers)链接。</p><p>也可以使用 frontmatter 来为某个页面重写此值:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">headerDepth</span><span class="token punctuation">:</span> <span class="token number">2</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div>`,13),tn={class:"hint-container note"},en=n("p",{class:"hint-container-title"},"注",-1),on={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-extractheaders",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-extractheaders",target:"_blank",rel:"noopener noreferrer"},ln=n("code",null,"[2, 3]",-1),pn=n("code",null,"headerDepth",-1),rn=n("code",null,"2",-1),un=n("h2",{id:"活动的标题链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#活动的标题链接","aria-hidden":"true"},"#"),s(" 活动的标题链接")],-1),kn=n("p",null,"默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新。",-1),dn=n("p",null,[s("这个功能是通过插件 "),n("code",null,"@vuepress/plugin-active-header-links"),s(" 实现的，并可以通过以下的配置来禁用:")],-1),mn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 默认值: true"),s(`
      activeHeaderLinks`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),vn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 默认值: true"),s(`
      `),n("span",{class:"token literal-property property"},"activeHeaderLinks"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),bn=n("h2",{id:"图标支持",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图标支持","aria-hidden":"true"},"#"),s(" 图标支持")],-1),gn=n("p",null,[s("侧边栏默认启用图标支持，将在侧边栏的链接前显示页面的图标。你可以在主题选项中将 "),n("code",null,"sidebarIcon"),s(" 设置为 "),n("code",null,"false"),s(" 来禁用它。")],-1),hn=n("h2",{id:"多语言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多语言","aria-hidden":"true"},"#"),s(" 多语言")],-1),yn={href:"https://v2.vuepress.vuejs.org/zh/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},fn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    locales`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* 根目录下的英文配置 */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* 中文目录下的中文配置 */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"locales"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* 根目录下的英文配置 */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* 中文目录下的中文配置 */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_n=p('<h2 id="相关助手与类型" tabindex="-1"><a class="header-anchor" href="#相关助手与类型" aria-hidden="true">#</a> 相关助手与类型</h2><p><code>vuepress-theme-hope</code> 将侧边栏的类型导出为 <code>SideConfig</code>，同时，提供了一个 <code>sidebar</code> Helper 函数。它们可以在 TS 和 JS 中提供侧边栏配置的校验与自动补全。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为了应对当你将 <a href="#%E5%A4%9A%E4%B8%AA%E4%BE%A7%E8%BE%B9%E6%A0%8F">多侧边栏配置</a> 拆分成多个部分的情景，我们还针对性的提供了 <code>SidebarArrayConfig</code> <code>SidebarObjectConfig</code> 类型与 <code>arraySidebar</code> 和 <code>objectSidebar</code> Helper 函数。</p></div>',3),wn=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/sidebar.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* 你的侧边栏配置 */"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," ")])],-1),En=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/navbar.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" SidebarConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" sidebarConfig"),n("span",{class:"token operator"},":"),s(" SidebarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token comment"},"/* 你的侧边栏配置 */"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" sidebarConfig"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br")])],-1),An=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/sidebar.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* 你的侧边栏配置 */"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),jn=n("h2",{id:"例子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#例子","aria-hidden":"true"},"#"),s(" 例子")],-1),zn={class:"hint-container details"},Tn=n("summary",null,"本文档的侧边栏配置",-1),Mn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" zhSidebarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"指南"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"creative"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"guide/"'),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'"get-started/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"interface/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"layout/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"markdown/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"feature/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"blog/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"配置"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"config/"'),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'"intro"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"i18n"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"theme/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"plugins/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"frontmatter/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"教程"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"guide"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"cookbook/"'),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"tutorial/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"markdown/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vuepress/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"迁移"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"change"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"migration/"'),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"highlight"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"page"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"常见问题"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"question"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"faq/"'),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"troubleshooting"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"common-error"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"safari"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"changelog"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"contribution"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/zh/guide/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/zh/config/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/zh/cookbook/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"教程"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"guide"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tutorial/"'),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'"env"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"create"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"command"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"content"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"deploy"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Markdown"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"markdown"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"markdown/"'),n("span",{class:"token punctuation"},","),s(`
      collapsible`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Emoji"'),n("span",{class:"token punctuation"},","),s(`
          icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"emoji"'),n("span",{class:"token punctuation"},","),s(`
          link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"emoji/"'),n("span",{class:"token punctuation"},","),s(`
          prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"emoji/"'),n("span",{class:"token punctuation"},","),s(`
          collapsible`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"VuePress"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vuepress/"'),n("span",{class:"token punctuation"},","),s(`
      collapsible`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"file"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"markdown"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"plugin"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"theme"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"高级"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"advance"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},","),s(`
      collapsible`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"component"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"replace"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"extend"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Sn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" zhSidebarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"指南"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"creative"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"guide/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'"get-started/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"interface/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"layout/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"markdown/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"feature/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"blog/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"配置"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"config/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'"intro"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"i18n"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"theme/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"plugins/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"frontmatter/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"教程"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"guide"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"cookbook/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"tutorial/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"markdown/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vuepress/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"迁移"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"change"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"migration/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"highlight"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"page"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"常见问题"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"question"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"faq/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"troubleshooting"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"common-error"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"safari"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"changelog"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"contribution"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/zh/guide/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/zh/config/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/zh/cookbook/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"教程"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"guide"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tutorial/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'"env"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"create"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"command"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"content"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"deploy"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Markdown"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"markdown"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"markdown/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"collapsible"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Emoji"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"emoji"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"emoji/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"emoji/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"collapsible"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"VuePress"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vuepress/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"collapsible"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"file"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"markdown"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"plugin"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"theme"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"高级"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"advance"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"collapsible"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"component"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"replace"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"extend"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function Cn(Dn,Rn){const l=r("CodeTabs"),u=r("Badge"),k=r("RouterLink"),i=r("ExternalLinkIcon");return m(),v("div",null,[h,b(" more "),y,f,x,_,c(l,{id:"16",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[w]),tab1:a(({title:t,value:e,isActive:o})=>[E]),_:1}),A,c(l,{id:"60",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[j]),tab1:a(({title:t,value:e,isActive:o})=>[z]),_:1}),T,c(l,{id:"102",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[M]),tab1:a(({title:t,value:e,isActive:o})=>[S]),_:1}),C,c(l,{id:"113",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[D]),tab1:a(({title:t,value:e,isActive:o})=>[R]),_:1}),q,c(l,{id:"131",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[U]),tab1:a(({title:t,value:e,isActive:o})=>[B]),_:1}),J,c(l,{id:"152",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[F]),tab1:a(({title:t,value:e,isActive:o})=>[H]),_:1}),L,c(l,{id:"173",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[V]),tab1:a(({title:t,value:e,isActive:o})=>[G]),_:1}),n("h3",N,[I,s(" 通过文件结构自动生成 "),c(u,{text:"新增",type:"tip"})]),$,c(l,{id:"194",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[P]),tab1:a(({title:t,value:e,isActive:o})=>[Z]),_:1}),O,Y,n("div",K,[Q,W,n("p",null,[s("但是，对于大型网站，重新计算侧边栏是一个高耗时操作，因此主题只会在 "),c(k,{to:"/zh/config/theme/basic.html#hotreload"},{default:a(()=>[X,s(" 启用")]),_:1}),s(" 的情况下实时更新结构化侧边栏。")])]),nn,n("p",null,[s("如果对应文件夹不存在 "),n("a",sn,[s("README.md"),c(i)]),s(" 文件，则只有分组标题会从文件夹名称中生成。")]),an,n("div",tn,[en,n("p",null,[s("有效最大值取决于你通过 "),n("a",on,[s("markdown.extractHeaders.level"),c(i)]),s(" 提取了哪些级别的标题。")]),n("p",null,[s("由于 "),n("a",cn,[s("markdown.extractHeaders.level"),c(i)]),s(" 的默认值是 "),ln,s(" ，因此 "),pn,s(" 的默认最大值是 "),rn,s(" 。")])]),un,kn,dn,c(l,{id:"410",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[mn]),tab1:a(({title:t,value:e,isActive:o})=>[vn]),_:1}),bn,gn,hn,n("p",null,[s("主题的侧边栏支持 "),n("a",yn,[s("多语言"),c(i)]),s("，所以你可以为每个语言单独设置侧边栏:")]),c(l,{id:"430",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[fn]),tab1:a(({title:t,value:e,isActive:o})=>[xn]),_:1}),_n,c(l,{id:"449",data:[{title:"TS Helper"},{title:"TS 类型"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[wn]),tab1:a(({title:t,value:e,isActive:o})=>[En]),tab2:a(({title:t,value:e,isActive:o})=>[An]),_:1}),jn,n("details",zn,[Tn,c(l,{id:"464",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[Mn]),tab1:a(({title:t,value:e,isActive:o})=>[Sn]),_:1})])])}const Un=d(g,[["render",Cn],["__file","sidebar.html.vue"]]);export{Un as default};
