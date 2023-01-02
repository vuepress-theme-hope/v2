import{a3 as t,Z as l,_ as i,a4 as p,a1 as n,a2 as s,$ as c,a0 as o,a5 as a,q as u}from"./framework-f408d5b9.js";const d="/assets/home-light-02ba2627.png",k="/assets/home-dark-6f998ffd.png",r={},v=n("p",null,[n("code",null,"vuepress-theme-hope"),s(" 保留了默认主题的首页配置，在此基础上改进样式与配置。")],-1),m=n("p",null,[s("如果想要使用它，请在 frontmatter 中设置 "),n("code",null,"home: true"),s("。任何 frontmatter 之后的内容将会以普通的 Markdown 被渲染，并插入到主页渲染内容的底部。")],-1),b=n("p",null,[n("img",{src:d,alt:"首页截图","data-mode":"lightmode-only",loading:"lazy"}),n("img",{src:k,alt:"首页截图","data-mode":"darkmode-only",loading:"lazy"})],-1),y=a('<h2 id="站点信息" tabindex="-1"><a class="header-anchor" href="#站点信息" aria-hidden="true">#</a> 站点信息</h2><p>你可以使用 <code>heroText</code> 设置主标题，并通过 <code>tagline</code> 设置副标题。</p><p>如果你有一个 Logo，你可以将其放置在 <code>public</code> 文件夹中，并通过 <code>heroImage</code> 设置它，如果你在夜间模式希望展示另一个 Logo， 可以使用 <code>heroImageDark</code>。为了更好的 A11y，我们建议你设置 Logo 的描述到 <code>heroAlt</code>。</p><h2 id="主页按钮" tabindex="-1"><a class="header-anchor" href="#主页按钮" aria-hidden="true">#</a> 主页按钮</h2><p>你可以将一些重要的链接以按钮的形式展示在主页中。</p><p>你可以通过 <code>actions</code> 设置它们，它是一个数组，每个元素都是一个对象，包含以下键值:</p><ul><li><code>text</code>: 按钮文字</li><li><code>link</code>: 按钮链接</li><li><code>type</code>: 按钮类型 (仅支持 <code>&quot;primary&quot;</code> 与 <code>&quot;default&quot;</code> (默认))</li></ul><h2 id="项目特性" tabindex="-1"><a class="header-anchor" href="#项目特性" aria-hidden="true">#</a> 项目特性</h2><p>你可以通过 <code>features</code> 设置并展示项目特性，它是一个数组，每个元素都是一个对象，包含以下键值:</p><ul><li><code>title</code>: 标题</li><li><code>details</code>: 详情</li><li><code>icon</code>(可选): 可填入完整路径或绝对路径的图片链接，或 FontClass</li><li><code>link</code>(可选): 链接地址</li></ul>',10),h={class:"hint-container info"},g=n("p",{class:"hint-container-title"},"相关信息",-1),f=a(`<h2 id="配置案例" tabindex="-1"><a class="header-anchor" href="#配置案例" aria-hidden="true">#</a> 配置案例</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> 主页
<span class="token key atrule">icon</span><span class="token punctuation">:</span> home
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.svg
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> VuePress Theme Hope
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> 一个具有强大功能的 vuepress 主题✨
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 使用教程 🧭
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/cookbook/tutorial/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 介绍 💡
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/get<span class="token punctuation">-</span>started/intro.html

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 配置 🛠
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/config/

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 在线案例 🪀
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//stackblitz.com/fork/vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope

<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Markdown 增强
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> markdown
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 新增文字对齐、上下角标、脚注、标记、任务列表、数学公式、流程图、图表与幻灯片支持
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/markdown/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 幻灯片页面
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> slides
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 添加幻灯片页面以显示你喜欢的内容
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/layout/slides

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 布局增强
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> layout
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 添加路径导航、页脚、改进的导航栏、改进的页面导航等。
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/layout/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 浏览量与评论
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> comment
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 配合 Waline 来开启阅读量统计与评论支持
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/comment.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 文章信息
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> info
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/page<span class="token punctuation">-</span>info.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 博客支持
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> blog
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 使用一些很棒的布局提供博客功能，通过文章的日期、标签和分类，自动生成文章、分类、标签与时间轴列表
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/blog/intro.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 主题色切换
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> palette
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 支持自定义主题色并允许用户在预设的主题颜色之间切换
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/interface/theme<span class="token punctuation">-</span>color.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 深色模式
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> contrast
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 可以自由切换浅色模式与深色模式
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/interface/darkmode.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 完整的无障碍支持
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> support
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 为你的网站带来完整的无障碍支持
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/interface/accessibility.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 文章加密
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> lock
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/encrypt.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 搜索支持
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> search
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 支持 docsearch 和基于客户端的搜索
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/search.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 代码复制
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> copy
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 一键复制代码块中的代码
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/copy<span class="token punctuation">-</span>code.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 图片预览
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> pic
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 像相册一样允许你浏览、缩放并分享你的页面图片
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/photo<span class="token punctuation">-</span>swipe.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> SEO 增强
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> config
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 将最终生成的网页针对搜索引擎进行优化。
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/advanced/seo.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Sitemap
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> sitemap
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 自动为你的网站生成 Sitemap
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/advanced/sitemap.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Feed 支持
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> rss
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 生成你的 Feed，并通知你的用户订阅它
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/advanced/feed.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> PWA 支持
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> mobile
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 让你的网站更像一个 APP
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/advanced/pwa.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 更多新特性
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> more
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 包括图标支持、全屏按钮、返回顶部按钮等
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/

<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2019<span class="token punctuation">-</span>present Mr.Hope</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function _(z,x){const e=u("RouterLink");return l(),i("div",null,[v,m,b,p(" more "),y,n("div",h,[g,n("p",null,[s("关于完整的配置项目，请参见 "),c(e,{to:"/zh/config/frontmatter/home.html"},{default:o(()=>[s("主页 Frontmatter 配置")]),_:1}),s("。")])]),f])}const L=t(r,[["render",_],["__file","home.html.vue"]]);export{L as default};
