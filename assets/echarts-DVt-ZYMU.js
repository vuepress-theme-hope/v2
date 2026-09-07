import{N as e,Y as t,h as n,m as r,p as i,s as a,u as o,z as s}from"./runtime-core.esm-bundler-4CuugG1F.js";import{t as c}from"./app-CEb-Ce1d.js";var l=JSON.parse(`{"path":"/guide/markdown/chart/echarts.html","title":"ECharts","lang":"en-US","frontmatter":{"title":"ECharts","icon":"chart-simple","category":["Markdown"],"tag":["ECharts","Markdown"],"description":"Add echarts support to the Markdown files in your VuePress site.","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ECharts\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-03-02T09:54:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/guide/markdown/chart/echarts.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"ECharts"}],["meta",{"property":"og:description","content":"Add echarts support to the Markdown files in your VuePress site."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-03-02T09:54:17.000Z"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:tag","content":"ECharts"}],["meta",{"property":"article:modified_time","content":"2026-03-02T09:54:17.000Z"}],["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/guide/markdown/chart/echarts.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope.gitee.io/v2/zh/guide/markdown/chart/echarts.html"}],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"git":{"createdTime":1652876522000,"updatedTime":1772445257000,"contributors":[{"name":"FuckDoctors","username":"FuckDoctors","email":"1180450+FuckDoctors@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/FuckDoctors?v=4","url":"https://github.com/FuckDoctors"},{"name":"Mr.Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":29,"avatar":"https://avatars.githubusercontent.com/Mister-Hope?v=4","url":"https://github.com/Mister-Hope"},{"name":"Paper-Dragon","username":"Paper-Dragon","email":"2678885646@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Paper-Dragon?v=4","url":"https://github.com/Paper-Dragon"}],"changelog":[{"hash":"9a4c3cf7a8533d1a0638feef20722b3089322708","time":1772445257000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"build: use oxlint and oxfmt (#5229)"},{"hash":"7d39006fe4c900458a7deba9b4baff7f71a9bf9f","time":1764322493000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat: support new plugins"},{"hash":"660a5c1a6b2152df53a77a259a707b2306e07af0","time":1750241501000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat: support new chart plugin (#4958)"},{"hash":"b72fba40a5f68b288d4cfb2c08f0c819f123897d","time":1748172559000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): improve HMR"},{"hash":"55e920bec840b3f17d7a95a62eab4ade3808a410","time":1744577429000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"b12301e87c66b38b46983e2c3a09a444f0347520","time":1739862488000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): add twoslash"},{"hash":"22787ac127e25c078638b854eec74f2caa44598c","time":1733510882000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat!: replace plugins with official ones and rebuild markdown options (#4553)"},{"hash":"b41c0c8581ffe48b6af526833988b39116a2b70e","time":1711651596000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): update docs"},{"hash":"54c46e02b710e103d2a2ed2ae2e9fc1a6945bc66","time":1706265017000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"49ab97b9bcf78537017058ef50c3eba3476e2a33","time":1700187308000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"55ea333761b5da44d6823bac1686a3cc49648e45","time":1699596334000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: rebuild docs"},{"hash":"f55f28673e44a16ef6588da5ca9181e3ab723789","time":1699415416000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): add setup for echarts (#3588)","coAuthors":[{"name":"Paper-Dragon","email":"2678885646@qq.com"}]},{"hash":"757fd055931b94dd185a76b40d231d5db2cb0e4b","time":1698988697000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"5b1a799bb77b369e9b6dd3b43ae232518da068b2","time":1698934419000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(md-enhance): rebuild demos"},{"hash":"83bffb717edde38b00af51a36297085af02494c8","time":1698186791000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"794f91bc8354676b4310cfec35b6518ca85b9136","time":1688631097000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"chore: update deps"},{"hash":"c341b1aeac3c379895de05876a7065d8481ef398","time":1682663110000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update echarts docs"},{"hash":"99ea82b3faed4a343a214bb2ec1d8927045803f8","time":1682167082000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"perf(md-enhance): stop using eval"},{"hash":"0b24ae03cca9f62e2a9707a1749595d7c5ffe07e","time":1681919437000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): expose <code>myChart</code> for echarts"},{"hash":"22088eff6d915558a6636f0804348115365a1441","time":1676518554000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"chore: update deps"},{"hash":"8174c8d95db9e1263c05f9b9b973706e45116dc4","time":1674031135000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): use fontawesome"},{"hash":"2fa50e8c0b1da5d601e385f92e1ad99289d878aa","time":1661682432000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat: migrate to ESM (#2158)"},{"hash":"3c8d63b5961afe7a8483703fc22ba6d98bab9bd7","time":1654100485000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): update docs"},{"hash":"9856d35d297e9fcaf87a4f8a06ad15beb339444d","time":1653396462000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(theme): rebuild structure sidebar sort"},{"hash":"235159dae1e6ba956ede13009df8f1f2aa4fc8e3","time":1653140346000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update codetab"},{"hash":"48bca69fdb2a5868997fca6ed1d7403ca2ec2241","time":1653133439000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): rebuild code tabs and support tabid"},{"hash":"9cdd7c8a34931ddf25d508f933789edf03839536","time":1653063647000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): change <code>@codetab</code> to <code>@tab</code>"},{"hash":"63d09732b624507bef4b45293e42c0a118fdee08","time":1652975675000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): rebuild codegroup"},{"hash":"7b139bf728538cb0df58485f95f8764a00559699","time":1652880652000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): support js and javascript blocks in chartjs and echarts"},{"hash":"f635dbc248799ae65d758fc4b465ebaad256f75a","time":1652876522000,"email":"1180450+FuckDoctors@users.noreply.github.com","author":"ZhaoBin","message":"feat(md-enhance): add ECharts support (#1840)"}]},"readingTime":{"minutes":1.17,"words":350},"filePathRelative":"guide/markdown/chart/echarts.md","excerpt":"<p>Add <a href=\\"https://echarts.apache.org/en/index.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">echarts</a> support to the Markdown files in your VuePress site.</p>\\n","autoDesc":true}`),u={name:`echarts.md`},d={class:`code-block-with-title`},f={class:`language-ts`,"data-highlighter":`shiki`,"data-ext":`ts`,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},p={class:`shiki shiki-themes one-light one-dark-pro vp-code twoslash lsp`},m={class:`language-ts`},h={class:`line`},g={style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},_={class:`line`},v={style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},y={class:`line`},b={style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},x={class:`line highlighted`},S={style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}};function C(c,l,u,C,w,T){let E=s(`CodeTabs`),D=s(`v-menu`),O=s(`ECharts`),k=s(`VPPreview`);return e(),o(`div`,null,[l[52]||=a(`p`,null,[r(`Add `),a(`a`,{href:`https://echarts.apache.org/en/index.html`,target:`_blank`,rel:`noopener noreferrer`},`echarts`),r(` support to the Markdown files in your VuePress site.`)],-1),l[53]||=a(`h2`,{id:`settings`,tabindex:`-1`},[a(`a`,{class:`header-anchor`,href:`#settings`},[a(`span`,null,`Settings`)])],-1),l[54]||=a(`p`,null,[r(`Install `),a(`a`,{href:`https://echarts.apache.org/en/index.html`,target:`_blank`,rel:`noopener noreferrer`},`echarts`),r(` in your project:`)],-1),n(E,{data:[{id:`pnpm`},{id:`yarn`},{id:`npm`}],"tab-id":`shell`},{title0:t(({value:e,isActive:t})=>[...l[0]||=[r(`pnpm`,-1)]]),title1:t(({value:e,isActive:t})=>[...l[1]||=[r(`yarn`,-1)]]),title2:t(({value:e,isActive:t})=>[...l[2]||=[r(`npm`,-1)]]),tab0:t(({value:e,isActive:t})=>[...l[3]||=[a(`div`,{class:`language-bash`,"data-highlighter":`shiki`,"data-ext":`bash`,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-bash`},[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},`pnpm`),a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` add`),a(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` -D`),a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` echarts`)])])])],-1)]]),tab1:t(({value:e,isActive:t})=>[...l[4]||=[a(`div`,{class:`language-bash`,"data-highlighter":`shiki`,"data-ext":`bash`,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-bash`},[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},`yarn`),a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` add`),a(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` -D`),a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` echarts`)])])])],-1)]]),tab2:t(({value:e,isActive:t})=>[...l[5]||=[a(`div`,{class:`language-bash`,"data-highlighter":`shiki`,"data-ext":`bash`,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-bash`},[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},`npm`),a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` i`),a(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` -D`),a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` echarts`)])])])],-1)]]),_:1}),l[55]||=a(`p`,null,`Then enabling via:`,-1),a(`div`,d,[l[40]||=a(`div`,{class:`code-block-title-bar`,"data-title":`.vuepress/theme.ts`},[a(`span`,null,`.vuepress/theme.ts`)],-1),a(`div`,f,[a(`pre`,p,[a(`code`,m,[a(`span`,h,[l[8]||=a(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`import`,-1),l[9]||=a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},` { `,-1),a(`span`,g,[n(D,{class:`twoslash-hover`,"popper-class":`shiki twoslash-floating vp-copy-ignore vp-code`,theme:`twoslash`},{popper:t(({})=>[...l[6]||=[a(`span`,{class:`twoslash-popup-container vp-copy-ignore`},[a(`code`,{class:`twoslash-popup-code`},[a(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`const`),a(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},` hopeTheme`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},` (`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-light-font-style":`inherit`,"--shiki-dark":`#E06C75`,"--shiki-dark-font-style":`italic`}},`themeOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),a(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeOptions`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`, `),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-light-font-style":`inherit`,"--shiki-dark":`#E06C75`,"--shiki-dark-font-style":`italic`}},`behaviorOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#C678DD`}},`?`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),a(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeBehaviorOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},` |`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#E5C07B`}},` boolean`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`) `),a(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`=>`),a(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeFunction`)]),a(`div`,{class:`twoslash-popup-docs`,"vp-content":``},[a(`p`,null,`VuePress Theme Hope`)]),a(`div`,{class:`twoslash-popup-docs twoslash-popup-docs-tags`,"vp-content":``},[a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@param`),a(`span`,{class:`twoslash-popup-docs-tag-value`},[a(`code`,null,`themeOptions`),r(`  - Theme options`)])]),a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@param`),a(`span`,{class:`twoslash-popup-docs-tag-value`},[a(`code`,null,`behaviorOptions`),r(`  - Theme behavior options`)])]),a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@returns`),a(`span`,{class:`twoslash-popup-docs-tag-value`},`VuePress theme instance`)])])],-1)]]),default:t(()=>[l[7]||=a(`span`,null,`hopeTheme`,-1)]),_:1})]),l[10]||=a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},` } `,-1),l[11]||=a(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`from`,-1),l[12]||=a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` "vuepress-theme-hope"`,-1),l[13]||=a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`;`,-1)]),l[31]||=r(`
`,-1),l[32]||=a(`span`,{class:`line`},null,-1),l[33]||=r(`
`,-1),a(`span`,_,[l[16]||=a(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`export`,-1),l[17]||=a(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#C678DD`}},` default`,-1),l[18]||=a(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},` `,-1),a(`span`,v,[n(D,{class:`twoslash-hover`,"popper-class":`shiki twoslash-floating vp-copy-ignore vp-code`,theme:`twoslash`},{popper:t(({})=>[...l[14]||=[a(`span`,{class:`twoslash-popup-container vp-copy-ignore`},[a(`code`,{class:`twoslash-popup-code`},[a(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`function`),a(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},` hopeTheme`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`(`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-light-font-style":`inherit`,"--shiki-dark":`#E06C75`,"--shiki-dark-font-style":`italic`}},`themeOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),a(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeOptions`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`, `),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-light-font-style":`inherit`,"--shiki-dark":`#E06C75`,"--shiki-dark-font-style":`italic`}},`behaviorOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#C678DD`}},`?`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),a(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeBehaviorOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},` |`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#E5C07B`}},` boolean`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`)`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),a(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeFunction`)]),a(`div`,{class:`twoslash-popup-docs`,"vp-content":``},[a(`p`,null,`VuePress Theme Hope`)]),a(`div`,{class:`twoslash-popup-docs twoslash-popup-docs-tags`,"vp-content":``},[a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@param`),a(`span`,{class:`twoslash-popup-docs-tag-value`},[a(`code`,null,`themeOptions`),r(`  - Theme options`)])]),a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@param`),a(`span`,{class:`twoslash-popup-docs-tag-value`},[a(`code`,null,`behaviorOptions`),r(`  - Theme behavior options`)])]),a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@returns`),a(`span`,{class:`twoslash-popup-docs-tag-value`},`VuePress theme instance`)])])],-1)]]),default:t(()=>[l[15]||=a(`span`,null,`hopeTheme`,-1)]),_:1})]),l[19]||=a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`({`,-1)]),l[34]||=r(`
`,-1),a(`span`,y,[l[22]||=a(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},`  `,-1),a(`span`,b,[n(D,{class:`twoslash-hover`,"popper-class":`shiki twoslash-floating vp-copy-ignore vp-code`,theme:`twoslash`},{popper:t(({})=>[...l[20]||=[a(`span`,{class:`twoslash-popup-container vp-copy-ignore`},[a(`code`,{class:`twoslash-popup-code`},[a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E5C07B`}},`ThemeOptions`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`.`),a(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},`markdown`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#C678DD`}},`?:`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E06C75`}},` ThemeMarkdownOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#56B6C2`}},` |`),a(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` undefined`)]),a(`div`,{class:`twoslash-popup-docs`,"vp-content":``},[a(`p`,null,`Theme markdown options`),r(`
`),a(`p`,null,`主题 Markdown 选项`)])],-1)]]),default:t(()=>[l[21]||=a(`span`,null,`markdown`,-1)]),_:1})]),l[23]||=a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`,-1),l[24]||=a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},` {`,-1)]),l[35]||=r(`
`,-1),a(`span`,x,[l[27]||=a(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},`    `,-1),a(`span`,S,[n(D,{class:`twoslash-hover`,"popper-class":`shiki twoslash-floating vp-copy-ignore vp-code`,theme:`twoslash`},{popper:t(({})=>[...l[25]||=[a(`span`,{class:`twoslash-popup-container vp-copy-ignore`},[a(`code`,{class:`twoslash-popup-code`},[a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E5C07B`}},`MarkdownChartPluginOptions`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`.`),a(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},`echarts`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#C678DD`}},`?:`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E06C75`}},` boolean`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#56B6C2`}},` |`),a(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` undefined`)]),a(`div`,{class:`twoslash-popup-docs`,"vp-content":``},[a(`p`,null,`Whether to enable echarts support`),r(`
`),a(`p`,null,`是否启用 echarts 图表支持`)]),a(`div`,{class:`twoslash-popup-docs twoslash-popup-docs-tags`,"vp-content":``},[a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@default`),a(`span`,{class:`twoslash-popup-docs-tag-value`},`false`)])])],-1)]]),default:t(()=>[l[26]||=a(`span`,null,`echarts`,-1)]),_:1})]),l[28]||=a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`,-1),l[29]||=a(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` true`,-1),l[30]||=a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`,`,-1)]),l[36]||=r(`
`,-1),l[37]||=a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`  },`)],-1),l[38]||=r(`
`,-1),l[39]||=a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`});`)],-1)])])])]),l[56]||=i(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h2><h3 id="with-json" tabindex="-1"><a class="header-anchor" href="#with-json"><span>With JSON</span></a></h3><p>If you can generate your chart data easily, you can just provide echarts config using JSON code block:</p><div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::: echarts Title</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // Your echarts config here.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:::</span></span></code></pre></div><h3 id="with-scripts" tabindex="-1"><a class="header-anchor" href="#with-scripts"><span>With Scripts</span></a></h3><p>You should use <code>json</code> code block to provide your ECharts configuration whenever possible, however for dynamic data generation, you can also use script blocks.</p><p>Both <code>js</code> or <code>javascript</code> code block are supported. We will expose the echarts lib as <code>echarts</code> and the instance as <code>myChart</code> in the script, and you are expected to assign the echarts option object to <code>option</code> variable. Also, you can assign <code>width</code> and <code>height</code> variable to set the chart size.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>For security reasons, you need to manually allow script blocks in certain files. Set <code>markdown.DANGEROUS_ALLOW_SCRIPT_EXECUTION: true</code> and <code>markdown.DANGEROUS_SCRIPT_EXECUTION_ALLOWLIST: [&#39;your/file/path.md&#39;]</code> in theme options.</p></div><div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::: echarts Title</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> option</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // Your echarts config here.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:::</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>You can use top-level await and <code>fetch</code> to get data from network requests.</p></div><h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced"><span>Advanced</span></a></h2><p>You can import and call <code>defineEChartsConfig</code> in <a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">client config file</a> to customize echarts.</p><div class="code-block-with-title"><div class="code-block-title-bar" data-title=".vuepress/client.ts"><span>.vuepress/client.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-ts"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineEChartsConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-plugin-md-enhance/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">defineEChartsConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  options</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // global echarts options</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  setup</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> async</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // echarts setup</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // e.g.: await import(&quot;echarts-wordcloud&quot;)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div></div><h2 id="docs" tabindex="-1"><a class="header-anchor" href="#docs"><span>Docs</span></a></h2><p>For details, please see <a href="https://echarts.apache.org/handbook/en/get-started/" target="_blank" rel="noopener noreferrer">ECharts Docs</a>.</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2>`,16),n(k,{title:`Line Chart`},{content:t(()=>[n(O,{config:`eJyVVHtr2zAQ/z+f4jAM5DnLkr2brINC6SisdFAYDBPGNVYSrbZkJLltGP3uOz38aLOWNSSxdY/f3f3udCsljQUl+THu4BA+fXg3dZ/FKCgKtEjifLkYldyCVDd0kvwGjtFyNjs4+DiGgzG8TYP+GsuGk8UZ2u1EoyxUxVJ4CTMPGTGDnAAcMqkPv8CfETzEztw5i5kRPHTg4ZntBXkzg1cUyZlqbhstPSwBY8XnDn5i1YXVQm5YOvYajzSHPHfKDbcnTVn+5KhJ7+1JdKak3RJ8BrNO5vNLl5PfSkiWvE7IOuSiGlkwD5ouXYS7xYi+o7XSwBw9grKfLujxOTACIstSz/GkbsyW9cywlEqOfKnaCiXJ1ZVjlSqtqOexNipns+F6DgneCpOEsihehdY68bqRK+/NatRYmTT6AYQzoYaXfEotDppr1C4nR3XXjWA0cVT6XrhPJJnFI3innh/IOgVxNDix1m7A7ePWrXHfm6EpUOWDc0zTtyCfLaM8ZnwX2HFEfafOeX5aNlAKooyIIsqwNDyYeg//d3tEXh3pu5qmJrGi4pFxU5fCfhOSxC2i2aqbR8B2/wDzKUe0SzdHqHdfkfqcT8eQ0LS8SPxIPTeWm5dLddvaBkurm2i45khNHEBVqK/6075DR6PvDP4QnNRPmbs5weJclrt7GQ5wNDdWDXN4MqrBa35kTivc/J9HT4XhWnDiPffy1jVsh+QEr7gbdYw96BpTEtOdzEW52FWXqnxQjONi7v8HUalhdP3DJXbDclrQlTLcnrrZo4azfvmJNTC+2qK2ZvKrEKZWhhdpe8VWJQ1+5xWg3H7wV31vtbyPeyVU6LeL2Yq1ZfEePLpvKG36tWlQoud+87A4Ovfo6wncL77jPixBQr4b+4VHb38BMyq+Iw==`,title:`Dynamic%20Data%20%26%20Time%20Axis`,type:`js`})]),code:t(()=>[...l[41]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: echarts Dynamic Data & Time Axis`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```js")]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const oneDay = 86400000;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const data = [];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`let now = new Date(1997, 9, 3);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`let value = Math.random() * 1000;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const randomData = () => {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  now = new Date(+now + oneDay);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  value = value + Math.random() * 21 - 10;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  return {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    name: now.toString(),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    value: [[now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"), Math.round(value)],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  };`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`};`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`for (let i = 0; i < 1000; i++) data.push(randomData());`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const option = {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  tooltip: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    trigger: "axis",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    formatter: function (params) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      params = params[0];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      var date = new Date(params.name);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      return (`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        date.getDate() +`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "/" +`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        (date.getMonth() + 1) +`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "/" +`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        date.getFullYear() +`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        " : " +`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        params.value[1]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      );`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    axisPointer: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      animation: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  xAxis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    type: "time",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    splitLine: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      show: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  yAxis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    type: "value",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    boundaryGap: [0, "100%"],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    splitLine: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      show: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  toolbox: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    feature: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      mark: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      dataView: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        readOnly: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      restore: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      saveAsImage: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  series: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      name: "Fake Data",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "line",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      showSymbol: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      data: data,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`};`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const timeId = setInterval(() => {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  if (echarts._disposed) return clearInterval(timeId);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  for (let i = 0; i < 5; i++) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    data.shift();`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    data.push(randomData());`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  echarts.setOption({`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    series: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        data: data,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  });`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}, 1000);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(k,{title:`Bar Chart`},{content:t(()=>[n(O,{config:`eJyNVE2P2jAQvfMrRjmFgthoVz0Uyla0uwcOqz1UrSohVA1kSKw6dmQ7LGjFf+/Y+VjSUlQO42DPx3vjed5qZR2k6BDmsFrPBoOdNhBLciB4J5nx8hHe8zIaDYPfpKxsHj+hyydGVyptPlGluoiH8A5uk2Q45ER1al06oRWneh0AHBYHYafhE6DAwxQin/IJD9GY907eHM993LEkdtqio0ybY/CCAGMKq2gRjSH67M0Xbx68eYzWtZNQezKWo52pqN5CJQr0cB4qE9Yp3CXJP86+lVyGwzuPgPd2DDc3oJU8gssJJJqMmOUdbNBYeBFSwoYgFbaUeKS0JWXJCGJWq5Cp5gZgCKUTBX3Vxp3jBFBYeN4/GsJdI7hKt1V3wdt2R+KGZNs6/7O5fuknBii1FTX3yIgsd10+gD3KihZtI/qBgUazhA5LykilbbV+peDltJYbzT275AGwI3SVYVIt3ALNr+vgGww19e+C+Pg6V25w+sx3NYUdSvt3HsN3p88xXK1qcU8Luyww+7+IsARzYfDCUF0bur7DI1qhMr4zKRQ1Q/DHYRv75nKaNSI0lVcgq3N+H4Bf0njQtiSVubxWeye1lVjDaA5XJN//fw/J5AN88g9BAiwZfg/4OQCgbY7G2Ykl9xxehbiZjFYcr70xr1+lUxi2E2dgNg0dr5llytA501I5Mjy48Rs7sYO4rfXTS1FbSod82TxvCraSm9NF1alqfNyl2NcZh/bz128Apm/c`,title:`A%20bar%20chart`,type:`js`})]),code:t(()=>[...l[42]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: echarts A bar chart`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```js")]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const data = [];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`for (let i = 0; i < 5; i++) data.push(Math.round(Math.random() * 200));`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const option = {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  xAxis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    max: "dataMax",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  yAxis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    type: "category",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    data: ["A", "B", "C", "D", "E"],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    inverse: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    animationDuration: 300,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    animationDurationUpdate: 300,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    max: 2, // only the largest 3 bars will be displayed`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  series: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      realtimeSort: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      name: "X",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "bar",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      data: data,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      label: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        position: "right",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        valueAnimation: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  legend: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  toolbox: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    feature: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      mark: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      dataView: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        readOnly: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      restore: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      saveAsImage: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  animationDuration: 0,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  animationDurationUpdate: 3000,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  animationEasing: "linear",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  animationEasingUpdate: "linear",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`};`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const run = () => {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  for (let i = 0; i < data.length; i++)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    data[i] += Math.round(Math.random() * Math.random() > 0.9 ? 2000 : 200);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  echarts.setOption({`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    series: [{ type: "bar", data }],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  });`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`};`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const timeId = setInterval(() => {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  if (echarts._disposed) return clearInterval(timeId);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  run();`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}, 3000);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(k,{title:`Pie Chart`},{content:t(()=>[n(O,{config:`eJyVk71ugzAUhfc8hWWpWwZCfhp1qzp1aaW26lJluCk3YNVgZF/SoirvXtslQH4gYcHce44/+9jwO2KMS4wxi/gdc5WtSeW24GtFpFJue7uxs5FScq1+Gp9J1LetSBfoDLazQaBCY22xrRT0V6s+nFY1Pd9rERC8C3T6+Rl7p+1qhOg5k6VVNiDNKUyjIXWwmwurG9jivXlMIb48yY/u+X84BrVAYz0fXqjjZ5A6Fn8ScUIii0Eie0hAE69XpTL3llxg09QQicLzwmDMJkGwqqVPzAi1k/g8uOFj5odG18rgW8UEe0gNVBCmr1TKo3RrpSPUL/sVl2dvpY7WjufVLcjCEWdBczmt5G47bOI+oyNsB2a67MaEAzBhN2Y6ANMTanY9JuwJNR+AWXRjFgMwPWdzez1m0hNq2cJUb6v6l1mNdqM/icX4bQ==`,title:`A%20nightingale%20chart`})]),code:t(()=>[...l[43]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: echarts A nightingale chart`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```json")]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`{`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "legend": {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "top": "bottom"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "toolbox": {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "show": true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "feature": {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "mark": {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "show": true`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "dataView": {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "show": true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "readOnly": false`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "restore": {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "show": true`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "saveAsImage": {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "show": true`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "series": [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "name": "Nightingale Chart",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "type": "pie",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "radius": [20, 100],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "center": ["50%", "50%"],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "roseType": "area",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "itemStyle": {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "borderRadius": 8`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "data": [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "value": 40,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "name": "rose 1"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "value": 38,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "name": "rose 2"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "value": 32,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "name": "rose 3"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "value": 30,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "name": "rose 4"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "value": 28,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "name": "rose 5"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "value": 26,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "name": "rose 6"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "value": 22,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "name": "rose 7"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "value": 18,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "name": "rose 8"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      ]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(k,{title:`Scatter Chart`},{content:t(()=>[n(O,{config:`eJxtkj1uwzAMhXefgtAsEPqX3K1n6Bh4cFsPBlq0iD3EDXz3kkobhEo0COCnp8dHQecOQJ2eT/OinuC8ay43WS7TcZ64PlAFwDd4qWX7fP36eJl/JjpzhrWVv4/reFXzOliDRkNBE4Z/FVGqs4aEfbyl1rM2Yyy3tEcT2aFYobUXX+8FDReHlBrfwN0ah5osPXQo2EsHh5SBHJxMZolmFJCC3UMazGsI6GQvh46lRVCHhmjAkIW2voJv0lJYoqFJm2o3iiDenLrVeV07WZ23CG1GUzTEZt5Yk0VMZfiD11O1bt/8F9TyNq7rdFSV77QP3d79Ahlkc/0=`,title:`A%20scatter%20chart`})]),code:t(()=>[...l[44]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: echarts A scatter chart`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```json")]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`{`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "xAxis": {},`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "yAxis": {},`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "series": [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "symbolSize": 20,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "data": [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [10.0, 8.04],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [8.07, 6.95],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [13.0, 7.58],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [9.05, 8.81],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [11.0, 8.33],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [14.0, 7.66],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [13.4, 6.81],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [10.0, 6.33],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [14.0, 8.96],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [12.5, 6.82],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [9.15, 7.2],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [11.5, 7.2],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [3.03, 4.23],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [12.2, 7.83],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [2.02, 4.47],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [1.05, 3.33],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [4.05, 4.96],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [6.03, 7.24],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [12.0, 6.26],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [12.0, 8.84],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [7.08, 5.82],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        [5.02, 5.68]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "type": "scatter"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(k,{title:`Polar Chart`},{content:t(()=>[n(O,{config:`eJxVUM1qwzAMvucpRE7JWrqUrWM066HHHQaFHUMPJtESQWoHWxkrI+8+2U7KerHl70+Sa6MdQ6NYwQGqc5kkX8ZC1iMDCVKUcr0dYFv4arXK4TcB8Cx3GDwZwaOnc3iAp5einGkr1E6gbAsr+FDcbRzpLIsuMbwGQyBO73nubX6IzTC6LqvsOuafhZiSJA7ZIbUdS+7zTtrMoBmYjBYwztWibvahjnl7qNKeNKbntWCTPwbTKyua8GBjeqZhsbCltkVhU/VDLvUKAF+eDGn2RNSJ8jqgyGpr3KILgeFQuu3xKLZbblR/q37EWe1YWT564R6Km9OqhkY3WwPi0BLKqwqupX1tjG1IK8bPq2O8SHjYaw4H0OriO4bdF2ye4g6Ln+TPf0vIZ01l8gdKiJKr`,title:`Two%20Value-Axes%20in%20Polar`,type:`js`})]),code:t(()=>[...l[45]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: echarts Two Value-Axes in Polar`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```js")]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const data = [];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`for (let i = 0; i <= 100; i++) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  let theta = (i / 100) * 360;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  let r = 5 * (1 + Math.sin((theta / 180) * Math.PI));`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  data.push([r, theta]);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const height = 450;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const option = {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  legend: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    data: ["line"],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  polar: {},`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  tooltip: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    trigger: "axis",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    axisPointer: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "cross",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  angleAxis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    type: "value",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    startAngle: 0,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  radiusAxis: {},`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  series: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      coordinateSystem: "polar",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      name: "line",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "line",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      data: data,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`};`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(k,{title:`Candlestick Chart`},{content:t(()=>[n(O,{config:`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`,title:`Stocks`,type:`js`})]),code:t(()=>[...l[46]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: echarts Stocks`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```js")]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const upColor = "#ec0000";`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const upBorderColor = "#8A0000";`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const downColor = "#00da3c";`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const downBorderColor = "#008F28";`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const splitData = (rawData) => {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  const categoryData = [];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  const values = [];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  for (let i = 0; i < rawData.length; i++) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    categoryData.push(rawData[i].splice(0, 1)[0]);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    values.push(rawData[i]);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  return {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    categoryData: categoryData,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    values: values,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  };`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`};`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`// Each item: open，close，lowest，highest`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const data0 = splitData([`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/1/24", 2320.26, 2320.26, 2287.3, 2362.94],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/1/25", 2300, 2291.3, 2288.26, 2308.38],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/1/28", 2295.35, 2346.5, 2295.35, 2346.92],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/1/29", 2347.22, 2358.98, 2337.35, 2363.8],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/1/30", 2360.75, 2382.48, 2347.89, 2383.76],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/1/31", 2383.43, 2385.42, 2371.23, 2391.82],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/1", 2377.41, 2419.02, 2369.57, 2421.15],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/4", 2425.92, 2428.15, 2417.58, 2440.38],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/5", 2411, 2433.13, 2403.3, 2437.42],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/6", 2432.68, 2434.48, 2427.7, 2441.73],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/7", 2430.69, 2418.53, 2394.22, 2433.89],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/8", 2416.62, 2432.4, 2414.4, 2443.03],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/18", 2441.91, 2421.56, 2415.43, 2444.8],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/19", 2420.26, 2382.91, 2373.53, 2427.07],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/20", 2383.49, 2397.18, 2370.61, 2397.94],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/21", 2378.82, 2325.95, 2309.17, 2378.82],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/22", 2322.94, 2314.16, 2308.76, 2330.88],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/25", 2320.62, 2325.82, 2315.01, 2338.78],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/26", 2313.74, 2293.34, 2289.89, 2340.71],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/27", 2297.77, 2313.22, 2292.03, 2324.63],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/2/28", 2322.32, 2365.59, 2308.92, 2366.16],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/1", 2364.54, 2359.51, 2330.86, 2369.65],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/4", 2332.08, 2273.4, 2259.25, 2333.54],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/5", 2274.81, 2326.31, 2270.1, 2328.14],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/6", 2333.61, 2347.18, 2321.6, 2351.44],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/7", 2340.44, 2324.29, 2304.27, 2352.02],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/8", 2326.42, 2318.61, 2314.59, 2333.67],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/11", 2314.68, 2310.59, 2296.58, 2320.96],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/12", 2309.16, 2286.6, 2264.83, 2333.29],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/13", 2282.17, 2263.97, 2253.25, 2286.33],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/14", 2255.77, 2270.28, 2253.31, 2276.22],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/15", 2269.31, 2278.4, 2250, 2312.08],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/18", 2267.29, 2240.02, 2239.21, 2276.05],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/19", 2244.26, 2257.43, 2232.02, 2261.31],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/20", 2257.74, 2317.37, 2257.42, 2317.86],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/21", 2318.21, 2324.24, 2311.6, 2330.81],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/22", 2321.4, 2328.28, 2314.97, 2332],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/25", 2334.74, 2326.72, 2319.91, 2344.89],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/26", 2318.58, 2297.67, 2281.12, 2319.99],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/27", 2299.38, 2301.26, 2289, 2323.48],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/28", 2273.55, 2236.3, 2232.91, 2273.55],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/3/29", 2238.49, 2236.62, 2228.81, 2246.87],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/1", 2229.46, 2234.4, 2227.31, 2243.95],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/2", 2234.9, 2227.74, 2220.44, 2253.42],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/3", 2232.69, 2225.29, 2217.25, 2241.34],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/8", 2196.24, 2211.59, 2180.67, 2212.59],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/9", 2215.47, 2225.77, 2215.47, 2234.73],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/10", 2224.93, 2226.13, 2212.56, 2233.04],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/11", 2236.98, 2219.55, 2217.26, 2242.48],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/12", 2218.09, 2206.78, 2204.44, 2226.26],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/15", 2199.91, 2181.94, 2177.39, 2204.99],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/16", 2169.63, 2194.85, 2165.78, 2196.43],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/17", 2195.03, 2193.8, 2178.47, 2197.51],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/18", 2181.82, 2197.6, 2175.44, 2206.03],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/19", 2201.12, 2244.64, 2200.58, 2250.11],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/22", 2236.4, 2242.17, 2232.26, 2245.12],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/23", 2242.62, 2184.54, 2182.81, 2242.62],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/24", 2187.35, 2218.32, 2184.11, 2226.12],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/25", 2213.19, 2199.31, 2191.85, 2224.63],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/4/26", 2203.89, 2177.91, 2173.86, 2210.58],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/2", 2170.78, 2174.12, 2161.14, 2179.65],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/3", 2179.05, 2205.5, 2179.05, 2222.81],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/6", 2212.5, 2231.17, 2212.5, 2236.07],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/7", 2227.86, 2235.57, 2219.44, 2240.26],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/8", 2242.39, 2246.3, 2235.42, 2255.21],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/9", 2246.96, 2232.97, 2221.38, 2247.86],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/10", 2228.82, 2246.83, 2225.81, 2247.67],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/13", 2247.68, 2241.92, 2231.36, 2250.85],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/14", 2238.9, 2217.01, 2205.87, 2239.93],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/15", 2217.09, 2224.8, 2213.58, 2225.19],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/16", 2221.34, 2251.81, 2210.77, 2252.87],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/17", 2249.81, 2282.87, 2248.41, 2288.09],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/20", 2286.33, 2299.99, 2281.9, 2309.39],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/21", 2297.11, 2305.11, 2290.12, 2305.3],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/22", 2303.75, 2302.4, 2292.43, 2314.18],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/23", 2293.81, 2275.67, 2274.1, 2304.95],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/24", 2281.45, 2288.53, 2270.25, 2292.59],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/27", 2286.66, 2293.08, 2283.94, 2301.7],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/28", 2293.4, 2321.32, 2281.47, 2322.1],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/29", 2323.54, 2324.02, 2321.17, 2334.33],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/30", 2316.25, 2317.75, 2310.49, 2325.72],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/5/31", 2320.74, 2300.59, 2299.37, 2325.53],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/6/3", 2300.21, 2299.25, 2294.11, 2313.43],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/6/4", 2297.1, 2272.42, 2264.76, 2297.1],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/6/5", 2270.71, 2270.93, 2260.87, 2276.86],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/6/6", 2264.43, 2242.11, 2240.07, 2266.69],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/6/7", 2242.26, 2210.9, 2205.07, 2250.63],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ["2013/6/13", 2190.1, 2148.35, 2126.22, 2190.1],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`]);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const calculateMA = (dayCount) => {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  const result = [];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  for (let i = 0; i < data0.values.length; i++) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    if (i < dayCount) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      result.push("-");`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      continue;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    let sum = 0;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    for (let j = 0; j < dayCount; j++) sum += +data0.values[i - j][1];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    result.push(sum / dayCount);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  return result;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`};`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const option = {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  tooltip: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    trigger: "axis",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    axisPointer: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "cross",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  legend: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    data: ["日K", "MA5", "MA10", "MA20", "MA30"],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  grid: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    left: "10%",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    right: "10%",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    bottom: "15%",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  xAxis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    type: "category",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    data: data0.categoryData,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    boundaryGap: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    axisLine: { onZero: false },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    splitLine: { show: false },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    min: "dataMin",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    max: "dataMax",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  yAxis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    scale: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    splitArea: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  dataZoom: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "inside",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      start: 50,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      end: 100,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      show: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "slider",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      top: "90%",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      start: 50,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      end: 100,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  series: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      name: "日K",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "candlestick",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      data: data0.values,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      itemStyle: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        color: upColor,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        color0: downColor,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        borderColor: upBorderColor,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        borderColor0: downBorderColor,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      markPoint: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        label: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          formatter: (param) => (param == null ? "" : Math.round(param.value).toString()),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        data: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            name: "Mark",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            coord: ["2013/5/31", 2300],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            value: 2300,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            itemStyle: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              color: "rgb(41,60,85)",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            name: "highest value",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            type: "max",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            valueDim: "highest",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            name: "lowest value",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            type: "min",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            valueDim: "lowest",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            name: "average value on close",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            type: "average",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            valueDim: "close",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        tooltip: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          formatter: (param) => param.name + "<br>" + (param.data.coord || ""),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      markLine: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        symbol: ["none", "none"],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        data: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              name: "from lowest to highest",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              type: "min",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              valueDim: "lowest",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              symbol: "circle",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              symbolSize: 10,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              label: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`                show: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              emphasis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`                label: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`                  show: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`                },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              type: "max",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              valueDim: "highest",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              symbol: "circle",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              symbolSize: 10,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              label: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`                show: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              emphasis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`                label: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`                  show: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`                },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            name: "min line on close",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            type: "min",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            valueDim: "close",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            name: "max line on close",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            type: "max",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            valueDim: "close",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      name: "MA5",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "line",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      data: calculateMA(5),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      smooth: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      lineStyle: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        opacity: 0.5,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      name: "MA10",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "line",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      data: calculateMA(10),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      smooth: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      lineStyle: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        opacity: 0.5,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      name: "MA20",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "line",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      data: calculateMA(20),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      smooth: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      lineStyle: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        opacity: 0.5,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      name: "MA30",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "line",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      data: calculateMA(30),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      smooth: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      lineStyle: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        opacity: 0.5,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`};`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(k,{title:`Radar Chart`},{content:t(()=>[n(O,{config:`eJx1Uj1vgzAQ3fMrTp4ZIE2iqhttlw6d6IYYLLhSVGMjY1CjKP+9dzYfbVoWzDu/dx/vfNkBCIU16ko8ACPClXSSUC5SpUwpHVbwOFQ1OhGBSEs3SAVZR5JG16IgzTXiNFZW0q5ZGronseFQ7kMAFxBatkgRkUmFPSds5Rfh0zGOQ54bXlq1jW56Z6VrjF4FySneULzod2NbT4c3LD+0UaY+r8o7Ev6vfBp6Z1q0kA1dZ6yfd9Lcb2mecURluhb1D/pxv0V/lfYTHRu3kPc0OpE9d3WzR9uQQbN3wVSKz4nCRmDsoZ9XMZcT7tx5TtjIEp73OuE1qb8dpRpYlR+o+ci7FAHPwYBbjIC/dCRsRjGn/dXVnxezkBYztsqGEskh1OUSdPCSI+COGCXbdW9e5Vp2+mNjAyp21903CYG6ew==`,title:`A%20Radar%20Chart`})]),code:t(()=>[...l[47]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: echarts A Radar Chart`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```json")]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`{`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "legend": {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "data": ["Allocated Budget", "Actual Spending"]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "radar": {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "indicator": [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      { "name": "Sales", "max": 6500 },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      { "name": "Administration", "max": 16000 },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      { "name": "Information Technology", "max": 30000 },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      { "name": "Customer Support", "max": 38000 },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      { "name": "Development", "max": 52000 },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      { "name": "Marketing", "max": 25000 }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    ]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "series": [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "name": "Budget vs spending",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "type": "radar",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "data": [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "value": [4200, 3000, 20000, 35000, 50000, 18000],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "name": "Allocated Budget"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "value": [5000, 14000, 28000, 26000, 42000, 21000],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          "name": "Actual Spending"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      ]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(k,{title:`Heat Map`},{content:t(()=>[n(O,{config:`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`,type:`js`})]),code:t(()=>[...l[48]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: echarts`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```js")]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`///////////////////////////////////////////////////////////////////////////`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`// perlin noise helper from https://github.com/josephg/noisejs`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`///////////////////////////////////////////////////////////////////////////`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`function getNoiseHelper() {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  class Grad {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    constructor(x, y, z) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      this.x = x;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      this.y = y;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      this.z = z;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    dot2(x, y) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      return this.x * x + this.y * y;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    dot3(x, y, z) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      return this.x * x + this.y * y + this.z * z;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  const grad3 = [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    new Grad(1, 1, 0),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    new Grad(-1, 1, 0),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    new Grad(1, -1, 0),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    new Grad(-1, -1, 0),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    new Grad(1, 0, 1),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    new Grad(-1, 0, 1),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    new Grad(1, 0, -1),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    new Grad(-1, 0, -1),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    new Grad(0, 1, 1),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    new Grad(0, -1, 1),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    new Grad(0, 1, -1),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    new Grad(0, -1, -1),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  const p = [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    78, 66, 215, 61, 156, 180,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  // To remove the need for index wrapping, double the permutation table length`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  let perm = new Array(512);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  let gradP = new Array(512);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  // This isn't a very good seeding function, but it works ok. It supports 2^16`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  // different seed values. Write something better if you need more seeds.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  function seed(seed) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    if (seed > 0 && seed < 1) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // Scale the seed out`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      seed *= 65536;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    seed = Math.floor(seed);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    if (seed < 256) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      seed |= seed << 8;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    for (let i = 0; i < 256; i++) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      let v;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      if (i & 1) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        v = p[i] ^ (seed & 255);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      } else {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        v = p[i] ^ ((seed >> 8) & 255);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      perm[i] = perm[i + 256] = v;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      gradP[i] = gradP[i + 256] = grad3[v % 12];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  seed(0);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  // ##### Perlin noise stuff`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  function fade(t) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    return t * t * t * (t * (t * 6 - 15) + 10);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  function lerp(a, b, t) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    return (1 - t) * a + t * b;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  // 2D Perlin Noise`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  function perlin2(x, y) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    // Find unit grid cell containing point`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    let X = Math.floor(x),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      Y = Math.floor(y);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    // Get relative xy coordinates of point within that cell`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    x = x - X;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    y = y - Y;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    // Wrap the integer cells at 255 (smaller integer period can be introduced here)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    X = X & 255;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    Y = Y & 255;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    // Calculate noise contributions from each of the four corners`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    let n00 = gradP[X + perm[Y]].dot2(x, y);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    let n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    let n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    let n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    // Compute the fade curve value for x`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    let u = fade(x);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    // Interpolate the four results`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  return {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    seed,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    perlin2,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  };`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`let noise = getNoiseHelper();`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`let xData = [];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`let yData = [];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`noise.seed(Math.random());`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`let data = [];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`for (let i = 0; i <= 200; i++) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  for (let j = 0; j <= 100; j++) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    data.push([i, j, noise.perlin2(i / 40, j / 20) + 0.5]);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  xData.push(i);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`for (let j = 0; j < 100; j++) {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  yData.push(j);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`option = {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  tooltip: {},`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  xAxis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    type: "category",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    data: xData,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  yAxis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    type: "category",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    data: yData,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  visualMap: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    min: 0,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    max: 1,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    calculable: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    realtime: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    inRange: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      color: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "#313695",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "#4575b4",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "#74add1",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "#abd9e9",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "#e0f3f8",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "#ffffbf",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "#fee090",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "#fdae61",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "#f46d43",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "#d73027",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        "#a50026",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  series: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      name: "Gaussian",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "heatmap",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      data: data,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      emphasis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        itemStyle: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          borderColor: "#333",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          borderWidth: 1,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      progressive: 1000,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      animation: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`};`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const height = 500;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(k,{title:`Tree Chart`},{content:t(()=>[n(O,{config:`eJxNUctugzAQvPMVFlIlkBJI1aeI0ktz76HtqerBgU3sCD/kXVLRKv/eNRRSDqw9M+uZtWtnkUQjSYqNkF9Sk9gD1SpLFZHHqixJgYGlch6WEhEIi1MHRyx8AMQydpb7VgYojuhsmhest1nGZC42T4kQvBqoLF8k+TpJRkfnSTvLnj8sIeda0r4aNrwN+nCAUIlUE5h08R98sQwb1yEYd4KBO8cfQtCAlfgYxOM53NR7YD0FGKXxi4lZF8vnhJFj8/T68WpW7RyRMxG8vYCt7F1HDAbZaNnOOPZm51rGwXjqn3Wo24vfSL7qb07yMIHaauIT3jjYFjypStxMlLTayHg52y4M9d1z1th8t5o07KMkap53mlSIvas7BtIGsAbbSEtzhOGG/grPfJ5fQYE+KOJXuF+t1skvzu6WgQ==`,title:`Tree`,type:`js`})]),code:t(()=>[...l[49]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: echarts Tree`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```js")]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const data = await fetch("https://theme-hope-assets.vuejs.press/data/flare.json").then((res) =>`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  res.json(),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`);`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const option = {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  tooltip: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    trigger: "item",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    triggerOn: "mousemove",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  series: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "tree",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      data: [data],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      top: "18%",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      bottom: "14%",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      layout: "radial",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      symbol: "emptyCircle",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      symbolSize: 7,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      initialTreeDepth: 3,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      animationDurationUpdate: 750,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      emphasis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        focus: "descendant",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`};`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const height = 600;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(k,{title:`Multiple Chart`},{content:t(()=>[n(O,{config:`eJztVM2K2zAQvucpBsFCC8H4J8qPl0K7ORW2PRV6CD1o7Ykt6ljGlrsJIe/eGUnrOvQBeulFo/lmvpmRNJrCtIMF01ltWvgA1wVAgxW2ZQ7X25I0a0xjdUcqKaT2uqqwz0Gosx4EewAMtXndm9Zia3M4qmZAxh29VFYNSLCnD2bsC8zh4DSAg+h6U46FFUsQaZykQWZBroKUQa6D3IgfPjWH+KKbn/ANFdnkOpJL2KZRQus22ixhE/NeZtGKEBklc56yRa3gWVmLzE2cZ8KekjwdK6MIWbRdwpqizbj7GnFA2JvCcN6Vy7JOo5TWHdeQrTnOSjKSpZGccb+rph0tPPXmtdWcOfVeG46xSnifUMYsi3ak76aanXC3ev5El093CvbS0W2KQlmsTH8R3nx5M1e9Lj+3JZ5ziL2JEUc09KRCyodAGbDXSBz/MP6x6LV9+Ea3VGbAhpMxts6pE0b3zA5z7Gd1MaN9uhCDjjYR8NTVavAFHU0x0kZ4QsgdDvU/7b9I23EHBohb4w7oValdqCx+mMCCvjlPgIOQjNJ/pC6a2ntWSEBgVlBznMKEcmjeqBds7t37E/9JnjLXlxuZPvJouMG7a3l7eP93BGwLU9Jh/oTQFk9f1ckd8G3ATMZfqhnZ4ufNBE+T7t4wvz065e1xsfBDs0Zd1ZaG5jaOHxe/AarrVn8=`,type:`js`})]),code:t(()=>[...l[50]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: echarts`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```js")]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const option = {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  legend: {},`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  tooltip: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    trigger: "axis",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    showContent: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  dataset: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    source: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      ["product", "2012", "2013", "2014", "2015", "2016", "2017"],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      ["Cheese Cocoa", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      ["Walnut Brownie", 25.2, 37.1, 41.2, 18, 33.9, 49.1],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  xAxis: { type: "category" },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  yAxis: { gridIndex: 0 },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  grid: { top: "55%" },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  series: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "line",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      smooth: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      seriesLayoutBy: "row",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      emphasis: { focus: "series" },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "line",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      smooth: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      seriesLayoutBy: "row",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      emphasis: { focus: "series" },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "line",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      smooth: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      seriesLayoutBy: "row",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      emphasis: { focus: "series" },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "line",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      smooth: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      seriesLayoutBy: "row",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      emphasis: { focus: "series" },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "pie",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      id: "pie",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      radius: "30%",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      center: ["50%", "25%"],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      emphasis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        focus: "self",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      label: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        formatter: "{b}: {@2012} ({d}%)",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      encode: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        itemName: "product",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        value: "2012",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        tooltip: "2012",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`};`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const height = 800;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(k,{title:`WordCloud (with setup function)`},{content:t(()=>[n(O,{config:`eJy9Vttu3EYMfc9XEBsEsNv1XnLPBgVqJ3EbFKmBJkVRBHmYlUar6Y406mjk9TbIv/eQo9va2z4F0ZNEcchD8pDDxJV1IFcF40r6gT7fI5rPKVHltapprZLtxrumTClx1nn8HESvWLKiyf0sU5NpPPch11S4ptZUOVMG7SlX5aam4Cg1dWXVngJUrpVtNE4E52ww1Yo+f2EDtfZG1yv6iHcSKPyEfaXhZud8+sq6JoWv9k/rsM5VpcllYnqSiI549Go3o1eqpLUmVe6BySpP+u9GSbReV17XGjBTQrBqsJooazlQypoyYd0pOU+KtnrPMKg9N6Pza2WsWlvEG0Uw4zUlxieQnaQ6U40Npxxcb9qnxpmUTlRVQQd2c618aKNIGn+tpxJJ4VCYbel25S3gp1MkUxUOVTkZDCtrEASyUEPNaygFb5B8q88y53dwO0im8N6p91pN5c0mD1OqEIfacNAKLuqg/KzLuIBEMWKAB5X4ResKaax0EsgzTjZeqHr7tlAbiXO5WhKgRCP1uIYGSCID8VY3VeU8F6U2ZaJJJznyU59x5qW4Pz6cLWeL9vwWbs/F64oyZWs9xnQOEzZ3jQ5BkxEcu9wkueQXb5AiVYp2xlomib5JbJPCc+ZdIfwx5YaCvgn17CjnImg5jkYKpmw0M49Lu2dOsZ8DekoArIIe2vVphdE+U6vhdRzKpbPWCRyrszAPrprvTBryea65anOp3XztQgBy5iCaEHEg3ZWrDcOUUDhuZrDgGKy/jkRlYEhD1QQyZcTL7QHqgwg54nn25AHd0PPFAyT2H93jZ0jMClGWWSCN69DZt4UCGuJniwe9LIYAIQz3QgloRWVjbSeK0XWyUUFQIAEE4pUHNZZBw7GkKgxlLlAfJCe4UVFHGcjVNXRMaYqmoOXD6kbCL9SNCJ4uIDiInj9+Y8eYXMuHU2h8uoPOu9AOHUEYGwsNw9D0xms9i3odRNEHRqinrgCZoBiPfjx7sZjSi8UnWu97s+/Z1uMnnddO3KHqjvS5HR1b4dwYruSxZevGY1DBc2VutK2FTYXy245JKk4/Y03Y9wSXm2MwxzIMrw1I1FtkF3HGrc2m/6MqBB52WqOhQFF0XGuFz7zHkRU9PwCqpVrBtz3H/RHJHVnM7QvomB1In2tCbdKhDQXlqPznw+keEy4O6d9RQtp7ceTgK40xtnXVhKvsgq/WI6PMRAAZpkxEBBe4PmNupTL8m0dVhy7etzodXT67XEMLqg5TyZty2x+a0duMDNoewGNeI4LBKjNzsFS6IDTVZaq9Tu8e57LcOs0Holsc+Ep5i/Y+uEtzbP4DVKU9klMgT3twAI2Ha4BdjQD8evXhDadL7nEEIVitVkKk39/S2rpEOI/0CSUwXQHUOtz24EVL1nYSipvzzssq5mEE6Sfr1srGpNRhb3kNkmEJwXv+xjLUikiqfakKY/cYjrUq6zNekbJ+RkaNP7rxuXaWt6PuH7zJjsaslRXo7l4T1xrZ7YAGqdz0p0WInHaaJ6cjYGIc0wWzqd8Mu8fr0Hjoj0REE79Zn0zo+wNh3POG550K+Ux2y5P4Kg7g+DtaPl30W9S3UP80+wsL7MlkOjm9BXpyOhl9n77sP2SFPXjRRYVL02CjHZc0aSCY1NpyHXv50fq34lylbndhG5RjuRjjHP72y/ijR49GFBhjGt11fBmCwaCF8l7tZ/RG4cKUdzSALqhosHvKPViqIl5X8SqtvENHhf2ofXrk8VQ7GRB72HfDDf66rZ6fcYBsH7ivG1nGZWOCwxxeRmFQ9I4LAM9YDPfRNe+9YC/eGM6BxjizfT5GqTmK552f/fwfGJYLPHeqcLd0fQtN1hY9d2Bq5Pw4Tf7X7mD5/sXrizeX5we2+cHO2VPm8fGfV1mGUf0n4rmlcIDtWMLaNUK+8f7l5b1/AUVZKfI=`,type:`js`})]),code:t(()=>[...l[51]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: echarts`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```js")]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`const option = {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  // canvas background color`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  backgroundColor: "#ffa",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  // The mouse pointer hangs to display the value`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  tooltip: {},`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  series: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      type: "wordCloud",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // The shape of the "cloud" to draw. Can be any polar equation represented as a`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // callback function, or a keyword present. Available presents are circle (default),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // cardioid (apple or heart shape curve, the most known polar equation), diamond (`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      shape: "circle",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // Keep aspect ratio of maskImage or 1:1 for shapes`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // This option is supported since echarts-wordcloud@2.1.0`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      keepAspect: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // A silhouette image which the white area will be excluded from drawing texts.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // The shape option will continue to apply as the shape of the cloud to grow.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // maskImage: maskImage,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // Following left/top/width/height/right/bottom are used for positioning the word cloud`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // Default to be put in the center and has 75% x 80% size.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      left: "center",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      top: "center",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      width: "70%",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      height: "80%",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      right: null,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      bottom: null,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // Text size range which the value in data will be mapped to.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // Default to have minimum 12px and maximum 60px size.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      sizeRange: [12, 60],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      rotationRange: [-90, 90],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      rotationStep: 45,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // size of the grid in pixels for marking the availability of the canvas`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // the larger the grid size, the bigger the gap between words.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      gridSize: 8,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // set to true to allow word to be drawn partly outside of the canvas.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // Allow word bigger than the size of the canvas to be drawn`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // This option is supported since echarts-wordcloud@2.1.0`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      drawOutOfBound: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // if the font size is too large for the text to be displayed,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // whether to shrink the text. If it is set to false, the text will`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // not be rendered. If it is set to true, the text will be shrinked.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // This option is supported since echarts-wordcloud@2.1.0`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      shrinkToFit: false,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // If perform layout animation.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // NOTE disable it will lead to UI blocking when there is lots of words.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      layoutAnimation: true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // Global text style`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      textStyle: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        fontFamily: "sans-serif",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        fontWeight: "bold",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        // Color can be a callback function or a color string`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        color: function () {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          // Random color`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          return (`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            "rgb(" +`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              Math.round(Math.random() * 160),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              Math.round(Math.random() * 160),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              Math.round(Math.random() * 160),`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            ].join(",") +`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            ")"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          );`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      emphasis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        focus: "self",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        textStyle: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          textShadowBlur: 10,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          textShadowColor: "#333",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // Data is an array. Each array item must have name and value property.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      // textStyle must not be empty`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      data: [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          name: "vuepress theme hope",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          value: 8888,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          // Style of single text`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          //textStyle: {},`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          name: "Mr.Hope",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          value: 10000,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          textStyle: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            color: "black",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          emphasis: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            textStyle: {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              color: "#BDBEFA",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              shadowBlur: 4,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`              shadowOffsetY: 14,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`          },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`};`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1})])}var w=c(u,[[`render`,C]]);export{l as _pageData,w as default};