import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,o as b,c as o,a as r,w as n,b as e,d as a,e as m}from"./app.6c8e4fde.js";const v={},p=e("p",null,"\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301\u5BFC\u5165\u5176\u4ED6\u6587\u4EF6\u3002",-1),h=e("h2",{id:"\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E","aria-hidden":"true"},"#"),a(" \u914D\u7F6E")],-1),g=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // \u542F\u7528\u5BFC\u5165\u652F\u6301
      include: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");

module.exports = {
  plugins: [
    mdEnhancePlugin({
      // \u542F\u7528\u5BFC\u5165\u652F\u6301
      include: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=m(`<h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p>\u4F7F\u7528 <code>@include(filename)</code> \u5BFC\u5165\u6587\u4EF6\u3002</p><p>\u5982\u679C\u8981\u90E8\u5206\u5BFC\u5165\u6587\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u6307\u5B9A\u5BFC\u5165\u7684\u884C\u6570</p><ul><li><code>@include(filename{start-end})</code></li><li><code>@include(filename{start-})</code></li><li><code>@include(filename{-end})</code></li></ul><h2 id="\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u6F14\u793A" aria-hidden="true">#</a> \u6F14\u793A</h2><p><code>@include(./demo.snippet.md)</code>:</p><h2 id="\u4E8C\u7EA7\u6807\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u7EA7\u6807\u9898" aria-hidden="true">#</a> \u4E8C\u7EA7\u6807\u9898</h2><p>\u5185\u5BB9\u5305\u542B<strong>\u52A0\u7C97\u6587\u5B57</strong>\u548C\u4E00\u4E9B\u5176\u4ED6\u589E\u5F3A\u5185\u5BB9:</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4F60\u6700\u8FD1\u600E\u4E48\u6837\u4E86? \u{1F604}</p></div><p><code>@include(./demo.snippet.md{5-9})</code>:</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4F60\u6700\u8FD1\u600E\u4E48\u6837\u4E86? \u{1F604}</p></div><h2 id="\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a> \u9AD8\u7EA7\u7528\u6CD5</h2><p>\u4F60\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u5BF9\u8C61\u6765\u81EA\u5B9A\u4E49\u5305\u542B\u6587\u4EF6\u8DEF\u5F84\u548C\u5305\u542B\u884C\u4E3A\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IncludeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u5904\u7406 include \u6587\u4EF6\u8DEF\u5F84
   *
   * <span class="token keyword">@default</span> (path) =&gt; path
   */</span>
  getPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u662F\u5426\u6DF1\u5EA6\u5BFC\u5165\u5305\u542B\u7684 markdown \u6587\u4EF6
   *
   * <span class="token keyword">@default</span> false
   */</span>
  deep<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5982: \u4F60\u53EF\u4EE5\u4F7F\u7528 <code>@src</code> \u4F5C\u4E3A\u6E90\u6587\u4EF6\u5939\u7684\u522B\u540D\u3002</p>`,15),x=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { path } from "@vuepress/utils";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // \u6DFB\u52A0 \`@src\` \u522B\u540D\u652F\u6301
      include: {
        getPath: (file) => {
          if (file.startsWith("@src"))
            return file.replace("@src", path.resolve(__dirname, ".."));

          return file;
        },
      },
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { path } = require("@vuepress/utils");
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");

module.exports = {
  plugins: [
    mdEnhancePlugin({
      // \u6DFB\u52A0 \`@src\` \u522B\u540D\u652F\u6301
      include: {
        getPath: (file) => {
          if (file.startsWith("@src"))
            return file.replace("@src", path.resolve(__dirname, ".."));

          return file;
        },
      },
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),P=a("\u6B64\u5916\uFF0C\u5982\u679C\u4F60\u60F3\u5C06 Markdown \u6587\u4EF6\u76F4\u63A5\u653E\u5728\u5B9E\u9645\u6587\u4EF6\u65C1\u8FB9\uFF0C\u4F46\u4E0D\u5E0C\u671B\u5B83\u4EEC\u5448\u73B0\u4E3A\u9875\u9762\uFF0C\u4F60\u53EF\u4EE5\u5728 VuePress \u914D\u7F6E\u4E2D\u8BBE\u7F6E "),E=e("code",null,"pagePatterns",-1),w=a(" \u9009\u9879\u3002\u6709\u5173\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 "),S={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#pagepatterns",target:"_blank",rel:"noopener noreferrer"},A=a("pagePatterns"),T=a("\u3002"),V=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { path } from "@vuepress/utils";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  pagePatterns: ["**/*.md", "!*.snippet.md", "!.vuepress", "!node_modules"],

  plugins: [
    mdEnhancePlugin({
      include: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),q=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { path } = require("@vuepress/utils");
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");

module.exports = {
  pagePatterns: ["**/*.md", "!*.snippet.md", "!.vuepress", "!node_modules"],

  plugins: [
    mdEnhancePlugin({
      include: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function y(j,C){const t=c("CodeTabs"),d=c("ExternalLinkIcon");return b(),o("div",null,[p,h,r(t,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:s,value:i,isActive:l})=>[g]),tab1:n(({title:s,value:i,isActive:l})=>[_]),_:1}),f,r(t,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:s,value:i,isActive:l})=>[x]),tab1:n(({title:s,value:i,isActive:l})=>[k]),_:1}),e("p",null,[P,E,w,e("a",S,[A,r(d)]),T]),r(t,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:s,value:i,isActive:l})=>[V]),tab1:n(({title:s,value:i,isActive:l})=>[q]),_:1})])}var I=u(v,[["render",y],["__file","include.html.vue"]]);export{I as default};
