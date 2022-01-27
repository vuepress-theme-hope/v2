import{r as l,o,a as r,b as a,w as e,F as i,d as c,e as n,f as s}from"./app.6412b3aa.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const m={},b=c(`<p>\u8FD9\u4E2A\u63D2\u4EF6\u5C06\u4F1A\u5411 page \u5BF9\u8C61\u6CE8\u5165\u9884\u8BA1\u9605\u8BFB\u65F6\u95F4\u4E0E\u5B57\u6570\u7EDF\u8BA1\u3002</p><p>\u4F1A\u81EA\u52A8\u5411 page \u5BF9\u8C61\u6CE8\u5165 <code>readingTime</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ReadingTime</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** \u5206\u949F\u6570 */</span>
  minutes<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u5B57\u6570 */</span>
  words<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4F7F\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u63D2\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u63D2\u4EF6</h2><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3>`,5),d=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` -D vuepress-plugin-reading-time2
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),k=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(` i -D vuepress-plugin-reading-time2
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),h=n("h3",{id:"\u4F7F\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528","aria-hidden":"true"},"#"),s(" \u4F7F\u7528")],-1),g=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"@mr-hope/reading-time"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u914D\u7F6E\u9009\u9879"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br")])],-1),_=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"@mr-hope/reading-time"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u4F60\u7684\u9009\u9879"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br")])],-1),f=c(`<h2 id="\u63D2\u4EF6\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u9009\u9879" aria-hidden="true">#</a> \u63D2\u4EF6\u9009\u9879</h2><h3 id="wordperminute" tabindex="-1"><a class="header-anchor" href="#wordperminute" aria-hidden="true">#</a> wordPerminute</h3><ul><li>\u7C7B\u578B: <code>number</code></li><li>\u9ED8\u8BA4\u503C: <code>300</code></li></ul><p>\u6BCF\u5206\u949F\u9605\u8BFB\u5B57\u6570</p><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ReadingTimeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u5B57\u6570\u6A21\u677F\uFF0C\u6A21\u677F\u4E2D \`$word\` \u4F1A\u88AB\u81EA\u52A8\u66FF\u6362\u4E3A\u5B57\u6570
   */</span>
  word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u5C0F\u4E8E\u4E00\u5206\u949F\u6587\u5B57
   */</span>
  less1Minute<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u65F6\u95F4\u6A21\u677F
   */</span>
  time<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u56FD\u9645\u5316\u914D\u7F6E\u3002</p>`,7);function v(x,y){const t=l("CodeGroupItem"),p=l("CodeGroup");return o(),r(i,null,[b,a(p,null,{default:e(()=>[a(t,{title:"yarn"},{default:e(()=>[d]),_:1}),a(t,{title:"npm"},{default:e(()=>[k]),_:1})]),_:1}),h,a(p,null,{default:e(()=>[a(t,{title:"ts"},{default:e(()=>[g]),_:1}),a(t,{title:"js"},{default:e(()=>[_]),_:1})]),_:1}),f],64)}var C=u(m,[["render",v]]);export{C as default};
