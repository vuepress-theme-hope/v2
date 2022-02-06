import{r as l,o as c,a as i,b as a,w as e,F as r,d as o,e as n,f as s}from"./app.85e74c07.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},m=o(`<p>This plugin will inject expect reading time and word count statistics into the page object.</p><p>Will automatically inject <code>readingTime</code> into the page object:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ReadingTime</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Expect reading minute */</span>
  minutes<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Words count */</span>
  words<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h2><h3 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h3>`,5),b=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` -D vuepress-plugin-reading-time2
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),k=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(` i -D vuepress-plugin-reading-time2
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),g=n("h3",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),s(" Usage")],-1),h=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" readingTime "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-reading-time2"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"readingTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// your options"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br")])],-1),f=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" readingTime "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"vuepress-plugin-reading-time2"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"readingTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// your options"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br")])],-1),_=o(`<h2 id="plugin-options" tabindex="-1"><a class="header-anchor" href="#plugin-options" aria-hidden="true">#</a> Plugin options</h2><h3 id="wordperminute" tabindex="-1"><a class="header-anchor" href="#wordperminute" aria-hidden="true">#</a> wordPerminute</h3><ul><li>Type: <code>number</code></li><li>Default: <code>300</code></li></ul><p>Reading speed (words per minute)</p><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ReadingTimeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Word template, \`$word\` will be automatically replaced by actual words
   */</span>
  word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Text for less than one minute
   */</span>
  less1Minute<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Time template
   */</span>
  time<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>Locales config.</p>`,7);function v(x,w){const t=l("CodeGroupItem"),p=l("CodeGroup");return c(),i(r,null,[m,a(p,null,{default:e(()=>[a(t,{title:"yarn"},{default:e(()=>[b]),_:1}),a(t,{title:"npm"},{default:e(()=>[k]),_:1})]),_:1}),g,a(p,null,{default:e(()=>[a(t,{title:"ts"},{default:e(()=>[h]),_:1}),a(t,{title:"js"},{default:e(()=>[f]),_:1})]),_:1}),_],64)}var j=u(d,[["render",v]]);export{j as default};
