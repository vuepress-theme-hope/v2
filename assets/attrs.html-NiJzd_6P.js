import{_ as e}from"./favicon-CmKMXI4O.js";import{aj as h,ak as k,ao as i,an as p,am as d,aq as n,as as t,ar as r,al as g,ap as a}from"./app-C5NAKw-g.js";const o={};function c(A,s){const l=r("MdDemo");return g(),k("div",null,[s[14]||(s[14]=i("p",null,"你可以使用特殊标记为 Markdown 元素添加属性。",-1)),p(" more "),s[15]||(s[15]=d(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      mdEnhance</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        attrs</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>你可以使用语法 <code>{attrs}</code> 来为 Markdown 元素添加属性。</p><p>比如，如果你想要一个 id 为 say-hello-world，文字为 Hello World 的二级标题，你可以使用:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## Hello World {#say-hello-world}</span></span></code></pre></div><p>如果你想要一个有 full-width Class 的图片，你可以使用:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">![</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">img</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">link/to/image.png</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {.full-width}</span></span></code></pre></div><p>同时也支持其他属性:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">一个包含文字的段落。 {#p .a .b align=center customize-attr=&quot;content with spaces&quot;}</span></span></code></pre></div><p>会被渲染为:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;p&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;a b&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D19A66;"> align</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;center&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> customize-attr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;content with spaces&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  一个包含文字的段落。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h2 id="高级" tabindex="-1"><a class="header-anchor" href="#高级"><span>高级</span></a></h2><p>你可以向 <code>attrs</code> 传递选项以自定义插件行为。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> MarkdownItAttrRuleName</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;fence&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;inline&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;table&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;list&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;hr&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;softbreak&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;block&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> MarkdownItAttrsOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * 左分隔符</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">default</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> &#39;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">{</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  left</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * 右分隔符</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">default</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> &#39;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">}</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  right</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * 允许的属性</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">description</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 设置空数组意味着允许所有属性</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">default</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> []</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  allowed</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RegExp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)[];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * 启用的规则</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">default</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">all</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  rule</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;all&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> boolean</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> MarkdownItAttrRuleName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><blockquote><p>所有的 class 都使用 <code>margin: 4px;padding: 4px;border: 1px solid red;</code> 进行显示以展示效果。</p></blockquote>`,17)),n(l,{title:"行内元素",id:"md-demo-46"},{default:t(()=>s[0]||(s[0]=[i("p",null,[a("包含 "),i("code",{class:"inline-code"},"行内代码"),a(" 和 "),i("img",{src:e,alt:"favicon",class:"image",loading:"lazy"}),a(" 的文字，也支持 "),i("em",{class:"inline-emphasis"},"强调"),a(" 和 "),i("strong",{class:"inline-bold"},"加粗"),a("。")],-1)])),code:t(()=>s[1]||(s[1]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"包含 "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"`"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"行内代码"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"`"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"{.inline-code} 和 !["),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"favicon"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"]"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#E06C75"}},"("),i("span",{style:{"--shiki-light":"#A626A4","--shiki-light-text-decoration":"inherit","--shiki-dark":"#C678DD","--shiki-dark-text-decoration":"underline"}},"/favicon.ico"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#E06C75"}},")"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"{.image} 的文字，也支持 "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-light-font-style":"italic","--shiki-dark":"#C678DD","--shiki-dark-font-style":"italic"}},"_强调_"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"{.inline-emphasis} 和 "),i("span",{style:{"--shiki-light":"#986801","--shiki-light-font-weight":"bold","--shiki-dark":"#D19A66","--shiki-dark-font-weight":"inherit"}},"**加粗**"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"{.inline-bold}。")])])])],-1)])),_:1}),n(l,{title:"块级元素",id:"md-demo-54"},{default:t(()=>s[2]||(s[2]=[i("p",null,"块级元素",-1)])),code:t(()=>s[3]||(s[3]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"块级元素 {.block}")])])])],-1)])),_:1}),n(l,{title:"代码块",id:"md-demo-62"},{default:t(()=>s[4]||(s[4]=[i("div",{class:"language-js","data-highlighter":"shiki","data-ext":"js","data-title":"js",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E5C07B"}}," a"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," 1"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")])])])],-1)])),code:t(()=>s[5]||(s[5]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```js {.fence}")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E5C07B"}}," a"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," 1"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")])])])],-1)])),_:1}),n(l,{title:"表格",id:"md-demo-68"},{default:t(()=>s[6]||(s[6]=[i("table",{class:"md-table"},[i("thead",null,[i("tr",null,[i("th",null,"表格")])]),i("tbody",null,[i("tr",null,[i("td",null,"内容")])])],-1)])),code:t(()=>s[7]||(s[7]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"| 表格 |")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"| ---- |")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"| 内容 |")]),a(`
`),i("span",{class:"line"}),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"{.md-table}")])])])],-1)])),_:1}),n(l,{title:"列表",id:"md-demo-89"},{default:t(()=>s[8]||(s[8]=[i("ul",{class:"list-wrapper"},[i("li",{class:"list-item"},[i("p",null,"列表内容"),i("ul",{class:"nested"},[i("li",null,"嵌套列表内容")])])],-1)])),code:t(()=>s[9]||(s[9]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 列表内容{.list-item}")]),a(`
`),i("span",{class:"line"}),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"  -"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 嵌套列表内容")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    {.nested}")]),a(`
`),i("span",{class:"line"}),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"{.list-wrapper}")])])])],-1)])),_:1}),n(l,{title:"水平线",id:"md-demo-108"},{default:t(()=>s[10]||(s[10]=[i("hr",{class:"horizontal"},null,-1)])),code:t(()=>s[11]||(s[11]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"---"),i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}}," {.horizontal}")])])])],-1)])),_:1}),n(l,{title:"换行",id:"md-demo-114"},{default:t(()=>s[12]||(s[12]=[i("p",null,[a("一行换行的文字"),i("br")],-1)])),code:t(()=>s[13]||(s[13]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"一行换行的文字  ")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"{.break}")])])])],-1)])),_:1})])}const m=h(o,[["render",c],["__file","attrs.html.vue"]]),u=JSON.parse('{"path":"/zh/guide/markdown/stylize/attrs.html","title":"属性支持","lang":"zh-CN","frontmatter":{"title":"属性支持","icon":"code","category":["Markdown"],"tag":["Markdown","属性"],"description":"你可以使用特殊标记为 Markdown 元素添加属性。","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/guide/markdown/stylize/attrs.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.gitee.io/v2/guide/markdown/stylize/attrs.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/zh/guide/markdown/stylize/attrs.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"属性支持"}],["meta",{"property":"og:description","content":"你可以使用特殊标记为 Markdown 元素添加属性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-28T18:46:36.000Z"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:tag","content":"属性"}],["meta",{"property":"article:modified_time","content":"2024-03-28T18:46:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"属性支持\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T18:46:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"高级","slug":"高级","link":"#高级","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1655222558000,"updatedTime":1711651596000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.18,"words":55},"filePathRelative":"zh/guide/markdown/stylize/attrs.md","localizedDate":"2022年6月14日","excerpt":"<p>你可以使用特殊标记为 Markdown 元素添加属性。</p>\\n","autoDesc":true}');export{m as comp,u as data};
