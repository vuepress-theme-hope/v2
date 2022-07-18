import{_ as l}from"./favicon.0909c2fa.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as d,c as r,a as p,w as s,b as n,d as u,e as m}from"./app.c92924a3.js";const v={},b=n("p",null,"You can use custom syntax to add attrs for markdown content.",-1),k=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),u(" Config")],-1),h=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // Enable attrs support
      attrs: true,
    }),
  ],
};
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.js
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");

module.exports = {
  plugins: [
    mdEnhancePlugin({
      // Enable attrs support
      attrs: true,
    }),
  ],
};
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=m(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>You can use <code>{attrs}</code> to add attrs to markdown content.</p><p>For example, if you want a heading2 &quot;Hello World&quot; with a id &quot;say-hello-world&quot;, you can write:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Hello World {#say-hello-world}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you want a image with class &quot;full-width&quot;, you can write:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">img</span>](<span class="token url">link/to/image.png</span>)</span> {.full-width}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Also, other attrs are supported, so:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>A paragraph with some text. {#p .a .b align=center customize-attr=&quot;content with spaces&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>will be rendered into:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a b<span class="token punctuation">&quot;</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">customize-attr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content with spaces<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  A paragraph with some text.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced" aria-hidden="true">#</a> Advanced</h2><p>You can pass options to <code>attrs</code> to cutomize plugin behavior.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AttrsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * left delimiter
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">{</span>&#39;
   */</span>
  left<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * right delimiter
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">}</span>&#39;
   */</span>
  right<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * allowed attributes
   *
   * <span class="token keyword">@description</span> An empty list means allowing all attribute
   *
   * <span class="token keyword">@default</span> []
   */</span>
  allowed<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><p>Text with <code class="inline-code">inline code</code> and <img src="`+l+`" alt="favicon" class="image" loading="lazy">, also supporting <em class="emphasis">emphasis</em> and <strong class="bold">bold</strong>.</p><table class="table"><thead><tr><th>Table</th></tr></thead><tbody><tr><td>content</td></tr></tbody></table><ul class="list"><li class="list-item"><p>list item</p><ul class="nested"><li>nested list item</li></ul></li></ul><p class="break">A line with break<br></p><hr class="horizontal"><p class="block">block content</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Text with <span class="token code-snippet code keyword">\`inline code\`</span>{.inline-code} and <span class="token url"><span class="token operator">!</span>[<span class="token content">favicon</span>](<span class="token url">/favicon.ico</span>)</span>{.image}, also supporting <span class="token italic"><span class="token punctuation">_</span><span class="token content">emphasis</span><span class="token punctuation">_</span></span>{.emphasis} and <span class="token bold"><span class="token punctuation">**</span><span class="token content">bold</span><span class="token punctuation">**</span></span>{.bold}.

| Table   |
| ------- |
| content |

{.table}

<span class="token list punctuation">-</span> list item{.list-item}

  <span class="token list punctuation">-</span> nested list item
    {.nested}

{.list}

A line with break  
{.break}

--- {.horizontal}

block content {.block}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function f(x,_){const a=o("CodeTabs");return d(),r("div",null,[b,k,p(a,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:s(({title:e,value:t,isActive:i})=>[h]),tab1:s(({title:e,value:t,isActive:i})=>[g]),_:1}),w])}var E=c(v,[["render",f],["__file","attrs.html.vue"]]);export{E as default};
