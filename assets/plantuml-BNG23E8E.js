import{L as e,N as t,h as n,m as r,p as i,q as a,s as o,u as s}from"./runtime-core.esm-bundler-BIVICILd.js";import{t as c}from"./app-By5aD2tA.js";var l=JSON.parse(`{"path":"/zh/guide/markdown/chart/plantuml.html","title":"Plantuml","lang":"zh-CN","frontmatter":{"title":"Plantuml","icon":"diagram-project","category":["Markdown"],"tag":["Markdown","图表"],"description":"让你站点中的 Markdown 文件支持 plantuml。","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Plantuml\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-18T10:11:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/chart/plantuml.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Plantuml"}],["meta",{"property":"og:description","content":"让你站点中的 Markdown 文件支持 plantuml。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-06-18T10:11:41.000Z"}],["meta",{"property":"article:tag","content":"图表"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:modified_time","content":"2025-06-18T10:11:41.000Z"}],["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.github.io/v2/guide/markdown/chart/plantuml.html"}],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.github.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"git":{"createdTime":1622901613000,"updatedTime":1750241501000,"contributors":[{"name":"Mr.Hope","username":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":39,"avatar":"https://avatars.githubusercontent.com/Mister-Hope?v=4","url":"https://github.com/Mister-Hope"},{"name":"FuckDoctors","username":"FuckDoctors","email":"1180450+FuckDoctors@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/FuckDoctors?v=4","url":"https://github.com/FuckDoctors"},{"name":"Nan Huang","username":"","email":"teddyhuangnan@gmail.com","commits":1,"avatar":"https://gravatar.com/avatar/90a4a1b29ff0194b5fe0b2bce9174ced3f331df48f8d118ca6ff0ba1cd7b6bc1?d=retro"}],"changelog":[{"hash":"660a5c1a6b2152df53a77a259a707b2306e07af0","time":1750241501000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat: support new chart plugin (#4958)"},{"hash":"55e920bec840b3f17d7a95a62eab4ade3808a410","time":1744577429000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"b12301e87c66b38b46983e2c3a09a444f0347520","time":1739862488000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): add twoslash"},{"hash":"22787ac127e25c078638b854eec74f2caa44598c","time":1733510882000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat!: replace plugins with official ones and rebuild markdown options (#4553)"},{"hash":"913bbe7e077d38bd3f052c70184686cb03ddc5f6","time":1713694647000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat: add plantuml feature"},{"hash":"b41c0c8581ffe48b6af526833988b39116a2b70e","time":1711651596000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): update docs"},{"hash":"54c46e02b710e103d2a2ed2ae2e9fc1a6945bc66","time":1706265017000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"55ea333761b5da44d6823bac1686a3cc49648e45","time":1699596334000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: rebuild docs"},{"hash":"792dc1ad432c6225083427123c2ea050aeea2859","time":1698991484000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"4a8a94c3fb17978260b801262719082b615c9602","time":1698334353000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): support xychart"},{"hash":"83bffb717edde38b00af51a36297085af02494c8","time":1698186791000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"505a1cb009b2329e378912b372d7fc9797e560b1","time":1696835966000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): support new mermaid diagrams"},{"hash":"afae5f13ac7c0b53a2c5611a841fd249392278ba","time":1696755808000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(md-enhance): update docs"},{"hash":"f026b563675575a896acebedf3264aa15d509397","time":1684990888000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): use mermaid@10.2, improve title support"},{"hash":"16ff14eb2c9f5620952fe1107e938166db1bb94d","time":1682070077000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"chore(md-enhance): tweaks"},{"hash":"2a3066dd66371118a4dce2105899981a0775b9fe","time":1682044324000,"email":"teddyhuangnan@gmail.com","author":"Nan Huang","message":"docs: fix typos, grammar, and other minor issues (#3049)"},{"hash":"7aad23f59bae3e19a5742a0a91935bbaa0aa5f54","time":1677039538000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: fix typos"},{"hash":"3d95f10e0354b9d36d888f742892d1439ccfdd08","time":1676987930000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): use mermaid@v10"},{"hash":"0eb18c9421e6bbda98880d71c48ec9996af40a5f","time":1676546699000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update mermaid docs"},{"hash":"8174c8d95db9e1263c05f9b9b973706e45116dc4","time":1674031135000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): use fontawesome"},{"hash":"1e6b07aa6d55fb8da40a127a1a78f7ab18ba277e","time":1667390600000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): add mindmap support for mermaid"},{"hash":"2243ae4b7234b4d6693afd6c424c42952e936d85","time":1667283843000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"chore: fix typos"},{"hash":"a18c8c285877dea778f188710bf4873196fdb399","time":1662567109000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: fix typos"},{"hash":"2fa50e8c0b1da5d601e385f92e1ad99289d878aa","time":1661682432000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat: migrate to ESM (#2158)"},{"hash":"adca2e644df8cad86a2f257cf42766cf23cca012","time":1655600402000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: add c4c diagram"},{"hash":"3c8d63b5961afe7a8483703fc22ba6d98bab9bd7","time":1654100485000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): update docs"},{"hash":"9856d35d297e9fcaf87a4f8a06ad15beb339444d","time":1653396462000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(theme): rebuild structure sidebar sort"},{"hash":"235159dae1e6ba956ede13009df8f1f2aa4fc8e3","time":1653140346000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update codetab"},{"hash":"48bca69fdb2a5868997fca6ed1d7403ca2ec2241","time":1653133439000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): rebuild code tabs and support tabid"},{"hash":"9cdd7c8a34931ddf25d508f933789edf03839536","time":1653063647000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): change <code>@codetab</code> to <code>@tab</code>"},{"hash":"63d09732b624507bef4b45293e42c0a118fdee08","time":1652975675000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): rebuild codegroup"},{"hash":"f635dbc248799ae65d758fc4b465ebaad256f75a","time":1652876522000,"email":"1180450+FuckDoctors@users.noreply.github.com","author":"ZhaoBin","message":"feat(md-enhance): add ECharts support (#1840)"},{"hash":"fd39507183aacaad0734f8e60282b5b82b2d8caa","time":1651594078000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update related docs"},{"hash":"1eb77ab7301a56c85c7cd4b716ac88c13d30c06b","time":1650708947000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): update docs"},{"hash":"fb70b870dcf706de4726ac998631c752de7fcbe1","time":1649426708000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"feat(md-enhance): add support for <code>git-graph</code> block"},{"hash":"f6ff04e4dfc7459f987616b210db1b29f42127f9","time":1645883271000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"docs(theme): update categories and tags"},{"hash":"04b8aaa8ed90add28d0eef11ce1c4e78a5e811f0","time":1644938939000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"docs: improve markdown"},{"hash":"3c199b0794e621eff6ec244ecd9ce6c8d3b60d47","time":1644936187000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"docs(theme): add docs"},{"hash":"019a875e31711ab8a5a49802e0183a3b3960fee4","time":1644765562000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"docs: fix typos"},{"hash":"ace60de4a0034b1dcfa2e8788ef63df4f03f4f51","time":1643270355000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"docs(md-enhance): add docs"},{"hash":"8e8753ee637a72c21cc9d3de1e848c03d9e03a7b","time":1622901613000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"feat: add md-enhance package"}]},"readingTime":{"minutes":4.93,"words":1479},"filePathRelative":"zh/guide/markdown/chart/plantuml.md","excerpt":"<p>让你站点中的 Markdown 文件支持 <a href=\\"https://plantuml.com/zh/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">plantuml</a>。</p>\\n","autoDesc":true}`),u={name:`plantuml.md`},d={class:`code-block-with-title`},f={class:`language-ts`,"data-highlighter":`shiki`,"data-ext":`ts`,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},p={class:`shiki shiki-themes one-light one-dark-pro vp-code twoslash lsp`},m={class:`language-ts`},h={class:`line`},g={style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},_={class:`line`},v={style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},y={class:`line`},b={style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},x={class:`line highlighted`},S={style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}};function C(c,l,u,C,w,T){let E=e(`v-menu`),D=e(`VPPreview`);return t(),s(`div`,null,[l[71]||=o(`p`,null,[r(`让你站点中的 Markdown 文件支持 `),o(`a`,{href:`https://plantuml.com/zh/`,target:`_blank`,rel:`noopener noreferrer`},`plantuml`),r(`。`)],-1),l[72]||=o(`h2`,{id:`设置`,tabindex:`-1`},[o(`a`,{class:`header-anchor`,href:`#设置`},[o(`span`,null,`设置`)])],-1),l[73]||=o(`p`,null,`你可以通过下方启用此功能:`,-1),o(`div`,d,[l[34]||=o(`div`,{class:`code-block-title-bar`,"data-title":`.vuepress/theme.ts`},[o(`span`,null,`.vuepress/theme.ts`)],-1),o(`div`,f,[o(`pre`,p,[o(`code`,m,[o(`span`,h,[l[2]||=o(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`import`,-1),l[3]||=o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},` { `,-1),o(`span`,g,[n(E,{class:`twoslash-hover`,"popper-class":`shiki twoslash-floating vp-copy-ignore vp-code`,theme:`twoslash`},{popper:a(({})=>[...l[0]||=[o(`span`,{class:`twoslash-popup-container vp-copy-ignore`},[o(`code`,{class:`twoslash-popup-code`},[o(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`const`),o(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},` hopeTheme`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},` (`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-light-font-style":`inherit`,"--shiki-dark":`#E06C75`,"--shiki-dark-font-style":`italic`}},`themeOptions`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),o(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeOptions`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`, `),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-light-font-style":`inherit`,"--shiki-dark":`#E06C75`,"--shiki-dark-font-style":`italic`}},`behaviorOptions`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#C678DD`}},`?`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),o(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeBehaviorOptions`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},` |`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#E5C07B`}},` boolean`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`) `),o(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`=>`),o(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeFunction`)]),o(`div`,{class:`twoslash-popup-docs`,"vp-content":``},[o(`p`,null,`VuePress Theme Hope`)]),o(`div`,{class:`twoslash-popup-docs twoslash-popup-docs-tags`,"vp-content":``},[o(`span`,{class:`twoslash-popup-docs-tag`},[o(`span`,{class:`twoslash-popup-docs-tag-name`},`@param`),o(`span`,{class:`twoslash-popup-docs-tag-value`},[o(`code`,null,`themeOptions`),r(`  - Theme options`)])]),o(`span`,{class:`twoslash-popup-docs-tag`},[o(`span`,{class:`twoslash-popup-docs-tag-name`},`@param`),o(`span`,{class:`twoslash-popup-docs-tag-value`},[o(`code`,null,`behaviorOptions`),r(`  - Theme behavior options`)])]),o(`span`,{class:`twoslash-popup-docs-tag`},[o(`span`,{class:`twoslash-popup-docs-tag-name`},`@returns`),o(`span`,{class:`twoslash-popup-docs-tag-value`},`VuePress theme instance`)])])],-1)]]),default:a(()=>[l[1]||=o(`span`,null,`hopeTheme`,-1)]),_:1})]),l[4]||=o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},` } `,-1),l[5]||=o(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`from`,-1),l[6]||=o(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` "vuepress-theme-hope"`,-1),l[7]||=o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`;`,-1)]),l[25]||=r(`
`,-1),l[26]||=o(`span`,{class:`line`},null,-1),l[27]||=r(`
`,-1),o(`span`,_,[l[10]||=o(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`export`,-1),l[11]||=o(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#C678DD`}},` default`,-1),l[12]||=o(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},` `,-1),o(`span`,v,[n(E,{class:`twoslash-hover`,"popper-class":`shiki twoslash-floating vp-copy-ignore vp-code`,theme:`twoslash`},{popper:a(({})=>[...l[8]||=[o(`span`,{class:`twoslash-popup-container vp-copy-ignore`},[o(`code`,{class:`twoslash-popup-code`},[o(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`function`),o(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},` hopeTheme`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`(`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-light-font-style":`inherit`,"--shiki-dark":`#E06C75`,"--shiki-dark-font-style":`italic`}},`themeOptions`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),o(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeOptions`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`, `),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-light-font-style":`inherit`,"--shiki-dark":`#E06C75`,"--shiki-dark-font-style":`italic`}},`behaviorOptions`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#C678DD`}},`?`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),o(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeBehaviorOptions`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},` |`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#E5C07B`}},` boolean`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`)`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),o(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeFunction`)]),o(`div`,{class:`twoslash-popup-docs`,"vp-content":``},[o(`p`,null,`VuePress Theme Hope`)]),o(`div`,{class:`twoslash-popup-docs twoslash-popup-docs-tags`,"vp-content":``},[o(`span`,{class:`twoslash-popup-docs-tag`},[o(`span`,{class:`twoslash-popup-docs-tag-name`},`@param`),o(`span`,{class:`twoslash-popup-docs-tag-value`},[o(`code`,null,`themeOptions`),r(`  - Theme options`)])]),o(`span`,{class:`twoslash-popup-docs-tag`},[o(`span`,{class:`twoslash-popup-docs-tag-name`},`@param`),o(`span`,{class:`twoslash-popup-docs-tag-value`},[o(`code`,null,`behaviorOptions`),r(`  - Theme behavior options`)])]),o(`span`,{class:`twoslash-popup-docs-tag`},[o(`span`,{class:`twoslash-popup-docs-tag-name`},`@returns`),o(`span`,{class:`twoslash-popup-docs-tag-value`},`VuePress theme instance`)])])],-1)]]),default:a(()=>[l[9]||=o(`span`,null,`hopeTheme`,-1)]),_:1})]),l[13]||=o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`({`,-1)]),l[28]||=r(`
`,-1),o(`span`,y,[l[16]||=o(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},`  `,-1),o(`span`,b,[n(E,{class:`twoslash-hover`,"popper-class":`shiki twoslash-floating vp-copy-ignore vp-code`,theme:`twoslash`},{popper:a(({})=>[...l[14]||=[o(`span`,{class:`twoslash-popup-container vp-copy-ignore`},[o(`code`,{class:`twoslash-popup-code`},[o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E5C07B`}},`ThemeOptions`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`.`),o(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},`markdown`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#C678DD`}},`?:`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E06C75`}},` ThemeMarkdownOptions`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#56B6C2`}},` |`),o(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` undefined`)]),o(`div`,{class:`twoslash-popup-docs`,"vp-content":``},[o(`p`,null,`Theme markdown options`),r(`
`),o(`p`,null,`主题 Markdown 选项`)])],-1)]]),default:a(()=>[l[15]||=o(`span`,null,`markdown`,-1)]),_:1})]),l[17]||=o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`,-1),l[18]||=o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},` {`,-1)]),l[29]||=r(`
`,-1),o(`span`,x,[l[21]||=o(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},`    `,-1),o(`span`,S,[n(E,{class:`twoslash-hover`,"popper-class":`shiki twoslash-floating vp-copy-ignore vp-code`,theme:`twoslash`},{popper:a(({})=>[...l[19]||=[o(`span`,{class:`twoslash-popup-container vp-copy-ignore`},[o(`code`,{class:`twoslash-popup-code`},[o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E5C07B`}},`MarkdownChartPluginOptions`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`.`),o(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},`plantuml`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#C678DD`}},`?:`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E06C75`}},` boolean`),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#56B6C2`}},` |`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E06C75`}},` MarkdownItPlantumlOptions`),o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`[] `),o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#56B6C2`}},`|`),o(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` undefined`)]),o(`div`,{class:`twoslash-popup-docs`,"vp-content":``},[o(`p`,null,`Whether enable plantuml support`),r(`
`),o(`p`,null,`是否启用 plantuml 支持`)]),o(`div`,{class:`twoslash-popup-docs twoslash-popup-docs-tags`,"vp-content":``},[o(`span`,{class:`twoslash-popup-docs-tag`},[o(`span`,{class:`twoslash-popup-docs-tag-name`},`@default`),o(`span`,{class:`twoslash-popup-docs-tag-value`},`false`)])])],-1)]]),default:a(()=>[l[20]||=o(`span`,null,`plantuml`,-1)]),_:1})]),l[22]||=o(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`,-1),l[23]||=o(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` true`,-1),l[24]||=o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`,`,-1)]),l[30]||=r(`
`,-1),l[31]||=o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`  },`)],-1),l[32]||=r(`
`,-1),l[33]||=o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`});`)],-1)])])])]),l[74]||=i(`<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h2><p>你可以插入<a href="https://plantuml.com/zh/" target="_blank" rel="noopener noreferrer">plantuml</a> 支持的相同内容，例如:</p><div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@startuml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">内容</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@enduml</span></span></code></pre></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>`,4),n(D,{title:`序列图`},{content:a(()=>[...l[35]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/ZP3DIiD0483l-nJp0aAyzY1LF8eNdo3QK0hRR6YJUxLgYX9RKGa84eN4WcXZG4aX_hoCCrdVGdQ3qOC5vpZpVVFNxBjcp_MwdAtopeu5Iokm9hOR86UnJ7TbcbEsnvZ9NQ3H18yY6XxWuJDZ0E1misChMadQ_jRe9C5no9Z5-nPGD2cd0SQPV4h-PLUeOg3T4vu3D3gL_XtcMNcvJzT--V2cY_N26w8D3S2N0KwFvUmHNo_el42_e331zr2pEhWG3YmRXa7tDp_PtvtqwUkRMr0rg27BRlqriYpEw2fQC58vrGTmVFin7zHFM7n-cd_w0SO1OqfkMdRBw_8l`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[36]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startuml`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`Alice -> Bob: 认证请求`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`alt 成功情况`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`   plain Bob -> Alice: 认证接受`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`else 某种失败情况`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`   plain Bob -> Alice: 认证失败`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    group 我自己的标签`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    Alice -> Log : 开始记录攻击日志`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`         loop 1000次`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`            Alice -> Bob: DNS 攻击`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`        end`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    Alice -> Log : 结束记录攻击日志`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    end`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`else 另一种失败`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`   plain Bob -> Alice: 请重复`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`end`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@enduml`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`用例图`},{content:a(()=>[...l[37]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/NK-xRiCm3Dpr5OTCyH0F6JqKoGSqIvkj2oEpDGkPCamcoESNaeoYw7Ol7icJEQr-drCONaaKvt4M7K3MKDXVZU4JWvObIIINh5snYz65S3LUSNZ1_gtqT1ilGlDh2mv_5CtEMELhSkJFjWK3tYSnY84K_AHvITp_ZxRvCweQIK79ShWniiBumIib956sm3hMrDQmg-KLYY5cLOxEuuTw_XtCjs-ERlsk_7OvXkqVz7rXbsC1xO0JwtYVqmy0`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[38]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startuml`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`:Main Admin: as Admin`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`(Use the application) as (Use)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`User -> (Start)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`User --> (Use)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`Admin ---> (Use)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`note right of Admin : This is an example.`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`note right of (Use)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`A note can also`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`be on several lines`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`end note`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`note "This note is connected\\nto several objects." as N2`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`(Start) .. N2`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`N2 .. (Use)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@enduml`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`类图`},{content:a(()=>[...l[39]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/POzDJWCn38NtFeMNxQ8tOD4HHG89gCHqX11YuGbk2KgSAl48yNTtDEbKcOYL_VmzlpZhf1Hry0weJnh9A1f7AM4poLkRjB3pz38unqPj4B2Y7FTa6BEro9a7HeGNFwjLdLiiDPolrfxJ8_zzcLNPSp6bnqYVcS7qn_C0lm5nsx-pqUSNPCUUHJUa18Z9Vl5Y2Ry0B8F7dVNSYJsjR9gd5X2ljzt3MEzkxhlTLJjwIIGevSlQuNYCdD8ZHR5oI1LiIZi6piY7rJVqx7kE2H1RZLOEk0zXiIoofvXlMxEy3jxz0G00`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[40]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startuml`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`abstract class AbstractList`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`abstract AbstractCollection`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`interface List`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`interface Collection`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`List <|-- AbstractList`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`Collection <|-- AbstractCollection`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`Collection <|- List`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`AbstractCollection <|- AbstractList`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`AbstractList <|-- ArrayList`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`class ArrayList {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  Object[] elementData`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  size()`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`enum TimeUnit {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  DAYS`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  HOURS`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  MINUTES`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`annotation SuppressWarnings`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`annotation Annotation {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  annotation with members`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  String foo()`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  String bar()`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@enduml`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`活动图`},{content:a(()=>[...l[41]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/PP51RiCW44Ntd6AMzYO7m8j6YjIgkoWv0JBVDWeUNC2DSliACAdRx4Ry_uStCySGbO_hR4KkX3nPqz-kyDyMyJ0frXONVAq8iMax8HbtMjI8JfY1chCQSN1yHRzw4n-d2VsjfJY1gOb-HIk8v6RwP9DR4AMa2U_EtvNNRzNFBhcJtxiU8L3lE7fdGvUVKoYz65v1Ix4O7b_YH26w9PTWRGQHoiKgmzk_PnVYC_L0gB7AcVJ2IGGRi6zTFH_ujUHFzk85hE6BNjJIPb0se1KRLOBHZZoqyUXVY6GLwgnTxh9jJpiQ_gtlEOdS5ak-d2rZ_9b35i9yHugO5wiYThG5CA_n2DRhR7y0`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[42]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startuml`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`start`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`:ClickServlet.handleRequest();`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`:new page;`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`if (Page.onSecurityCheck) then (true)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  :Page.onInit();`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  if (isForward?) then (no)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    :Process controls;`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    if (continue processing?) then (no)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      stop`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    endif`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`   plain if (isPost?) then (yes)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      :Page.onPost();`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    else (no)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      :Page.onGet();`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    endif`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    :Page.onRender();`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  endif`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`else (false)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`endif`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`if (do redirect?) then (yes)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  :redirect process;`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`else`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  if (do forward?) then (yes)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    :Forward request;`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  else (no)`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    :Render page template;`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  endif`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`endif`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`stop`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@enduml`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`组件图`},{content:a(()=>[...l[43]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/RO_1QiCm44Jl-ef1TnzAUouf9MulfGNxPd9Gh6rZ8caTIOQ4udyFab9iGc_BpEoRtKs8oiV96Z6g_gX-2B9XItZpF8qIlm9uRzilLEZgmOU8LxOZEt9n9u3knN4ya5-hin2EDK5-PYU3GY7L1THGpqxVaUxfgAhdj91ulU59PqAtFIix6i93Bj8gghqA1FbnQKwcj7opqUGXsyCGC0JOoqqgTkegYSTKFASDhon1rinB94jF9J4ByS-d-SBrGQkvU4lFCjwSF_o6d9wikG80`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[44]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startuml`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`package "Some Group" {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  HTTP - [First Component]`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  [Another Component]`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`node "Other Groups" {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  FTP - [Second Component]`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  [First Component] --> FTP`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`cloud {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  [Example 1]`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`database "MySql" {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  folder "This is my folder" {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    [Folder 3]`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  }`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  frame "Foo" {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    [Frame 4]`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  }`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`[Another Component] --> [Example 1]`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`[Example 1] --> [Folder 3]`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`[Folder 3] --> [Frame 4]`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@enduml`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`状态图`},{content:a(()=>[...l[45]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/TP2n3eCm34HtVuNdIWpGhK8H_z2nxO28KMaXaI3yVsKJfo1WS-xUuSFL5Eenp4CFKwW3eJnpnBAKoPYeDs_VDPHZMIvJCbe_VdFa04z9_lZE5IBpb6HozeeYaxF603mkBtvZbfcquuRjw8UbojC57mtGRcSiJe56yki8ACSPhHepYoKqEnjKw-zHTZQe_j8U9MTZ9G3TdN7aphT8tTaINawq8YDOu0a9QXyq5k9VE6uKKa--8ybP0FtE0SbM0YjoTXxw7m00`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[46]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startuml`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`state start1  <<start>>`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`state choice1 <<choice>>`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`state fork1   <<fork>>`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`state join2   <<join>>`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`state end3    <<end>>`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`[*]     --> choice1 : from start\\nto choice`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`start1  --> choice1 : from start stereo\\nto choice`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`choice1 --> fork1   : from choice\\nto fork`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`choice1 --> join2   : from choice\\nto join`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`choice1 --> end3    : from choice\\nto end stereo`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`fork1   ---> State1 : from fork\\nto state`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`fork1   --> State2  : from fork\\nto state`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`State2  --> join2   : from state\\nto join`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`State1  --> [*]     : from state\\nto end`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`join2   --> [*]     : from join\\nto end`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@enduml`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`对象图`},{content:a(()=>[...l[47]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuSfFoafDBb7moSzBoS-3yS8JYpCoyz9B429EgKKvcN2UNsfvP7vHDXTNRcA1WdDYGMP9OevpPacbGZMNGgYtWfQk7Sn0XT1WHmKjNLqxP3CLt5EBSXFpAa4IkdOmiskvkA3cAe14aOoriWeDTkHoICrBAStD0G00`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[48]||=[o(`div`,{class:`language-`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startuml`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`object London`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`object Washington`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`object Berlin`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`object NewYork`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`map CapitalCity {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,` UK *-> London`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,` USA *--> Washington`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,` Germany *---> Berlin`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`NewYork --> CapitalCity::USA`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@enduml`)])])])],-1)]]),_:1}),n(D,{title:`部署图`},{content:a(()=>[...l[49]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuShBJqbLUD7LzBnffu8X2iy8XMUCmZD1uPbomGnGqDM5QrUmKdYseFtvsdqAXWXvFJsuWGXv8uHyNHtS2eIyCKBUrXPXgKDgNaffRWu0`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[50]||=[o(`div`,{class:`language-`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startuml`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`node 节点 1`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`node 节点 2`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`node 节点 3`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`node 节点 4`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`node 节点 5`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`节点 1 -- 节点 2 : 标签 1`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`节点 1 .. 节点 3 : 标签 2`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`节点 1 ~~ 节点 4 : 标签 3`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`节点 1 == 节点 5`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@enduml`)])])])],-1)]]),_:1}),n(D,{title:`时序图`},{content:a(()=>[...l[51]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/RLBBIiD05DtVhxZ4fHGpAGe6AR7O-1cIPCPsw9YK93MwquqeABXGf53thjekn8L5-pCchNyXaxR9HDtTEUVadFk85SLE6FTF14IU8nXkenCXsTQnny-OY00y4NXTz4GN4nvtiCT27b0au7BV2SzHI-_7yuSNJNx6_09TZATRwTKWXyEaWBF7INOtoeOtsUDrpj5Jy0BVun4ho8lf_7ss9DsIJ8UJzFb28HrAGm1hHzPc4lAO7Rci3HRH5OJv5C0Y-L1co1owqkoMm5AY0_EHHoY21AWhAqq_qpMGAUjN_LY3C2bKfxBI0QmolLO7NFfqUBjJOGp0mlUWjN_GRBLihQ8WAqkYegl0tAx0PSk_6v6LmcyILV7_G4PTayinLWxBbaaTIxrjsxRK69Nrb7a6mOevI0_1svrOEGd6WN8Et3WC13NJgu4gNfycrwxFWXivsnHzPYx6Km3gLlQ5UxK6AZEZYOlHv_nZb3szVJ-z_f7N6lbFKzaIclWrUyvkBy5YFksVY1y0`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[52]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startuml`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`scale 5 as 150 pixels`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`clock clk with period 1`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`binary "启用" as en`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`binary "读/写" as rw`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`binary "数据有效" as dv`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`concise "数据总线" as db`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`concise "地址总线" as addr`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@6 as :write_beg`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@10 as :write_end`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@15 as :read_beg`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@19 as :read_end`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@0`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`en is low`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`db is "0x0"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`addr is "0x03f"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rw is low`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`dv is 0`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@:write_beg-3`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,` en is high`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@:write_beg-2`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,` db is "0xDEADBEEF"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@:write_beg-1`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`dv is 1`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@:write_beg`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rw is high`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@:write_end`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rw is low`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`dv is low`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@:write_end+1`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rw is low`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`db is "0x0"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`addr is "0x23"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@12`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`dv is high`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@13 `)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`db is "0xFFFF"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@20`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`en is low`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`dv is low`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@21 `)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`db is "0x0"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`highlight :write_beg to :write_end #Gold:写`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`highlight :read_beg to :read_end #lightBlue:读`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`db@:write_beg-1 <-> @:write_end : 设置时间`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`db@:write_beg-1 -> addr@:write_end+1 : 保持`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@enduml`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`正则图`},{content:a(()=>[...l[53]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/SoWkIImgAKfDJwtWqhSfBgdCITM8ATRAISnBjzM8LbUArTJGqxBNZ37Ij8yfrjAmjofEpYz8JT6qjzE8ZYcE2OxLrhI9qGVhi-DoICrB0Hi50000`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[54]||=[o(`div`,{class:`language-`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startregex`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`/<style(\\s*lang=(['"])(.*?)\\2)?\\s*(?:scoped)?>([\\s\\S]+)<\\/style>`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@endregex`)])])])],-1)]]),_:1}),n(D,{title:`网络图`},{content:a(()=>[...l[55]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/bP3DIiD04CVlUOeXWeTIwkvIyL0jpQKlqVQG9aiRckw6tOGgqgErWaLB5Qpu089WYnUXsCT9WcyXAGdzMX6Pop0Vl_dFlo9zK_X1rzLOptRC5bng02t10m-OqshxxiMg0c1nbmiu0_sWMZKCmz1Bgx9DfIKSptSuIvgdXvRBhKuPejbTD7t-lXw5zpF8gkbEZpOHITUR22TPNmDWrEznqO7uQn8EFiBRHNePmBHjGQLC3X2C2kT9796YhYLzppKT1W21f09gUteyAYHdkMBXk5nd43-yHiDFh3TAAJhHWg6ck83paAK4wNdLgxoLAvRhB5wEe-4JmdfZ0qgKKF8NA7wR8fB8sp4b75p5ox7A4Nn2rewKjYpPVouRtd60A8V8UiZ-5OJKtaXFKDEMRKhzrMiGFSwZqNkuc22yXIM_OF5_iHjgFL-06elLQZtXi0nuCmb7y-Xb8JAXVQslLIYpWwxx0m00`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[56]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startuml`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`nwdiag {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  group nightly {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    color = "#FFAAAA";`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    description = "<&clock> 每晚重启 <&clock>";`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    web02;`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    db01;`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  }`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  network 缓冲区 {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      address = "210.x.x.x/24"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`   plain   user [description = "<&person*4.5>\\n 用户1"];`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      web01 [address = "210.x.x.1, 210.x.x.20",  description = "<&cog*4>\\n网战01"]`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      web02 [address = "210.x.x.2",  description = "<&cog*4>\\n网站02"];`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  }`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  network 内网 {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      address = "172.x.x.x/24";`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`   plain   web01 [address = "172.x.x.1"];`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      web02 [address = "172.x.x.2"];`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      db01 [address = "172.x.x.100",  description = "<&spreadsheet*4>\\n 数据库01"];`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      db02 [address = "172.x.x.101",  description = "<&spreadsheet*4>\\n 数据库02"];`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      ptr  [address = "172.x.x.110",  description = "<&print*4>\\n 打印机r01"];`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  }`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@enduml`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`图形界面`},{content:a(()=>[...l[57]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/BOwn2e9W58Nt-nHtRsYF21yZ40MZjcX8DnM4a182YmJB218SR2W88ShCNiRx__eMKN_RuJlVWIFfXZOrT6riWDa2iutTGQzn8XwaQ26vALrzjB2EbzKzHmkhzu7EMxJ111DfNt9lphmD5GvBOohy3bgeibrUpru2g6Y3t5UG5oSMb2oyqIDZppNRbZp9nVxNYqYBOxDBU7ofBmd8gA3mccXLX_xVja4cDsl2im8sIAF9yFlz0m00`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[58]||=[o(`div`,{class:`language-`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startsalt`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`{+`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`{/ <b>通用 | 全屏 | 行为 | 保存 }`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`{`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`{ 图片打开模式: | ^智能模式^ }`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`[X] 缩放时平滑显示图片`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`[X] 图片删除确认`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`[ ] 显示隐藏图片`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`[关闭]`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@endsalt`)])])])],-1)]]),_:1}),n(D,{title:`架构图`},{content:a(()=>[...l[59]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/fLN1Rjim33rFNq5amx0DS0SCsAL8Z7hkskIGpgY1d79XRIRHQb669BSBjlxx82UExImDckvcYezFV2HbNbY7nbMg4FPUSea65HZA7FAoeE7mZbRu8BK9G_WjtXXTSHvhmsJWorVn96nff2DuTvSOdP6ry1FDEPfi9HKw-dnNMSbaRL1kt3iyfcGUP4PxU2pBGcRefER0RX1jIAnLgPdO7GdA6emGEn4m62Fd1K5Me5G30BGmZc4ut6KTXZsXRxzjq-von5YwoX1CUA6Dgc_RKCMJKwbkj9EBzPoZF9UU1mj87TxJIXSv6Jlmh3THUYhj30kPewCwVdPgz8GVo3gvR0XELfNWkWvCNXGenZ5y2dBzo074awvr4wLTSzOrUi14Y7W2WP7BbGl2i0xqPMjFPcBMiIQYYqvw4v9co2nvMIkmMyCBQGPrNqZK3brlIYhhj283c2kMrfdjeA25REkASYLRrslky6Di3zrGE_wNFp6ItQlK9xXM_dc-C53iwXnKPH3wCNYcHXt08OaRhs__4VVic7CYcjmtTYB4hWnD-Dv1VtukTLRv-3bFaN59c-zqRHsfkZUNq_ezjp-n8ms-9YQ3nPpZsscF9BwT_aFoBCjOAuBt43tYUiw9BcHM_tAwwclISPH4BqwjHteb6JcJFjD3l5S7UFScm5Vbh2hF_eIxHzSzQqeklF3jsU4H4RMA1dAWqQ9Ef-7TD5k8WfR4EHIqSEBxBrHbGR0mMe5R4GmYls9iPP0pWWmjWNLLlXx0XnybyRNHLVdnJAH4OZGQZKJdhmVdpUQ3PlDj8Rk70UVGMLpGRBi6rXPj3zXkEF9BpUSlBeZpIXL_0G00`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[60]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startuml`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`skinparam rectangle<<behavior>> {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	roundCorner 25`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`sprite $bProcess jar:archimate/business-process`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`sprite $aService jar:archimate/application-service`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`sprite $aComponent jar:archimate/application-component`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "Handle claim"  as HC <<$bProcess>><<behavior>> #Business`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "Capture Information"  as CI <<$bProcess>><<behavior>> #Business`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "Notify\\nAdditional Stakeholders" as NAS <<$bProcess>><<behavior>> #Business`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "Validate" as V <<$bProcess>><<behavior>> #Business`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "Investigate" as I <<$bProcess>><<behavior>> #Business`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "Pay" as P <<$bProcess>><<behavior>> #Business`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`HC *-down- CI`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`HC *-down- NAS`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`HC *-down- V`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`HC *-down- I`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`HC *-down- P`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`CI -right->> NAS`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`NAS -right->> V`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`V -right->> I`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`I -right->> P`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "Scanning" as scanning <<$aService>><<behavior>> #Application`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "Customer admnistration" as customerAdministration <<$aService>><<behavior>> #Application`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "Claims admnistration" as claimsAdministration <<$aService>><<behavior>> #Application`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle Printing <<$aService>><<behavior>> #Application`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle Payment <<$aService>><<behavior>> #Application`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`scanning -up-> CI`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`customerAdministration  -up-> CI`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`claimsAdministration -up-> NAS`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`claimsAdministration -up-> V`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`claimsAdministration -up-> I`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`Payment -up-> P`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`Printing -up-> V`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`Printing -up-> P`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "Document\\nManagement\\nSystem" as DMS <<$aComponent>> #Application`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "General\\nCRM\\nSystem" as CRM <<$aComponent>>  #Application`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "Home & Away\\nPolicy\\nAdministration" as HAPA <<$aComponent>> #Application`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`rectangle "Home & Away\\nFinancial\\nAdministration" as HFPA <<$aComponent>>  #Application`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`DMS .up.|> scanning`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`DMS .up.|> Printing`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`CRM .up.|> customerAdministration`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`HAPA .up.|> claimsAdministration`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`HFPA .up.|> Payment`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`legend left`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`Example from the "Archisurance case study" (OpenGroup).`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`See`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`====`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`<$bProcess> :business process`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`====`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`<$aService> : application service`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`====`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`<$aComponent> : application component`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`endlegend`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@enduml`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`甘特图`},{content:a(()=>[...l[61]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/nPJ1Jjmm48RFyLFChQUaIIegfA8AKLHwA2qgN2h4OJQUPjquTh0dfTjgtnt5yMuIMCwSOe_j-R_VC_6fPtHSes4M9vutcZwAC3jNM3jiuRz867qpV9FFrl0tR0c-aFv3h2gCmKzMMmUEP9nVgty4nV5kDgI5bTN3yXbMpOMplP7ZeGj7P7wIrlP19CbNPMYChtHF8jcAf5MQF5j3UuJvXackF5h8AKQjgWE2c-TQ0Nmh4cFvgSevkYOWBfpbY-FV7PgQViGaw9nzUANh2e7n_76MVoZUPJlIcxMg6aFUGuXjHUAfGuTiNM0TTEgPZbRrcdV6brcdf7CVIv4Yx9cylJ_aRRgAhdUT7lWlqTNAm53AAvHIcHhA4PTLIrgDNG00y1JuJFdxs36LjfxaGLkTCitp8cp5LfoyZTr_vUnlgXZ2Z-61rmHbNkPfKQPv8SJj3Vgck0D7zxrovA78GUB62zyRYHj0Hp02217wQMMPRIi0Mcfj0LcMnN4Pn_ItqsYGbJM-E10Rzv6HCEIB1EMCe8m4kuL87i40Vp4vYDnlF92H8atXUbz_Lgm9qbJSNXPtiCQk8-F16ZXwES7-iLZsqL2PULDYrKnLpMTL3KNTt_d0CnXCKt5AHeO7w140`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[62]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startgantt`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`<style>`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`ganttDiagram {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	task {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontName Helvetica`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontColor red`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontSize 18`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontStyle bold`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		BackGroundColor GreenYellow`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		LineColor blue`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	milestone {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontColor blue`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontSize 25`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontStyle italic`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		BackGroundColor yellow`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		LineColor red`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	note {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontColor DarkGreen`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontSize 10`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		LineColor OrangeRed`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	arrow {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontName Helvetica`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontColor red`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontSize 18`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontStyle bold`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		BackGroundColor GreenYellow`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		LineColor blue`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		LineStyle 8.0;13.0`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		LineThickness 3.0`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	separator {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		BackgroundColor lightGreen`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		LineStyle 8.0;3.0`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		LineColor red`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		LineThickness 1.0`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontSize 16`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontStyle bold`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontColor purple`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		Margin 5`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		Padding 20`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	timeline {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	    BackgroundColor Bisque`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	closed {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		BackgroundColor pink`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		FontColor red`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`</style>`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`Project starts the 2020-12-01`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`[Task1] requires 10 days`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`sunday are closed`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`note bottom`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  memo1 ...`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  memo2 ...`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  explanations1 ...`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  explanations2 ...`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`end note`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`[Task2] requires 20 days`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`[Task2] starts 10 days after [Task1]'s end`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`-- Separator title --`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`[M1] happens on 5 days after [Task1]'s end`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`<style>`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	separator {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	    LineColor black`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		Margin 0`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		Padding 0`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`</style>`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`-- end --`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@endgantt`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`思维导图`},{content:a(()=>[...l[63]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/JP6xRiCm34LtVWMd3bwAxgaGeCxak05gjEWgMxGjGA84FThwxmlPJk29zznBa7gSOv8XMStAIW-3z4axnb5FEH2-GDB94BOBnkmfu8e05PwUHYCdKLEl9KDLZCcudiHddpbbgAeAhvhp7xQQqufDFaG7tTGNV2TtdnAadyMrhIyR-smYYSwPHNqtkqNE6n9T8cbltUQLMuWF6Nqv3_xgDAF47meB6iSJihIqBZl5jSlsm-av2dmLUElQjsEqZFeUVJcJhNO0Cqb50HxFi3EnsXKCn8a2ZiwLycZS6C3GHAmmw6bEWDZDBfIwsMNEhix4Ql-BVm00`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[64]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startmindmap`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`caption figure 1`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`title My super title`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`* <&flag>Debian`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`** <&globe>Ubuntu`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`*** Linux Mint`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`*** Kubuntu`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`*** Lubuntu`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`*** KDE Neon`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`** <&graph>LMDE`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`** <&pulse>SolydXK`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`** <&people>SteamOS`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`** <&star>Raspbian with a very long name`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`*** <s>Raspmbc</s> => OSMC`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`*** <s>Raspyfi</s> => Volumio`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`header`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`My super header`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`endheader`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`center footer My super footer`)]),r(`
`),o(`span`,{class:`line`},[o(`span`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`legend right`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  Short`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  legend`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`endlegend`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@endmindmap`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`工作分解结构图`},{content:a(()=>[...l[65]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/DK-xRiCm3Dpr5Pow2Fg7034Gj2WwE4XsMM8T8ZBfYdID_7qXsntlXRixgSLgww3EmnUky263ynuwJ9GHX1i1FVuiL752DdNUUtZFo4RsWZ7EEzFZBxLujq4FLnevt6RubWf9bgfu27Sf2njYtM6FCHEFpli0vmUcPo6r9WNeKMTXfO4A6Utv09-Ief5mMtc-msqk4ZDqmhZjsAWS3VEnOyPIY4TuWqkDqnIFtgqBcb5T2270zKcb_7z9TI5hTq79K24zH97T2JclW_u1`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[66]||=[o(`div`,{class:`language- line-numbers-mode`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startwbs`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`+ New Job`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`++ Decide on Job Requirements`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`+++ Identity gaps`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`+++ Review JDs`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`++++ Sign-Up for courses`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`++++ Volunteer`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`++++ Reading`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`++- Checklist`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`+++- Responsibilities`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`+++- Location`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`++ CV Upload Done`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`+++ CV Updated`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`++++ Spelling & Grammar`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`++++ Check dates`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`---- Skills`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`+++ Recruitment sites chosen`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@endwbs`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})])],-1)]]),_:1}),n(D,{title:`JSON`},{content:a(()=>[...l[67]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/RP6nRi8m48PtFyNfkeAQX8IYJA1k7R8meQg3ImnswzYHVMc5AjwzyYL4GcAnTD_vFl-sjv5aeA_edNZIvgojEMi2j39I8pk5TrIsRL0n8Zm37WrTxhkzzaurG_UfmhWbuzKnGV4d0F1amYIk0T-yThX8U3wk1jntXlI8JTnPyvCeXK4nakTK5fkncFBKaEG062aeHRiPOv53uLhOCsSfJD5hm4Rzmi67xnkF98aZD8SRwdqaQLzzoppFiY9Vhl8iGm5mvGntjwxXdUV6E018bvudjU_Kv8JvIJXV0LLLBVDYLIAthul71dywcUD3nxfSiwEirY-JGm1ySBgZDhODogLa8ucz7s8oki5QSHLRvThq_Vy0`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[68]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startjson`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`#highlight "lastName"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`#highlight "address" / "city"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`#highlight "phoneNumbers" / "0" / "number"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`{`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  "firstName": "John",`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  "lastName": "Smith",`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  "isAlive": true,`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  "age": 28,`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  "address": {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    "streetAddress": "21 2nd Street",`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    "city": "New York",`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    "state": "NY",`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    "postalCode": "10021-3100"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  },`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  "phoneNumbers": [`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      "type": "home",`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      "number": "212 555-1234"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    },`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    {`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      "type": "office",`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`      "number": "646 555-4567"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`    }`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  ],`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  "children": [],`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`  "spouse": null`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`}`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@endjson`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`YAML`},{content:a(()=>[...l[69]||=[o(`img`,{src:`https://www.plantuml.com/plantuml/svg/NP11ZiCm24NNvXGewtgagErYlEfLc1WdbXmJOJoTt7wKPDSL7o7--_1gHcexhGMYSC21C3Bh3GaJhrJuR0TGsg-XoeQIS9OIkMBhTO0j1xn_ZO_n-Gr_AxM0ffqXATTfyGlN5l0E4vMIw-n_iiOM49p7fVD-rCZlInJfcG-HbEFfvLDEjlXuuC5zU2Jf2kw3uwveNdETMy0dk8tKDCUPJwoRf5SBE89pHIQoBFKyRMDID6KUm5bNA-oZ_1vBzXPuSOt7c_u1`,alt:`PlantUML Diagram`},null,-1)]]),code:a(()=>[...l[70]||=[o(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[o(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[o(`code`,{class:`language-`},[o(`span`,{class:`line`},[o(`span`,null,`@startyaml`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`doe: "a deer, a female deer"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`ray: "a drop of golden sun"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`pi: 3.14159`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`xmas: true`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`french-hens: 3`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`calling-birds: `)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	- huey`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	- dewey`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	- louie`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	- fred`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`xmas-fifth-day: `)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	calling-birds: four`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	french-hens: 3`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	golden-rings: 5`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	partridges: `)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		count: 1`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`		location: "a pear tree"`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`	turtle-doves: two`)]),r(`
`),o(`span`,{class:`line`},[o(`span`,null,`@endyaml`)])])]),o(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`}),o(`div`,{class:`line-number`})]),o(`div`,{class:`collapsed-lines`})],-1)]]),_:1})])}var w=c(u,[[`render`,C]]);export{l as _pageData,w as default};