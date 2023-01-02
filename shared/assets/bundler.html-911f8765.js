import{_ as n,W as s,X as a,a1 as e}from"./framework-eb069dea.js";const t={},p=e(`<p>Bundler functions should be called at node side, you shall import them from <code>vuepress-shared/node</code> in node side code only.</p><p>All functions should be called in <code>extendsBundlerOptions</code> lifecycle hook.</p><p>We are omitting that in examples. the actual code should be like this:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// import functions you need</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> addCustomElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">extendsBundlerOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span>app<span class="token punctuation">,</span> config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// add them here</span>
    <span class="token function">addCustomElement</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;my-custom-element&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> plugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getbundlername" tabindex="-1"><a class="header-anchor" href="#getbundlername" aria-hidden="true">#</a> getBundlerName</h2><p>Get current bundler name.</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getBundlerName</span><span class="token operator">:</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div><details class="hint-container details"><summary>Example</summary><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// @vuepress/bundler-vite</span>
<span class="token function">getBundleName</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token comment">// @vuepress/bundler-webpack</span>
<span class="token function">getBundleName</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div></details><h2 id="addcustomelement" tabindex="-1"><a class="header-anchor" href="#addcustomelement" aria-hidden="true">#</a> addCustomElement</h2><p>Add a custom element declaration to the current bundler.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CustomElementCommonOptions</span> <span class="token punctuation">{</span>
  app<span class="token operator">:</span> App<span class="token punctuation">;</span>
  config<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * Add tags as customElement
 *
 * <span class="token keyword">@param</span> <span class="token parameter">config</span> VuePress Bundler config
 * <span class="token keyword">@param</span> <span class="token parameter">app</span> VuePress Node App
 * <span class="token keyword">@param</span> <span class="token parameter">customElements</span> tags recognized as custom element
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addCustomElement</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  <span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token operator">:</span> CustomElementCommonOptions<span class="token punctuation">,</span>
  customElement<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> RegExp
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Example</summary><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> addCustomElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token function">addCustomElement</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token string">&quot;my-custom-element&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addCustomElement</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;custom-element1&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;custom-element2&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// all tags start with \`math-\`</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^math-</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h2 id="usecustomdevserver" tabindex="-1"><a class="header-anchor" href="#usecustomdevserver" aria-hidden="true">#</a> useCustomDevServer</h2><p>Provides contents for specific path in dev server.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">CustomServerCommonOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * VuePress Node App
   */</span>
  app<span class="token operator">:</span> App<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * VuePress Bundler config
   */</span>
  config<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">CustomServerOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Path to be responded
   */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Respond function
   */</span>
  <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token punctuation">(</span>request<span class="token operator">?</span><span class="token operator">:</span> IncomingMessage<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> Buffer<span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * error msg
   */</span>
  errMsg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Handle specific path when running VuePress Dev Server
 *
 * <span class="token keyword">@param</span> <span class="token parameter">config</span> VuePress Bundler config
 * <span class="token keyword">@param</span> <span class="token parameter">app</span> VuePress Node App
 * <span class="token keyword">@param</span> <span class="token parameter">path</span> Path to be responded
 * <span class="token keyword">@param</span> <span class="token parameter">response</span> respond function
 * <span class="token keyword">@param</span> <span class="token parameter">errMsg</span> error msg
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useCustomDevServer<span class="token operator">:</span> <span class="token punctuation">(</span>
  <span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token operator">:</span> CustomServerCommonOptions<span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    errMsg<span class="token operator">:</span><span class="token string">&quot;The server encountered an error&quot;</span><span class="token punctuation">,</span>
    response<span class="token operator">:</span> responseHandler<span class="token punctuation">,</span>
    path<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token operator">:</span> CustomServerOptions
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Example</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCustomDevServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// handle \`/api/\` path</span>
<span class="token function">useCustomDevServer</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/api/&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    errMsg<span class="token operator">:</span> <span class="token string">&quot;Unexpected api error&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="webpack-related" tabindex="-1"><a class="header-anchor" href="#webpack-related" aria-hidden="true">#</a> Webpack Related</h2><ul><li><p>chainWebpack</p><p>Chain webpack config.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">WebpackCommonOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * VuePress Node App
   */</span>
  app<span class="token operator">:</span> App<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * VuePress Bundler config
   */</span>
  config<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  <span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token operator">:</span> WebpackCommonOptions<span class="token punctuation">,</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    config<span class="token operator">:</span> WebpackChainConfig<span class="token punctuation">,</span>
    isServer<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    isBuild<span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Example</summary><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> chainWebpack <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token function">chainWebpack</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> isServer<span class="token punctuation">,</span> isBuild<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// do some customize here</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details></li></ul><h2 id="vite-related" tabindex="-1"><a class="header-anchor" href="#vite-related" aria-hidden="true">#</a> Vite Related</h2><ul><li><p>addViteOptimizeDepsInclude</p><p>Add modules to Vite <code>optimizeDeps.include</code> list</p></li><li><p>addViteOptimizeDepsExclude</p><p>Add modules to Vite <code>optimizeDeps.exclude</code> list</p></li><li><p>addViteSsrExternal</p><p>Add modules to Vite <code>ssr.external</code> list</p></li><li><p>addViteSsrNoExternal</p><p>Add modules to Vite <code>ssr.noExternal</code> list</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ViteCommonOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * VuePress Node App
   */</span>
  app<span class="token operator">:</span> App<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * VuePress Bundler config
   */</span>
  config<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Add modules to Vite \`optimizeDeps.include\` list
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addViteOptimizeDepsInclude</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  <span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token operator">:</span> ViteCommonOptions<span class="token punctuation">,</span>
  module<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Add modules to Vite \`optimizeDeps.exclude\` list
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addViteOptimizeDepsExclude</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  <span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token operator">:</span> ViteCommonOptions<span class="token punctuation">,</span>
  module<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Add modules to Vite \`ssr.external\` list
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addViteSsrExternal</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  <span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token operator">:</span> ViteCommonOptions<span class="token punctuation">,</span>
  module<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Add modules to Vite \`ssr.noExternal\` list
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addViteSsrNoExternal</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  <span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token operator">:</span> ViteCommonOptions<span class="token punctuation">,</span>
  module<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Examples</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  addViteOptimizeDepsInclude<span class="token punctuation">,</span>
  addViteOptimizeDepsExclude<span class="token punctuation">,</span>
  addViteSsrExternal<span class="token punctuation">,</span>
  addViteSsrNoExternal<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token function">addViteOptimizeDepsInclude</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addViteOptimizeDepsExclude</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;packageA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addViteSsrNoExternal</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addViteSsrExternal</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;packageA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ul><li><p>mergeViteConfig</p><p>A function for you to merge vite config without importing vite (your users may choose to use other bundler!)</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">mergeViteConfig</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  defaults<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  overrides<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><details class="hint-container details"><summary>Example</summary><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mergeViteConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

config<span class="token punctuation">.</span>viteOptions <span class="token function">mergeViteConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>viteOptions<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    charset<span class="token operator">:</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details></li></ul>`,23),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","bundler.html.vue"]]);export{r as default};
