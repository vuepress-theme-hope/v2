import{a3 as c,Z as d,_ as a,a4 as l,a1 as e,a2 as o,$ as n,a0 as r,a5 as s,q as i}from"./framework-f408d5b9.js";const p="/assets/blog-light-2f461929.png",h="/assets/blog-dark-012ae0e5.png",m={},u=e("p",null,[e("code",null,"vuepress-theme-hope"),o(" позволяет вам включить домашнюю страницу в стиле блога.")],-1),_=e("p",null,[o("Вам нужно установить "),e("code",null,"layout: BlogHome"),o(" и "),e("code",null,"home: true"),o(" на главной странице frontmatter.")],-1),g=s('<p><img src="'+p+'" alt="Скриншот главной страницы" data-mode="lightmode-only" loading="lazy"><img src="'+h+'" alt="Скриншот главной страницы" data-mode="darkmode-only" loading="lazy"></p><h2 id="информация-о-главнои-странице" tabindex="-1"><a class="header-anchor" href="#информация-о-главнои-странице" aria-hidden="true">#</a> Информация о главной странице</h2><p>Вы можете использовать <code>heroText</code>, чтобы установить основной заголовок, и <code>tagline</code>, чтобы установить подзаголовок.</p><p>Если у вас есть логотип, вы можете поместить его в папку <code>public</code> и установить через <code>heroImage</code>, если вы хотите отображать другой логотип в темном режиме, вы можете использовать <code>heroImageDark</code>. Для лучшего A11y мы рекомендуем вам установить описание логотипа на <code>heroAlt</code>.</p><p>Вы можете установить фоновое изображение через <code>bgImage</code>, но вам нужно обратить внимание, что вы должны указать полный URL-адрес или абсолютный путь. Если вы хотите, чтобы информация отображалась в полноэкранном режиме, вы можете установить <code>heroFullScreen: true</code>.</p><p>Если вам нужно настроить некоторые стили, вы можете установить стиль логотипа и фонового изображения с помощью <code>heroImageStyle</code> и <code>bgImageStyle</code>.</p><h2 id="отображение-проекта" tabindex="-1"><a class="header-anchor" href="#отображение-проекта" aria-hidden="true">#</a> Отображение проекта</h2><p>Как правило, вы можете захотеть отобразить некоторые проекты, книги, статьи, ссылки, ссылки друзей и т. д. на своей домашней странице.</p><p>Вы можете установить их через <code>projects</code>, которые представляют собой массив, где каждый элемент является объектом со следующими ключами:</p><ul><li><p><code>name</code>: обязательно, имя проекта</p></li><li><p><code>link</code>: обязательно, ссылка на проект, заполните внешний путь или абсолютный путь</p></li><li><p><code>desc</code>: описание проекта</p></li><li><p><code>icon</code>: иконка, вы можете указать полный или абсолютный путь ссылки на изображение, также поддерживается иконка FontClass</p><p>Мы предоставляем эти иконки в качестве встроенной поддержки: <code>&quot;link&quot;</code>, <code>&quot;project&quot;</code>, <code>&quot;book&quot;</code>, <code>&quot;article&quot;</code>, <code>&quot;friend&quot;</code>。</p></li></ul>',10),f={class:"hint-container info"},q=e("p",{class:"hint-container-title"},"Инфо",-1);function k(b,x){const t=i("RouterLink");return d(),a("div",null,[u,_,l(" more "),g,e("div",f,[q,e("p",null,[o("Полные элементы конфигурации см. в разделе "),n(t,{to:"/ru/config/frontmatter/blog-home.html"},{default:r(()=>[o("Конфигурация Frontmatter домашней страницы блога")]),_:1}),o(".")])])])}const v=c(m,[["render",k],["__file","home.html.vue"]]);export{v as default};