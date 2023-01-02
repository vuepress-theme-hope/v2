import{_ as n,W as s,X as a,a1 as e}from"./framework-eb069dea.js";const t={},p=e(`<p>打包器相关函数仅在 Node 端可用，你应该仅在 Node 侧代码中从 <code>vuepress-shared/node</code> 导入它们。</p><p>所有函数都应在 <code>extendsBundlerOptions</code> 生命周期挂钩中调用。</p><p>我们在示例中省略了它。 实际代码应该是这样的：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 导入你需要的函数</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> addCustomElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">extendsBundlerOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span>app<span class="token punctuation">,</span> config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在此添加它们</span>
    <span class="token function">addCustomElement</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;my-custom-element&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> plugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getbundlername" tabindex="-1"><a class="header-anchor" href="#getbundlername" aria-hidden="true">#</a> getBundlerName</h2><p>获取当前打包器的名称。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getBundlerName</span><span class="token operator">:</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div><details class="hint-container details"><summary>示例</summary><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// @vuepress/bundler-vite</span>
<span class="token function">getBundleName</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token comment">// @vuepress/bundler-webpack</span>
<span class="token function">getBundleName</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div></details><h2 id="addcustomelement" tabindex="-1"><a class="header-anchor" href="#addcustomelement" aria-hidden="true">#</a> addCustomElement</h2><p>将自定义元素声明添加到当前的打包器。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CustomElementCommonOptions</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>示例</summary><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> addCustomElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token function">addCustomElement</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token string">&quot;my-custom-element&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addCustomElement</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;custom-element1&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;custom-element2&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// all tags start with \`math-\`</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^math-</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h2 id="usecustomdevserver" tabindex="-1"><a class="header-anchor" href="#usecustomdevserver" aria-hidden="true">#</a> useCustomDevServer</h2><p>为开发服务器中的特定路径提供内容。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>示例</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCustomDevServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// handle \`/api/\` path</span>
<span class="token function">useCustomDevServer</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/api/&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    errMsg<span class="token operator">:</span> <span class="token string">&quot;Unexpected api error&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="webpack-相关" tabindex="-1"><a class="header-anchor" href="#webpack-相关" aria-hidden="true">#</a> Webpack 相关</h2><ul><li><p>chainWebpack</p><p>链式修改 webpack 配置.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">WebpackCommonOptions</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>示例</summary><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> chainWebpack <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token function">chainWebpack</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> isServer<span class="token punctuation">,</span> isBuild<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// do some customize here</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details></li></ul><h2 id="vite-相关" tabindex="-1"><a class="header-anchor" href="#vite-相关" aria-hidden="true">#</a> Vite 相关</h2><ul><li><p>addViteOptimizeDepsInclude</p><p>向 Vite <code>optimizeDeps.include</code> 列表中添加模块</p></li><li><p>addViteOptimizeDepsExclude</p><p>向 Vite <code>optimizeDeps.exclude</code> 列表中添加模块</p></li><li><p>addViteSsrExternal</p><p>向 Vite <code>ssr.external</code> 列表中添加模块</p></li><li><p>addViteSsrNoExternal</p><p>向 Vite <code>ssr.noExternal</code> 列表中添加模块</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ViteCommonOptions</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>示例</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  addViteOptimizeDepsInclude<span class="token punctuation">,</span>
  addViteOptimizeDepsExclude<span class="token punctuation">,</span>
  addViteSsrExternal<span class="token punctuation">,</span>
  addViteSsrNoExternal<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token function">addViteOptimizeDepsInclude</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addViteOptimizeDepsExclude</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;packageA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addViteSsrNoExternal</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addViteSsrExternal</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;packageA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ul><li><p>mergeViteConfig</p><p>无需导入 vite 即可合并 vite 配置的功能 (你的用户可能选择使用其他 b 打包器!)</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">mergeViteConfig</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  defaults<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  overrides<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><details class="hint-container details"><summary>示例</summary><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mergeViteConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

config<span class="token punctuation">.</span>viteOptions <span class="token function">mergeViteConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>viteOptions<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    charset<span class="token operator">:</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details></li></ul>`,23),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","bundler.html.vue"]]);export{r as default};
