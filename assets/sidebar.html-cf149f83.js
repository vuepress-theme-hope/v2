import{a3 as d,Z as m,_ as b,a4 as v,$ as c,a0 as a,a1 as n,a2 as s,a5 as p,q as r}from"./framework-f408d5b9.js";const g={},h=n("p",null,"Боковая панель может содержать список связанных документов, заголовков документов и информацию о блоггерах в режиме блога.",-1),y=n("h2",{id:"ссылки-на-боковои-панели",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ссылки-на-боковои-панели","aria-hidden":"true"},"#"),s(" Ссылки на боковой панели")],-1),f=n("p",null,[s("You should use "),n("code",null,"sidebar"),s(" in theme options to control sidebar.")],-1),x=n("h3",{id:"строковыи-формат",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#строковыи-формат","aria-hidden":"true"},"#"),s(" Строковый формат")],-1),w=n("p",null,"Как и в случае с навигационной панелью, вы можете заполнить массив из нескольких ссылок на файлы в качестве базовой конфигурации боковой панели:",-1),_=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"guide/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config/README.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),D=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"guide/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config/README.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),E=p('<p>Каждый элемент массива будет отображаться как элемент боковой панели.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Вы можете опустить расширение <code>.md</code>, а пути, оканчивающиеся на <code>/</code>, подразумеваются как <code>/README.md</code>.</p></div><h3 id="формат-объекта" tabindex="-1"><a class="header-anchor" href="#формат-объекта" aria-hidden="true">#</a> Формат объекта</h3><p>Как и в случае с навигационной панелью, если вас не устраивает значок страницы или вы считаете, что заголовок страницы слишком длинный, вы можете вместо этого настроить объект. Доступные элементы конфигурации:</p><ul><li><code>text:</code>: элемент теста</li><li><code>link</code>: элемент ссылка</li><li><code>icon</code>: элемент иконка (опционально)</li><li><code>activeMatch</code>: элемент активного совпадения(опционально), поддержка строк регулярных выражений</li></ul>',5),A=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=p('<div class="hint-container tip"><p class="hint-container-title">Расширенное использование activeMatch</p><p><code>activeMatch</code> дает вам возможность контролировать, активен ли путь, например, у вас может быть следующее раскрывающееся меню:</p><ul><li><code>/path/</code></li><li><code>/path/a/</code></li><li><code>/path/b/</code></li></ul><p>Но у вас может быть несколько папок с файлами в папке <code>/path/</code>. Чтобы избежать активации нескольких выпадающих элементов в маршруте, начинающемся с <code>/path/a/</code> или <code>/path/b/</code>, вы можете установить опцию <code>activeMatch</code> для первого элемента с <code>^/path/(?:(?!a/|b/).*)?$</code>.</p></div><h3 id="группировка-и-вложение" tabindex="-1"><a class="header-anchor" href="#группировка-и-вложение" aria-hidden="true">#</a> Группировка и вложение</h3><p>Если вам нужна боковая панель, отображающая вложенную структуру, вы можете сгруппировать похожие ссылки.</p><p>Вы должны использовать <a href="#%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0">формат объекта</a> и предоставить дополнительную опцию <code>children</code> для установки списка ссылок. Как и в навигационной панели, вы можете использовать <code>prefix</code> на боковой панели, чтобы добавить префикс пути по умолчанию к каждой ссылке в группе, а боковая панель дополнительно поддерживает установку <code>collapsible: true</code>, чтобы сделать группу меню сворачиваемой.</p>',4),T=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("p",null,"Вы также можете вложить группировку боковой панели:",-1),M=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=p(`<p>Вы можете использовать его с <code>prefix</code>, чтобы легко восстановить структуру документа.</p><p>Например, предположим, что у вас есть следующая структура каталогов:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Затем вы можете использовать следующую конфигурацию:</p>`,4),z=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=p(`<h3 id="несколько-боковых-панелеи" tabindex="-1"><a class="header-anchor" href="#несколько-боковых-панелеи" aria-hidden="true">#</a> Несколько боковых панелей</h3><p>Чтобы отображать разные боковые панели для разных групп страниц, установите объект для боковой панели в формате <code>path: config</code>.</p><p>Например, если у вас есть следующая структура:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Вы можете определить свою боковую панель для каждого раздела, используя следующую конфигурацию:</p>`,5),G=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=p(`<div class="hint-container warning"><p class="hint-container-title">Примечание</p><p>Особое внимание следует уделить порядку объявления ключа объекта. Вообще говоря, вы должны сначала указать более точный путь, потому что VuePress будет проходить ключевые имена конфигурации боковой панели, чтобы найти подходящую конфигурацию. После успешного сопоставления имени ключа с текущим путем будет отображаться соответствующая конфигурация боковой панели.</p><p>В этом случае резервная боковая панель должна быть определена последней по этой причине.</p></div><h2 id="автоматическая-боковая-панель" tabindex="-1"><a class="header-anchor" href="#автоматическая-боковая-панель" aria-hidden="true">#</a> Автоматическая боковая панель</h2><h3 id="генерировать-из-заголовков" tabindex="-1"><a class="header-anchor" href="#генерировать-из-заголовков" aria-hidden="true">#</a> Генерировать из заголовков</h3><p>Чтобы автоматически сгенерировать боковую панель, содержащую только ссылки заголовка для текущей страницы, вы можете использовать передний план на этой странице:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">sidebar</span><span class="token punctuation">:</span> heading</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>Вы также можете включить его на всех страницах с помощью конфигурации:</p>`,6),V=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")])],-1),I={id:"создать-из-фаиловои-структуры",tabindex:"-1"},N=n("a",{class:"header-anchor",href:"#создать-из-фаиловои-структуры","aria-hidden":"true"},"#",-1),Y=p(`<p>Вы можете заменить исходный &quot;sidebarConfig array&quot; ключевым словом <code>&quot;structure&quot;</code> в любой из приведенных выше конфигураций боковой панели. Это позволит теме автоматически читать локальные файлы, а затем создавать для вас боковую панель из файловой структуры, чтобы уменьшить нагрузку на конфигурацию.</p><p>Например, для следующего примера, упомянутого ранее в <a href="#%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%B1%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D1%85-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B5%D0%B9">мульти сайдбары</a>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Вы можете изменить исходную конфигурацию на:</p>`,4),$=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("p",null,[s("В приведенной выше модификации, поскольку исходный массив боковой панели состоит из всех файлов по соответствующему пути, вы можете легко заменить его ключевым словом "),n("code",null,'"structure"'),s(".")],-1),Q=n("p",null,[s("Если вы используете структуру для создания папки с другими папками, вложенными в нее, соответствующая папка будет отображаться как группа. Таким образом, вы можете быть даже более агрессивным, например, установив "),n("code",null,'sidebar: "structure"'),s(", чтобы все ваши боковые панели автоматически генерировались из файловой структуры.")],-1),Z={class:"hint-container warning"},O=n("p",{class:"hint-container-title"},"Limitations",-1),K=n("p",null,[s("Since structure sidebar is depending on file structure and markdown frontmatter, any changes in markdown may update the structure sidebar. (E.g: setting "),n("code",null,"index: false"),s(" in frontmatter as described below)")],-1),X=n("code",null,"hotReload",-1),nn=p(`<h4 id="расширенныи-контроль" tabindex="-1"><a class="header-anchor" href="#расширенныи-контроль" aria-hidden="true">#</a> Расширенный контроль</h4><p>Во время автоматического создания из структуры вы можете контролировать, включаются ли файлы в одной и той же папке с помощью параметра <code>index</code> на странице Frontmatter, а также управлять их сортировкой с помощью <code>order</code>.</p><p>Если вы не хотите, чтобы страница отображалась на боковой панели, вам нужно установить <code>index: false</code> во Frontmatter.</p><p>По умолчанию боковая панель будет отсортирована в соответствии с текущим языком в соответствии с текстом заголовка имени файла. Вы можете контролировать, как они сортируются по <code>order</code>. Когда вы устанавливаете положительное число, они появляются впереди группы, чем меньше, тем дальше вперед, когда вы устанавливаете отрицательное число, они появляются позади группы, и чем больше, тем дальше:</p><ul><li>page -&gt; order: 1</li><li>page -&gt; order: 2</li><li>page -&gt; order: 3</li><li>...</li><li>pages with positive <code>order</code> will be sorted by <code>order</code> here</li><li>...</li><li>page without <code>order</code> option -&gt; title: Axxx</li><li>...</li><li>pages without <code>order</code> option will be sorted by title here</li><li>...</li><li>page without <code>order</code> option -&gt; title: Zxxx</li><li>...</li><li>pages with negative <code>order</code> will be sorted by <code>order</code> here</li><li>...</li><li>page -&gt; order: -3</li><li>page -&gt; order: -2</li><li>page -&gt; order: -1</li></ul><div class="hint-container tip"><p class="hint-container-title">Совет</p><p><code>README.md</code> является исключением, если вы не отключите его с боковой панели с помощью <code>index: false</code> или не сделаете его групповой ссылкой, он всегда будет первым элементом после сортировки.</p></div><p>Для вложенных папок информация о группировке контролируется файлом <code>README.md</code> в этой папке. Вы можете контролировать поведение группировки папок с помощью параметра <code>dir</code> в Frontmatter. Соответствующие необязательные элементы следующие:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SidebarDirInfo</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),sn={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},an=p(`<h4 id="кастомизация-сортировщика" tabindex="-1"><a class="header-anchor" href="#кастомизация-сортировщика" aria-hidden="true">#</a> Кастомизация сортировщика</h4><p>В дополнение к приведенной выше реализации мы также добавили более мощную опцию <code>sidebarSorter</code> в параметры темы. Вы можете передать одно или несколько имен встроенных сортировщиков или передать функцию сортировщика, необходимую для сортировки элементов боковой панели на одном уровне.</p><p>Доступные ключевые слова:</p><ul><li><code>readme</code>: сначала <code>README.md</code> или <code>readme.md</code></li><li><code>order</code>: положительный порядок сначала с его значением по возрастанию, отрицательный порядок последним с его значением по убыванию</li><li><code>date</code>: сортировать по дате по возрастанию</li><li><code>date-desc</code>: сортировать по дате по убыванию</li><li><code>title</code>: в алфавитном порядке по названию</li><li><code>filename</code>: сортировка в алфавитном порядке по имени файла</li></ul><p>В соответствии с приведенным выше расширенным элементом управления, его значение по умолчанию равно <code>[&quot;readme&quot;, &quot;order&quot;, &quot;title&quot;, &quot;filename&quot;]</code></p><h3 id="отключение-боковои-панели" tabindex="-1"><a class="header-anchor" href="#отключение-боковои-панели" aria-hidden="true">#</a> Отключение боковой панели</h3><p>Вы можете отключить боковую панель на определенной странице с помощью <code>YAML front matter</code>:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">sidebar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div><div class="hint-container note"><p class="hint-container-title">Заметка</p><p>Боковая панель по умолчанию отключена на главной странице.</p></div><h2 id="глубина-ссылок-заголовков" tabindex="-1"><a class="header-anchor" href="#глубина-ссылок-заголовков" aria-hidden="true">#</a> Глубина ссылок заголовков</h2><p>Боковая панель автоматически отображает ссылки на заголовки на текущей активной странице, вложенные под ссылку на саму страницу. Вы можете настроить это поведение, используя <code>headerDepth</code> в настройках темы. Глубина по умолчанию (максимальное значение) равна <code>2</code>, при этом извлекаются заголовки <code>h2</code> и <code>h3</code>. Установка его на <code>0</code> отключает ссылки заголовков.</p><p>Страница также может переопределить это значение через frontmatter:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">headerDepth</span><span class="token punctuation">:</span> <span class="token number">2</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div>`,13),tn={class:"hint-container note"},en=n("p",{class:"hint-container-title"},"Заметка",-1),on={href:"https://v2.vuepress.vuejs.org/reference/config.html#markdown-extractheaders",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://v2.vuepress.vuejs.org/reference/config.html#markdown-extractheaders",target:"_blank",rel:"noopener noreferrer"},ln=n("code",null,"[2, 3]",-1),pn=n("code",null,"headerDepth",-1),rn=n("code",null,"2",-1),un=n("h3",{id:"активные-ссылки-в-заголовке",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#активные-ссылки-в-заголовке","aria-hidden":"true"},"#"),s(" Активные ссылки в заголовке")],-1),kn=n("p",null,"По умолчанию вложенные ссылки заголовков и хэш в URL-адресе обновляются по мере того, как пользователь прокручивает страницу для просмотра различных разделов. Это поведение можно отключить с помощью следующей конфигурации темы:",-1),dn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),bn=n("h2",{id:"поддержка-иконок",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#поддержка-иконок","aria-hidden":"true"},"#"),s(" Поддержка иконок")],-1),vn=n("p",null,[s("Поддержка иконок включена на боковой панели по умолчанию, и иконка страницы будет отображаться перед ссылкой на боковой панели (при чтении поля "),n("code",null,"icon"),s(" во вступительной части). Его можно отключить, установив для "),n("code",null,"sidebarIcon"),s(" значение "),n("code",null,"false"),s(" в настройках темы.")],-1),gn=n("h2",{id:"поддержка-i18n",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#поддержка-i18n","aria-hidden":"true"},"#"),s(" Поддержка I18n")],-1),hn={href:"https://v2.vuepress.vuejs.org/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},yn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xn=p('<h2 id="типы-и-помощники" tabindex="-1"><a class="header-anchor" href="#типы-и-помощники" aria-hidden="true">#</a> Типы и Помощники</h2><p><code>vuepress-theme-hope</code> экспортирует тип боковой панели как <code>SideConfig</code> и предоставляет вспомогательную функцию <code>sidebar</code>. Они могут обеспечить проверку и автозаполнение конфигурации боковой панели в TS и JS.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Чтобы справиться с ситуацией, когда вы разделяете <a href="#%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%B1%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D1%85-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B5%D0%B9">конфигурацию с несколькими боковыми панелями</a> на несколько частей, мы также предоставляем тип <code>SidebarArrayConfig</code> и <code>SidebarObjectConfig</code> и вспомогательную функцию <code>arraySidebar</code> и <code>objectSidebar</code>.</p></div>',3),wn=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/sidebar.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* Your sidebar configuration */"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br")])],-1),_n=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/navbar.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" SidebarConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" sidebarConfig"),n("span",{class:"token operator"},":"),s(" SidebarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token comment"},"/* Your sidebar configuration */"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" sidebarConfig"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br")])],-1),Dn=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/sidebar.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* Your sidebar configuration */"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),En=n("h2",{id:"демо",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#демо","aria-hidden":"true"},"#"),s(" Демо")],-1),An={class:"hint-container details"},jn=n("summary",null,"Конфигурация этой документации",-1),Bn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" ruSidebarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},'"/ru/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Руководство"'),n("span",{class:"token punctuation"},","),s(`
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
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Конфиг"'),n("span",{class:"token punctuation"},","),s(`
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
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Учебник с примерами"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"guide"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"cookbook/"'),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"tutorial/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"markdown/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vuepress/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Миграция"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"change"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"migration/"'),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"highlight"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"page"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Часто задаваемые вопросы"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"question"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"faq/"'),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"troubleshooting"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"common-error"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"safari"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"changelog"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"contribution"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/ru/guide/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/ru/config/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/ru/cookbook/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Руководство"'),n("span",{class:"token punctuation"},","),s(`
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
      text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Продвинутый"'),n("span",{class:"token punctuation"},","),s(`
      icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"advance"'),n("span",{class:"token punctuation"},","),s(`
      prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},","),s(`
      collapsible`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"component"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"replace"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"extend"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Tn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" ruSidebarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},'"/ru/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Руководство"'),n("span",{class:"token punctuation"},","),s(`
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
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Конфиг"'),n("span",{class:"token punctuation"},","),s(`
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
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Учебник с примерами"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"guide"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"cookbook/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"tutorial/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"markdown/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vuepress/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Миграция"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"change"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"migration/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"highlight"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"page"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Часто задаваемые вопросы"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"question"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"faq/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"troubleshooting"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"common-error"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"safari"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"changelog"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"contribution"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/ru/guide/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/ru/config/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token string-property property"},'"/ru/cookbook/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Руководство"'),n("span",{class:"token punctuation"},","),s(`
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
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Продвинутый"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"advance"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"advanced/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"collapsible"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"component"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"style"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"replace"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"extend"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function Sn(Cn,Mn){const l=r("CodeTabs"),u=r("Badge"),k=r("RouterLink"),i=r("ExternalLinkIcon");return m(),b("div",null,[h,v(" more "),y,f,x,w,c(l,{id:"16",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[_]),tab1:a(({title:t,value:e,isActive:o})=>[D]),_:1}),E,c(l,{id:"60",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[A]),tab1:a(({title:t,value:e,isActive:o})=>[j]),_:1}),B,c(l,{id:"102",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[T]),tab1:a(({title:t,value:e,isActive:o})=>[S]),_:1}),C,c(l,{id:"113",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[M]),tab1:a(({title:t,value:e,isActive:o})=>[q]),_:1}),R,c(l,{id:"131",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[z]),tab1:a(({title:t,value:e,isActive:o})=>[U]),_:1}),J,c(l,{id:"152",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[G]),tab1:a(({title:t,value:e,isActive:o})=>[F]),_:1}),L,c(l,{id:"181",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[V]),tab1:a(({title:t,value:e,isActive:o})=>[H]),_:1}),n("h3",I,[N,s(" Создать из файловой структуры "),c(u,{text:"New",type:"tip"})]),Y,c(l,{id:"202",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[$]),tab1:a(({title:t,value:e,isActive:o})=>[P]),_:1}),W,Q,n("div",Z,[O,K,n("p",null,[s("However, recalculating the sidebar could be expensive for large sites, so the theme will only recalculate with "),c(k,{to:"/ru/config/theme/basic.html#hotreload"},{default:a(()=>[X,s(" enabled")]),_:1}),s(".")])]),nn,n("p",null,[s("Если для соответствующей папки не существует файла "),n("a",sn,[s("README.md"),c(i)]),s(", из имени папки будет создан только заголовок группы.")]),an,n("div",tn,[en,n("p",null,[s("Допустимое максимальное значение зависит от того, какие уровни заголовков вы извлекли с помощью "),n("a",on,[s("markdown.extractHeaders.level"),c(i)]),s(".")]),n("p",null,[s("Поскольку значение по умолчанию "),n("a",cn,[s("markdown.extractHeaders.level"),c(i)]),s(" равно "),ln,s(", поэтому максимальное значение по умолчанию для "),pn,s(" равно "),rn,s(".")])]),un,kn,c(l,{id:"415",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[dn]),tab1:a(({title:t,value:e,isActive:o})=>[mn]),_:1}),bn,vn,gn,n("p",null,[s("Навигационная панель темы поддерживает "),n("a",hn,[s("I18n"),c(i)]),s(", поэтому вы можете настроить боковую панель отдельно для каждого языка:")]),c(l,{id:"435",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[yn]),tab1:a(({title:t,value:e,isActive:o})=>[fn]),_:1}),xn,c(l,{id:"454",data:[{title:"TS Helper"},{title:"TS Types"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[wn]),tab1:a(({title:t,value:e,isActive:o})=>[_n]),tab2:a(({title:t,value:e,isActive:o})=>[Dn]),_:1}),En,n("details",An,[jn,c(l,{id:"469",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[Bn]),tab1:a(({title:t,value:e,isActive:o})=>[Tn]),_:1})])])}const Rn=d(g,[["render",Sn],["__file","sidebar.html.vue"]]);export{Rn as default};
