import{a3 as c,Z as d,_ as l,a1 as e,a2 as o,$ as t,a5 as r,q as i}from"./framework-f408d5b9.js";const a={},h=r('<h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h2><p>控制 <code>vuepress-plugin-components</code>，为 Markdown 提供一组组件。</p><p>可以在 Markdown 中使用的可用组件为:</p><ul><li><code>&quot;AudioPlayer&quot;</code></li><li><code>&quot;Badge&quot;</code></li><li><code>&quot;BiliBili&quot;</code></li><li><code>&quot;CodePen&quot;</code></li><li><code>&quot;PDF&quot;</code></li><li><code>&quot;StackBlitz&quot;</code></li><li><code>&quot;VideoPlayer&quot;</code></li><li><code>&quot;YouTube&quot;</code></li></ul><p>你可以将 <code>plugin.components.components</code> 设置为需要的组件数组，默认情况下为 <code>[&quot;Badge&quot;]</code>。</p><p>同时，你可以设置 <code>plugin.components.rootComponents</code> 来启用一些根组件，例如 addThis 和 notice。</p>',6),p={class:"hint-container info"},_=e("p",{class:"hint-container-title"},"相关信息",-1),u={href:"https://vuepress-theme-hope.github.io/v2/components/zh/config.html",target:"_blank",rel:"noopener noreferrer"},g={id:"copycode",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#copycode","aria-hidden":"true"},"#",-1),f=e("p",null,[o("控制 "),e("code",null,"vuepress-plugin-copy-code2"),o("，提供代码复制按钮。")],-1),v=e("p",null,[o("默认情况下，不需要任何配置。如果你不需要这个功能，请设置为 "),e("code",null,"false"),o("。")],-1),b={class:"hint-container info"},x=e("p",{class:"hint-container-title"},"相关信息",-1),q={href:"https://vuepress-theme-hope.github.io/v2/copy-code/zh/config.html",target:"_blank",rel:"noopener noreferrer"},k={id:"git",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#",-1),B=e("p",null,[o("控制 "),e("code",null,"@vuepress/plugin-git"),o("，通过 Git 提交历史提供文件信息。")],-1),z=e("p",null,"默认情况下，为了提高开发服务器性能仅在构建模式下启用。你可以手动设置一个布尔值控制插件状态，可以设置插件选项。",-1),j={class:"hint-container info"},y=e("p",{class:"hint-container-title"},"相关信息",-1),P={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/git.html",target:"_blank",rel:"noopener noreferrer"},S={id:"nprogress",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#nprogress","aria-hidden":"true"},"#",-1),V=e("p",null,[o("控制 "),e("code",null,"@vuepress/plugin-nprogress"),o("，通过 nprogress 提供切换页面时的进度条。")],-1),C=e("p",null,[o("默认情况下，主题会启用此插件，你可以设置 "),e("code",null,"false"),o(" 禁用它。")],-1),N={id:"prismjs",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#prismjs","aria-hidden":"true"},"#",-1),M=e("p",null,[o("控制 "),e("code",null,"@vuepress/plugin-prismjs"),o("，通过 PrismJS 提供代码块高亮。")],-1),I=e("p",null,[o("默认情况下，主题会启用此插件，你可以设置 "),e("code",null,"false"),o(" 禁用它并自行高亮代码块。")],-1),L={class:"hint-container info"},A=e("p",{class:"hint-container-title"},"相关信息",-1),D={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/prismjs.html",target:"_blank",rel:"noopener noreferrer"},F={id:"photoswipe",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#photoswipe","aria-hidden":"true"},"#",-1),J=e("p",null,[o("控制 "),e("code",null,"vuepress-plugin-photo-swipe"),o("，提供图片浏览功能。")],-1),Y=e("p",null,[o("默认情况下，不需要任何配置。如果你不需要这个功能，请设置为 "),e("code",null,"false"),o("。")],-1),Z={class:"hint-container info"},$=e("p",{class:"hint-container-title"},"相关信息",-1),H={href:"https://vuepress-theme-hope.github.io/v2/photo-swipe/zh/config.html",target:"_blank",rel:"noopener noreferrer"},K={id:"readingtime",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#readingtime","aria-hidden":"true"},"#",-1),Q=r('<p>控制 <code>vuepress-plugin-reading-time2</code>，为页面进行字数统计并生成预计的阅读时间。</p><h3 id="readingtime-wordperminute" tabindex="-1"><a class="header-anchor" href="#readingtime-wordperminute" aria-hidden="true">#</a> readingTime.wordPerMinute</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>300</code></li></ul><p>每分钟的阅读字数。</p>',4),R={class:"hint-container info"},U=e("p",{class:"hint-container-title"},"相关信息",-1),W={href:"https://vuepress-theme-hope.github.io/v2/reading-time/zh/",target:"_blank",rel:"noopener noreferrer"},X={id:"seo",tabindex:"-1"},ee=e("a",{class:"header-anchor",href:"#seo","aria-hidden":"true"},"#",-1),oe=e("p",null,[o("控制 "),e("code",null,"vuepress-plugin-seo2"),o("，提供搜索引擎增强。")],-1),te=e("p",null,[o("默认情况下，不需要任何配置。如果你不需要这个功能，请设置为 "),e("code",null,"false"),o("。")],-1),ne={class:"hint-container info"},se=e("p",{class:"hint-container-title"},"相关信息",-1),ie={href:"https://vuepress-theme-hope.github.io/v2/seo/zh/config.html",target:"_blank",rel:"noopener noreferrer"},re={id:"sitemap",tabindex:"-1"},ce=e("a",{class:"header-anchor",href:"#sitemap","aria-hidden":"true"},"#",-1),de=e("p",null,[o("控制 "),e("code",null,"vuepress-plugin-sitemap2"),o("，为网站自动生成 Sitemap。")],-1),le=e("p",null,[o("默认情况下，不需要任何配置。如果你不需要这个功能，请设置为 "),e("code",null,"false"),o("。")],-1),ae={class:"hint-container info"},he=e("p",{class:"hint-container-title"},"相关信息",-1),pe={href:"https://vuepress-theme-hope.github.io/v2/sitemap/zh/config.html",target:"_blank",rel:"noopener noreferrer"};function _e(ue,ge){const n=i("ExternalLinkIcon"),s=i("Badge");return d(),l("div",null,[h,e("div",p,[_,e("p",null,[o("插件选项请参见 "),e("a",u,[o("components 插件选项"),t(n)]),o(".")])]),e("h2",g,[m,o(" copyCode "),t(s,{text:"默认启用"})]),f,v,e("div",b,[x,e("p",null,[o("插件选项请参见 "),e("a",q,[o("copy-code2 插件选项"),t(n)]),o("。")])]),e("h2",k,[w,o(" git "),t(s,{text:"默认仅限构建模式"})]),B,z,e("div",j,[y,e("p",null,[o("插件选项请参见 "),e("a",P,[o("git 插件选项"),t(n)]),o("。")])]),e("h2",S,[T,o(" nprogress "),t(s,{text:"默认启用"})]),V,C,e("h2",N,[E,o(" prismjs "),t(s,{text:"默认启用"})]),M,I,e("div",L,[A,e("p",null,[o("插件选项请参见 "),e("a",D,[o("prismjs 插件选项"),t(n)]),o("。")])]),e("h2",F,[G,o(" photoSwipe "),t(s,{text:"默认启用"})]),J,Y,e("div",Z,[$,e("p",null,[o("插件选项请参见 "),e("a",H,[o("photo-swipe 插件选项"),t(n)]),o("。")])]),e("h2",K,[O,o(" readingTime "),t(s,{text:"默认启用"})]),Q,e("div",R,[U,e("p",null,[o("更多插件选项请参见 "),e("a",W,[o("reading-time2 插件文档"),t(n)]),o("。")])]),e("h2",X,[ee,o(" seo "),t(s,{text:"默认启用"})]),oe,te,e("div",ne,[se,e("p",null,[o("插件选项请参见 "),e("a",ie,[o("seo2 插件选项"),t(n)]),o("。")])]),e("h2",re,[ce,o(" sitemap "),t(s,{text:"默认启用"})]),de,le,e("div",ae,[he,e("p",null,[o("插件选项请参见 "),e("a",pe,[o("sitemap2 插件选项"),t(n)]),o("。")])])])}const fe=c(a,[["render",_e],["__file","others.html.vue"]]);export{fe as default};
