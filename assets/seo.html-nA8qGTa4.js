import{aj as n,ak as l,ao as t,ap as s,aq as h,as as p,am as i,an as r,ar as d,al as o}from"./app-3Fu3LGel.js";const k={};function c(g,e){const a=d("RouteLink");return o(),l("div",null,[e[3]||(e[3]=t("p",null,[t("code",null,"vuepress-theme-hope"),s(" 通过内置 "),t("a",{href:"https://ecosystem.vuejs.press/zh/plugins/seo/seo/",target:"_blank",rel:"noopener noreferrer"},[t("code",null,"@vuepress/plugin-seo")]),s(" 为提供 SEO 增强功能。")],-1)),t("p",null,[e[1]||(e[1]=s("为了使插件能够更好的工作，你可能需要查看一下 ")),h(a,{to:"/zh/config/frontmatter/info.html"},{default:p(()=>e[0]||(e[0]=[s("页面配置")])),_:1}),e[2]||(e[2]=s(" 并合理的配置它们。"))]),e[4]||(e[4]=i('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.seo</code> 作为插件选项提供给 <code>@vuepress/plugin-seo</code>。</p></div><p>插件会通过向网站 <code>&lt;head&gt;</code> 注入标签，让你的网站完全支持 <a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">开放内容协议 OGP</a> 和 <a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a>，以全面增强站点的搜索引擎优化性。</p><p>如果不需要这个插件，请设置在主题选项中设置 <code>plugins.seo: false</code>。</p>',3)),r(" more "),e[5]||(e[5]=i(`<h2 id="开箱即用" tabindex="-1"><a class="header-anchor" href="#开箱即用"><span>开箱即用</span></a></h2><p>插件开箱即用，在不做任何配置的情况下，会尽可能通过页面内容，提取对应的信息补全 OGP 与 JSON-LD 所需的必要标签。</p><p>默认情况下，插件会读取站点配置、主题配置与页面的 frontmatter 来尽可能自动生成。诸如站点名称，页面标题，页面类型，写作日期，最后更新日期，文章标签均会自动生成。</p><h3 id="默认的-ogp-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-ogp-生成逻辑"><span>默认的 OGP 生成逻辑</span></a></h3><table><thead><tr><th style="text-align:center;">属性名称</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>og:url</code></td><td style="text-align:center;"><code>themeConfig.hostname</code> + <code>path</code></td></tr><tr><td style="text-align:center;"><code>og:site_name</code></td><td style="text-align:center;"><code>siteConfig.title</code></td></tr><tr><td style="text-align:center;"><code>og:title</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>og:description</code></td><td style="text-align:center;"><code>page.frontmatter.description</code> || 自动生成 (当插件选项中的 <code>autoDescription</code> 为 <code>true</code> 时)</td></tr><tr><td style="text-align:center;"><code>og:type</code></td><td style="text-align:center;"><code>&quot;article&quot;</code></td></tr><tr><td style="text-align:center;"><code>og:image</code></td><td style="text-align:center;"><code>themeConfig.hostname</code> + <code>page.frontmatter.image</code> || 页面的第一张图片|| 插件选项的 <code>fallbackImage</code></td></tr><tr><td style="text-align:center;"><code>og:updated_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>og:locale</code></td><td style="text-align:center;"><code>page.lang</code></td></tr><tr><td style="text-align:center;"><code>og:locale:alternate</code></td><td style="text-align:center;"><code>themeConfig.locales</code> 包含的其他语言</td></tr><tr><td style="text-align:center;"><code>twitter:card</code></td><td style="text-align:center;"><code>&quot;summary_large_image&quot;</code> (仅在找到图片时)</td></tr><tr><td style="text-align:center;"><code>twitter:image:alt</code></td><td style="text-align:center;"><code>page.title</code> (仅在找到图片时)</td></tr><tr><td style="text-align:center;"><code>article:author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>themeConfig.author</code></td></tr><tr><td style="text-align:center;"><code>article:tag</code></td><td style="text-align:center;"><code>page.frontmatter.tags</code> || <code>page.frontmatter.tag</code></td></tr><tr><td style="text-align:center;"><code>article:published_time</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>article:modified_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr></tbody></table><h3 id="默认的-json-ld-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-json-ld-生成逻辑"><span>默认的 JSON-LD 生成逻辑</span></a></h3><table><thead><tr><th style="text-align:center;">属性名</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>@context</code></td><td style="text-align:center;"><code>&quot;https://schema.org&quot;</code></td></tr><tr><td style="text-align:center;"><code>@type</code></td><td style="text-align:center;"><code>&quot;NewsArticle&quot;</code></td></tr><tr><td style="text-align:center;"><code>headline</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>image</code></td><td style="text-align:center;">页面中的图片|| <code>themeConfig.hostname</code> + <code>page.frontmatter.image</code></td></tr><tr><td style="text-align:center;"><code>datePublished</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>dateModified</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>themeConfig.author</code></td></tr></tbody></table><h2 id="直接添加-head-标签" tabindex="-1"><a class="header-anchor" href="#直接添加-head-标签"><span>直接添加 head 标签</span></a></h2><p>你可以在页面的 frontmatter 中配置 <code>head</code> 选项，自主添加特定标签到页面 <code>&lt;head&gt;</code> 以增强 SEO。</p><p>如:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">meta</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">keywords</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SEO plugin</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div><p>会自动注入 <code>&lt;meta name=&quot;keywords&quot; content=&quot;SEO plugin&quot; /&gt;</code>。</p><h2 id="自定义生成过程" tabindex="-1"><a class="header-anchor" href="#自定义生成过程"><span>自定义生成过程</span></a></h2><p>插件支持让你完全控制生成逻辑。</p><h3 id="页面类型" tabindex="-1"><a class="header-anchor" href="#页面类型"><span>页面类型</span></a></h3><p>对于大多数页面，基本只有文章和网页两种类型，所以插件提供了 <code>isArticle</code> 选项让你提供辨别文章的逻辑。</p><p>选项接受一个 <code>(page: Page) =&gt; boolean</code> 格式的函数，默认情况下从 Markdown 文件生成的非主页页面都会被视为文章。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果某个网页的确符合图书、音乐之类的“冷门”类型，你可以通过设置下方三个选项处理它们。</p></div><h3 id="ogp" tabindex="-1"><a class="header-anchor" href="#ogp"><span>OGP</span></a></h3><p>你可以在主题选项中通过 <code>plugins.seo.ogp</code> 传入一个函数来按照你的需要修改默认 OGP 对象并返回。</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ogp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** 插件推断的 OGP 信息 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  ogp</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SeoContent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** 页面对象 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  page</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** VuePress App */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  app</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SeoContent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>详细的参数结构详见 <a href="https://ecosystem.vuejs.press/zh/plugins/seo/seo/config.html" target="_blank" rel="noopener noreferrer">SEO 插件配置</a>。</p><p>比如你在使用某个第三方主题，并按照主题要求为每篇文章在 front matter 中设置了 <code>banner</code>，那你可以传入这样的 <code>ogp</code>:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  ogp</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">ogp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ({</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">    ...</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ogp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;og:image&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">banner</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ogp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;og:image&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div><h3 id="json-ld" tabindex="-1"><a class="header-anchor" href="#json-ld"><span>JSON-LD</span></a></h3><p>同 OGP，你可以在主题选项中通过 <code>plugins.seo.jsonLd</code> 传入一个函数来按照你的需要修改默认 JSON-LD 对象并返回。</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> jsonLd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** 由插件推断出的 JSON-LD 对象 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  jsonLD</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArticleSchema</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> BlogPostingSchema</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> WebPageSchema</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** 页面对象 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  page</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** VuePress App */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  app</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArticleSchema</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> BlogPostingSchema</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> WebPageSchema</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h2 id="规范链接" tabindex="-1"><a class="header-anchor" href="#规范链接"><span>规范链接</span></a></h2><p>如果你将内容部署到不同的站点，或不同 URL 下的相同内容，你可能需要在主题选项中通过 <code>plugins.seo.canonical</code> 选项为你的页面提供 “规范链接”。 你可以设置一个字符串，这样它会附加在页面路由链接之前，或者添加一个自定义函数 <code>(page: Page) =&gt; string | null</code> 返回规范链接。</p><div class="hint-container tip"><p class="hint-container-title">例子</p><p>如果你的站点部署在 <code>example.com</code> 的 docs 文件夹下，但同时在下列网址中可用:</p><ul><li><code>http://example.com/docs/xxx</code></li><li><code>https://example.com/docs/xxx</code></li><li><code>http://www.example.com/docs/xxx</code></li><li><code>https://www.example.com/docs/xxx</code> (首选)</li></ul><p>要让搜索引擎结果始终是首选，你可能需要将 <code>canonical</code> 设置为 <code>https://www.example.com/docs/</code>，以便搜索引擎知道首选第四个 URL 作为索引结果。</p></div><h3 id="自定义-head-标签" tabindex="-1"><a class="header-anchor" href="#自定义-head-标签"><span>自定义 head 标签</span></a></h3><p>有些时候你可能需要符合其他协议或按照其他搜索引擎提供的格式提供对应的 SEO 标签，此时你可以在主题选项中通过 <code>plugins.seo.customHead</code> 选项自定义 head 标签，其类型为:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> customHead</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** head 标签配置 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  head</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HeadConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[],</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** 页面对象 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  page</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** VuePress App */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  app</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> void</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>你应该直接修改传入的 <code>head</code> 参数。</p><h2 id="seo-介绍" tabindex="-1"><a class="header-anchor" href="#seo-介绍"><span>SEO 介绍</span></a></h2><p>搜索引擎优化 (<strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization)，是一种透过了解搜索引擎的运作规则来调整网站，以及提高目的网站在有关搜索引擎内排名的方式。由于不少研究发现，搜索引擎的用户往往只会留意搜索结果最前面的几个条目，所以不少网站都希望透过各种形式来影响搜索引擎的排序，让自己的网站可以有优秀的搜索排名。 所谓“针对搜索引擎作最优化的处理”，是指为了要让网站更容易被搜索引擎接受。搜索引擎会将网站彼此间的内容做一些相关性的资料比对，然后再由浏览器将这些内容以最快速且接近最完整的方式，呈现给搜索者。搜索引擎优化就是通过搜索引擎的规则进行优化，为用户打造更好的用户体验，最终的目的就是做好用户体验。</p><h2 id="rdfa-1-1" tabindex="-1"><a class="header-anchor" href="#rdfa-1-1"><span>RDFa 1.1</span></a></h2><p>主题通过遵循 <a href="https://www.w3.org/TR/rdfa-primer/" target="_blank" rel="noopener noreferrer">RDFa 1.1</a>，为网站的大部分结构添加了富媒体结构支持。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你可以使用 <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">Google 富媒体结构测试工具</a> 测试本站点。</p></div><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h2><ul><li><p><a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">开放内容协议 OGP</a> (<strong>O</strong>pen <strong>G</strong>raph <strong>Pr</strong>otocal)</p><p>此插件完美支持该协议，会自动生成符合该协议的 <code>&lt;meta&gt;</code> 标签。</p></li><li><p><a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a></p><p>此插件会为文章类页面生成 NewsArticle 类标签。</p></li><li><p><a href="https://www.w3.org/TR/rdfa-primer/" target="_blank" rel="noopener noreferrer">RDFa 1.1</a></p><p>主题结构完美支持</p></li><li><p><a href="https://schema.org/" target="_blank" rel="noopener noreferrer">Schema.Org</a></p><p>结构标记的 Schema 定义站点</p></li></ul><h2 id="相关工具" tabindex="-1"><a class="header-anchor" href="#相关工具"><span>相关工具</span></a></h2><ul><li><a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">Google 富媒体结构测试工具</a></li></ul>`,43))])}const B=n(k,[["render",c],["__file","seo.html.vue"]]),A=JSON.parse('{"path":"/zh/guide/advanced/seo.html","title":"SEO","lang":"zh-CN","frontmatter":{"title":"SEO","icon":"dumbbell","order":1,"category":["高级"],"tag":["高级","SEO"],"description":"vuepress-theme-hope 通过内置 [@vuepress/plugin-seo][seo] 为提供 SEO 增强功能。 为了使插件能够更好的工作，你可能需要查看一下 页面配置 并合理的配置它们。 相关信息 vuepress-theme-hope 将主题选项中的 plugins.seo 作为插件选项提供给 @vuepress/plugin-...","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/guide/advanced/seo.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.github.io/v2/guide/advanced/seo.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/zh/guide/advanced/seo.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"SEO"}],["meta",{"property":"og:description","content":"vuepress-theme-hope 通过内置 [@vuepress/plugin-seo][seo] 为提供 SEO 增强功能。 为了使插件能够更好的工作，你可能需要查看一下 页面配置 并合理的配置它们。 相关信息 vuepress-theme-hope 将主题选项中的 plugins.seo 作为插件选项提供给 @vuepress/plugin-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-30T13:40:11.000Z"}],["meta",{"property":"article:tag","content":"高级"}],["meta",{"property":"article:tag","content":"SEO"}],["meta",{"property":"article:modified_time","content":"2024-05-30T13:40:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SEO\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-30T13:40:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.github.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"开箱即用","slug":"开箱即用","link":"#开箱即用","children":[{"level":3,"title":"默认的 OGP 生成逻辑","slug":"默认的-ogp-生成逻辑","link":"#默认的-ogp-生成逻辑","children":[]},{"level":3,"title":"默认的 JSON-LD 生成逻辑","slug":"默认的-json-ld-生成逻辑","link":"#默认的-json-ld-生成逻辑","children":[]}]},{"level":2,"title":"直接添加 head 标签","slug":"直接添加-head-标签","link":"#直接添加-head-标签","children":[]},{"level":2,"title":"自定义生成过程","slug":"自定义生成过程","link":"#自定义生成过程","children":[{"level":3,"title":"页面类型","slug":"页面类型","link":"#页面类型","children":[]},{"level":3,"title":"OGP","slug":"ogp","link":"#ogp","children":[]},{"level":3,"title":"JSON-LD","slug":"json-ld","link":"#json-ld","children":[]}]},{"level":2,"title":"规范链接","slug":"规范链接","link":"#规范链接","children":[{"level":3,"title":"自定义 head 标签","slug":"自定义-head-标签","link":"#自定义-head-标签","children":[]}]},{"level":2,"title":"SEO 介绍","slug":"seo-介绍","link":"#seo-介绍","children":[]},{"level":2,"title":"RDFa 1.1","slug":"rdfa-1-1","link":"#rdfa-1-1","children":[]},{"level":2,"title":"相关文档","slug":"相关文档","link":"#相关文档","children":[]},{"level":2,"title":"相关工具","slug":"相关工具","link":"#相关工具","children":[]}],"git":{"createdTime":1643271321000,"updatedTime":1717076411000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":15}]},"readingTime":{"minutes":5.27,"words":1580},"filePathRelative":"zh/guide/advanced/seo.md","localizedDate":"2022年1月27日","excerpt":"<p><code>vuepress-theme-hope</code> 通过内置 [<code>@vuepress/plugin-seo</code>][seo] 为提供 SEO 增强功能。</p>\\n<p>为了使插件能够更好的工作，你可能需要查看一下 <a href=\\"/v2/zh/config/frontmatter/info.html\\" target=\\"_blank\\">页面配置</a> 并合理的配置它们。</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.seo</code> 作为插件选项提供给 <code>@vuepress/plugin-seo</code>。</p>\\n</div>\\n<p>插件会通过向网站 <code>&lt;head&gt;</code> 注入标签，让你的网站完全支持 <a href=\\"https://ogp.me/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">开放内容协议 OGP</a> 和 <a href=\\"https://www.w3.org/TR/json-ld-api/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JSON-LD 1.1</a>，以全面增强站点的搜索引擎优化性。</p>\\n<p>如果不需要这个插件，请设置在主题选项中设置 <code>plugins.seo: false</code>。</p>\\n","autoDesc":true}');export{B as comp,A as data};