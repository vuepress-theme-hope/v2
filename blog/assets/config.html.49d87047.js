import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.3d8ab479.js";const t={},p=e(`<h2 id="\u63D2\u4EF6\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u9009\u9879" aria-hidden="true">#</a> \u63D2\u4EF6\u9009\u9879</h2><h3 id="getinfo" tabindex="-1"><a class="header-anchor" href="#getinfo" aria-hidden="true">#</a> getInfo</h3><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; Record&lt;string, unknown&gt;</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u83B7\u53D6\u6587\u7AE0\u4FE1\u606F\u7684\u51FD\u6570\u3002</p><p>\u83B7\u53D6\u5230\u7684\u4FE1\u606F\u4F1A\u88AB\u7A0D\u540E\u6CE8\u5165\u81F3\u8DEF\u7531\u5143\u6570\u636E\uFF0C\u4EE5\u4FBF\u4F60\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u4E2D\u901A\u8FC7\u7EC4\u5408\u5F0F API \u83B7\u53D6\u3002</p><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3><ul><li>\u7C7B\u578B: <code>(page: Page) =&gt; boolean</code></li><li>\u9ED8\u8BA4: <code>(page) =&gt; Boolean(page.filePathRelative) &amp;&amp; !page.frontmatter.home</code></li></ul><p>\u9875\u9762\u8FC7\u6EE4\u5668\uFF0C\u6B64\u51FD\u6570\u7528\u4E8E\u9274\u522B\u9875\u9762\u662F\u5426\u4F5C\u4E3A\u6587\u7AE0\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u4ECE Markdown \u6E90\u6587\u4EF6\u4E2D\u751F\u6210\u7684\u975E\u4E3B\u9875\u9875\u9762\uFF0C\u4F1A\u88AB\u4F5C\u4E3A\u6587\u7AE0\u3002</p><h3 id="category" tabindex="-1"><a class="header-anchor" href="#category" aria-hidden="true">#</a> category</h3><ul><li>\u7C7B\u578B: <code>BlogCategoryOptions[]</code></li></ul><p>\u535A\u5BA2\u5206\u7C7B\u914D\u7F6E\uFF0C\u8BE6\u89C1 <a href="#%E5%8D%9A%E5%AE%A2%E5%88%86%E7%B1%BB%E9%85%8D%E7%BD%AE">\u535A\u5BA2\u5206\u7C7B\u914D\u7F6E</a>\u3002</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><ul><li>\u7C7B\u578B: <code>BlogTypeOptions[]</code></li></ul><p>\u535A\u5BA2\u5206\u7C7B\u914D\u7F6E\uFF0C\u8BE6\u89C1 <a href="#%E5%8D%9A%E5%AE%A2%E7%B1%BB%E5%9E%8B%E9%85%8D%E7%BD%AE">\u535A\u5BA2\u7C7B\u578B\u914D\u7F6E</a>\u3002</p><h3 id="slugify" tabindex="-1"><a class="header-anchor" href="#slugify" aria-hidden="true">#</a> slugify</h3><ul><li>\u7C7B\u578B: <code>(name: string) =&gt; string</code></li><li>\u9ED8\u8BA4: <code>(name) =&gt; name.replace(/ _/g, &#39;-&#39;).replace(/[:?*|\\\\/&lt;&gt;]/g, &quot;&quot;).toLowerCase()</code></li></ul><p>Slugify \u51FD\u6570\uFF0C\u7528\u4E8E\u8F6C\u6362 key \u5728\u8DEF\u7531\u4E2D\u6CE8\u518C\u7684\u5F62\u5F0F\u3002</p><h3 id="metascope" tabindex="-1"><a class="header-anchor" href="#metascope" aria-hidden="true">#</a> metaScope</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4: <code>&quot;_blog&quot;</code></li></ul><p>\u6CE8\u5165\u6587\u7AE0\u4FE1\u606F\u81F3\u8DEF\u7531\u5143\u6570\u636E\u65F6\u4F7F\u7528\u7684\u952E\u540D\u3002</p><div class="custom-container note"><p class="custom-container-title">\u6CE8</p><p>\u8BBE\u7F6E\u4E3A\u7A7A\u5B57\u7B26\u4E32\u4F1A\u76F4\u63A5\u6CE8\u5165\u8DEF\u7531\u5143\u6570\u636E (\u800C\u4E0D\u662F\u4E00\u4E2A\u952E\u4E0B)\u3002</p></div><h3 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u662F\u5426\u5728\u5F00\u53D1\u670D\u52A1\u5668\u4E2D\u4E2D\u542F\u7528\u5B9E\u65F6\u70ED\u91CD\u8F7D\u3002</p><div class="custom-container note"><p class="custom-container-title">\u81F4\u4E3B\u9898\u5F00\u53D1\u8005</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5B83\u662F\u7981\u7528\u7684\uFF0C\u56E0\u4E3A\u5B83\u786E\u5B9E\u4F1A\u5BF9\u5177\u6709\u5F88\u591A\u5206\u7C7B\u548C\u7C7B\u522B\u7684\u7AD9\u70B9\u4EA7\u751F\u6027\u80FD\u5F71\u54CD\uFF0C\u5E76\u4E14\u5728\u7F16\u8F91 Markdown \u65F6\u4F1A\u51CF\u6162\u70ED\u91CD\u8F7D\u7684\u901F\u5EA6\u3002</p><p>\u5982\u679C\u7528\u6237\u6B63\u5728\u6DFB\u52A0\u6216\u7EC4\u7EC7\u7C7B\u522B\u6216\u6807\u7B7E\uFF0C\u4F60\u53EF\u4EE5\u544A\u8BC9\u4ED6\u4EEC\u542F\u7528\u6B64\u529F\u80FD\uFF0C\u5176\u4F59\u7684\u65F6\u95F4\u6700\u597D\u7981\u7528\u5B83\u3002</p><p>\u6B64\u5916\uFF0C\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u68C0\u6D4B\u7528\u6237\u9879\u76EE\u4E2D\u7684\u9875\u9762\u6570\u5E76\u51B3\u5B9A\u662F\u5426\u542F\u7528\u5B83\u3002</p></div><h2 id="\u535A\u5BA2\u5206\u7C7B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u535A\u5BA2\u5206\u7C7B\u914D\u7F6E" aria-hidden="true">#</a> \u535A\u5BA2\u5206\u7C7B\u914D\u7F6E</h2><p>\u535A\u5BA2\u5206\u7C7B\u914D\u7F6E\u5E94\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6BCF\u4E00\u9879\u63A7\u5236\u4E00\u4E2A\u5206\u7C7B\u89C4\u5219\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BlogCategoryOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u552F\u4E00\u7684\u5206\u7C7B\u540D\u79F0
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4ECE\u9875\u9762\u4E2D\u83B7\u53D6\u5206\u7C7B\u7684\u51FD\u6570
   */</span>
  <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u9875\u9762\u6392\u5E8F\u5668
   */</span>
  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u5F85\u6CE8\u518C\u7684\u9875\u9762\u8DEF\u5F84\u56FE\u6848
   *
   * <span class="token keyword">@description</span> \`:key\` \u5C06\u4F1A\u88AB\u66FF\u6362\u4E3A\u539F key \u7684 slugify \u7ED3\u679C
   *
   * <span class="token keyword">@default</span> \`/:key/\`
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u9875\u9762\u5E03\u5C40\u7EC4\u4EF6\u540D\u79F0
   *
   * <span class="token keyword">@default</span> &#39;Layout&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Front Matter \u914D\u7F6E
   */</span>
  frontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u5F85\u6CE8\u518C\u7684\u9879\u76EE\u9875\u9762\u8DEF\u5F84\u56FE\u6848\u6216\u81EA\u5B9A\u4E49\u51FD\u6570
   *
   * <span class="token keyword">@description</span> \u5F53\u586B\u5165\u5B57\u7B26\u4E32\u7684\u65F6\u5019, \`:key\` \u548C \`:name\` \u4F1A\u88AB\u81EA\u52A8\u66FF\u6362\u4E3A\u539F\u59CB\u7684 key\u3001name \u7684 slugify \u7ED3\u679C\u3002
   *
   * <span class="token keyword">@default</span> \`/:key/:name/\`
   */</span>
  itemPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u9879\u76EE\u9875\u9762\u5E03\u5C40\u7EC4\u4EF6\u540D\u79F0
   *
   * <span class="token keyword">@default</span> &#39;Layout&#39;
   */</span>
  itemLayout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u9879\u76EE Front Matter \u914D\u7F6E
   */</span>
  itemFrontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    localePath<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u535A\u5BA2\u7C7B\u578B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u535A\u5BA2\u7C7B\u578B\u914D\u7F6E" aria-hidden="true">#</a> \u535A\u5BA2\u7C7B\u578B\u914D\u7F6E</h2><p>\u535A\u5BA2\u7C7B\u578B\u914D\u7F6E\u5E94\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6BCF\u4E00\u9879\u63A7\u5236\u4E00\u4E2A\u7C7B\u578B\u89C4\u5219\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BlogTypeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u552F\u4E00\u7684\u7C7B\u578B\u540D\u79F0
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4E00\u4E2A\u8FC7\u6EE4\u51FD\u6570\u6765\u51B3\u5B9A\u9875\u9762\u662F\u5426\u6EE1\u8DB3\u6B64\u7C7B\u578B
   */</span>
  <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u9875\u9762\u6392\u5E8F\u5668
   */</span>
  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u5F85\u6CE8\u518C\u7684\u9875\u9762\u8DEF\u5F84
   *
   * <span class="token keyword">@default</span> &#39;/:key/&#39;
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u9875\u9762\u5E03\u5C40\u7EC4\u4EF6\u540D\u79F0
   *
   * <span class="token keyword">@default</span> &#39;Layout&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Front Matter \u914D\u7F6E
   */</span>
  frontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u7EC4\u5408\u5F0F-api" tabindex="-1"><a class="header-anchor" href="#\u53EF\u7EC4\u5408\u5F0F-api" aria-hidden="true">#</a> \u53EF\u7EC4\u5408\u5F0F API</h2><ul><li><p>\u535A\u5BA2\u5206\u7C7B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">const</span> useBlogCategory<span class="token operator">:</span> <span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComputedRef<span class="token operator">&lt;</span>BlogCategoryData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u6570 <code>key</code> \u4E3A\u9700\u8981\u83B7\u53D6\u7684\u952E\u540D\u3002\u5982\u679C\u672A\u4F20\u5165 key\uFF0C\u4F1A\u5C1D\u8BD5\u4F7F\u7528\u4E0E\u5F53\u524D\u8DEF\u5F84\u5339\u914D\u7684 key\u3002</p></li><li><p>\u535A\u5BA2\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">const</span> useBlogType<span class="token operator">:</span> <span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComputedRef<span class="token operator">&lt;</span>BlogTypeData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u6570 <code>key</code> \u4E3A\u9700\u8981\u83B7\u53D6\u7684\u952E\u540D\u3002\u5982\u679C\u672A\u4F20\u5165 key\uFF0C\u4F1A\u5C1D\u8BD5\u4F7F\u7528\u4E0E\u5F53\u524D\u8DEF\u5F84\u5339\u914D\u7684 key\u3002</p></li></ul><p>\u8BE6\u7EC6\u7684\u8FD4\u56DE\u503C\u5982\u4E0B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Article<span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** \u6587\u7AE0\u8DEF\u5F84 */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u6587\u7AE0\u4FE1\u606F */</span>
  info<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BlogCategoryData<span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** \u5206\u7C7B\u8DEF\u5F84 */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u4EC5\u5F53\u5F53\u524D\u8DEF\u5F84\u548C\u67D0\u4E2A\u5B50\u9879\u76EE\u5339\u914D\u65F6\u53EF\u7528
   */</span>
  currentItems<span class="token operator">?</span><span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/** \u5206\u7C7B\u6620\u5C04 */</span>
  map<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** \u5F53\u524D\u5206\u7C7B\u4E0B\u5168\u5C40\u552F\u4E00\u7684 key */</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/** \u5BF9\u5E94\u952E\u503C\u7684\u5206\u7C7B\u8DEF\u5F84 */</span>
      path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      <span class="token doc-comment comment">/** \u5BF9\u5E94\u952E\u503C\u7684\u9879\u76EE */</span>
      items<span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BlogTypeData<span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** \u7C7B\u522B\u8DEF\u5F84 */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/** \u5F53\u524D\u7C7B\u522B\u4E0B\u7684\u9879\u76EE */</span>
  items<span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),o=[p];function l(i,c){return s(),a("div",null,o)}var u=n(t,[["render",l],["__file","config.html.vue"]]);export{u as default};
