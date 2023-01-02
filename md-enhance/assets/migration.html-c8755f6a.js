import{_ as l,W as d,X as c,$ as n,a0 as e,Y as i,a2 as s,g as o}from"./framework-346270e9.js";const t={},p=n("h2",{id:"传统模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#传统模式","aria-hidden":"true"},"#"),e(" 传统模式")],-1),u=n("p",null,[e("你可以在调用 "),n("code",null,"mdEnhancePlugin"),e(" 时传递第二个参数 "),n("code",null,"true"),e(" 以启用传统模式，插件将尝试以 V1 行为运行。")],-1),r=n("h2",{id:"新功能",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#新功能","aria-hidden":"true"},"#"),e(" 新功能")],-1),v=s(`<li><p>Markdown 链接检查</p><p>该插件现在检查你的 Markdown 链接，并在检测到损坏的链接时警告你。</p><p>你可以通过 <code>linkCheck</code> 选项控制此行为</p></li><li><p>图像标记支持</p><p>通过 <code>imgMark</code> 选项使用 <code>#light</code> 和 <code>#dark</code> 后缀标记图像以在日间模式或夜间模式下显示它们。</p></li><li><p><code>v-pre</code> 支持</p><p>VuePress 2 从 <code>@vuepress/core</code> 中删除了以下容器支持，因此添加了 <code>vPre</code> 选项</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: v-pre

一些 {{vue 语法}}。

:::
</code></pre></div></li>`,3),m=n("p",null,"Chart.js 支持",-1),b=n("code",null,"chart",-1),k={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},h=s(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // chart.js 配置
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: chart 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// chart.js 配置</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g=n("p",null,"ECharts 支持",-1),_=n("code",null,"echarts",-1),x={href:"https://echarts.apache.org/en/index.html",target:"_blank",rel:"noopener noreferrer"},f=s(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // echarts 配置
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: echarts 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// echarts 配置</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),w=s("<li><p>包含文件支持</p><p>新增 <code>include</code> 选项使用 <code>@include()</code> 将其他文件内容导入到 Markdown 中。</p><p>使用 <code>@include(filename)</code> 导入文件。</p><p>如果要部分导入文件，你可以指定导入的行数</p><ul><li><code>@include(filename{start-end})</code></li><li><code>@include(filename{start-})</code></li><li><code>@include(filename{-end})</code></li></ul><p>同时你也可以导入文件区域:</p><ul><li><code>@include(filename#region)</code></li></ul></li><li><p>选项卡支持</p><p>新增 <code>tabs</code> 选项通过 <code>tabs</code> 容器创建选项卡。</p></li>",2),j=s(`<h2 id="变更" tabindex="-1"><a class="header-anchor" href="#变更" aria-hidden="true">#</a> 变更</h2><ul><li><p>重命名 <code>codegroup</code> 为 <code>codetabs</code></p></li><li><p>现在所有选项均默认不开启</p></li><li><p>代码演示语法变更</p><p>旧语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [vue] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [react] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: normal-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: vue-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: react-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>代码组语法变更</p><p>旧语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group

::: code-group-item pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: code-group-item npm:active

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> init vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: code-tabs

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab:active npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> init vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="移除的选项" tabindex="-1"><a class="header-anchor" href="#移除的选项" aria-hidden="true">#</a> 移除的选项</h2><ul><li><p><code>enableAll</code> 被移除</p><p>有太多不知道自己在做什么的菜鸟用户，他们只是启用此选项而没有使用提供的所有功能，但他们抱怨加载速度。</p></li><li><p><code>lineNumbers</code> 被移除</p><p>VuePress 2 现在支持每个代码块的行号配置。</p></li><li><p><code>imageFix</code> 被移除</p><p>Mr.Hope 已经做了一个 PR 来修复 Markdown 中损坏的图片链接</p></li></ul>`,4);function T(V,E){const a=o("ExternalLinkIcon");return d(),c("div",null,[p,u,r,n("ul",null,[v,n("li",null,[m,n("p",null,[e("新增 "),b,e(" 选项提供 "),n("a",k,[e("chart.js"),i(a)]),e(" 支持")]),h]),n("li",null,[g,n("p",null,[e("新增 "),_,e(" 选项提供 "),n("a",x,[e("ECharts"),i(a)]),e(" 支持。")]),f]),w]),j])}const C=l(t,[["render",T],["__file","migration.html.vue"]]);export{C as default};
