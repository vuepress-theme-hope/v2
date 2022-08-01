import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{o as b,c as o,a as r,w as n,b as e,f as a,g as m,r as d}from"./app.bdb7652d.js";const v={},p=e("p",null,"\u041F\u0443\u0441\u0442\u044C \u0444\u0430\u0439\u043B Markdown \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435 VuePress \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u0430\u0439\u043B\u044B.",-1),h=e("h2",{id:"\u043A\u043E\u043D\u0444\u0438\u0433",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u043A\u043E\u043D\u0444\u0438\u0433","aria-hidden":"true"},"#"),a(" \u041A\u043E\u043D\u0444\u0438\u0433")],-1),g=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        include: true,
      },
    },
  }),
});
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        include: true,
      },
    },
  }),
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=m(`<h2 id="\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441" tabindex="-1"><a class="header-anchor" href="#\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441" aria-hidden="true">#</a> \u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441</h2><p>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 <code>@include(filename)</code>, \u0447\u0442\u043E\u0431\u044B \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0444\u0430\u0439\u043B.</p><p>\u0427\u0442\u043E\u0431\u044B \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0444\u0430\u0439\u043B, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u044B\u0445 \u0441\u0442\u0440\u043E\u043A:</p><ul><li><code>@include(filename{start-end})</code></li><li><code>@include(filename{start-})</code></li><li><code>@include(filename{-end})</code></li></ul><h2 id="\u0434\u0435\u043C\u043E" tabindex="-1"><a class="header-anchor" href="#\u0434\u0435\u043C\u043E" aria-hidden="true">#</a> \u0414\u0435\u043C\u043E</h2><p><code>@include(./demo.snippet.md)</code>:</p><h2 id="\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A-2" tabindex="-1"><a class="header-anchor" href="#\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A-2" aria-hidden="true">#</a> \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 2</h2><p>\u041A\u043E\u043D\u0442\u0435\u043D\u0442, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 <strong>\u0436\u0438\u0440\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442</strong> \u0438 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 Markdown Enhance:</p><div class="custom-container tip"><p class="custom-container-title">\u0421\u043E\u0432\u0435\u0442</p><p>\u042D\u0439, \u043A\u0430\u043A <strong>\u0442\u044B</strong>? \u{1F604}</p></div><p><code>@include(./demo.snippet.md{5-9})</code>:</p><div class="custom-container tip"><p class="custom-container-title">\u0421\u043E\u0432\u0435\u0442</p><p>\u042D\u0439, \u043A\u0430\u043A <strong>\u0442\u044B</strong>? \u{1F604}</p></div><h2 id="\u043F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0438" tabindex="-1"><a class="header-anchor" href="#\u043F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0438" aria-hidden="true">#</a> \u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439</h2><p>\u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442 \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0443\u0442\u0438 \u043A \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u043E\u043C\u0443 \u0444\u0430\u0439\u043B\u0443 \u0438 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IncludeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * handle include filePath
   *
   * <span class="token keyword">@default</span> (path) =&gt; path
   */</span>
  getPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether deep include files in included markdown files
   *
   * <span class="token keyword">@default</span> false
   */</span>
  deep<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C <code>@src</code> \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C\u0430 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430.</p>`,15),x=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { path } from "@vuepress/utils";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // Add \`@src\` alias support
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
      // Add \`@src\` alias support
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
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),P=a("\u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432\u0430\u0448\u0438 \u0444\u0430\u0439\u043B\u044B Markdown \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0440\u044F\u0434\u043E\u043C \u0441 \u0432\u0430\u0448\u0438\u043C\u0438 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0444\u0430\u0439\u043B\u0430\u043C\u0438, \u043D\u043E \u043D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u043D\u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u043B\u0438\u0441\u044C \u043A\u0430\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B "),E=e("code",null,"pagePatterns",-1),T=a(" \u0432 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 VuePress. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0432 "),w={href:"https://v2.vuepress.vuejs.org/reference/config.html#pagepatterns",target:"_blank",rel:"noopener noreferrer"},A=a("pagePatterns"),S=a("."),C=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
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
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),V=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
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
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function q(y,j){const t=d("CodeTabs"),c=d("ExternalLinkIcon");return b(),o("div",null,[p,h,r(t,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:s,value:i,isActive:l})=>[g]),tab1:n(({title:s,value:i,isActive:l})=>[f]),_:1}),_,r(t,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:s,value:i,isActive:l})=>[x]),tab1:n(({title:s,value:i,isActive:l})=>[k]),_:1}),e("p",null,[P,E,T,e("a",w,[A,r(c)]),S]),r(t,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:s,value:i,isActive:l})=>[C]),tab1:n(({title:s,value:i,isActive:l})=>[V]),_:1})])}var I=u(v,[["render",q],["__file","include.html.vue"]]);export{I as default};
