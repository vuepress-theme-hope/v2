import{aj as p,ak as o,am as l,aq as r,as as e,ar as d,al as k,ap as n,ao as s}from"./app-3Fu3LGel.js";const c={};function g(u,i){const h=d("CodeTabs");return k(),o("div",null,[i[6]||(i[6]=l(`<h2 id="highlighter" tabindex="-1"><a class="header-anchor" href="#highlighter"><span>Highlighter</span></a></h2><h3 id="shiki" tabindex="-1"><a class="header-anchor" href="#shiki"><span>Shiki</span></a></h3><p>With <a href="https://ecosystem.vuejs.press/plugins/markdown/shiki.html" target="_blank" rel="noopener noreferrer"><code>@vuepress/plugin-shiki</code></a>, you can use <a href="https://shiki.style" target="_blank" rel="noopener noreferrer">shiki</a> to highlight your code blocks.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p><code>vuepress-theme-hope</code> passes <code>plugins.shiki</code> in theme options as plugin options to <code>@vuepress/plugin-shiki</code>.</p></div><h4 id="code-block-themes" tabindex="-1"><a class="header-anchor" href="#code-block-themes"><span>Code Block Themes</span></a></h4><p>If you want to use a single theme, you can set <code>plugins.shiki.theme</code> in theme options:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      shiki</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // theme you want to use</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;nord&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><p>If you want to use different themes for light mode and dark mode, you can set <code>plugins.shiki.themes</code> in theme options:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      shiki</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // themes you want to use</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        themes</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          light</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;one-light&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          dark</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;one-dark-pro&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To let the theme display shiki correctly, you should set background color and font color for code blocks according to theme you want to use by adding these variables in <code>.vuepress/styles/config.scss</code>:.</p><ul><li><code>$code-bg-color</code>: background color for code blocks</li><li><code>$code-color</code>: font color for code blocks</li></ul><h3 id="prism-js" tabindex="-1"><a class="header-anchor" href="#prism-js"><span>Prism.js</span></a></h3><p>With <a href="https://ecosystem.vuejs.press/plugins/markdown/prismjs.html" target="_blank" rel="noopener noreferrer"><code>@vuepress/plugin-prismjs</code></a>, you can use <a href="https://prismjs.com" target="_blank" rel="noopener noreferrer">prism.js</a> to highlight your code blocks.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p><code>vuepress-theme-hope</code> passes <code>plugins.prismjs</code> in theme options as plugin options to <code>@vuepress/plugin-prismjs</code>.</p></div><p>Since it&#39;s not the default highlighter, so you need to install the plugin first:</p>`,15)),r(h,{id:"54",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:e(({value:t,isActive:a})=>i[0]||(i[0]=[n("pnpm")])),title1:e(({value:t,isActive:a})=>i[1]||(i[1]=[n("yarn")])),title2:e(({value:t,isActive:a})=>i[2]||(i[2]=[n("npm")])),tab0:e(({value:t,isActive:a})=>i[3]||(i[3]=[s("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pnpm"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vuepress/plugin-prismjs@next")])])])],-1)])),tab1:e(({value:t,isActive:a})=>i[4]||(i[4]=[s("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vuepress/plugin-prismjs@next")])])])],-1)])),tab2:e(({value:t,isActive:a})=>i[5]||(i[5]=[s("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," i"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vuepress/plugin-prismjs@next")])])])],-1)])),_:1}),i[7]||(i[7]=l('<p>Then enable prismjs plugin and customize it with <code>plugins.prismjs</code> in theme options (you must not set <code>plugins.shiki</code> option):</p><p>We support all options in <a href="https://ecosystem.vuejs.press/plugins/markdown/prismjs.html" target="_blank" rel="noopener noreferrer"><code>@vuepress/plugin-prismjs</code></a>.</p><h2 id="copy-button" tabindex="-1"><a class="header-anchor" href="#copy-button"><span>Copy Button</span></a></h2><p><code>vuepress-theme-hope</code> use <a href="https://ecosystem.vuejs.press/plugins/features/copy-code.html" target="_blank" rel="noopener noreferrer"><code>@vuepress/plugin-copy-code</code></a> to add copy buttons on all code blocks.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p><code>vuepress-theme-hope</code> passes <code>plugins.copyCode</code> in theme options as plugin options to <code>@vuepress/plugin-copy-code</code>.</p></div><p>By default, the copy button is only displayed on desktop mode. Set <code>plugins.copyCode.showInMobile</code> to <code>true</code> in theme options to display this button on mobile devices.</p><p>A success hint will be displayed once user press the copy button, and its default duration is <code>2000</code> ms, you can customize it with <code>plugins.copyCode.duration</code> in theme options, and you can disable the hint by setting duration to <code>0</code>.</p>',7))])}const y=p(c,[["render",g],["__file","code-block.html.vue"]]),B=JSON.parse('{"path":"/guide/feature/code-block.html","title":"Code Block","lang":"en-US","frontmatter":{"title":"Code Block","icon":"code","category":["Feature"],"tag":["Feature","Code Block"],"description":"Highlighter Shiki With @vuepress/plugin-shiki, you can use shiki to highlight your code blocks. Info vuepress-theme-hope passes plugins.shiki in theme options as plugin options ...","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/guide/feature/code-block.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope.github.io/v2/zh/guide/feature/code-block.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/guide/feature/code-block.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Code Block"}],["meta",{"property":"og:description","content":"Highlighter Shiki With @vuepress/plugin-shiki, you can use shiki to highlight your code blocks. Info vuepress-theme-hope passes plugins.shiki in theme options as plugin options ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-19T15:01:14.000Z"}],["meta",{"property":"article:tag","content":"Feature"}],["meta",{"property":"article:tag","content":"Code Block"}],["meta",{"property":"article:modified_time","content":"2024-07-19T15:01:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Code Block\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-19T15:01:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.github.io/v2/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.github.io/v2/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.github.io/v2/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"Highlighter","slug":"highlighter","link":"#highlighter","children":[{"level":3,"title":"Shiki","slug":"shiki","link":"#shiki","children":[]},{"level":3,"title":"Prism.js","slug":"prism-js","link":"#prism-js","children":[]}]},{"level":2,"title":"Copy Button","slug":"copy-button","link":"#copy-button","children":[]}],"git":{"createdTime":1716871740000,"updatedTime":1721401274000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":1.32,"words":397},"filePathRelative":"guide/feature/code-block.md","localizedDate":"May 28, 2024","excerpt":"","autoDesc":true}');export{y as comp,B as data};
