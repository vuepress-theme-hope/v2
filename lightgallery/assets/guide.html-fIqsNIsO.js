import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as l,g as s,a as i,o as n}from"./app-kuC7OKse.js";const r={};function h(p,e){return n(),a("div",null,[e[0]||(e[0]=l(`<p>此插件会使用 Lightgallery 让正文内的图片在点击时进入浏览模式浏览。</p><div class="hint-container caution"><p class="hint-container-title">许可证限制</p><p>请注意，虽然这个插件是在 MIT 协议下发布的，但我们目前正在通过 VuePress Theme Hope 的内置 <a href="https://www.lightgalleryjs.com/license/" target="_blank" rel="noopener noreferrer">lightgallery 组织许可</a> 来实现这一点，并且 如果你将其用于非商业用途，我们愿意承认你是我们组织的成员。</p><p>组织许可证在非商业用途下对你没有限制，因为它支持无限的开发人员和无限的产品。你可以在任何许可下使用此插件安全地发布你的文档或项目。</p><p>但是请注意组织许可证只能用于单个商业产品。如果你想要以商业用途使用本插件，由于 lightgallery 是在 <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer">GNU GPL license v3</a> 下，所以你必须在没有许可证下将你的源代码置于 <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer">GNU GPL license v3</a> 协议下，或者考虑 <a href="https://www.lightgalleryjs.com/license/" target="_blank" rel="noopener noreferrer">购买许可证</a> 以规避可能产生的问题。</p><p>你被警告了！</p><p>如果你对此表示担忧，你可以考虑使用 <a href="https://ecosystem.vuejs.press/zh/plugins/features/photo-swipe.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-photo-swipe</a>。</p></div><h2 id="自定义-lightgallery-选项" tabindex="-1"><a class="header-anchor" href="#自定义-lightgallery-选项"><span>自定义 LightGallery 选项</span></a></h2><p>你可以通过在<a href="https://vuejs.press/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">客户端配置文件</a>中导入和调用 <code>defineLightGalleryConfig</code> 来将选项传递给 <a href="https://www.lightgalleryjs.com/" target="_blank" rel="noopener noreferrer"><code>lightgallery</code></a>：</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/client.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineLightGalleryConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-plugin-lightgallery/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">defineLightGalleryConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 在此设置 lightgallery 选项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div><h2 id="操作延迟" tabindex="-1"><a class="header-anchor" href="#操作延迟"><span>操作延迟</span></a></h2><p>如果你的主题在页面切换时会添加动画，你可能需要延迟 lightgallery 重新查找页面图片的时间点。你可以通过 <code>delay</code> 选项来配置这一延迟，默认的值为 <code>800</code> (单位为毫秒)。</p><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示"><span>演示</span></a></h2>`,8)),s(" markdownlint-disable "),e[1]||(e[1]=i("div",{class:"image-preview"},[i("img",{src:"//theme-hope-assets.vuejs.press/files/img/1.jpg"}),i("img",{src:"//theme-hope-assets.vuejs.press/files/img/2.jpg"}),i("img",{src:"//theme-hope-assets.vuejs.press/files/img/3.jpg"})],-1)),s(" markdownlint-restore ")])}const k=t(r,[["render",h],["__file","guide.html.vue"]]),d=JSON.parse('{"path":"/zh/guide.html","title":"指南","lang":"zh-CN","frontmatter":{"title":"指南","icon":"lightbulb","description":"此插件会使用 Lightgallery 让正文内的图片在点击时进入浏览模式浏览。 许可证限制 请注意，虽然这个插件是在 MIT 协议下发布的，但我们目前正在通过 VuePress Theme Hope 的内置 lightgallery 组织许可 来实现这一点，并且 如果你将其用于非商业用途，我们愿意承认你是我们组织的成员。 组织许可证在非商业用途下对你...","head":[["link",{"rel":"canonical","href":"https://plugin-lightgallery.vuejs.press/zh/guide.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.github.io/v2/lightgallery/guide.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/lightgallery/zh/guide.html"}],["meta",{"property":"og:site_name","content":"LightGallery 插件"}],["meta",{"property":"og:title","content":"指南"}],["meta",{"property":"og:description","content":"此插件会使用 Lightgallery 让正文内的图片在点击时进入浏览模式浏览。 许可证限制 请注意，虽然这个插件是在 MIT 协议下发布的，但我们目前正在通过 VuePress Theme Hope 的内置 lightgallery 组织许可 来实现这一点，并且 如果你将其用于非商业用途，我们愿意承认你是我们组织的成员。 组织许可证在非商业用途下对你..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-30T13:40:11.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T13:40:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-30T13:40:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"自定义 LightGallery 选项","slug":"自定义-lightgallery-选项","link":"#自定义-lightgallery-选项","children":[]},{"level":2,"title":"操作延迟","slug":"操作延迟","link":"#操作延迟","children":[]},{"level":2,"title":"演示","slug":"演示","link":"#演示","children":[]}],"git":{"createdTime":1644558395000,"updatedTime":1717076411000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":12}]},"readingTime":{"minutes":1.8,"words":541},"filePathRelative":"zh/guide.md","localizedDate":"2022年2月11日","autoDesc":true}');export{k as comp,d as data};
