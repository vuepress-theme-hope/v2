import{a3 as o,Z as i,_ as r,a1 as l,a2 as e,$ as t,a0 as d,a5 as n,q as u}from"./framework-f408d5b9.js";const s={},c=n('<h2 id="主题初衷" tabindex="-1"><a class="header-anchor" href="#主题初衷" aria-hidden="true">#</a> 主题初衷</h2><p>制作本主题的初衷是发现 VuePress 默认的主题只是一个提供基础文档布局的主题。</p><p>例如，它不会为 SEO 优化注入元标记，也不会生成 Sitemap 来帮助搜索引擎索引文档的内容。</p><p>VuePress 虽然在一定程度上扩展了 Markdown 语法，但仍然缺少一些常用的功能，如文本对齐、标记、流程图、公式、展示等，同时默认主题提供的一些功能较弱或缺失 ，比如图片预览，深色模式等。</p><p>在这种情况下，<code>vuepress-theme-hope</code> 和一些系列插件就应运诞生。</p><p>主题不仅在默认主题的基础上<strong>大幅提高美观性</strong>，同时搭配各种插件，<strong>在各种细节与功能上为 VuePress 提供全方位的增强</strong>。</p>',6),p={class:"hint-container warning"},_=l("p",{class:"hint-container-title"},"一个拥有插件和强大主题的项目",-1),m={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope",target:"_blank",rel:"noopener noreferrer"},f=l("p",null,[e("而基于这样十几个插件，Mr.Hope 才可以自信的说 "),l("code",null,"vuepress-theme-hope"),e(" 是“"),l("strong",null,"一个带有成吨功能的强大主题"),e("”。它也可以看作是 VuePress 所有主题中，功能最多，覆盖最全面的主题。")],-1),g=n('<h2 id="设计目标" tabindex="-1"><a class="header-anchor" href="#设计目标" aria-hidden="true">#</a> 设计目标</h2><ul><li><h3 id="强大且独立的功能" tabindex="-1"><a class="header-anchor" href="#强大且独立的功能" aria-hidden="true">#</a> 强大且独立的功能</h3><p>我们将每个功能提取到一个插件中，以便用户可以在其他主题中使用它们或单独自定义它们的行为。</p></li><li><h3 id="最小化配置" tabindex="-1"><a class="header-anchor" href="#最小化配置" aria-hidden="true">#</a> 最小化配置</h3><p>如果可能，所有功能都会尝试生成默认值，因此您可以在零配置或最小配置下使用它们。</p><p>这有助于减少您的迁移或学习成本，同时直接享受它们的便利。</p></li><li><h3 id="改进的布局" tabindex="-1"><a class="header-anchor" href="#改进的布局" aria-hidden="true">#</a> 改进的布局</h3><p>主题界面已经完全重构，以提供可定制和漂亮的布局。</p></li><li><h3 id="可拆分" tabindex="-1"><a class="header-anchor" href="#可拆分" aria-hidden="true">#</a> 可拆分</h3><p>借助 Vue3 的组合 API，主题在保持强大的同时充分实现了“Tree-shaking”。</p><p>主题将只运行您想要的功能，而不会因其他功能而变慢或影响打包大小。</p></li></ul><h2 id="因何强大" tabindex="-1"><a class="header-anchor" href="#因何强大" aria-hidden="true">#</a> 因何强大</h2><h3 id="更丰富的内容" tabindex="-1"><a class="header-anchor" href="#更丰富的内容" aria-hidden="true">#</a> 更丰富的内容</h3><p>主题为 Markdown 提供了大量的扩展语法支持，让你在正文插入更多的内容。</p>',5),z=l("p",null,"总之，任何人都可以享受 Markdown 增强语法带来的便利。",-1),k=l("h3",{id:"ui-改进",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#ui-改进","aria-hidden":"true"},"#"),e(" UI 改进")],-1),E=l("h3",{id:"布局改进",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#布局改进","aria-hidden":"true"},"#"),e(" 布局改进")],-1),b=l("p",null,"添加了图标和路径前缀支持",-1),w=l("p",null,"移动布局的导航栏布局已完全重构",-1),x=l("p",null,"添加了图标和路径前缀支持",-1),A=l("p",null,"全新外观，主页特性模块支持图标与跳转。",-1),y=l("p",null,"自动生成目录页面",-1),v=l("p",null,"更多:",-1),B=l("a",{href:"../layout/page#%E6%A0%87%E9%A2%98%E5%88%97%E8%A1%A8"},"页面标题",-1),V=l("h3",{id:"搜索功能",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#搜索功能","aria-hidden":"true"},"#"),e(" 搜索功能")],-1),P=l("h3",{id:"完整的博客支持",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#完整的博客支持","aria-hidden":"true"},"#"),e(" 完整的博客支持")],-1),F=l("h3",{id:"搜索引擎增强",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#搜索引擎增强","aria-hidden":"true"},"#"),e(" 搜索引擎增强")],-1),M=l("h3",{id:"其他",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#其他","aria-hidden":"true"},"#"),e(" 其他")],-1);function S(L,N){const h=u("ExternalLinkIcon"),a=u("RouterLink");return i(),r("div",null,[c,l("div",p,[_,l("p",null,[l("a",m,[e("vuepress-theme-hope/vuepress-theme-hope"),t(h)]),e(" 虽然标明了其为主题仓库，但它同时包含了十多个同样功能完善且强大的插件。每一个插件也都是由 Mr.Hope 精心开发，功能足够强大，可以自由搭配默认主题或者第三方主题单独使用。")]),f]),g,l("ul",null,[l("li",null,[l("p",null,[e("如果你是一名文学爱好者想放置一些随笔，主题提供了 "),t(a,{to:"/zh/guide/markdown/align.html"},{default:d(()=>[e("自定义对齐")]),_:1}),e(" 与 "),t(a,{to:"/zh/guide/markdown/footnote.html"},{default:d(()=>[e("脚注")]),_:1}),e("。")])]),l("li",null,[l("p",null,[e("如果你希望存放一些知识笔记，主题提供了 "),t(a,{to:"/zh/guide/markdown/container.html"},{default:d(()=>[e("自定义容器")]),_:1}),e("、"),t(a,{to:"/zh/guide/markdown/mark.html"},{default:d(()=>[e("标记")]),_:1}),e("、"),t(a,{to:"/zh/guide/markdown/components.html"},{default:d(()=>[e("徽章")]),_:1}),e("、"),t(a,{to:"/zh/guide/markdown/tasklist.html"},{default:d(()=>[e("任务列表")]),_:1}),e(" 与 "),t(a,{to:"/zh/guide/markdown/tex.html"},{default:d(()=>[e("公式")]),_:1}),e(" 支持。")])]),l("li",null,[l("p",null,[e("如果你是一名程序员需要大量展示代码与 demo，本主题为代码块提供了浅色与深色两种主题，"),t(a,{to:"/zh/guide/markdown/code-tabs.html"},{default:d(()=>[e("代码组")]),_:1}),e(" 与 "),t(a,{to:"/zh/guide/feature/copy-code.html"},{default:d(()=>[e('"一键复制" 按钮')]),_:1}),e("。同时我们还提供 "),t(a,{to:"/zh/guide/markdown/demo.html"},{default:d(()=>[e("代码演示")]),_:1}),e("，"),t(a,{to:"/zh/guide/markdown/playground.html"},{default:d(()=>[e("Playground")]),_:1}),e(" 和 "),t(a,{to:"/zh/guide/markdown/vue-playground.html"},{default:d(()=>[e("Vue Playground")]),_:1}),e(" 功能，方便你展示自己的 Vue、React 组件或者其他 demo。")])]),l("li",null,[l("p",null,[e("如果你需要提供产品文档与展示，主题提供了 "),t(a,{to:"/zh/guide/markdown/tabs.html"},{default:d(()=>[e("选项卡")]),_:1}),e("、"),t(a,{to:"/zh/guide/markdown/presentation.html"},{default:d(()=>[e("幻灯片")]),_:1}),e("、"),t(a,{to:"/zh/guide/markdown/chart.html"},{default:d(()=>[e("图表")]),_:1}),e("、"),t(a,{to:"/zh/guide/markdown/flowchart.html"},{default:d(()=>[e("流程图")]),_:1}),e(" 与 "),t(a,{to:"/zh/guide/markdown/mermaid.html"},{default:d(()=>[e("Mermaid 图表")]),_:1}),e(" 功能。")])])]),z,k,l("ul",null,[l("li",null,[l("p",null,[t(a,{to:"/zh/guide/interface/darkmode.html"},{default:d(()=>[e("夜间模式支持")]),_:1})])]),l("li",null,[l("p",null,[t(a,{to:"/zh/guide/interface/icon.html"},{default:d(()=>[e("图标支持")]),_:1})])]),l("li",null,[l("p",null,[t(a,{to:"/zh/guide/interface/code-theme.html"},{default:d(()=>[e("自定义代码块主题")]),_:1})])]),l("li",null,[l("p",null,[t(a,{to:"/zh/guide/interface/accessibility.html"},{default:d(()=>[e("完整的无障碍支持")]),_:1})])]),l("li",null,[l("p",null,[t(a,{to:"/zh/guide/feature/page-info.html"},{default:d(()=>[e("文章信息")]),_:1})])]),l("li",null,[l("p",null,[t(a,{to:"/zh/guide/feature/photo-swipe.html"},{default:d(()=>[e("图片预览功能")]),_:1})])])]),E,l("ul",null,[l("li",null,[l("p",null,[t(a,{to:"/zh/guide/layout/navbar.html"},{default:d(()=>[e("导航栏")]),_:1}),e(":")]),b,w]),l("li",null,[l("p",null,[t(a,{to:"/zh/guide/layout/sidebar.html"},{default:d(()=>[e("侧边栏")]),_:1}),e(":")]),x,l("p",null,[e("侧边栏可以从 "),t(a,{to:"/zh/guide/layout/sidebar.html#%E9%80%9A%E8%BF%87%E6%A0%87%E9%A2%98%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90"},{default:d(()=>[e("页面标题")]),_:1}),e(" 和 "),t(a,{to:"/zh/guide/layout/sidebar.html#%E9%80%9A%E8%BF%87%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90"},{default:d(()=>[e("文件结构")]),_:1}),e(" 自动生成。")])]),l("li",null,[l("p",null,[t(a,{to:"/zh/guide/layout/home.html"},{default:d(()=>[e("主页")]),_:1}),e(":")]),A]),l("li",null,[l("p",null,[t(a,{to:"/zh/guide/layout/catalog.html"},{default:d(()=>[e("目录")]),_:1})]),y]),l("li",null,[v,l("p",null,[e("新增 "),t(a,{to:"/zh/guide/layout/breadcrumb.html"},{default:d(()=>[e("路径导航")]),_:1}),e(", "),B,e(" 与 "),t(a,{to:"/zh/guide/layout/footer.html"},{default:d(()=>[e("页脚")]),_:1}),e(" 支持。")])])]),V,l("ul",null,[l("li",null,[l("p",null,[t(a,{to:"/zh/guide/feature/search.html"},{default:d(()=>[e("VuePress 官方搜索插件")]),_:1}),e(" 的内置支持。")])]),l("li",null,[l("p",null,[t(a,{to:"/zh/guide/feature/search.html#%E4%BD%BF%E7%94%A8-vuepress-plugin-search-pro"},{default:d(()=>[e("基于客户端搜索的 search-pro 插件")]),_:1}),e(" 支持。")])])]),P,l("p",null,[e("主题引入了完整的博客支持，你可以启用全新的 "),t(a,{to:"/zh/guide/blog/home.html"},{default:d(()=>[e("博客主页")]),_:1}),e("。")]),l("ul",null,[l("li",null,[l("p",null,[e("内置的 "),t(a,{to:"/zh/guide/blog/category-and-tags.html"},{default:d(()=>[e("分类、标签")]),_:1}),e("、"),t(a,{to:"/zh/guide/blog/timeline.html"},{default:d(()=>[e("时间线")]),_:1}),e("、"),t(a,{to:"/zh/guide/blog/article.html"},{default:d(()=>[e("文章精选")]),_:1}),e(" 等功能。")])]),l("li",null,[l("p",null,[e("提供 "),t(a,{to:"/zh/guide/feature/comment.html"},{default:d(()=>[e("评论功能")]),_:1}),e(" 以便你可以与你的访客交流。")])]),l("li",null,[l("p",null,[e("支持创建 "),t(a,{to:"/zh/guide/advanced/feed.html"},{default:d(()=>[e("Feed")]),_:1}),e("，以便他人可以订阅你的网站。")])])]),F,l("ul",null,[l("li",null,[l("p",null,[e("提供 "),t(a,{to:"/zh/guide/advanced/seo.html"},{default:d(()=>[e("SEO 增强")]),_:1}),e("，会自动注入网站信息以完整支持 OGP 与 JSON-LD 协议，增强搜索引擎索引。")])]),l("li",null,[l("p",null,[e("提供 "),t(a,{to:"/zh/guide/advanced/sitemap.html"},{default:d(()=>[e("Sitemap 生成")]),_:1})])]),l("li",null,[l("p",null,[e("提供 "),t(a,{to:"/zh/guide/advanced/pwa.html"},{default:d(()=>[e("PWA 支持")]),_:1}),e("，使你的站点可被安装。")])])]),M,l("ul",null,[l("li",null,[l("p",null,[e("复制时 "),t(a,{to:"/zh/guide/feature/copyright.html"},{default:d(()=>[e("追加版权信息")]),_:1}),e("，也可禁用页面复制和选择。")])]),l("li",null,[l("p",null,[e("提供 "),t(a,{to:"/zh/guide/feature/encrypt.html"},{default:d(()=>[e("文章加密")]),_:1}),e(" 功能，保护隐私信息。")])])])])}const O=o(s,[["render",S],["__file","intro.html.vue"]]);export{O as default};
