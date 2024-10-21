import{aj as d,ak as h,ao as e,an as m,ap as s,am as u,aq as n,as as i,ar as o,al as c}from"./app-3Fu3LGel.js";const k={},v={class:"hint-container info"};function g(y,t){const r=o("Tabs"),p=o("CodeTabs");return c(),h("div",null,[t[13]||(t[13]=e("p",null,"This tutorial introduces VuePress project commands.",-1)),m(" more "),t[14]||(t[14]=e("h2",{id:"common-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#common-commands"},[e("span",null,"Common Commands")])],-1)),t[15]||(t[15]=e("ul",null,[e("li",null,[e("code",null,"vuepress dev [dir]"),s(" will start a development server to allow you to develop your VuePress site locally.")]),e("li",null,[e("code",null,"vuepress build [dir]"),s(" will build your VuePress site into static files for your subsequent deployment.")])],-1)),e("div",v,[t[6]||(t[6]=u(`<p class="hint-container-title">Using Template</p><p>If you are using the VuePress Theme Hope template, you can find the following three commands in <code>package.json</code>:</p><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;scripts&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;docs:build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vuepress build src&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;docs:clean-dev&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vuepress dev src --clean-cache&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;docs:dev&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vuepress dev src&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>This means you can use:</p>`,4)),n(r,{id:"27",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:i(({value:a,isActive:l})=>t[0]||(t[0]=[s("pnpm")])),title1:i(({value:a,isActive:l})=>t[1]||(t[1]=[s("yarn")])),title2:i(({value:a,isActive:l})=>t[2]||(t[2]=[s("npm")])),tab0:i(({value:a,isActive:l})=>t[3]||(t[3]=[e("ul",null,[e("li",null,[e("code",null,"pnpm docs:dev"),s(" starts the development server")]),e("li",null,[e("code",null,"pnpm docs:build"),s(" builds the project and outputs")]),e("li",null,[e("code",null,"pnpm docs:clean-dev"),s(" to clear cache and start development server")])],-1)])),tab1:i(({value:a,isActive:l})=>t[4]||(t[4]=[e("ul",null,[e("li",null,[e("code",null,"yarn docs:dev"),s(" starts the development server")]),e("li",null,[e("code",null,"yarn docs:build"),s(" builds the project and outputs")]),e("li",null,[e("code",null,"yarn docs:clean-dev"),s(" to clear cache and start development server")])],-1)])),tab2:i(({value:a,isActive:l})=>t[5]||(t[5]=[e("ul",null,[e("li",null,[e("code",null,"npm run docs:dev"),s(" starts the development server")]),e("li",null,[e("code",null,"npm run docs:build"),s(" builds the project and outputs")]),e("li",null,[e("code",null,"npm run docs:clean-dev"),s(" to clear cache and start development server")])],-1)])),_:1})]),t[16]||(t[16]=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Terminate DevServer"),e("p",null,[s("To terminate the development server, please click on the terminal and press "),e("code",null,"Ctrl + C"),s(" twice.")])],-1)),t[17]||(t[17]=e("h2",{id:"update-version",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#update-version"},[e("span",null,"Update Version")])],-1)),t[18]||(t[18]=e("p",null,"If you need to upgrade your theme and VuePress version, execute the following command:",-1)),n(p,{id:"98",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:i(({value:a,isActive:l})=>t[7]||(t[7]=[s("pnpm")])),title1:i(({value:a,isActive:l})=>t[8]||(t[8]=[s("yarn")])),title2:i(({value:a,isActive:l})=>t[9]||(t[9]=[s("npm")])),tab0:i(({value:a,isActive:l})=>t[10]||(t[10]=[e("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pnpm"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," dlx"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," vp-update")])])])],-1)])),tab1:i(({value:a,isActive:l})=>t[11]||(t[11]=[e("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," dlx"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," vp-update")])])])],-1)])),tab2:i(({value:a,isActive:l})=>t[12]||(t[12]=[e("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npx"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," vp-update")])])])],-1)])),_:1})])}const A=d(k,[["render",g],["__file","command.html.vue"]]),F=JSON.parse('{"path":"/get-started/command.html","title":"Project Command","lang":"en-US","frontmatter":{"title":"Project Command","icon":"flag","order":3,"category":["Cookbook","Tutorial","Get Started"],"tag":["Project Command"],"description":"This tutorial introduces VuePress project commands.","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/get-started/command.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope.github.io/v2/zh/get-started/command.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/get-started/command.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Project Command"}],["meta",{"property":"og:description","content":"This tutorial introduces VuePress project commands."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-29T11:25:25.000Z"}],["meta",{"property":"article:tag","content":"Project Command"}],["meta",{"property":"article:modified_time","content":"2024-04-29T11:25:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Project Command\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-29T11:25:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.github.io/v2/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.github.io/v2/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.github.io/v2/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"Common Commands","slug":"common-commands","link":"#common-commands","children":[]},{"level":2,"title":"Update Version","slug":"update-version","link":"#update-version","children":[]}],"git":{"createdTime":1648799705000,"updatedTime":1714389925000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":0.83,"words":248},"filePathRelative":"get-started/command.md","localizedDate":"April 1, 2022","excerpt":"<p>This tutorial introduces VuePress project commands.</p>\\n","autoDesc":true}');export{A as comp,F as data};
