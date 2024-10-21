import{aj as h,ak as l,ao as a,an as n,am as e,ap as i,aq as p,as as k,ar as r,al as o}from"./app-C5NAKw-g.js";const d={};function g(c,s){const t=r("RouteLink");return o(),l("div",null,[s[3]||(s[3]=a("p",null,"此页面指导你如何自定义主题颜色。",-1)),n(" more "),s[4]||(s[4]=e(`<h2 id="修改内置颜色" tabindex="-1"><a class="header-anchor" href="#修改内置颜色"><span>修改内置颜色</span></a></h2><p>主题通过配置文件和调色板控制颜色。这些文件是 VuePress 项目文件夹下的 <code>.vuepress/styles/{config,palette}.scss</code> 文件。</p><p>你可能需要分为两种情况设置你的颜色：</p><ol><li>此颜色在日间模式和夜间模式保持不变，如主题色。</li><li>此颜色在日间模式、夜间模式下不同，如背景色、字体、边框颜色等。</li></ol><p>对于前者，你需要直接写入变量值，如：</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/styles/config.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$theme-color</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">3eaf7c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>对于后者，你需要设置拥有 <code>light</code> 和 <code>dark</code> 键名的颜色映射，如：</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/styles/palette.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$vp-c-bg</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: (</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  light</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fff</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  dark</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">000</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div>`,8)),a("p",null,[s[1]||(s[1]=i("所有可用的颜色变量详见 ")),p(t,{to:"/zh/config/style.html#%E9%A2%9C%E8%89%B2%E8%AE%BE%E7%BD%AE"},{default:k(()=>s[0]||(s[0]=[i("主题配置 → 颜色设置")])),_:1}),s[2]||(s[2]=i("。"))]),s[5]||(s[5]=e(`<h2 id="修改其他颜色" tabindex="-1"><a class="header-anchor" href="#修改其他颜色"><span>修改其他颜色</span></a></h2><p>有些时候，你可能希望修改一些不在 <code>palette.scss</code> 中的颜色，比如代码块的背景色，此时你可以通过开发者工具查看对应的颜色属性值是否为 CSS 变量。</p><p>如果是你可以在 <code>index.scss</code> 中手动覆盖这一变量值:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/styles/index.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 覆盖代码块演示标题颜色</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">#app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --code-c-bg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fff</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">data-theme</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">dark</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    --code-c-bg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>如果不是，请你自己编写选择器覆盖它们:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/styles/index.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 覆盖代码块语言字体颜色</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">pre</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">language-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">::before</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fff</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> !important</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">data-theme</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">dark</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">222</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> !important</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div>`,6))])}const A=h(d,[["render",g],["__file","color.html.vue"]]),y=JSON.parse('{"path":"/zh/guide/customize/color.html","title":"修改颜色","lang":"zh-CN","frontmatter":{"title":"修改颜色","icon":"palette","order":1,"category":["教程","自定义"],"tag":["自定义"],"description":"此页面指导你如何自定义主题颜色。","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/guide/customize/color.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.gitee.io/v2/guide/customize/color.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/zh/guide/customize/color.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"修改颜色"}],["meta",{"property":"og:description","content":"此页面指导你如何自定义主题颜色。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-24T05:39:15.000Z"}],["meta",{"property":"article:tag","content":"自定义"}],["meta",{"property":"article:modified_time","content":"2024-09-24T05:39:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"修改颜色\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-24T05:39:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"修改内置颜色","slug":"修改内置颜色","link":"#修改内置颜色","children":[]},{"level":2,"title":"修改其他颜色","slug":"修改其他颜色","link":"#修改其他颜色","children":[]}],"git":{"createdTime":1673966297000,"updatedTime":1727156355000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":6}]},"readingTime":{"minutes":1.24,"words":373},"filePathRelative":"zh/guide/customize/color.md","localizedDate":"2023年1月17日","excerpt":"<p>此页面指导你如何自定义主题颜色。</p>\\n","autoDesc":true}');export{A as comp,y as data};
