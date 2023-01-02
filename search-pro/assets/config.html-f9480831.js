import{_ as t,V as i,W as o,Z as s,$ as n,X as l,a0 as a,E as p}from"./framework-e1acd37d.js";const c={},r=a(`<h2 id="indexcontent" tabindex="-1"><a class="header-anchor" href="#indexcontent" aria-hidden="true">#</a> indexContent</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable content indexing.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>By default only headings and excerpt of the page will be indexed along with your cutom fields, and the content of the page will not be indexed. If you need to index the content of the page, you can set this option to <code>true</code></p></div><h2 id="customfields" tabindex="-1"><a class="header-anchor" href="#customfields" aria-hidden="true">#</a> customFields</h2><ul><li><p>Type: <code>SearchProCustomFieldOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchProCustomFieldOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Custom field getter
   */</span>
  <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Display content
   *
   * <span class="token keyword">@description</span> \`$content\` will be replaced by the content returned by \`getter\`
   *
   * <span class="token keyword">@default</span> \`$content\`
   */</span>
  formatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Custom search items.</p><div class="hint-container tip"><p class="hint-container-title">Example</p><p>Assuming your theme uses category and tag tags in Frontmatter to mark categories and tags of articles, you can use the following configuration:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// We assume you are using the following multilingual</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      customFields<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>category<span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Category: $content&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;分类：$content&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tag<span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tag: $content&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;标签：$content&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="hotkeys" tabindex="-1"><a class="header-anchor" href="#hotkeys" aria-hidden="true">#</a> hotKeys</h2><ul><li><p>Type: <code>SearchProHotKeyOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchProHotKeyOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Value of \`event.key\` to trigger the hot key
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to press \`event.altKey\` at the same time
   *
   * <span class="token keyword">@default</span> false
   */</span>
  alt<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to press \`event.ctrlKey\` at the same time
   *
   * <span class="token keyword">@default</span> false
   */</span>
  ctrl<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to press \`event.shiftKey\` at the same time
   *
   * <span class="token keyword">@default</span> false
   */</span>
  shift<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>[{key: &#39;k&#39;, ctrl: true}]</code></p></li></ul>`,10),u={href:"http://keycode.info/",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>When hotkeys are pressed, the search box input will be focused. Set to an empty array to disable hotkeys.</p><h2 id="historycount" tabindex="-1"><a class="header-anchor" href="#historycount" aria-hidden="true">#</a> historyCount</h2><ul><li>Type: <code>number</code></li><li>Default: <code>5</code></li></ul><p>Max stored history item count.</p><h2 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h2><ul><li>Type: <code>number</code></li><li>Default: <code>300</code></li></ul><p>Delay to start searching after input.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>Performing client search with huge contents could be slow, so under this case you might need to increase this value to ensure user finish input before searching.</p></div><h2 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h2><ul><li>Type: <code>boolean</code></li><li>Default: Whether using <code>--debug</code> flag</li></ul><p>Whether to enable hot reload in the development server.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>It is disabled by default because this feature can have a huge performance impact on sites with huge content and drastically increases the speed of hot reloads when editing Markdown.</p><p>Usually in development, users do not need to update the index database in real time.</p></div><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><ul><li><p>Type: <code>SearchProLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Multi language config for \`vuepress-plugin-search-pro\` plugin
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">SearchProLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Search box placeholder text
   */</span>
  placeholder<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Search text
   */</span>
  search<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Close text
   */</span>
  close<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Select hint
   */</span>
  select<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Choose hint
   */</span>
  navigate<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Close hint
   */</span>
  exit<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Loading hint
   */</span>
  loading<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Empty hint
   */</span>
  empty<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SearchProLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> SearchProLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Multilingual configuration of the search plugin.</p><details class="hint-container details"><summary>Built-in Supported Languages</summary><ul><li><strong>Simplified Chinese</strong> (zh-CN)</li><li><strong>Traditional Chinese</strong> (zh-TW)</li><li><strong>English (United States)</strong> (en-US)</li><li><strong>German</strong> (de-AT)</li><li><strong>Russian</strong> (ru-RU)</li><li><strong>Ukrainian</strong> (uk-UA)</li><li><strong>Vietnamese</strong> (vi-VN)</li><li><strong>Portuguese (Brazil)</strong> (pt-BR)</li><li><strong>Polish</strong> (pl-PL)</li><li><strong>French</strong> (fr-FR)</li><li><strong>Spanish</strong> (es-ES)</li><li><strong>Slovak</strong> (sk-SK)</li><li><strong>Japanese</strong> (ja-JP)</li><li><strong>Turkish</strong> (tr-TR)</li><li><strong>Korean</strong> (ko-KR)</li></ul></details>`,16);function v(m,k){const e=p("ExternalLinkIcon");return i(),o("div",null,[r,s("p",null,[n("Specify the "),s("a",u,[n("event.key"),l(e)]),n(" of the hotkeys.")]),d])}const h=t(c,[["render",v],["__file","config.html.vue"]]);export{h as default};
