import{a3 as a,Z as e,_ as t,a4 as p,a1 as n,a2 as s,a5 as o}from"./framework-f408d5b9.js";const l={},c=n("p",null,[s("You can change the theme’s styles in "),n("code",null,".vuepress/styles"),s(" by setting variable values in the "),n("code",null,"config.scss"),s(" and "),n("code",null,"palette.scss"),s(" files.")],-1),i=n("p",null,[s("Also you can add your own styles in "),n("code",null,".vuepress/styles/index.scss"),s(".")],-1),u=o(`<h2 id="config-scss" tabindex="-1"><a class="header-anchor" href="#config-scss" aria-hidden="true">#</a> config.scss</h2><p><code>config.scss</code> is used for pure variable config, the following are supported variables and default values.</p><p>Responsive breakpoints:</p><ul><li><code>$pc</code></li><li><code>$laptop</code></li><li><code>$pad</code></li><li><code>$tablet</code></li><li><code>$mobile</code></li></ul><p>Code block:</p><ul><li><code>$code-light-theme</code>: code block theme in lightmode</li><li><code>$code-dark-theme</code>: code block theme in darkmode</li></ul><p>Content class: <code>$content-class</code></p><p>Color list: <code>$colors</code></p><details class="hint-container details"><summary>Demo</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// modify code theme in lightmode</span>
<span class="token property"><span class="token variable">$code-light-theme</span></span><span class="token punctuation">:</span> <span class="token string">&quot;coy&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// update pc breakpoint</span>
<span class="token property"><span class="token variable">$pc</span></span><span class="token punctuation">:</span> 1920px<span class="token punctuation">;</span>
</code></pre></div></details><details class="hint-container details"><summary>Default value</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* responsive breakpoints */</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="palette-scss" tabindex="-1"><a class="header-anchor" href="#palette-scss" aria-hidden="true">#</a> palette.scss</h2><p><code>palette.scss</code> is used for CSS variable injecting, the following are supported configurations and default values.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>All variables here (including your newly added variables) will be converted to kebab-case format and injected as CSS variables.</p><p>For example <code>$theme-color</code> will be injected as <code>--theme-color</code>, and <code>$backgroundColor</code> will be injected as <code>--$background-color</code>.</p></div><h3 id="color-config" tabindex="-1"><a class="header-anchor" href="#color-config" aria-hidden="true">#</a> Color Config</h3><p>For all colors, if they are the same in light mode and dark mode, you can set them directly; otherwise, please set a Sass variable of type Map to give the color values in light and dark modes respectively.</p><p>Available color variables:</p><ul><li><code>$theme-color</code>: theme color</li><li><code>$text-color</code>: text color</li><li><code>$bg-color</code>: background color</li><li><code>$bg-color-secondary</code>: another &quot;lighter&quot; background color</li><li><code>$border-color</code>: border color</li><li><code>$box-shadow</code>: shadow color using on elements</li><li><code>$card-shadow</code>: shadow color using on cards</li></ul><details class="hint-container details"><summary>Demo</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// set theme color to red</span>
<span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

<span class="token comment">// setting border color with a darker value</span>
<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #444<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><details class="hint-container details"><summary>Default value</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #3eaf7c <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="layout-config" tabindex="-1"><a class="header-anchor" href="#layout-config" aria-hidden="true">#</a> Layout Config</h3><p>Available layout variables:</p><p>Navbar:</p><ul><li><code>$navbar-height</code>: navbar height</li><li><code>$navbar-horizontal-padding</code>: navbar horizontal padding</li><li><code>$navbar-vertical-padding</code>: navbar vertical padding</li><li><code>$navbar-mobile-height</code>: navbar height on mobile devices</li><li><code>$navbar-mobile-horizontal-padding</code>: navbar horizontal padding on mobile</li><li><code>$navbar-mobile-vertical-padding</code>: navbar vertical padding on mobile</li></ul><p>Sidebar:</p><ul><li><code>$sidebar-width</code>: sidebar width</li><li><code>$sidebar-mobile-width</code>: sidebar width on mobile</li></ul><p>Content:</p><ul><li><code>$content-width</code>: width of main content</li><li><code>$home-page-width</code>: width of homepage content</li></ul><p>Fonts:</p><ul><li><code>$font-family</code>: font family used on normal text</li><li><code>$font-family-fancy:</code> font family used on fancy elements</li></ul><p>Code:</p><ul><li><code>$font-family-code</code>: font family used on code</li><li><code>$line-numbers-width</code>: width of line number in code blocks</li></ul><p>Transition:</p><ul><li><code>$color-transition</code>: transition used on colors</li><li><code>$transform-transition</code>: transition used on transform animation</li></ul><details class="hint-container details"><summary>Demo</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// update navbar height on mobile</span>
<span class="token property"><span class="token variable">$navbar-mobile-height</span></span><span class="token punctuation">:</span> 3.5rem<span class="token punctuation">;</span>

<span class="token comment">// Override default font</span>
<span class="token property"><span class="token variable">$font-family</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Georgia, -apple-system, &quot;Nimbus Roman No9 L&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, sans-serif&#39;</span><span class="token punctuation">;</span>
</code></pre></div></details><details class="hint-container details"><summary>Default value</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* layout */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="index-scss" tabindex="-1"><a class="header-anchor" href="#index-scss" aria-hidden="true">#</a> index.scss</h2><p>Everything filling in this will be parsed to standard CSS and then injected after theme and plugins styles.</p><p>So you can add new styles or override styles here:</p><details class="hint-container details"><summary>Demo</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// make site name in navbar italic</span>
<span class="token selector">.site-name </span><span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>`,39);function r(d,k){return e(),t("div",null,[c,i,p(" more "),u])}const m=a(l,[["render",r],["__file","style.html.vue"]]);export{m as default};
