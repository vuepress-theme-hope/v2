import{aA as i,bq as e,aj as n,ak as l,ao as o,an as d,am as h,al as b}from"./app-C5NAKw-g.js";const r=i({__name:"font.html",setup(s,{expose:a}){a(),e("https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@600;900&display=swap");const t={};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}});function p(s,a,t,k,v,c){return b(),l("div",null,[a[0]||(a[0]=o("p",null,"This page guides you how to customize theme fonts.",-1)),d(" more "),a[1]||(a[1]=h(`<h2 id="font-family" tabindex="-1" data-v-b1719b76><a class="header-anchor" href="#font-family" data-v-b1719b76><span data-v-b1719b76>Font Family</span></a></h2><p data-v-b1719b76>For common font families, they can generally be divided into <strong data-v-b1719b76>serif</strong><sup class="footnote-ref" data-v-b1719b76><a href="#footnote1" data-v-b1719b76>[1]</a><a class="footnote-anchor" id="footnote-ref1" data-v-b1719b76></a></sup> and <strong data-v-b1719b76>sans-serif</strong><sup class="footnote-ref" data-v-b1719b76><a href="#footnote2" data-v-b1719b76>[2]</a><a class="footnote-anchor" id="footnote-ref2" data-v-b1719b76></a></sup>.</p><h2 id="modifying-fonts" tabindex="-1" data-v-b1719b76><a class="header-anchor" href="#modifying-fonts" data-v-b1719b76><span data-v-b1719b76>Modifying Fonts</span></a></h2><p data-v-b1719b76>The theme provides <code data-v-b1719b76>$vp-font</code>, <code data-v-b1719b76>$vp-font-heading</code> and <code data-v-b1719b76>$vp-font-mono</code> three variables to control the font in <code data-v-b1719b76>.vuepress/styles/palette.scss</code>.</p><ul data-v-b1719b76><li data-v-b1719b76><code data-v-b1719b76>$vp-font</code>: the font used on normal text</li><li data-v-b1719b76><code data-v-b1719b76>$vp-font-heading:</code> font for heading elements</li><li data-v-b1719b76><code data-v-b1719b76>$vp-font-mono</code>: the font used in code block and inline codes</li></ul><p data-v-b1719b76>By default, the theme uses sans serif with normal text.</p><div class="hint-container tip" data-v-b1719b76><p class="hint-container-title" data-v-b1719b76>Use Serifs</p><p data-v-b1719b76>If you prefer serif fonts, you can modify <code data-v-b1719b76>$vp-font</code> to the font you want.</p><p data-v-b1719b76>The following font families are our recommended first choice for serif fonts:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;" data-v-b1719b76><pre class="shiki shiki-themes one-light one-dark-pro vp-code" data-v-b1719b76><code data-v-b1719b76><span class="line" data-v-b1719b76><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>$vp-font</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;" data-v-b1719b76>: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76>&#39;Georgia, -apple-system, &quot;Nimbus Roman No9 L&quot;, sans-serif&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>;</span></span></code></pre></div></div><h2 id="fallback-font" tabindex="-1" data-v-b1719b76><a class="header-anchor" href="#fallback-font" data-v-b1719b76><span data-v-b1719b76>Fallback Font</span></a></h2><p data-v-b1719b76>Because different platforms, different operating systems, and different installation methods (slim/full) will cause huge differences in the number and types of fonts in the font library, you should set as many fonts as possible, and ensure that the fallback fonts <sup class="footnote-ref" data-v-b1719b76><a href="#footnote3" data-v-b1719b76>[3]</a><a class="footnote-anchor" id="footnote-ref3" data-v-b1719b76></a></sup> exists.</p><div class="hint-container tip" data-v-b1719b76><p class="hint-container-title" data-v-b1719b76>Best Practices</p><p data-v-b1719b76>The fallback font <sup class="footnote-ref" data-v-b1719b76><a href="#footnote3" data-v-b1719b76>[3:1]</a><a class="footnote-anchor" id="footnote-ref3:1" data-v-b1719b76></a></sup> can ensure that your website displays well on different operating systems and devices with different fonts installed.</p></div><h2 id="font-library" tabindex="-1" data-v-b1719b76><a class="header-anchor" href="#font-library" data-v-b1719b76><span data-v-b1719b76>Font Library</span></a></h2><p data-v-b1719b76>You can find more fonts in <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer" data-v-b1719b76>Google Fonts</a>, and you can preview and download them online.</p><p data-v-b1719b76>Please search and select the font and weight you want in the webpage, then click the <code data-v-b1719b76>Select</code> button on the right to add it to your selection list, then click the button in the upper right corner to view your favorite fonts and get the link Imported in the configuration file of VuePress.</p><p data-v-b1719b76>We assume that you have selected the 400 and 700 italic fonts of Lora font. After clicking the button in the upper right corner, Google will give the following code in the sidebar:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;" data-v-b1719b76><pre class="shiki shiki-themes one-light one-dark-pro vp-code" data-v-b1719b76><code data-v-b1719b76><span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;" data-v-b1719b76> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76>&quot;preconnect&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;" data-v-b1719b76> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76>&quot;https://fonts.googleapis.com&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76> /&gt;</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;" data-v-b1719b76> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76>&quot;preconnect&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;" data-v-b1719b76> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76>&quot;https://fonts.gstatic.com&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;" data-v-b1719b76> crossorigin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76> /&gt;</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>link</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#986801;--shiki-dark:#D19A66;" data-v-b1719b76>  href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76>&quot;https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,700&amp;display=swap&quot;</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#986801;--shiki-dark:#D19A66;" data-v-b1719b76>  rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76>&quot;stylesheet&quot;</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>/&gt;</span></span></code></pre></div><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;" data-v-b1719b76><pre class="shiki shiki-themes one-light one-dark-pro vp-code" data-v-b1719b76><code data-v-b1719b76><span class="line" data-v-b1719b76><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>font-family</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;" data-v-b1719b76>: &quot;Lora&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF;" data-v-b1719b76>,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;" data-v-b1719b76> serif;</span></span></code></pre></div><p data-v-b1719b76>Then all you need to do is import and use them by adding the following code in the VuePress configuration file:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/config.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;" data-v-b1719b76><pre class="shiki shiki-themes one-light one-dark-pro vp-code" data-v-b1719b76><code data-v-b1719b76><span class="line" data-v-b1719b76><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;" data-v-b1719b76>import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;" data-v-b1719b76>from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76> &quot;vuepress&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>;</span></span>
<span class="line" data-v-b1719b76></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;" data-v-b1719b76>export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;" data-v-b1719b76> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;" data-v-b1719b76> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>({</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;" data-v-b1719b76>  //...</span></span>
<span class="line" data-v-b1719b76></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>  head</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;" data-v-b1719b76>:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76> [</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;" data-v-b1719b76>    //...</span></span>
<span class="line" data-v-b1719b76></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;" data-v-b1719b76>    // Import the corresponding link</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>    [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76>&quot;link&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>, { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>rel</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;" data-v-b1719b76>:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76> &quot;preconnect&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>href</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;" data-v-b1719b76>:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76> &quot;https://fonts.googleapis.com&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76> }],</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>    [</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76>      &quot;link&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>,</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>      { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>rel</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;" data-v-b1719b76>:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76> &quot;preconnect&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>href</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;" data-v-b1719b76>:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76> &quot;https://fonts.gstatic.com&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>crossorigin</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;" data-v-b1719b76>:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76> &quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76> },</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>    ],</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>    [</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76>      &quot;link&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>,</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>      {</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>        href</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;" data-v-b1719b76>:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76> &quot;https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&amp;display=swap&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>,</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>        rel</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;" data-v-b1719b76>:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76> &quot;stylesheet&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>,</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>      },</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>    ],</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>  ],</span></span>
<span class="line" data-v-b1719b76></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;" data-v-b1719b76>  //...</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-b1719b76><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div><div class="line-number" data-v-b1719b76></div></div></div><p data-v-b1719b76>Also modify the <code data-v-b1719b76>$vp-font</code> variable in the palette file:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/styles/palette.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;" data-v-b1719b76><pre class="shiki shiki-themes one-light one-dark-pro vp-code" data-v-b1719b76><code data-v-b1719b76><span class="line" data-v-b1719b76><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;" data-v-b1719b76>// apply font</span></span>
<span class="line" data-v-b1719b76><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;" data-v-b1719b76>$vp-font</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;" data-v-b1719b76>: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;" data-v-b1719b76>&quot;Lora, serif&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;" data-v-b1719b76>;</span></span></code></pre></div><p data-v-b1719b76>In this way, you can use lora font in your website.</p><details class="hint-container details" data-v-b1719b76><summary data-v-b1719b76>lora Demo</summary><div class="lora" data-v-b1719b76><h2 id="whereas-recognition-of-the-inherent-dignity" tabindex="-1" data-v-b1719b76><a class="header-anchor" href="#whereas-recognition-of-the-inherent-dignity" data-v-b1719b76><span data-v-b1719b76>Whereas recognition of the inherent dignity</span></a></h2><p data-v-b1719b76>No one shall be subjected to arbitrary arrest, detention or exile.<br data-v-b1719b76> Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.<br data-v-b1719b76> No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.</p></div></details><hr class="footnotes-sep" data-v-b1719b76><section class="footnotes" data-v-b1719b76><ol class="footnotes-list" data-v-b1719b76><li id="footnote1" class="footnote-item" data-v-b1719b76><p data-v-b1719b76>Related introduction: <a href="https://www.zhihu.com/topic/19559432/intro" target="_blank" rel="noopener noreferrer" data-v-b1719b76>https://www.zhihu.com/topic/19559432/intro</a> <a href="#footnote-ref1" class="footnote-backref" data-v-b1719b76>↩︎</a></p></li><li id="footnote2" class="footnote-item" data-v-b1719b76><p data-v-b1719b76>Related introduction: <a href="https://www.zhihu.com/topic/19559433/intro" target="_blank" rel="noopener noreferrer" data-v-b1719b76>https://www.zhihu.com/topic/19559433/intro</a> <a href="#footnote-ref2" class="footnote-backref" data-v-b1719b76>↩︎</a></p></li><li id="footnote3" class="footnote-item" data-v-b1719b76><p data-v-b1719b76>From Wikipedia</p><p data-v-b1719b76>Fallback fonts are fonts that are used to display missing characters when the displayed font lacks certain characters. Because it serves as the last line of defense for display, fallback fonts should contain all Unicode characters where possible.</p><p data-v-b1719b76>When a missing character has no fallback font for display, the missing character is usually displayed as a black square, white hollow square, question mark, Unicode placeholder (U+FFFD), or simply skipped. In practice, systems such as CSS that support sequential display of font lists usually put one or more sets of fallback fonts at the end of the list to prevent missing characters. <a href="#footnote-ref3" class="footnote-backref" data-v-b1719b76>↩︎</a> <a href="#footnote-ref3:1" class="footnote-backref" data-v-b1719b76>↩︎</a></p></li></ol></section>`,24))])}const g=n(r,[["render",p],["__scopeId","data-v-b1719b76"],["__file","font.html.vue"]]),u=JSON.parse('{"path":"/guide/customize/font.html","title":"Customizing Fonts","lang":"en-US","frontmatter":{"title":"Customizing Fonts","icon":"font","order":2,"category":["Cookbook","Customize"],"tag":["Customize"],"description":"This page guides you how to customize theme fonts.","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/guide/customize/font.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope.gitee.io/v2/zh/guide/customize/font.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/guide/customize/font.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Customizing Fonts"}],["meta",{"property":"og:description","content":"This page guides you how to customize theme fonts."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-09T12:02:59.000Z"}],["meta",{"property":"article:tag","content":"Customize"}],["meta",{"property":"article:modified_time","content":"2024-10-09T12:02:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Customizing Fonts\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-09T12:02:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"Font Family","slug":"font-family","link":"#font-family","children":[]},{"level":2,"title":"Modifying Fonts","slug":"modifying-fonts","link":"#modifying-fonts","children":[]},{"level":2,"title":"Fallback Font","slug":"fallback-font","link":"#fallback-font","children":[]},{"level":2,"title":"Font Library","slug":"font-library","link":"#font-library","children":[]}],"git":{"createdTime":1673966297000,"updatedTime":1728475379000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":2.38,"words":714},"filePathRelative":"guide/customize/font.md","localizedDate":"January 17, 2023","excerpt":"<p>This page guides you how to customize theme fonts.</p>\\n","autoDesc":true}');export{g as comp,u as data};
