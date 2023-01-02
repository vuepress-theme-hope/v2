import{a3 as e,Z as n,_ as a,a5 as s}from"./framework-f408d5b9.js";const i={},d=s(`<p>Вы можете настроить следующие параметры в frontmatter страницы, чтобы контролировать поведение плагина.</p><h2 id="плагин-copyright2" tabindex="-1"><a class="header-anchor" href="#плагин-copyright2" aria-hidden="true">#</a> Плагин <code>copyright2</code></h2><h3 id="copy-triggerwords" tabindex="-1"><a class="header-anchor" href="#copy-triggerwords" aria-hidden="true">#</a> copy.triggerWords</h3><ul><li>Тип: <code>number</code></li><li>По умолчанию: <code>100</code></li></ul><p>Минимальные слова, вызывающие добавление авторских прав.</p><h3 id="copy-disablecopy" tabindex="-1"><a class="header-anchor" href="#copy-disablecopy" aria-hidden="true">#</a> copy.disableCopy</h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Отключить копирование.</p><h3 id="copy-disableselection" tabindex="-1"><a class="header-anchor" href="#copy-disableselection" aria-hidden="true">#</a> copy.disableSelection</h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Отключить выбор.</p><h2 id="плагин-feed2" tabindex="-1"><a class="header-anchor" href="#плагин-feed2" aria-hidden="true">#</a> Плагин <code>feed2</code></h2><h3 id="feed-title" tabindex="-1"><a class="header-anchor" href="#feed-title" aria-hidden="true">#</a> feed.title</h3><ul><li>Тип: <code>string</code></li></ul><p>Название элемента потока</p><h3 id="feed-description" tabindex="-1"><a class="header-anchor" href="#feed-description" aria-hidden="true">#</a> feed.description</h3><ul><li>Тип: <code>string</code></li></ul><p>Описание потока</p><h3 id="feed-content" tabindex="-1"><a class="header-anchor" href="#feed-content" aria-hidden="true">#</a> feed.content</h3><ul><li>Тип: <code>string</code></li></ul><p>Содержимое потока</p><h3 id="feed-author" tabindex="-1"><a class="header-anchor" href="#feed-author" aria-hidden="true">#</a> feed.author</h3><ul><li>Тип: <code>FeedAuthor[] | FeedAuthor</code></li></ul><p>Автор элемента потока</p><details class="hint-container details"><summary>Формат FeedAuthor</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Author name
   */</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author site
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author avatar
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="feed-contributor" tabindex="-1"><a class="header-anchor" href="#feed-contributor" aria-hidden="true">#</a> feed.contributor</h3><ul><li>Тип: <code>FeedContributor[] | FeedContributor</code></li></ul><p>Участники потока</p><details class="hint-container details"><summary>FeedContributor format</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedContributor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Author name
   */</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author site
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author avatar
   *
   * <span class="token keyword">@description</span> json format only
   */</span>
  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="feed-guid" tabindex="-1"><a class="header-anchor" href="#feed-guid" aria-hidden="true">#</a> feed.guid</h3><ul><li>Тип: <code>string</code></li></ul><p>Идентификатор элемента потока, используемый для идентификации элемента потока.</p><div class="hint-container note"><p class="hint-container-title">Заметка</p><p>Вы должны убедиться, что это глобально уникально.</p></div><h2 id="плагин-sitemap2" tabindex="-1"><a class="header-anchor" href="#плагин-sitemap2" aria-hidden="true">#</a> Плагин <code>sitemap2</code></h2><h3 id="sitemap-changefreq" tabindex="-1"><a class="header-anchor" href="#sitemap-changefreq" aria-hidden="true">#</a> sitemap.changefreq</h3><ul><li>Тип: <code>&quot;always&quot; | &quot;hourly&quot; | &quot;daily&quot; | &quot;weekly&quot; | &quot;monthly&quot; | &quot;yearly&quot; | &quot;never&quot;</code></li><li>По умолчанию: <code>&quot;daily&quot;</code></li></ul><p>Частота обновления страницы по умолчанию. Это переопределит changefreq в параметрах плагина.</p><h3 id="sitemap-exclude" tabindex="-1"><a class="header-anchor" href="#sitemap-exclude" aria-hidden="true">#</a> sitemap.exclude</h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Исключить ли страницу из карты сайта</p><h3 id="sitemap-priority" tabindex="-1"><a class="header-anchor" href="#sitemap-priority" aria-hidden="true">#</a> sitemap.priority</h3><ul><li>Тип: <code>number</code></li><li>По умолчанию: <code>0.5</code></li></ul><p>Приоритет страницы, диапазон от <code>0</code> до <code>1</code>.</p>`,43),t=[d];function o(l,c){return n(),a("div",null,t)}const p=e(i,[["render",o],["__file","plugins.html.vue"]]);export{p as default};
