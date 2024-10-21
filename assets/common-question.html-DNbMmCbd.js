import{aj as k,ak as o,ao as e,ap as i,aq as t,as as n,am as l,ar as p,al as r}from"./app-C5NAKw-g.js";const d={};function g(m,s){const a=p("RouteLink"),h=p("Mermaid");return r(),o("div",null,[s[35]||(s[35]=e("h2",{id:"添加-markdown-扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#添加-markdown-扩展"},[e("span",null,"添加 Markdown 扩展")])],-1)),e("p",null,[s[1]||(s[1]=i("你可以在 ")),t(a,{to:"/zh/cookbook/vuepress/config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:n(()=>s[0]||(s[0]=[i("配置文件")])),_:1}),s[2]||(s[2]=i(" 中使用 ")),s[3]||(s[3]=e("code",null,"extendsMarkdown",-1)),s[4]||(s[4]=i(" 钩子来添加 Markdown 扩展:"))]),s[36]||(s[36]=l(`<div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/config.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 站点配置</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // ...</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  extendsMarkdown</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">md</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    md</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">yourExtension</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">options</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div><h2 id="如何让侧边栏可折叠-如何在移动端显示-toc-如何在-pc-上将侧边栏置于左侧" tabindex="-1"><a class="header-anchor" href="#如何让侧边栏可折叠-如何在移动端显示-toc-如何在-pc-上将侧边栏置于左侧"><span>如何让侧边栏可折叠 / 如何在移动端显示 TOC / 如何在 PC 上将侧边栏置于左侧</span></a></h2>`,2)),e("p",null,[s[6]||(s[6]=i("为了更好的适应不同尺寸的设备，主题使用 ")),t(a,{to:"/zh/guide/interface/responsive.html"},{default:n(()=>s[5]||(s[5]=[i("响应式布局")])),_:1}),s[7]||(s[7]=i(" 通过屏幕宽度来调整布局。"))]),s[37]||(s[37]=e("p",null,"由于布局是预渲染的，所有尺寸的屏幕共享相同的 DOM 结构，为了正确的首屏渲染和较佳性能，不同尺寸布局几乎仅通过 CSS 渲染而非脚本控制。在同一 DOM 结构上，我们实现了若干套 CSS 来显示不同布局。这意味着你不能自定义这些布局或者调整它们的顺序。",-1)),s[38]||(s[38]=e("p",null,"你唯一可配置的内容就是 CSS 断点，默认的断点如下:",-1)),t(h,{id:"mermaid-19",code:"eJzT1dXlKsksyUm1UnAODlZ4Nm3t86adXCDRtJz88uSMxKISBZ8gLgUgyM1PysxJjX7W2f1szq4Xy9uezt4XC5YoSUzKSS2Jfrqh/+nOzc/m7keWK0hMiX66ZDmmRE5iQUl+QfTzNVNerNvwbM4aFE3J0c+nbH3RMhFZsDwzJTX66bq9Tzf2w4SRnGVja6sCYdna2kEchOQ2kCyEBZQFOgnmNJA4kAIKQpyD5DKQFIQF0pIMdRdYQzJQBOQaLgCoWYGa"}),e("p",null,[s[9]||(s[9]=i("你可以通过 ")),t(a,{to:"/zh/config/style.html#configscss"},{default:n(()=>s[8]||(s[8]=[i("样式配置文件")])),_:1}),s[10]||(s[10]=i(" 来调整这些断点。"))]),s[39]||(s[39]=l(`<p>比如:</p><ul><li><p>如果你不喜欢宽屏布局，你可以将 <code>$pc</code> 断点设置一个非常大的值:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/config.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$pc</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9999</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div></li><li><p>如果你不想要 Pad 布局，你可以将 <code>$tablet</code> 断点和 <code>$pad</code> 断点重合:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/config.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$tablet</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">959</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div></li></ul><p>当然，如果你足够强，你可以自行通过覆盖主题的 CSS 样式来通过这份 DOM 实现你想要的布局。这可能会很困难，但即技术上绝对是可行的。</p><h2 id="显示四级或更多级的标题" tabindex="-1"><a class="header-anchor" href="#显示四级或更多级的标题"><span>显示四级或更多级的标题</span></a></h2><p>默认情况下，VuePress 只会从 Markdown 提取 h2 和 h3 标题，所以仅靠配置主题，你永远也看不见 h4 标题。</p><p>你需要在 VuePress 配置文件中配置 <a href="https://vuejs.press/zh/reference/config.html#markdown-headers" target="_blank" rel="noopener noreferrer">markdown.headers.level</a>:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/config.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 其他站点配置</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // ...</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  markdown</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    headers</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 用到哪一级就提取哪一级</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      level</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div>`,7)),e("p",null,[s[13]||(s[13]=i("在上方提取更深层级的标题后，你就能在 ")),t(a,{to:"/zh/config/theme/layout.html#headerdepth"},{default:n(()=>s[11]||(s[11]=[i("主题选项")])),_:1}),s[14]||(s[14]=i(" 或 ")),t(a,{to:"/zh/config/frontmatter/layout.html#headerdepth"},{default:n(()=>s[12]||(s[12]=[i("页面 Frontmatter")])),_:1}),s[15]||(s[15]=i(" 中通过增加 ")),s[16]||(s[16]=e("code",null,"headerDepth",-1)),s[17]||(s[17]=i(" 的数值来展示更多标题了。"))]),s[40]||(s[40]=e("h2",{id:"调整内容宽度",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#调整内容宽度"},[e("span",null,"调整内容宽度")])],-1)),e("p",null,[s[19]||(s[19]=i("如果你对默认的内容宽度不满意，你可以通过在 ")),t(a,{to:"/zh/config/style.html#%E5%B8%83%E5%B1%80%E8%AE%BE%E7%BD%AE"},{default:n(()=>s[18]||(s[18]=[i("调色板文件")])),_:1}),s[20]||(s[20]=i(" 中设置 ")),s[21]||(s[21]=e("code",null,"$content-width",-1)),s[22]||(s[22]=i(" 变量来调整内容宽度。"))]),s[41]||(s[41]=l('<div class="hint-container warning"><p class="hint-container-title">内容宽度很窄</p><p>如果你觉得内容宽度很窄，这大概率是你的个人审美问题，因为 vuepress-theme-hope 遵循了最佳布局设计实践。相关讨论与让内容占满屏幕的方式的解决办法，详见 <a href="https://github.com/orgs/vuepress-theme-hope/discussions/3742" target="_blank" rel="noopener noreferrer">此讨论</a>。</p></div><h2 id="配置中的链接" tabindex="-1"><a class="header-anchor" href="#配置中的链接"><span>配置中的链接</span></a></h2><p>打包工具需要知道要打包的资源的路径，所以只有可以静态分析的内容才能被打包。这意味着：</p><ul><li>在 Markdown 中：只支持相对页面链接和图片链接</li><li>在 html 中 (包括 vue 模板) ：只支持相对链接，包括 <code>img</code> 和 <code>video</code> 标签的 <code>src</code> 属性</li><li>在样式文件中 (css, scss) ：一些资源，包括背景图片 url，字体文件等</li><li>在脚本文件中：<code>import</code> 语句或 <code>import()</code> 表达式中的链接</li></ul>',4)),e("p",null,[s[25]||(s[25]=i("而对于 VuePress 中所有的配置，包括 ")),t(a,{to:"/zh/cookbook/vuepress/page.html#frontmatter"},{default:n(()=>s[23]||(s[23]=[i("frontmatter")])),_:1}),s[26]||(s[26]=i(" 、")),t(a,{to:"/zh/cookbook/vuepress/config.html"},{default:n(()=>s[24]||(s[24]=[i("VuePress 配置文件")])),_:1}),s[27]||(s[27]=i(" 以及主题选项和插件选项，VuePress 都会将它们解析为数据，所以它们不能被打包工具静态分析。这意味着任何链接都会保持原样，所以你必须使其可解析。"))]),s[42]||(s[42]=l("<p>大多数链接将接受以下值：</p><ul><li><p>完整链接: 可以直接访问，如 <code>https://example.com/example.jpg</code></p></li><li><p>路由链接: 将从站点根目录解析，如 <code>/foo/example.jpg</code>。</p><p>在不同的基础路径下，路由链接对应的实际路径名会有所不同，例如：基础路径为 <code>/</code> 时为 <code>/foo/example.jpg</code>，基础路径为 <code>/bar/</code> 时为 <code>/bar/foo/example.jpg</code></p></li></ul>",2)),e("p",null,[s[29]||(s[29]=i("只有少数选项会保持输入不变，这意味着以 ")),s[30]||(s[30]=e("code",null,"/",-1)),s[31]||(s[31]=i(" 开头的输入不会自动添加基础路径。这些选项会在文档中给出警告提示，如 ")),t(a,{to:"/zh/cookbook/vuepress/config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:n(()=>s[28]||(s[28]=[i("VuePress 配置文件")])),_:1}),s[32]||(s[32]=i(" 中的 ")),s[33]||(s[33]=e("code",null,"head",-1)),s[34]||(s[34]=i(" 选项。"))])])}const B=k(d,[["render",g],["__file","common-question.html.vue"]]),y=JSON.parse('{"path":"/zh/faq/common-question.html","title":"普遍问题","lang":"zh-CN","frontmatter":{"title":"普遍问题","icon":"circle-question","order":1,"category":["FAQ"],"description":"添加 Markdown 扩展 你可以在 中使用 extendsMarkdown 钩子来添加 Markdown 扩展: 如何让侧边栏可折叠 / 如何在移动端显示 TOC / 如何在 PC 上将侧边栏置于左侧 为了更好的适应不同尺寸的设备，主题使用 通过屏幕宽度来调整布局。 由于布局是预渲染的，所有尺寸的屏幕共享相同的 DOM 结构，为了正确的首屏渲染和较...","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/faq/common-question.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.gitee.io/v2/faq/common-question.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/zh/faq/common-question.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"普遍问题"}],["meta",{"property":"og:description","content":"添加 Markdown 扩展 你可以在 中使用 extendsMarkdown 钩子来添加 Markdown 扩展: 如何让侧边栏可折叠 / 如何在移动端显示 TOC / 如何在 PC 上将侧边栏置于左侧 为了更好的适应不同尺寸的设备，主题使用 通过屏幕宽度来调整布局。 由于布局是预渲染的，所有尺寸的屏幕共享相同的 DOM 结构，为了正确的首屏渲染和较..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-23T16:54:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-23T16:54:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"普遍问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-23T16:54:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"添加 Markdown 扩展","slug":"添加-markdown-扩展","link":"#添加-markdown-扩展","children":[]},{"level":2,"title":"如何让侧边栏可折叠 / 如何在移动端显示 TOC / 如何在 PC 上将侧边栏置于左侧","slug":"如何让侧边栏可折叠-如何在移动端显示-toc-如何在-pc-上将侧边栏置于左侧","link":"#如何让侧边栏可折叠-如何在移动端显示-toc-如何在-pc-上将侧边栏置于左侧","children":[]},{"level":2,"title":"显示四级或更多级的标题","slug":"显示四级或更多级的标题","link":"#显示四级或更多级的标题","children":[]},{"level":2,"title":"调整内容宽度","slug":"调整内容宽度","link":"#调整内容宽度","children":[]},{"level":2,"title":"配置中的链接","slug":"配置中的链接","link":"#配置中的链接","children":[]}],"git":{"createdTime":1703871391000,"updatedTime":1727110456000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":7}]},"readingTime":{"minutes":3.62,"words":1087},"filePathRelative":"zh/faq/common-question.md","localizedDate":"2023年12月29日","excerpt":"","autoDesc":true}');export{B as comp,y as data};
