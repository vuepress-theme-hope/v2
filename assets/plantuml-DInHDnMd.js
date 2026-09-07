import{N as e,Y as t,h as n,m as r,p as i,s as a,u as o,z as s}from"./runtime-core.esm-bundler-4CuugG1F.js";import{t as c}from"./app-CEb-Ce1d.js";var l=JSON.parse(`{"path":"/zh/guide/markdown/chart/plantuml.html","title":"Plantuml","lang":"zh-CN","frontmatter":{"title":"Plantuml","icon":"diagram-project","category":["Markdown"],"tag":["Markdown","图表"],"description":"让你站点中的 Markdown 文件支持 plantuml。","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Plantuml\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-18T10:11:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/zh/guide/markdown/chart/plantuml.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Plantuml"}],["meta",{"property":"og:description","content":"让你站点中的 Markdown 文件支持 plantuml。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-06-18T10:11:41.000Z"}],["meta",{"property":"article:tag","content":"图表"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:modified_time","content":"2025-06-18T10:11:41.000Z"}],["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.gitee.io/v2/guide/markdown/chart/plantuml.html"}],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"git":{"createdTime":1622901613000,"updatedTime":1750241501000,"contributors":[{"name":"Mr.Hope","username":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":39,"avatar":"https://avatars.githubusercontent.com/Mister-Hope?v=4","url":"https://github.com/Mister-Hope"},{"name":"FuckDoctors","username":"FuckDoctors","email":"1180450+FuckDoctors@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/FuckDoctors?v=4","url":"https://github.com/FuckDoctors"},{"name":"Nan Huang","username":"","email":"teddyhuangnan@gmail.com","commits":1,"avatar":"https://gravatar.com/avatar/90a4a1b29ff0194b5fe0b2bce9174ced3f331df48f8d118ca6ff0ba1cd7b6bc1?d=retro"}],"changelog":[{"hash":"660a5c1a6b2152df53a77a259a707b2306e07af0","time":1750241501000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat: support new chart plugin (#4958)"},{"hash":"55e920bec840b3f17d7a95a62eab4ade3808a410","time":1744577429000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"b12301e87c66b38b46983e2c3a09a444f0347520","time":1739862488000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): add twoslash"},{"hash":"22787ac127e25c078638b854eec74f2caa44598c","time":1733510882000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat!: replace plugins with official ones and rebuild markdown options (#4553)"},{"hash":"913bbe7e077d38bd3f052c70184686cb03ddc5f6","time":1713694647000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat: add plantuml feature"},{"hash":"b41c0c8581ffe48b6af526833988b39116a2b70e","time":1711651596000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): update docs"},{"hash":"54c46e02b710e103d2a2ed2ae2e9fc1a6945bc66","time":1706265017000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"55ea333761b5da44d6823bac1686a3cc49648e45","time":1699596334000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: rebuild docs"},{"hash":"792dc1ad432c6225083427123c2ea050aeea2859","time":1698991484000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"4a8a94c3fb17978260b801262719082b615c9602","time":1698334353000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): support xychart"},{"hash":"83bffb717edde38b00af51a36297085af02494c8","time":1698186791000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"505a1cb009b2329e378912b372d7fc9797e560b1","time":1696835966000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): support new mermaid diagrams"},{"hash":"afae5f13ac7c0b53a2c5611a841fd249392278ba","time":1696755808000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(md-enhance): update docs"},{"hash":"f026b563675575a896acebedf3264aa15d509397","time":1684990888000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): use mermaid@10.2, improve title support"},{"hash":"16ff14eb2c9f5620952fe1107e938166db1bb94d","time":1682070077000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"chore(md-enhance): tweaks"},{"hash":"2a3066dd66371118a4dce2105899981a0775b9fe","time":1682044324000,"email":"teddyhuangnan@gmail.com","author":"Nan Huang","message":"docs: fix typos, grammar, and other minor issues (#3049)"},{"hash":"7aad23f59bae3e19a5742a0a91935bbaa0aa5f54","time":1677039538000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: fix typos"},{"hash":"3d95f10e0354b9d36d888f742892d1439ccfdd08","time":1676987930000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): use mermaid@v10"},{"hash":"0eb18c9421e6bbda98880d71c48ec9996af40a5f","time":1676546699000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update mermaid docs"},{"hash":"8174c8d95db9e1263c05f9b9b973706e45116dc4","time":1674031135000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): use fontawesome"},{"hash":"1e6b07aa6d55fb8da40a127a1a78f7ab18ba277e","time":1667390600000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): add mindmap support for mermaid"},{"hash":"2243ae4b7234b4d6693afd6c424c42952e936d85","time":1667283843000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"chore: fix typos"},{"hash":"a18c8c285877dea778f188710bf4873196fdb399","time":1662567109000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: fix typos"},{"hash":"2fa50e8c0b1da5d601e385f92e1ad99289d878aa","time":1661682432000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat: migrate to ESM (#2158)"},{"hash":"adca2e644df8cad86a2f257cf42766cf23cca012","time":1655600402000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: add c4c diagram"},{"hash":"3c8d63b5961afe7a8483703fc22ba6d98bab9bd7","time":1654100485000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): update docs"},{"hash":"9856d35d297e9fcaf87a4f8a06ad15beb339444d","time":1653396462000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(theme): rebuild structure sidebar sort"},{"hash":"235159dae1e6ba956ede13009df8f1f2aa4fc8e3","time":1653140346000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update codetab"},{"hash":"48bca69fdb2a5868997fca6ed1d7403ca2ec2241","time":1653133439000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): rebuild code tabs and support tabid"},{"hash":"9cdd7c8a34931ddf25d508f933789edf03839536","time":1653063647000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): change <code>@codetab</code> to <code>@tab</code>"},{"hash":"63d09732b624507bef4b45293e42c0a118fdee08","time":1652975675000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): rebuild codegroup"},{"hash":"f635dbc248799ae65d758fc4b465ebaad256f75a","time":1652876522000,"email":"1180450+FuckDoctors@users.noreply.github.com","author":"ZhaoBin","message":"feat(md-enhance): add ECharts support (#1840)"},{"hash":"fd39507183aacaad0734f8e60282b5b82b2d8caa","time":1651594078000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update related docs"},{"hash":"1eb77ab7301a56c85c7cd4b716ac88c13d30c06b","time":1650708947000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(theme): update docs"},{"hash":"fb70b870dcf706de4726ac998631c752de7fcbe1","time":1649426708000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"feat(md-enhance): add support for <code>git-graph</code> block"},{"hash":"f6ff04e4dfc7459f987616b210db1b29f42127f9","time":1645883271000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"docs(theme): update categories and tags"},{"hash":"04b8aaa8ed90add28d0eef11ce1c4e78a5e811f0","time":1644938939000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"docs: improve markdown"},{"hash":"3c199b0794e621eff6ec244ecd9ce6c8d3b60d47","time":1644936187000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"docs(theme): add docs"},{"hash":"019a875e31711ab8a5a49802e0183a3b3960fee4","time":1644765562000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"docs: fix typos"},{"hash":"ace60de4a0034b1dcfa2e8788ef63df4f03f4f51","time":1643270355000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"docs(md-enhance): add docs"},{"hash":"8e8753ee637a72c21cc9d3de1e848c03d9e03a7b","time":1622901613000,"email":"zhangbowang1998@gmail.com","author":"Mr.Hope","message":"feat: add md-enhance package"}]},"readingTime":{"minutes":4.93,"words":1479},"filePathRelative":"zh/guide/markdown/chart/plantuml.md","excerpt":"<p>让你站点中的 Markdown 文件支持 <a href=\\"https://plantuml.com/zh/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">plantuml</a>。</p>\\n","autoDesc":true}`),u={name:`plantuml.md`},d={class:`code-block-with-title`},f={class:`language-ts`,"data-highlighter":`shiki`,"data-ext":`ts`,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},p={class:`shiki shiki-themes one-light one-dark-pro vp-code twoslash lsp`},m={class:`language-ts`},h={class:`line`},g={style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},_={class:`line`},v={style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},y={class:`line`},b={style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},x={class:`line highlighted`},S={style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}};function C(c,l,u,C,w,T){let E=s(`v-menu`),D=s(`VPPreview`);return e(),o(`div`,null,[l[71]||=a(`p`,null,[r(`让你站点中的 Markdown 文件支持 `),a(`a`,{href:`https://plantuml.com/zh/`,target:`_blank`,rel:`noopener noreferrer`},`plantuml`),r(`。`)],-1),l[72]||=a(`h2`,{id:`设置`,tabindex:`-1`},[a(`a`,{class:`header-anchor`,href:`#设置`},[a(`span`,null,`设置`)])],-1),l[73]||=a(`p`,null,`你可以通过下方启用此功能:`,-1),a(`div`,d,[l[34]||=a(`div`,{class:`code-block-title-bar`,"data-title":`.vuepress/theme.ts`},[a(`span`,null,`.vuepress/theme.ts`)],-1),a(`div`,f,[a(`pre`,p,[a(`code`,m,[a(`span`,h,[l[2]||=a(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`import`,-1),l[3]||=a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},` { `,-1),a(`span`,g,[n(E,{class:`twoslash-hover`,"popper-class":`shiki twoslash-floating vp-copy-ignore vp-code`,theme:`twoslash`},{popper:t(({})=>[...l[0]||=[a(`span`,{class:`twoslash-popup-container vp-copy-ignore`},[a(`code`,{class:`twoslash-popup-code`},[a(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`const`),a(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},` hopeTheme`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},` (`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-light-font-style":`inherit`,"--shiki-dark":`#E06C75`,"--shiki-dark-font-style":`italic`}},`themeOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),a(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeOptions`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`, `),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-light-font-style":`inherit`,"--shiki-dark":`#E06C75`,"--shiki-dark-font-style":`italic`}},`behaviorOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#C678DD`}},`?`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),a(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeBehaviorOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},` |`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#E5C07B`}},` boolean`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`) `),a(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`=>`),a(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeFunction`)]),a(`div`,{class:`twoslash-popup-docs`,"vp-content":``},[a(`p`,null,`VuePress Theme Hope`)]),a(`div`,{class:`twoslash-popup-docs twoslash-popup-docs-tags`,"vp-content":``},[a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@param`),a(`span`,{class:`twoslash-popup-docs-tag-value`},[a(`code`,null,`themeOptions`),r(`  - Theme options`)])]),a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@param`),a(`span`,{class:`twoslash-popup-docs-tag-value`},[a(`code`,null,`behaviorOptions`),r(`  - Theme behavior options`)])]),a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@returns`),a(`span`,{class:`twoslash-popup-docs-tag-value`},`VuePress theme instance`)])])],-1)]]),default:t(()=>[l[1]||=a(`span`,null,`hopeTheme`,-1)]),_:1})]),l[4]||=a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},` } `,-1),l[5]||=a(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`from`,-1),l[6]||=a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` "vuepress-theme-hope"`,-1),l[7]||=a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`;`,-1)]),l[25]||=r(`
`,-1),l[26]||=a(`span`,{class:`line`},null,-1),l[27]||=r(`
`,-1),a(`span`,_,[l[10]||=a(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`export`,-1),l[11]||=a(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#C678DD`}},` default`,-1),l[12]||=a(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},` `,-1),a(`span`,v,[n(E,{class:`twoslash-hover`,"popper-class":`shiki twoslash-floating vp-copy-ignore vp-code`,theme:`twoslash`},{popper:t(({})=>[...l[8]||=[a(`span`,{class:`twoslash-popup-container vp-copy-ignore`},[a(`code`,{class:`twoslash-popup-code`},[a(`span`,{style:{"--shiki-light":`#A626A4`,"--shiki-dark":`#C678DD`}},`function`),a(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},` hopeTheme`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`(`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-light-font-style":`inherit`,"--shiki-dark":`#E06C75`,"--shiki-dark-font-style":`italic`}},`themeOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),a(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeOptions`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`, `),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-light-font-style":`inherit`,"--shiki-dark":`#E06C75`,"--shiki-dark-font-style":`italic`}},`behaviorOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#C678DD`}},`?`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),a(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeBehaviorOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},` |`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#E5C07B`}},` boolean`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`)`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`),a(`span`,{style:{"--shiki-light":`#C18401`,"--shiki-dark":`#E5C07B`}},` ThemeFunction`)]),a(`div`,{class:`twoslash-popup-docs`,"vp-content":``},[a(`p`,null,`VuePress Theme Hope`)]),a(`div`,{class:`twoslash-popup-docs twoslash-popup-docs-tags`,"vp-content":``},[a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@param`),a(`span`,{class:`twoslash-popup-docs-tag-value`},[a(`code`,null,`themeOptions`),r(`  - Theme options`)])]),a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@param`),a(`span`,{class:`twoslash-popup-docs-tag-value`},[a(`code`,null,`behaviorOptions`),r(`  - Theme behavior options`)])]),a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@returns`),a(`span`,{class:`twoslash-popup-docs-tag-value`},`VuePress theme instance`)])])],-1)]]),default:t(()=>[l[9]||=a(`span`,null,`hopeTheme`,-1)]),_:1})]),l[13]||=a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`({`,-1)]),l[28]||=r(`
`,-1),a(`span`,y,[l[16]||=a(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},`  `,-1),a(`span`,b,[n(E,{class:`twoslash-hover`,"popper-class":`shiki twoslash-floating vp-copy-ignore vp-code`,theme:`twoslash`},{popper:t(({})=>[...l[14]||=[a(`span`,{class:`twoslash-popup-container vp-copy-ignore`},[a(`code`,{class:`twoslash-popup-code`},[a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E5C07B`}},`ThemeOptions`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`.`),a(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},`markdown`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#C678DD`}},`?:`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E06C75`}},` ThemeMarkdownOptions`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#56B6C2`}},` |`),a(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` undefined`)]),a(`div`,{class:`twoslash-popup-docs`,"vp-content":``},[a(`p`,null,`Theme markdown options`),r(`
`),a(`p`,null,`主题 Markdown 选项`)])],-1)]]),default:t(()=>[l[15]||=a(`span`,null,`markdown`,-1)]),_:1})]),l[17]||=a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`,-1),l[18]||=a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},` {`,-1)]),l[29]||=r(`
`,-1),a(`span`,x,[l[21]||=a(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},`    `,-1),a(`span`,S,[n(E,{class:`twoslash-hover`,"popper-class":`shiki twoslash-floating vp-copy-ignore vp-code`,theme:`twoslash`},{popper:t(({})=>[...l[19]||=[a(`span`,{class:`twoslash-popup-container vp-copy-ignore`},[a(`code`,{class:`twoslash-popup-code`},[a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E5C07B`}},`MarkdownChartPluginOptions`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`.`),a(`span`,{style:{"--shiki-light":`#E45649`,"--shiki-dark":`#E06C75`}},`plantuml`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#C678DD`}},`?:`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E06C75`}},` boolean`),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#56B6C2`}},` |`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#E06C75`}},` MarkdownItPlantumlOptions`),a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`[] `),a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#56B6C2`}},`|`),a(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` undefined`)]),a(`div`,{class:`twoslash-popup-docs`,"vp-content":``},[a(`p`,null,`Whether enable plantuml support`),r(`
`),a(`p`,null,`是否启用 plantuml 支持`)]),a(`div`,{class:`twoslash-popup-docs twoslash-popup-docs-tags`,"vp-content":``},[a(`span`,{class:`twoslash-popup-docs-tag`},[a(`span`,{class:`twoslash-popup-docs-tag-name`},`@default`),a(`span`,{class:`twoslash-popup-docs-tag-value`},`false`)])])],-1)]]),default:t(()=>[l[20]||=a(`span`,null,`plantuml`,-1)]),_:1})]),l[22]||=a(`span`,{style:{"--shiki-light":`#0184BC`,"--shiki-dark":`#ABB2BF`}},`:`,-1),l[23]||=a(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` true`,-1),l[24]||=a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`,`,-1)]),l[30]||=r(`
`,-1),l[31]||=a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`  },`)],-1),l[32]||=r(`
`,-1),l[33]||=a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#383A42`,"--shiki-dark":`#ABB2BF`}},`});`)],-1)])])])]),l[74]||=i(`<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h2><p>你可以插入<a href="https://plantuml.com/zh/" target="_blank" rel="noopener noreferrer">plantuml</a> 支持的相同内容，例如:</p><div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@startuml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">内容</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@enduml</span></span></code></pre></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>`,4),n(D,{title:`序列图`},{content:t(()=>[...l[35]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/ZP3DIiD0483l-nJp0aAyzY1LF8eNdo3QK0hRR6YJUxLgYX9RKGa84eN4WcXZG4aX_hoCCrdVGdQ3qOC5vpZpVVFNxBjcp_MwdAtopeu5Iokm9hOR86UnJ7TbcbEsnvZ9NQ3H18yY6XxWuJDZ0E1misChMadQ_jRe9C5no9Z5-nPGD2cd0SQPV4h-PLUeOg3T4vu3D3gL_XtcMNcvJzT--V2cY_N26w8D3S2N0KwFvUmHNo_el42_e331zr2pEhWG3YmRXa7tDp_PtvtqwUkRMr0rg27BRlqriYpEw2fQC58vrGTmVFin7zHFM7n-cd_w0SO1OqfkMdRBw_8l`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[36]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startuml`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`Alice -> Bob: 认证请求`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`alt 成功情况`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`   plain Bob -> Alice: 认证接受`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`else 某种失败情况`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`   plain Bob -> Alice: 认证失败`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    group 我自己的标签`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    Alice -> Log : 开始记录攻击日志`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`         loop 1000次`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`            Alice -> Bob: DNS 攻击`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`        end`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    Alice -> Log : 结束记录攻击日志`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    end`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`else 另一种失败`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`   plain Bob -> Alice: 请重复`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`end`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@enduml`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`用例图`},{content:t(()=>[...l[37]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/NK-xRiCm3Dpr5OTCyH0F6JqKoGSqIvkj2oEpDGkPCamcoESNaeoYw7Ol7icJEQr-drCONaaKvt4M7K3MKDXVZU4JWvObIIINh5snYz65S3LUSNZ1_gtqT1ilGlDh2mv_5CtEMELhSkJFjWK3tYSnY84K_AHvITp_ZxRvCweQIK79ShWniiBumIib956sm3hMrDQmg-KLYY5cLOxEuuTw_XtCjs-ERlsk_7OvXkqVz7rXbsC1xO0JwtYVqmy0`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[38]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startuml`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:Main Admin: as Admin`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`(Use the application) as (Use)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`User -> (Start)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`User --> (Use)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`Admin ---> (Use)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`note right of Admin : This is an example.`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`note right of (Use)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`A note can also`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`be on several lines`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`end note`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`note "This note is connected\\nto several objects." as N2`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`(Start) .. N2`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`N2 .. (Use)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@enduml`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`类图`},{content:t(()=>[...l[39]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/POzDJWCn38NtFeMNxQ8tOD4HHG89gCHqX11YuGbk2KgSAl48yNTtDEbKcOYL_VmzlpZhf1Hry0weJnh9A1f7AM4poLkRjB3pz38unqPj4B2Y7FTa6BEro9a7HeGNFwjLdLiiDPolrfxJ8_zzcLNPSp6bnqYVcS7qn_C0lm5nsx-pqUSNPCUUHJUa18Z9Vl5Y2Ry0B8F7dVNSYJsjR9gd5X2ljzt3MEzkxhlTLJjwIIGevSlQuNYCdD8ZHR5oI1LiIZi6piY7rJVqx7kE2H1RZLOEk0zXiIoofvXlMxEy3jxz0G00`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[40]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startuml`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`abstract class AbstractList`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`abstract AbstractCollection`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`interface List`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`interface Collection`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`List <|-- AbstractList`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`Collection <|-- AbstractCollection`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`Collection <|- List`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`AbstractCollection <|- AbstractList`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`AbstractList <|-- ArrayList`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`class ArrayList {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  Object[] elementData`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  size()`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`enum TimeUnit {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  DAYS`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  HOURS`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  MINUTES`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`annotation SuppressWarnings`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`annotation Annotation {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  annotation with members`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  String foo()`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  String bar()`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@enduml`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`活动图`},{content:t(()=>[...l[41]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/PP51RiCW44Ntd6AMzYO7m8j6YjIgkoWv0JBVDWeUNC2DSliACAdRx4Ry_uStCySGbO_hR4KkX3nPqz-kyDyMyJ0frXONVAq8iMax8HbtMjI8JfY1chCQSN1yHRzw4n-d2VsjfJY1gOb-HIk8v6RwP9DR4AMa2U_EtvNNRzNFBhcJtxiU8L3lE7fdGvUVKoYz65v1Ix4O7b_YH26w9PTWRGQHoiKgmzk_PnVYC_L0gB7AcVJ2IGGRi6zTFH_ujUHFzk85hE6BNjJIPb0se1KRLOBHZZoqyUXVY6GLwgnTxh9jJpiQ_gtlEOdS5ak-d2rZ_9b35i9yHugO5wiYThG5CA_n2DRhR7y0`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[42]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startuml`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`start`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:ClickServlet.handleRequest();`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`:new page;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`if (Page.onSecurityCheck) then (true)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  :Page.onInit();`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  if (isForward?) then (no)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    :Process controls;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    if (continue processing?) then (no)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      stop`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    endif`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`   plain if (isPost?) then (yes)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      :Page.onPost();`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    else (no)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      :Page.onGet();`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    endif`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    :Page.onRender();`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  endif`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`else (false)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`endif`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`if (do redirect?) then (yes)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  :redirect process;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`else`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  if (do forward?) then (yes)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    :Forward request;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  else (no)`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    :Render page template;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  endif`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`endif`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`stop`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@enduml`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`组件图`},{content:t(()=>[...l[43]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/RO_1QiCm44Jl-ef1TnzAUouf9MulfGNxPd9Gh6rZ8caTIOQ4udyFab9iGc_BpEoRtKs8oiV96Z6g_gX-2B9XItZpF8qIlm9uRzilLEZgmOU8LxOZEt9n9u3knN4ya5-hin2EDK5-PYU3GY7L1THGpqxVaUxfgAhdj91ulU59PqAtFIix6i93Bj8gghqA1FbnQKwcj7opqUGXsyCGC0JOoqqgTkegYSTKFASDhon1rinB94jF9J4ByS-d-SBrGQkvU4lFCjwSF_o6d9wikG80`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[44]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startuml`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`package "Some Group" {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  HTTP - [First Component]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  [Another Component]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`node "Other Groups" {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  FTP - [Second Component]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  [First Component] --> FTP`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`cloud {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  [Example 1]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`database "MySql" {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  folder "This is my folder" {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    [Folder 3]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  frame "Foo" {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    [Frame 4]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`[Another Component] --> [Example 1]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`[Example 1] --> [Folder 3]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`[Folder 3] --> [Frame 4]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@enduml`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`状态图`},{content:t(()=>[...l[45]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/TP2n3eCm34HtVuNdIWpGhK8H_z2nxO28KMaXaI3yVsKJfo1WS-xUuSFL5Eenp4CFKwW3eJnpnBAKoPYeDs_VDPHZMIvJCbe_VdFa04z9_lZE5IBpb6HozeeYaxF603mkBtvZbfcquuRjw8UbojC57mtGRcSiJe56yki8ACSPhHepYoKqEnjKw-zHTZQe_j8U9MTZ9G3TdN7aphT8tTaINawq8YDOu0a9QXyq5k9VE6uKKa--8ybP0FtE0SbM0YjoTXxw7m00`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[46]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startuml`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`state start1  <<start>>`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`state choice1 <<choice>>`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`state fork1   <<fork>>`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`state join2   <<join>>`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`state end3    <<end>>`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`[*]     --> choice1 : from start\\nto choice`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`start1  --> choice1 : from start stereo\\nto choice`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`choice1 --> fork1   : from choice\\nto fork`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`choice1 --> join2   : from choice\\nto join`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`choice1 --> end3    : from choice\\nto end stereo`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`fork1   ---> State1 : from fork\\nto state`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`fork1   --> State2  : from fork\\nto state`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`State2  --> join2   : from state\\nto join`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`State1  --> [*]     : from state\\nto end`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`join2   --> [*]     : from join\\nto end`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@enduml`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`对象图`},{content:t(()=>[...l[47]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuSfFoafDBb7moSzBoS-3yS8JYpCoyz9B429EgKKvcN2UNsfvP7vHDXTNRcA1WdDYGMP9OevpPacbGZMNGgYtWfQk7Sn0XT1WHmKjNLqxP3CLt5EBSXFpAa4IkdOmiskvkA3cAe14aOoriWeDTkHoICrBAStD0G00`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[48]||=[a(`div`,{class:`language-`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startuml`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`object London`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`object Washington`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`object Berlin`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`object NewYork`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`map CapitalCity {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,` UK *-> London`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,` USA *--> Washington`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,` Germany *---> Berlin`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`NewYork --> CapitalCity::USA`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@enduml`)])])])],-1)]]),_:1}),n(D,{title:`部署图`},{content:t(()=>[...l[49]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuShBJqbLUD7LzBnffu8X2iy8XMUCmZD1uPbomGnGqDM5QrUmKdYseFtvsdqAXWXvFJsuWGXv8uHyNHtS2eIyCKBUrXPXgKDgNaffRWu0`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[50]||=[a(`div`,{class:`language-`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startuml`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`node 节点 1`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`node 节点 2`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`node 节点 3`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`node 节点 4`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`node 节点 5`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`节点 1 -- 节点 2 : 标签 1`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`节点 1 .. 节点 3 : 标签 2`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`节点 1 ~~ 节点 4 : 标签 3`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`节点 1 == 节点 5`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@enduml`)])])])],-1)]]),_:1}),n(D,{title:`时序图`},{content:t(()=>[...l[51]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/RLBBIiD05DtVhxZ4fHGpAGe6AR7O-1cIPCPsw9YK93MwquqeABXGf53thjekn8L5-pCchNyXaxR9HDtTEUVadFk85SLE6FTF14IU8nXkenCXsTQnny-OY00y4NXTz4GN4nvtiCT27b0au7BV2SzHI-_7yuSNJNx6_09TZATRwTKWXyEaWBF7INOtoeOtsUDrpj5Jy0BVun4ho8lf_7ss9DsIJ8UJzFb28HrAGm1hHzPc4lAO7Rci3HRH5OJv5C0Y-L1co1owqkoMm5AY0_EHHoY21AWhAqq_qpMGAUjN_LY3C2bKfxBI0QmolLO7NFfqUBjJOGp0mlUWjN_GRBLihQ8WAqkYegl0tAx0PSk_6v6LmcyILV7_G4PTayinLWxBbaaTIxrjsxRK69Nrb7a6mOevI0_1svrOEGd6WN8Et3WC13NJgu4gNfycrwxFWXivsnHzPYx6Km3gLlQ5UxK6AZEZYOlHv_nZb3szVJ-z_f7N6lbFKzaIclWrUyvkBy5YFksVY1y0`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[52]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startuml`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`scale 5 as 150 pixels`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`clock clk with period 1`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`binary "启用" as en`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`binary "读/写" as rw`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`binary "数据有效" as dv`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`concise "数据总线" as db`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`concise "地址总线" as addr`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@6 as :write_beg`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@10 as :write_end`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@15 as :read_beg`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@19 as :read_end`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@0`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`en is low`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`db is "0x0"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`addr is "0x03f"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rw is low`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`dv is 0`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@:write_beg-3`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,` en is high`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@:write_beg-2`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,` db is "0xDEADBEEF"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@:write_beg-1`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`dv is 1`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@:write_beg`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rw is high`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@:write_end`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rw is low`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`dv is low`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@:write_end+1`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rw is low`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`db is "0x0"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`addr is "0x23"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@12`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`dv is high`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@13 `)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`db is "0xFFFF"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@20`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`en is low`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`dv is low`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@21 `)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`db is "0x0"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`highlight :write_beg to :write_end #Gold:写`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`highlight :read_beg to :read_end #lightBlue:读`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`db@:write_beg-1 <-> @:write_end : 设置时间`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`db@:write_beg-1 -> addr@:write_end+1 : 保持`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@enduml`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`正则图`},{content:t(()=>[...l[53]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/SoWkIImgAKfDJwtWqhSfBgdCITM8ATRAISnBjzM8LbUArTJGqxBNZ37Ij8yfrjAmjofEpYz8JT6qjzE8ZYcE2OxLrhI9qGVhi-DoICrB0Hi50000`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[54]||=[a(`div`,{class:`language-`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startregex`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`/<style(\\s*lang=(['"])(.*?)\\2)?\\s*(?:scoped)?>([\\s\\S]+)<\\/style>`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@endregex`)])])])],-1)]]),_:1}),n(D,{title:`网络图`},{content:t(()=>[...l[55]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/bP3DIiD04CVlUOeXWeTIwkvIyL0jpQKlqVQG9aiRckw6tOGgqgErWaLB5Qpu089WYnUXsCT9WcyXAGdzMX6Pop0Vl_dFlo9zK_X1rzLOptRC5bng02t10m-OqshxxiMg0c1nbmiu0_sWMZKCmz1Bgx9DfIKSptSuIvgdXvRBhKuPejbTD7t-lXw5zpF8gkbEZpOHITUR22TPNmDWrEznqO7uQn8EFiBRHNePmBHjGQLC3X2C2kT9796YhYLzppKT1W21f09gUteyAYHdkMBXk5nd43-yHiDFh3TAAJhHWg6ck83paAK4wNdLgxoLAvRhB5wEe-4JmdfZ0qgKKF8NA7wR8fB8sp4b75p5ox7A4Nn2rewKjYpPVouRtd60A8V8UiZ-5OJKtaXFKDEMRKhzrMiGFSwZqNkuc22yXIM_OF5_iHjgFL-06elLQZtXi0nuCmb7y-Xb8JAXVQslLIYpWwxx0m00`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[56]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startuml`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`nwdiag {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  group nightly {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    color = "#FFAAAA";`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    description = "<&clock> 每晚重启 <&clock>";`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    web02;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    db01;`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  network 缓冲区 {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      address = "210.x.x.x/24"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`   plain   user [description = "<&person*4.5>\\n 用户1"];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      web01 [address = "210.x.x.1, 210.x.x.20",  description = "<&cog*4>\\n网战01"]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      web02 [address = "210.x.x.2",  description = "<&cog*4>\\n网站02"];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  network 内网 {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      address = "172.x.x.x/24";`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`   plain   web01 [address = "172.x.x.1"];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      web02 [address = "172.x.x.2"];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      db01 [address = "172.x.x.100",  description = "<&spreadsheet*4>\\n 数据库01"];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      db02 [address = "172.x.x.101",  description = "<&spreadsheet*4>\\n 数据库02"];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      ptr  [address = "172.x.x.110",  description = "<&print*4>\\n 打印机r01"];`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@enduml`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`图形界面`},{content:t(()=>[...l[57]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/BOwn2e9W58Nt-nHtRsYF21yZ40MZjcX8DnM4a182YmJB218SR2W88ShCNiRx__eMKN_RuJlVWIFfXZOrT6riWDa2iutTGQzn8XwaQ26vALrzjB2EbzKzHmkhzu7EMxJ111DfNt9lphmD5GvBOohy3bgeibrUpru2g6Y3t5UG5oSMb2oyqIDZppNRbZp9nVxNYqYBOxDBU7ofBmd8gA3mccXLX_xVja4cDsl2im8sIAF9yFlz0m00`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[58]||=[a(`div`,{class:`language-`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startsalt`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`{+`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`{/ <b>通用 | 全屏 | 行为 | 保存 }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`{`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`{ 图片打开模式: | ^智能模式^ }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`[X] 缩放时平滑显示图片`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`[X] 图片删除确认`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`[ ] 显示隐藏图片`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`[关闭]`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@endsalt`)])])])],-1)]]),_:1}),n(D,{title:`架构图`},{content:t(()=>[...l[59]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/fLN1Rjim33rFNq5amx0DS0SCsAL8Z7hkskIGpgY1d79XRIRHQb669BSBjlxx82UExImDckvcYezFV2HbNbY7nbMg4FPUSea65HZA7FAoeE7mZbRu8BK9G_WjtXXTSHvhmsJWorVn96nff2DuTvSOdP6ry1FDEPfi9HKw-dnNMSbaRL1kt3iyfcGUP4PxU2pBGcRefER0RX1jIAnLgPdO7GdA6emGEn4m62Fd1K5Me5G30BGmZc4ut6KTXZsXRxzjq-von5YwoX1CUA6Dgc_RKCMJKwbkj9EBzPoZF9UU1mj87TxJIXSv6Jlmh3THUYhj30kPewCwVdPgz8GVo3gvR0XELfNWkWvCNXGenZ5y2dBzo074awvr4wLTSzOrUi14Y7W2WP7BbGl2i0xqPMjFPcBMiIQYYqvw4v9co2nvMIkmMyCBQGPrNqZK3brlIYhhj283c2kMrfdjeA25REkASYLRrslky6Di3zrGE_wNFp6ItQlK9xXM_dc-C53iwXnKPH3wCNYcHXt08OaRhs__4VVic7CYcjmtTYB4hWnD-Dv1VtukTLRv-3bFaN59c-zqRHsfkZUNq_ezjp-n8ms-9YQ3nPpZsscF9BwT_aFoBCjOAuBt43tYUiw9BcHM_tAwwclISPH4BqwjHteb6JcJFjD3l5S7UFScm5Vbh2hF_eIxHzSzQqeklF3jsU4H4RMA1dAWqQ9Ef-7TD5k8WfR4EHIqSEBxBrHbGR0mMe5R4GmYls9iPP0pWWmjWNLLlXx0XnybyRNHLVdnJAH4OZGQZKJdhmVdpUQ3PlDj8Rk70UVGMLpGRBi6rXPj3zXkEF9BpUSlBeZpIXL_0G00`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[60]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startuml`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`skinparam rectangle<<behavior>> {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	roundCorner 25`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`sprite $bProcess jar:archimate/business-process`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`sprite $aService jar:archimate/application-service`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`sprite $aComponent jar:archimate/application-component`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "Handle claim"  as HC <<$bProcess>><<behavior>> #Business`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "Capture Information"  as CI <<$bProcess>><<behavior>> #Business`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "Notify\\nAdditional Stakeholders" as NAS <<$bProcess>><<behavior>> #Business`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "Validate" as V <<$bProcess>><<behavior>> #Business`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "Investigate" as I <<$bProcess>><<behavior>> #Business`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "Pay" as P <<$bProcess>><<behavior>> #Business`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`HC *-down- CI`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`HC *-down- NAS`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`HC *-down- V`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`HC *-down- I`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`HC *-down- P`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`CI -right->> NAS`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`NAS -right->> V`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`V -right->> I`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`I -right->> P`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "Scanning" as scanning <<$aService>><<behavior>> #Application`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "Customer admnistration" as customerAdministration <<$aService>><<behavior>> #Application`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "Claims admnistration" as claimsAdministration <<$aService>><<behavior>> #Application`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle Printing <<$aService>><<behavior>> #Application`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle Payment <<$aService>><<behavior>> #Application`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`scanning -up-> CI`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`customerAdministration  -up-> CI`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`claimsAdministration -up-> NAS`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`claimsAdministration -up-> V`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`claimsAdministration -up-> I`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`Payment -up-> P`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`Printing -up-> V`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`Printing -up-> P`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "Document\\nManagement\\nSystem" as DMS <<$aComponent>> #Application`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "General\\nCRM\\nSystem" as CRM <<$aComponent>>  #Application`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "Home & Away\\nPolicy\\nAdministration" as HAPA <<$aComponent>> #Application`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`rectangle "Home & Away\\nFinancial\\nAdministration" as HFPA <<$aComponent>>  #Application`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`DMS .up.|> scanning`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`DMS .up.|> Printing`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`CRM .up.|> customerAdministration`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`HAPA .up.|> claimsAdministration`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`HFPA .up.|> Payment`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`legend left`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`Example from the "Archisurance case study" (OpenGroup).`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`See`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`====`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`<$bProcess> :business process`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`====`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`<$aService> : application service`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`====`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`<$aComponent> : application component`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`endlegend`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@enduml`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`甘特图`},{content:t(()=>[...l[61]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/nPJ1Jjmm48RFyLFChQUaIIegfA8AKLHwA2qgN2h4OJQUPjquTh0dfTjgtnt5yMuIMCwSOe_j-R_VC_6fPtHSes4M9vutcZwAC3jNM3jiuRz867qpV9FFrl0tR0c-aFv3h2gCmKzMMmUEP9nVgty4nV5kDgI5bTN3yXbMpOMplP7ZeGj7P7wIrlP19CbNPMYChtHF8jcAf5MQF5j3UuJvXackF5h8AKQjgWE2c-TQ0Nmh4cFvgSevkYOWBfpbY-FV7PgQViGaw9nzUANh2e7n_76MVoZUPJlIcxMg6aFUGuXjHUAfGuTiNM0TTEgPZbRrcdV6brcdf7CVIv4Yx9cylJ_aRRgAhdUT7lWlqTNAm53AAvHIcHhA4PTLIrgDNG00y1JuJFdxs36LjfxaGLkTCitp8cp5LfoyZTr_vUnlgXZ2Z-61rmHbNkPfKQPv8SJj3Vgck0D7zxrovA78GUB62zyRYHj0Hp02217wQMMPRIi0Mcfj0LcMnN4Pn_ItqsYGbJM-E10Rzv6HCEIB1EMCe8m4kuL87i40Vp4vYDnlF92H8atXUbz_Lgm9qbJSNXPtiCQk8-F16ZXwES7-iLZsqL2PULDYrKnLpMTL3KNTt_d0CnXCKt5AHeO7w140`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[62]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startgantt`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`<style>`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`ganttDiagram {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	task {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontName Helvetica`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontColor red`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontSize 18`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontStyle bold`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		BackGroundColor GreenYellow`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		LineColor blue`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	milestone {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontColor blue`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontSize 25`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontStyle italic`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		BackGroundColor yellow`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		LineColor red`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	note {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontColor DarkGreen`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontSize 10`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		LineColor OrangeRed`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	arrow {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontName Helvetica`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontColor red`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontSize 18`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontStyle bold`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		BackGroundColor GreenYellow`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		LineColor blue`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		LineStyle 8.0;13.0`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		LineThickness 3.0`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	separator {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		BackgroundColor lightGreen`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		LineStyle 8.0;3.0`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		LineColor red`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		LineThickness 1.0`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontSize 16`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontStyle bold`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontColor purple`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		Margin 5`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		Padding 20`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	timeline {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	    BackgroundColor Bisque`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	closed {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		BackgroundColor pink`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		FontColor red`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`</style>`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`Project starts the 2020-12-01`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`[Task1] requires 10 days`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`sunday are closed`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`note bottom`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  memo1 ...`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  memo2 ...`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  explanations1 ...`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  explanations2 ...`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`end note`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`[Task2] requires 20 days`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`[Task2] starts 10 days after [Task1]'s end`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`-- Separator title --`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`[M1] happens on 5 days after [Task1]'s end`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`<style>`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	separator {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	    LineColor black`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		Margin 0`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		Padding 0`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`</style>`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`-- end --`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@endgantt`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`思维导图`},{content:t(()=>[...l[63]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/JP6xRiCm34LtVWMd3bwAxgaGeCxak05gjEWgMxGjGA84FThwxmlPJk29zznBa7gSOv8XMStAIW-3z4axnb5FEH2-GDB94BOBnkmfu8e05PwUHYCdKLEl9KDLZCcudiHddpbbgAeAhvhp7xQQqufDFaG7tTGNV2TtdnAadyMrhIyR-smYYSwPHNqtkqNE6n9T8cbltUQLMuWF6Nqv3_xgDAF47meB6iSJihIqBZl5jSlsm-av2dmLUElQjsEqZFeUVJcJhNO0Cqb50HxFi3EnsXKCn8a2ZiwLycZS6C3GHAmmw6bEWDZDBfIwsMNEhix4Ql-BVm00`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[64]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startmindmap`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`caption figure 1`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`title My super title`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`* <&flag>Debian`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`** <&globe>Ubuntu`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`*** Linux Mint`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`*** Kubuntu`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`*** Lubuntu`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`*** KDE Neon`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`** <&graph>LMDE`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`** <&pulse>SolydXK`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`** <&people>SteamOS`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`** <&star>Raspbian with a very long name`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`*** <s>Raspmbc</s> => OSMC`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`*** <s>Raspyfi</s> => Volumio`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`header`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`My super header`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`endheader`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`center footer My super footer`)]),r(`
`),a(`span`,{class:`line`},[a(`span`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`legend right`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  Short`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  legend`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`endlegend`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@endmindmap`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`工作分解结构图`},{content:t(()=>[...l[65]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/DK-xRiCm3Dpr5Pow2Fg7034Gj2WwE4XsMM8T8ZBfYdID_7qXsntlXRixgSLgww3EmnUky263ynuwJ9GHX1i1FVuiL752DdNUUtZFo4RsWZ7EEzFZBxLujq4FLnevt6RubWf9bgfu27Sf2njYtM6FCHEFpli0vmUcPo6r9WNeKMTXfO4A6Utv09-Ief5mMtc-msqk4ZDqmhZjsAWS3VEnOyPIY4TuWqkDqnIFtgqBcb5T2270zKcb_7z9TI5hTq79K24zH97T2JclW_u1`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[66]||=[a(`div`,{class:`language- line-numbers-mode`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startwbs`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`+ New Job`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`++ Decide on Job Requirements`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`+++ Identity gaps`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`+++ Review JDs`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`++++ Sign-Up for courses`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`++++ Volunteer`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`++++ Reading`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`++- Checklist`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`+++- Responsibilities`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`+++- Location`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`++ CV Upload Done`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`+++ CV Updated`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`++++ Spelling & Grammar`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`++++ Check dates`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`---- Skills`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`+++ Recruitment sites chosen`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@endwbs`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})])],-1)]]),_:1}),n(D,{title:`JSON`},{content:t(()=>[...l[67]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/RP6nRi8m48PtFyNfkeAQX8IYJA1k7R8meQg3ImnswzYHVMc5AjwzyYL4GcAnTD_vFl-sjv5aeA_edNZIvgojEMi2j39I8pk5TrIsRL0n8Zm37WrTxhkzzaurG_UfmhWbuzKnGV4d0F1amYIk0T-yThX8U3wk1jntXlI8JTnPyvCeXK4nakTK5fkncFBKaEG062aeHRiPOv53uLhOCsSfJD5hm4Rzmi67xnkF98aZD8SRwdqaQLzzoppFiY9Vhl8iGm5mvGntjwxXdUV6E018bvudjU_Kv8JvIJXV0LLLBVDYLIAthul71dywcUD3nxfSiwEirY-JGm1ySBgZDhODogLa8ucz7s8oki5QSHLRvThq_Vy0`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[68]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startjson`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`#highlight "lastName"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`#highlight "address" / "city"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`#highlight "phoneNumbers" / "0" / "number"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`{`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "firstName": "John",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "lastName": "Smith",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "isAlive": true,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "age": 28,`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "address": {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "streetAddress": "21 2nd Street",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "city": "New York",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "state": "NY",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "postalCode": "10021-3100"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "phoneNumbers": [`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "type": "home",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "number": "212 555-1234"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    },`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    {`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "type": "office",`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`      "number": "646 555-4567"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`    }`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  ],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "children": [],`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`  "spouse": null`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@endjson`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),n(D,{title:`YAML`},{content:t(()=>[...l[69]||=[a(`img`,{src:`https://www.plantuml.com/plantuml/svg/NP11ZiCm24NNvXGewtgagErYlEfLc1WdbXmJOJoTt7wKPDSL7o7--_1gHcexhGMYSC21C3Bh3GaJhrJuR0TGsg-XoeQIS9OIkMBhTO0j1xn_ZO_n-Gr_AxM0ffqXATTfyGlN5l0E4vMIw-n_iiOM49p7fVD-rCZlInJfcG-HbEFfvLDEjlXuuC5zU2Jf2kw3uwveNdETMy0dk8tKDCUPJwoRf5SBE89pHIQoBFKyRMDID6KUm5bNA-oZ_1vBzXPuSOt7c_u1`,alt:`PlantUML Diagram`},null,-1)]]),code:t(()=>[...l[70]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`20`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`@startyaml`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`doe: "a deer, a female deer"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`ray: "a drop of golden sun"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`pi: 3.14159`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`xmas: true`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`french-hens: 3`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`calling-birds: `)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	- huey`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	- dewey`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	- louie`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	- fred`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`xmas-fifth-day: `)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	calling-birds: four`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	french-hens: 3`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	golden-rings: 5`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	partridges: `)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		count: 1`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`		location: "a pear tree"`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`	turtle-doves: two`)]),r(`
`),a(`span`,{class:`line`},[a(`span`,null,`@endyaml`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1})])}var w=c(u,[[`render`,C]]);export{l as _pageData,w as default};