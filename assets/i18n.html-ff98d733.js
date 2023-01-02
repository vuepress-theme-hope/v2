import{a3 as i,Z as l,_ as c,a1 as n,a2 as s,$ as e,a5 as t,q as o}from"./framework-f408d5b9.js";const p={},d=t(`<p>你可以在主题配置中通过在 <code>locales[localePath]</code> 添加下列选项自定义主题的多语言选项。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 当前语言代码
   */</span>
  lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 外观
   */</span>
  outlookLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 主题色
     */</span>
    themeColor<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 夜间模式
     */</span>
    darkmode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 全屏文字
     */</span>
    fullscreen<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 博客
   */</span>
  blogLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 文章文字 */</span>
    article<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 文章列表文字 */</span>
    articleList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 分类文字 */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 标签文字 */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 时间轴文字 */</span>
    timeline<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 时间轴标题文字 */</span>
    timelineTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 全部文字 */</span>
    all<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 个人介绍 */</span>
    intro<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 搜藏文字 */</span>
    star<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 幻灯片 */</span>
    slides<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 加密 */</span>
    encrypt<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 分页
   */</span>
  paginationLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 上一页文字
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 下一页文字
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 跳转提示文字
     */</span>
    navigate<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 跳转按钮文字
     */</span>
    action<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 页码错误文字
     *
     * <span class="token keyword">@description</span> \`$page\` 会自动替换为当前的总页数
     */</span>
    errorText<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 加密
   */</span>
  encryptLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 加密图标的无障碍标签
     */</span>
    iconLabel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 密码输入框的默认占位符
     */</span>
    placeholder<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 是否记忆密码
     */</span>
    remember<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 密码错误提示
     */</span>
    errorHint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  navbarLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 语言下拉列表的无障碍标签
     */</span>
    selectLangAriaLabel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 当前语言的名称
     */</span>
    langName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 页面元信息
   */</span>
  metaLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 作者文字
     */</span>
    author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 写作日期文字
     */</span>
    date<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 标记原创的文字
     */</span>
    origin<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 访问量文字
     */</span>
    views<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 标签文字
     */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 分类文字
     */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 期望阅读时间文字
     */</span>
    readingTime<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 文章字数
     */</span>
    words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 此页内容
     */</span>
    toc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 上一页
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 下一页
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 更新时间文字
     */</span>
    lastUpdated<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 贡献者文字
     */</span>
    contributors<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 编辑此页文字
     */</span>
    editLink<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  routeLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 跳转到主要内容
     */</span>
    skipToContent<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 404 页面提示
     */</span>
    notFoundMsg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回主页
     */</span>
    home<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回上一页
     */</span>
    back<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \`&lt;ExternalLinkIcon&gt;\` 的仅供屏幕阅读器文字
     */</span>
    openInNewWindow<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，一些多语言选项是由插件控制的，它们包括:</p>`,3),r={href:"https://vuepress-theme-hope.github.io/v2/comment/zh/config/waline.html#walinelocales",target:"_blank",rel:"noopener noreferrer"},v={href:"https://vuepress-theme-hope.github.io/v2/copy-code/zh/config.html#locales",target:"_blank",rel:"noopener noreferrer"},m={href:"https://vuepress-theme-hope.github.io/v2/copyright/zh/config.html#locales",target:"_blank",rel:"noopener noreferrer"},u={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/config.html#locales",target:"_blank",rel:"noopener noreferrer"},b={href:"https://vuepress-theme-hope.github.io/v2/photo-swipe/zh/config.html#locales",target:"_blank",rel:"noopener noreferrer"},k={href:"https://vuepress-theme-hope.github.io/v2/pwa/zh/config.html#locales",target:"_blank",rel:"noopener noreferrer"};function g(h,_){const a=o("ExternalLinkIcon");return l(),c("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[n("a",r,[s("plugins.comment.walineLocales"),e(a)]),s(": Waline 评论服务")])]),n("li",null,[n("p",null,[n("a",v,[s("plugins.copyCode.locales"),e(a)]),s(": 代码块复制")])]),n("li",null,[n("p",null,[n("a",m,[s("plugins.copyright.locales"),e(a)]),s(": 版权信息")])]),n("li",null,[n("p",null,[n("a",u,[s("plugins.mdEnhance.locales"),e(a)]),s(": Markdown 增强")])]),n("li",null,[n("p",null,[n("a",b,[s("plugins.photoSwipe.locales"),e(a)]),s(": 图片浏览")])]),n("li",null,[n("p",null,[n("a",k,[s("plugins.pwa.locales"),e(a)]),s(": PWA")])])])])}const L=i(p,[["render",g],["__file","i18n.html.vue"]]);export{L as default};
