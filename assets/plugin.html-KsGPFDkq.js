import{aj as n,ak as p,am as i,ao as t,ap as s,aq as l,as as r,ar as h,al as o}from"./app-3Fu3LGel.js";const k={};function g(d,e){const a=h("RouteLink");return o(),p("div",null,[e[5]||(e[5]=i(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>借助于 <a href="https://vuejs.press/zh/reference/plugin-api.html" target="_blank" rel="noopener noreferrer">插件 API</a> ， VuePress 插件可以为你提供各种不同的功能。</p><h2 id="社区插件" tabindex="-1"><a class="header-anchor" href="#社区插件"><span>社区插件</span></a></h2><p>社区用户创建了很多插件，并将它们发布到了 <a href="https://www.npmjs.com/search?q=keywords:vuepress-plugin" target="_blank" rel="noopener noreferrer">NPM</a> 上。 VuePress 团队也在 <a href="https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin" target="_blank" rel="noopener noreferrer">@vuepress</a> Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。</p><p>一般而言，你需要将插件放入到 <a href="https://vuejs.press/zh/reference/config.html#plugins" target="_blank" rel="noopener noreferrer">plugins</a> 配置项中来使用它。举例来说，你可以使用 <a href="https://ecosystem.vuejs.press/zh/plugins/analytics/google-analytics.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-google-analytics</a> 来使用 Google Analytics :</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">googleAnalyticsPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;@vuepress/plugin-google-analytics&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    googleAnalyticsPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;G-XXXXXXXXXX&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>大部分插件只能使用一次，如果同一个插件被多次使用，那么只有最后一次会生效。</p><p>然而，部分插件是可以被多次使用的 (例如 <a href="https://ecosystem.vuejs.press/zh/plugins/container.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-container</a>)，你应该查看插件本身的文档来获取详细指引。</p></div><h2 id="本地插件" tabindex="-1"><a class="header-anchor" href="#本地插件"><span>本地插件</span></a></h2><p>如果你想要使用自己的插件，但是又不想发布它，你可以创建一个本地插件。</p>`,9)),t("p",null,[e[1]||(e[1]=s("推荐你直接将 ")),l(a,{to:"/zh/cookbook/vuepress/config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:r(()=>e[0]||(e[0]=[s("配置文件")])),_:1}),e[2]||(e[2]=s(" 作为插件使用，因为 ")),e[3]||(e[3]=t("a",{href:"https://vuejs.press/zh/reference/config.html#%E6%8F%92%E4%BB%B6-api",target:"_blank",rel:"noopener noreferrer"},"几乎所有的插件 API 都可以在配置文件中使用",-1)),e[4]||(e[4]=s("，这在绝大多数场景下都更为方便。"))]),e[6]||(e[6]=i(`<p>但是如果你在配置文件中要做的事情太多了，你可以考虑将它们提取到单独的插件中，然后在你的配置文件中使用它们:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> myPlugin</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;./path/to/my-plugin.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">myPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><p>前往 <a href="https://vuejs.press/zh/advanced/plugin.html" target="_blank" rel="noopener noreferrer">深入 &gt; 开发插件</a> 学习如何开发你自己的插件。</p>`,3))])}const u=n(k,[["render",g],["__file","plugin.html.vue"]]),m=JSON.parse('{"path":"/zh/cookbook/vuepress/plugin.html","title":"插件","lang":"zh-CN","frontmatter":{"title":"插件","icon":"puzzle-piece","order":5,"category":["教程","VuePress"],"tag":["VuePress","插件"],"description":"介绍 借助于 插件 API ， VuePress 插件可以为你提供各种不同的功能。 社区插件 社区用户创建了很多插件，并将它们发布到了 NPM 上。 VuePress 团队也在 @vuepress Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。 一般而言，你需要将插件放入到 plugins 配置项中来使用它。举例来说，你可以...","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/cookbook/vuepress/plugin.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.github.io/v2/cookbook/vuepress/plugin.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/zh/cookbook/vuepress/plugin.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"插件"}],["meta",{"property":"og:description","content":"介绍 借助于 插件 API ， VuePress 插件可以为你提供各种不同的功能。 社区插件 社区用户创建了很多插件，并将它们发布到了 NPM 上。 VuePress 团队也在 @vuepress Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。 一般而言，你需要将插件放入到 plugins 配置项中来使用它。举例来说，你可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-30T13:40:11.000Z"}],["meta",{"property":"article:tag","content":"VuePress"}],["meta",{"property":"article:tag","content":"插件"}],["meta",{"property":"article:modified_time","content":"2024-05-30T13:40:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-30T13:40:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.github.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"社区插件","slug":"社区插件","link":"#社区插件","children":[]},{"level":2,"title":"本地插件","slug":"本地插件","link":"#本地插件","children":[]}],"git":{"createdTime":1644936187000,"updatedTime":1717076411000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":8},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.43,"words":428},"filePathRelative":"zh/cookbook/vuepress/plugin.md","localizedDate":"2022年2月15日","excerpt":"","autoDesc":true}');export{u as comp,m as data};