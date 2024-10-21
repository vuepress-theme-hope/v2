import{aj as r,ak as a,ao as t,ap as o,an as n,am as l,al as p}from"./app-C5NAKw-g.js";const i={};function s(c,e){return p(),a("div",null,[e[0]||(e[0]=t("p",null,[o("主题通过引入 "),t("code",null,"@vuepress/plugin-blog"),o(" 提供了博客支持，该功能是"),t("strong",null,"默认禁用"),o("的。")],-1)),e[1]||(e[1]=t("p",null,[o("如果你需要博客功能，你可以在主题选项中设置 "),t("code",null,"plugins.blog: true"),o(" 来启用博客功能。")],-1)),n(" more "),e[2]||(e[2]=l('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>启用博客功能后，主题允许你通过页面的 frontmatter，为页面配置分类、标签、是否是文章、是否出现在时间线中、星标、置顶等功能。</p><div class="hint-container tip"><p class="hint-container-title">案例</p><p><a href="https://mister-hope.com/" target="_blank" rel="noopener noreferrer">这里有一个案例</a> 以便你预览使用 <code>vuepress-theme-hope</code> 构建的博客站点。</p></div><h2 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持"><span>多语言支持</span></a></h2><p>主题已为博客系统适配多语言。你可以在主题选项中通过 <code>locales</code> 选项，分别为每一种语言指定属于自己的博客配置。</p><p>当你配置了多语言后，每个语言下的文章列表、时间线等会保持独立。</p><h2 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏"><span>侧边栏</span></a></h2><p>主题提供了一个博客相关的侧边栏。该侧边栏会在博客相关的页面显示 (在桌面会显示在右侧，在移动视图下收起到侧边栏中)</p><p>你可以在主题设置中通过 <code>blog.sidebarDisplay</code> 控制该侧边栏在非博客相关的页面的显示行为。可选的值有 <code>&quot;mobile&quot; | &quot;none&quot; | &quot;always&quot;</code>。默认为 <code>&quot;mobile&quot;</code>，即当你在移动视图下访问非博客相关的页面时，你也可以在侧边栏看到它。</p><h2 id="分页配置" tabindex="-1"><a class="header-anchor" href="#分页配置"><span>分页配置</span></a></h2><p>对于所有页面的文章列表，我们都会在底部显示一个分页组件。你可以通过这个组件快捷的在首页、尾页、前后两页进行跳转。你也可以输入数字跳转到指定页面。</p><p>默认每个分页的文章数为 <code>10</code>，你可以在主题设置中配置 <code>blog.articlePerPage</code> 来覆盖它。</p><h2 id="限制" tabindex="-1"><a class="header-anchor" href="#限制"><span>限制</span></a></h2><div class="hint-container warning"><p class="hint-container-title">热更新默认禁用</p><p>出于性能考虑，博客相关数据在开发服务器下默认不启用热更新，也就是如果你新增了文章或者修改了已有文章的分类、时间、标签、置顶、星标状态等，整个站点的相关数据仅会在重启开发服务器后更新。</p><p>此外，由于博客信息会写入 VuePress 底层数据，修改这一文件会导致开发服务器重启，所以对于 Markdown 内容敏感的阅读时间 (含字数信息) 也<strong>不会在开发服务器下生效</strong>。</p><p>如果你希望实时更新这些内容，你需要设置 <code>hotReload: true</code> 并接受每次修改会触发页面刷新以及由于大量重新计算工作带来的一段白屏时间。</p></div>',14))])}const d=r(i,[["render",s],["__file","intro.html.vue"]]),m=JSON.parse('{"path":"/zh/guide/blog/intro.html","title":"博客功能介绍","lang":"zh-CN","frontmatter":{"title":"博客功能介绍","icon":"blog","order":1,"category":["博客"],"tag":["博客","介绍"],"description":"主题通过引入 @vuepress/plugin-blog 提供了博客支持，该功能是默认禁用的。 如果你需要博客功能，你可以在主题选项中设置 plugins.blog: true 来启用博客功能。","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/guide/blog/intro.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.gitee.io/v2/guide/blog/intro.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/zh/guide/blog/intro.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"博客功能介绍"}],["meta",{"property":"og:description","content":"主题通过引入 @vuepress/plugin-blog 提供了博客支持，该功能是默认禁用的。 如果你需要博客功能，你可以在主题选项中设置 plugins.blog: true 来启用博客功能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-05T11:26:54.000Z"}],["meta",{"property":"article:tag","content":"博客"}],["meta",{"property":"article:tag","content":"介绍"}],["meta",{"property":"article:modified_time","content":"2024-02-05T11:26:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"博客功能介绍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-05T11:26:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"多语言支持","slug":"多语言支持","link":"#多语言支持","children":[]},{"level":2,"title":"侧边栏","slug":"侧边栏","link":"#侧边栏","children":[]},{"level":2,"title":"分页配置","slug":"分页配置","link":"#分页配置","children":[]},{"level":2,"title":"限制","slug":"限制","link":"#限制","children":[]}],"git":{"createdTime":1644936187000,"updatedTime":1707132414000,"contributors":[{"name":"Zihan Hu","email":"hu-zihan@foxmail.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":7}]},"readingTime":{"minutes":2.24,"words":671},"filePathRelative":"zh/guide/blog/intro.md","localizedDate":"2022年2月15日","excerpt":"<p>主题通过引入 <code>@vuepress/plugin-blog</code> 提供了博客支持，该功能是<strong>默认禁用</strong>的。</p>\\n<p>如果你需要博客功能，你可以在主题选项中设置 <code>plugins.blog: true</code> 来启用博客功能。</p>\\n","autoDesc":true}');export{d as comp,m as data};
