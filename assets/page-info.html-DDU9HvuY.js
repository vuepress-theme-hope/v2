import{aj as h,ak as o,ao as i,ap as t,an as r,aq as s,am as l,as as d,ar as p,al as k}from"./app-C5NAKw-g.js";const g={},c={id:"参数",tabindex:"-1"},m={class:"header-anchor",href:"#参数"},u={id:"作者",tabindex:"-1"},A={class:"header-anchor",href:"#作者"},B={id:"浏览量",tabindex:"-1"},y={class:"header-anchor",href:"#浏览量"};function f(F,e){const a=p("Badge"),n=p("RouteLink");return k(),o("div",null,[e[8]||(e[8]=i("p",null,[i("code",null,"vuepress-theme-hope"),t(" 实现了文章信息展示。")],-1)),r(" more "),e[9]||(e[9]=i("h2",{id:"启用",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#启用"},[i("span",null,"启用")])],-1)),e[10]||(e[10]=i("p",null,[t("页面信息默认全局启用，同时支持页面配置。你可以在特定页面的 front matter 中设置 "),i("code",null,"pageInfo: false"),t(" 来局部禁用它。")],-1)),e[11]||(e[11]=i("p",null,[t("如果你需要保持全局禁用，请在主题选项中设置 "),i("code",null,"pageInfo: false"),t("。这样你可以在特定页面的 front matter 中设置 "),i("code",null,"pageInfo"),t(" 来局部启用它。")],-1)),i("h2",c,[i("a",m,[i("span",null,[e[0]||(e[0]=t("参数 ")),s(a,{text:"支持页面配置"})])])]),e[12]||(e[12]=l("<p><code>pageInfo</code> 默认接受一个字符串数组，可以填入各条目名称，填入的顺序即是各条目显示的顺序。</p><p>条目可选的值和对应内容如下:</p><table><thead><tr><th>条目</th><th>对应内容</th><th>页面 frontmatter 值</th><th>主题设置的配置项</th></tr></thead><tbody><tr><td><code>&quot;Author&quot;</code></td><td>作者</td><td><code>author</code></td><td><code>author</code></td></tr><tr><td><code>&quot;Date&quot;</code></td><td>写作日期</td><td><code>date</code></td><td>N/A</td></tr><tr><td><code>&quot;Original&quot;</code></td><td>是否原创</td><td><code>isOriginal</code></td><td>N/A</td></tr><tr><td><code>&quot;Category&quot;</code></td><td>分类</td><td><code>category</code></td><td>N/A</td></tr><tr><td><code>&quot;Tag&quot;</code></td><td>标签</td><td><code>tag</code></td><td>N/A</td></tr><tr><td><code>&quot;ReadingTime&quot;</code></td><td>预计阅读时间</td><td>N/A(自动生成)</td><td>N/A</td></tr><tr><td><code>&quot;Word&quot;</code></td><td>字数</td><td>N/A(自动生成)</td><td>N/A</td></tr><tr><td><code>&quot;PageView&quot;</code></td><td>访问量</td><td><code>pageview</code> (仅 Waline 可用)</td><td><code>plugins.comment.pageview</code></td></tr></tbody></table><p>默认会显示 “作者，访问量，写作日期，分类，标签，预计阅读时间”。</p>",4)),i("h3",u,[i("a",A,[i("span",null,[e[1]||(e[1]=t("作者 ")),s(a,{text:"支持页面配置"})])])]),e[13]||(e[13]=l(`<p>你可以在主题选项中设置 <code>author</code> 来全局配置默认作者信息，或者在页面的 frontmatter 中设置 <code>author</code> 来为特定页面设置作者。</p><p>作者信息可以是一个字符串表示作者名字，也可以是一个对象，对象包含以下字段:</p><ul><li><code>name</code>: 作者名字，必填</li><li><code>url</code>: 作者网站，可选</li><li><code>email</code>: 作者邮箱，可选</li></ul><p>如果有多个作者，你也可以设置一个作者数组。</p><p>当主题选项中已经设置了默认的作者信息时，你可以在页面的 frontmatter 中设置 <code>author: false</code> 来避免回退到默认作者。</p><p>例子:</p><ul><li><p>单个作者名字:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">author</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Mr.Hope</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div></li><li><p>多个作者名字:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">author</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Mr.Hope</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div></li><li><p>作者信息对象:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">author</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Mr.Hope</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">https://mister-hope.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  email</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mister-hope@outlook.com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div></li><li><p>多个作者信息对象:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">author</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Mr.Hope</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">https://mister-hope.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    email</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mister-hope@outlook.com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Meteorlxy</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div></li></ul><h3 id="写作日期" tabindex="-1"><a class="header-anchor" href="#写作日期"><span>写作日期</span></a></h3><p>建议 time 以标准格式输入日期，即 <code>xxxx-xx-xx</code> 的形式，如 “2020 年 4 月 1 日” 应当输入为 <code>2020-04-01</code></p><p>例子:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2020-01-01</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div><div class="hint-container note"><p class="hint-container-title">注</p><p>在基于 Git 的项目中运行时，写作日期将回退到当前文件的首次提交日期。</p></div><h3 id="分类与标签" tabindex="-1"><a class="header-anchor" href="#分类与标签"><span>分类与标签</span></a></h3>`,13)),i("p",null,[e[3]||(e[3]=t("详见 ")),s(n,{to:"/zh/guide/blog/category-and-tags.html"},{default:d(()=>e[2]||(e[2]=[t("博客章节")])),_:1})]),e[14]||(e[14]=i("h3",{id:"阅读时间",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#阅读时间"},[i("span",null,"阅读时间")])],-1)),e[15]||(e[15]=i("p",null,[t("默认的统计方式是一分钟 300 字，你可以设置在主题选项中设置 "),i("code",null,"plugins.readingTime.wordPerMinute"),t(" 来覆盖它，该选项不支持在页面单独配置。")],-1)),i("h3",B,[i("a",y,[i("span",null,[e[4]||(e[4]=t("浏览量 ")),s(a,{text:"支持页面配置"})])])]),i("p",null,[e[6]||(e[6]=t("当配置 Waline 作为 ")),s(n,{to:"/zh/guide/feature/comment.html"},{default:d(()=>e[5]||(e[5]=[t("评论功能")])),_:1}),e[7]||(e[7]=t(" 的提供者时，该功能默认启用。"))]),e[16]||(e[16]=l(`<p>例子:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">pageview</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div>`,2))])}const b=h(g,[["render",f],["__file","page-info.html.vue"]]),x=JSON.parse('{"path":"/zh/guide/feature/page-info.html","title":"页面信息","lang":"zh-CN","frontmatter":{"title":"页面信息","icon":"circle-info","category":["功能"],"tag":["功能","页面信息"],"description":"vuepress-theme-hope 实现了文章信息展示。","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/guide/feature/page-info.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.gitee.io/v2/guide/feature/page-info.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/zh/guide/feature/page-info.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"页面信息"}],["meta",{"property":"og:description","content":"vuepress-theme-hope 实现了文章信息展示。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-25T17:04:37.000Z"}],["meta",{"property":"article:tag","content":"功能"}],["meta",{"property":"article:tag","content":"页面信息"}],["meta",{"property":"article:modified_time","content":"2024-09-25T17:04:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"页面信息\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-25T17:04:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"启用","slug":"启用","link":"#启用","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[{"level":3,"title":"作者","slug":"作者","link":"#作者","children":[]},{"level":3,"title":"写作日期","slug":"写作日期","link":"#写作日期","children":[]},{"level":3,"title":"分类与标签","slug":"分类与标签","link":"#分类与标签","children":[]},{"level":3,"title":"阅读时间","slug":"阅读时间","link":"#阅读时间","children":[]},{"level":3,"title":"浏览量","slug":"浏览量","link":"#浏览量","children":[]}]}],"git":{"createdTime":1644936187000,"updatedTime":1727283877000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":8}]},"readingTime":{"minutes":2.29,"words":688},"filePathRelative":"zh/guide/feature/page-info.md","localizedDate":"2022年2月15日","excerpt":"<p><code>vuepress-theme-hope</code> 实现了文章信息展示。</p>\\n","autoDesc":true}');export{b as comp,x as data};