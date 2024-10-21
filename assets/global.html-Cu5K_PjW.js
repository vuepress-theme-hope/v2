import{aj as a,ak as n,ao as i,an as l,ap as e,aq as p,as as h,am as k,ar as r,al as o}from"./app-3Fu3LGel.js";const d={},g={class:"hint-container important"};function c(A,s){const t=r("RouteLink");return o(),n("div",null,[s[5]||(s[5]=i("p",null,"本教程将指引你如何在 VuePress 项目中注册全局组件。",-1)),l(" more "),s[6]||(s[6]=i("h2",{id:"全局注册-vue-组件",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#全局注册-vue-组件"},[i("span",null,"全局注册 Vue 组件")])],-1)),s[7]||(s[7]=i("p",null,"你可以全局注册组件，这样你就可以在 Markdown 文件和布局中直接使用它们。",-1)),i("div",g,[s[3]||(s[3]=i("p",{class:"hint-container-title"},"重要",-1)),s[4]||(s[4]=i("p",null,"全局注册组件可以让组件变得“开箱即用”，所以如果一个组件在你的项目中经常使用，建议你全局注册它。",-1)),i("p",null,[s[1]||(s[1]=e("但是如果一个组件很大，只在某些页面或布局中使用，建议你")),p(t,{to:"/zh/guide/component/sfc.html#%E5%AF%BC%E5%85%A5%E6%96%87%E4%BB%B6"},{default:h(()=>s[0]||(s[0]=[e("局部注册组件")])),_:1}),s[2]||(s[2]=e("。"))])]),s[8]||(s[8]=k(`<h3 id="通过-vuepress-plugin-register-components-注册组件" tabindex="-1"><a class="header-anchor" href="#通过-vuepress-plugin-register-components-注册组件"><span>通过 <code>@vuepress/plugin-register-components</code> 注册组件</span></a></h3><p>你可以通过 <code>@vuepress/plugin-register-components</code> 插件来自动注册组件。</p><p>插件的使用方法详见 <a href="https://ecosystem.vuejs.press/zh/plugins/register-components.html" target="_blank" rel="noopener noreferrer">官方文档</a>。</p><h3 id="通过客户端配置文件注册" tabindex="-1"><a class="header-anchor" href="#通过客户端配置文件注册"><span>通过客户端配置文件注册</span></a></h3><p>你可以通过创建 <code>.vuepress/client.js</code> 或 <code>.vuepress/client.ts</code> 手动注册组件。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> MyComponent</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;./MyComponent.vue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  enhance</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ({ </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">router</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">siteData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;MyComponent&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MyComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>全局组件可以直接在任何组件、布局或页面中使用。</p><p>假设你已经全局注册了 <code>MyComponent</code>，那么你可以这样使用它:</p><ul><li><p>Markdown:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MyComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre></div></li><li><p>组件:</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- .vuepress/components/Example.vue --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;组件案例&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MyComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li><li><p>布局:</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- .vuepress/layouts/Custom.vue --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;布局案例&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MyComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li></ul>`,10))])}const y=a(d,[["render",c],["__file","global.html.vue"]]),m=JSON.parse('{"path":"/zh/guide/component/global.html","title":"全局组件","lang":"zh-CN","frontmatter":{"title":"全局组件","icon":"puzzle-piece","order":2,"category":["组件"],"tag":["组件"],"description":"本教程将指引你如何在 VuePress 项目中注册全局组件。","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/guide/component/global.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.github.io/v2/guide/component/global.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/zh/guide/component/global.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"全局组件"}],["meta",{"property":"og:description","content":"本教程将指引你如何在 VuePress 项目中注册全局组件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-28T18:46:36.000Z"}],["meta",{"property":"article:tag","content":"组件"}],["meta",{"property":"article:modified_time","content":"2024-03-28T18:46:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"全局组件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T18:46:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.github.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"全局注册 Vue 组件","slug":"全局注册-vue-组件","link":"#全局注册-vue-组件","children":[{"level":3,"title":"通过 @vuepress/plugin-register-components 注册组件","slug":"通过-vuepress-plugin-register-components-注册组件","link":"#通过-vuepress-plugin-register-components-注册组件","children":[]},{"level":3,"title":"通过客户端配置文件注册","slug":"通过客户端配置文件注册","link":"#通过客户端配置文件注册","children":[]}]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"createdTime":1702639822000,"updatedTime":1711651596000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":6}]},"readingTime":{"minutes":1.06,"words":319},"filePathRelative":"zh/guide/component/global.md","localizedDate":"2023年12月15日","excerpt":"<p>本教程将指引你如何在 VuePress 项目中注册全局组件。</p>\\n","autoDesc":true}');export{y as comp,m as data};