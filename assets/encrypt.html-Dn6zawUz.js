import{aj as s,ak as t,ao as i,an as a,am as n,al as p}from"./app-C5NAKw-g.js";const l={};function h(r,e){return p(),t("div",null,[e[0]||(e[0]=i("p",null,"主题支持对特定文件夹或特定的路径进行加密，也支持进行全局范围的加密。",-1)),e[1]||(e[1]=i("div",{class:"hint-container caution"},[i("p",{class:"hint-container-title"},"警告"),i("p",null,"注意，受到 VuePress 的限制，在未解密前，文章内容仅仅被隐藏，访问者仍可以从源码中获取文章的内容。"),i("p",null,"所以请不要使用该加密功能用于任何敏感、机密的文章与档案，造成的后果请你自负。")],-1)),a(" more "),e[2]||(e[2]=n(`<h2 id="局部加密" tabindex="-1"><a class="header-anchor" href="#局部加密"><span>局部加密</span></a></h2><p>你可以在主题选项中通过 <code>encrypt.config</code> 字段配置加密选项。</p><p>字段的键名是路径，值支持填入一个或多个数组格式的密码。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    encrypt</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      config</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 这会加密整个 guide 目录，并且两个密码都是可用的</span></span>
<span class="line highlighted"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;/guide/&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1234&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;5678&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 这只会加密 /config/page.html</span></span>
<span class="line highlighted"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;/config/page.html&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;1234&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意，你只能使用字符串格式的密码。</p><p>数字 <code>1234</code> 和 字符串 <code>&quot;1234&quot;</code> 的混淆值是不同的! 而网站只能通过输入框输入字符串格式的内容。</p></div><h2 id="全局加密" tabindex="-1"><a class="header-anchor" href="#全局加密"><span>全局加密</span></a></h2><p>有些情况下，你可能想加密整个站点，你可以在主题选项中设置 <code>encrypt.global: true</code> 来实现它。</p><p>全局加密时，你可以在主题选项中通过 <code>encrypt.admin</code> 选项以字符串或字符串数组的格式设置一个或多个密码。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>多个密码的考虑是权限分离，这样你可以在日后部署中，废除或更新部分的全局密码，使得拥有密码的部分用户失去访问权限。</p></div>`,9))])}const k=s(l,[["render",h],["__file","encrypt.html.vue"]]),c=JSON.parse('{"path":"/zh/guide/feature/encrypt.html","title":"加密","lang":"zh-CN","frontmatter":{"title":"加密","icon":"lock","category":["功能"],"tag":["功能","加密"],"description":"主题支持对特定文件夹或特定的路径进行加密，也支持进行全局范围的加密。 警告 注意，受到 VuePress 的限制，在未解密前，文章内容仅仅被隐藏，访问者仍可以从源码中获取文章的内容。 所以请不要使用该加密功能用于任何敏感、机密的文章与档案，造成的后果请你自负。","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.gitee.io/v2/guide/feature/encrypt.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/zh/guide/feature/encrypt.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"加密"}],["meta",{"property":"og:description","content":"主题支持对特定文件夹或特定的路径进行加密，也支持进行全局范围的加密。 警告 注意，受到 VuePress 的限制，在未解密前，文章内容仅仅被隐藏，访问者仍可以从源码中获取文章的内容。 所以请不要使用该加密功能用于任何敏感、机密的文章与档案，造成的后果请你自负。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-28T06:00:00.000Z"}],["meta",{"property":"article:tag","content":"功能"}],["meta",{"property":"article:tag","content":"加密"}],["meta",{"property":"article:modified_time","content":"2024-05-28T06:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"加密\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-28T06:00:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.gitee.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.gitee.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"局部加密","slug":"局部加密","link":"#局部加密","children":[]},{"level":2,"title":"全局加密","slug":"全局加密","link":"#全局加密","children":[]}],"git":{"createdTime":1644936187000,"updatedTime":1716876000000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":10}]},"readingTime":{"minutes":1.34,"words":403},"filePathRelative":"zh/guide/feature/encrypt.md","localizedDate":"2022年2月15日","excerpt":"<p>主题支持对特定文件夹或特定的路径进行加密，也支持进行全局范围的加密。</p>\\n<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">警告</p>\\n<p>注意，受到 VuePress 的限制，在未解密前，文章内容仅仅被隐藏，访问者仍可以从源码中获取文章的内容。</p>\\n<p>所以请不要使用该加密功能用于任何敏感、机密的文章与档案，造成的后果请你自负。</p>\\n</div>\\n","autoDesc":true}');export{k as comp,c as data};
