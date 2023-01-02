import{_ as n,W as a,X as s,a1 as e}from"./framework-eb069dea.js";const t={},o=e(`<p>With <code>vuepress-plugin-auto-catalog</code>, you can easily gets automatically generated catalog pages for your theme.</p><h2 id="catalog-component" tabindex="-1"><a class="header-anchor" href="#catalog-component" aria-hidden="true">#</a> Catalog Component</h2><p>The plugin register and use <code>&lt;AutoCatalog /&gt;</code> component by default, if you want to use your own component, you can set <code>component</code> option with your component name.</p><p>The default <code>&lt;AutoCatalog /&gt;</code> will render 3 levels of pages as catalog items, and you can change the level depth by setting <code>level</code> option (Only <code>1</code> <code>2</code> and <code>3</code> are supported).</p><h2 id="excluding-pages" tabindex="-1"><a class="header-anchor" href="#excluding-pages" aria-hidden="true">#</a> Excluding pages</h2><p>There may be some cases you have a <code>/foo/bar.md</code>, but do not want to generate a catalog page at <code>/foo/</code>, in this case, you can use <code>exclude</code> option to exclude the page.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> autoCatalogPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-auto-catalog&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">autoCatalogPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/foo/&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>exclude</code> option accepts an array of string or RegExp.</p><h2 id="controlling-page-frontmatter" tabindex="-1"><a class="header-anchor" href="#controlling-page-frontmatter" aria-hidden="true">#</a> Controlling Page Frontmatter</h2><p>By default, the plugin will generate catalog page title from folder name. However, sometimes you may want to make some customize, so you can set <code>frontmatter</code> option as a function which receives catalog page path as argument and you shall return a object containing the frontmatter you want.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> autoCatalogPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-auto-catalog&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">autoCatalogPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function-variable function">frontmatter</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token comment">// frontmatter you want</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),p=[o];function c(i,l){return a(),s("div",null,p)}const d=n(t,[["render",c],["__file","guide.html.vue"]]);export{d as default};