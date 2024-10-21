import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as g,h as t,a as i,e as s,b as h,d as e,f as r,r as k,o as c}from"./app-gNN4y7I7.js";const A={};function B(b,a){const p=k("CodeTabs"),d=k("MarkMap"),m=k("MdDemo");return c(),g("div",null,[t(" #region before "),a[7]||(a[7]=i("p",null,"让你的 VuePress 站点中的 Markdown 文件支持 markmap。",-1)),t(" more "),a[8]||(a[8]=i("h2",{id:"settings",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#settings"},[i("span",null,"Settings")])],-1)),a[9]||(a[9]=i("p",null,[s("在你的项目中安装 "),i("code",null,"markmap-lib"),s(", "),i("code",null,"markmap-toolbar"),s(" and "),i("code",null,"markmap-view"),s(":")],-1)),h(p,{id:"11",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:e(({value:l,isActive:n})=>a[0]||(a[0]=[s("pnpm")])),title1:e(({value:l,isActive:n})=>a[1]||(a[1]=[s("yarn")])),title2:e(({value:l,isActive:n})=>a[2]||(a[2]=[s("npm")])),tab0:e(({value:l,isActive:n})=>a[3]||(a[3]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pnpm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," markmap-lib"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," markmap-toolbar"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," markmap-view")])])])],-1)])),tab1:e(({value:l,isActive:n})=>a[4]||(a[4]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," markmap-lib"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," markmap-toolbar"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," markmap-view")])])])],-1)])),tab2:e(({value:l,isActive:n})=>a[5]||(a[5]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," i"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," markmap-lib"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," markmap-toolbar"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," markmap-view")])])])],-1)])),_:1}),a[10]||(a[10]=i("p",null,"然后在配置中启用:",-1)),t(" #endregion before "),a[11]||(a[11]=r(`<div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">mdEnhancePlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-plugin-md-enhance&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    mdEnhancePlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 启用 Markmap</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      markmap</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div>`,1)),t(" #region after "),a[12]||(a[12]=r('<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">```markmap</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;!-- 在这里放置内容 --&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">```</span></span></code></pre></div><p>支持通过 Frontmatter 语法进行配置。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2>',4)),h(m,{title:"",id:"md-demo-38"},{default:e(()=>[h(d,{id:"markmap-40",content:"eJydj81OwkAQx+99ikk0UZssJMQTWo9qoncPoumHG0BbF9tKiASCQQWJYgwRlaCCQkL8QI58iLxMt7Rv4ULgBbzszsz/N/+ZQQhxmqQfaFLEzwEoRCX6qo7xCd7EUaz6wceNEG4GJhQLZ8At/Nr5OschWA6ZZsTwe70T2bNveIge9K4wbXstbK4fyzvzUyYYNkPHskch2hSf/gtjW5p7cdL9ke1kAAKepz9dp5XmeUgmabbiPtaG3UEyCbxdLFv9Ag+C4H48WN2mIDCc1kpO9YodYhcz9OueVUSW04tzq/c2rJyKHGIagCiK+8Y4UsihQVTsUUlwfk4hexhklSgHcwtLU5B5bEgmjrEcwWwMBIgjGQIRDQLGkW7G5V0fWpSUBARIFOvgkxKzrGWYb9Fyw87eWr1PevNt9epuquQMMiBqUmwrvGeGRHBTl26142Teaa5hX7+yRd2nZ9pu//O9GwxLZ+xU2uxwf2vm1oQ="})]),code:e(()=>a[6]||(a[6]=[i("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"````markmap")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"markmap:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  colorFreezeLevel: 2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"---")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"# markmap")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"## 链接")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- <https://markmap.js.org/>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- [GitHub](https://github.com/markmap/markmap)")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"## 功能")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- 链接")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- **强调** ~~删除线~~ *斜体* ==高亮==")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- 多行")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  文字")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- `行内代码`")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"-")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    ```js")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    console.log('code block');")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    ```")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- Katex")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- 现在我们可以通过 `maxWidth` 选项自动换行非常非常非常非常非常非常非常非常非常非常长的内容")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"````")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),t(" #endregion after ")])}const F=o(A,[["render",B],["__file","markmap.html.vue"]]),v=JSON.parse('{"path":"/zh/guide/chart/markmap.html","title":"Markmap","lang":"zh-CN","frontmatter":{"title":"Markmap","icon":"fab fa-markdown","description":"让你的 VuePress 站点中的 Markdown 文件支持 markmap。 Settings 在你的项目中安装 markmap-lib, markmap-toolbar and markmap-view: 然后在配置中启用: 语法 支持通过 Frontmatter 语法进行配置。 案例","head":[["link",{"rel":"canonical","href":"https://plugin-md-enhance.vuejs.press/zh/guide/chart/markmap.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.gitee.io/v2/md-enhance/guide/chart/markmap.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/md-enhance/zh/guide/chart/markmap.html"}],["meta",{"property":"og:site_name","content":"Markdown 增强"}],["meta",{"property":"og:title","content":"Markmap"}],["meta",{"property":"og:description","content":"让你的 VuePress 站点中的 Markdown 文件支持 markmap。 Settings 在你的项目中安装 markmap-lib, markmap-toolbar and markmap-view: 然后在配置中启用: 语法 支持通过 Frontmatter 语法进行配置。 案例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-30T12:24:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-30T12:24:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markmap\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-30T12:24:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Settings","slug":"settings","link":"#settings","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]}],"git":{"createdTime":1700980547000,"updatedTime":1714479879000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Jerry_Lan","email":"lanjie1990@gmail.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4}]},"readingTime":{"minutes":0.75,"words":225},"filePathRelative":"zh/guide/chart/markmap.md","localizedDate":"2023年11月26日","autoDesc":true}');export{F as comp,v as data};