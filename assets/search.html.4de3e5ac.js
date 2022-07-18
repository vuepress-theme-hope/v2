import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as v,c as k,b as n,a,w as e,f as s,g as u}from"./app.afdcb3d7.js";const m={},b=s("\u4E3B\u9898\u5BF9 "),h={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"@vuepress/plugin-search",-1),_=s(" \u548C "),y={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"@vuepress/plugin-docsearch",-1),f=s(" \u63D0\u4F9B\u4E86\u5185\u7F6E\u652F\u6301\u3002\u4F60\u53EA\u9700\u8981\u6DFB\u52A0\u5E76\u914D\u7F6E\u6240\u9700\u7684\u641C\u7D22\u63D2\u4EF6\uFF0C\u5C31\u80FD\u591F\u5728\u5BFC\u822A\u680F\u83B7\u5F97\u4E00\u4E2A\u641C\u7D22\u6846\u3002"),x=s("\u5982\u679C\u4F60\u9700\u8981\u641C\u7D22\u63D2\u4EF6\uFF0C\u8BF7\u901A\u8FC7 "),T=n("strong",null,"VuePress \u914D\u7F6E\u6587\u4EF6",-1),w=s(" \u7684 "),S=n("code",null,"plugins",-1),R=s(" \u9009\u9879\u5E94\u7528\u5B83\u3002"),A=u('<div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4E3B\u9898\u53EA\u662F\u6DFB\u52A0\u4E86\u4E0A\u8FF0\u4E24\u4E2A\u641C\u7D22\u63D2\u4EF6\u7684\u652F\u6301\uFF0C\u800C\u5E76\u6CA1\u6709\u6346\u7ED1\u5B83\u4EEC\uFF0C\u4F60\u9700\u8981\u81EA\u5DF1\u5B89\u88C5\u548C\u8C03\u7528\u3002</p></div><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p><strong>\u8BF7\u52FF</strong>\u5728\u4E3B\u9898\u9009\u9879\u4E2D\u4F7F\u7528 <code>plugins.search</code>\u3002</p><p>\u7531\u4E8E\u4E3B\u9898\u53EA\u80FD\u8C03\u7528\u5B83\u6346\u7ED1\u7684\u63D2\u4EF6\uFF0C\u56E0\u6B64\u4E3B\u9898\u9009\u9879\u4E2D\u7684 <code>plugins</code> \u5B57\u6BB5\u4EC5\u63A5\u53D7<strong>\u7279\u5B9A</strong>\u63D2\u4EF6\u540D\u79F0\u3002</p></div><h2 id="\u4F7F\u7528-vuepress-plugin-search" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-vuepress-plugin-search" aria-hidden="true">#</a> \u4F7F\u7528 <code>@vuepress/plugin-search</code></h2>',3),P=n("p",null,[s("\u5B89\u88C5 "),n("code",null,"@vuepress/plugin-search")],-1),B=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` -D @vuepress/plugin-search@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` -D @vuepress/plugin-search@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(` i -D @vuepress/plugin-search@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),I=n("p",null,[s("\u4ECE "),n("code",null,"@vuepress/plugin-search"),s(" \u5BFC\u5165 "),n("code",null,"searchPlugin"),s(" \u5E76\u5C06\u5176\u5E94\u7528\u81F3 "),n("code",null,"config.{ts,js}"),s(" \u4E0B\u7684 "),n("code",null,"plugins"),s(" \u9009\u9879.")],-1),C=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" searchPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/plugin-search"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"searchPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u4F60\u7684\u9009\u9879"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" searchPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@vuepress/plugin-search"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"searchPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u4F60\u7684\u9009\u9879"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E={class:"custom-container info"},N=n("p",{class:"custom-container-title"},"\u66F4\u591A",-1),D=s("\u5173\u4E8E\u641C\u7D22\u63D2\u4EF6\u7684\u53EF\u7528\u9009\u9879\uFF0C\u8BE6\u89C1 "),z={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html",target:"_blank",rel:"noopener noreferrer"},O=s("\u63D2\u4EF6\u6587\u6863"),Y=s("\u3002"),F=n("h3",{id:"vuepress-plugin-search-\u672C\u5730\u5316\u7FFB\u8BD1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-plugin-search-\u672C\u5730\u5316\u7FFB\u8BD1","aria-hidden":"true"},"#"),s(),n("code",null,"@vuepress/plugin-search"),s(" \u672C\u5730\u5316\u7FFB\u8BD1")],-1),M=n("p",null,[s("\u5982\u679C\u4F60\u6B63\u5728\u63D0\u4F9B\u4E2D\u6587\u6587\u6863\uFF0C\u4F60\u53EF\u4EE5\u5C06\u5176\u8BBE\u7F6E\u5230\u63D2\u4EF6\u9009\u9879\u4E2D\u7684 "),n("code",null,"locales"),s(" \u4E2D\u3002")],-1),V={class:"custom-container details"},W=n("summary",null,"\u4E2D\u6587\u591A\u8BED\u8A00\u914D\u7F6E",-1),K=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" searchPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/plugin-search"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"searchPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`

      locales`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u641C\u7D22"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" searchPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@vuepress/plugin-search"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"searchPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`

      `),n("span",{class:"token literal-property property"},"locales"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"placeholder"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u641C\u7D22"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X=n("h2",{id:"\u4F7F\u7528-vuepress-plugin-docsearch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528-vuepress-plugin-docsearch","aria-hidden":"true"},"#"),s(" \u4F7F\u7528 "),n("code",null,"@vuepress/plugin-docsearch")],-1),H=s("\u4F60\u9700\u8981 "),Q={href:"https://docsearch.algolia.com/apply/",target:"_blank",rel:"noopener noreferrer"},$=s("\u63D0\u4EA4\u4F60\u7684\u7F51\u7AD9 URL"),G=s(" \u6765\u52A0\u5165 DocSearch \u9879\u76EE\u3002"),Z=n("p",null,[s("\u5F53\u4F60\u7684\u7D22\u5F15\u6210\u529F\u521B\u5EFA\u540E\uFF0C DocSearch \u56E2\u961F\u4F1A\u5C06 "),n("a",{href:"#apikey"},"apiKey"),s(" \u548C "),n("a",{href:"#indexname"},"indexName"),s(" \u53D1\u9001\u5230\u4F60\u7684\u90AE\u7BB1\u3002\u63A5\u4E0B\u6765\uFF0C\u4F60\u5C31\u53EF\u4EE5\u914D\u7F6E\u8BE5\u63D2\u4EF6\uFF0C\u5728 VuePress \u4E2D\u542F\u7528 DocSearch \u4E86\u3002")],-1),nn=s("\u6216\u8005\uFF0C\u4F60\u4E5F\u53EF\u4EE5 "),sn={href:"https://docsearch.algolia.com/docs/run-your-own/",target:"_blank",rel:"noopener noreferrer"},en=s("\u8FD0\u884C\u4F60\u81EA\u5DF1\u7684\u722C\u866B"),an=s(" \u6765\u521B\u5EFA\u7D22\u5F15\uFF0C\u7136\u540E\u4F7F\u7528\u4F60\u81EA\u5DF1\u7684 "),tn=n("a",{href:"#appId"},"appId",-1),ln=s(", "),on=n("a",{href:"#apikey"},"apiKey",-1),cn=s(" \u548C "),rn=n("a",{href:"#indexname"},"indexName",-1),un=s(" \u6765\u914D\u7F6E\u8BE5\u63D2\u4EF6\u3002"),pn=s("\u4E3A\u4E86\u6B63\u5E38\u7684\u4F7F\u7528\u63D2\u4EF6\uFF0C\u4F60\u9700\u8981\u6309\u7167\u4E0B\u5217\u8981\u6C42\u6B63\u786E\u8BBE\u7F6E Algolia Crawler\u3002 \u524D\u5F80 "),dn={href:"https://crawler.algolia.com/admin/crawlers/",target:"_blank",rel:"noopener noreferrer"},vn=s("Algolia Crawler"),kn=s(" \u6765\u66F4\u65B0\u4F60\u7684\u722C\u866B\u914D\u7F6E\u3002"),mn=u(`<details class="custom-container details"><summary>\u914D\u7F6E\u722C\u866B</summary><p>\u4EE5\u4E0B\u662F\u914D\u7F6E\u9009\u9879\u548C\u8BF4\u660E:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Crawler({
  appId: &quot;YOUR_APP_ID&quot;,
  apiKey: &quot;YOUR_API_KEY&quot;,
  rateLimit: 8,
  startUrls: [
    // \u8FD9\u662F Algolia \u5F00\u59CB\u6293\u53D6\u7F51\u7AD9\u7684\u521D\u59CB\u5730\u5740
    // \u5982\u679C\u4F60\u7684\u7F51\u7AD9\u88AB\u5206\u4E3A\u6570\u4E2A\u72EC\u7ACB\u90E8\u5206\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u6B64\u8BBE\u7F6E\u591A\u4E2A\u5165\u53E3\u94FE\u63A5
    &quot;https://YOUR_WEBSITE_URL/&quot;,
  ],
  sitemaps: [
    // \u5982\u679C\u4F60\u5728\u4F7F\u7528 Sitemap \u63D2\u4EF6 (\u5982: vuepress-plugin-sitemap2)\uFF0C\u4F60\u53EF\u4EE5\u63D0\u4F9B Sitemap \u94FE\u63A5
    &quot;https://YOUR_WEBSITE_URL/sitemap.xml&quot;,
  ],
  ignoreCanonicalTo: false,
  exclusionPatterns: [
    // \u4F60\u53EF\u4EE5\u901A\u8FC7\u5B83\u963B\u6B62 Algolia \u6293\u53D6\u67D0\u4E9B URL
  ],
  discoveryPatterns: [
    // \u8FD9\u662F Algolia \u6293\u53D6 URL \u7684\u8303\u56F4
    &quot;https://YOUR_WEBSITE_URL/**&quot;,
  ],
  // \u722C\u866B\u6267\u884C\u7684\u8BA1\u5212\u65F6\u95F4\uFF0C\u53EF\u6839\u636E\u6587\u6863\u66F4\u65B0\u9891\u7387\u8BBE\u7F6E
  schedule: &quot;at 02:00 every 1 day&quot;,
  actions: [
    // \u4F60\u53EF\u4EE5\u62E5\u6709\u591A\u4E2A action\uFF0C\u7279\u522B\u662F\u4F60\u5728\u4E00\u4E2A\u57DF\u540D\u4E0B\u90E8\u7F72\u591A\u4E2A\u6587\u6863\u65F6
    {
      // \u4F7F\u7528\u9002\u5F53\u7684\u540D\u79F0\u4E3A\u7D22\u5F15\u547D\u540D
      indexName: &quot;YOUR_INDEX_NAME&quot;,
      // \u7D22\u5F15\u751F\u6548\u7684\u8DEF\u5F84
      pathsToMatch: [&quot;https://YOUR_WEBSITE_URL/**&quot;],
      // \u63A7\u5236 Algolia \u5982\u4F55\u6293\u53D6\u4F60\u7684\u7AD9\u70B9
      recordExtractor: ({ $, helpers }) =&gt; {
        // \u4EE5\u4E0B\u662F\u9002\u7528\u4E8E vuepress-theme-hope \u7684\u9ED8\u8BA4\u9009\u9879\u9009\u9879
        // vuepress-theme-hope \u9ED8\u8BA4\u7684\u5BB9\u5668\u7C7B\u540D\u4E3A theme-hope-content
        return helpers.docsearch({
          recordProps: {
            lvl0: {
              selectors: &quot;.sidebar-heading.active&quot;,
              defaultValue: &quot;Documentation&quot;,
            },
            lvl1: &quot;.theme-hope-content h1&quot;,
            lvl2: &quot;.theme-hope-content h2&quot;,
            lvl3: &quot;.theme-hope-content h3&quot;,
            lvl4: &quot;.theme-hope-content h4&quot;,
            lvl5: &quot;.theme-hope-content h5&quot;,
            lvl6: &quot;.theme-hope-content h6&quot;,
            content: &quot;.theme-hope-content p, .theme-hope-content li&quot;,
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    // \u63A7\u5236\u7D22\u5F15\u5982\u4F55\u88AB\u521D\u59CB\u5316\uFF0C\u8FD9\u4EC5\u5F53\u7D22\u5F15\u5C1A\u672A\u751F\u6210\u65F6\u6709\u6548
    // \u4F60\u53EF\u80FD\u9700\u8981\u5728\u4FEE\u6539\u540E\u624B\u52A8\u5220\u9664\u5E76\u91CD\u65B0\u751F\u6210\u65B0\u7684\u7D22\u5F15
    YOUR_INDEX_NAME: {
      attributesForFaceting: [&quot;type&quot;, &quot;lang&quot;],
      attributesToRetrieve: [&quot;hierarchy&quot;, &quot;content&quot;, &quot;anchor&quot;, &quot;url&quot;],
      attributesToHighlight: [&quot;hierarchy&quot;, &quot;hierarchy_camel&quot;, &quot;content&quot;],
      attributesToSnippet: [&quot;content:10&quot;],
      camelCaseAttributes: [&quot;hierarchy&quot;, &quot;hierarchy_radio&quot;, &quot;content&quot;],
      searchableAttributes: [
        &quot;unordered(hierarchy_radio_camel.lvl0)&quot;,
        &quot;unordered(hierarchy_radio.lvl0)&quot;,
        &quot;unordered(hierarchy_radio_camel.lvl1)&quot;,
        &quot;unordered(hierarchy_radio.lvl1)&quot;,
        &quot;unordered(hierarchy_radio_camel.lvl2)&quot;,
        &quot;unordered(hierarchy_radio.lvl2)&quot;,
        &quot;unordered(hierarchy_radio_camel.lvl3)&quot;,
        &quot;unordered(hierarchy_radio.lvl3)&quot;,
        &quot;unordered(hierarchy_radio_camel.lvl4)&quot;,
        &quot;unordered(hierarchy_radio.lvl4)&quot;,
        &quot;unordered(hierarchy_radio_camel.lvl5)&quot;,
        &quot;unordered(hierarchy_radio.lvl5)&quot;,
        &quot;unordered(hierarchy_radio_camel.lvl6)&quot;,
        &quot;unordered(hierarchy_radio.lvl6)&quot;,
        &quot;unordered(hierarchy_camel.lvl0)&quot;,
        &quot;unordered(hierarchy.lvl0)&quot;,
        &quot;unordered(hierarchy_camel.lvl1)&quot;,
        &quot;unordered(hierarchy.lvl1)&quot;,
        &quot;unordered(hierarchy_camel.lvl2)&quot;,
        &quot;unordered(hierarchy.lvl2)&quot;,
        &quot;unordered(hierarchy_camel.lvl3)&quot;,
        &quot;unordered(hierarchy.lvl3)&quot;,
        &quot;unordered(hierarchy_camel.lvl4)&quot;,
        &quot;unordered(hierarchy.lvl4)&quot;,
        &quot;unordered(hierarchy_camel.lvl5)&quot;,
        &quot;unordered(hierarchy.lvl5)&quot;,
        &quot;unordered(hierarchy_camel.lvl6)&quot;,
        &quot;unordered(hierarchy.lvl6)&quot;,
        &quot;content&quot;,
      ],
      distinct: true,
      attributeForDistinct: &quot;url&quot;,
      customRanking: [
        &quot;desc(weight.pageRank)&quot;,
        &quot;desc(weight.level)&quot;,
        &quot;asc(weight.position)&quot;,
      ],
      ranking: [
        &quot;words&quot;,
        &quot;filters&quot;,
        &quot;typo&quot;,
        &quot;attribute&quot;,
        &quot;proximity&quot;,
        &quot;exact&quot;,
        &quot;custom&quot;,
      ],
      highlightPreTag:
        &#39;&lt;span class=&quot;algolia-docsearch-suggestion--highlight&quot;&gt;&#39;,
      highlightPostTag: &quot;&lt;/span&gt;&quot;,
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: &quot;allOptional&quot;,
    },
  },
});
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>Crawler \u914D\u7F6E\u4E2D <code>initialIndexSettings.YOUR_INDEX_NAME.attributesForFaceting</code> \u5B57\u6BB5<strong>\u5FC5\u987B</strong>\u5305\u542B <code>&quot;lang&quot;</code>\uFF0C\u5426\u5219\u8BE5\u63D2\u4EF6\u5C06\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u3002</p></div>`,2),bn=n("p",null,[s("\u5B89\u88C5 "),n("code",null,"@vuepress/plugin-docsearch")],-1),hn=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` -D @vuepress/plugin-docsearch@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),gn=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` -D @vuepress/plugin-docsearch@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),_n=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(` i -D @vuepress/plugin-docsearch@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),yn=n("p",null,[s("\u4ECE "),n("code",null,"@vuepress/plugin-docsearch"),s(" \u5BFC\u5165 "),n("code",null,"docsearchPlugin"),s("\uFF0C\u5E76\u5728 "),n("code",null,"config.{ts,js}"),s(" \u4E2D\u7684 "),n("code",null,"plugins"),s(" \u5E94\u7528\u3002")],-1),qn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" docsearchPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/plugin-docsearch"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"docsearchPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u4F60\u7684\u9009\u9879"),s(`
      `),n("span",{class:"token comment"},"// appId, apiKey \u548C indexName \u662F\u5FC5\u586B\u7684"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fn=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" docsearchPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@vuepress/plugin-docsearch"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"docsearchPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u4F60\u7684\u9009\u9879"),s(`
      `),n("span",{class:"token comment"},"// appId, apiKey \u548C indexName \u662F\u5FC5\u586B\u7684"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xn={class:"custom-container info"},Tn=n("p",{class:"custom-container-title"},"\u66F4\u591A",-1),wn=s("\u5173\u4E8E DocSearch \u641C\u7D22\u63D2\u4EF6\u7684\u53EF\u7528\u9009\u9879\uFF0C\u8BE6\u89C1 "),Sn={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},Rn=s("\u63D2\u4EF6\u6587\u6863"),An=s("\u3002"),Pn=n("h3",{id:"vuepress-plugin-docsearch-\u672C\u5730\u5316\u7FFB\u8BD1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-plugin-docsearch-\u672C\u5730\u5316\u7FFB\u8BD1","aria-hidden":"true"},"#"),s(),n("code",null,"@vuepress/plugin-docsearch"),s(" \u672C\u5730\u5316\u7FFB\u8BD1")],-1),Bn=n("p",null,[s("\u4F60\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u9009\u9879\u4E2D\u7684 "),n("code",null,"locales"),s(" \u914D\u7F6E\u591A\u8BED\u8A00\u3002")],-1),Un={class:"custom-container details"},jn=n("summary",null,"\u4E2D\u6587\u591A\u8BED\u8A00\u914D\u7F6E\u793A\u4F8B",-1),In=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" docsearchPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/plugin-docsearch"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"docsearchPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`

      locales`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u641C\u7D22\u6587\u6863"'),n("span",{class:"token punctuation"},","),s(`
          translations`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            button`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              buttonText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u641C\u7D22\u6587\u6863"'),n("span",{class:"token punctuation"},","),s(`
              buttonAriaLabel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u641C\u7D22\u6587\u6863"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            modal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              searchBox`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                resetButtonTitle`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6"'),n("span",{class:"token punctuation"},","),s(`
                resetButtonAriaLabel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6"'),n("span",{class:"token punctuation"},","),s(`
                cancelButtonText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u53D6\u6D88"'),n("span",{class:"token punctuation"},","),s(`
                cancelButtonAriaLabel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u53D6\u6D88"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              startScreen`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                recentSearchesTitle`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u641C\u7D22\u5386\u53F2"'),n("span",{class:"token punctuation"},","),s(`
                noRecentSearchesText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u6CA1\u6709\u641C\u7D22\u5386\u53F2"'),n("span",{class:"token punctuation"},","),s(`
                saveRecentSearchButtonTitle`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2"'),n("span",{class:"token punctuation"},","),s(`
                removeRecentSearchButtonTitle`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664"'),n("span",{class:"token punctuation"},","),s(`
                favoriteSearchesTitle`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u6536\u85CF"'),n("span",{class:"token punctuation"},","),s(`
                removeFavoriteSearchButtonTitle`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              errorScreen`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                titleText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C"'),n("span",{class:"token punctuation"},","),s(`
                helpText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              footer`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                selectText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u9009\u62E9"'),n("span",{class:"token punctuation"},","),s(`
                navigateText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u5207\u6362"'),n("span",{class:"token punctuation"},","),s(`
                closeText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u5173\u95ED"'),n("span",{class:"token punctuation"},","),s(`
                searchByText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u641C\u7D22\u63D0\u4F9B\u8005"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              noResultsScreen`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                noResultsText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C"'),n("span",{class:"token punctuation"},","),s(`
                suggestedQueryText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2"'),n("span",{class:"token punctuation"},","),s(`
                reportMissingResultsText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F"'),n("span",{class:"token punctuation"},","),s(`
                reportMissingResultsLinkText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u70B9\u51FB\u53CD\u9988"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Cn=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" docsearchPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@vuepress/plugin-docsearch"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"docsearchPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`

      `),n("span",{class:"token literal-property property"},"locales"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"placeholder"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u641C\u7D22\u6587\u6863"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"translations"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"button"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"buttonText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u641C\u7D22\u6587\u6863"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"buttonAriaLabel"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u641C\u7D22\u6587\u6863"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"modal"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"searchBox"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"resetButtonTitle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"resetButtonAriaLabel"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"cancelButtonText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u53D6\u6D88"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"cancelButtonAriaLabel"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u53D6\u6D88"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"startScreen"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"recentSearchesTitle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u641C\u7D22\u5386\u53F2"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"noRecentSearchesText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u6CA1\u6709\u641C\u7D22\u5386\u53F2"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"saveRecentSearchButtonTitle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"removeRecentSearchButtonTitle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"favoriteSearchesTitle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u6536\u85CF"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"removeFavoriteSearchButtonTitle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"errorScreen"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"titleText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"helpText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"footer"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"selectText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u9009\u62E9"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"navigateText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u5207\u6362"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"closeText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u5173\u95ED"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"searchByText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u641C\u7D22\u63D0\u4F9B\u8005"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"noResultsScreen"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"noResultsText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"suggestedQueryText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"openIssueText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"openIssueLinkText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u70B9\u51FB\u53CD\u9988"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function Ln(En,Nn){const i=r("ExternalLinkIcon"),p=r("RouterLink"),c=r("CodeTabs");return v(),k("div",null,[n("p",null,[b,n("a",h,[g,a(i)]),_,n("a",y,[q,a(i)]),f]),n("p",null,[x,a(p,{to:"/zh/cookbook/vuepress/config.html"},{default:e(()=>[T]),_:1}),w,S,R]),A,n("ol",null,[n("li",null,[P,a(c,{data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:e(({title:t,value:l,isActive:o})=>[B]),tab1:e(({title:t,value:l,isActive:o})=>[U]),tab2:e(({title:t,value:l,isActive:o})=>[j]),_:1})]),n("li",null,[I,a(c,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:t,value:l,isActive:o})=>[C]),tab1:e(({title:t,value:l,isActive:o})=>[L]),_:1})])]),n("div",E,[N,n("p",null,[D,n("a",z,[O,a(i)]),Y])]),F,M,n("details",V,[W,a(c,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:t,value:l,isActive:o})=>[K]),tab1:e(({title:t,value:l,isActive:o})=>[J]),_:1})]),X,n("ol",null,[n("li",null,[n("p",null,[H,n("a",Q,[$,a(i)]),G]),Z,n("p",null,[nn,n("a",sn,[en,a(i)]),an,tn,ln,on,cn,rn,un])]),n("li",null,[n("p",null,[pn,n("a",dn,[vn,a(i)]),kn]),mn]),n("li",null,[bn,a(c,{data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:e(({title:t,value:l,isActive:o})=>[hn]),tab1:e(({title:t,value:l,isActive:o})=>[gn]),tab2:e(({title:t,value:l,isActive:o})=>[_n]),_:1})]),n("li",null,[yn,a(c,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:t,value:l,isActive:o})=>[qn]),tab1:e(({title:t,value:l,isActive:o})=>[fn]),_:1})])]),n("div",xn,[Tn,n("p",null,[wn,n("a",Sn,[Rn,a(i)]),An])]),Pn,Bn,n("details",Un,[jn,a(c,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:t,value:l,isActive:o})=>[In]),tab1:e(({title:t,value:l,isActive:o})=>[Cn]),_:1})])])}var On=d(m,[["render",Ln],["__file","search.html.vue"]]);export{On as default};
