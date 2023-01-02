import{a3 as e,Z as n,_ as s,a5 as a}from"./framework-f408d5b9.js";const i={},l=a(`<h2 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h2><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить стиль домашней страницы при значении <code>true</code></p><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li>Тип: <code>string</code></li><li>Обязательный: Нет</li></ul><p>Название страницы будет использоваться в хлебных крошках, СЕО и т. д.</p><h2 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext" aria-hidden="true">#</a> heroText</h2><ul><li>Тип: <code>string | false</code></li><li>По умолчанию: <code>&quot;Hello&quot;</code></li></ul><p>Заголовок Hero</p><h2 id="tagline" tabindex="-1"><a class="header-anchor" href="#tagline" aria-hidden="true">#</a> tagline</h2><ul><li>Тип: <code>string | false</code></li><li>По умолчанию: <code>&quot;Welcome to your VuePress site&quot;</code></li></ul><p>Краткое описание в hero</p><h2 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h2><ul><li>Тип: <code>string</code></li><li>Обязательный: Нет</li></ul><p>Адрес изображения hero (логотипа), необходимо указать как абсолютный путь (изображения необходимо поместить в папку <code>.vuepress/public</code>)</p><h2 id="heroimagedark" tabindex="-1"><a class="header-anchor" href="#heroimagedark" aria-hidden="true">#</a> heroImageDark</h2><ul><li>Тип: <code>string</code></li><li>Обязательный: Нет</li></ul><p>Адрес hero (логотипа) темного режима, необходимо указать как абсолютный путь (изображения должны быть помещены в папку <code>.vuepress/public</code>), по умолчанию будет таким же, как и <code>heroImage</code>.</p><h2 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h2><ul><li>Тип: <code>string</code></li><li>Обязательный: Нет</li></ul><p>Альтернативный текст иконки Home</p><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h2><ul><li><p>Тип: <code>ThemeHomeActionOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeHomeActionOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Action name
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Action link
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Type of action
   * <span class="token keyword">@default</span> &#39;default&#39;
   */</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;primary&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Обязательный: Нет</p></li></ul><p>Действия Home</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h2><ul><li><p>Тип: <code>ThemeHomeFeatureOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeHomeFeatureOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Feature name
   */</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Feature description
   */</span>
  details<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Feature icon
   *
   * <span class="token keyword">@description</span> image link or icon fontClass are supported
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Feature link
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Обязательный: Нет</p></li></ul><p>Описание возможностей</p>`,27),t=[l];function o(c,d){return n(),s("div",null,t)}const p=e(i,[["render",o],["__file","home.html.vue"]]);export{p as default};
