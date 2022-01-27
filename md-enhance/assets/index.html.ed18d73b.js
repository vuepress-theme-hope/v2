import{a as t,o as l,b as r,g as e,e as a,f as o,F as i,j as p,i as n}from"./app.66e9c109.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=p(`<p>Let the Markdown file in your VuePress site support presentation.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;md-enhance&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// Enable presentation</span>
        <span class="token literal-property property">presentation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>This plugin is using <a href="https://revealjs.com/" target="_blank" rel="noopener noreferrer">reveal.js</a> to support this feature.</p><p>You can also pass an object for configuration.</p><p><code>presentation.plugins</code> receives an array of strings, allowing you to freely config whether to enable some preset plugins.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Acceptable plugins are:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul></div><p>You can also use <code>presentation.revealConfig</code> set configuration options passed to Reveal.js globally.</p><p>Reveal.js also provides <a href="https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware" target="_blank" rel="noopener noreferrer">more plugins</a>. If you need a specific plugin, please submit a <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&amp;labels=enhancement&amp;template=feature_request.md&amp;title=%5BFeature+Request%5D" target="_blank" rel="noopener noreferrer">Feature Request</a> on GitHub.</p><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><ul><li>Use <code>---</code> to split slides</li><li>Use <code>--</code> to split the slides second time (vertical display)</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>@slidestart [theme]

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Theme available(replace <code>[theme]</code> with them):</p><ul><li><code>auto</code> (Default)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,14),m=n("For details, see "),b=n("Themes demo"),h=n("."),g=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),f=n("Please see "),k=n("Presentation Demo"),_=e("h2",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),n(" Options")],-1),v=e("p",null,[n("You can set "),e("code",null,"reveal"),n(" to pass options to reveal.js per page in frontmatter, you can also set "),e("code",null,"presentation"),n(" in plugin options to set reveal.js globally.")],-1),j=e("p",null,[n("For more options, see "),e("a",{href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},"reveal.js config"),n(". For more usage, see "),e("a",{href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},"reveal.js documatation")],-1);function x(y,q){const s=t("RouterLink");return l(),r(i,null,[d,e("p",null,[m,a(s,{to:"/guide/presentation/themes.html"},{default:o(()=>[b]),_:1}),h]),g,e("p",null,[f,a(s,{to:"/guide/presentation/demo.html"},{default:o(()=>[k]),_:1})]),_,v,j],64)}var R=c(u,[["render",x]]);export{R as default};