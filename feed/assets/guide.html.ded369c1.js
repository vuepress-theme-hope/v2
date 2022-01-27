const e={key:"v-76310685",path:"/zh/guide.html",title:"\u6307\u5357",lang:"zh-CN",frontmatter:{title:"\u6307\u5357",icon:"creative",head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope.github.io/v2/feed/zh/guide.html"}],["meta",{property:"og:title",content:"\u6307\u5357"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"\u6307\u5357","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:`<h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2>
<p><code>vuepress-plugin-feed2</code> \u63D2\u4EF6\u4F1A\u81EA\u52A8\u4E3A\u4F60\u751F\u6210\u4EE5\u4E0B\u4E09\u79CD\u683C\u5F0F\u7684 feed \u6587\u4EF6:</p>
<ul>
<li>Atom 1.0</li>
<li>JSON 1.1</li>
<li>RSS 2.0</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p>
<p>Atom \u548C JSON \u662F\u4E3A\u4E86\u63D0\u4F9B\u66F4\u591A Feed \u8F6F\u4EF6\u7684\u9002\u914D\u800C\u63D0\u4F9B\u7684\u3002</p>
<p>\u5982\u679C\u53EF\u4EE5\uFF0C\u8BF7\u5C3D\u53EF\u80FD\u4F7F\u7528 RSS\u3002</p>
</div>
<p>\u8003\u8651\u5230\u73B0\u5728 Feed \u5DF2\u7ECF\u5F88\u5C0F\u4F17\uFF0C\u672C\u63D2\u4EF6\u65E8\u5728\u63D0\u4F9B\u6700\u5C0F\u914D\u7F6E\u6765\u5C3D\u53EF\u80FD\u81EA\u52A8\u751F\u6210\u8BE6\u7EC6\u7684 Feed \u6587\u4EF6\u3002\u5F53\u7136\u672C\u63D2\u4EF6\u4E5F\u9884\u7559\u4E86\u5145\u8DB3\u7684\u8BBE\u7F6E\u9879\uFF0C\u4EE5\u8BA9\u4F60\u81EA\u7531\u5B9A\u4E49 Feed \u7684\u8F93\u51FA\u5185\u5BB9\u3002</p>
<p>\u4E3A\u4E86\u6B63\u786E\u751F\u6210\u94FE\u63A5\u5730\u5740\uFF0C\u4F60\u9700\u8981\u5728\u63D2\u4EF6\u9009\u9879\u6216\u8005 themeConfig \u4E2D\u63D0\u4F9B <code>hostname</code> (\u90E8\u7F72\u57DF\u540D)\u3002\u5176\u4ED6\u9009\u9879\u5747\u662F\u9009\u586B\u7684\u3002</p>
<h2 id="\u9891\u9053\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9891\u9053\u8BBE\u7F6E" aria-hidden="true">#</a> \u9891\u9053\u8BBE\u7F6E</h2>
<p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>channel</code> \u9009\u9879\u6765\u81EA\u81EA\u5B9A\u4E49 Feed \u9891\u9053\u7684\u5404\u9879\u4FE1\u606F\u3002</p>
<p>\u6211\u4EEC\u63A8\u8350\u8FDB\u884C\u5982\u4E0B\u8BBE\u7F6E:</p>
<ul>
<li>\u5C06\u5EFA\u7ACB Feed \u7684\u65E5\u671F\u8F6C\u6362\u4E3A ISOString \u5199\u5165\u5230 <code>channel.pubDate</code> \u4E2D</li>
<li>\u901A\u8FC7 <code>channel.ttl</code> \u4E2D\u8BBE\u7F6E\u5185\u5BB9\u7684\u66F4\u65B0\u5468\u671F(\u5355\u4F4D: \u5206\u949F)</li>
<li>\u901A\u8FC7 <code>channel.copyright</code> \u8BBE\u7F6E\u7248\u6743\u4FE1\u606F</li>
<li>\u901A\u8FC7 <code>channel.author</code> \u8BBE\u7F6E\u9891\u9053\u4F5C\u8005\uFF0C\u6216\u8BBE\u7F6E <code>themeConfig.author</code> \u4E3A\u4F5C\u8005\u540D\u79F0\u3002</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">\u9ED8\u8BA4\u9891\u9053\u8BBE\u7F6E</p>
<ul>
<li>
<p>\u9891\u9053\u7684\u6807\u9898\u3001\u63CF\u8FF0\u9ED8\u8BA4\u4E3A\u7AD9\u70B9\u7684\u540D\u79F0\u4E0E\u94FE\u63A5\u3002</p>
</li>
<li>
<p>\u9891\u9053\u7684\u94FE\u63A5\u3001\u6700\u540E\u66F4\u65B0\u65F6\u95F4\u4F1A\u7531\u63D2\u4EF6\u81EA\u52A8\u751F\u6210\u3002</p>
</li>
<li>
<p>\u9891\u9053\u7684\u7248\u6743\u4FE1\u606F\u4F1A\u5C1D\u8BD5\u4ECE\u9875\u811A\u7684\u7248\u6743\u4FE1\u606F\u4E2D\u8BFB\u53D6\u3002</p>
</li>
</ul>
</div>
<p>\u8BE6\u7EC6\u7684\u9009\u9879\u53CA\u5176\u9ED8\u8BA4\u503C\u8BE6\u89C1 <RouterLink to="/zh/config/channel.html">\u914D\u7F6E \u2192 \u9891\u9053\u8BBE\u7F6E</RouterLink></p>
<h2 id="\u9879\u76EE\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u8BBE\u7F6E" aria-hidden="true">#</a> \u9879\u76EE\u8BBE\u7F6E</h2>
<h3 id="\u9879\u76EE\u9ED8\u8BA4\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u9ED8\u8BA4\u751F\u6210" aria-hidden="true">#</a> \u9879\u76EE\u9ED8\u8BA4\u751F\u6210</h3>
<p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u6587\u7AE0\u5747\u4F1A\u88AB\u6DFB\u52A0\u81F3 feed \u6D41\u3002</p>
<div class="custom-container info"><p class="custom-container-title">\u6587\u7AE0</p>
<p>\u6240\u6709 <code>frontmatter.article</code> \u4E0D\u4E3A <code>false</code> \u4E14\u4E0D\u662F\u4E3B\u9875\u7684\u9875\u9762\u5747\u4F1A\u88AB\u89C6\u4E3A\u6587\u7AE0\u3002</p>
</div>
<p><code>vuepress-plugin-feed2</code> \u4F1A\u4ECE frontmatter \u4E2D\u8BFB\u53D6\u4EE5\u4E0B\u5185\u5BB9:</p>
<ul>
<li>
<p><code>description</code>: \u6587\u7AE0\u7684\u63CF\u8FF0\u4FE1\u606F</p>
</li>
<li>
<p><code>author</code>: \u6587\u7AE0\u7684\u4F5C\u8005\u540D\u79F0</p>
</li>
<li>
<p><code>copyrightText</code>: \u6587\u7AE0\u7684\u7248\u6743\u4FE1\u606F</p>
</li>
<li>
<p><code>time</code>: \u6587\u7AE0\u7684\u53D1\u5E03\u65F6\u95F4</p>
</li>
<li>
<p><code>image</code>: \u6587\u7AE0\u7684\u5C01\u9762</p>
</li>
</ul>
<p><code>vuepress-plugin-feed2</code> \u4E5F\u4F1A\u4F7F\u7528\u4EE5\u4E0B\u5185\u5BB9:</p>
<ul>
<li><code>page.excerpt</code>: \u5728 \`</li>
</ul>
`,headers:[{level:2,title:"\u4F7F\u7528",slug:"\u4F7F\u7528",children:[]},{level:2,title:"\u9891\u9053\u8BBE\u7F6E",slug:"\u9891\u9053\u8BBE\u7F6E",children:[]},{level:2,title:"\u9879\u76EE\u8BBE\u7F6E",slug:"\u9879\u76EE\u8BBE\u7F6E",children:[{level:3,title:"\u9879\u76EE\u9ED8\u8BA4\u751F\u6210",slug:"\u9879\u76EE\u9ED8\u8BA4\u751F\u6210",children:[]},{level:3,title:"\u81EA\u5B9A\u4E49",slug:"\u81EA\u5B9A\u4E49",children:[]}]},{level:2,title:"\u8F93\u51FA\u914D\u7F6E",slug:"\u8F93\u51FA\u914D\u7F6E",children:[]}],git:{createdTime:164329048e4,updatedTime:164329048e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:2.94,words:881},filePathRelative:"zh/guide.md"};export{e as data};
