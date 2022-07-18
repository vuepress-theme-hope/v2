import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as t,c as l,b as n,a as o,d as s,e as c}from"./app.ac90e5ac.js";const p={},d=n("h2",{id:"selector",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#selector","aria-hidden":"true"},"#"),s(" selector")],-1),r=n("ul",null,[n("li",null,[s("\u7C7B\u578B: "),n("code",null,"string")]),n("li",null,[s("\u9ED8\u8BA4\u503C: "),n("code",null,'".theme-default-content :not(a) > img"')])],-1),u=n("p",null,"\u56FE\u7247\u9009\u62E9\u5668",-1),m=n("h2",{id:"options",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),s(" options")],-1),v=s("\u4F20\u9012\u7ED9 "),b={href:"http://photoswipe.com/",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"photo-swipe",-1),h=s(" \u7684\u989D\u5916\u9009\u9879"),_=c(`<h2 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h2><ul><li>\u7C7B\u578B: <code>number</code></li><li>\u9ED8\u8BA4\u503C: <code>500</code></li></ul><p>\u64CD\u4F5C\u9875\u9762 DOM \u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D ms\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u4F60\u4F7F\u7528\u7684\u4E3B\u9898\u6709\u5207\u6362\u52A8\u753B\uFF0C\u5EFA\u8BAE\u914D\u7F6E\u6B64\u9009\u9879\u4E3A <code>\u5207\u6362\u52A8\u753B\u65F6\u957F + 200</code>\u3002</p></div><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><ul><li><p>\u7C7B\u578B: <code>PhotoSwipeLocaleConfig</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PhotoSwipeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u5173\u95ED\u6309\u94AE\u6807\u7B7E\u6587\u5B57
   */</span>
  close<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u5168\u5C4F\u6309\u94AE\u6807\u7B7E\u6587\u5B57
   */</span>
  fullscreen<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u5206\u4EAB\u6309\u94AE\u6807\u7B7E\u6587\u5B57
   */</span>
  share<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u7F29\u653E\u6309\u94AE\u6807\u7B7E\u6587\u5B57
   */</span>
  zoom<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4E0A\u4E00\u5F20\u56FE\u7247\u6309\u94AE\u6807\u7B7E\u6587\u5B57
   */</span>
  prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4E0B\u4E00\u5F20\u56FE\u7247\u6309\u94AE\u6807\u7B7E\u6587\u5B57
   */</span>
  next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u529F\u80FD\u6309\u94AE\u914D\u7F6E
   */</span>
  buttons<span class="token operator">:</span> PhotoSwipeDefaultUI<span class="token punctuation">.</span>ShareButtonData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PhotoSwipeLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> PhotoSwipeLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5FC5\u586B: \u5426</p></li></ul><p>Photo Swipe \u63D2\u4EF6\u7684\u56FD\u9645\u5316\u914D\u7F6E\u3002</p>`,7);function f(g,x){const e=i("ExternalLinkIcon");return t(),l("div",null,[d,r,u,m,n("p",null,[v,n("a",b,[k,o(e)]),h]),_])}var y=a(p,[["render",f],["__file","config.html.vue"]]);export{y as default};
