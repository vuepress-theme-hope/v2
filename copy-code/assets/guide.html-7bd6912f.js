import{_ as a,W as e,X as t,$ as o,a0 as n,Y as p,Z as c,a1 as i,E as l}from"./framework-eb069dea.js";const u={},r=i(`<p>此插件会自动添加复制按钮到每个代码块的右下角。</p><h2 id="代码块选择" tabindex="-1"><a class="header-anchor" href="#代码块选择" aria-hidden="true">#</a> 代码块选择</h2><p>插件默认会按照默认主题的选择器选中代码块，如果你在使用第三方主题，你可以将一个或多个 CSS 选择器设置给 <code>selector</code> 选项。</p><h2 id="按钮展示" tabindex="-1"><a class="header-anchor" href="#按钮展示" aria-hidden="true">#</a> 按钮展示</h2><p>默认情况下，按钮仅在桌面模式显示，如果你需要在移动端展示这个按钮，请将 <code>showInMobile</code> 设置为 <code>true</code>。</p><h2 id="复制提示" tabindex="-1"><a class="header-anchor" href="#复制提示" aria-hidden="true">#</a> 复制提示</h2><p>在用户点击复制按钮后，屏幕上会显示一个复制成功的提示。默认的提示时长为 2000ms，如果你需要更改这个时长，请设置 <code>duration</code>(单位 ms)，如果你不需要这个提示，请将 <code>duration</code> 设置为 <code>0</code>。</p><h2 id="纯净模式" tabindex="-1"><a class="header-anchor" href="#纯净模式" aria-hidden="true">#</a> 纯净模式</h2><p>默认情况下插件会展示一个较大的蓝色按钮，如果你希望让按钮和提示没有那么“显眼”，你可以添加 <code>pure: true</code> 选项。</p><h2 id="多语言配置" tabindex="-1"><a class="header-anchor" href="#多语言配置" aria-hidden="true">#</a> 多语言配置</h2><p>你可以通过 <code>locales</code> 来新增特定语言的多语言配置或修改已支持语言的配置。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> copyCodePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-copy-code2&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这是一个支持的语言</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/xx/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这是一个没有收到插件支持的语言</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;mm-NN&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">copyCodePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      locales<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 覆盖复制按钮标签文字</span>
          copy<span class="token operator">:</span> <span class="token string">&quot;复制此段代码&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token string-property property">&quot;/xx/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 在这里完整设置 \`mm-NN\` 的多语言配置</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function d(k,v){const s=l("RouterLink");return e(),t("div",null,[r,o("p",null,[n("For specific options, see "),p(s,{to:"/zh/config.html#locales"},{default:c(()=>[n("Config → Locale Settings")]),_:1}),n(".")])])}const h=a(u,[["render",d],["__file","guide.html.vue"]]);export{h as default};
