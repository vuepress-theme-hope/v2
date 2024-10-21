import{aA as o,b2 as l,aj as p,ak as r,ao as s,an as h,am as i,ap as d,aq as k,al as m}from"./app-C5NAKw-g.js";const c=o({__name:"darkmode.html",setup(a,{expose:e}){e();const t={get ColorModeSwitch(){return l}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),g={class:"hint-container tip"};function u(a,e,t,n,y,A){return m(),r("div",null,[e[2]||(e[2]=s("p",null,"The theme supports darkmode and allows you to customize it.",-1)),h(" more "),e[3]||(e[3]=i(`<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><p>You can config darkmode through <code>darkmode</code> in theme options.</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    darkmode</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;your option&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><p>Available options:</p><ul><li><code>&quot;switch&quot;</code>: switch between dark, light and auto (default)</li><li><code>&quot;toggle&quot;</code>: toggle between lightmode and darkmode</li><li><code>&quot;auto&quot;</code>: Automatically decide whether to apply dark mode based on user device&#39;s color-scheme or current time</li><li><code>&quot;enable&quot;</code>: only dark mode</li><li><code>&quot;disable&quot;</code>: disable dark mode</li></ul>`,5)),s("div",g,[e[1]||(e[1]=s("p",{class:"hint-container-title"},"Try it",-1)),s("p",null,[e[0]||(e[0]=d("Toggle the button to see effects: ")),k(n.ColorModeSwitch)])]),e[4]||(e[4]=i(`<h2 id="getting-status" tabindex="-1"><a class="header-anchor" href="#getting-status"><span>Getting Status</span></a></h2><ul><li><p>In Markdown files or Vue Template, you can access <code>$isDarkmode</code> to get darkmode status directly.</p></li><li><p>In scripts, you can import <code>useDarkmode</code> from <code>vuepress-theme-hope/client</code> to get darkmode status:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">useDarkmode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">isDarkmode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> useDarkmode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">isDarkmode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// get darkmode status</span></span></code></pre></div></li></ul>`,2))])}const f=p(c,[["render",u],["__file","darkmode.html.vue"]]),F=JSON.parse('{"path":"/guide/interface/darkmode.html","title":"Darkmode","lang":"en-US","frontmatter":{"title":"Darkmode","icon":"circle-half-stroke","order":1,"category":["Interface"],"tag":["Darkmode","Interface"],"description":"The theme supports darkmode and allows you to customize it.","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/guide/interface/darkmode.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope.gitee.io/v2/zh/guide/interface/darkmode.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/guide/interface/darkmode.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Darkmode"}],["meta",{"property":"og:description","content":"The theme supports darkmode and allows you to customize it."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-23T11:46:45.000Z"}],["meta",{"property":"article:tag","content":"Darkmode"}],["meta",{"property":"article:tag","content":"Interface"}],["meta",{"property":"article:modified_time","content":"2024-09-23T11:46:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Darkmode\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-23T11:46:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Getting Status","slug":"getting-status","link":"#getting-status","children":[]}],"git":{"createdTime":1644936187000,"updatedTime":1727092005000,"contributors":[{"name":"Nan Huang","email":"teddyhuangnan@gmail.com","commits":1},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":18}]},"readingTime":{"minutes":0.54,"words":161},"filePathRelative":"guide/interface/darkmode.md","localizedDate":"February 15, 2022","excerpt":"<p>The theme supports darkmode and allows you to customize it.</p>\\n","autoDesc":true}');export{f as comp,F as data};
