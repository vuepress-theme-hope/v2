import{a3 as d,Z as m,_ as b,a4 as v,$ as l,a0 as a,a1 as n,a2 as s,a5 as i,q as r}from"./framework-f408d5b9.js";const g={},h=n("p",null,"The sidebar may contain a list of related documents, document titles, and blogger information in blog mode.",-1),y=n("h2",{id:"sidebar-links",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sidebar-links","aria-hidden":"true"},"#"),s(" Sidebar Links")],-1),f=n("p",null,[s("You should use "),n("code",null,"sidebar"),s(" in theme options to control sidebar.")],-1),w=n("h3",{id:"string-format",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#string-format","aria-hidden":"true"},"#"),s(" String Format")],-1),x=n("p",null,"Just like navbar, you can fill in an array of multiple file links as the basic configuration of the sidebar:",-1),_=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"guide/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config/README.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),T=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"guide/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config/README.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),A=i('<p>Each item of the array will be rendered as a sidebar item.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>You can omit the <code>.md</code> extension, and paths ending with <code>/</code> are inferred as <code>/README.md</code>.</p></div><h3 id="object-format" tabindex="-1"><a class="header-anchor" href="#object-format" aria-hidden="true">#</a> Object Format</h3><p>Just like navbar, if you are not satisfied with the page’s icon or feel that the page title is too long, you can configure an object instead. Available configuration items are:</p><ul><li><code>text:</code>: item text</li><li><code>link</code>: item link</li><li><code>icon</code>: item icon (optional)</li><li><code>activeMatch</code>: item active math (optional), support regexp strings</li></ul>',5),E=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Guide"'),n("span",{class:"token punctuation"},","),s(`
        link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/guide/README.md"'),n("span",{class:"token punctuation"},","),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"creative"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// only active in `/guide/`"),s(`
        activeMatch`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^/guide/$"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Config"'),n("span",{class:"token punctuation"},","),s(" link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/config/README.md"'),n("span",{class:"token punctuation"},","),s(" icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"config"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FAQ"'),n("span",{class:"token punctuation"},","),s(`
        link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/faq.md"'),n("span",{class:"token punctuation"},","),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"question"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// active in path starting with `/faq`"),s(`
        `),n("span",{class:"token comment"},"// so it will active in path like `/faq/xxx.html`"),s(`
        activeMatch`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^/zh/faq/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Guide"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/guide/README.md"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"creative"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// only active in `/guide/`"),s(`
        `),n("span",{class:"token literal-property property"},"activeMatch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^/guide/$"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Config"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/config/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"config"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FAQ"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/faq.md"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"question"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// active in path starting with `/faq`"),s(`
        `),n("span",{class:"token comment"},"// so it will active in path like `/faq/xxx.html`"),s(`
        `),n("span",{class:"token literal-property property"},"activeMatch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^/zh/faq/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=i('<div class="hint-container tip"><p class="hint-container-title">Advanced usage of activeMatch</p><p><code>activeMatch</code> gives you the ability to control whether the path is active, for example you may have the following dropdown:</p><ul><li><code>/path/</code></li><li><code>/path/a/</code></li><li><code>/path/b/</code></li></ul><p>But you may have multiple folders with files under <code>/path/</code>. To avoid multiple dropdown items been activated under route starting with <code>/path/a/</code> or <code>/path/b/</code>, you can set <code>activeMatch</code> option for the first item with <code>^/path/(?:(?!a/|b/).*)?$</code>.</p></div><h3 id="grouping-and-nesting" tabindex="-1"><a class="header-anchor" href="#grouping-and-nesting" aria-hidden="true">#</a> Grouping and Nesting</h3><p>If you need a sidebar that displays a nested structure, you can group similar links.</p><p>You should use <a href="#object-format">object format</a> and provide an additional <code>children</code> option to set the list of links. Like navbar, you can use <code>prefix</code> in the sidebar to add a default path prefix to each link in the group, and the sidebar additionally supports setting <code>collapsible: true</code> to make the menu group collapsible.</p>',4),C=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// required, title of group"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Group 1"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, icon of group"),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tip"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, link of group title"),s(`
        path`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, will be appended to each item link"),s(`
        prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, defaults to false"),s(`
        collapsible`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// required, items of group"),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"README.md"'),s(),n("span",{class:"token comment"},"/* /foo/index.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"/* ... */"),s(`
          `),n("span",{class:"token string"},'"geo.md"'),s(),n("span",{class:"token comment"},"/* /foo/geo.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Group 2"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* ... */"),s(`
          `),n("span",{class:"token string"},'"bar.md"'),s(),n("span",{class:"token comment"},"/* /ray/bar.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"baz.md"'),s(),n("span",{class:"token comment"},"/* /ray/baz.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// required, title of group"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Group 1"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, icon of group"),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tip"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, link of group title"),s(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, will be appended to each item link"),s(`
        `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, defaults to false"),s(`
        `),n("span",{class:"token literal-property property"},"collapsible"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// required, items of group"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"README.md"'),s(),n("span",{class:"token comment"},"/* /foo/index.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"/* ... */"),s(`
          `),n("span",{class:"token string"},'"geo.md"'),s(),n("span",{class:"token comment"},"/* /foo/geo.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Group 2"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* ... */"),s(`
          `),n("span",{class:"token string"},'"bar.md"'),s(),n("span",{class:"token comment"},"/* /ray/bar.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"baz.md"'),s(),n("span",{class:"token comment"},"/* /ray/baz.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("p",null,"You can also nest Sidebar grouping:",-1),q=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"quz"'),s(),n("span",{class:"token comment"},"/* /quz.html */"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"xyzzy"'),s(),n("span",{class:"token comment"},"/* /xyzzy.html */"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sub Group 2"'),n("span",{class:"token punctuation"},","),s(`
            prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"corge/"'),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token string"},'"fred"'),s(),n("span",{class:"token comment"},"/* /corge/fred.html */"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token string"},'"grault"'),s(),n("span",{class:"token comment"},"/* /corge/grault.html */"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"foo"'),s(),n("span",{class:"token comment"},"/* /foo.html */"),n("span",{class:"token punctuation"},","),s(`
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
          `),n("span",{class:"token string"},'"baz"'),s(),n("span",{class:"token comment"},"/* /baz.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sub Group 1"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"quz"'),s(),n("span",{class:"token comment"},"/* /quz.html */"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"xyzzy"'),s(),n("span",{class:"token comment"},"/* /xyzzy.html */"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sub Group 2"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"corge/"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token string"},'"fred"'),s(),n("span",{class:"token comment"},"/* /corge/fred.html */"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token string"},'"grault"'),s(),n("span",{class:"token comment"},"/* /corge/grault.html */"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"foo"'),s(),n("span",{class:"token comment"},"/* /foo.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=i(`<p>You may want to use it with <code>prefix</code> to restore the structure of the document easily.</p><p>For example, suppose you have a following directory structure:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you can use the following config:</p>`,4),U=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=i(`<h3 id="multiple-sidebars" tabindex="-1"><a class="header-anchor" href="#multiple-sidebars" aria-hidden="true">#</a> Multiple Sidebars</h3><p>To display different sidebars for different page groups, set an object for the sidebar in the format of <code>path: config</code>.</p><p>For example, if you have the following structure:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can define your sidebar for each section using below configuration:</p>`,5),F=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=i(`<div class="hint-container warning"><p class="hint-container-title">Note</p><p>You need to pay special attention to the order of object key declaration. Generally speaking, you should put the more precise path first, because VuePress will traverse the key names of the sidebar configuration to find the matching configuration. Once a key name is successfully matched with the current path, it will display the corresponding sidebar configuration.</p><p>In this case, the fallback sidebar must be defined last for this reason.</p></div><h2 id="auto-sidebar" tabindex="-1"><a class="header-anchor" href="#auto-sidebar" aria-hidden="true">#</a> Auto Sidebar</h2><h3 id="generate-from-headers" tabindex="-1"><a class="header-anchor" href="#generate-from-headers" aria-hidden="true">#</a> Generate from Headers</h3><p>To automatically generate a sidebar that contains only the header links for the current page, you can use frontmatter on that page:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">sidebar</span><span class="token punctuation">:</span> heading</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>You can also enable it in all pages by using config:</p>`,6),L=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"heading"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")])],-1),H=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"heading"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")])],-1),B={id:"generate-from-file-structure",tabindex:"-1"},N=n("a",{class:"header-anchor",href:"#generate-from-file-structure","aria-hidden":"true"},"#",-1),V=i(`<p>You can replace the original &quot;sidebarConfig array&quot; with <code>&quot;structure&quot;</code> keyword in any of the above sidebar config. This will allow the theme to automatically read local files, then generate sidebar from file structure for you, to reduce your config workload.</p><p>For example, for the following example mentioned earlier in <a href="#multiple-sidebars">multiple sidebars</a>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can change the original config to:</p>`,4),W=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$=n("p",null,[s("In the above modification, since the original sidebar array is all files under the relevant path, you can easily replace it with the "),n("code",null,'"structure"'),s(" keyword.")],-1),O=n("p",null,[s("If you use the structure to generate a folder with other folders nested under it, the corresponding folder will be rendered as a group. So you can even be more aggressive, for example setting "),n("code",null,'sidebar: "structure"'),s(" to have your sidebars all auto-generated from the file structure.")],-1),P={class:"hint-container warning"},Z=n("p",{class:"hint-container-title"},"Limitations",-1),K=n("p",null,[s("Since structure sidebar is depending on file structure and markdown frontmatter, any changes in markdown may update the structure sidebar. (E.g: setting "),n("code",null,"index: false"),s(" in frontmatter as described below)")],-1),X=n("code",null,"hotReload",-1),nn=i(`<h4 id="advanced-control" tabindex="-1"><a class="header-anchor" href="#advanced-control" aria-hidden="true">#</a> Advanced Control</h4><p>During the automatic generation from structure, you can control whether files in the same folder are included through the <code>index</code> option in the page Frontmatter, and control how they are sorted through <code>order</code>.</p><p>When you don’t want the page to be included in the sidebar, you need to set <code>index: false</code> in Frontmatter.</p><p>By default, the sidebar will be sorted according to the current language according to the title text of the file name. You can control how they are sorted by <code>order</code>. When you set a positive number, they will appear at the front of the group, the smaller the more forward, when you set a negative number, it will appear at the back of the group, and the larger the more backward:</p><ul><li>page -&gt; order: 1</li><li>page -&gt; order: 2</li><li>page -&gt; order: 3</li><li>...</li><li>pages with positive <code>order</code> will be sorted by <code>order</code> here</li><li>...</li><li>page without <code>order</code> option -&gt; title: Axxx</li><li>...</li><li>pages without <code>order</code> option will be sorted by title here</li><li>...</li><li>page without <code>order</code> option -&gt; title: Zxxx</li><li>...</li><li>pages with negative <code>order</code> will be sorted by <code>order</code> here</li><li>...</li><li>page -&gt; order: -3</li><li>page -&gt; order: -2</li><li>page -&gt; order: -1</li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p><code>README.md</code> is an exception, as long as you don’t disable it from the sidebar via <code>index: false</code> or make it as group link, it will always be the first item after sorting.</p></div><p>For nested folders, the grouping information is controlled by <code>README.md</code> under that folder. You can control the behavior of folder grouping through the <code>dir</code> option in Frontmatter. The relevant optional items are as follows:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SidebarDirInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Directory title
   *
   * <span class="token keyword">@default</span> README.md title
   */</span>
  text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Directory icon
   *
   * <span class="token keyword">@default</span> README.md icon
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether the directory is collapsible
   *
   * <span class="token keyword">@default</span> true
   */</span>

  collapsible<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether the directory is clickable
   *
   * <span class="token keyword">@description</span> will set the link of the directory grouping to the link corresponding to README.md
   *
   * <span class="token keyword">@default</span> false
   */</span>

  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Whether index current dir
   *
   * <span class="token keyword">@default</span> true
   */</span>
  index<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Dir order in sidebar
   *
   * <span class="token keyword">@default</span> 0
   */</span>
  order<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),sn={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},an=i(`<h4 id="customize-sorter" tabindex="-1"><a class="header-anchor" href="#customize-sorter" aria-hidden="true">#</a> Customize Sorter</h4><p>In addition to the above implementation, we also added a more powerful <code>sidebarSorter</code> option to the theme options. You can pass one or a series of built-in sorter names, or you can pass a sorter function you need to sort sidebar items at the same level.</p><p>Available keywords are:</p><ul><li><code>readme</code>: <code>README.md</code> or <code>readme.md</code> first</li><li><code>order</code>: positive order first with its value ascendingly, negative order last with its value descendingly</li><li><code>date</code>: sort by date ascendingly</li><li><code>date-desc</code>: sort by date descendingly</li><li><code>title</code>: alphabetically sort by title</li><li><code>filename</code>: alphabetically sort by filename</li></ul><p>Corresponding to the above advanced control, its default value is <code>[&quot;readme&quot;, &quot;order&quot;, &quot;title&quot;, &quot;filename&quot;]</code></p><h3 id="disabling-sidebar" tabindex="-1"><a class="header-anchor" href="#disabling-sidebar" aria-hidden="true">#</a> Disabling Sidebar</h3><p>You can disable the sidebar on a specific page with <code>YAML front matter</code>:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">sidebar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>Sidebar is disabled by default in home page.</p></div><h2 id="header-links-depths" tabindex="-1"><a class="header-anchor" href="#header-links-depths" aria-hidden="true">#</a> Header Links Depths</h2><p>The sidebar automatically displays links for headers in the current active page, nested under the link for the page itself. You can customize this behavior using <code>headerDepth</code> in theme options. The default depth(the max value) is <code>2</code>, which extracts both <code>h2</code> and <code>h3</code> headers. Setting it to <code>0</code> disables the header links.</p><p>A page can also override this value via frontmatter:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">headerDepth</span><span class="token punctuation">:</span> <span class="token number">2</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div>`,13),en={class:"hint-container note"},tn=n("p",{class:"hint-container-title"},"Note",-1),on={href:"https://v2.vuepress.vuejs.org/reference/config.html#markdown-extractheaders",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://v2.vuepress.vuejs.org/reference/config.html#markdown-extractheaders",target:"_blank",rel:"noopener noreferrer"},cn=n("code",null,"[2, 3]",-1),pn=n("code",null,"headerDepth",-1),rn=n("code",null,"2",-1),un=n("h3",{id:"active-header-links",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#active-header-links","aria-hidden":"true"},"#"),s(" Active Header Links")],-1),kn=n("p",null,"By default, the nested header links and the hash in the URL are updated as the user scrolls to view the different sections of the page. This behavior can be disabled with the following theme config:",-1),dn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// Default: true"),s(`
      activeHeaderLinks`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),mn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// Default: true"),s(`
      `),n("span",{class:"token literal-property property"},"activeHeaderLinks"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),bn=n("h2",{id:"icon-support",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#icon-support","aria-hidden":"true"},"#"),s(" Icon Support")],-1),vn=n("p",null,[s("Icon support is enabled in the sidebar by default, and the icon of the page will be displayed before the link in the sidebar (by reading "),n("code",null,"icon"),s(" field in frontmatter). It can be disabled by setting "),n("code",null,"sidebarIcon"),s(" to "),n("code",null,"false"),s(" in theme options.")],-1),gn=n("h2",{id:"i18n-support",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#i18n-support","aria-hidden":"true"},"#"),s(" I18n Support")],-1),hn={href:"https://v2.vuepress.vuejs.org/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},yn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    locales`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* English config under root */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* Chinese config under zh folder */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"locales"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* English config under root */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* Chinese config under zh folder */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),wn=i('<h2 id="types-and-helpers" tabindex="-1"><a class="header-anchor" href="#types-and-helpers" aria-hidden="true">#</a> Types and Helpers</h2><p><code>vuepress-theme-hope</code> exports the type of sidebar as <code>SideConfig</code>, and provides a <code>sidebar</code> helper function. They can provide validation and autocompletion of sidebar configuration in TS and JS.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>To deal with the situation when you split <a href="#multiple-sidebars">multi-sidebar configuration</a> into multiple parts, we also provide <code>SidebarArrayConfig</code> <code>SidebarObjectConfig</code> type and <code>arraySidebar</code> and <code>objectSidebar</code> Helper function.</p></div>',3),xn=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/sidebar.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* Your sidebar configuration */"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br")])],-1),_n=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/navbar.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" SidebarConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" sidebarConfig"),n("span",{class:"token operator"},":"),s(" SidebarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token comment"},"/* Your sidebar configuration */"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" sidebarConfig"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br")])],-1),Tn=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/sidebar.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* Your sidebar configuration */"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),An=n("h2",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),s(" Demo")],-1),En={class:"hint-container details"},jn=n("summary",null,"Configuration of this documentation",-1),Sn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" enSidebarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Guide"'),n("span",{class:"token punctuation"},","),s(`
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
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Config"'),n("span",{class:"token punctuation"},","),s(`
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
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Cookbook"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"guide"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"cookbook/"'),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"tutorial/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"markdown/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vuepress/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Migration"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"change"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"migration/"'),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"highlight"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"page"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FAQ"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"question"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"faq/"'),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"troubleshooting"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"common-error"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"safari"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"changelog"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"contribution"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/guide/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/config/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/cookbook/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Tutorial"'),n("span",{class:"token punctuation"},","),s(`
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
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"page"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"markdown"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"file"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"plugin"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"theme"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Advanced"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"advance"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},","),s(`
      collapsible`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"component"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"replace"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"extend"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Cn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" enSidebarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Guide"'),n("span",{class:"token punctuation"},","),s(`
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
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Config"'),n("span",{class:"token punctuation"},","),s(`
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
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Cookbook"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"guide"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"cookbook/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"tutorial/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"markdown/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vuepress/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Migration"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"change"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"migration/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"highlight"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"page"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FAQ"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"question"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"faq/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"troubleshooting"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"common-error"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"safari"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"changelog"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"contribution"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/guide/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/config/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/cookbook/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Tutorial"'),n("span",{class:"token punctuation"},","),s(`
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
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"page"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"markdown"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"file"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"plugin"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"theme"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Advanced"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"advance"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"collapsible"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"component"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"replace"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"extend"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function Mn(Dn,qn){const c=r("CodeTabs"),u=r("Badge"),k=r("RouterLink"),p=r("ExternalLinkIcon");return m(),b("div",null,[h,v(" more "),y,f,w,x,l(c,{id:"16",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[_]),tab1:a(({title:e,value:t,isActive:o})=>[T]),_:1}),A,l(c,{id:"60",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[E]),tab1:a(({title:e,value:t,isActive:o})=>[j]),_:1}),S,l(c,{id:"102",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[C]),tab1:a(({title:e,value:t,isActive:o})=>[M]),_:1}),D,l(c,{id:"113",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[q]),tab1:a(({title:e,value:t,isActive:o})=>[R]),_:1}),z,l(c,{id:"131",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[U]),tab1:a(({title:e,value:t,isActive:o})=>[Y]),_:1}),G,l(c,{id:"152",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[F]),tab1:a(({title:e,value:t,isActive:o})=>[I]),_:1}),J,l(c,{id:"181",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[L]),tab1:a(({title:e,value:t,isActive:o})=>[H]),_:1}),n("h3",B,[N,s(" Generate from File Structure "),l(u,{text:"New",type:"tip"})]),V,l(c,{id:"202",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[W]),tab1:a(({title:e,value:t,isActive:o})=>[Q]),_:1}),$,O,n("div",P,[Z,K,n("p",null,[s("However, recalculating the sidebar could be expensive for large sites, so the theme will only recalculate with "),l(k,{to:"/config/theme/basic.html#hotreload"},{default:a(()=>[X,s(" enabled")]),_:1}),s(".")])]),nn,n("p",null,[s("If no "),n("a",sn,[s("README.md"),l(p)]),s(" file exists for the corresponding folder, only the group header will be generated from the folder name.")]),an,n("div",en,[tn,n("p",null,[s("The valid maximum value depends on which levels of headers you have extracted via "),n("a",on,[s("markdown.extractHeaders.level"),l(p)]),s(".")]),n("p",null,[s("Since the default value of "),n("a",ln,[s("markdown.extractHeaders.level"),l(p)]),s(" is "),cn,s(", so The default maximum value for "),pn,s(" is "),rn,s(".")])]),un,kn,l(c,{id:"415",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[dn]),tab1:a(({title:e,value:t,isActive:o})=>[mn]),_:1}),bn,vn,gn,n("p",null,[s("The theme’s navbar supports "),n("a",hn,[s("I18n"),l(p)]),s(", so you can set sidebar individually in each language:")]),l(c,{id:"435",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[yn]),tab1:a(({title:e,value:t,isActive:o})=>[fn]),_:1}),wn,l(c,{id:"454",data:[{title:"TS Helper"},{title:"TS Types"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[xn]),tab1:a(({title:e,value:t,isActive:o})=>[_n]),tab2:a(({title:e,value:t,isActive:o})=>[Tn]),_:1}),An,n("details",En,[jn,l(c,{id:"469",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:o})=>[Sn]),tab1:a(({title:e,value:t,isActive:o})=>[Cn]),_:1})])])}const zn=d(g,[["render",Mn],["__file","sidebar.html.vue"]]);export{zn as default};
