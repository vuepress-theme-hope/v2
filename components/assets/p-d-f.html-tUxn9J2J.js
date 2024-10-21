import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as i,g as a,b as e,d as t,f as p,r as h,o as d}from"./app-BcZrfIto.js";const k={};function c(u,s){const l=h("PDF"),n=h("MdDemo");return d(),r("div",null,[s[2]||(s[2]=i("p",null,"PDF viewer component.",-1)),s[3]||(s[3]=i("p",null,"You can use this component to embed a PDF viewer.",-1)),a(" more "),s[4]||(s[4]=i("h2",{id:"demo",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#demo"},[i("span",null,"Demo")])],-1)),a(" #region demo "),e(n,{title:"Default PDF viewer",id:"md-demo-11"},{default:t(()=>[e(l,{url:"//theme-hope-assets.vuejs.press/files/sample.pdf"})]),code:t(()=>s[0]||(s[0]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"PDF"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," url"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"//theme-hope-assets.vuejs.press/files/sample.pdf"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," />")])])])],-1)])),_:1}),e(n,{title:"PDF viewer starting with page 2 and without toolbar",id:"md-demo-18"},{default:t(()=>[e(l,{url:"//theme-hope-assets.vuejs.press/files/sample.pdf",page:"2","no-toolbar":""})]),code:t(()=>s[1]||(s[1]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"PDF"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," url"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"//theme-hope-assets.vuejs.press/files/sample.pdf"'),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," page"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"2"'),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," no-toolbar"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," />")])])])],-1)])),_:1}),a(" #endregion demo "),s[5]||(s[5]=p(`<h2 id="pdfjs-viewer" tabindex="-1"><a class="header-anchor" href="#pdfjs-viewer"><span>PDFJS Viewer</span></a></h2><p>Not all browsers support embed PDF viewer (E.g.: No mobile browser supports this now), so we add support for PDFJS Viewer.</p><p>By default the pdfjs viewer is fetched from <code>https://theme-hope-assets.vuejs.press/pdfjs/</code>. You can customize <code>componentOptions.pdf.pdfjs</code> in component options to specific another one.</p><div class="hint-container important"><p class="hint-container-title">PDFJS Viewer</p><p>Our PDFJS viewer is served for community with non-commercial use only, and to use the PDFJS viewer, your PDF file should be served with CORS headers that allows <code>theme-hope-assets.vuejs.press</code>.</p><p>If you can not satisfy the above conditions, you shall host the PDFJS viewer by yourself. To do this, you should download the latest PDFJS viewer from <a href="https://github.com/mozilla/pdf.js/releases" target="_blank" rel="noopener noreferrer">https://github.com/mozilla/pdf.js/releases</a>, then copy it to <code>.vuepress/public</code> folder. After that, set <code>componentOptions.pdf.pdfjs</code> to <code>&lt;BASE_URL&gt;&lt;RELATIVE_PATH_TO_YOUR_FOLDER_INSIDE_PUBLIC&gt;</code> in component options.</p></div><details class="hint-container details"><summary>noToolbar support</summary><p>The default PDFJS viewer does not support toolbar customization, if you want to add support for this, you shall manually add the following code to <code>web/viewer.html</code> before line <code>&lt;script src=&quot;viewer.js&quot;&gt;&lt;/script&gt;</code> in <code>pdfjs</code> folder:</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;viewer.css&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- ========== Below is what you should add ============= --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- add support for toolbar=0 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">hash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">includes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;toolbar=0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> style</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;style&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">textContent</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;#toolbarContainer { display: none; }&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- ========== Above is what you should add ============= --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;viewer.mjs&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- ... --&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url"><span>url</span></a></h3><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>PDF document link.</p><p>When filling in a pathname, <code>base</code> will be automatically added to the beginning of the pathname.</p><div class="hint-container warning"><p class="hint-container-title">Limitations</p><ul><li>Full URL is always recommended</li><li>relative path is NOT supported.</li><li>Pathname is not working with embed PDFJS viewer in devServer, and its URL in production must has a correct CORS policy.</li></ul></div><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width"><span>width</span></a></h3><ul><li>Type: <code>string | number</code></li><li>Default: <code>100%</code></li></ul><p>PDF viewer width.</p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height"><span>height</span></a></h3><ul><li>Type: <code>string | number</code></li><li>Required: No</li></ul><p>PDF viewer height</p><h3 id="ratio" tabindex="-1"><a class="header-anchor" href="#ratio"><span>ratio</span></a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>16 / 9</code></li></ul><p>PDF viewer ratio, ONLY valid when <code>height</code> not set.</p><h3 id="viewer" tabindex="-1"><a class="header-anchor" href="#viewer"><span>viewer</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to force use PDFJS viewer.</p><h3 id="page" tabindex="-1"><a class="header-anchor" href="#page"><span>page</span></a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>1</code></li></ul><p>Initial page of pdf document.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>This prop only works on Chromium-based browsers.</p></div><h3 id="nofullscreen" tabindex="-1"><a class="header-anchor" href="#nofullscreen"><span>noFullscreen</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether disable fullscreen button.</p><h3 id="notoolbar" tabindex="-1"><a class="header-anchor" href="#notoolbar"><span>noToolbar</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to hide toolbar.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>This prop only works on Chromium-based browsers.</p></div><h3 id="zoom" tabindex="-1"><a class="header-anchor" href="#zoom"><span>zoom</span></a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>100</code></li></ul><p>Initial zoom level of pdf document.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>This prop only works on Chromium-based browsers.</p></div>`,38))])}const y=o(k,[["render",c],["__file","p-d-f.html.vue"]]),v=JSON.parse('{"path":"/guide/media/p-d-f.html","title":"PDF","lang":"en-US","frontmatter":{"title":"PDF","description":"PDF viewer component. You can use this component to embed a PDF viewer. Demo PDFJS Viewer Not all browsers support embed PDF viewer (E.g.: No mobile browser supports this now), ...","head":[["link",{"rel":"canonical","href":"https://plugin-components.vuejs.press/guide/media/p-d-f.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope.gitee.io/v2/components/zh/guide/media/p-d-f.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/components/guide/media/p-d-f.html"}],["meta",{"property":"og:site_name","content":"Components Lib"}],["meta",{"property":"og:title","content":"PDF"}],["meta",{"property":"og:description","content":"PDF viewer component. You can use this component to embed a PDF viewer. Demo PDFJS Viewer Not all browsers support embed PDF viewer (E.g.: No mobile browser supports this now), ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:15:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:15:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PDF\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:15:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"PDFJS Viewer","slug":"pdfjs-viewer","link":"#pdfjs-viewer","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[{"level":3,"title":"url","slug":"url","link":"#url","children":[]},{"level":3,"title":"width","slug":"width","link":"#width","children":[]},{"level":3,"title":"height","slug":"height","link":"#height","children":[]},{"level":3,"title":"ratio","slug":"ratio","link":"#ratio","children":[]},{"level":3,"title":"viewer","slug":"viewer","link":"#viewer","children":[]},{"level":3,"title":"page","slug":"page","link":"#page","children":[]},{"level":3,"title":"noFullscreen","slug":"nofullscreen","link":"#nofullscreen","children":[]},{"level":3,"title":"noToolbar","slug":"notoolbar","link":"#notoolbar","children":[]},{"level":3,"title":"zoom","slug":"zoom","link":"#zoom","children":[]}]}],"git":{"createdTime":1653139678000,"updatedTime":1716200147000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":7}]},"readingTime":{"minutes":1.45,"words":434},"filePathRelative":"guide/media/p-d-f.md","localizedDate":"May 21, 2022","autoDesc":true}');export{y as comp,v as data};
