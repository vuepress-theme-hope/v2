import{aj as a,ak as n,ao as s,an as l,ap as e,aq as p,as as o,am as h,ar as r,al as k}from"./app-C5NAKw-g.js";const g={},d={class:"hint-container important"};function c(m,i){const t=r("RouteLink");return k(),n("div",null,[i[5]||(i[5]=s("p",null,"This tutorial will guide you on how to register components globally in your VuePress project.",-1)),l(" more "),i[6]||(i[6]=s("h2",{id:"register-components-globally",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#register-components-globally"},[s("span",null,"Register Components Globally")])],-1)),i[7]||(i[7]=s("p",null,"You can register components globally, so that you can use theme directly in Markdown files and Layouts.",-1)),s("div",d,[i[3]||(i[3]=s("p",{class:"hint-container-title"},"Important",-1)),i[4]||(i[4]=s("p",null,'Registering components globally can make the component "out of box", so if a component is commonly used in your project, it is recommended to register it globally.',-1)),s("p",null,[i[1]||(i[1]=e("But if a component is large and only used in certain pages or layouts, it is recommended to ")),p(t,{to:"/guide/component/sfc.html#importing-files"},{default:o(()=>i[0]||(i[0]=[e("register the component locally")])),_:1}),i[2]||(i[2]=e("."))])]),i[8]||(i[8]=h(`<h2 id="register-via-vuepress-plugin-register-components" tabindex="-1"><a class="header-anchor" href="#register-via-vuepress-plugin-register-components"><span>Register via <code>@vuepress/plugin-register-components</code></span></a></h2><p>You can automatically register components via the <code>@vuepress/plugin-register-components</code> plugin.</p><p>For details about how to use the plugin, see <a href="https://ecosystem.vuejs.press/plugins/register-components.html" target="_blank" rel="noopener noreferrer">Official Documentation</a>.</p><h2 id="register-via-client-config-file" tabindex="-1"><a class="header-anchor" href="#register-via-client-config-file"><span>Register via Client Config File</span></a></h2><p>You can create <code>.vuepress/client.js</code> or <code>.vuepress/client.ts</code> and register components manually.</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> MyComponent</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;./MyComponent.vue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  enhance</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ({ </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">router</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">siteData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;MyComponent&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MyComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Global component can be directly used in any component, layouts or pages.</p><p>Assume that you have registered <code>MyComponent</code> globally, then you can use it like:</p><ul><li><p>Markdown:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MyComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre></div></li><li><p>Component:</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- .vuepress/components/Example.vue --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Example Component&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MyComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li><li><p>Layout:</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- .vuepress/layouts/Custom.vue --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Example Layout&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MyComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li></ul>`,10))])}const u=a(g,[["render",c],["__file","global.html.vue"]]),A=JSON.parse('{"path":"/guide/component/global.html","title":"Global Components","lang":"en-US","frontmatter":{"title":"Global Components","icon":"puzzle-piece","order":2,"category":["Component"],"tag":["Component"],"description":"This tutorial will guide you on how to register components globally in your VuePress project.","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/guide/component/global.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope.gitee.io/v2/zh/guide/component/global.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/guide/component/global.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Global Components"}],["meta",{"property":"og:description","content":"This tutorial will guide you on how to register components globally in your VuePress project."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-28T18:46:36.000Z"}],["meta",{"property":"article:tag","content":"Component"}],["meta",{"property":"article:modified_time","content":"2024-03-28T18:46:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Global Components\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T18:46:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"Register Components Globally","slug":"register-components-globally","link":"#register-components-globally","children":[]},{"level":2,"title":"Register via @vuepress/plugin-register-components","slug":"register-via-vuepress-plugin-register-components","link":"#register-via-vuepress-plugin-register-components","children":[]},{"level":2,"title":"Register via Client Config File","slug":"register-via-client-config-file","link":"#register-via-client-config-file","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"git":{"createdTime":1702639822000,"updatedTime":1711651596000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":6}]},"readingTime":{"minutes":0.74,"words":221},"filePathRelative":"guide/component/global.md","localizedDate":"December 15, 2023","excerpt":"<p>This tutorial will guide you on how to register components globally in your VuePress project.</p>\\n","autoDesc":true}');export{u as comp,A as data};
