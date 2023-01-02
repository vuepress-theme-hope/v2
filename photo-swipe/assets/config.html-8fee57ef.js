import{_ as e,W as i,X as l,$ as n,a0 as s,Y as t,a1 as o,E as c}from"./framework-ecf98296.js";const r={},p=n("h2",{id:"selector",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#selector","aria-hidden":"true"},"#"),s(" selector")],-1),d=n("ul",null,[n("li",null,[s("类型: "),n("code",null,"string | string[]")]),n("li",null,[s("默认值: "),n("code",null,'".theme-default-content :not(a) > img"')])],-1),u=n("p",null,"图片选择器",-1),m=n("h2",{id:"options",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),s(" options")],-1),v={href:"http://photoswipe.com/",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"photo-swipe",-1),k=o(`<h2 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h2><ul><li>类型: <code>number</code></li><li>默认值: <code>800</code></li></ul><p>操作页面 DOM 的延时，单位 ms。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你使用的主题有切换动画，建议配置此选项为 <code>切换动画时长 + 200</code>。</p></div><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><ul><li><p>类型: <code>PhotoSwipeLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PhotoSwipeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 关闭按钮标签文字
   */</span>
  close<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 全屏按钮标签文字
   */</span>
  fullscreen<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 分享按钮标签文字
   */</span>
  share<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 缩放按钮标签文字
   */</span>
  zoom<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 上一张图片按钮标签文字
   */</span>
  prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 下一张图片按钮标签文字
   */</span>
  next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 功能按钮配置
   */</span>
  buttons<span class="token operator">:</span> PhotoSwipeDefaultUI<span class="token punctuation">.</span>ShareButtonData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PhotoSwipeLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> PhotoSwipeLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>Photo Swipe 插件的国际化配置。</p><details class="hint-container details"><summary>内置支持语言</summary><ul><li><strong>简体中文</strong> (zh-CN)</li><li><strong>繁体中文</strong> (zh-TW)</li><li><strong>英文(美国)</strong> (en-US)</li><li><strong>德语</strong> (de-AT)</li><li><strong>俄语</strong> (ru-RU)</li><li><strong>乌克兰语</strong> (uk-UA)</li><li><strong>越南语</strong> (vi-VN)</li><li><strong>葡萄牙语(巴西)</strong> (pt-BR)</li><li><strong>波兰语</strong> (pl-PL)</li><li><strong>法语</strong> (fr-FR)</li><li><strong>西班牙语</strong> (es-ES)</li><li><strong>斯洛伐克</strong> (sk-SK)</li><li><strong>日语</strong> (ja-JP)</li><li><strong>土耳其语</strong> (tr-TR)</li><li><strong>韩语</strong> (ko-KR)</li></ul></details>`,8);function h(g,_){const a=c("ExternalLinkIcon");return i(),l("div",null,[p,d,u,m,n("p",null,[s("传递给 "),n("a",v,[b,t(a)]),s(" 的额外选项")]),k])}const x=e(r,[["render",h],["__file","config.html.vue"]]);export{x as default};
