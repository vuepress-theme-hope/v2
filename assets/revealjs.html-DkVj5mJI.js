import{aj as c,ak as g,ao as s,an as A,ap as e,aq as t,as as a,am as h,ar as p,al as m}from"./app-3Fu3LGel.js";const u={},v={class:"hint-container details"};function B(y,i){const r=p("CodeTabs"),k=p("RevealJs"),d=p("MdDemo"),o=p("RouteLink");return m(),g("div",null,[i[14]||(i[14]=s("p",null,"在你的 VuePress 站点中添加幻灯片。",-1)),A(" more "),i[15]||(i[15]=s("h2",{id:"配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置"},[s("span",null,"配置")])],-1)),i[16]||(i[16]=s("p",null,[e("在你的项目中安装 "),s("code",null,"@vuepress/plugin-revealjs"),e(":")],-1)),t(r,{id:"10",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:a(({value:l,isActive:n})=>i[0]||(i[0]=[e("pnpm")])),title1:a(({value:l,isActive:n})=>i[1]||(i[1]=[e("yarn")])),title2:a(({value:l,isActive:n})=>i[2]||(i[2]=[e("npm")])),tab0:a(({value:l,isActive:n})=>i[3]||(i[3]=[s("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pnpm"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vuepress/plugin-revealjs@next")])])])],-1)])),tab1:a(({value:l,isActive:n})=>i[4]||(i[4]=[s("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vuepress/plugin-revealjs@next")])])])],-1)])),tab2:a(({value:l,isActive:n})=>i[5]||(i[5]=[s("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," i"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vuepress/plugin-revealjs@next")])])])],-1)])),_:1}),i[17]||(i[17]=h(`<p>之后启用它:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      revealjs</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><h2 id="幻灯片语法" tabindex="-1"><a class="header-anchor" href="#幻灯片语法"><span>幻灯片语法</span></a></h2><ul><li>使用 <code>---</code> 分割幻灯片</li><li>使用 <code>--</code> 对幻灯片进行二次分割(垂直显示)</li></ul><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slidestart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- slide1 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- slide2 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- slide3 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slideend</span></span></code></pre></div>`,5)),s("details",v,[i[6]||(i[6]=s("summary",null,"示例",-1)),t(k,{id:"revealjs-42",code:"eJzjUlZWeLpz9/PG9c87258taH+5aAYX15MdDU92rHrWvfTZnM5n09qfrp3+dFKPQvTLyfue9S2N1cgoKSkottLXz80sLkkt0s3IL0jVS87P1VR4Pqvl2bqtLybs5eLS1dXlApn9ZPfi5wsaX66e8WTXOi6uhISErGKFaCNdkxpDXdNYruT8vOIShcSUFAVbBY1EHYUkTQVbO4VqLgWFzDQFjZLKgtT8NIUkBVtbWwWl0ryU1LTMvNQUJU2FotSS0qI8hUQFbQVDay6gciSBJGuuWmuQTVwAFdhXnA==",theme:"auto"}),i[7]||(i[7]=h(`<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slidestart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 幻灯片标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">一个拥有文字和 </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">链接</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">https://mister-hope.com</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 的段落</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 代码高亮</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`js [2-4|1-5]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;undefined&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slideend</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))]),i[18]||(i[18]=h('<p>默认情况下，我们使用 <code>auto</code> 主题来渲染幻灯片，你也可以通过 <code>@slidestart 主题名称</code> 使用其他主题。</p><p>你可以通过插件选项中的 <code>themes</code> 启用以下主题:</p><ul><li><code>auto</code> (默认)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul><p>各主题的外观，详见 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/themes.html" target="_blank" rel="noopener noreferrer">幻灯片主题</a>。</p><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示"><span>演示</span></a></h2>',5)),t(d,{title:"简单幻灯片演示",id:"md-demo-119"},{default:a(()=>[t(k,{id:"revealjs-121",code:"eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr5+bWVySWqSbkV+Qqpecn6up8HxWy7N1W19M2MvFpaury4VqqBFQUOHlwp3PZ68DWgBngoQx1BrrAZ2QkJCQVcyVnJ9XXKKQqGCrYGgNEgIpx1ANNERFhctLI6YkI7UkMd5AB8ow1ATqiykuzY2vzrQ1qAUpAgAALl2Z",theme:"auto"})]),code:a(()=>i[8]||(i[8]=[s("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"@slidestart")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"## 幻灯片 1")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"一个有文字和 "),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"["),s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"链接"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"]"),s("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#E06C75"}},"("),s("span",{style:{"--shiki-light":"#A626A4","--shiki-light-text-decoration":"inherit","--shiki-dark":"#C678DD","--shiki-dark-text-decoration":"underline"}},"https://mister-hope.com"),s("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#E06C75"}},")"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 的段落")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"---")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"## 幻灯片 2")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 项目 1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 项目 2")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"---")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"## 幻灯片 3.1")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```js")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"const"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E5C07B"}}," a"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}}," ="),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," 1"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"--")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"## 幻灯片 3.2")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"$$")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"J(\\theta_0,\\theta_1) = \\sum_{i=0}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"$$")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"@slideend")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),i[19]||(i[19]=h('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>详细与完整的演示详见 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html" target="_blank" rel="noopener noreferrer">幻灯片演示</a>。</p></div><h2 id="自定义-reveal-js" tabindex="-1"><a class="header-anchor" href="#自定义-reveal-js"><span>自定义 Reveal.js</span></a></h2><h3 id="内置插件" tabindex="-1"><a class="header-anchor" href="#内置插件"><span>内置插件</span></a></h3><p>你可以通过插件选项中的 <code>plugins</code> 启用 reveal.js 中的内置插件。它接受以下插件名称的数组:</p><ul><li><code>highlight</code></li><li><code>math</code></li><li><code>search</code></li><li><code>notes</code></li><li><code>zoom</code></li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>为了支持 Markdown 语法，我们总会启用 <code>markdown</code> 插件。</p></div><h3 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置"><span>高级配置</span></a></h3>',7)),s("p",null,[i[10]||(i[10]=e("你也可以在")),t(o,{to:"/zh/cookbook/vuepress/config.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:a(()=>i[9]||(i[9]=[e("客户端配置文件")])),_:1}),i[11]||(i[11]=e(" 中导入并调用 ")),i[12]||(i[12]=s("code",null,"defineRevealJsConfig",-1)),i[13]||(i[13]=e(" 来自定义 reveal.js:"))]),i[20]||(i[20]=h(`<div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/client.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineRevealJsConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;@vuepress/plugin-revealjs/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">defineRevealJsConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 在此设置 reveal.js 选项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div><div class="hint-container note"><p class="hint-container-title">注</p><p>Reveal.js 还提供了<a href="https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware" target="_blank" rel="noopener noreferrer">更多的插件</a>，你可以通过 <code>plugin</code> 选项在 <code>defineRevealJsConfig</code> 中添加它们，这种自定义行为不会影响你声明的内置插件。</p></div><h3 id="页面级配置" tabindex="-1"><a class="header-anchor" href="#页面级配置"><span>页面级配置</span></a></h3><p>你也可以在 Frontmatter 设置 <code>revealJs</code> 以设置特定页面的 reveal.js 选项。</p><p>Reveal.js 选项，请参见<a href="https://revealjs.com/config/" target="_blank" rel="noopener noreferrer">reveal.js config</a>，Reveal.js 用法，请参阅 <a href="https://revealjs.com/" target="_blank" rel="noopener noreferrer">reveal.js 文档</a>。</p>`,5))])}const F=c(u,[["render",B],["__file","revealjs.html.vue"]]),f=JSON.parse('{"path":"/zh/guide/markdown/content/revealjs.html","title":"幻灯片","lang":"zh-CN","frontmatter":{"title":"幻灯片","icon":"person-chalkboard","category":["Markdown"],"tag":["Markdown","幻灯片"],"description":"在你的 VuePress 站点中添加幻灯片。","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/guide/markdown/content/revealjs.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.github.io/v2/guide/markdown/content/revealjs.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/content/revealjs.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"幻灯片"}],["meta",{"property":"og:description","content":"在你的 VuePress 站点中添加幻灯片。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-22T14:28:28.000Z"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:tag","content":"幻灯片"}],["meta",{"property":"article:modified_time","content":"2024-09-22T14:28:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"幻灯片\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-22T14:28:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.github.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"幻灯片语法","slug":"幻灯片语法","link":"#幻灯片语法","children":[]},{"level":2,"title":"演示","slug":"演示","link":"#演示","children":[]},{"level":2,"title":"自定义 Reveal.js","slug":"自定义-reveal-js","link":"#自定义-reveal-js","children":[{"level":3,"title":"内置插件","slug":"内置插件","link":"#内置插件","children":[]},{"level":3,"title":"高级配置","slug":"高级配置","link":"#高级配置","children":[]},{"level":3,"title":"页面级配置","slug":"页面级配置","link":"#页面级配置","children":[]}]}],"git":{"createdTime":1643270355000,"updatedTime":1727015308000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.99,"words":597},"filePathRelative":"zh/guide/markdown/content/revealjs.md","localizedDate":"2022年1月27日","excerpt":"<p>在你的 VuePress 站点中添加幻灯片。</p>\\n","autoDesc":true}');export{F as comp,f as data};
