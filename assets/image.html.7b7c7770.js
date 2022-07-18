import{_ as a,a as s}from"./github-dark.12ab3808.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,o as r,c as u,a as d,w as e,b as n,f as m,g}from"./app.afdcb3d7.js";const h={},v=n("p",null,"Improve image syntax in Markdown to support color scheme and size.",-1),b=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),m(" Config")],-1),k=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // Enable image mark
        imageMark: true,
        // Enable image size
        imageSize: true,
      },
    },
  }),
});
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // Enable image mark
        imageMark: true,
        // Enable image size
        imageSize: true,
      },
    },
  }),
};
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=g(`<h2 id="image-mark" tabindex="-1"><a class="header-anchor" href="#image-mark" aria-hidden="true">#</a> Image Mark</h2><p>GFM supports marking pictures by ID suffix so that pictures are only displayed in a specific mode. We support both GitHub\u2019s markup and the easy markup <code>#light</code> and <code>#dark</code>.</p><p>You can enable it by setting <code>plugins.mdEnhance.imageMark: true</code> in theme options.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">GitHub Light</span>](<span class="token url">/assets/icon/github-light.png#gh-dark-mode-only</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">GitHub Dark</span>](<span class="token url">/assets/icon/github-dark.png#gh-light-mode-only</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">GitHub Light</span>](<span class="token url">/assets/icon/github-light.png#dark</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">GitHub Dark</span>](<span class="token url">/assets/icon/github-dark.png#light</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>Case</summary><p>The above demo will render the following result</p><p><img src="`+a+'" alt="GitHub Light" data-mode="darkmode-only" loading="lazy"><img src="'+s+'" alt="GitHub Dark" data-mode="lightmode-only" loading="lazy"></p><p><img src="'+a+'" alt="GitHub Light" data-mode="darkmode-only" loading="lazy"><img src="'+s+`" alt="GitHub Dark" data-mode="lightmode-only" loading="lazy"></p></details><h3 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced" aria-hidden="true">#</a> Advanced</h3><p>You can pass an object to <code>imageMark</code> to config ID marks, available options are:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ImageMarkOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** lightmode only IDs */</span>
  light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** darkmode only IDs */</span>
  dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="image-size" tabindex="-1"><a class="header-anchor" href="#image-size" aria-hidden="true">#</a> Image Size</h2><p>You can use <code>=widthxheight</code> to specify the image size when setting <code>plugins.mdEnhanceimageSize: true</code> in theme options.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>![Alt](/example.png =200x300)

![Alt](/example.jpg &quot;Image title&quot; =200x)
![Alt](/example.bmp =x300)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above markdown will be parsed as:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/example.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/example.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Image title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/example.bmp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function _(q,y){const t=c("CodeTabs");return r(),u("div",null,[v,b,d(t,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:i,value:l,isActive:o})=>[k]),tab1:e(({title:i,value:l,isActive:o})=>[x]),_:1}),f])}var I=p(h,[["render",_],["__file","image.html.vue"]]);export{I as default};
