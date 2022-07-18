import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as c,c as t,b as n,a as e,g as o,f as s}from"./app.625f2658.js";const p={},d=o(`<p>\u4F60\u53EF\u4EE5\u5728\u4E3B\u9898\u914D\u7F6E\u4E2D\u901A\u8FC7\u5728 <code>locales[localePath]</code> \u6DFB\u52A0\u4E0B\u5217\u9009\u9879\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u591A\u8BED\u8A00\u9009\u9879\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">HopeThemeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u5F53\u524D\u8BED\u8A00\u4EE3\u7801
   */</span>
  lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u5916\u89C2
   */</span>
  outlookLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u4E3B\u9898\u8272
     */</span>
    themeColor<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u591C\u95F4\u6A21\u5F0F
     */</span>
    darkmode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5168\u5C4F\u6587\u5B57
     */</span>
    fullscreen<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u535A\u5BA2
   */</span>
  blogLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** \u6587\u7AE0\u6587\u5B57 */</span>
    article<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u6587\u7AE0\u5217\u8868\u6587\u5B57 */</span>
    articleList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u5206\u7C7B\u6587\u5B57 */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u6807\u7B7E\u6587\u5B57 */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u65F6\u95F4\u8F74\u6587\u5B57 */</span>
    timeline<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u65F6\u95F4\u8F74\u6807\u9898\u6587\u5B57 */</span>
    timelineTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u5168\u90E8\u6587\u5B57 */</span>
    all<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u4E2A\u4EBA\u4ECB\u7ECD */</span>
    intro<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u641C\u85CF\u6587\u5B57 */</span>
    star<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u5E7B\u706F\u7247 */</span>
    slides<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u52A0\u5BC6 */</span>
    encrypt<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u5206\u9875
   */</span>
  paginationLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u4E0A\u4E00\u9875\u6587\u5B57
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4E0B\u4E00\u9875\u6587\u5B57
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8DF3\u8F6C\u63D0\u793A\u6587\u5B57
     */</span>
    navigate<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8DF3\u8F6C\u6309\u94AE\u6587\u5B57
     */</span>
    action<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u9875\u7801\u9519\u8BEF\u6587\u5B57
     *
     * <span class="token keyword">@description</span> \`$page\` \u4F1A\u81EA\u52A8\u66FF\u6362\u4E3A\u5F53\u524D\u7684\u603B\u9875\u6570
     */</span>
    errorText<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u52A0\u5BC6
   */</span>
  encryptLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u52A0\u5BC6\u56FE\u6807\u7684\u65E0\u969C\u788D\u6807\u7B7E
     */</span>
    iconLabel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5BC6\u7801\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u5360\u4F4D\u7B26
     */</span>
    placeholder<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u662F\u5426\u8BB0\u5FC6\u5BC6\u7801
     */</span>
    remember<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5BC6\u7801\u9519\u8BEF\u63D0\u793A
     */</span>
    errorHint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  navbarLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u8BED\u8A00\u4E0B\u62C9\u5217\u8868\u7684\u65E0\u969C\u788D\u6807\u7B7E
     */</span>
    selectLangAriaLabel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5F53\u524D\u8BED\u8A00\u7684\u540D\u79F0
     */</span>
    langName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u9875\u9762\u5143\u4FE1\u606F
   */</span>
  metaLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u4F5C\u8005\u6587\u5B57
     */</span>
    author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5199\u4F5C\u65E5\u671F\u6587\u5B57
     */</span>
    date<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6807\u8BB0\u539F\u521B\u7684\u6587\u5B57
     */</span>
    origin<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8BBF\u95EE\u91CF\u6587\u5B57
     */</span>
    views<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6807\u7B7E\u6587\u5B57
     */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5206\u7C7B\u6587\u5B57
     */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u671F\u671B\u9605\u8BFB\u65F6\u95F4\u6587\u5B57
     */</span>
    readingTime<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6587\u7AE0\u5B57\u6570
     */</span>
    words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6B64\u9875\u5185\u5BB9
     */</span>
    toc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4E0A\u4E00\u9875
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4E0B\u4E00\u9875
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u66F4\u65B0\u65F6\u95F4\u6587\u5B57
     */</span>
    lastUpdated<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8D21\u732E\u8005\u6587\u5B57
     */</span>
    contributors<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7F16\u8F91\u6B64\u9875\u6587\u5B57
     */</span>
    editLink<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  routeLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 404 \u9875\u9762\u63D0\u793A
     */</span>
    <span class="token string-property property">&quot;404msg&quot;</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u4E3B\u9875
     */</span>
    home<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u4E0A\u4E00\u9875
     */</span>
    back<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \`&lt;ExternalLinkIcon&gt;\` \u7684\u4EC5\u4F9B\u5C4F\u5E55\u9605\u8BFB\u5668\u6587\u5B57
     */</span>
    openInNewWindow<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u65F6\uFF0C\u4E00\u4E9B\u591A\u8BED\u8A00\u9009\u9879\u662F\u7531\u63D2\u4EF6\u63A7\u5236\u7684\uFF0C\u5B83\u4EEC\u5305\u62EC:</p>`,3),r={href:"https://vuepress-theme-hope.github.io/v2/comment/zh/config/waline.html#walinelocales",target:"_blank",rel:"noopener noreferrer"},v=s("plugins.comment.walineLocales"),m=s(": Waline \u8BC4\u8BBA\u670D\u52A1"),u={href:"https://vuepress-theme-hope.github.io/v2/copy-code/zh/config.html#locales",target:"_blank",rel:"noopener noreferrer"},b=s("plugins.copyCode.locales"),k=s(": \u4EE3\u7801\u5757\u590D\u5236"),g={href:"https://vuepress-theme-hope.github.io/v2/copyright/zh/config.html#locales",target:"_blank",rel:"noopener noreferrer"},h=s("plugins.copyright.locales"),_=s(": \u7248\u6743\u4FE1\u606F"),f={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/config.html#locales",target:"_blank",rel:"noopener noreferrer"},L=s("plugins.mdEnhance.locales"),w=s(": Markdown \u589E\u5F3A"),y={href:"https://vuepress-theme-hope.github.io/v2/photo-swipe/zh/config.html#locales",target:"_blank",rel:"noopener noreferrer"},x=s("plugins.photoSwipe.locales"),z=s(": \u56FE\u7247\u6D4F\u89C8"),N={href:"https://vuepress-theme-hope.github.io/v2/pwa/zh/config.html#locales",target:"_blank",rel:"noopener noreferrer"},E=s("plugins.pwa.locales"),T=s(": PWA");function I(V,B){const a=l("ExternalLinkIcon");return c(),t("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[n("a",r,[v,e(a)]),m])]),n("li",null,[n("p",null,[n("a",u,[b,e(a)]),k])]),n("li",null,[n("p",null,[n("a",g,[h,e(a)]),_])]),n("li",null,[n("p",null,[n("a",f,[L,e(a)]),w])]),n("li",null,[n("p",null,[n("a",y,[x,e(a)]),z])]),n("li",null,[n("p",null,[n("a",N,[E,e(a)]),T])])])])}var q=i(p,[["render",I],["__file","i18n.html.vue"]]);export{q as default};
