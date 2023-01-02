import{a3 as i,Z as l,_ as p,a4 as u,a1 as n,$ as d,a0 as a,a5 as r,q as k,a2 as s}from"./framework-f408d5b9.js";const m="/assets/blogger-info-light-5eb00ff1.png",b="/assets/blogger-info-dark-7bced54d.png",v={},g=n("p",null,"Темы позволяют отображать основную информацию о блогере.",-1),h=r('<p><img src="'+m+'" alt="Информация о блогере" data-mode="lightmode-only" loading="lazy"><img src="'+b+'" alt="Информация о блогере" data-mode="darkmode-only" loading="lazy"></p><h2 id="аватарка-и-имя-блогера" tabindex="-1"><a class="header-anchor" href="#аватарка-и-имя-блогера" aria-hidden="true">#</a> Аватарка и имя блогера</h2><p>Вы можете настроить аватар и имя блоггера, отображаемые через <code>blog.avatar</code> и <code>blog.name</code>.</p><div class="hint-container note"><p class="hint-container-title">Заметка</p><p>Если вы не установите эти параметры, они автоматически вернутся к логотипу сайта (<code>logo</code> в параметрах темы) и названию сайта.</p></div><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Если вы хотите, чтобы аватар был круглой формы, установите <code>blog.roundAvatar: true</code>.</p></div><h2 id="девиз-социальные-сети-и-ссылка-на-профиль" tabindex="-1"><a class="header-anchor" href="#девиз-социальные-сети-и-ссылка-на-профиль" aria-hidden="true">#</a> Девиз, социальные сети и ссылка на профиль</h2><p>Вы можете использовать <code>blog.description</code>, чтобы установить собственное введение, девиз или слоган.</p><p>Вы также можете указать личную ссылку на страницу знакомства через <code>blog.intro</code>, поэтому, когда пользователи нажимают на аватар и имя, они будут напрямую переходить на эту страницу.</p><p>Вы также можете настроить ссылки на социальные сети с помощью опции <code>blog.medias</code>.</p><ul><li><p>Если иконка социальной сети доступен ниже, вы можете напрямую установить <code>MediaName: MediaLink</code>.</p></li><li><p>В противном случае вы должны передать кортеж <code>MediaName: [MediaLink , MediaSvgIconString or MediaSvgIconPath]</code>,</p><p>торой элемент кортежа должен быть допустимой строкой SVG или полным путем к существующему файлу SVG.</p></li></ul><div class="hint-container tip"><p class="hint-container-title">Доступные социальные сети:</p><ul><li><code>&quot;Baidu&quot;</code></li><li><code>&quot;BiliBili&quot;</code></li><li><code>&quot;Bitbucket&quot;</code></li><li><code>&quot;Dingding&quot;</code></li><li><code>&quot;Discord&quot;</code></li><li><code>&quot;Dribbble&quot;</code></li><li><code>&quot;Email&quot;</code></li><li><code>&quot;Evernote&quot;</code></li><li><code>&quot;Facebook&quot;</code></li><li><code>&quot;Flipboard&quot;</code></li><li><code>&quot;Gitee&quot;</code></li><li><code>&quot;GitHub&quot;</code></li><li><code>&quot;Gitlab&quot;</code></li><li><code>&quot;Gmail&quot;</code></li><li><code>&quot;Instagram&quot;</code></li><li><code>&quot;Lark&quot;</code></li><li><code>&quot;Line&quot;</code></li><li><code>&quot;Linkedin&quot;</code></li><li><code>&quot;Pinterest&quot;</code></li><li><code>&quot;Pocket&quot;</code></li><li><code>&quot;QQ&quot;</code></li><li><code>&quot;Qzone&quot;</code></li><li><code>&quot;Reddit&quot;</code></li><li><code>&quot;Rss&quot;</code></li><li><code>&quot;Steam&quot;</code></li><li><code>&quot;Twitter&quot;</code></li><li><code>&quot;Wechat&quot;</code></li><li><code>&quot;Weibo&quot;</code></li><li><code>&quot;Whatsapp&quot;</code></li><li><code>&quot;Youtube&quot;</code></li><li><code>&quot;Zhihu&quot;</code></li></ul></div>',11),q={class:"hint-container details"},y=n("summary",null,"Пример",-1),_=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getDirname"),n("span",{class:"token punctuation"},","),s(" path "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" __dirname "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getDirname"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    blog`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      media`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// GitHub Icon is available"),s(`
        GitHub`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://github.com/Mister-Hope"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},'// A custom Media called "MediaX" (just an example)'),s(`
        MediaX`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// link"),s(`
          `),n("span",{class:"token string"},'"https://mediax.com/UserX/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// icon string"),s(`
          `),n("span",{class:"token string"},'"<svg ....</svg>"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},'// A custom Media called "MediaY" (just an example)'),s(`
        MediaY`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// link"),s(`
          `),n("span",{class:"token string"},'"https://mediay.com/UserY/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// icon path"),s(`
          path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"icons/mediay.svg"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getDirname"),n("span",{class:"token punctuation"},","),s(" path "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" __dirname "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getDirname"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"blog"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"media"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// GitHub Icon is available"),s(`
        `),n("span",{class:"token literal-property property"},"GitHub"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://github.com/Mister-Hope"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},'// A custom Media called "MediaX" (just an example)'),s(`
        `),n("span",{class:"token literal-property property"},"MediaX"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// link"),s(`
          `),n("span",{class:"token string"},'"https://mediax.com/UserX/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// icon string"),s(`
          `),n("span",{class:"token string"},'"<svg ....</svg>"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},'// A custom Media called "MediaY" (just an example)'),s(`
        `),n("span",{class:"token literal-property property"},"MediaY"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// link"),s(`
          `),n("span",{class:"token string"},'"https://mediay.com/UserY/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// icon path"),s(`
          path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"icons/mediay.svg"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(M,x){const e=k("CodeTabs");return l(),p("div",null,[g,u(" more "),h,n("details",q,[y,d(e,{id:"210",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:o,isActive:c})=>[_]),tab1:a(({title:t,value:o,isActive:c})=>[f]),_:1})])])}const S=i(v,[["render",w],["__file","blogger.html.vue"]]);export{S as default};
