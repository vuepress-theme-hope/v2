import{_ as l,W as p,X as i,$ as n,a0 as s,Y as e,Z as t,a1 as o,E as c}from"./framework-eb069dea.js";const r={},d=n("h2",{id:"插件选项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#插件选项","aria-hidden":"true"},"#"),s(" 插件选项")],-1),u=n("h3",{id:"getinfo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getinfo","aria-hidden":"true"},"#"),s(" getInfo")],-1),k=n("li",null,[s("类型: "),n("code",null,"(page: Page) => Record<string, unknown>")],-1),m=n("li",null,"必填: 否",-1),v=n("p",null,"获取文章信息的函数。",-1),b=n("p",null,"获取到的信息会被稍后注入至路由元数据，以便你可以在客户端中通过组合式 API 获取。",-1),g=n("h3",{id:"filter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#filter","aria-hidden":"true"},"#"),s(" filter")],-1),h=n("li",null,[s("类型: "),n("code",null,"(page: Page) => boolean")],-1),_=n("li",null,[s("默认值: "),n("code",null,"(page) => Boolean(page.filePathRelative) && !page.frontmatter.home")],-1),y=n("p",null,"页面过滤器，此函数用于鉴别页面是否作为文章。",-1),f=n("p",null,"默认情况下，所有从 Markdown 源文件中生成的非主页页面，会被作为文章。",-1),E=n("h3",{id:"category",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#category","aria-hidden":"true"},"#"),s(" category")],-1),B=n("li",null,[s("类型: "),n("code",null,"BlogCategoryOptions[]")],-1),x=n("li",null,"必填: 否",-1),A=n("p",null,[s("博客分类配置，详见 "),n("a",{href:"#%E5%8D%9A%E5%AE%A2%E5%88%86%E7%B1%BB%E9%85%8D%E7%BD%AE"},"博客分类配置"),s("。")],-1),w=n("h3",{id:"type",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#type","aria-hidden":"true"},"#"),s(" type")],-1),R=n("li",null,[s("类型: "),n("code",null,"BlogTypeOptions[]")],-1),P=n("li",null,"必填: 否",-1),T=o('<p>博客分类配置，详见 <a href="#%E5%8D%9A%E5%AE%A2%E7%B1%BB%E5%9E%8B%E9%85%8D%E7%BD%AE">博客类型配置</a>。</p><h3 id="slugify" tabindex="-1"><a class="header-anchor" href="#slugify" aria-hidden="true">#</a> slugify</h3><ul><li>类型: <code>(name: string) =&gt; string</code></li><li>默认值: <code>(name) =&gt; name.replace(/ _/g, &#39;-&#39;).replace(/[:?*|\\\\/&lt;&gt;]/g, &quot;&quot;).toLowerCase()</code></li></ul><p>Slugify 函数，用于转换 key 在路由中注册的形式。</p><h3 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt" aria-hidden="true">#</a> excerpt</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否生成摘要。</p><h3 id="excerptseparator" tabindex="-1"><a class="header-anchor" href="#excerptseparator" aria-hidden="true">#</a> excerptSeparator</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&lt;!-- more --&gt;</code></li></ul><p>摘要分隔符。</p><h3 id="excerptlength" tabindex="-1"><a class="header-anchor" href="#excerptlength" aria-hidden="true">#</a> excerptLength</h3>',11),F=n("li",null,[s("类型: "),n("code",null,"number")],-1),C=n("li",null,[s("默认值: "),n("code",null,"300")],-1),D=n("p",null,"自动生成的摘要的长度。",-1),L=n("div",{class:"hint-container note"},[n("p",{class:"hint-container-title"},"注"),n("p",null,[s("摘要的长度会尽可能的接近这个值。如果设置为 "),n("code",null,"0"),s("，意味着不自动生成摘要。")])],-1),z=n("h3",{id:"excerptfilter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#excerptfilter","aria-hidden":"true"},"#"),s(" excerptFilter")],-1),I=n("li",null,[s("类型: "),n("code",null,"(page: Page) => boolean")],-1),M=n("li",null,[s("默认值: "),n("code",null,"filter"),s(" 选项")],-1),N=n("p",null,"页面过滤器，此函数用于鉴别插件是否需要生成摘要。",-1),q=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,[s("你可以使用此函数来跳过你不需要生成摘要的页面。例如：如果用户在 frontmatter 中设置了 "),n("code",null,"excerpt"),s(" 或 "),n("code",null,"description"),s("，你可能希望直接使用它们。")])],-1),O=n("h3",{id:"iscustomelement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#iscustomelement","aria-hidden":"true"},"#"),s(" isCustomElement")],-1),S=n("li",null,[s("类型: "),n("code",null,"(tagName: string) => boolean")],-1),V=n("li",null,[s("默认值: "),n("code",null,"() => false")],-1),W=o(`<p>被认为是自定义元素的标签。</p><p>用于判断一个标签是否是自定义元素，因为在摘要中，所有的 vue 组件都会被移除。</p><h3 id="metascope" tabindex="-1"><a class="header-anchor" href="#metascope" aria-hidden="true">#</a> metaScope</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;_blog&quot;</code></li></ul><p>注入文章信息至路由元数据时使用的键名。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>设置为空字符串会直接注入路由元数据 (而不是一个键下)。</p></div><h3 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h3><ul><li>类型: <code>boolean</code></li><li>默认值: 是否使用 <code>--debug</code> 标记</li></ul><p>是否在开发服务器中中启用实时热重载。</p><div class="hint-container note"><p class="hint-container-title">致主题开发者</p><p>默认情况下它是禁用的，因为它确实会对具有很多分类和类别的站点产生性能影响，并且在编辑 Markdown 时会减慢热重载的速度。</p><p>如果用户正在添加或组织类别或标签，你可以告诉他们启用此功能，其余的时间最好禁用它。</p><p>此外，你可以尝试检测用户项目中的页面数并决定是否启用它。</p></div><h2 id="博客分类配置" tabindex="-1"><a class="header-anchor" href="#博客分类配置" aria-hidden="true">#</a> 博客分类配置</h2><p>博客分类配置应为一个数组，每一项控制一个分类规则。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BlogCategoryOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 唯一的分类名称
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 从页面中获取分类的函数
   */</span>
  <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 页面排序器
   */</span>
  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 待注册的页面路径图案
   *
   * <span class="token keyword">@description</span> \`:key\` 将会被替换为原 key 的 slugify 结果
   *
   * <span class="token keyword">@default</span> \`/:key/\`
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 页面布局组件名称
   *
   * <span class="token keyword">@default</span> &#39;Layout&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Front Matter 配置
   */</span>
  frontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 待注册的项目页面路径图案或自定义函数
   *
   * <span class="token keyword">@description</span> 当填入字符串的时候, \`:key\` 和 \`:name\` 会被自动替换为原始的 key、name 的 slugify 结果。
   *
   * <span class="token keyword">@default</span> \`/:key/:name/\`
   */</span>
  itemPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 项目页面布局组件名称
   *
   * <span class="token keyword">@default</span> &#39;Layout&#39;
   */</span>
  itemLayout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 项目 Front Matter 配置
   */</span>
  itemFrontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    localePath<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="博客类型配置" tabindex="-1"><a class="header-anchor" href="#博客类型配置" aria-hidden="true">#</a> 博客类型配置</h2><p>博客类型配置应为一个数组，每一项控制一个类型规则。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BlogTypeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 唯一的类型名称
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 一个过滤函数来决定页面是否满足此类型
   */</span>
  <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 页面排序器
   */</span>
  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 待注册的页面路径
   *
   * <span class="token keyword">@default</span> &#39;/:key/&#39;
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 页面布局组件名称
   *
   * <span class="token keyword">@default</span> &#39;Layout&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Front Matter 配置
   */</span>
  frontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可组合式-api" tabindex="-1"><a class="header-anchor" href="#可组合式-api" aria-hidden="true">#</a> 可组合式 API</h2><p>你可以从 <code>vuepress-plugin-blog2/client</code> 导入下列 API:</p><ul><li><p>博客分类</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">const</span> useBlogCategory<span class="token operator">:</span> <span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComputedRef<span class="token operator">&lt;</span>BlogCategoryData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>参数 <code>key</code> 为需要获取的键名。如果未传入 key，会尝试使用与当前路径匹配的 key。</p></li><li><p>博客类型</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">const</span> useBlogType<span class="token operator">:</span> <span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComputedRef<span class="token operator">&lt;</span>BlogTypeData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>参数 <code>key</code> 为需要获取的键名。如果未传入 key，会尝试使用与当前路径匹配的 key。</p></li></ul><p>详细的返回值如下:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Article<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 文章路径 */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** 文章信息 */</span>
  info<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BlogCategoryData<span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 分类路径 */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 仅当当前路径和某个子项目匹配时可用
   */</span>
  currentItems<span class="token operator">?</span><span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/** 分类映射 */</span>
  map<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 当前分类下全局唯一的 key */</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/** 对应键值的分类路径 */</span>
      path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      <span class="token doc-comment comment">/** 对应键值的项目 */</span>
      items<span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BlogTypeData<span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 类别路径 */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/** 当前类别下的项目 */</span>
  items<span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function X(Y,Z){const a=c("RouterLink");return p(),i("div",null,[d,u,n("ul",null,[k,m,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[e(a,{to:"/zh/guide.html#%E6%94%B6%E9%9B%86%E6%96%87%E7%AB%A0%E5%B9%B6%E7%94%9F%E6%88%90%E4%BF%A1%E6%81%AF"},{default:t(()=>[s("指南 → 收集文章并生成信息")]),_:1})])])])]),v,b,g,n("ul",null,[h,_,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[e(a,{to:"/zh/guide.html#%E6%94%B6%E9%9B%86%E6%96%87%E7%AB%A0%E5%B9%B6%E7%94%9F%E6%88%90%E4%BF%A1%E6%81%AF"},{default:t(()=>[s("指南 → 收集文章并生成信息")]),_:1})])])])]),y,f,E,n("ul",null,[B,x,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[e(a,{to:"/zh/guide.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%88%AB%E5%92%8C%E7%B1%BB%E5%9E%8B"},{default:t(()=>[s("指南 → 自定义类别和类型")]),_:1})])])])]),A,w,n("ul",null,[R,P,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[e(a,{to:"/zh/guide.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%88%AB%E5%92%8C%E7%B1%BB%E5%9E%8B"},{default:t(()=>[s("指南 → 自定义类别和类型")]),_:1})])])])]),T,n("ul",null,[F,C,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[e(a,{to:"/zh/guide.html#%E6%91%98%E8%A6%81%E7%94%9F%E6%88%90"},{default:t(()=>[s("指南 → 摘要生成")]),_:1})])])])]),D,L,z,n("ul",null,[I,M,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[e(a,{to:"/zh/guide.html#%E6%91%98%E8%A6%81%E7%94%9F%E6%88%90"},{default:t(()=>[s("指南 → 摘要生成")]),_:1})])])])]),N,q,O,n("ul",null,[S,V,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[e(a,{to:"/zh/guide.html#%E6%91%98%E8%A6%81%E7%94%9F%E6%88%90"},{default:t(()=>[s("指南 → 摘要生成")]),_:1})])])])]),W])}const j=l(r,[["render",X],["__file","config.html.vue"]]);export{j as default};
