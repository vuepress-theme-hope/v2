import{a3 as m,Z as v,_ as h,a4 as o,$ as s,a0 as l,a1 as e,a2 as n,a5 as i,q as t}from"./framework-f408d5b9.js";const k={},b=e("p",null,"Let the Markdown file in your VuePress site support presentation.",-1),g=e("h2",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),n(" Config")],-1),_=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" defineUserConfig "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"vuepress"'),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" hopeTheme "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"vuepress-theme-hope"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token function"},"defineUserConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n(`
  theme`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token function"},"hopeTheme"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n(`
    plugins`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"{"),n(`
      mdEnhance`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"{"),n(`
        presentation`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),n(`
      `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.js"),n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" hopeTheme "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"vuepress-theme-hope"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token literal-property property"},"theme"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token function"},"hopeTheme"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n(`
    `),e("span",{class:"token literal-property property"},"plugins"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"{"),n(`
      `),e("span",{class:"token literal-property property"},"mdEnhance"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"{"),n(`
        `),e("span",{class:"token literal-property property"},"presentation"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),n(`
      `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("code",null,"vuepress-plugin-md-enhance",-1),w={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},x=i('<p>You can also pass an object for configuration.</p><p><code>presentation.plugins</code> receives an array of strings, allowing you to freely config whether to enable some preset plugins.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Acceptable plugins are:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul></div><p>You can also use <code>presentation.revealConfig</code> set configuration options passed to Reveal.js globally.</p>',4),j={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},T=i(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><ul><li>Use <code>---</code> to split slides</li><li>Use <code>--</code> to split the slides second time (vertical display)</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart [theme]

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Theme available(replace <code>[theme]</code> with them):</p><ul><li><code>auto</code> (Default)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,5),C={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/guide/presentation/themes.html",target:"_blank",rel:"noopener noreferrer"},F=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),R=i(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart

<span class="token title important"><span class="token punctuation">##</span> Slide 1</span>

A paragraph with some text and a <span class="token url">[<span class="token content">link</span>](<span class="token url">https://mrhope.site</span>)</span>

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> Slide 2</span>

<span class="token list punctuation">-</span> Item 1
<span class="token list punctuation">-</span> Item 2

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> Slide 3.1</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

--

<span class="token title important"><span class="token punctuation">##</span> Slide 3.2</span>

$$
J(\\theta_0,\\theta_1) = \\sum_{i=0}
$$

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S={class:"hint-container info"},A=e("p",{class:"hint-container-title"},"Info",-1),M={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/guide/presentation/demo.html",target:"_blank",rel:"noopener noreferrer"},D=e("h2",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),n(" Options")],-1),I=e("p",null,[n("You can set "),e("code",null,"reveal"),n(" to pass options to reveal.js per page in frontmatter, you can also set "),e("code",null,"presentation"),n(" in plugin options to set reveal.js globally.")],-1),N={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"};function Y(J,K){const c=t("CodeTabs"),a=t("ExternalLinkIcon"),r=t("Presentation");return v(),h("div",null,[b,o(" more "),o("lint disable no-duplicate-headings"),g,s(c,{id:"8",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:l(({title:p,value:d,isActive:u})=>[_]),tab1:l(({title:p,value:d,isActive:u})=>[f]),_:1}),e("p",null,[y,n(" uses "),e("a",w,[n("reveal.js"),s(a)]),n(" to support this feature.")]),x,e("p",null,[n("Reveal.js also provides "),e("a",j,[n("more plugins"),s(a)]),n(". If you need a specific plugin, please submit a "),e("a",q,[n("Feature Request"),s(a)]),n(" on GitHub.")]),T,e("p",null,[n("For details, see "),e("a",C,[n("Themes demo"),s(a)]),n(".")]),F,s(r,{id:"presentation-150",code:"eJxVjc0KwjAQhO/7FAvtoQX7pzelB4969WilDXYx0aYNyYqC+O4mUJDeho9vZiCK8DSonrAC2KMRVtysMBJfiiW6SRMyvRnF2KPA86DGxyWRzMZti0JbORnKnWJKAbIsg//c2gM8MGk/PIeAFs4m96dd190dXKfR+RessdoFFNSF6ctxDMekYUks2nI1hyr1ncY9dftRdfkN0g8aMTop",theme:"auto"}),R,e("div",S,[A,e("p",null,[n("For detailed demo, please see "),e("a",M,[n("Presentation Demo"),s(a)])])]),D,I,e("p",null,[n("For more options, see "),e("a",N,[n("reveal.js config"),s(a)]),n(". For more usage, see "),e("a",V,[n("reveal.js documentation"),s(a)])])])}const B=m(k,[["render",Y],["__file","presentation.html.vue"]]);export{B as default};
