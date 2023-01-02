import{a3 as e,Z as n,_ as a,a5 as s}from"./framework-f408d5b9.js";const i={},l=s(`<h2 id="введение" tabindex="-1"><a class="header-anchor" href="#введение" aria-hidden="true">#</a> Введение</h2><p>Плагин <code>vuepress-plugin-copyright2</code> может добавлять информацию об авторских правах, когда пользователи копируют контент с вашего сайта. Кроме того, вы можете отключить копирование или выбор сайта с помощью этого плагина.</p><p>Этот плагин по умолчанию отключен.</p><p><code>vuepress-theme-hope</code> передает <code>plugins.copyright</code> в параметрах темы в качестве параметров плагина для плагина <code>vuepress-plugin-copyright2</code>.</p><h2 id="опции-плагина" tabindex="-1"><a class="header-anchor" href="#опции-плагина" aria-hidden="true">#</a> Опции плагина</h2><h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h3><ul><li>Тип: <code>string</code></li><li>Обязательный: Нет</li></ul><p>Деплой hostname</p><h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3><ul><li>Тип: <code>string | ((page: Page) =&gt; string)</code></li><li>Обязательный: Нет</li></ul><p>Информация об авторе</p><h3 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> license</h3><ul><li>Тип: <code>string | ((page: Page) =&gt; string)</code></li><li>Обязательный: Нет</li></ul><p>Информация о лицензии</p><h3 id="triggerwords" tabindex="-1"><a class="header-anchor" href="#triggerwords" aria-hidden="true">#</a> triggerWords</h3><ul><li>Тип: <code>number</code></li><li>По умолчанию: <code>100</code></li></ul><p>Минимальные слова, вызывающие добавление авторских прав</p><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> global</h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включено ли глобально</p><h3 id="disablecopy" tabindex="-1"><a class="header-anchor" href="#disablecopy" aria-hidden="true">#</a> disableCopy</h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Отключить копирование</p><h3 id="disableselection" tabindex="-1"><a class="header-anchor" href="#disableselection" aria-hidden="true">#</a> disableSelection</h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Отключить выбор</p><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Тип: <code>CopyrightLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CopyrightLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Author text
   *
   * <span class="token keyword">@description</span> \`:author\` will be replaced by author
   */</span>
  author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * License text
   *
   * <span class="token keyword">@description</span> \`:license\` will be replaced by current license
   */</span>
  license<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Link text
   *
   * <span class="token keyword">@description</span> \`:url\` will be replaced by current page link
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CopyrightLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> CopyrightLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Обязательный: Нет</p></li></ul><p>Конфигурация локали для плагина авторских прав.</p>`,29),c=[l];function o(d,t){return n(),a("div",null,c)}const p=e(i,[["render",o],["__file","copyright.html.vue"]]);export{p as default};
