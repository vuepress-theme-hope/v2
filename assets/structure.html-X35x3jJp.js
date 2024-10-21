import{aj as s,ak as n,ao as a,an as t,am as i,al as p}from"./app-3Fu3LGel.js";const l={};function r(c,e){return p(),n("div",null,[e[0]||(e[0]=a("p",null,"本教程将介绍 VuePress 项目结构。",-1)),t(" more "),e[1]||(e[1]=i(`<h2 id="vuepress-项目结构" tabindex="-1"><a class="header-anchor" href="#vuepress-项目结构"><span>VuePress 项目结构</span></a></h2><p>VuePress 只控制 VuePress 项目文件夹中的文件，也就是默认模板生成的 <code>src</code> 文件夹，项目下的其他文件不受 VuePress 控制。</p><p>一个基本的项目结构如下:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── .github (可选的) → GitHub 配置文件存放路径</span></span>
<span class="line"><span>│    └── workflow → GitHub 工作流配置</span></span>
<span class="line"><span>│         └── docs-deploy.yml → 自动部署文档的工作流</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── src → 文档文件夹</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    ├── .vuepress (可选的) → VuePress 配置文件夹</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── dist (默认的) → 构建输出目录</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── public (可选的) → 静态资源目录</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── styles (可选的) → 用于存放样式相关的文件</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    └── client.{js,ts} (可选的) → 客户端文件</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    ├── ... → 其他项目文档</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    └── README.md → 项目主页</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── package.json → Nodejs 配置文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const d=s(l,[["render",r],["__file","structure.html.vue"]]),u=JSON.parse('{"path":"/zh/get-started/structure.html","title":"项目结构","lang":"zh-CN","frontmatter":{"title":"项目结构","icon":"folder-tree","order":6,"category":["快速上手","基础知识","教程"],"tag":["配置项目"],"description":"本教程将介绍 VuePress 项目结构。","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/get-started/structure.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.github.io/v2/get-started/structure.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/zh/get-started/structure.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"项目结构"}],["meta",{"property":"og:description","content":"本教程将介绍 VuePress 项目结构。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-08T12:45:25.000Z"}],["meta",{"property":"article:tag","content":"配置项目"}],["meta",{"property":"article:modified_time","content":"2023-11-08T12:45:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"项目结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-08T12:45:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.github.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"VuePress 项目结构","slug":"vuepress-项目结构","link":"#vuepress-项目结构","children":[]}],"git":{"createdTime":1648799705000,"updatedTime":1699447525000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.74,"words":223},"filePathRelative":"zh/get-started/structure.md","localizedDate":"2022年4月1日","excerpt":"<p>本教程将介绍 VuePress 项目结构。</p>\\n","autoDesc":true}');export{d as comp,u as data};