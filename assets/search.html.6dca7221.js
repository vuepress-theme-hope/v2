import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o as v,c as h,b as n,a as s,w as i,f as e,g as u,r as c}from"./app.bdb7652d.js";const b={},m=e("The theme adds built-in support for "),g={href:"https://v2.vuepress.vuejs.org/reference/plugin/search.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"@vuepress/plugin-search",-1),k=e(" and "),q={href:"https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"@vuepress/plugin-docsearch",-1),f=e(". Just install the plugin you want and config it, you will get a search box in navbar."),x=e("To use search plugin, you need to apply it via "),w=n("code",null,"plugins",-1),T=e(" in the "),P=n("strong",null,"VuePress config file",-1),I=e("."),N=u('<div class="custom-container warning"><p class="custom-container-title">Note</p><p>The theme is just adding support for the above plugins, it does not bundle them. You need to install and apply them yourself.</p></div><div class="custom-container danger"><p class="custom-container-title">Warning</p><p><strong>DO NOT</strong> use <code>plugins.search</code> in theme options.</p><p>The theme can ONLY apply plugins it bundles, so <code>plugins</code> field in theme options ONLY accepts CERTAIN plugin name.</p></div><h2 id="use-vuepress-plugin-search" tabindex="-1"><a class="header-anchor" href="#use-vuepress-plugin-search" aria-hidden="true">#</a> Use <code>@vuepress/plugin-search</code></h2>',3),S=n("p",null,[e("Install "),n("code",null,"@vuepress/plugin-search")],-1),A=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(` -D @vuepress/plugin-search@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"add"),e(` -D @vuepress/plugin-search@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(` i -D @vuepress/plugin-search@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),E=n("p",null,[e("Import "),n("code",null,"searchPlugin"),e(" from "),n("code",null,"@vuepress/plugin-search"),e(" and apply it in "),n("code",null,"plugins"),e(" under "),n("code",null,"config.{ts,js}"),e(".")],-1),C=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" searchPlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"@vuepress/plugin-search"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"searchPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// your options"),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"const"),e(),n("span",{class:"token punctuation"},"{"),e(" searchPlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@vuepress/plugin-search"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

module`),n("span",{class:"token punctuation"},"."),e("exports "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"searchPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// your options"),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j={class:"custom-container info"},Y=n("p",{class:"custom-container-title"},"More",-1),O=e("See "),L={href:"https://v2.vuepress.vuejs.org/reference/plugin/search.html",target:"_blank",rel:"noopener noreferrer"},B=e("Plugin Docs"),W=e(" for available options."),M=n("h2",{id:"use-vuepress-plugin-docsearch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#use-vuepress-plugin-docsearch","aria-hidden":"true"},"#"),e(" Use "),n("code",null,"@vuepress/plugin-docsearch")],-1),V=e("You need to "),K={href:"https://docsearch.algolia.com/apply/",target:"_blank",rel:"noopener noreferrer"},F=e("submit the URL of your site"),z=e(" to join the DocSearch program."),H=n("p",null,"The DocSearch team will send apiKey and indexName to your email once the index is generated. Then you can configure this plugin to enable DocSearch in VuePress.",-1),J=e("Alternatively, you can "),X={href:"https://docsearch.algolia.com/docs/run-your-own/",target:"_blank",rel:"noopener noreferrer"},$=e("run your own crawler"),G=e(" to generate the index, and then use your own appId, apiKey and indexName to configure this plugin."),Q=e("Set up the Algolia Crawler correctly according to the following requirements. You should go to "),Z={href:"https://crawler.algolia.com/admin/crawlers/",target:"_blank",rel:"noopener noreferrer"},nn=e("Algolia Crawler"),en=e(" to update your crawler config."),sn=u(`<details class="custom-container details"><summary>Setting Crawler Config</summary><p>Here are config options and descriptions:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Crawler({
  appId: &quot;YOUR_APP_ID&quot;,
  apiKey: &quot;YOUR_API_KEY&quot;,
  rateLimit: 8,
  startUrls: [
    // These are urls which algolia start to craw
    // If your site is divided in to multiple parts,
    // you may want to set multiple entry links
    &quot;https://YOUR_WEBSITE_URL/&quot;,
  ],
  sitemaps: [
    // if you are using sitemap plugins (e.g.: vuepress-plugin-sitemap2), you may provide one
    &quot;https://YOUR_WEBSITE_URL/sitemap.xml&quot;,
  ],
  ignoreCanonicalTo: false,
  exclusionPatterns: [
    // You can use this to stop algolia crawing some paths
  ],
  discoveryPatterns: [
    // These are urls which algolia looking for,
    &quot;https://YOUR_WEBSITE_URL/**&quot;,
  ],
  // Crawler schedule, set it according to your docs update frequency
  schedule: &quot;at 02:00 every 1 day&quot;,
  actions: [
    // you may have multiple actions, especially when you are deploying multiple docs under one domain
    {
      // name the index with name you like
      indexName: &quot;YOUR_INDEX_NAME&quot;,
      // paths where the index take effect
      pathsToMatch: [&quot;https://YOUR_WEBSITE_URL/**&quot;],
      // controls how algolia extracts records from your site
      recordExtractor: ({ $, helpers }) =&gt; {
        // The following are the default options for vuepress-theme-hope
        // vuepress-theme-hope default container class name is theme-hope-content
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
    // controls how index are initialized
    // only has effects before index are initialize
    // you may need to delete your index and recraw after modification
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="custom-container warning"><p class="custom-container-title">Note</p><p><code>initialIndexSettings.YOUR_INDEX_NAME.attributesForFaceting</code> field <strong>must</strong> contain <code>&quot;lang&quot;</code>, otherwise the plugin will not work properly.</p></div>`,2),tn=n("p",null,[e("Install "),n("code",null,"@vuepress/plugin-docsearch")],-1),an=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(` -D @vuepress/plugin-docsearch@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),ln=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"add"),e(` -D @vuepress/plugin-docsearch@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),on=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(` i -D @vuepress/plugin-docsearch@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),rn=n("p",null,[e("Import "),n("code",null,"docsearchPlugin"),e(" from "),n("code",null,"@vuepress/plugin-docsearch"),e(" and apply it in "),n("code",null,"plugins"),e(" under "),n("code",null,"config.{ts,js}"),e(".")],-1),cn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" docsearchPlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"@vuepress/plugin-docsearch"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"docsearchPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// your options"),e(`
      `),n("span",{class:"token comment"},"// appId, apiKey and indexName are required"),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),un=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"const"),e(),n("span",{class:"token punctuation"},"{"),e(" docsearchPlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@vuepress/plugin-docsearch"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

module`),n("span",{class:"token punctuation"},"."),e("exports "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"docsearchPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// your options"),e(`
      `),n("span",{class:"token comment"},"// appId, apiKey and indexName are required"),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dn={class:"custom-container info"},pn=n("p",{class:"custom-container-title"},"More",-1),vn=e("See "),hn={href:"https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},bn=e("Plugin Docs"),mn=e(" for how to use docsearch plugin and its available options.");function gn(_n,kn){const o=c("ExternalLinkIcon"),d=c("RouterLink"),r=c("CodeTabs");return v(),h("div",null,[n("p",null,[m,n("a",g,[_,s(o)]),k,n("a",q,[y,s(o)]),f]),n("p",null,[x,w,T,s(d,{to:"/cookbook/vuepress/config.html"},{default:i(()=>[P]),_:1}),I]),N,n("ol",null,[n("li",null,[S,s(r,{data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:i(({title:t,value:a,isActive:l})=>[A]),tab1:i(({title:t,value:a,isActive:l})=>[R]),tab2:i(({title:t,value:a,isActive:l})=>[U]),_:1})]),n("li",null,[E,s(r,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:i(({title:t,value:a,isActive:l})=>[C]),tab1:i(({title:t,value:a,isActive:l})=>[D]),_:1})])]),n("div",j,[Y,n("p",null,[O,n("a",L,[B,s(o)]),W])]),M,n("ol",null,[n("li",null,[n("p",null,[V,n("a",K,[F,s(o)]),z]),H,n("p",null,[J,n("a",X,[$,s(o)]),G])]),n("li",null,[n("p",null,[Q,n("a",Z,[nn,s(o)]),en]),sn]),n("li",null,[tn,s(r,{data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:i(({title:t,value:a,isActive:l})=>[an]),tab1:i(({title:t,value:a,isActive:l})=>[ln]),tab2:i(({title:t,value:a,isActive:l})=>[on]),_:1})]),n("li",null,[rn,s(r,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:i(({title:t,value:a,isActive:l})=>[cn]),tab1:i(({title:t,value:a,isActive:l})=>[un]),_:1})])]),n("div",dn,[pn,n("p",null,[vn,n("a",hn,[bn,s(o)]),mn])])])}var fn=p(b,[["render",gn],["__file","search.html.vue"]]);export{fn as default};
