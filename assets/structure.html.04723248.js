import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as s,g as n}from"./app.bdb7652d.js";const t={},r=n(`<p>This tutorial will introduce VuePress project structure.</p><h2 id="vuepress-project-structure" tabindex="-1"><a class="header-anchor" href="#vuepress-project-structure" aria-hidden="true">#</a> VuePress project structure</h2><p>VuePress only controls the files in the VuePress project folder, that is, the parameters in the previous chapter.Other files in project are not used by VuePress.</p><div class="custom-container note"><p class="custom-container-title">Note</p><p>If you used <code>docs</code> as instructed in the previous tutorial, then <code>docs</code> is your VuePress project folder.</p></div><p>A basic project structure is as follows:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 .github (optional) \u2192 GitHub config file storage path
\u2502     \u2514\u2500\u2500 workflow \u2192 GitHub workflow configuration
\u2502          \u2514\u2500\u2500 docs-deploy.yml \u2192 Workflow for automatic deployment of documents
|
\u251C\u2500\u2500 docs \u2192 project folder specified by you
\u2502    \u2502
\u2502    \u251C\u2500\u2500 .vuepress (optional) \u2192 VuePress config folder
\u2502    \u2502    \u2502
\u2502    \u2502    \u251C\u2500\u2500 dist (default) \u2192 build output directory
\u2502    \u2502    \u2502
\u2502    \u2502    \u251C\u2500\u2500 public (optional) \u2192 static resource directory
\u2502    \u2502    \u2502
\u2502    \u2502    \u251C\u2500\u2500 styles (optional) \u2192 style-related files
\u2502    \u2502    \u2502
\u2502    \u2502    \u251C\u2500\u2500 config.{js,ts} (optional) \u2192 the entry file of the configuration file
\u2502    \u2502    \u2502
\u2502    \u2502    \u2514\u2500\u2500 client.{js,ts} (optional) \u2192 client application file
\u2502    \u2502
\u2502    \u251C\u2500\u2500 ... \u2192 Other project documentation
\u2502    \u2502
\u2502    \u2514\u2500\u2500 README.md \u2192 Project Homepage
\u2502
\u2514\u2500\u2500 package.json \u2192 Nodejs configuration file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[r];function o(c,d){return i(),s("div",null,l)}var v=e(t,[["render",o],["__file","structure.html.vue"]]);export{v as default};
