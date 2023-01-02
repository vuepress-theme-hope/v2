import{a3 as e,Z as s,_ as n,a4 as i,a1 as d,a5 as l}from"./framework-f408d5b9.js";const a={},r=d("p",null,"本教程将介绍 VuePress 项目结构。",-1),c=l(`<h2 id="vuepress-项目结构" tabindex="-1"><a class="header-anchor" href="#vuepress-项目结构" aria-hidden="true">#</a> VuePress 项目结构</h2><p>VuePress 只控制 VuePress 项目文件夹中的文件，也就是上一章中的参数，你所使用文件夹的其他文件不受 VuePress 控制。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你按照之前教程的指引使用 <code>docs</code>，那么 <code>docs</code> 就是你的 VuePress 项目文件夹。</p></div><p>一个基本的项目结构如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── .github (可选的) → GitHub 配置文件存放路径
│    └── workflow → GitHub 工作流配置
│         └── docs-deploy.yml → 自动部署文档的工作流
|
├── src → 文档文件夹
│    │
│    ├── .vuepress (可选的) → VuePress 配置文件夹
│    │    │
│    │    ├── dist (默认的) → 构建输出目录
│    │    │
│    │    ├── public (可选的) → 静态资源目录
│    │    │
│    │    ├── styles (可选的) → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} (可选的) → 客户端文件
│    │
│    ├── ... → 其他项目文档
│    │
│    └── README.md → 项目主页
│
└── package.json → Nodejs 配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function v(u,t){return s(),n("div",null,[r,i(" more "),c])}const m=e(a,[["render",v],["__file","structure.html.vue"]]);export{m as default};
