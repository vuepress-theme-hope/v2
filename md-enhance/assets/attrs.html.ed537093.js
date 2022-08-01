import{_ as t}from"./favicon.0909c2fa.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as o,a as r,w as s,b as n,d as p,e as u,r as v}from"./app.988efa2e.js";const m={},b=n("p",null,"\u4F60\u53EF\u4EE5\u4F7F\u7528\u7279\u6B8A\u6807\u8BB0\u4E3A Markdown \u5143\u7D20\u6DFB\u52A0\u5C5E\u6027\u3002",-1),k=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),p(" Config")],-1),g=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // \u542F\u7528\u5C5E\u6027\u652F\u6301
      attrs: true,
    }),
  ],
};
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.js
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");

module.exports = {
  plugins: [
    mdEnhancePlugin({
      // Enable attrs support
      attrs: true,
    }),
  ],
};
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=u(`<h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u8BED\u6CD5 <code>{attrs}</code> \u6765\u4E3A Markdown \u5143\u7D20\u6DFB\u52A0\u5C5E\u6027\u3002</p><p>\u6BD4\u5982\uFF0C\u5982\u679C\u4F60\u60F3\u8981\u4E00\u4E2A id \u4E3A say-hello-world\uFF0C\u6587\u5B57\u4E3A Hello World \u7684\u4E8C\u7EA7\u6807\u9898\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Hello World {#say-hello-world}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u60F3\u8981\u4E00\u4E2A\u6709 full-width Class \u7684\u56FE\u7247\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">img</span>](<span class="token url">link/to/image.png</span>)</span> {.full-width}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u540C\u65F6\uFF0C\u5176\u4ED6\u5C5E\u6027\u4E5F\u6536\u5230\u652F\u6301:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>\u4E00\u4E2A\u5305\u542B\u6587\u5B57\u7684\u6BB5\u843D\u3002 {#p .a .b align=center customize-attr=&quot;content with spaces&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F1A\u88AB\u6E32\u67D3\u4E3A:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a b<span class="token punctuation">&quot;</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">customize-attr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content with spaces<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  \u4E00\u4E2A\u5305\u542B\u6587\u5B57\u7684\u6BB5\u843D\u3002
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7" aria-hidden="true">#</a> \u9AD8\u7EA7</h2><p>\u4F60\u53EF\u4EE5\u5411 <code>attrs</code> \u4F20\u9012\u9009\u9879\u4EE5\u81EA\u5B9A\u4E49\u63D2\u4EF6\u884C\u4E3A\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AttrsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u5DE6\u5206\u9694\u7B26
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">{</span>&#39;
   */</span>
  left<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u53F3\u5206\u9694\u7B26
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">}</span>&#39;
   */</span>
  right<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u5141\u8BB8\u7684\u5C5E\u6027
   *
   * <span class="token keyword">@description</span> \u8BBE\u7F6E\u7A7A\u6570\u7EC4\u610F\u5473\u7740\u5141\u8BB8\u6240\u6709\u5C5E\u6027
   *
   * <span class="token keyword">@default</span> []
   */</span>
  allowed<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><p>\u5305\u542B <code class="inline-code">\u884C\u5185\u4EE3\u7801</code> \u548C <img src="`+t+`" alt="favicon" class="image" loading="lazy"> \u7684\u6587\u5B57\uFF0C\u4E5F\u652F\u6301 <em class="emphasis">\u5F3A\u8C03</em> \u548C <strong class="bold">\u52A0\u7C97</strong>\u3002</p><table class="table"><thead><tr><th>\u8868\u683C</th></tr></thead><tbody><tr><td>\u5185\u5BB9</td></tr></tbody></table><ul class="list"><li class="list-item"><p>\u5217\u8868\u5185\u5BB9</p><ul class="nested"><li>\u5D4C\u5957\u5217\u8868\u5185\u5BB9</li></ul></li></ul><p class="break">\u4E00\u884C\u6362\u884C\u7684\u6587\u5B57<br></p><hr class="horizontal"><p class="block">\u5757\u7EA7\u5143\u7D20</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>\u5305\u542B <span class="token code-snippet code keyword">\`\u884C\u5185\u4EE3\u7801\`</span>{.inline-code} \u548C <span class="token url"><span class="token operator">!</span>[<span class="token content">favicon</span>](<span class="token url">/favicon.ico</span>)</span>{.image} \u7684\u6587\u5B57\uFF0C\u4E5F\u652F\u6301 <span class="token italic"><span class="token punctuation">_</span><span class="token content">\u5F3A\u8C03</span><span class="token punctuation">_</span></span>{.emphasis} \u548C <span class="token bold"><span class="token punctuation">**</span><span class="token content">\u52A0\u7C97</span><span class="token punctuation">**</span></span>{.bold}\u3002

| \u8868\u683C |
| ---- |
| \u5185\u5BB9 |

{.table}

<span class="token list punctuation">-</span> list item{.list-item}

  <span class="token list punctuation">-</span> nested list item
    {.nested}

{.list}

\u4E00\u884C\u6362\u884C\u7684\u6587\u5B57  
{.break}

--- {.horizontal}

\u5757\u7EA7\u5143\u7D20 {.block}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function _(x,w){const a=v("CodeTabs");return d(),o("div",null,[b,k,r(a,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:s(({title:e,value:i,isActive:l})=>[g]),tab1:s(({title:e,value:i,isActive:l})=>[h]),_:1}),f])}var C=c(m,[["render",_],["__file","attrs.html.vue"]]);export{C as default};
