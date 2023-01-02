import{a3 as t,Z as s,_ as o,a4 as d,a1 as e,a2 as n,$ as r,a5 as i,q as l}from"./framework-f408d5b9.js";const c="/assets/slides-light-4d065fbe.png",h="/assets/slides-dark-377abe9e.png",p={},m=e("p",null,[e("code",null,"vuepress-theme-hope"),n(" позволяет добавлять страницы со слайдами.")],-1),_=e("p",null,[n("Вам нужно установить "),e("code",null,"layout: Slide"),n(" в frontmatter, чтобы активировать страницу со слайдами.")],-1),u=e("h2",{id:"демо",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#демо","aria-hidden":"true"},"#"),n(" Демо")],-1),g={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/guide/presentation/demo.html",target:"_blank",rel:"noopener noreferrer"},f=i('<p><img src="'+c+'" alt="Скриншот страницы слайда" data-mode="lightmode-only" loading="lazy"><img src="'+h+`" alt="Скриншот страницы слайда" data-mode="darkmode-only" loading="lazy"></p><h2 id="внимание" tabindex="-1"><a class="header-anchor" href="#внимание" aria-hidden="true">#</a> Внимание</h2><div class="hint-container warning"><p class="hint-container-title">Включить презентацию</p><p>Вы должны включить функцию презентации в <code>vuepress-plugin-md-enhance</code>, установив <code>plugins.mdEnhance.presentation</code> в настройках темы, иначе макет не будет отображаться правильно.</p></div><div class="hint-container warning"><p class="hint-container-title">Отсутствие мульти слайдов</p><p>Вы должны включить только один синтаксис слайда на этой странице, чтобы избежать проблем с визуализацией.</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>@slidestart [your theme]

// your slides

@slideend
</code></pre></div></div>`,4);function v(k,x){const a=l("ExternalLinkIcon");return s(),o("div",null,[m,_,d(" more "),u,e("p",null,[e("a",g,[n("Вот демонстрация, содержащая все функции слайда"),r(a)]),n(".")]),f])}const b=t(p,[["render",v],["__file","slides.html.vue"]]);export{b as default};
