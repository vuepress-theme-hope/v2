import{a3 as e,Z as i,_ as n,a4 as s,a1 as l,a5 as d}from"./framework-f408d5b9.js";const a={},r=l("p",null,"В этом руководстве будет представлена структура проекта VuePress.",-1),t=d(`<h2 id="структура-проекта-vuepress" tabindex="-1"><a class="header-anchor" href="#структура-проекта-vuepress" aria-hidden="true">#</a> Структура проекта VuePress</h2><p>VuePress управляет только файлами в папке проекта VuePress, то есть параметрами из предыдущей главы. Другие файлы в проекте не используются VuePress.</p><div class="hint-container note"><p class="hint-container-title">Заметка</p><p>Если вы использовали <code>docs</code>, как указано в предыдущем уроке, <code>docs</code> — это папка вашего проекта VuePress.</p></div><p>Базовая структура проекта выглядит следующим образом:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── .github (optional) → GitHub config file storage path
│     └── workflow → GitHub workflow configuration
│          └── docs-deploy.yml → Workflow for automatic deployment of documents
|
├── docs → project folder specified by you
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function c(o,u){return i(),n("div",null,[r,s(" more "),t])}const m=e(a,[["render",c],["__file","structure.html.vue"]]);export{m as default};
