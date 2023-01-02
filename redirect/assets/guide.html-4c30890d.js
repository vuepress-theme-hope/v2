import{_ as a,W as n,X as e,a1 as s}from"./framework-eb069dea.js";const t={},o=s(`<p>This plugin can automatically handle redirects for your site.</p><h2 id="control-page-redirection" tabindex="-1"><a class="header-anchor" href="#control-page-redirection" aria-hidden="true">#</a> Control Page Redirection</h2><p>If you change the address of an existing page, you can use the <code>redirectFrom</code> option in Frontmatter to redirect to the address of this page, which ensures that users are redirected to the new address when they visit the old link.</p><p>If you need to redirect an existing page to a new page, you can use the <code>redirectTo</code> option in Frontmatter to set the address to redirect to. This way the page will redirect to the new address when accessed.</p><h2 id="redirect-to-pages" tabindex="-1"><a class="header-anchor" href="#redirect-to-pages" aria-hidden="true">#</a> Redirect to Pages</h2><p>You can set a redirect map by setting <code>config</code> in plugin options. You can pass in an object where each key-value pair is a map of redirects.</p><p>For each redirect map, the key is the source link of the redirect, and the value is the destination link of the redirect. The key must be an absolute path, and the value can be an absolute path or a full path.</p><p>When you pass <code>hostname</code> in the plugin options, all redirects in absolute path form will be converted to a full path by prepending <code>hostname</code> and <code>base</code>.</p><div class="hint-container tip"><p class="hint-container-title">Example</p><p>When you invoke the plugin with the following options and <code>base</code> is <code>/</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/foo.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/bar.html&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/baz.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/qux.html&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The plugin will redirect <code>/foo.html</code> to <code>https://example.com/bar.html</code> and <code>/baz.html</code> to <code>https://example.com/qux.html</code>.</p><p>And when you don’t set <code>hostname</code> above, the plugin will redirect <code>/foo.html</code> to <code>/bar.html</code> and <code>/baz.html</code> to <code>https://example.com/qux.html</code>.</p></div><p>The <code>config</code> option also accepts a function whose argument is <code>App</code>, the return value of which will be parsed as a redirect map. This means you can fully customize redirects by passing a custom function.</p><div class="hint-container tip"><p class="hint-container-title">Example</p><p>Suppose we already have some articles under the <code>post</code> directory, and in an update, we rename <code>post</code> to <code>posts</code>, then we can define a redirect map like this:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">config</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span>
      app<span class="token punctuation">.</span>pages
        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> path <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/posts/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> path <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/posts\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;/post/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> path<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div><h2 id="redirecting-sites" tabindex="-1"><a class="header-anchor" href="#redirecting-sites" aria-hidden="true">#</a> Redirecting Sites</h2><p>Sometimes you may change <code>base</code> or use new domain for your site, so you may want the original site automatically redirects to the new one.</p><p>To solve this, the plugin provide <code>vp-redirect</code> cli.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage:
  $ vp-redirect generate <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>

Options:
  <span class="token parameter variable">--hostname</span> <span class="token operator">&lt;</span>hostname<span class="token operator">&gt;</span>  Hostname to redirect to <span class="token punctuation">(</span>E.g.: https://new.example.com/<span class="token punctuation">)</span> <span class="token punctuation">(</span>default: /<span class="token punctuation">)</span>
  -c, <span class="token parameter variable">--config</span> <span class="token operator">&lt;</span>config<span class="token operator">&gt;</span>  Set path to config <span class="token function">file</span>
  -o, <span class="token parameter variable">--output</span> <span class="token operator">&lt;</span>output<span class="token operator">&gt;</span>  Set the output directory <span class="token punctuation">(</span>default: .vuepress/redirect<span class="token punctuation">)</span>
  <span class="token parameter variable">--cache</span> <span class="token operator">&lt;</span>cache<span class="token operator">&gt;</span>        Set the directory of the cache files
  -t, <span class="token parameter variable">--temp</span> <span class="token operator">&lt;</span>temp<span class="token operator">&gt;</span>      Set the directory of the temporary files
  --clean-cache          Clean the cache files before generation
  --clean-temp           Clean the temporary files before generation
  -h, <span class="token parameter variable">--help</span>             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You need to pass in VuePress project source dir and also set the <code>hostname</code> option. The redirect helper cli will initialize your VuePress project to get pages, then generate and output the redirect html files to the output directory.</p><p>By default the plugin will output to <code>.vuepress/redirect</code> directory under source directory. And you should upload it to your original site to provide redirection.</p>`,17),p=[o];function c(i,r){return n(),e("div",null,p)}const u=a(t,[["render",c],["__file","guide.html.vue"]]);export{u as default};