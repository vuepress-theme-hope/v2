import{a3 as c,Z as l,_ as i,a4 as p,a1 as e,a2 as t,$ as n,a0 as o,a5 as s,q as d}from"./framework-f408d5b9.js";const u={},h=e("p",null,"В этом руководстве вы узнаете, как писать контент в проекте VuePress.",-1),m=s(`<h2 id="создание-страниц" tabindex="-1"><a class="header-anchor" href="#создание-страниц" aria-hidden="true">#</a> Создание страниц</h2><p>VuePress ориентирован на уценку. Каждый файл Markdown внутри вашего проекта представляет собой отдельную страницу.</p><p>По умолчанию путь маршрута страницы определяется относительным путем вашего файла Markdown.</p><p>В предыдущей главе каталог <code>docs</code> использовался как папка проекта VuePress. Итак, если у вас есть следующая структура пути:</p><p>Предполагая, что это структура каталогов ваших файлов Markdown:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>└─ docs
   ├─ guide
   │  ├─ ...
   │  └─ page.md
   │  └─ markdown.md
   │  └─ README.md
   ├─ ...
   ├─ slide.md
   └─ README.md
</code></pre></div><p>Путь маршрута ваших файлов Markdown:</p><table><thead><tr><th>Относительный путь</th><th>Путь маршрута</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/slide.md</code></td><td><code>/slide.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/slide.md</code></td><td><code>/guide/slide.html</code></td></tr><tr><td><code>/guide/page.md</code></td><td><code>/guide/page.html</code></td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">README.md</p><p><code>README.md</code> — это особый случай. В Markdown по соглашению он будет использоваться как домашняя страница папки, в которой он находится. Поэтому, когда он отображается как веб-страница, его соответствующий путь является путем домашней страницы <code>index.html</code> на веб-странице.</p><p>Это должно быть легко понять.</p></div><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>`,10),k={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},_=s(`<p>Frontmatter должен быть в верхней части файла Markdown, окруженный парой тройных дефисов. Вот простой пример:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US
<span class="token key atrule">title</span><span class="token punctuation">:</span> the title of the page
<span class="token key atrule">description</span><span class="token punctuation">:</span> the description of the page</span>
<span class="token punctuation">---</span></span>

<span class="token comment">&lt;!-- Here is Markdown Content --&gt;</span>

...
</code></pre></div><p>Вы, должно быть, заметили, что поля в Frontmatter очень похожи на файлы конфигурации VuePress. Вы можете переопределить <code>lang</code>, <code>title</code>, <code>description</code> и другие свойства текущей страницы через Frontmatter. Таким образом, вы можете думать о Frontmatter как о конфигурации области на уровне страницы, которая обычно имеет наивысший приоритет, и конфигурация действует только на текущей странице.</p><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2><p>Каждый файл Markdown будет обрабатываться VuePress Theme Hope для отображения содержимого файла как веб-контента.</p>`,5),g={class:"hint-container tip"},w=e("p",{class:"hint-container-title"},"Синтаксис Markdown",-1),M=e("p",null,"Примерно через пятнадцать минут вы сможете научиться писать на Markdown, не забудьте вернуться после прочтения!",-1),f=e("p",null,"Вы можете попробовать отредактировать файл Markdown самостоятельно, чтобы изменить содержимое шаблона. Если вы запустили сервер разработки, измененные результаты будут синхронизированы с сервером разработки в режиме реального времени.",-1),x={class:"hint-container info"},E=e("p",{class:"hint-container-title"},"Расширение Markdown",-1),v=e("code",null,"vuepress-plugin-md-enhance",-1);function V(b,y){const r=d("ExternalLinkIcon"),a=d("RouterLink");return l(),i("div",null,[h,p(" more "),m,e("p",null,[t("Frontmatter — очень важная концепция в VuePress, она используется для переноса конфигурации файлов Markdown. Файлы Markdown могут содержать Frontmatter "),e("a",k,[t("YAML"),n(r)]),t(".")]),_,e("div",g,[w,e("p",null,[t("Если вы еще не знакомы с Markdown, ознакомьтесь с "),n(a,{to:"/ru/cookbook/markdown/"},{default:o(()=>[t("Учебником по Markdown")]),_:1}),t(".")]),M]),f,e("div",x,[E,e("ul",null,[e("li",null,[e("p",null,[t("Сам VuePress расширяет некоторый синтаксис Markdown. Подробнее смотрите "),n(a,{to:"/ru/cookbook/vuepress/markdown.html"},{default:o(()=>[t("VuePress → Markdown")]),_:1}),t(".")])]),e("li",null,[e("p",null,[t("Тема дополнительно включает некоторые расширения синтаксиса через "),v,t(", смотрите "),n(a,{to:"/ru/guide/get-started/markdown.html"},{default:o(()=>[t("Руководство → Markdown")]),_:1}),t(".")])])])])])}const R=c(u,[["render",V],["__file","content.html.vue"]]);export{R as default};
