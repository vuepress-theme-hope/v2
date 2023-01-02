import{_ as p,W as o,X as c,$ as n,a0 as s,Y as e,Z as l,a1 as r,a2 as a,g as d}from"./framework-346270e9.js";const u={},m=n("p",null,"You can pass these options to the plugin:",-1),v=n("h2",{id:"gfm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gfm","aria-hidden":"true"},"#"),s(" gfm")],-1),h=n("ul",null,[n("li",null,[s("Type: "),n("code",null,"boolean")]),n("li",null,[s("Default: "),n("code",null,"false")])],-1),b=n("p",null,"Whether to support full GFM syntax.",-1),k={class:"hint-container note"},g=n("p",{class:"hint-container-title"},"Note",-1),f={href:"https://github.github.com/gfm/",target:"_blank",rel:"noopener noreferrer"},Q=n("p",null,"We are not 100% supporting it to be honestly, we only supply it’s syntax including footnote, tasklist, code highlight, image mark and so on.",-1),y=n("p",null,[s("Some of the behavior might be different, for example to support Vue syntax, we are not disallowing "),n("code",null,"<script>"),s(" tags. But in most situation, the behavior should be same.")],-1),T=n("h2",{id:"container",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#container","aria-hidden":"true"},"#"),s(" container")],-1),x=n("li",null,[s("Type: "),n("code",null,"boolean")],-1),w=n("li",null,[s("Default: "),n("code",null,"false")],-1),_=a('<p>Whether to enable custom container including</p><ul><li>info</li><li>note</li><li>tip</li><li>warning</li><li>danger</li><li>details</li></ul><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The last 4 items conflict with default theme and will override it’s style.</p></div><h2 id="linkcheck" tabindex="-1"><a class="header-anchor" href="#linkcheck" aria-hidden="true">#</a> linkCheck</h2><ul><li>Type: <code>&quot;always&quot; | &quot;dev&quot; | &quot;build&quot; | &quot;never&quot; | boolean</code></li><li>Default: <code>&quot;dev&quot;</code></li></ul><p>Whether to enable link check.</p><div class="hint-container note"><p class="hint-container-title">Note</p><ul><li><code>true</code> equals to <code>&#39;always&#39;</code></li><li><code>false</code> equals to <code>&#39;never&#39;</code></li></ul></div><h2 id="vpre" tabindex="-1"><a class="header-anchor" href="#vpre" aria-hidden="true">#</a> vPre</h2>',8),q=n("li",null,[s("Type: "),n("code",null,"boolean")],-1),D=n("li",null,[s("Default: "),n("code",null,"false")],-1),P=n("p",null,"Whether to enable v-pre wrapper.",-1),L=n("h2",{id:"tabs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tabs","aria-hidden":"true"},"#"),s(" tabs")],-1),W=n("li",null,[s("Type: "),n("code",null,"boolean")],-1),R=n("li",null,[s("Default: "),n("code",null,"false")],-1),C=n("p",null,"Whether to enable tabs.",-1),H=n("h2",{id:"codetabs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#codetabs","aria-hidden":"true"},"#"),s(" codetabs")],-1),S=n("li",null,[s("Type: "),n("code",null,"boolean")],-1),j=n("li",null,[s("Default: "),n("code",null,"false")],-1),M=n("p",null,"Whether to enable codetabs.",-1),O=n("h2",{id:"align",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#align","aria-hidden":"true"},"#"),s(" align")],-1),z=n("li",null,[s("Type: "),n("code",null,"boolean")],-1),V=n("li",null,[s("Default: "),n("code",null,"false")],-1),E=n("p",null,"Whether to enable custom align.",-1),I=n("h2",{id:"attrs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),s(" attrs")],-1),N=a(`<li><p>Type: <code>AttrsOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AttrsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * left delimiter
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">{</span>&#39;
   */</span>
  left<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * right delimiter
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">}</span>&#39;
   */</span>
  right<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * allowed attributes
   *
   * <span class="token keyword">@description</span> An empty list means allowing all attribute
   *
   * <span class="token keyword">@default</span> []
   */</span>
  allowed<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li>`,2),F=n("p",null,"Details:",-1),J=a(`<p>Whether to enable attribute customize support.</p><h2 id="sup" tabindex="-1"><a class="header-anchor" href="#sup" aria-hidden="true">#</a> sup</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable the upper format support.</p><h2 id="sub" tabindex="-1"><a class="header-anchor" href="#sub" aria-hidden="true">#</a> sub</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable the lower corner format support.</p><h2 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> footnote</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable footnote format support.</p><h2 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> mark</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable mark support.</p><h2 id="figure" tabindex="-1"><a class="header-anchor" href="#figure" aria-hidden="true">#</a> figure</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether enable figure support.</p><h2 id="imglazyload" tabindex="-1"><a class="header-anchor" href="#imglazyload" aria-hidden="true">#</a> imgLazyload</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to lazy load every images in page in native way.</p><h2 id="imgmark" tabindex="-1"><a class="header-anchor" href="#imgmark" aria-hidden="true">#</a> imgMark</h2><ul><li>Type: <code>ImageMarkOptions | boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether enable image mark support.</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ImageMarkOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** lightmode only IDs */</span>
  light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** darkmode only IDs */</span>
  dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="imgsize" tabindex="-1"><a class="header-anchor" href="#imgsize" aria-hidden="true">#</a> imgSize</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether enable image size support.</p><h2 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist" aria-hidden="true">#</a> tasklist</h2><ul><li>Type: <code>TaskListOptions | boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable tasklist format support. You can pass an object to config task list.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TaskListOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Whether disable checkbox
   *
   * <span class="token keyword">@default</span> true
   */</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether use \`&lt;label&gt;\` to wrap text
   *
   * <span class="token keyword">@default</span> true
   */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="katex" tabindex="-1"><a class="header-anchor" href="#katex" aria-hidden="true">#</a> katex</h2><ul><li>Type: <code>KatexOptions &amp; { mhchem?: boolean } | boolean</code></li><li>Default: <code>false</code></li></ul>`,32),A={class:"MathJax",jax:"SVG",style:{position:"relative"}},B={style:{"vertical-align":"-0.488ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.672ex",height:"2.033ex",role:"img",focusable:"false",viewBox:"0 -683 2065 898.5","aria-hidden":"true"},G=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path></g><g data-mml-node="mspace" transform="translate(704,0)"></g><g data-mml-node="mpadded" transform="translate(564,0)"><g transform="translate(0,-215.5)"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D438" d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"></path></g></g></g></g><g data-mml-node="mspace" transform="translate(1328,0)"></g><g data-mml-node="mi" transform="translate(1213,0)"><path data-c="1D44B" d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"></path></g></g></g>',1),U=[G],K=n("mjx-assistive-mml",{unselectable:"on",display:"inline"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",null,"T"),n("mspace",{width:"-.14em"}),n("mpadded",{height:"-.5ex",depth:"+.5ex",voffset:"-.5ex"},[n("mrow",{"data-mjx-texclass":"ORD"},[n("mi",null,"E")])]),n("mspace",{width:"-.115em"}),n("mi",null,"X")])],-1),X=n("p",null,[s("In particular, you can enable the mhchem extension with "),n("code",null,"katex.mhchem: true"),s(".")],-1),Y={href:"https://katex.org/docs/options.html",target:"_blank",rel:"noopener noreferrer"},Z=n("h2",{id:"mathjax",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mathjax","aria-hidden":"true"},"#"),s(" mathjax")],-1),$=n("ul",null,[n("li",null,[s("Type: "),n("code",null,"MathJaxOptions | boolean")]),n("li",null,[s("Default: "),n("code",null,"false")])],-1),nn={class:"MathJax",jax:"SVG",style:{position:"relative"}},sn={style:{"vertical-align":"-0.488ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.672ex",height:"2.033ex",role:"img",focusable:"false",viewBox:"0 -683 2065 898.5","aria-hidden":"true"},en=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path></g><g data-mml-node="mspace" transform="translate(704,0)"></g><g data-mml-node="mpadded" transform="translate(564,0)"><g transform="translate(0,-215.5)"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D438" d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"></path></g></g></g></g><g data-mml-node="mspace" transform="translate(1328,0)"></g><g data-mml-node="mi" transform="translate(1213,0)"><path data-c="1D44B" d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"></path></g></g></g>',1),an=[en],tn=n("mjx-assistive-mml",{unselectable:"on",display:"inline"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",null,"T"),n("mspace",{width:"-.14em"}),n("mpadded",{height:"-.5ex",depth:"+.5ex",voffset:"-.5ex"},[n("mrow",{"data-mjx-texclass":"ORD"},[n("mi",null,"E")])]),n("mspace",{width:"-.115em"}),n("mi",null,"X")])],-1),ln={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/md-enhance/src/shared/mathjax.ts",target:"_blank",rel:"noopener noreferrer"},on=a(`<h2 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h2><ul><li><p>Type: <code>IncludeOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IncludeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * handle include filePath
   *
   * <span class="token keyword">@default</span> (path) =&gt; path
   */</span>
  getPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether deep include files in included Markdown files
   *
   * <span class="token keyword">@default</span> false
   */</span>
  deep<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li></ul><p>Whether to enable Markdown import support. You can pass in a function for path resolution.</p><h2 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> chart</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable chart support</p><h2 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> echarts</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable ECharts support</p><h2 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> flowchart</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable flowchart support</p><h2 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> mermaid</h2><ul><li>Type: <code>MermaidConfig | boolean</code></li><li>Default: <code>false</code></li></ul>`,14),cn={href:"https://mermaid-js.github.io/mermaid/#/",target:"_blank",rel:"noopener noreferrer"},dn=a(`<h2 id="stylize" tabindex="-1"><a class="header-anchor" href="#stylize" aria-hidden="true">#</a> stylize</h2><ul><li><p>Type: <code>StylizeOptions | false</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">StylizeResult</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Tag name
   */</span>
  tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Attributes settings
   */</span>
  attrs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tag content
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">StylizeItem</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Inline token matcher
   */</span>
  matcher<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Content Replacer
   */</span>
  <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> <span class="token punctuation">{</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    attrs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    env<span class="token operator">?</span><span class="token operator">:</span> MarkdownEnv<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> StylizeResult <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">StylizeOptions</span> <span class="token operator">=</span> StylizeItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li></ul><p>Stylize inline tokens to create snippet you want.</p><h2 id="playground" tabindex="-1"><a class="header-anchor" href="#playground" aria-hidden="true">#</a> playground</h2><ul><li><p>Type: <code>PlaygroundGlobalOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CompilerOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundCodeConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Code block extension
   *
   * <span class="token keyword">@description</span> It&#39;s based on filename, not code fence language
   */</span>
  ext<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Code block content
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Title of Playground
   */</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Import map file name
   *
   * <span class="token keyword">@default</span> &#39;import-map.json&#39;
   */</span>
  importMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground files info
   */</span>
  files<span class="token operator">:</span> Record<span class="token operator">&lt;</span>
    <span class="token doc-comment comment">/** File name */</span>
    <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** File detail */</span>
    PlaygroundCodeConfig
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground settings
   *
   * <span class="token keyword">@description</span> It&#39;s parsed result of json content after setting directive
   */</span>
  settings<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * hash key based on playground content
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Playground container name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground component name
   *
   * <span class="token keyword">@default</span> &#39;Playground&#39;
   */</span>
  component<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Props getter
   */</span>
  <span class="token function-variable function">propsGetter</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> PlaygroundData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TSPresetPlaygroundOptions</span> <span class="token keyword">extends</span> <span class="token class-name">CompilerOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * external playground service url
   *
   * <span class="token keyword">@default</span> &quot;https://www.typescriptlang.org/play&quot;
   */</span>
  service<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">VuePresetPlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * external playground service url
   *
   * <span class="token keyword">@default</span> &quot;https://sfc.vuejs.org/&quot;
   */</span>
  service<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to use dev version
   *
   * <span class="token keyword">@default</span> false
   */</span>
  dev<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to enable SSR
   *
   * <span class="token keyword">@default</span> false
   */</span>
  ssr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundGlobalOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Playground presets */</span>
  presets<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token string">&quot;ts&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;vue&quot;</span> <span class="token operator">|</span> PlaygroundOptions<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Playground config */</span>
  config<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ts<span class="token operator">?</span><span class="token operator">:</span> TSPresetPlaygroundOptions<span class="token punctuation">;</span>
    vue<span class="token operator">?</span><span class="token operator">:</span> VuePresetPlaygroundOptions<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Playground options.</p><h2 id="vueplayground" tabindex="-1"><a class="header-anchor" href="#vueplayground" aria-hidden="true">#</a> vuePlayground</h2><ul><li><p>Type: <code>VuePlaygroundOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">VuePlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Whether to show code in playground
   *
   * <span class="token keyword">@default</span> false
   */</span>
  showCode<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * specify the version of vue
   */</span>
  vueVersion<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * specify default URL to import Vue runtime from in the sandbox
   *
   * <span class="token keyword">@default</span> &quot;https://unpkg.com/@vue/runtime-dom@$<span class="token punctuation">{</span>version<span class="token punctuation">}</span>/dist/runtime-dom.esm-browser.js&quot;
   */</span>
  defaultVueRuntimeURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Specify default URL to import Vue Server Renderer from in the sandbox
   *
   * <span class="token keyword">@default</span> &quot;https://unpkg.com/@vue/server-renderer@$<span class="token punctuation">{</span>version<span class="token punctuation">}</span>/dist/server-renderer.esm-browser.js&quot;
   */</span>
  defaultVueServerRendererURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to enable repl&#39;s editor resizable
   *
   * <span class="token keyword">@default</span> true
   */</span>
  autoResize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to show JS, CSS, SSR panel
   *
   * <span class="token keyword">@default</span> false
   */</span>
  showCompileOutput<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to show import map
   *
   * <span class="token keyword">@default</span> true
   */</span>
  showImportMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to clear console
   *
   * <span class="token keyword">@default</span> false
   */</span>
  clearConsole<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Layout
   *
   * <span class="token keyword">@default</span> &#39;vertical&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;vertical&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;horizontal&quot;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Options to configure the \`vue/compiler-sfc\`
   */</span>
  sfcOptions<span class="token operator">?</span><span class="token operator">:</span> SFCOptions<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to enable SSR
   *
   * <span class="token keyword">@default</span> true
   */</span>
  ssr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li></ul><p>Whether to enable vue playground support.</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h2><ul><li>Type: <code>CodeDemoGlobalOptions | boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable code demo support.</p><h3 id="demo-jslib" tabindex="-1"><a class="header-anchor" href="#demo-jslib" aria-hidden="true">#</a> demo.jsLib</h3><ul><li>Type: <code>string[]</code></li><li>Required: No</li></ul><p>CodePen, JsFiddle requires an external JS library for dating.</p><h3 id="demo-csslib" tabindex="-1"><a class="header-anchor" href="#demo-csslib" aria-hidden="true">#</a> demo.cssLib</h3><ul><li>Type: <code>string[]</code></li><li>Required: No</li></ul><p>CodePen, JsFiddle need an external CSS library for dating.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The above two options are only used by third-party code demo service, you need to import these libraries in <code>head</code>.</p></div><h3 id="demo-jsfiddle" tabindex="-1"><a class="header-anchor" href="#demo-jsfiddle" aria-hidden="true">#</a> demo.jsfiddle</h3><ul><li>Type: <code>boolean</code></li><li>Default value: <code>true</code></li></ul><p>Whether to display the JSFiddle button</p><h3 id="demo-codepen" tabindex="-1"><a class="header-anchor" href="#demo-codepen" aria-hidden="true">#</a> demo.codepen</h3><ul><li>Type: <code>boolean</code></li><li>Default value: <code>true</code></li></ul><p>Whether to display the CodePen button</p><h3 id="demo-codepenlayout" tabindex="-1"><a class="header-anchor" href="#demo-codepenlayout" aria-hidden="true">#</a> demo.codepenLayout</h3><ul><li>Type: <code>&quot;top&quot; | &quot;left&quot; | &quot;correct&quot;</code></li><li>Default value: <code>&quot;left&quot;</code></li></ul><p>CodePen editor layout</p><h3 id="demo-codepeneditors" tabindex="-1"><a class="header-anchor" href="#demo-codepeneditors" aria-hidden="true">#</a> demo.codepenEditors</h3><ul><li>Type: <code>string</code></li><li>Default value: <code>&quot;101&quot;</code></li></ul><p>CodePen editor status</p><h3 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> others</h3><p>The following are the library links used by the third-party code demo service. Unless your environment cannot visit unpkg or the speed is slow, you probably don’t need to override the default values.</p><h4 id="demo-babel" tabindex="-1"><a class="header-anchor" href="#demo-babel" aria-hidden="true">#</a> demo.babel</h4><p>Default value: <code>&quot;https://unpkg.com/@babel/standalone/babel.min.js&quot;</code></p><h4 id="demo-vue" tabindex="-1"><a class="header-anchor" href="#demo-vue" aria-hidden="true">#</a> demo.vue</h4><p>Default value: <code>&quot;https://unpkg.com/vue/dist/vue.global.prod.js&quot;</code></p><h4 id="demo-react" tabindex="-1"><a class="header-anchor" href="#demo-react" aria-hidden="true">#</a> demo.react</h4><p>Default value: <code>&quot;https://unpkg.com/react/umd/react.production.min.js&quot;</code></p><h4 id="demo-reactdom" tabindex="-1"><a class="header-anchor" href="#demo-reactdom" aria-hidden="true">#</a> demo.reactDOM</h4><p>Default value: <code>&quot;https://unpkg.com/react-dom/umd/react-dom.production.min.js&quot;</code></p><h2 id="presentation" tabindex="-1"><a class="header-anchor" href="#presentation" aria-hidden="true">#</a> presentation</h2><ul><li>Type: <code>PresentationOptions | boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable presentation syntax support.</p><p>You can set it with an object, the object will be used to config reveal.js.</p><h3 id="presentation-plugins" tabindex="-1"><a class="header-anchor" href="#presentation-plugins" aria-hidden="true">#</a> presentation.plugins</h3><ul><li><p>Type: <code>RevealPlugin[]</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">RevealPlugin</span> <span class="token operator">=</span> <span class="token string">&quot;highlight&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;math&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;search&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;notes&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;zoom&quot;</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>Required: No</p></li></ul><p>Plugins you want to use on reveal.js.</p><p>Acceptable values are:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul>`,50),pn=a(`<h3 id="presentation-revealconfig" tabindex="-1"><a class="header-anchor" href="#presentation-revealconfig" aria-hidden="true">#</a> presentation.revealConfig</h3><ul><li>Type: <code>Partial&lt;RevealOptions&gt;</code></li><li>Required: No</li></ul><p>Config which you want to pass to reveal.js.</p><h2 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h2><ul><li>Type: <code>number</code></li><li>Default: <code>800</code></li></ul><p>The delay of operating dom, in ms.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>If the theme you are using has a switching animation, it is recommended to configure this option to <code>Switch animation duration + 200</code>.</p></div><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><ul><li><p>Type: <code>MarkdownEnhanceLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownEnhanceLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Default Title text for info block
   */</span>
  info<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for note block
   */</span>
  note<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for tip block
   */</span>
  tip<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for warning block
   */</span>
  warning<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for danger block
   */</span>
  danger<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for details block
   */</span>
  details<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownEnhanceLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> MarkdownEnhanceLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locales config for Markdown Enhance Plugin.</p><details class="hint-container details"><summary>Built-in Supported Languages</summary><ul><li><strong>Simplified Chinese</strong> (zh-CN)</li><li><strong>Traditional Chinese</strong> (zh-TW)</li><li><strong>English (United States)</strong> (en-US)</li><li><strong>German</strong> (de-AT)</li><li><strong>Russian</strong> (ru-RU)</li><li><strong>Ukrainian</strong> (uk-UA)</li><li><strong>Vietnamese</strong> (vi-VN)</li><li><strong>Portuguese (Brazil)</strong> (pt-BR)</li><li><strong>Polish</strong> (pl-PL)</li><li><strong>French</strong> (fr-FR)</li><li><strong>Spanish</strong> (es-ES)</li><li><strong>Slovak</strong> (sk-SK)</li><li><strong>Japanese</strong> (ja-JP)</li><li><strong>Turkish</strong> (tr-TR)</li><li><strong>Korean</strong> (ko-KR)</li></ul></details>`,11);function rn(un,mn){const i=d("ExternalLinkIcon"),t=d("RouterLink");return o(),c("div",null,[m,v,h,b,n("div",k,[g,n("p",null,[s("For full GFM syntax, see "),n("a",f,[s("GFM"),e(i)]),s(".")]),Q,y]),T,n("ul",null,[x,w,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(t,{to:"/guide/container.html"},{default:l(()=>[s("Custom Container")]),_:1})])])])]),_,n("ul",null,[q,D,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(t,{to:"/guide/others.html#v-pre"},{default:l(()=>[s("v-pre wrapper")]),_:1})])])])]),P,L,n("ul",null,[W,R,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(t,{to:"/guide/tabs.html"},{default:l(()=>[s("Tabs")]),_:1})])])])]),C,H,n("ul",null,[S,j,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(t,{to:"/guide/code-tabs.html"},{default:l(()=>[s("Code Tabs")]),_:1})])])])]),M,O,n("ul",null,[z,V,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(t,{to:"/guide/align.html"},{default:l(()=>[s("Align")]),_:1})])])])]),E,I,n("ul",null,[N,n("li",null,[F,n("ul",null,[n("li",null,[e(t,{to:"/guide/attrs.html"},{default:l(()=>[s("Attrs")]),_:1})])])])]),J,n("p",null,[s("Whether to enable "),n("mjx-container",A,[(o(),c("svg",B,U)),K]),s(" syntax support through KaTeX. You can pass an object to config KaTeX.")]),X,n("p",null,[s("Please see "),n("a",Y,[s("Katex Docs"),e(i)]),s(" for available options.")]),Z,$,n("p",null,[s("Whether to enable "),n("mjx-container",nn,[(o(),c("svg",sn,an)),tn]),s(" syntax support through Math Jax. You can pass an object to config Math Jax.")]),n("p",null,[s("Please see "),n("a",ln,[s("source code"),e(i)]),s(" for available options.")]),on,n("p",null,[s("Whether to enable "),n("a",cn,[s("Mermaid"),e(i)]),s(" support.")]),dn,r(' - `"anything"`\n- `"audio"`\n- `"chalkboard"` '),pn])}const hn=p(u,[["render",rn],["__file","config.html.vue"]]);export{hn as default};
