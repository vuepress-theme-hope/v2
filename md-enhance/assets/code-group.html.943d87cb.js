import{a as o,o as l,b as r,e as s,f as a,F as u,j as c,g as n,i as e}from"./app.7214c7b7.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const d={},b=c(`<p>The plugin provides you code group support.</p><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;md-enhance&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// adds code group support</span>
        <span class="token literal-property property">codegroup</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>You need to use <code>code-group</code> container outside, and place only <code>code-group-item</code> container inside it.</p><p>You need to set title for each <code>code-group-item</code> container, and place one code block in each <code>code-group-item</code> container.</p><p>If you want some item be actived by default, you can append a <code>:active</code> suffix at the end of title.</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>`,8),m=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"add"),e(` -D vuepress-theme-hope
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),h=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(` i -D vuepress-theme-hope
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),g=c(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:::: code-group

::: code-group-item yarn

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-theme-hope</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: code-group-item npm:active

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> i -D vuepress-theme-hope</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,1);function k(v,f){const p=o("CodeGroupItem"),t=o("CodeGroup");return l(),r(u,null,[b,s(t,null,{default:a(()=>[s(p,{title:"yarn"},{default:a(()=>[m]),_:1}),s(p,{title:"npm",active:""},{default:a(()=>[h]),_:1})]),_:1}),g],64)}var y=i(d,[["render",k]]);export{y as default};
