import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as i,h as l,f as n,e as s,b as t,d as a,r as h,o as c}from"./app-gNN4y7I7.js";const g={},A={class:"hint-container tip"};function B(u,e){const k=h("RouteLink"),d=h("CodeDemo"),p=h("MdDemo");return c(),o("div",null,[e[6]||(e[6]=i("p",null,"让你的 VuePress 站点中的 Markdown 文件支持代码案例。",-1)),l(" more "),e[7]||(e[7]=n(`<div class="hint-container info"><p class="hint-container-title">什么是代码演示</p><p>代码演示是一项功能，可让你在 Markdown 文件中插入代码片段，插件将为你呈现源代码并在浏览器上运行代码。 如果用户喜欢尝试，可以点击 CodePen 或 JSFiddle 按钮，在 CodePen 或 JSFiddle 中打开 demo，在线编辑。</p><p>因此，这意味着你无权访问项目中的内部组件。我们既不能在用户的浏览器中读取你本地的文件系统， Codepen 和 JSFiddle 也不能访问项目中的 Vue 组件。</p></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">mdEnhancePlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-plugin-md-enhance&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    mdEnhancePlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 启用代码演示</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      demo</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div>`,3)),l(" #region syntax "),e[8]||(e[8]=n(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>请使用以下语法:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::: </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">类型</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-demo 可选的标题文字</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`html</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- ↑ 使用可用的语言 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 在代码块中放置你对应语言的代码，一个语言不能出现多个块 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 你可以有多个代码块，并且 html, js, css 都是视情况可选的 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// json block 作为插件配置存放处</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 放置你的配置 (可选的)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),l(" #endregion syntax "),i("div",A,[e[3]||(e[3]=i("p",{class:"hint-container-title"},"提示",-1)),i("p",null,[e[1]||(e[1]=s("JSON 块是可选的，可用的配置详见 ")),t(k,{to:"/zh/config.html#demo"},{default:a(()=>e[0]||(e[0]=[s("配置")])),_:1}),e[2]||(e[2]=s("。"))])]),e[9]||(e[9]=i("p",null,"此插件支持三种类型:",-1)),e[10]||(e[10]=i("ul",null,[i("li",null,"normal"),i("li",null,"vue"),i("li",null,"react")],-1)),l(" #region language "),e[11]||(e[11]=n('<h2 id="可用的语言" tabindex="-1"><a class="header-anchor" href="#可用的语言"><span>可用的语言</span></a></h2><p>你可以在演示块中使用不同语言。</p><p>当你设置一些不能在浏览器上直接运行的语言时，由于插件无法解析它们，因此网页演示将被禁用。插件只显示代码。同时提供一个 &quot;在 CodePen 中打开&quot; 按钮允许用户直接在 CodePen 打开并浏览代码。</p><p>可用的 HTML 语言:</p><ul><li><code>&quot;html&quot;</code> (默认)</li><li><code>&quot;slim&quot;</code></li><li><code>&quot;haml&quot;</code></li><li><code>&quot;markdown&quot;</code></li></ul><blockquote><p>你也可以在代码块中使用 <code>md</code>。</p></blockquote><p>可用的 JS 语言:</p><ul><li><code>&quot;javascript&quot;</code> (default)</li><li><code>&quot;coffeescript&quot;</code></li><li><code>&quot;babel&quot;</code></li><li><code>&quot;livescript&quot;</code></li><li><code>&quot;typescript&quot;</code></li></ul><blockquote><p>你也可以在代码块中使用 <code>js</code>, <code>ts</code>, <code>coffee</code> 和 <code>ls</code>。</p></blockquote><p>可用的 CSS 语言:</p><ul><li><code>&quot;css&quot;</code> (default)</li><li><code>&quot;less&quot;</code></li><li><code>&quot;scss&quot;</code></li><li><code>&quot;sass&quot;</code></li><li><code>&quot;stylus&quot;</code></li></ul><blockquote><p>你也可以在代码块中使用 <code>styl</code>。</p></blockquote>',12)),l(" #endregion language "),e[12]||(e[12]=i("h3",{id:"不支持的语言演示",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#不支持的语言演示"},[i("span",null,"不支持的语言演示")])],-1)),l(" #region demo "),t(p,{title:"",id:"md-demo-165"},{default:a(()=>[t(d,{id:"code-demo-167",type:"normal",title:"%E4%B8%80%E4%B8%AA%E4%BD%BF%E7%94%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8D%E6%94%AF%E6%8C%81%E8%A7%A3%E6%9E%90%E8%AF%AD%E8%A8%80%20Demo",code:"eJwtjT2KAkEQha/yqE122V3BdJbNDRQExagS6SmdgZlq7e4JRAxM1MTcUETwDuJ1RvAWtj9QUb33vm9OZUoJfeC6X98OO1bWerusN6v6cq6PJ1b6oeBjw1j1AaV4PxxLAh9crmP8g2lQSdfFP/qZlIKWnQjT34OUWlOVoqExrcTNelKICdZ9MmVNpq9Griqu1e+0I+YNjrMo9MY/lFkTc1ZgZDX8+jArojcPwyI3TzrwjcmrARhbWJfASRozYMEajxZ3wnJQ1w=="},{default:a(()=>e[4]||(e[4]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"# 标题")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"十分强大")])])])],-1),i("div",{class:"language-ts","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E5C07B"}}," message"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#ABB2BF"}},":"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#E5C07B"}}," string"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' "VuePress Theme Hope"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"document"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"querySelector"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"h1"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},")."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"innerHTML"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}}," message"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")])])])],-1),i("div",{class:"language-scss","data-highlighter":"shiki","data-ext":"scss","data-title":"scss",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"h1"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  font-style: "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#D19A66"}},"italic"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  + "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"p"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    color: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"red"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")])])])],-1)])),_:1})]),code:a(()=>e[5]||(e[5]=[i("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"::: normal-demo 一个使用浏览器不支持解析语言 Demo")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```md")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"# 标题")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"十分强大")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```ts")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E5C07B"}}," message"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#E5C07B"}},"string"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' "VuePress Theme Hope"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"document"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"querySelector"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"h1"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},")."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"innerHTML"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}}," message"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```scss")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"h1"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  font-style: "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#D19A66"}},"italic"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  + "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"p"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    color: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"red"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),l(" #endregion demo ")])}const F=r(g,[["render",B],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/zh/guide/code/demo/","title":"代码演示","lang":"zh-CN","frontmatter":{"title":"代码演示","icon":"splotch","description":"让你的 VuePress 站点中的 Markdown 文件支持代码案例。 什么是代码演示 代码演示是一项功能，可让你在 Markdown 文件中插入代码片段，插件将为你呈现源代码并在浏览器上运行代码。 如果用户喜欢尝试，可以点击 CodePen 或 JSFiddle 按钮，在 CodePen 或 JSFiddle 中打开 demo，在线编辑。 因此，这...","head":[["link",{"rel":"canonical","href":"https://plugin-md-enhance.vuejs.press/zh/guide/code/demo/"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.gitee.io/v2/md-enhance/guide/code/demo/"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/md-enhance/zh/guide/code/demo/"}],["meta",{"property":"og:site_name","content":"Markdown 增强"}],["meta",{"property":"og:title","content":"代码演示"}],["meta",{"property":"og:description","content":"让你的 VuePress 站点中的 Markdown 文件支持代码案例。 什么是代码演示 代码演示是一项功能，可让你在 Markdown 文件中插入代码片段，插件将为你呈现源代码并在浏览器上运行代码。 如果用户喜欢尝试，可以点击 CodePen 或 JSFiddle 按钮，在 CodePen 或 JSFiddle 中打开 demo，在线编辑。 因此，这..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-30T12:24:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-30T12:24:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码演示\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-30T12:24:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"可用的语言","slug":"可用的语言","link":"#可用的语言","children":[{"level":3,"title":"不支持的语言演示","slug":"不支持的语言演示","link":"#不支持的语言演示","children":[]}]}],"git":{"createdTime":1643270355000,"updatedTime":1714479879000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":1.84,"words":553},"filePathRelative":"zh/guide/code/demo/README.md","localizedDate":"2022年1月27日","autoDesc":true}');export{F as comp,v as data};
