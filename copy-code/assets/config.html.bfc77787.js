import{f as e}from"./app.6d993307.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=e(`<h2 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> selector</h2><ul><li>Type: <code>string | string[]</code></li><li>Default: <code>&#39;.theme-default-content div[class*=&quot;language-&quot;] pre&#39;</code></li></ul><p>Code block selector</p><h2 id="duration" tabindex="-1"><a class="header-anchor" href="#duration" aria-hidden="true">#</a> duration</h2><ul><li>Type: <code>number</code></li><li>Default: <code>2000</code></li></ul><p>Hint display time, setting it to <code>0</code> will disable the hint.</p><h2 id="showinmobile" tabindex="-1"><a class="header-anchor" href="#showinmobile" aria-hidden="true">#</a> showInMobile</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to display copy button on the mobile device</p><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CopyCodeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Copy button label text
   */</span>
  copy<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Success message text after content is copied
   */</span>
  hint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Locales config.</p>`,12);function t(l,o){return s}var p=n(a,[["render",t]]);export{p as default};
