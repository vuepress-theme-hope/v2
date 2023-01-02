import{a3 as c,Z as a,_ as i,a1 as e,a2 as o,$ as d,a5 as s,q as p}from"./framework-f408d5b9.js";const l={},n=e("code",null,"vuepress-theme-hope",-1),r={href:"https://vuepress-theme-hope.github.io/v2/sitemap/",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"vuepress-plugin-sitemap2",-1),h=s('<p>Плагин автоматически сгенерирует время последнего обновления страницы на основе временной метки Git страницы, а также объявит ссылку на альтернативную версию страницы на других языках в соответствии с конфигурацией локалей.</p><p>Если вам не нужен этот плагин, установите для <code>plugins.sitemap</code> значение <code>false</code> в настройках темы.</p><div class="hint-container info"><p class="hint-container-title">Инфо</p><p><code>vuepress-theme-hope</code> передает <code>plugins.sitemap</code> в параметрах темы в качестве параметров плагина для <code>vuepress-plugin-sitemap2</code>.</p></div><h2 id="управление-ссылкои-на-карту-саита" tabindex="-1"><a class="header-anchor" href="#управление-ссылкои-на-карту-саита" aria-hidden="true">#</a> Управление ссылкой на карту сайта</h2><p>По умолчанию все ссылки на сайты, кроме страницы 404, будут добавлены в файл Sitemap.</p><p>Чтобы добавить другие страницы в файл Sitemap за пределами страницы проекта VuePress, превратите их в массив и передайте в <code>extraUrls</code>.</p><p>Если вы не хотите, чтобы определенные страницы отображались в карте сайта, вы можете преобразовать их в массив и передать в <code>excludeUrls</code>, или вы можете передать функцию фильтра через параметры <code>filter</code>. Вы также можете установить для <code>sitemap.exclude</code> значение <code>true</code> во frontmatter.</p><p>Вы также можете управлять выходной ссылкой через <code>sitemapFilename</code>. Выходной каталог по умолчанию — <code>sitemap.xml</code>.</p><h2 id="изменить-частоту" tabindex="-1"><a class="header-anchor" href="#изменить-частоту" aria-hidden="true">#</a> Изменить частоту</h2><p>Цикл обновления страницы по умолчанию — <code>daily</code> (каждый день). Чтобы изменить весь цикл страницы, установите <code>changefreq</code>. Вы также можете установить <code>sitemap.changefreq</code> в frontmatter страницы. Обратите внимание, что страница имеет более высокий приоритет.</p><p>Допустимые частоты:</p><ul><li><code>&quot;always&quot;</code></li><li><code>&quot;hourly&quot;</code></li><li><code>&quot;daily&quot;</code></li><li><code>&quot;weekly&quot;</code></li><li><code>&quot;monthly&quot;</code></li><li><code>&quot;yearly&quot;</code></li><li><code>&quot;never&quot;</code></li></ul><div class="hint-container info"><p class="hint-container-title">Введение в карту сайта</p><p>Файлы Sitemap могут быть адресованы пользователям или программному обеспечению. Многие сайты имеют карты сайта, видимые пользователям, которые представляют собой систематизированное, обычно иерархическое представление сайта. Они предназначены для того, чтобы помочь посетителям найти определенные страницы, а также могут использоваться поисковыми роботами. Карты сайтов, организованные в алфавитном порядке, иногда называемые индексами сайтов, представляют собой другой подход.</p><p>Для использования поисковыми системами и другими поисковыми роботами существует структурированный формат XML Sitemap, в котором перечислены страницы сайта, их относительная важность и частота их обновления. Это указывается в файле robots.txt и обычно называется sitemap.xml .</p><p>Google представил протокол Sitemaps, чтобы веб-разработчики могли публиковать списки ссылок со своих сайтов.</p></div>',13);function m(_,f){const t=p("ExternalLinkIcon");return a(),i("div",null,[e("p",null,[n,o(" обеспечивает создание карты сайта, включая "),e("a",r,[u,d(t)]),o(".")]),h])}const v=c(l,[["render",m],["__file","sitemap.html.vue"]]);export{v as default};
