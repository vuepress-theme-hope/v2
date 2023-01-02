import{a3 as r,Z as u,_ as g,$ as o,a0 as s,a1 as e,a2 as n,a5 as i,q as l}from"./framework-f408d5b9.js";const h={},m=e("div",{class:"language-diff line-numbers-mode","data-ext":"diff"},[e("pre",{class:"language-diff"},[e("code",null,[e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},` // .vuepress/config.ts
`)]),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},` import theme from "vuepress-theme-hope";
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` import { defineUserConfig } from "vuepress";
`),e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` import { hopeTheme } from "vuepress-theme-hope";
`)]),n(`
`),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},` export default theme.config({
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` export default defineUserConfig({
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`   // your site config here
`),e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`   // ...
`)]),n(`
`),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},`   themeConfig:{
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},`   theme: hopeTheme({
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`     // your theme config here
`),e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`     // ...
`)]),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},`   },
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},`   }),
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},` });
`)])])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),v=e("div",{class:"language-diff line-numbers-mode","data-ext":"diff"},[e("pre",{class:"language-diff"},[e("code",null,[n(`// .vuepress/config.js
`),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},` const { config } = require("vuepress-theme-hope");
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` import { hopeTheme } from "vuepress-theme-hope";
`)]),n(`
`),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},` module.exports = theme.config({
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` export default {
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`   // your site config here
`),e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`   // ...
`)]),n(`
`),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},`   themeConfig:{
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},`   theme: hopeTheme({
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`     // your theme config here
`),e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`     // ...
`)]),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},`   },
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},`   }),
`)]),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},` });
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` };
`)])])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),b=i(`<h2 id="theme-usage" tabindex="-1"><a class="header-anchor" href="#theme-usage" aria-hidden="true">#</a> Theme Usage</h2><ul><li>rename <code>themeConfig</code> to <code>hopeTheme</code></li><li>rename <code>navbarConfig</code> to <code>navbar</code></li><li>rename <code>sidebarConfig</code> to <code>sidebar</code></li><li>added <code>arraySidebar</code> and <code>objectSidebar</code> helpers</li><li>remove <code>config</code></li></ul><h2 id="theme-options" tabindex="-1"><a class="header-anchor" href="#theme-options" aria-hidden="true">#</a> Theme Options</h2><ul><li><p>changed <code>author</code> type from <code>string | undefined</code> to <code>AuthorInfo[] | AuthorInfo | string[] | string | undefined</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Author name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author website
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This change allows you to add multiple authors and set sites for them.</p></li></ul><h3 id="navigation-bar" tabindex="-1"><a class="header-anchor" href="#navigation-bar" aria-hidden="true">#</a> Navigation Bar</h3><ul><li><p>unified <code>nav</code>, <code>navbar</code> to <code>navbar</code></p></li><li><p>rename <code>darkLogo</code> to <code>logoDark</code></p></li><li><p>rename <code>navAutoHide</code>to <code>navbarAutoHide</code></p></li><li><p>added <code>navbarIcon</code> option to control navbar icon display</p></li><li><p>added <code>navbarLayout</code> option to control navbar layout</p></li></ul><h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> Sidebar</h3><ul><li><p>rename <code>sidebarDepth</code> to <code>headerDepth</code></p></li><li><p>remove <code>displayAllHeaders</code></p></li></ul><h3 id="navbar-sidebar-config-unified" tabindex="-1"><a class="header-anchor" href="#navbar-sidebar-config-unified" aria-hidden="true">#</a> Navbar Sidebar Config Unified</h3><ul><li><p>change <code>items</code> in navbar config to <code>children</code></p></li><li><p>change <code>title</code> to <code>text</code> and <code>path</code> to <code>link</code> in sidebar configuration.</p></li><li><p>V2 navbar supports setting the Markdown file path directly like the sidebar to automatically generate text, icons and links</p></li><li><p>add <code>activeMatch</code> to control route activation</p></li></ul><p>So both are unified as <code>text</code>, <code>icon</code>, <code>prefix</code>, <code>link</code>, <code>children</code>, <code>activeMatch</code>.</p><h3 id="search" tabindex="-1"><a class="header-anchor" href="#search" aria-hidden="true">#</a> Search</h3><p>Since the theme no longer has a built-in search:</p><ul><li><p>remove <code>search</code>, <code>searchPlaceholder</code>, <code>searchMaxSuggestions</code></p></li><li><p>remove <code>algolia</code>, <code>algoliaType</code></p></li></ul><h3 id="page-link" tabindex="-1"><a class="header-anchor" href="#page-link" aria-hidden="true">#</a> Page Link</h3><ul><li><p>rename <code>prevLinks</code> to <code>prevLink</code></p></li><li><p>rename <code>nextLinks</code> to <code>nextLink</code></p></li><li><p>rename <code>editLinks</code> to <code>editLink</code></p></li><li><p>rename <code>updateTime</code> to <code>lastUpdated</code></p></li></ul><h3 id="outlook" tabindex="-1"><a class="header-anchor" href="#outlook" aria-hidden="true">#</a> Outlook</h3><ul><li><p>Add <code>iconAssets</code> option</p></li><li><p><code>iconPrefix</code> default value now infers from <code>iconAssets</code></p></li><li><p>update values of <code>darkmode</code> option</p><ul><li>add <code>&quot;enable&quot;</code></li><li>rename <code>&quot;switch&quot;</code> to <code>&quot;toggle&quot;</code></li><li>rename <code>&quot;auto-switch&quot;</code> to <code>&quot;switch&quot;</code></li></ul></li><li><p><code>themeColor</code> and <code>fullscreen</code> is disabled by default</p></li></ul><h3 id="blog-config" tabindex="-1"><a class="header-anchor" href="#blog-config" aria-hidden="true">#</a> Blog Config</h3><ul><li><p>supports separate config in each language</p></li><li><p>add <code>blog.description</code> to set blogger description or motto</p></li><li><p>rename <code>blog.links</code> to <code>blog.medias</code></p></li><li><p>change default value of <code>blog.roundAvatar</code> from <code>true</code> to <code>false</code></p></li><li><p>rename <code>blog.perPage</code> to <code>blog.articlePerPage</code></p></li><li><p>move <code>blog.autoExcerpt</code> to <code>plugins.blog.excerptLength</code></p></li></ul><h3 id="encryption-config" tabindex="-1"><a class="header-anchor" href="#encryption-config" aria-hidden="true">#</a> Encryption Config</h3><ul><li><p>change <code>encrypt.status: &quot;global&quot; | &quot;local&quot;</code> (default <code>&quot;local&quot;</code>) to <code>encrypt.global: boolean</code> (default <code>false</code>)</p></li><li><p>rename <code>encrypt.global</code> to <code>encrypt.admin</code></p></li></ul><h3 id="custom-layout" tabindex="-1"><a class="header-anchor" href="#custom-layout" aria-hidden="true">#</a> custom layout</h3><ul><li>remove <code>custom</code></li></ul><h3 id="page-layout" tabindex="-1"><a class="header-anchor" href="#page-layout" aria-hidden="true">#</a> Page Layout</h3><ul><li>rename <code>anchorDisplay</code> to <code>toc</code></li></ul><h3 id="reading-speed" tabindex="-1"><a class="header-anchor" href="#reading-speed" aria-hidden="true">#</a> Reading Speed</h3><ul><li>move <code>wordPerMinute</code> to <code>plugins.readingTime.wordPerMinute</code></li></ul><h2 id="plugin-changes" tabindex="-1"><a class="header-anchor" href="#plugin-changes" aria-hidden="true">#</a> Plugin Changes</h2><h3 id="addition" tabindex="-1"><a class="header-anchor" href="#addition" aria-hidden="true">#</a> Addition</h3><ul><li>Added <code>plugins.blog</code> to control blog links</li><li>Added <code>plugins.nprogress</code> to control nprogress</li><li>Added <code>plugins.prismjs</code> to control Prism.js</li></ul><h3 id="changes" tabindex="-1"><a class="header-anchor" href="#changes" aria-hidden="true">#</a> Changes</h3><p>Move all plugin related options under <code>plugins</code>.</p>`,33),f=e("li",null,[e("p",null,[n("rename "),e("code",null,"activeHash"),n(" to "),e("code",null,"plugins.activeHeaderLinks")]),e("p",null,[n("The theme now uses official plugin "),e("code",null,"@vuepress/plugin-active-header-links"),n(". "),e("img",{src:"https://img.shields.io/badge/-warning-yellow",alt:"warning",loading:"lazy"})])],-1),k=e("p",null,[n("move "),e("code",null,"comment"),n(" moved to "),e("code",null,"plugins.comment")],-1),y=e("li",null,[e("p",null,[n("Adds support for "),e("code",null,"twikoo"),n(" and "),e("code",null,"giscus"),n(),e("img",{src:"https://img.shields.io/badge/-New-brightgreen",alt:"New",loading:"lazy"})])],-1),w=e("p",null,[n("Vssue is currently missing "),e("img",{src:"https://img.shields.io/badge/-warning-yellow",alt:"warning",loading:"lazy"})],-1),x={href:"https://github.com/meteorlxy",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[n("Valine is removed "),e("img",{src:"https://img.shields.io/badge/-removed-red",alt:"removed",loading:"lazy"})],-1),N={href:"https://waline.js.org",target:"_blank",rel:"noopener noreferrer"},z=i('<li><p>move <code>copyCode</code> to <code>plugins.copyCode</code></p></li><li><p>move <code>copyright</code> to <code>plugins.copyright</code></p><p>The plugin is disabled by default now. <img src="https://img.shields.io/badge/-warning-yellow" alt="warning" loading="lazy"></p></li><li><p>move <code>feed</code> to <code>plugins.feed</code></p><ul><li><p>Supports removing custom components and elements through <code>plugins.feed.customElements</code> options <img src="https://img.shields.io/badge/-new-brightgreen" alt="NEW" loading="lazy"></p></li><li><p>Customize feed generation via <code>plugins.feed.getter</code> option <img src="https://img.shields.io/badge/-new-brightgreen" alt="NEW" loading="lazy"></p></li><li><p>Multi-category support <img src="https://img.shields.io/badge/-new-brightgreen" alt="New" loading="lazy"></p></li><li><p>Move all output options from <code>plugins.feed.output</code> option to plugin option root and rename them.</p><ul><li><p><code>feed.output.atom.enable</code> renamed to <code>plugins.feed.atom</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>feed.output.json.enable</code> renamed to <code>plugins.feed.json</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>feed.output.rss.enable</code> renamed to <code>plugins.feed.rss</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>feed.output.atom.path</code> renamed to <code>plugins.feed.atomOutputFilename</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>feed.output.json.path</code> renamed to <code>plugins.feed.jsonOutputFilename</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>feed.output.rss.path</code> renamed to <code>plugins.feed.rssOutputFilename</code></p></li><li><p><code>plugins.feed.atom</code>, <code>plugins.feed.json</code> and <code>plugins.feed.rss</code> is <code>false</code> by default <img src="https://img.shields.io/badge/-warning-yellow" alt="warning" loading="lazy"></p><p>The theme no longer outputs feed files in three formats by default. If necessary, please set options to output formats needed.</p></li></ul></li></ul></li><li><p>move <code>git</code> to <code>plugins.git</code></p><p>The theme use official plugin <code>@vuepress/plugin-git</code> now. <img src="https://img.shields.io/badge/-warning-yellow" alt="warning" loading="lazy"></p></li>',4),T=e("p",null,[n("move "),e("code",null,"mdEnhance"),n(" to "),e("code",null,"plugins.mdEnhance")],-1),C=i('<li><p>Markdown link check <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>The plugin now check your Markdown links and warn you when broken links are detected.</p><p>You can control this behavior with <code>plugins.mdEnhance.linkCheck</code> option</p></li><li><p>image mark support <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>Use <code>#light</code> and <code>#dark</code> suffix to mark images to display them in light mode or dark mode via <code>plugins.mdEnhance.imgMark</code> option</p></li>',2),j=e("p",null,[n("Chart.js support "),e("img",{src:"https://img.shields.io/badge/-New-brightgreen",alt:"New",loading:"lazy"})],-1),E={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"plugins.mdEnhance.chart",-1),A=i(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // chart.js config
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: chart Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// chart.js config</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S=e("p",null,[n("ECharts support "),e("img",{src:"https://img.shields.io/badge/-New-brightgreen",alt:"New",loading:"lazy"})],-1),L={href:"https://echarts.apache.org/en/index.html",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"plugins.mdEnhance.echarts",-1),M=i(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // chart.js config
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: echarts Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// chart.js config</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),V=i(`<li><p>content include support <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>use <code>@include()</code> to include other file content in Markdown via <code>plugins.mdEnhance.include</code> options.</p><p>Use <code>@include(filename)</code> to include a file.</p><p>To partially import the file, you can specify the range of lines to be included:</p><ul><li><code>@include(filename{start-end})</code></li><li><code>@include(filename{start-})</code></li><li><code>@include(filename{-end})</code></li></ul><p>Also you can include file region:</p><ul><li><code>@include(filename#region)</code></li></ul></li><li><p>tabs support <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>Use <code>tabs</code> container to create tabs via <code>plugins.mdEnhance.tabs</code> option.</p></li><li><p>add <code>plugins.mdEnhance.gfm</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>Control supporting gfm</p></li><li><p>add <code>plugins.mdEnhance.vPre</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>The following syntax is no longer built into VuePress2, so we add this option.</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: v-pre

:::
</code></pre></div></li><li><p>rename <code>mdEnhance.codegroup</code> to <code>plugins.mdEnhance.codetabs</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p>rename <code>plugins.mdEnhance.lazyLoad</code> to <code>plugins.mdEnhance.lazyLoad</code> and change default value from <code>true</code> to <code>false</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p>remove <code>plugins.mdEnhance.enableAll</code> <img src="https://img.shields.io/badge/-removed-red" alt="removed" loading="lazy"></p><p>There are too many noob users who don’t know what they are doing, and they just enable this option without using all the feature provided, yet they complain about load speed.</p></li><li><p>remove <code>plugins.mdEnhance.lineNumbers</code> <img src="https://img.shields.io/badge/-removed-red" alt="removed" loading="lazy"></p><p>VuePress2 supports line numbers config for code blocks individually</p></li><li><p>remove <code>plugins.mdEnhance.imageFix</code> <img src="https://img.shields.io/badge/-removed-red" alt="removed" loading="lazy"></p><p>Image related issues have been fixed in V2</p></li>`,9),D=i('<li><p>move <code>photoSwipe</code> to <code>plugins.photoSwipe</code></p></li><li><p>move <code>pwa</code> to <code>plugins.pwa</code></p><ul><li><p><code>plugins.pwa.update</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy">: control the update logic of SW</p><ul><li><p><code>&quot;disabled&quot;</code>: Do nothing even when new service worker is available. After new service work succeeds installing and starts waiting, it will control page and provide new content in next visit.</p></li><li><p><code>&quot;available&quot;</code>: Only display update popup when the new service worker is available</p></li><li><p><code>&quot;hint&quot;</code>: Display a hint to let user choose to refresh immediately</p></li><li><p><code>&quot;force&quot;</code>: unregister current service worker immediately then refresh to get new content</p></li></ul></li><li><p><code>plugins.pwa.appendBase</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy">: automatically insert <code>base</code> to the <code>manifest</code> option</p></li><li><p><code>plugins.pwa.hintComponent</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy">: Hint component for detecting new content</p></li><li><p>shouldPrefetch hint <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy">: Now the plugin will check <code>shouldPrefetch</code> option in config file and warn you to disable it.</p></li><li><p><code>plugins.pwa.cacheHTML</code> default value changed from <code>true</code> to <code>false</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p><p>This can effectively reduce the SW update time</p></li><li><p><code>pwa.popupComponent</code> renamed to <code>plugins.pwa.updateComponent</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p><p>This is because we added a new prompt popup window, so we need to avoid name confusion</p></li></ul></li><li><p>move <code>readingTime</code> to <code>plugins.readingTime</code></p></li><li><p>move <code>seo</code> to <code>plugins.seo</code></p><ul><li><p>JSON-LD support <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>The plugin now can generate JSON-LD script tags for you, and is providing an option <code>plugin.seo.jsonLd</code> to let you customize the JSON-LD properties.</p></li><li><p>Description generation <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>The plugin can generate a description for you automatically via <code>plugin.seo.autoDescription</code> options</p></li><li><p>Canonical link <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>You can set canonical link via <code>plugin.seo.canonicalLink</code> option. It&#39;s useful when your docs</p></li><li><p><code>seo.customMeta</code> renamed to <code>plugin.seo.customHead</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p><p>Now you can edit all head tags instead of only meta in V1. are deployed in several places.</p></li></ul></li><li><p>move <code>sitemap</code> to <code>plugins.sitemap</code></p><ul><li><p><code>plugin.sitemap.priority</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy">: setting default value for priority</p></li><li><p><code>sitemap.urls</code> renamed to <code>plugin.sitemap.extraUrls</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>sitemap.exclude</code> renamed to <code>plugin.sitemap.excludeUrls</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>sitemap.outFile</code> renamed to <code>plugin.sitemap.sitemapFilename</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>sitemap.modifyTimeGetter</code> renamed to <code>plugin.sitemap.modifyTimeGetter</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li></ul></li>',5),U=i('<h3 id="deletion" tabindex="-1"><a class="header-anchor" href="#deletion" aria-hidden="true">#</a> Deletion</h3><ul><li><p>remove <code>chunkRename</code></p><p>The theme no longer provides this functionality.</p></li><li><p>remove <code>cleanUrl</code></p><p>The theme no longer provides this functionality.</p></li><li><p>remove <code>git</code></p><p>The theme now uses official plugin <code>@vuepress/plugin-git</code>.</p></li><li><p>remove <code>smoothScroll</code></p><p>The theme now provides smooth scrolling via CSS and no longer provides compatibility with older browsers.</p></li></ul>',2);function I(O,H){const d=l("CodeTabs"),a=l("ExternalLinkIcon");return u(),g("div",null,[o(d,{id:"0",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:s(({title:t,value:c,isActive:p})=>[m]),tab1:s(({title:t,value:c,isActive:p})=>[v]),_:1}),b,e("ul",null,[f,e("li",null,[k,e("ul",null,[y,e("li",null,[w,e("p",null,[n("Vssue is written in Vue2, and the author "),e("a",x,[n("meteorlxy"),o(a)]),n(" has not yet made it compatible with Vue3 yet")])]),e("li",null,[_,e("p",null,[n("Valine is lack of maintenance and can leak your privacy. You should use "),e("a",N,[n("Waline"),o(a)]),n(" instead.")])])])]),z,e("li",null,[T,e("ul",null,[C,e("li",null,[j,e("p",null,[n("Adds "),e("a",E,[n("chart.js"),o(a)]),n(" support via "),q,n(" option")]),A]),e("li",null,[S,e("p",null,[n("Adds "),e("a",L,[n("ECharts"),o(a)]),n(" support via "),P,n(" option")]),M]),V])]),D]),U])}const F=r(h,[["render",I],["__file","config.html.vue"]]);export{F as default};
