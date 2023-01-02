import{_ as v,W as m,X as b,$ as n,a0 as e,Y as s,a1 as p,Z as u,a2 as i,g as t}from"./framework-346270e9.js";const q={},h=n("p",null,"Let the Markdown file support chart in your VuePress site.",-1),k={href:"https://echarts.apache.org/en/index.html",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),e(" Config")],-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// Enable echarts"),e(`
      echarts`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// Enable echarts"),e(`
      `),n("span",{class:"token literal-property property"},"echarts"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=i(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: echarts Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // Your echarts config here.
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre></div><p><code>js</code> and <code>javascript</code> code block is also supported, and you are expected to assign your export object to <code>module.exports</code>.</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><h3 id="line-chart" tabindex="-1"><a class="header-anchor" href="#line-chart" aria-hidden="true">#</a> Line Chart</h3>`,5),w=i(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts A line chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;xAxis&quot;: {
    &quot;type&quot;: &quot;category&quot;,
    &quot;data&quot;: [&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;, &quot;Thu&quot;, &quot;Fri&quot;, &quot;Sat&quot;, &quot;Sun&quot;]
  },
  &quot;yAxis&quot;: {
    &quot;type&quot;: &quot;value&quot;
  },
  &quot;series&quot;: [
    {
      &quot;data&quot;: [150, 230, 224, 218, 135, 147, 260],
      &quot;type&quot;: &quot;line&quot;
    }
  ]
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="bar-chart" tabindex="-1"><a class="header-anchor" href="#bar-chart" aria-hidden="true">#</a> Bar Chart</h3>`,2),A=i(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts A bar chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;xAxis&quot;: {
    &quot;type&quot;: &quot;category&quot;,
    &quot;data&quot;: [&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;, &quot;Thu&quot;, &quot;Fri&quot;, &quot;Sat&quot;, &quot;Sun&quot;]
  },
  &quot;yAxis&quot;: {
    &quot;type&quot;: &quot;value&quot;
  },
  &quot;series&quot;: [
    {
      &quot;data&quot;: [120, 200, 150, 80, 70, 110, 130],
      &quot;type&quot;: &quot;bar&quot;,
      &quot;showBackground&quot;: true,
      &quot;backgroundStyle&quot;: {
        &quot;color&quot;: &quot;rgba(180, 180, 180, 0.2)&quot;
      }
    }
  ]
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="pie-chart" tabindex="-1"><a class="header-anchor" href="#pie-chart" aria-hidden="true">#</a> Pie Chart</h3>`,2),_=i(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts A nightingale chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;legend&quot;: {
    &quot;top&quot;: &quot;bottom&quot;
  },
  &quot;toolbox&quot;: {
    &quot;show&quot;: true,
    &quot;feature&quot;: {
      &quot;mark&quot;: {
        &quot;show&quot;: true
      },
      &quot;dataView&quot;: {
        &quot;show&quot;: true,
        &quot;readOnly&quot;: false
      },
      &quot;restore&quot;: {
        &quot;show&quot;: true
      },
      &quot;saveAsImage&quot;: {
        &quot;show&quot;: true
      }
    }
  },
  &quot;series&quot;: [
    {
      &quot;name&quot;: &quot;Nightingale Chart&quot;,
      &quot;type&quot;: &quot;pie&quot;,
      &quot;radius&quot;: [20, 100],
      &quot;center&quot;: [&quot;50%&quot;, &quot;50%&quot;],
      &quot;roseType&quot;: &quot;area&quot;,
      &quot;itemStyle&quot;: {
        &quot;borderRadius&quot;: 8
      },
      &quot;data&quot;: [
        {
          &quot;value&quot;: 40,
          &quot;name&quot;: &quot;rose 1&quot;
        },
        {
          &quot;value&quot;: 38,
          &quot;name&quot;: &quot;rose 2&quot;
        },
        {
          &quot;value&quot;: 32,
          &quot;name&quot;: &quot;rose 3&quot;
        },
        {
          &quot;value&quot;: 30,
          &quot;name&quot;: &quot;rose 4&quot;
        },
        {
          &quot;value&quot;: 28,
          &quot;name&quot;: &quot;rose 5&quot;
        },
        {
          &quot;value&quot;: 26,
          &quot;name&quot;: &quot;rose 6&quot;
        },
        {
          &quot;value&quot;: 22,
          &quot;name&quot;: &quot;rose 7&quot;
        },
        {
          &quot;value&quot;: 18,
          &quot;name&quot;: &quot;rose 8&quot;
        }
      ]
    }
  ]
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="scatter-chart" tabindex="-1"><a class="header-anchor" href="#scatter-chart" aria-hidden="true">#</a> Scatter Chart</h3>`,2),C=i(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts A scatter chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;xAxis&quot;: {},
  &quot;yAxis&quot;: {},
  &quot;series&quot;: [
    {
      &quot;symbolSize&quot;: 20,
      &quot;data&quot;: [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ],
      &quot;type&quot;: &quot;scatter&quot;
    }
  ]
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="docs" tabindex="-1"><a class="header-anchor" href="#docs" aria-hidden="true">#</a> Docs</h2>`,2),V={href:"https://echarts.apache.org/handbook/en/get-started/",target:"_blank",rel:"noopener noreferrer"};function S(j,E){const l=t("ExternalLinkIcon"),o=t("CodeTabs"),a=t("ECharts");return m(),b("div",null,[h,n("p",null,[e("This plugin is using "),n("a",k,[e("echarts"),s(l)]),e(" to support this feature.")]),p(" more "),g,s(o,{id:"10",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:u(({title:d,value:c,isActive:r})=>[y]),tab1:u(({title:d,value:c,isActive:r})=>[f]),_:1}),x,s(a,{id:"echarts-31",config:"eJyr5lJQUKpwrMgsVrJSAHGA3JLKglQgTyk5sSQ1Pb+oUkkHIp6SWJIIFI9W8s3PU9JRUAopTQVR4akpYF5GKYhyK8oEUcGJJWCqNE8pFqi7FmSEUiV2e8oSc4AmwVUVpxZlpoKURYOVQRQjWW9oaqCjYGQMIoxMgIShhY6CobEpkDAxB3LNDGIh7kWyISczD2wB0AogGctVywUA9j06jQ==",title:"A%20line%20chart"}),w,s(a,{id:"echarts-40",config:"eJxtT7EOgjAQ3fmK5iZNiAGM0bjp4OaEiQNhKNAAkVBTWqUx/Lt3RZHBJn0vr3f3Xu/lMQb9oa872DMSKLW9C1SQcy1KqSz443vBNcf3BM6yBZ/BxQiiqyicqgzRSdVEMdeOTAspTg9kAfZ/zoM36DR1dULVgtoS1zY2z+LDKPBZFCCEG4Qd3i2JkGAdpONvZ/4ZV58VyL2SzyPPb6WSpi2wrJURUzWbKrG2DU1/47GYy0YqMlRlxhchBf8gWEVL2oHO4Jgw9QbvDfcaVXI=",title:"A%20bar%20chart"}),A,s(a,{id:"echarts-49",config:"eJyVk71ugzAUhfc8hWWpWwZCfhp1qzp1aaW26lJluCk3YNVgZF/SoirvXtslQH4gYcHce44/+9jwO2KMS4wxi/gdc5WtSeW24GtFpFJue7uxs5FScq1+Gp9J1LetSBfoDLazQaBCY22xrRT0V6s+nFY1Pd9rERC8C3T6+Rl7p+1qhOg5k6VVNiDNKUyjIXWwmwurG9jivXlMIb48yY/u+X84BrVAYz0fXqjjZ5A6Fn8ScUIii0Eie0hAE69XpTL3llxg09QQicLzwmDMJkGwqqVPzAi1k/g8uOFj5odG18rgW8UEe0gNVBCmr1TKo3RrpSPUL/sVl2dvpY7WjufVLcjCEWdBczmt5G47bOI+oyNsB2a67MaEAzBhN2Y6ANMTanY9JuwJNR+AWXRjFgMwPWdzez1m0hNq2cJUb6v6l1mNdqM/icX4bQ==",title:"A%20nightingale%20chart"}),_,s(a,{id:"echarts-58",config:"eJxtkj1uwzAMhXefgtAsEPqX3K1n6Bh4cFsPBlq0iD3EDXz3kkobhEo0COCnp8dHQecOQJ2eT/OinuC8ay43WS7TcZ64PlAFwDd4qWX7fP36eJl/JjpzhrWVv4/reFXzOliDRkNBE4Z/FVGqs4aEfbyl1rM2Yyy3tEcT2aFYobUXX+8FDReHlBrfwN0ah5osPXQo2EsHh5SBHJxMZolmFJCC3UMazGsI6GQvh46lRVCHhmjAkIW2voJv0lJYoqFJm2o3iiDenLrVeV07WZ23CG1GUzTEZt5Yk0VMZfiD11O1bt/8F9TyNq7rdFSV77QP3d79Ahlkc/0=",title:"A%20scatter%20chart"}),C,n("p",null,[e("For details, please see "),n("a",V,[e("ECharts Docs"),s(l)]),e(".")])])}const W=v(q,[["render",S],["__file","echarts.html.vue"]]);export{W as default};
