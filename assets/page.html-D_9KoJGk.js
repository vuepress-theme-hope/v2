import{aj as l,ak as r,am as s,ao as a,ap as t,aq as n,as as o,ar as d,al as p}from"./app-C5NAKw-g.js";const h={},c={class:"hint-container info"};function g(u,e){const i=d("RouteLink");return p(),r("div",null,[e[11]||(e[11]=s(`<h2 id="icon-support" tabindex="-1"><a class="header-anchor" href="#icon-support"><span>Icon Support</span></a></h2><p>You can configure the <code>icon</code> field in the frontmatter of the page, and fill in the FontClass of the corresponding icon to bind the icon to the page.</p><p>This icon is used in navbar, sidebar, breadcrumb and page title.</p><details class="hint-container details"><summary>Example</summary><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">icon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">home</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div></details>`,4)),a("div",c,[e[2]||(e[2]=a("p",{class:"hint-container-title"},"Info",-1)),a("p",null,[e[1]||(e[1]=t("For icon settings, please see ")),n(i,{to:"/guide/interface/icon.html"},{default:o(()=>e[0]||(e[0]=[t("Icon Support")])),_:1})])]),e[12]||(e[12]=a("h2",{id:"page-info-display",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#page-info-display"},[a("span",null,"Page Info Display")])],-1)),a("p",null,[e[4]||(e[4]=t("Please see ")),n(i,{to:"/guide/feature/page-info.html"},{default:o(()=>e[3]||(e[3]=[t("Page Info Section")])),_:1})]),e[13]||(e[13]=s('<h2 id="breadcrumb" tabindex="-1"><a class="header-anchor" href="#breadcrumb"><span>Breadcrumb</span></a></h2><p>The theme provides out-of-the-box support for breadcrumb navigation.</p><p>You can control the display of breadcrumb globally and on specific pages by setting a boolean value through <code>breadcrumb</code> in theme options and page frontmatter.</p><p>The icon of the breadcrumb is also configurable. You can control the behavior of the global and specific pages by setting a boolean value through <code>breadcrumbIcon</code> in theme options and page frontmatter.</p><p>If you don&#39;t want a page to be added to the breadcrumb (e.g., the homepage), you can set <code>breadcrumbExclude: true</code> in frontmatter of that page.</p><h2 id="header-list" tabindex="-1"><a class="header-anchor" href="#header-list"><span>Header List</span></a></h2><p>In desktop mode, a list of article headers will automatically be displayed on the right side of the screen. (They will be placed in the sidebar on mobile devices)</p><p>If you don&#39;t want to display the title list on the right in desktop mode, please set <code>toc: false</code> in theme options.</p><p>You can also set it through <code>toc</code> in page frontmatter.</p><h3 id="setting-header-depth" tabindex="-1"><a class="header-anchor" href="#setting-header-depth"><span>Setting header depth</span></a></h3><p>You can customize the depth of the header list by setting <code>headerDepth</code> in theme options and page frontmatter.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>The valid maximum value of header depth depends on which levels of headers you have extracted via <a href="https://vuejs.press/reference/config.html#markdown-headers" target="_blank" rel="noopener noreferrer">markdown.headers.level</a>.</p><p>Since the default value of <a href="https://vuejs.press/reference/config.html#markdown-headers" target="_blank" rel="noopener noreferrer">markdown.headers.level</a> is <code>[2, 3]</code>, so The default maximum value for <code>headerDepth</code> is <code>2</code>.</p></div><h2 id="contributors-and-last-updated-time" tabindex="-1"><a class="header-anchor" href="#contributors-and-last-updated-time"><span>Contributors and Last Updated Time</span></a></h2>',13)),a("p",null,[e[6]||(e[6]=t("Please see ")),n(i,{to:"/guide/feature/meta.html"},{default:o(()=>e[5]||(e[5]=[t("Page Meta")])),_:1}),e[7]||(e[7]=t("."))]),e[14]||(e[14]=s(`<h2 id="prev-next-links" tabindex="-1"><a class="header-anchor" href="#prev-next-links"><span>Prev / Next Links</span></a></h2><p>Prev and next links are automatically inferred based on the sidebar order of the active page. You can also explicitly overwrite or disable them globally with theme config or on specific pages using <code>Front matter</code>:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">prev</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./some-other-page</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div><p>You can also fully customize it by passing an object containing text, icon and link.</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>Comment</span></a></h2>`,5)),a("p",null,[e[9]||(e[9]=t("Please see ")),n(i,{to:"/guide/feature/comment.html"},{default:o(()=>e[8]||(e[8]=[t("Comment section")])),_:1}),e[10]||(e[10]=t(" for details."))]),e[15]||(e[15]=s(`<h2 id="customize-layout" tabindex="-1"><a class="header-anchor" href="#customize-layout"><span>Customize Layout</span></a></h2><p>By default, the content of each <code>*.md</code> file is rendered in a <code>&lt;div class=&quot;page&quot;&gt;</code> container, along with the sidebar, auto-generated edit links and previous/next links. To use a fully custom component in place of the page, you can again specify the component using frontmatter:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">layout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SpecialLayout</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div><p>This will render <code>SpecialLayout</code> layout registered in VuePress for the given page.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>The theme only provides <code>Layout</code>, <code>404</code> layout.</p><p>Also the theme:</p><ul><li>Provides a <code>Blog</code> layout when the blogging feature is enabled</li><li>Provides a <code>Slide</code> layout when the slideshow feature is enabled</li></ul><p>If you want to provide your own layout, please <a href="https://vuejs.press/advanced/cookbook/usage-of-client-config.html#layouts" target="_blank" rel="noopener noreferrer">add them in client config files</a>.</p></div><h2 id="customize-container-class" tabindex="-1"><a class="header-anchor" href="#customize-container-class"><span>Customize Container Class</span></a></h2><p>By default, each page is rendered in a <code>div</code> with class <code>theme-container</code>. To apply some special styles to specific pages, you can additionally specify a class name by setting <code>containerClass</code> in frontmatter</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">containerClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fancy-container</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div><p>This will render in <code>&lt;div class=&quot;theme-container fancy-container&quot; /&gt;</code> for the current page.</p>`,9))])}const k=l(h,[["render",g],["__file","page.html.vue"]]),f=JSON.parse('{"path":"/guide/layout/page.html","title":"Page","lang":"en-US","frontmatter":{"title":"Page","icon":"file","order":5,"category":["Layout"],"tag":["Page","Layout"],"description":"Icon Support You can configure the icon field in the frontmatter of the page, and fill in the FontClass of the corresponding icon to bind the icon to the page. This icon is used...","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/guide/layout/page.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope.gitee.io/v2/zh/guide/layout/page.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/guide/layout/page.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Page"}],["meta",{"property":"og:description","content":"Icon Support You can configure the icon field in the frontmatter of the page, and fill in the FontClass of the corresponding icon to bind the icon to the page. This icon is used..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-23T16:54:16.000Z"}],["meta",{"property":"article:tag","content":"Page"}],["meta",{"property":"article:tag","content":"Layout"}],["meta",{"property":"article:modified_time","content":"2024-09-23T16:54:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Page\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-23T16:54:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"Icon Support","slug":"icon-support","link":"#icon-support","children":[]},{"level":2,"title":"Page Info Display","slug":"page-info-display","link":"#page-info-display","children":[]},{"level":2,"title":"Breadcrumb","slug":"breadcrumb","link":"#breadcrumb","children":[]},{"level":2,"title":"Header List","slug":"header-list","link":"#header-list","children":[{"level":3,"title":"Setting header depth","slug":"setting-header-depth","link":"#setting-header-depth","children":[]}]},{"level":2,"title":"Contributors and Last Updated Time","slug":"contributors-and-last-updated-time","link":"#contributors-and-last-updated-time","children":[]},{"level":2,"title":"Prev / Next Links","slug":"prev-next-links","link":"#prev-next-links","children":[]},{"level":2,"title":"Comment","slug":"comment","link":"#comment","children":[]},{"level":2,"title":"Customize Layout","slug":"customize-layout","link":"#customize-layout","children":[]},{"level":2,"title":"Customize Container Class","slug":"customize-container-class","link":"#customize-container-class","children":[]}],"git":{"createdTime":1644936187000,"updatedTime":1727110456000,"contributors":[{"name":"Nan Huang","email":"teddyhuangnan@gmail.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":12}]},"readingTime":{"minutes":1.85,"words":555},"filePathRelative":"guide/layout/page.md","localizedDate":"February 15, 2022","excerpt":"","autoDesc":true}');export{k as comp,f as data};