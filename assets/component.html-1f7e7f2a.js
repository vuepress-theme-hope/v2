import{a3 as c,Z as i,_ as u,a4 as l,a1 as n,a2 as s,$ as a,a0 as r,a5 as e,q as t}from"./framework-f408d5b9.js";const d={},k=n("p",null,"本教程将指引你如何在 VuePress 项目中使用 Vue 组件与 Vue 语法。",-1),m=n("h2",{id:"全局导入-vue-组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#全局导入-vue-组件","aria-hidden":"true"},"#"),s(" 全局导入 Vue 组件")],-1),g=n("h3",{id:"通过-vuepress-plugin-register-components-注册组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#通过-vuepress-plugin-register-components-注册组件","aria-hidden":"true"},"#"),s(" 通过 "),n("code",null,"@vuepress/plugin-register-components"),s(" 注册组件")],-1),v=n("p",null,[s("你可以通过 "),n("code",null,"@vuepress/plugin-register-components"),s(" 插件来自动注册组件。")],-1),h={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html",target:"_blank",rel:"noopener noreferrer"},_=e(`<h3 id="通过-clientconfigfile-注册" tabindex="-1"><a class="header-anchor" href="#通过-clientconfigfile-注册" aria-hidden="true">#</a> 通过 ClientConfigFile 注册</h3><p>你可以通过创建 <code>.vuepress/client.ts</code> 手动注册组件。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&quot;./MyComponent.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">enhance</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;MyComponent&quot;</span><span class="token punctuation">,</span> MyComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="在-markdown-中使用-vue-语法与组件" tabindex="-1"><a class="header-anchor" href="#在-markdown-中使用-vue-语法与组件" aria-hidden="true">#</a> 在 Markdown 中使用 Vue 语法与组件</h2><p>你可以直接在 Markdown 中使用 Vue 语法。</p>`,5),f={class:"hint-container info"},w=n("p",{class:"hint-container-title"},"相关信息",-1),y=e(`<p>如果你需要在 Markdown 中导入 Vue 组件，请注意你不能使用相对路径进行导入，也不能书写多个 <code>&lt;script&gt;</code> 块。</p><div class="hint-container info"><p class="hint-container-title">Markdown 与 Vue SFC</p><p>每一个 Markdown 文件，首先都会编译为 HTML ，然后转换为一个 Vue 单文件组件 (SFC) 。换句话说，你可以像写 Vue SFC 一样来写 Markdown 文件:</p><p><code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code> 标签会直接被当作 Vue SFC 中的标签。换句话说，它们是从 <code>&lt;template&gt;</code> 标签中提升到了 SFC 的顶层。 所有 <code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code> 标签的以外的内容，会先被编译为 HTML ，然后被当作 Vue SFC 的 <code>&lt;template&gt;</code> 标签。</p><p>由于 Vue 单文件组件只能包含一个 <code>&lt;script&gt;</code> 标签，你应该避免在 VuePress Markdown 中使用多于一个 <code>&lt;script&gt;</code> 标签。</p><p>另外由于 Markdown 会被转换为缓存目录下的 Vue 单文件组件，任何相对路径的导入会在 Vue SFC 中失效。</p></div><p>为了正确导入自己的组件，你需要为它们创建别名，你可以通过 <code>alias</code> 选项实现这一点:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  alias<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@MyComponent&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;components/MyComponent.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
import MyComponent from &quot;@MyComponent&quot;;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>这固然复杂一些，但是如果你所使用的组件仅在这个页面使用，这样导入更具有优势:</p><ul><li>全局导入意味着组件代码需要在 VuePress 初始化，也就是访问首个页面时载入</li><li>在 Markdown 中导入会使得组件代码包含在页面代码中，这样它仅会在访问这个页面时被导入</li></ul>`,7);function C(V,M){const o=t("ExternalLinkIcon"),p=t("RouterLink");return i(),u("div",null,[k,l(" more "),m,g,v,n("p",null,[s("插件的使用方法详见 "),n("a",h,[s("官方文档"),a(o)]),s("。")]),_,n("div",f,[w,n("p",null,[s("关于具体的使用方式，详见 "),a(p,{to:"/zh/cookbook/vuepress/markdown.html#%E5%9C%A8-markdown-%E4%B8%AD%E4%BD%BF%E7%94%A8-vue"},{default:r(()=>[s("VuePress → Markdown")]),_:1})])]),y])}const q=c(d,[["render",C],["__file","component.html.vue"]]);export{q as default};
