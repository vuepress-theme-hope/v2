import{aj as r,ak as i,am as p,ao as t,ap as a,aq as s,as as n,ar as l,al as d}from"./app-C5NAKw-g.js";const h={},m={class:"hint-container tip"};function c(u,e){const o=l("RouteLink");return d(),i("div",null,[e[12]||(e[12]=p(`<p>VuePress is markdown-centered. Each Markdown file inside your project is a standalone page.</p><h2 id="routing" tabindex="-1"><a class="header-anchor" href="#routing"><span>Routing</span></a></h2><p>By default, the route path of a page is determined by the relative path of your Markdown file.</p><p>Assuming this is the directory structure of your Markdown files:</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>└─ docs</span></span>
<span class="line"><span>   ├─ guide</span></span>
<span class="line"><span>   │  ├─ getting-started.md</span></span>
<span class="line"><span>   │  └─ README.md</span></span>
<span class="line"><span>   ├─ contributing.md</span></span>
<span class="line"><span>   └─ README.md</span></span></code></pre></div><p>Take the <code>docs</code> directory as your <a href="https://vuejs.press/reference/cli.html" target="_blank" rel="noopener noreferrer">sourceDir</a>, e.g. you are running <code>vuepress dev docs</code> command. Then the route paths of your Markdown files would be:</p><table><thead><tr><th>Relative Path</th><th>Route Path</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/page.md</code></td><td><code>/guide/page.html</code></td></tr></tbody></table><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2><p>A Markdown file could contain a <a href="https://yaml.org/" target="_blank" rel="noopener noreferrer">YAML</a> frontmatter. The frontmatter must be at the top of the Markdown file and must be wrapped with a couple of triple-dashed lines. Here is a basic example:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">en-US</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Title of this page</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Description of this page</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div><p>You must have noticed that those fields are similar with the Site Config in Config File. You can override <code>lang</code>, <code>title</code>, <code>description</code>, etc., of current page via frontmatter. So you can take frontmatter as page scope config.</p><p>Also, VuePress has built-in support for some frontmatter fields, and your theme may have its own special frontmatter, too.</p>`,12)),t("div",m,[e[5]||(e[5]=t("p",{class:"hint-container-title"},"Tips",-1)),e[6]||(e[6]=t("p",null,[a("Check out the "),t("a",{href:"https://vuejs.press/reference/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},"Frontmatter Reference"),a(" for a full list of VuePress built-in frontmatter.")],-1)),t("p",null,[e[1]||(e[1]=a("Check out the ")),s(o,{to:"/config/frontmatter/"},{default:n(()=>e[0]||(e[0]=[a("Config > Frontmatter")])),_:1}),e[2]||(e[2]=a(" for the frontmatter of ")),e[3]||(e[3]=t("code",null,"vuepress-theme-hope",-1)),e[4]||(e[4]=a("."))])]),e[13]||(e[13]=t("h2",{id:"content",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#content"},[t("span",null,"Content")])],-1)),e[14]||(e[14]=t("p",null,[a("The main content of your page is written in Markdown. VuePress will firstly transform your Markdown to HTML code, then treat the HTML code as "),t("code",null,"<template>"),a(" of Vue SFC.")],-1)),t("p",null,[e[8]||(e[8]=a("With the power of ")),e[9]||(e[9]=t("a",{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},"markdown-it",-1)),e[10]||(e[10]=a(" and Vue template syntax, the basic Markdown can be extended a lot. Next, check out the ")),s(o,{to:"/cookbook/vuepress/markdown.html"},{default:n(()=>e[7]||(e[7]=[a("Markdown")])),_:1}),e[11]||(e[11]=a(" guide for all the extensions of Markdown in VuePress."))])])}const k=r(h,[["render",c],["__file","page.html.vue"]]),f=JSON.parse('{"path":"/cookbook/vuepress/page.html","title":"VuePress Page","lang":"en-US","frontmatter":{"title":"VuePress Page","icon":"file","order":1,"category":["Cookbook","VuePress"],"tag":["Page","VuePress"],"description":"VuePress is markdown-centered. Each Markdown file inside your project is a standalone page. Routing By default, the route path of a page is determined by the relative path of yo...","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/cookbook/vuepress/page.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope.gitee.io/v2/zh/cookbook/vuepress/page.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/cookbook/vuepress/page.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"VuePress Page"}],["meta",{"property":"og:description","content":"VuePress is markdown-centered. Each Markdown file inside your project is a standalone page. Routing By default, the route path of a page is determined by the relative path of yo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-16T07:07:10.000Z"}],["meta",{"property":"article:tag","content":"Page"}],["meta",{"property":"article:tag","content":"VuePress"}],["meta",{"property":"article:modified_time","content":"2023-05-16T07:07:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VuePress Page\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-16T07:07:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"Routing","slug":"routing","link":"#routing","children":[]},{"level":2,"title":"Frontmatter","slug":"frontmatter","link":"#frontmatter","children":[]},{"level":2,"title":"Content","slug":"content","link":"#content","children":[]}],"git":{"createdTime":1644936187000,"updatedTime":1684220830000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4}]},"readingTime":{"minutes":1.03,"words":309},"filePathRelative":"cookbook/vuepress/page.md","localizedDate":"February 15, 2022","excerpt":"","autoDesc":true}');export{k as comp,f as data};