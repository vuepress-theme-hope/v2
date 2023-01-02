import{_ as t,V as i,W as o,Z as s,$ as n,X as p,a0 as a,E as l}from"./framework-e1acd37d.js";const c={},r=a(`<h2 id="indexcontent" tabindex="-1"><a class="header-anchor" href="#indexcontent" aria-hidden="true">#</a> indexContent</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否索引内容。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>默认情况下，插件只会索引页面的标题和摘要以及你的自定义索引项，不会索引页面的正文内容。如果需要索引页面的正文内容，可以将该选项设置为 <code>true</code>。</p></div><h2 id="customfields" tabindex="-1"><a class="header-anchor" href="#customfields" aria-hidden="true">#</a> customFields</h2><ul><li><p>类型: <code>SearchProCustomFieldOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchProCustomFieldOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 自定义项目的获取器
   */</span>
  <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 展示的内容
   *
   * <span class="token keyword">@description</span> \`$content\` 会被 \`getter\` 返回的内容替换
   *
   * <span class="token keyword">@default</span> \`$content\`
   */</span>
  formatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>自定义搜索项目。</p><div class="hint-container tip"><p class="hint-container-title">例子</p><p>假如你的主题在 Frontmatter 中使用 category 和 tag 标记文章的分类和标签，你可以使用以下配置：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 我们假定你在使用如下多语言</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="hotkeys" tabindex="-1"><a class="header-anchor" href="#hotkeys" aria-hidden="true">#</a> hotKeys</h2><ul><li><p>类型: <code>SearchProHotKeyOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchProHotKeyOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 热键的 \`event.key\` 值
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否同时按下 \`event.altKey\`
   *
   * <span class="token keyword">@default</span> false
   */</span>
  alt<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否同时按下 \`event.ctrlKey\`
   *
   * <span class="token keyword">@default</span> false
   */</span>
  ctrl<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否同时按下 \`event.shiftKey\`
   *
   * <span class="token keyword">@default</span> false
   */</span>
  shift<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>[{key: &#39;k&#39;, ctrl: true}]</code></p></li></ul>`,10),u={href:"http://keycode.info/",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>当热键被按下时，搜索框的输入框会被聚焦，设置为空数组以禁用热键。</p><h2 id="historycount" tabindex="-1"><a class="header-anchor" href="#historycount" aria-hidden="true">#</a> historyCount</h2><ul><li>类型: <code>number</code></li><li>默认值: <code>5</code></li></ul><p>存储历史项目的最大数量</p><h2 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h2><ul><li>类型: <code>number</code></li><li>默认值: <code>300</code></li></ul><p>结束输入到开始搜索的延时</p><div class="hint-container note"><p class="hint-container-title">注</p><p>有大量内容时，进行客户端搜素可能会很慢，在这种情况下你可能需要增加此值来确保开始搜索时用户已完成输入。</p></div><h2 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h2><ul><li>类型: <code>boolean</code></li><li>默认值: 是否使用 <code>--debug</code> 标记</li></ul><p>是否在开发服务器中中启用实时热重载。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>它是默认禁用的，因为此功能会对内容巨大的站点产生极大性能影响，并且在编辑 Markdown 时剧烈增加热重载的速度。</p><p>通常情况下，在开发中，用户并不需要实时更新索引数据库。</p></div><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><ul><li><p>类型: <code>SearchProLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \`vuepress-plugin-search-pro\` 插件的多语言配置
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">SearchProLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 搜索框占位符文字
   */</span>
  placeholder<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 搜素文字
   */</span>
  search<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 关闭文字
   */</span>
  close<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 选择提示
   */</span>
  select<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 选择提示
   */</span>
  navigate<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 关闭提示
   */</span>
  exit<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 加载提示
   */</span>
  loading<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 无结果提示
   */</span>
  empty<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SearchProLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> SearchProLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>搜索插件的多语言配置。</p>`,15);function v(k,m){const e=l("ExternalLinkIcon");return i(),o("div",null,[r,s("p",null,[n("指定热键的 "),s("a",u,[n("event.key"),p(e)]),n("。")]),d])}const h=t(c,[["render",v],["__file","config.html.vue"]]);export{h as default};
