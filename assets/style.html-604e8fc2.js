import{a3 as a,Z as e,_ as t,a4 as p,a1 as n,a2 as s,a5 as o}from"./framework-f408d5b9.js";const c={},l=n("p",null,[s("你可以在 "),n("code",null,".vuepress/styles"),s(" 中通过在 "),n("code",null,"config.scss"),s(" 和 "),n("code",null,"palette.scss"),s(" 文件中写入变量值来更改主题的样式。")],-1),i=n("p",null,[s("你也可以在 "),n("code",null,".vuepress/styles/index.scss"),s(" 中添加你自己的样式。")],-1),u=o(`<h2 id="config-scss" tabindex="-1"><a class="header-anchor" href="#config-scss" aria-hidden="true">#</a> config.scss</h2><p><code>config.scss</code> 用于纯变量配置，以下是支持的变量与默认值。</p><p>响应式布局断点:</p><ul><li><code>$pc</code></li><li><code>$laptop</code></li><li><code>$pad</code></li><li><code>$tablet</code></li><li><code>$mobile</code></li></ul><p>代码块:</p><ul><li><code>$code-light-theme</code>: 日间模式代码块主题</li><li><code>$code-dark-theme</code>: 夜间模式代码块主题</li></ul><p>内容类名: <code>$content-class</code></p><p>颜色列表: <code>$colors</code></p><details class="hint-container details"><summary>例子</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 修改日间模式代码主题</span>
<span class="token property"><span class="token variable">$code-light-theme</span></span><span class="token punctuation">:</span> <span class="token string">&quot;coy&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 修改电脑响应式布局断点</span>
<span class="token property"><span class="token variable">$pc</span></span><span class="token punctuation">:</span> 1920px<span class="token punctuation">;</span>
</code></pre></div></details><details class="hint-container details"><summary>默认值</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* responsive breakpoints */</span>

<span class="token comment">// wide screen</span>
<span class="token property"><span class="token variable">$pc</span></span><span class="token punctuation">:</span> 1440px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// desktop</span>
<span class="token property"><span class="token variable">$laptop</span></span><span class="token punctuation">:</span> 1280px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// narrow desktop / iPad</span>
<span class="token property"><span class="token variable">$pad</span></span><span class="token punctuation">:</span> 959px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// wide mobile</span>
<span class="token property"><span class="token variable">$tablet</span></span><span class="token punctuation">:</span> 719px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// narrow mobile</span>
<span class="token property"><span class="token variable">$mobile</span></span><span class="token punctuation">:</span> 419px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">/* Content Class */</span>
<span class="token property"><span class="token variable">$content-class</span></span><span class="token punctuation">:</span> <span class="token string">&quot;.theme-hope-content&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">/* Color list */</span>
<span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> #cf1322<span class="token punctuation">,</span> #fa541c<span class="token punctuation">,</span> #f39c12<span class="token punctuation">,</span> #2ecc71<span class="token punctuation">,</span> #25a55b<span class="token punctuation">,</span> #10a5a5<span class="token punctuation">,</span> #096dd9<span class="token punctuation">,</span> #aa6fe9<span class="token punctuation">,</span>
  #eb2f96 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">/* Code Block */</span>
<span class="token comment">// theme</span>
<span class="token property"><span class="token variable">$code-light-theme</span></span><span class="token punctuation">:</span> <span class="token string">&quot;one-light&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$code-dark-theme</span></span><span class="token punctuation">:</span> <span class="token string">&quot;one-dark&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="palette-scss" tabindex="-1"><a class="header-anchor" href="#palette-scss" aria-hidden="true">#</a> palette.scss</h2><p><code>palette.scss</code> 用于 CSS 变量写入，以下是支持的配置与默认值。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>此处的所有变量 (包括你新添加的变量) 都会被转换为 kebab-case 的格式注入为 CSS 变量。</p><p>如 <code>$theme-color</code> 会被注入为 <code>--theme-color</code>，<code>$backgroundColor</code> 会被注入为 <code>--background-color</code>。</p></div><h3 id="颜色设置" tabindex="-1"><a class="header-anchor" href="#颜色设置" aria-hidden="true">#</a> 颜色设置</h3><p>对于所有颜色，如果其在浅色模式和深色模式颜色相同，可直接设置；否则，请设置一个 Map 类型的 Sass 变量分别给出浅色和深色模式下的颜色值。</p><p>可用的颜色变量:</p><ul><li><code>$theme-color</code>: 主题色</li><li><code>$text-color</code>: 字体颜色</li><li><code>$bg-color</code>: 背景色</li><li><code>$bg-color-secondary</code>: 另一套更浅的背景色</li><li><code>$border-color</code>: 边框颜色</li><li><code>$box-shadow</code>: 元素阴影色</li><li><code>$card-shadow</code>: 卡片阴影色</li></ul><details class="hint-container details"><summary>例子</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 将主题颜色设置为红色</span>
<span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

<span class="token comment">// 将边框颜色加深</span>
<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #444<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><details class="hint-container details"><summary>默认值</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #3eaf7c <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$text-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #9e9e9e<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$bg-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #1d2025<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$bg-color-secondary</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #252934<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #eaecef<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #302d28<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// shadow</span>
<span class="token property"><span class="token variable">$box-shadow</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #f0f1f2<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #282a32<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$card-shadow</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 <span class="token operator">/</span> 15%<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 <span class="token operator">/</span> 30%<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// constants</span>
<span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #000<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$dark-grey</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #666<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #999<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$light-grey</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #999<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #666<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$white</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #000<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$grey3</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #333<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$grey12</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #333<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$grey14</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #eee<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #111<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="布局设置" tabindex="-1"><a class="header-anchor" href="#布局设置" aria-hidden="true">#</a> 布局设置</h3><p>可用的布局变量:</p><p>导航栏:</p><ul><li><code>$navbar-height</code>: 导航栏高度</li><li><code>$navbar-horizontal-padding</code>: 导航栏水平填充</li><li><code>$navbar-vertical-padding</code>: 导航栏垂直填充</li><li><code>$navbar-mobile-height</code>: 移动设备上的导航栏高度</li><li><code>$navbar-mobile-horizontal-padding</code>: 移动设备上的导航栏水平填充</li><li><code>$navbar-mobile-vertical-padding</code>: 移动设备上的导航栏垂直填充</li></ul><p>侧边栏:</p><ul><li><code>$sidebar-width</code>: 侧边栏宽度</li><li><code>$sidebar-mobile-width</code>: 移动设备侧边栏宽度</li></ul><p>内容:</p><ul><li><code>$content-width</code>: 主要内容的宽度</li><li><code>$home-page-width</code>: 主页内容的宽度</li></ul><p>字体:</p><ul><li><code>$font-family</code>: 普通文本上使用的字体</li><li><code>$font-family-fancy:</code> 用于花哨元素的字体</li></ul><p>代码:</p><ul><li><code>$font-family-code</code>: 代码上使用的字体</li><li><code>$line-numbers-width</code>: 代码块中行号的宽度</li></ul><p>过渡:</p><ul><li><code>$color-transition</code>: 用于颜色的过渡</li><li><code>$transform-transition</code>: 用于变换动画的过渡</li></ul><details class="hint-container details"><summary>例子</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 加大移动设备上的导航栏高度</span>
<span class="token property"><span class="token variable">$navbar-mobile-height</span></span><span class="token punctuation">:</span> 3.5rem<span class="token punctuation">;</span>

<span class="token comment">// 将 Windows 网页字体设置为思源宋体 (当然你也要记得导入这个字体)</span>
<span class="token property"><span class="token variable">$font-family</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Georgia, -apple-system, &quot;Nimbus Roman No9 L&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Noto Serif SC&quot;, &quot;Microsoft Yahei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;ST Heiti&quot;, sans-serif&#39;</span><span class="token punctuation">;</span>
</code></pre></div></details><details class="hint-container details"><summary>默认值</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* layout */</span>
<span class="token comment">// navbar</span>
<span class="token property"><span class="token variable">$navbar-height</span></span><span class="token punctuation">:</span> 3.75rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$navbar-horizontal-padding</span></span><span class="token punctuation">:</span> 1.5rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$navbar-vertical-padding</span></span><span class="token punctuation">:</span> 0.7rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$navbar-mobile-height</span></span><span class="token punctuation">:</span> 3.25rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$navbar-mobile-horizontal-padding</span></span><span class="token punctuation">:</span> 1rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$navbar-mobile-vertical-padding</span></span><span class="token punctuation">:</span> 0.5rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// sidebar</span>
<span class="token property"><span class="token variable">$sidebar-width</span></span><span class="token punctuation">:</span> 18rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sidebar-mobile-width</span></span><span class="token punctuation">:</span> 16rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// content</span>
<span class="token property"><span class="token variable">$content-width</span></span><span class="token punctuation">:</span> 740px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$home-page-width</span></span><span class="token punctuation">:</span> 1160px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// font</span>
<span class="token property"><span class="token variable">$font-family</span></span><span class="token punctuation">:</span> <span class="token string">&#39;-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, STHeiti, &quot;Microsoft YaHei&quot;, SimSun, sans-serif&#39;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-family-fancy</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Georgia Pro, Crimson, Georgia, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, STHeiti, &quot;Microsoft YaHei&quot;, SimSun, sans-serif&#39;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// code</span>
<span class="token property"><span class="token variable">$font-family-code</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace&#39;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$line-numbers-width</span></span><span class="token punctuation">:</span> 2.5rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// transition</span>
<span class="token property"><span class="token variable">$color-transition</span></span><span class="token punctuation">:</span> <span class="token string">&quot;0.3s ease&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$transform-transition</span></span><span class="token punctuation">:</span> <span class="token string">&quot;0.3s ease&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="index-scss" tabindex="-1"><a class="header-anchor" href="#index-scss" aria-hidden="true">#</a> index.scss</h2><p>填入此文件所有内容都将解析为标准 CSS，然后在主题和插件样式之后注入。</p><p>因此，你可以在此处添加新样式或覆盖样式:</p><details class="hint-container details"><summary>例子</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 在导航栏中将站点名称改为斜体</span>
<span class="token selector">.site-name </span><span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>`,39);function r(d,k){return e(),t("div",null,[l,i,p(" more "),u])}const m=a(c,[["render",r],["__file","style.html.vue"]]);export{m as default};
