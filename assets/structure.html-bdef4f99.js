import{a3 as e,Z as i,_ as s,a4 as n,a1 as t,a5 as r}from"./framework-f408d5b9.js";const l={},o=t("p",null,"This tutorial will introduce VuePress project structure.",-1),c=r(`<h2 id="vuepress-project-structure" tabindex="-1"><a class="header-anchor" href="#vuepress-project-structure" aria-hidden="true">#</a> VuePress project structure</h2><p>VuePress only controls the files in the VuePress project folder, that is, the parameters in the previous chapter.Other files in project are not used by VuePress.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>If you used <code>docs</code> as instructed in the previous tutorial, then <code>docs</code> is your VuePress project folder.</p></div><p>A basic project structure is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── .github (optional) → GitHub config file storage path
│     └── workflow → GitHub workflow configuration
│          └── docs-deploy.yml → Workflow for automatic deployment of documents
|
├── src → docs folder
│    │
│    ├── .vuepress (optional) → VuePress config folder
│    │    │
│    │    ├── dist (default) → build output directory
│    │    │
│    │    ├── public (optional) → static resource directory
│    │    │
│    │    ├── styles (optional) → style-related files
│    │    │
│    │    ├── config.{js,ts} (optional) → the entry file of the configuration file
│    │    │
│    │    └── client.{js,ts} (optional) → client application file
│    │
│    ├── ... → Other project documentation
│    │
│    └── README.md → Project Homepage
│
└── package.json → Nodejs configuration file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function d(a,u){return i(),s("div",null,[o,n(" more "),c])}const p=e(l,[["render",d],["__file","structure.html.vue"]]);export{p as default};
