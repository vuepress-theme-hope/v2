import{a3 as o,Z as p,_ as r,a4 as d,$ as u,a0 as n,a5 as a,q as h,a1 as e,a2 as s}from"./framework-f408d5b9.js";const v={},k=a('<h2 id="vite-冷启动速度慢" tabindex="-1"><a class="header-anchor" href="#vite-冷启动速度慢" aria-hidden="true">#</a> Vite 冷启动速度慢</h2><p>这是预期的行为，而且请注意开发服务器冷启动慢<strong>不代表</strong>构建结果部署到线上性能不佳。</p><p><code>vuepress-theme-hope</code> 添加了更多功能，这意味着根据你使用的功能，与 <code>@vuepress/theme-default</code> 相比，我们代码行数约为 2 倍到 8 倍。因此，将主题和插件代码转译并发送到浏览器预计将从 <code>@vuepress/theme-default</code> 中的 <code>0.8s - 2s</code> 增加到 <code>3s - 10s</code> (范围取决于机器性能)。</p><div class="hint-container info"><p class="hint-container-title">Tree-shaking 负担</p><p>为了让功能与样式完全支持 Tree-shaking，主题和插件会进行额外工作，包括模块化、局部注入、生成临时文件等。这些额外行为确保没有被启用的功能代码会在构建时被移除，但这也意味着在开发模式下需要执行更多逻辑、加载更加零碎的文件。</p><p>兄弟，你不能指望在拥有全面支持 Tree-shaking 的强大功能时，还能在开发服务器启动时保持极快的速度，它俩是矛盾的。</p></div><div class="hint-container info"><p class="hint-container-title">样式系统</p><p>为了让组件样式和组件绑定，我们将样式按照组件层级拆分并于在组件导入，这很大程度上减慢了速度。</p><ul><li><p><code>@vuepress/theme-default</code> 将所有样式放在 <code>styles</code> 文件夹中并完整导入，因此 <code>sass</code> 只需要编译一次，vite 只需要发送 1 个额外的 web 请求。这就是为什么它很快。</p><p>但这会让样式与组件解除绑定，无论如何它们都会被注入。因此，当你覆盖组件或布局时，你必须覆盖旧样式来构建你想要的样式。</p></li><li><p><code>vuepress-theme-hope</code> 为组件绑定样式，但这意味着 <code>sass</code> 必须为每个组件编译样式，并且 vite 需要为每个组件发送一个额外的样式请求。由于 <code>vuepress-theme-hope</code> 与 <code>@vuepress/theme-default</code> 相比有 2 到 6 倍的组件 (取决于你是否启用博客功能) ，因此需要 <code>2.4s - 4s</code> 的额外的时间请求这些样式。</p><p>但是，你可以通过这种方式轻松地覆盖组件及其样式。</p></li></ul></div><p>所以，由于以上原因，<code>vuepress-theme-hope</code> 与<code>@vuepress/theme-default</code> 相比，平均会有 4 倍的代码和 10 倍的请求，所以时间从 <code>2s</code> 增加到 <code>10s</code> 是合理和预期的。</p><div class="hint-container tip"><p class="hint-container-title">不影响 HMR 和线上速度</p><p>不用担心，上述的额外开销主要存在于 Vite 冷启动时，另外由于开发环境下未优化的代码体积较大刷新后重新相应的时间也会有一定增加。</p><ul><li><p>这些额外开销不影响 HMR，所以编辑 Markdown 文件后，页面的 HMR 相应仍然能够保持在 100 ms 级别。</p></li><li><p>在构建阶段精心设计的结构会使得未使用的代码被移除，所以正式环境通常仅会比默认主题增加 200 KB - 500 KB 的 JS 入口体积和约 100 ms 的额外脚本执行时间，所以构建后影响很小。</p></li></ul></div><h2 id="import-语法无效" tabindex="-1"><a class="header-anchor" href="#import-语法无效" aria-hidden="true">#</a> <code>@import</code> 语法无效</h2><p>在 VuePress2 中，你在 <code>index.scss</code> 中通过 <code>@import</code> 导入网络 CSS 是无效的。你可能需要在 VuePress 配置的 <code>head</code> 选项中手动导入它们。</p>',9),m=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token keyword"},"import"),s(),e("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),e("span",{class:"token punctuation"},"}"),s(),e("span",{class:"token keyword"},"from"),s(),e("span",{class:"token string"},'"vuepress"'),e("span",{class:"token punctuation"},";"),s(`

`),e("span",{class:"token keyword"},"export"),s(),e("span",{class:"token keyword"},"default"),s(),e("span",{class:"token function"},"defineUserConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),s(`
  head`),e("span",{class:"token operator"},":"),s(),e("span",{class:"token punctuation"},"["),s(`
    `),e("span",{class:"token punctuation"},"["),s(`
      `),e("span",{class:"token string"},'"link"'),e("span",{class:"token punctuation"},","),s(`
      `),e("span",{class:"token punctuation"},"{"),s(`
        rel`),e("span",{class:"token operator"},":"),s(),e("span",{class:"token string"},'"stylesheet"'),e("span",{class:"token punctuation"},","),s(`
        href`),e("span",{class:"token operator"},":"),s(),e("span",{class:"token string"},'"YOUR_CSS_URL"'),e("span",{class:"token punctuation"},","),s(`
      `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),s(`
    `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),s(`
  `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),s(`

  `),e("span",{class:"token comment"},"// ..."),s(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),s(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token keyword"},"export"),s(),e("span",{class:"token keyword"},"default"),s(),e("span",{class:"token punctuation"},"{"),s(`
  `),e("span",{class:"token literal-property property"},"head"),e("span",{class:"token operator"},":"),s(),e("span",{class:"token punctuation"},"["),s(`
    `),e("span",{class:"token punctuation"},"["),s(`
      `),e("span",{class:"token string"},'"link"'),e("span",{class:"token punctuation"},","),s(`
      `),e("span",{class:"token punctuation"},"{"),s(`
        `),e("span",{class:"token literal-property property"},"rel"),e("span",{class:"token operator"},":"),s(),e("span",{class:"token string"},'"stylesheet"'),e("span",{class:"token punctuation"},","),s(`
        `),e("span",{class:"token literal-property property"},"href"),e("span",{class:"token operator"},":"),s(),e("span",{class:"token string"},'"YOUR_CSS_URL"'),e("span",{class:"token punctuation"},","),s(`
      `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),s(`
    `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),s(`
  `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),s(`

  `),e("span",{class:"token comment"},"// ..."),s(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),s(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),b=a('<div class="hint-container info"><p class="hint-container-title">原因</p><ol><li>Sass 中通过 <code>@import</code> 导入 CSS 会被编译为标准的 CSS <code>@import</code> 语法；</li><li>CSS <code>@import</code> 语法仅在 CSS 文件开始生效；</li><li>为了让用户样式具有更高优先级，我们会在主题和插件样式后导入用户样式；</li><li>在 Vite 构建 VuePress2 App 的中，它会将所有样式压缩为单个 CSS 文件。</li></ol><p>上述内容导致用户在 Sass 中的 CSS <code>@import</code> 导入出现在最终 CSS 文件的中间位置，进而无效。</p><p>默认主题也具有同样的问题，并且这无法在主题侧修复。</p></div><div class="hint-container note"><p class="hint-container-title">注</p><p>Webpack 没有这个问题。</p></div>',2);function f(_,S){const t=h("CodeTabs");return p(),r("div",null,[k,d(` \`\`\`ts {5-13}
import { defineUserConfig } from "vuepress-theme-hope";

export default defineUserConfig({
  head: [
    [
      "link",
      {
        rel: "preload",
        as: "style",
        onload: 'this.onload=null;this.rel="stylesheet"',
        href: "//at.alicdn.com/t/c/font_2410206_s76eeqysx0t.css",
      },
    ],
  ],

  // ...
});
\`\`\` `),u(t,{id:"67",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:i,value:l,isActive:c})=>[m]),tab1:n(({title:i,value:l,isActive:c})=>[g]),_:1}),b])}const C=o(v,[["render",f],["__file","vite.html.vue"]]);export{C as default};
