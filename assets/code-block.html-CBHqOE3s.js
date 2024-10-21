import{aj as p,ak as r,am as l,aq as k,as as e,ar as d,al as o,ap as n,ao as s}from"./app-3Fu3LGel.js";const c={};function g(u,i){const h=d("CodeTabs");return o(),r("div",null,[i[6]||(i[6]=l(`<h2 id="高亮器" tabindex="-1"><a class="header-anchor" href="#高亮器"><span>高亮器</span></a></h2><h3 id="shiki" tabindex="-1"><a class="header-anchor" href="#shiki"><span>Shiki</span></a></h3><p>使用 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/shiki.html" target="_blank" rel="noopener noreferrer"><code>@vuepress/plugin-shiki</code></a>，你可以使用 <a href="https://shiki.style" target="_blank" rel="noopener noreferrer">shiki</a> 来高亮你的代码块。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.shiki</code> 选项作为插件选项提供给 <code>@vuepress/plugin-shiki</code>。</p></div><h4 id="代码主题" tabindex="-1"><a class="header-anchor" href="#代码主题"><span>代码主题</span></a></h4><p>如果你想要使用单一主题，你可以在主题选项中设置 <code>plugins.shiki.theme</code>：</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      shiki</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 你想要使用的主题</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;nord&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><p>如果你想要在日间模式和夜间模式下使用不同的主题，你可以在主题选项中设置 <code>plugins.shiki.themes</code>：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      shiki</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 你想要使用的主题</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        themes</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          light</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;one-light&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          dark</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;one-dark-pro&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了让主题正确显示 shiki，你应该根据你想要使用的主题为代码块设置背景颜色和字体颜色，通过在 <code>.vuepress/styles/config.scss</code> 中添加这些变量来设置：</p><ul><li><code>$code-bg-color</code>: 代码块的背景颜色</li><li><code>$code-color</code>: 代码块的字体颜色</li></ul><h3 id="prism-js" tabindex="-1"><a class="header-anchor" href="#prism-js"><span>Prism.js</span></a></h3><p>通过 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/prismjs.html" target="_blank" rel="noopener noreferrer"><code>@vuepress/plugin-prismjs</code></a>，你可以使用 <a href="https://prismjs.com" target="_blank" rel="noopener noreferrer">PrismJS</a> 来高亮你的代码块。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.prismjs</code> 选项作为插件选项提供给 <code>@vuepress/plugin-prismjs</code>。</p></div><p>由于它不是默认的高亮器，所以你需要先安装插件：</p>`,15)),k(h,{id:"54",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>i[0]||(i[0]=[n("pnpm")])),title1:e(({value:a,isActive:t})=>i[1]||(i[1]=[n("yarn")])),title2:e(({value:a,isActive:t})=>i[2]||(i[2]=[n("npm")])),tab0:e(({value:a,isActive:t})=>i[3]||(i[3]=[s("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pnpm"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vuepress/plugin-prismjs@next")])])])],-1)])),tab1:e(({value:a,isActive:t})=>i[4]||(i[4]=[s("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vuepress/plugin-prismjs@next")])])])],-1)])),tab2:e(({value:a,isActive:t})=>i[5]||(i[5]=[s("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," i"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vuepress/plugin-prismjs@next")])])])],-1)])),_:1}),i[7]||(i[7]=l('<p>之后在主题选项中启用 prismjs 插件并使用 <code>plugins.prismjs</code> 进行自定义（你不能设置 <code>plugins.shiki</code> 选项）：</p><p>我们支持所有 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/prismjs.html" target="_blank" rel="noopener noreferrer"><code>@vuepress/plugin-prismjs</code></a> 中的选项。</p><h2 id="复制按钮" tabindex="-1"><a class="header-anchor" href="#复制按钮"><span>复制按钮</span></a></h2><p><code>vuepress-theme-hope</code> 使用 <a href="https://ecosystem.vuejs.press/zh/plugins/features/copy-code.html" target="_blank" rel="noopener noreferrer"><code>@vuepress/plugin-copy-code</code></a> 在所有代码块上添加复制按钮。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.copyCode</code> 选项作为插件选项提供给 <code>@vuepress/plugin-copy-code</code>。</p></div><p>默认情况下，复制按钮仅在桌面模式下显示。在主题选项中设置 <code>plugins.copyCode.showInMobile</code> 为 <code>true</code> 可以在移动设备上显示此按钮。</p><p>用户按下复制按钮后，将显示一个成功提示，默认持续时间为 <code>2000</code> 毫秒，你可以通过主题选项中的 <code>plugins.copyCode.duration</code> 自定义它，也可以通过将持续时间设置为 <code>0</code> 来禁用提示。</p>',7))])}const A=p(c,[["render",g],["__file","code-block.html.vue"]]),B=JSON.parse('{"path":"/zh/guide/feature/code-block.html","title":"代码块","lang":"zh-CN","frontmatter":{"title":"代码块","icon":"code","category":["功能"],"tag":["功能","代码块"],"description":"高亮器 Shiki 使用 @vuepress/plugin-shiki，你可以使用 shiki 来高亮你的代码块。 相关信息 vuepress-theme-hope 将主题选项中的 plugins.shiki 选项作为插件选项提供给 @vuepress/plugin-shiki。 代码主题 如果你想要使用单一主题，你可以在主题选项中设置 plugins...","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/guide/feature/code-block.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.github.io/v2/guide/feature/code-block.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/zh/guide/feature/code-block.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"代码块"}],["meta",{"property":"og:description","content":"高亮器 Shiki 使用 @vuepress/plugin-shiki，你可以使用 shiki 来高亮你的代码块。 相关信息 vuepress-theme-hope 将主题选项中的 plugins.shiki 选项作为插件选项提供给 @vuepress/plugin-shiki。 代码主题 如果你想要使用单一主题，你可以在主题选项中设置 plugins..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-19T15:01:14.000Z"}],["meta",{"property":"article:tag","content":"功能"}],["meta",{"property":"article:tag","content":"代码块"}],["meta",{"property":"article:modified_time","content":"2024-07-19T15:01:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-19T15:01:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.github.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"高亮器","slug":"高亮器","link":"#高亮器","children":[{"level":3,"title":"Shiki","slug":"shiki","link":"#shiki","children":[]},{"level":3,"title":"Prism.js","slug":"prism-js","link":"#prism-js","children":[]}]},{"level":2,"title":"复制按钮","slug":"复制按钮","link":"#复制按钮","children":[]}],"git":{"createdTime":1716871740000,"updatedTime":1721401274000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":1.89,"words":568},"filePathRelative":"zh/guide/feature/code-block.md","localizedDate":"2024年5月28日","excerpt":"","autoDesc":true}');export{A as comp,B as data};
