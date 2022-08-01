import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,g as s}from"./app.bdb7652d.js";const l={},d=s(`<p>\u0412 \u044D\u0442\u043E\u043C \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 VuePress.</p><h2 id="\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430-\u043F\u0440\u043E\u0435\u043A\u0442\u0430-vuepress" tabindex="-1"><a class="header-anchor" href="#\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430-\u043F\u0440\u043E\u0435\u043A\u0442\u0430-vuepress" aria-hidden="true">#</a> \u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 VuePress</h2><p>VuePress \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0444\u0430\u0439\u043B\u0430\u043C\u0438 \u0432 \u043F\u0430\u043F\u043A\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 VuePress, \u0442\u043E \u0435\u0441\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C\u0438 \u0438\u0437 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0433\u043B\u0430\u0432\u044B. \u0414\u0440\u0443\u0433\u0438\u0435 \u0444\u0430\u0439\u043B\u044B \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F VuePress.</p><div class="custom-container note"><p class="custom-container-title">\u0417\u0430\u043C\u0435\u0442\u043A\u0430</p><p>\u0415\u0441\u043B\u0438 \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 <code>docs</code>, \u043A\u0430\u043A \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0432 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u043C \u0443\u0440\u043E\u043A\u0435, <code>docs</code> \u2014 \u044D\u0442\u043E \u043F\u0430\u043F\u043A\u0430 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 VuePress.</p></div><p>\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[d];function c(o,t){return i(),n("div",null,r)}var v=e(l,[["render",c],["__file","structure.html.vue"]]);export{v as default};
