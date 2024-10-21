import{aj as c,ak as g,ao as i,an as u,ap as e,aq as t,as as a,am as h,ar as p,al as m}from"./app-3Fu3LGel.js";const A={},v={class:"hint-container details"};function y(B,s){const d=p("CodeTabs"),r=p("RevealJs"),k=p("MdDemo"),o=p("RouteLink");return m(),g("div",null,[s[14]||(s[14]=i("p",null,"Add presentation in your VuePress site via Reveal.js.",-1)),u(" more "),s[15]||(s[15]=i("h2",{id:"settings",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#settings"},[i("span",null,"Settings")])],-1)),s[16]||(s[16]=i("p",null,[e("Install "),i("code",null,"@vuepress/plugin-revealjs"),e(" in your project:")],-1)),t(d,{id:"10",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:a(({value:n,isActive:l})=>s[0]||(s[0]=[e("pnpm")])),title1:a(({value:n,isActive:l})=>s[1]||(s[1]=[e("yarn")])),title2:a(({value:n,isActive:l})=>s[2]||(s[2]=[e("npm")])),tab0:a(({value:n,isActive:l})=>s[3]||(s[3]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pnpm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vuepress/plugin-revealjs@next")])])])],-1)])),tab1:a(({value:n,isActive:l})=>s[4]||(s[4]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vuepress/plugin-revealjs@next")])])])],-1)])),tab2:a(({value:n,isActive:l})=>s[5]||(s[5]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," i"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vuepress/plugin-revealjs@next")])])])],-1)])),_:1}),s[17]||(s[17]=h(`<p>Then enabling via:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      revealjs</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><h2 id="slide-syntax" tabindex="-1"><a class="header-anchor" href="#slide-syntax"><span>Slide Syntax</span></a></h2><ul><li>Use <code>---</code> to split slides</li><li>Use <code>--</code> to split the slides second time (vertical display)</li></ul><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slidestart</span></span>
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
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slideend</span></span></code></pre></div>`,5)),i("details",v,[s[6]||(s[6]=i("summary",null,"A basic demo",-1)),t(r,{id:"revealjs-42",code:"eJxNjjFvwjAUhPf3K06wJGpdRNUujVypW/d2Q0hx8As2JLZlPwQI+O+EjeGW0+m7j+Zz/A3eMv69DEz0g2Sy2WaTHI5eHEocGcIngQkWBqvBh/26ciKpfC0Woy/CWbmY+G0Tx5pIKUUP7K/fumGKELVtuytYvauP61J9rmkTQ5l41kKjMq/oauhvXAjwPSo5J449OmitMTsEy70PbGc1Msshh0niBcuGpvlT0TV0ax5PdAdqtj90",theme:"auto"}),s[7]||(s[7]=h(`<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slidestart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## Slide Title</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">A paragraph with some text and a </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">link</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">https://mister-hope.com</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## Highlight</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`js [2-4|1-5]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;undefined&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slideend</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))]),s[18]||(s[18]=h('<p>By default, we use <code>auto</code> theme to render the presentation, but you can also use other themes with <code>@slidestart THEME_NAME</code>.</p><p>You can enable the following themes in reveal.js via <code>themes</code> in plugin options:</p><ul><li><code>auto</code> (Default)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul><p>For the appearance of each theme, see <a href="https://ecosystem.vuejs.press/plugins/markdown/revealjs/themes.html" target="_blank" rel="noopener noreferrer">Themes demo</a>.</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2>',5)),t(k,{title:"Simple presentation demo",id:"md-demo-119"},{default:a(()=>[t(r,{id:"revealjs-121",code:"eJxVjb0KwjAUhff7FBfaoQXTH92UDo66OlppQxtMtGlCc0VBfHcTKJRuh4/vnANRhJdB9QJLgCNaPvH7xK3EtyKJzmiBJD6EfOyR43VQ4/OWSCLr9nmulSMxMWmsyDqjUwDGGCyTWw/wREL78TkEtHJ2mT9u2/bhoDOj809YYXkIKKgr05fjGM5JTVIQb4rNHMrUd2r30s1XVcUvSH9FOzuV",theme:"auto"})]),code:a(()=>s[8]||(s[8]=[i("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"@slidestart")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"## Slide 1")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"A paragraph with some text and a "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"["),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"link"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"]"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#E06C75"}},"("),i("span",{style:{"--shiki-light":"#A626A4","--shiki-light-text-decoration":"inherit","--shiki-dark":"#C678DD","--shiki-dark-text-decoration":"underline"}},"https://mister-hope.com"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#E06C75"}},")")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"---")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"## Slide 2")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," Item 1")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," Item 2")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"---")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"## Slide 3.1")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```js")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E5C07B"}}," a"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," 1"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"--")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"## Slide 3.2")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"$$")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"J(\\theta_0,\\theta_1) = \\sum_{i=0}")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"$$")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"@slideend")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),s[19]||(s[19]=h('<div class="hint-container info"><p class="hint-container-title">Info</p><p>For detailed demo, please see <a href="https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html" target="_blank" rel="noopener noreferrer">revealjs-demo</a>.</p></div><h2 id="customize-reveal-js" tabindex="-1"><a class="header-anchor" href="#customize-reveal-js"><span>Customize Reveal.js</span></a></h2><h3 id="built-in-plugins" tabindex="-1"><a class="header-anchor" href="#built-in-plugins"><span>Built-in Plugins</span></a></h3><p>You can enable built-in plugins in reveal.js via <code>plugins</code> in plugin options. It accepts an array of the following plugin names:</p><ul><li><code>highlight</code></li><li><code>math</code></li><li><code>search</code></li><li><code>notes</code></li><li><code>zoom</code></li></ul><div class="hint-container note"><p class="hint-container-title">Note</p><p><code>markdown</code> plugin is enabled anyway to support markdown grammar.</p></div><h3 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration"><span>Advanced Configuration</span></a></h3>',7)),i("p",null,[s[10]||(s[10]=e("You can also import and call ")),s[11]||(s[11]=i("code",null,"defineRevealJsConfig",-1)),s[12]||(s[12]=e(" in ")),t(o,{to:"/cookbook/vuepress/config.html#client-config-file"},{default:a(()=>s[9]||(s[9]=[e("client config file")])),_:1}),s[13]||(s[13]=e(" to customize reveal.js:"))]),s[20]||(s[20]=h(`<div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/client.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineRevealJsConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;@vuepress/plugin-revealjs/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">defineRevealJsConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // reveal.js options here</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>Reveal.js also provides <a href="https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware" target="_blank" rel="noopener noreferrer">more plugins</a>, you can add them via <code>plugin</code> option in <code>defineRevealJsConfig</code>. Built-in plugins you request at node side will be added automatically.</p></div><h3 id="per-page-configuration" tabindex="-1"><a class="header-anchor" href="#per-page-configuration"><span>Per Page Configuration</span></a></h3><p>You can also set <code>revealJs</code> to pass options to reveal.js per page in frontmatter.</p><p>For reveal.js options, see <a href="https://revealjs.com/config/" target="_blank" rel="noopener noreferrer">reveal.js config</a>. For reveal.js usage, see <a href="https://revealjs.com/" target="_blank" rel="noopener noreferrer">reveal.js documentation</a></p>`,5))])}const F=c(A,[["render",y],["__file","revealjs.html.vue"]]),f=JSON.parse('{"path":"/guide/markdown/content/revealjs.html","title":"Presentation","lang":"en-US","frontmatter":{"title":"Presentation","icon":"person-chalkboard","category":["Markdown"],"tag":["Markdown","Slides"],"description":"Add presentation in your VuePress site via Reveal.js.","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/guide/markdown/content/revealjs.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/content/revealjs.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/guide/markdown/content/revealjs.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Presentation"}],["meta",{"property":"og:description","content":"Add presentation in your VuePress site via Reveal.js."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-22T14:28:28.000Z"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:tag","content":"Slides"}],["meta",{"property":"article:modified_time","content":"2024-09-22T14:28:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Presentation\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-22T14:28:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.github.io/v2/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.github.io/v2/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.github.io/v2/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"Settings","slug":"settings","link":"#settings","children":[]},{"level":2,"title":"Slide Syntax","slug":"slide-syntax","link":"#slide-syntax","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Customize Reveal.js","slug":"customize-reveal-js","link":"#customize-reveal-js","children":[{"level":3,"title":"Built-in Plugins","slug":"built-in-plugins","link":"#built-in-plugins","children":[]},{"level":3,"title":"Advanced Configuration","slug":"advanced-configuration","link":"#advanced-configuration","children":[]},{"level":3,"title":"Per Page Configuration","slug":"per-page-configuration","link":"#per-page-configuration","children":[]}]}],"git":{"createdTime":1622901613000,"updatedTime":1727015308000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.44,"words":432},"filePathRelative":"guide/markdown/content/revealjs.md","localizedDate":"June 5, 2021","excerpt":"<p>Add presentation in your VuePress site via Reveal.js.</p>\\n","autoDesc":true}');export{F as comp,f as data};