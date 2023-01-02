import{_ as v,W as b,X as q,$ as n,a0 as s,Y as e,a1 as m,Z as l,a2 as a,g as t}from"./framework-346270e9.js";const p={},h=n("p",null,"Let the Markdown file support chart in your VuePress site.",-1),g={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),s(" Config")],-1),C=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// Enable Chart"),s(`
      chart`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// Enable Chart"),s(`
      `),n("span",{class:"token literal-property property"},"chart"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=a(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: chart Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // Your chart config here.
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre></div><p><code>js</code> and <code>javascript</code> code block is also supported, and you are expected to assign your export object to <code>module.exports</code>.</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><h3 id="bar-chart" tabindex="-1"><a class="header-anchor" href="#bar-chart" aria-hidden="true">#</a> Bar Chart</h3>`,5),x=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A bar chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;bar&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;Red&quot;, &quot;Blue&quot;, &quot;Yellow&quot;, &quot;Green&quot;, &quot;Purple&quot;, &quot;Orange&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;# of Votes&quot;,
        &quot;data&quot;: [12, 19, 3, 5, 2, 3],
        &quot;backgroundColor&quot;: [
          &quot;rgba(255, 99, 132, 0.2)&quot;,
          &quot;rgba(54, 162, 235, 0.2)&quot;,
          &quot;rgba(255, 206, 86, 0.2)&quot;,
          &quot;rgba(75, 192, 192, 0.2)&quot;,
          &quot;rgba(153, 102, 255, 0.2)&quot;,
          &quot;rgba(255, 159, 64, 0.2)&quot;
        ],
        &quot;borderColor&quot;: [
          &quot;rgba(255, 99, 132, 1)&quot;,
          &quot;rgba(54, 162, 235, 1)&quot;,
          &quot;rgba(255, 206, 86, 1)&quot;,
          &quot;rgba(75, 192, 192, 1)&quot;,
          &quot;rgba(153, 102, 255, 1)&quot;,
          &quot;rgba(255, 159, 64, 1)&quot;
        ],
        &quot;borderWidth&quot;: 1
      }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;y&quot;: {
        &quot;beginAtZero&quot;: true
      }
    }
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="bubble-chart" tabindex="-1"><a class="header-anchor" href="#bubble-chart" aria-hidden="true">#</a> Bubble Chart</h3>`,2),w=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A Bubble Chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;bubble&quot;,
  &quot;data&quot;: {
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;First Dataset&quot;,
        &quot;data&quot;: [
          { &quot;x&quot;: 20, &quot;y&quot;: 30, &quot;r&quot;: 15 },
          { &quot;x&quot;: 40, &quot;y&quot;: 10, &quot;r&quot;: 10 }
        ],
        &quot;backgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;
      }
    ]
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="line-chart" tabindex="-1"><a class="header-anchor" href="#line-chart" aria-hidden="true">#</a> Line Chart</h3>`,2),A=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A Line Chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;line&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;January&quot;, &quot;February&quot;, &quot;March&quot;, &quot;April&quot;, &quot;May&quot;, &quot;June&quot;, &quot;July&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;My First Dataset&quot;,
        &quot;data&quot;: [65, 59, 80, 81, 56, 55, 40],
        &quot;fill&quot;: false,
        &quot;borderColor&quot;: &quot;rgb(75, 192, 192)&quot;,
        &quot;tension&quot;: 0.1
      }
    ]
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="polar-area-chart" tabindex="-1"><a class="header-anchor" href="#polar-area-chart" aria-hidden="true">#</a> Polar Area Chart</h3>`,2),j=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A Polar Area Chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;polarArea&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;Red&quot;, &quot;Green&quot;, &quot;Yellow&quot;, &quot;Grey&quot;, &quot;Blue&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;My First Dataset&quot;,
        &quot;data&quot;: [11, 16, 7, 3, 14],
        &quot;backgroundColor&quot;: [
          &quot;rgb(255, 99, 132)&quot;,
          &quot;rgb(75, 192, 192)&quot;,
          &quot;rgb(255, 205, 86)&quot;,
          &quot;rgb(201, 203, 207)&quot;,
          &quot;rgb(54, 162, 235)&quot;
        ]
      }
    ]
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="radar-chart" tabindex="-1"><a class="header-anchor" href="#radar-chart" aria-hidden="true">#</a> Radar Chart</h3>`,2),P=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A Radar Chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;radar&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [
      &quot;Eating&quot;,
      &quot;Drinking&quot;,
      &quot;Sleeping&quot;,
      &quot;Designing&quot;,
      &quot;Coding&quot;,
      &quot;Cycling&quot;,
      &quot;Running&quot;
    ],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;My First Dataset&quot;,
        &quot;data&quot;: [65, 59, 90, 81, 56, 55, 40],
        &quot;fill&quot;: true,
        &quot;backgroundColor&quot;: &quot;rgba(255, 99, 132, 0.2)&quot;,
        &quot;borderColor&quot;: &quot;rgb(255, 99, 132)&quot;,
        &quot;pointBackgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;,
        &quot;pointBorderColor&quot;: &quot;#fff&quot;,
        &quot;pointHoverBackgroundColor&quot;: &quot;#fff&quot;,
        &quot;pointHoverBorderColor&quot;: &quot;rgb(255, 99, 132)&quot;
      },
      {
        &quot;label&quot;: &quot;My Second Dataset&quot;,
        &quot;data&quot;: [28, 48, 40, 19, 96, 27, 100],
        &quot;fill&quot;: true,
        &quot;backgroundColor&quot;: &quot;rgba(54, 162, 235, 0.2)&quot;,
        &quot;borderColor&quot;: &quot;rgb(54, 162, 235)&quot;,
        &quot;pointBackgroundColor&quot;: &quot;rgb(54, 162, 235)&quot;,
        &quot;pointBorderColor&quot;: &quot;#fff&quot;,
        &quot;pointHoverBackgroundColor&quot;: &quot;#fff&quot;,
        &quot;pointHoverBorderColor&quot;: &quot;rgb(54, 162, 235)&quot;
      }
    ]
  },
  &quot;options&quot;: {
    &quot;elements&quot;: {
      &quot;line&quot;: {
        &quot;borderWidth&quot;: 3
      }
    }
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="scatter-chart" tabindex="-1"><a class="header-anchor" href="#scatter-chart" aria-hidden="true">#</a> Scatter Chart</h3>`,2),E=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart A Scatter Chart

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;scatter&quot;,
  &quot;data&quot;: {
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;Scatter Dataset&quot;,
        &quot;data&quot;: [
          { &quot;x&quot;: -10, &quot;y&quot;: 0 },
          { &quot;x&quot;: 0, &quot;y&quot;: 10 },
          { &quot;x&quot;: 10, &quot;y&quot;: 5 },
          { &quot;x&quot;: 0.5, &quot;y&quot;: 5.5 }
        ],
        &quot;backgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;
      }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;x&quot;: {
        &quot;type&quot;: &quot;linear&quot;,
        &quot;position&quot;: &quot;bottom&quot;
      }
    }
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="docs" tabindex="-1"><a class="header-anchor" href="#docs" aria-hidden="true">#</a> Docs</h2>`,2),Q={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"};function _(B,J){const o=t("ExternalLinkIcon"),u=t("CodeTabs"),i=t("ChartJS");return b(),q("div",null,[h,n("p",null,[s("This plugin is using "),n("a",g,[s("chart.js"),e(o)]),s(" to support this feature.")]),m(" more "),k,e(u,{id:"10",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:l(({title:d,value:r,isActive:c})=>[C]),tab1:l(({title:d,value:r,isActive:c})=>[y]),_:1}),f,e(i,{id:"chart-31",config:"eJyNUj1PwzAQ3fsrLLOAZKE6IYGwAQMjiAEEVQenOUKEFUeOI1Sh/HfuLLckKCkd/HH3nt/ds+57wRh32wb4NeO5slxQolBOYYJAjLTKQbcYr/gTFFwwfqs7oPMVtDZfdLu3ADVdHjvbaA8+WFWXwNekGDRbcF7HZ1jQ/61BPZww886ejYPWtxLg0NBKRoLJTLBYsEQwDOIg71m52nyW1nR1cWe0sYNKHrZlrk6jBB9mKCFjfL48j84GdXak5ALxFPEoRvYMyStFy1SwK1wzpEvkyMx3PV9OJuhHLqkeaR6qJxNsPcX2PGnPGf2CsQXYY39A/u9/kjJ2P0kZe5+k/HE+X2nvGykHXL9UhftA1zIAvT/XuPd+sE3jKlPTDIbZbjdK46jtYsxsBwHpQlnVN+4NrEHA2Q5G0rT3i37xA75CsCY=",title:"A%20bar%20chart",type:"json"}),x,e(i,{id:"chart-40",config:"eJxNjUEOwiAURPc9xc9facKiUFnUrcZLmC7AksZIxABNbAx3FyhFN2SYeTP/0wCgX14Kj4ByllIrJMkbhRfRS3n5OeVddK7ZgZLkVAupdBq43K3zcF7hvFOIsrZ1cx/wHS3WEsAlii4JGwXlEH7VCh42kFawhVC54e+aFLfHZM38HE9Gm4SineSOcU6g7wnQju2x4OvCEN/QhOYLM1k72g==",title:"A%20Bubble%20Chart",type:"json"}),w,e(i,{id:"chart-49",config:"eJxNTssKgzAQvPsVS04tSNHS96209CD4BeIh1tgGgsomHqT4792NKfWwr9nZmf1EAMKNvRIXEEa3SsSM1NJJQnhLk5GVMpbmQmSyHSSOIgbxUBX++lzi883NtUdtZsQvsoEluZpRlKwd1K1yXtEjEJz+bvxOPsJDo3Vwn/n+tUAKDxaHfQz7cwynhCKl/kBB2C4JZp7daMOKjTRWLeCqw1rhrTMdsh++qtWRbtPz1qf10tCp1uquJV6ySQM8+VpSnqIp+gLndFA2",title:"A%20Line%20Chart",type:"json"}),A,e(i,{id:"chart-58",config:"eJxtTrsOwjAM3PsVlieQMrQppZSNh2BiYUOIIaUWQkQEpUWoQv13nBBBhy5+3J3P944AsGkfhHPAh9HKLiwpFA6uVKMYdhLetCpJ17wfcU8VCsCtJbq74UBam1eAWteX+kl4ci7Bp6bG33oEguff133ftbC52rqB9VfvQwRRiHJMEgHJVEAuIOVpEl54TanOt4s1z3u1MtrY3jdP20s5klkmoCj4MpXjnn+gc2aTQvoyQPtrGXOZTYfomMPJmHPJOB/gs4nLzu4yzcb4Y09h6nx3Wxd10QeFAVlO",title:"A%20Polar%20Area%20Chart",type:"json"}),j,e(i,{id:"chart-67",config:"eJy9VD1PwzAQ3fsrrLCAFKE0/aBlpAWxsNCBoWJw6kuwauzIcZAilP/O2UloLEpTCYkhlu/53t2zny6fI0ICU+UQ3JJAU0Z1EFqIUUMRsscYCZqAKDDeuhiRe2q4zFyui9eay72HbARA7udAwTPpQSvF/LjaCQ94LqVjuPi1gZ24AkxfUCP0INZe56kiD1wXhqyb/O+qh/tt57OQzJYhWUYhWYxxP8cPsWnUNnPZKRe2otEl9NCE7vaZVqVkKyWUdi+YJfQytgWWWHQ8iUMSXcdX/c6J0gx0n+ERvNxccWnujrYZIvldLtI0/ZHzqD5AH6l+InlIe0uqO/YvtmxgpyQ75Uu8QA/sh76MrT/oS3yD++gPxsymWGCOnsQTFH2GMX3C2cYMkP7LGF9GZ0wzR7g6iwKVG66kHaR20kHAO0g3Wp13AU6k/T30vGye6oUz84YHE6+4XetRPfoCDysUmg==",title:"A%20Radar%20Chart",type:"json"}),P,e(i,{id:"chart-76",config:"eJxtUEsKgzAQ3XuKIasWrKjFhd22N+iyuIgaRJoa0RQqxbt3Jh+14CYk7zeT9w0AmJ56wS7AxoprLQYWElhzzREkgXuNQo+IPAwCjjGs5KWQlHC3CXCzcpPkNC7Pu00CsA9CpyQOgU14i2FeHQvv2WSfXtzZvjvKPB+hYhEUm91KXj2bQb27+qqkGugnQ1Me0gyteR5Cck6PzMltQoGnmcZUr1vVUTGuKmxRivWNCK2xacvXLdtOcNu2Y3o1tpRGbKm0Vq//qXTOwRz8AH72Yfs=",title:"A%20Scatter%20Chart",type:"json"}),E,n("p",null,[s("For details, please see "),n("a",Q,[s("Chart.js Docs"),e(o)]),s(".")])])}const K=v(p,[["render",_],["__file","chart.html.vue"]]);export{K as default};
