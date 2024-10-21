import{aj as d,ak as o,am as n,aq as h,as as a,ao as i,ap as e,ar as p,al as g}from"./app-C5NAKw-g.js";const c={};function A(u,s){const r=p("CodeTabs"),k=p("RouteLink");return g(),o("div",null,[s[22]||(s[22]=n('<h2 id="usexxx-is-called-without-provider" tabindex="-1"><a class="header-anchor" href="#usexxx-is-called-without-provider"><span><code>useXXX() is called without provider</code></span></a></h2><p>此类错误通常是因为项目中错误的含有多个 <code>vue</code> 或 <code>vuepress</code> 版本引起的。</p><p>请确保你正在使用最新的 <code>vuepress</code> 和 <code>vuepress-theme-hope</code> 版本并且升级依赖以确保你的项目只包含单个版本的相关包。你可以使用 <code>vp-update</code> 命令来升级你的依赖。</p>',3)),h(r,{id:"9",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:a(({value:t,isActive:l})=>s[0]||(s[0]=[e("pnpm")])),title1:a(({value:t,isActive:l})=>s[1]||(s[1]=[e("yarn")])),title2:a(({value:t,isActive:l})=>s[2]||(s[2]=[e("npm")])),tab0:a(({value:t,isActive:l})=>s[3]||(s[3]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pnpm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," dlx"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," vp-update")])])])],-1)])),tab1:a(({value:t,isActive:l})=>s[4]||(s[4]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," dlx"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," vp-update")])])])],-1)])),tab2:a(({value:t,isActive:l})=>s[5]||(s[5]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npx"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," vp-update")])])])],-1)])),_:1}),s[23]||(s[23]=n(`<h2 id="issues-with-peer-dependencies-found" tabindex="-1"><a class="header-anchor" href="#issues-with-peer-dependencies-found"><span><code>Issues with peer dependencies found</code></span></a></h2><p>这意味着你在项目中安装了错误的依赖。</p><p>这是一个例子:</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> WARN </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Issues</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> peer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dependencies</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> found</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├─┬</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/plugin-docsearch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2.0.0-rc.7</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ✕</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unmet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> peer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vuepress@2.0.0-rc.2:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> found</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2.0.0-rc.5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├─┬</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/plugin-git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2.0.0-rc.7</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ✕</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unmet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> peer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vuepress@2.0.0-rc.2:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> found</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2.0.0-rc.5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├─┬</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vuepress</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2.0.0-rc.5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ✕</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unmet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> peer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/bundler-vite@2.0.0-rc.5:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> found</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2.0.0-rc.4</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">└─┬</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vuepress-theme-hope</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2.0.0-rc.21</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ✕</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unmet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> peer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/plugin-docsearch@2.0.0-rc.10:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> found</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2.0.0-rc.7</span></span></code></pre></div><p>例子显示:</p><ul><li><p><code>vuepress</code> 需要一个与自己相同版本的 <code>@vuepress/bundler-vite</code>，但是你拥有 <code>rc.4</code> 版本的打包器和 <code>rc.5</code> 版本的 vuepress。</p></li><li><p>一些插件要求 <code>vuepress@2.0.0-rc.2</code>，但你当前是 <code>2.0.0-rc.5</code>。</p></li></ul><p>你总可以编辑你的依赖版本以使它们相互匹配。通常你会尝试将 vuepress、vuepress 打包器和插件升级到最新版本，但也有可能插件尚未兼容最新版本的 vuepress。在这种情况下，你应该将 vuepress 降级到与插件兼容的版本，或者暂时删除插件直到它支持最新的 vuepress。</p><h2 id="you-are-not-allowed-to-use-plugin-xxx-yourself-in-vuepress-config-file" tabindex="-1"><a class="header-anchor" href="#you-are-not-allowed-to-use-plugin-xxx-yourself-in-vuepress-config-file"><span>You are not allowed to use plugin XXX yourself in vuepress config file</span></a></h2><p>这意味着你在 VuePress 配置文件中自己调用主题捆绑插件。</p><ul><li>大多数情况下，当你将一些插件与主题一起使用时，主题会自动为你处理一些插件选项，</li><li>部分插件是主题必须的，如果你没有启用主题需要的功能，主题会发生错误。</li></ul><p>所以当你想自定义这些插件时，你应该在主题选项下的 <code>plugin.PLUGIN_NAME</code> 中设置它们的选项，让主题为你调用这些插件。</p>`,11)),i("p",null,[s[7]||(s[7]=e("主题所有的插件详见 ")),h(k,{to:"/zh/config/plugins/intro.html"},{default:a(()=>s[6]||(s[6]=[e("主题插件")])),_:1}),s[8]||(s[8]=e("。"))]),s[24]||(s[24]=n(`<h2 id="fatal-error-xxx-javascript-heap-out-of-memory" tabindex="-1"><a class="header-anchor" href="#fatal-error-xxx-javascript-heap-out-of-memory"><span><code>FATAL ERROR: XXX - JavaScript heap out of memory</code></span></a></h2><p>这意味着你的 Node.js 的 <code>max_old_space_size</code> 设置太小而无法构建此应用程序。 你可以尝试通过设置 <code>NODE_OPTIONS</code> 环境变量来增加 <code>max_old_space_size</code>。</p><p><code>max_old_space_size</code> 以 MB 为单位，默认情况下 <code>max_old_space_size</code> 是机器内存大小的一半。该值可以大于你机器的实际内存大小。</p><ul><li>对于小型项目，通常不会超过 2 GB (2048 MB)。</li><li>对于大型项目，通常不会超过 4 GB (4048 MB)</li><li>如果你在大型网站上同时启用博客功能和大量 Markdown 增强功能，通常不会超过 8 GB (8192 MB)</li></ul><details class="hint-container details"><summary>增加方法</summary><p>使用 GitHub 工作流时，在你的工作流文件中设置 <code>env</code>:</p><div class="language-yml" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro has-diff vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Build project</span></span>
<span class="line diff add"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span></span>
<span class="line diff add"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    NODE_OPTIONS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">--max_old_space_size=8192</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pnpm run build</span></span></code></pre></div><p>在 Windows，你可以参考 <a href="https://blog.csdn.net/weixin_37204973/article/details/82504570" target="_blank" rel="noopener noreferrer">此指南</a>.</p></details><h2 id="xxx-isn-t-assign-with-a-lang-and-will-return-en-us-instead" tabindex="-1"><a class="header-anchor" href="#xxx-isn-t-assign-with-a-lang-and-will-return-en-us-instead"><span>xxx isn&#39;t assign with a lang, and will return &#39;en-US&#39; instead</span></a></h2><p>如果你在开发进程启动时看到 <code>xxx is not assign with a lang, and will return &#39;en-US&#39;.</code>，请检查是否为每种语言设置了语言。</p>`,7)),i("p",null,[s[10]||(s[10]=e("即使你只有一种语言，你仍然需要 ")),h(k,{to:"/zh/config/i18n.html#%E8%AE%BE%E7%BD%AE%E8%AF%AD%E8%A8%80"},{default:a(()=>s[9]||(s[9]=[e("设置你的根目录语言")])),_:1}),s[11]||(s[11]=e("。"))]),s[25]||(s[25]=n('<h2 id="xxx-is-missing-sidebar-config" tabindex="-1"><a class="header-anchor" href="#xxx-is-missing-sidebar-config"><span>xxx is missing sidebar config</span></a></h2><p>使用对象格式侧边栏配置意味着你想根据路由设置不同的侧边栏。</p><ul><li>如果你想避免这个警告，你需要为当前语言根路径添加侧边栏配置，因为所有页面都会回退到那个配置。</li><li>如果你想在当前路由中禁用侧边栏，请在 frontmatter 中设置 <code>sidebar: false</code>。</li><li>如果要在当前文件夹中禁用侧边栏，请在侧边栏配置中添加 <code>[当前文件夹路由]: false</code>。</li><li>如果你想告诉主题你仅在设置的路由中需要侧边栏，请在侧边栏配置中添加 <code>[当前语言根路径]: false</code> 以告诉主题侧边栏配置默认禁用。</li></ul><h2 id="xxx-is-not-installed" tabindex="-1"><a class="header-anchor" href="#xxx-is-not-installed"><span><code>xxx is not installed</code></span></a></h2><p>为了加快主题和插件的安装速度，我们将体积较大的依赖设置为可选，这意味着当你使用的功能需要这样的依赖时，你需要手动安装对应的依赖。</p><p>直接通过当前的包管理器在项目中安装它们即可:</p>',6)),h(r,{id:"153",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2,"tab-id":"shell"},{title0:a(({value:t,isActive:l})=>s[12]||(s[12]=[e("pnpm")])),title1:a(({value:t,isActive:l})=>s[13]||(s[13]=[e("yarn")])),title2:a(({value:t,isActive:l})=>s[14]||(s[14]=[e("npm")])),tab0:a(({value:t,isActive:l})=>s[15]||(s[15]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pnpm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," xxx")])])])],-1)])),tab1:a(({value:t,isActive:l})=>s[16]||(s[16]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," xxx")])])])],-1)])),tab2:a(({value:t,isActive:l})=>s[17]||(s[17]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," i"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," xxx")])])])],-1)])),_:1}),s[26]||(s[26]=n('<h2 id="vue-warn-failed-to-resolve-component-xxx" tabindex="-1"><a class="header-anchor" href="#vue-warn-failed-to-resolve-component-xxx"><span><code>[Vue warn]: Failed to resolve component: XXX</code></span></a></h2><p>如果你遇到这样的错误，你可能在项目中使用了非标准标签。</p><p>有像 <code>&lt;center&gt;</code> 或 <code>&lt;font&gt;</code> 这样的标签，它们在 HTML1.0 规范中，但自 1999 年发布的 HTML4.0 以来被标记为不推荐，然后在 2008 年的 HTML5 版本中被删除。所以 Vue 在默认设置下不允许你使用它们。 你应当移除它们并使用标准的 HTML5 标签。</p><p>如果要删除它们，请使用 <code>--debug</code> Flag 运行主题，你将收到警告日志，告诉你可能无法识别的标签。</p><p>如果你仍然想使用它们，请查看 <a href="https://vuejs.press/zh/guide/markdown.html#%E9%9D%9E%E6%A0%87%E5%87%86%E7%9A%84-html-%E6%A0%87%E7%AD%BE" target="_blank" rel="noopener noreferrer">此处</a> 以获得解决方法。</p><h2 id="hydration-completed-but-contains-mismatches" tabindex="-1"><a class="header-anchor" href="#hydration-completed-but-contains-mismatches"><span>Hydration completed but contains mismatches</span></a></h2><p>这个错误表明你遇到了 SSR 错配，而且这应该不是主题的问题。</p><p>请首先检查你是否在使用 CloudFlare 相关服务，如果有，请确保你关闭静态资源压缩。方法: <a href="https://dash.cloudflare.com" target="_blank" rel="noopener noreferrer">dash.cloudflare.com</a> → 网站 → <code>域名</code> → 速度 → 优化 → Auto Minify，关闭 JavaScript 和 HTML 即可。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>CloudFlare 的 Auto Minify 会错误的对 HTML 的空格和换行进行处理，这会导致 Vue 在初始化时产生 SSR 错配。</p></div><p>为了调试这个问题，设置 <code>__VUE_PROD_HYDRATION_MISMATCH_DETAILS__</code> 为 <code>true</code>，这样你就可以在浏览器控制台中看到错误的详细信息。</p><p>另外你还可以检查:</p><p>如果一个组件件大概率在 SSR<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 和 CSR<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> 拥有不同的渲染结果，你可以用 <code>vuepress/client</code> 提供的 <code>&lt;ClientOnly /&gt;</code> 组件包裹你的组件。</p><h2 id="热更新在开发服务器中不工作" tabindex="-1"><a class="header-anchor" href="#热更新在开发服务器中不工作"><span>热更新在开发服务器中不工作</span></a></h2><p>某些配置对开发服务器有高性能影响，因此默认情况下禁用它们的热重载，你可以通过在主题选项中设置 <code>hotReload: true</code> 手动开启。</p><p>其中包括博客的类别和标签、结构化侧边栏和基于 git 的信息。</p><h2 id="部分页面设置无效" tabindex="-1"><a class="header-anchor" href="#部分页面设置无效"><span>部分页面设置无效</span></a></h2><p>你可以先查看文档以查看设置是否<strong>不支持页面配置</strong>。</p><p><strong>支持页面配置</strong>表示主题允许页面的配置覆盖同名的全局配置 (相同功能) ，但并非所有功能都满足此设置。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你应该了解，当某些功能的全局设置被禁用时，在准备阶段它们压根就不会加载，因此无法局部启用它们。</p></div><h2 id="样式出现问题" tabindex="-1"><a class="header-anchor" href="#样式出现问题"><span>样式出现问题</span></a></h2><p>为了支持 RTL 布局以及减少样式体积，主题使用较新的 CSS，比如 <code>padding-inline</code> <code>margin-block</code> <code>inset-inline-start</code> 等。</p><p>最低支持它们的版本是:</p><ul><li>Chrome &gt;= 87</li><li>Edge &gt;= 87</li><li>Firefox &gt;= 66</li><li>Safari &gt;= 14.1</li></ul><p>如果你需要对更低版本的浏览器提供支持，你可以使用 <code>postcss-preset-env</code> 兼容到你设置的环境:</p>',24)),h(r,{id:"259",data:[{id:"Vite"},{id:"Webpack"}],"tab-id":"bundler"},{title0:a(({value:t,isActive:l})=>s[18]||(s[18]=[e("Vite")])),title1:a(({value:t,isActive:l})=>s[19]||(s[19]=[e("Webpack")])),tab0:a(({value:t,isActive:l})=>s[20]||(s[20]=[i("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":".vuepress/config.ts",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," { "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"addViteConfig"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," } "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"from"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' "@vuepress/helper"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," postcssPresetEnv"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," from"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' "postcss-preset-env"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," { "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"defineUserConfig"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," } "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"from"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' "vuepress"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"export"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}}," default"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," defineUserConfig"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"({")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"  extendsBundlerOptions"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#ABB2BF"}},":"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," ("),i("span",{style:{"--shiki-light":"#383A42","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"config"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#383A42","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"app"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"=>"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"    addViteConfig"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"config"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"app"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", {")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"      css"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#ABB2BF"}},":"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"        postcss"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#ABB2BF"}},":"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"          plugins"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#ABB2BF"}},":"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," ["),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"postcssPresetEnv"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"()],")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"        },")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      },")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    });")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  },")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"});")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:a(({value:t,isActive:l})=>s[21]||(s[21]=[i("div",{class:"language-ts","data-highlighter":"shiki","data-ext":"ts","data-title":".vuepress/config.ts",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," { "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"addViteConfig"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," } "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"from"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' "@vuepress/helper"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," postcssPresetEnv"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," from"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' "postcss-preset-env"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," { "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"defineUserConfig"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," } "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"from"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' "vuepress"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"export"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}}," default"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," defineUserConfig"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"({")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"  extendsBundlerOptions"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#ABB2BF"}},":"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," ("),i("span",{style:{"--shiki-light":"#383A42","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"config"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#383A42","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"app"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"=>"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"    configWebpack"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"config"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"app"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", ("),i("span",{style:{"--shiki-light":"#383A42","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"config"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"=>"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      ((("),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"config"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"postcss"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," ??="),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {})."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"postcssOptions"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," ??="),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {})."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"plugins"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," ??="),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," [])."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"push"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"        postcssPresetEnv"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(),")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      );")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    });")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  },")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"});")])])])],-1)])),_:1}),s[27]||(s[27]=n('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><strong>SSR</strong>: <strong>S</strong>erver <strong>S</strong>ide <strong>R</strong>endering，服务端渲染 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><strong>CSR</strong>: <strong>C</strong>lient <strong>S</strong>ide <strong>R</strong>endering，客户端渲染 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>',2))])}const F=d(c,[["render",A],["__file","common-error.html.vue"]]),m=JSON.parse(`{"path":"/zh/faq/common-error.html","title":"常见错误","lang":"zh-CN","frontmatter":{"title":"常见错误","icon":"triangle-exclamation","order":3,"category":["FAQ"],"description":"useXXX() is called without provider 此类错误通常是因为项目中错误的含有多个 vue 或 vuepress 版本引起的。 请确保你正在使用最新的 vuepress 和 vuepress-theme-hope 版本并且升级依赖以确保你的项目只包含单个版本的相关包。你可以使用 vp-update 命令来升级你的依赖。 Is...","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/faq/common-error.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.gitee.io/v2/faq/common-error.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/zh/faq/common-error.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"常见错误"}],["meta",{"property":"og:description","content":"useXXX() is called without provider 此类错误通常是因为项目中错误的含有多个 vue 或 vuepress 版本引起的。 请确保你正在使用最新的 vuepress 和 vuepress-theme-hope 版本并且升级依赖以确保你的项目只包含单个版本的相关包。你可以使用 vp-update 命令来升级你的依赖。 Is..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-23T16:54:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-23T16:54:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见错误\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-23T16:54:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"useXXX() is called without provider","slug":"usexxx-is-called-without-provider","link":"#usexxx-is-called-without-provider","children":[]},{"level":2,"title":"Issues with peer dependencies found","slug":"issues-with-peer-dependencies-found","link":"#issues-with-peer-dependencies-found","children":[]},{"level":2,"title":"You are not allowed to use plugin XXX yourself in vuepress config file","slug":"you-are-not-allowed-to-use-plugin-xxx-yourself-in-vuepress-config-file","link":"#you-are-not-allowed-to-use-plugin-xxx-yourself-in-vuepress-config-file","children":[]},{"level":2,"title":"FATAL ERROR: XXX - JavaScript heap out of memory","slug":"fatal-error-xxx-javascript-heap-out-of-memory","link":"#fatal-error-xxx-javascript-heap-out-of-memory","children":[]},{"level":2,"title":"xxx isn't assign with a lang, and will return 'en-US' instead","slug":"xxx-isn-t-assign-with-a-lang-and-will-return-en-us-instead","link":"#xxx-isn-t-assign-with-a-lang-and-will-return-en-us-instead","children":[]},{"level":2,"title":"xxx is missing sidebar config","slug":"xxx-is-missing-sidebar-config","link":"#xxx-is-missing-sidebar-config","children":[]},{"level":2,"title":"xxx is not installed","slug":"xxx-is-not-installed","link":"#xxx-is-not-installed","children":[]},{"level":2,"title":"[Vue warn]: Failed to resolve component: XXX","slug":"vue-warn-failed-to-resolve-component-xxx","link":"#vue-warn-failed-to-resolve-component-xxx","children":[]},{"level":2,"title":"Hydration completed but contains mismatches","slug":"hydration-completed-but-contains-mismatches","link":"#hydration-completed-but-contains-mismatches","children":[]},{"level":2,"title":"热更新在开发服务器中不工作","slug":"热更新在开发服务器中不工作","link":"#热更新在开发服务器中不工作","children":[]},{"level":2,"title":"部分页面设置无效","slug":"部分页面设置无效","link":"#部分页面设置无效","children":[]},{"level":2,"title":"样式出现问题","slug":"样式出现问题","link":"#样式出现问题","children":[]}],"git":{"createdTime":1649264985000,"updatedTime":1727110456000,"contributors":[{"name":"YiguiDing","email":"50746494+YiguiDing@users.noreply.github.com","commits":1},{"name":"Nan Huang","email":"teddyhuangnan@gmail.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":33},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":6.3,"words":1890},"filePathRelative":"zh/faq/common-error.md","localizedDate":"2022年4月6日","excerpt":"","autoDesc":true}`);export{F as comp,m as data};