import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as m,c as b,b as e,a as n,w as t,d as i,e as s}from"./app.6c8e4fde.js";const A={},q=e("p",null,"Let the Markdown file support chart in your VuePress site.",-1),h=i("This plugin is using "),p={href:"https://echarts.apache.org/en/index.html",target:"_blank",rel:"noopener noreferrer"},C=i("echarts"),g=i(" to support this feature."),B=e("h2",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),i(" Config")],-1),D=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // Enable echarts
      echarts: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");

module.exports = {
  plugins: [
    mdEnhancePlugin({
      // Enable echarts
      echarts: true,
    }),
  ],
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=s(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // Your echarts config here.
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>js</code> and <code>javascript</code> code block is also supported, and you are expected to assign your export object to <code>module.exports</code>.</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><h3 id="line-chart" tabindex="-1"><a class="header-anchor" href="#line-chart" aria-hidden="true">#</a> Line Chart</h3>`,5),_=s(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts A line chart

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="bar-chart" tabindex="-1"><a class="header-anchor" href="#bar-chart" aria-hidden="true">#</a> Bar Chart</h3>`,2),y=s(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts A bar chart

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="pie-chart" tabindex="-1"><a class="header-anchor" href="#pie-chart" aria-hidden="true">#</a> Pie Chart</h3>`,2),f=s(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts A nightingale chart

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="scatter-chart" tabindex="-1"><a class="header-anchor" href="#scatter-chart" aria-hidden="true">#</a> Scatter Chart</h3>`,2),w=s(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts A scatter chart

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="docs" tabindex="-1"><a class="header-anchor" href="#docs" aria-hidden="true">#</a> Docs</h2>`,2),S=i("For details, please see "),j={href:"https://echarts.apache.org/handbook/en/get-started/",target:"_blank",rel:"noopener noreferrer"},T=i("ECharts Docs"),E=i(".");function V(N,P){const d=l("ExternalLinkIcon"),u=l("CodeTabs"),a=l("ECharts");return m(),b("div",null,[q,e("p",null,[h,e("a",p,[C,n(d)]),g]),B,n(u,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:t(({title:r,value:o,isActive:c})=>[D]),tab1:t(({title:r,value:o,isActive:c})=>[x]),_:1}),k,n(a,{id:"echarts-382ee184",config:"%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%22Mon%22%2C%20%22Tue%22%2C%20%22Wed%22%2C%20%22Thu%22%2C%20%22Fri%22%2C%20%22Sat%22%2C%20%22Sun%22%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B150%2C%20230%2C%20224%2C%20218%2C%20135%2C%20147%2C%20260%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22line%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A",title:"A%20line%20chart",type:"json"}),_,n(a,{id:"echarts-382ee1a2",config:"%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%22Mon%22%2C%20%22Tue%22%2C%20%22Wed%22%2C%20%22Thu%22%2C%20%22Fri%22%2C%20%22Sat%22%2C%20%22Sun%22%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B120%2C%20200%2C%20150%2C%2080%2C%2070%2C%20110%2C%20130%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%22showBackground%22%3A%20true%2C%0A%20%20%20%20%20%20%22backgroundStyle%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22color%22%3A%20%22rgba(180%2C%20180%2C%20180%2C%200.2)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A",title:"A%20bar%20chart",type:"json"}),y,n(a,{id:"echarts-382ee1ab",config:"%7B%0A%20%20%22legend%22%3A%20%7B%0A%20%20%20%20%22top%22%3A%20%22bottom%22%0A%20%20%7D%2C%0A%20%20%22toolbox%22%3A%20%7B%0A%20%20%20%20%22show%22%3A%20true%2C%0A%20%20%20%20%22feature%22%3A%20%7B%0A%20%20%20%20%20%20%22mark%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22show%22%3A%20true%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22dataView%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22show%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22readOnly%22%3A%20false%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22restore%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22show%22%3A%20true%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22saveAsImage%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22show%22%3A%20true%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Nightingale%20Chart%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22pie%22%2C%0A%20%20%20%20%20%20%22radius%22%3A%20%5B20%2C%20100%5D%2C%0A%20%20%20%20%20%20%22center%22%3A%20%5B%2250%25%22%2C%20%2250%25%22%5D%2C%0A%20%20%20%20%20%20%22roseType%22%3A%20%22area%22%2C%0A%20%20%20%20%20%20%22itemStyle%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22borderRadius%22%3A%208%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%201%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2038%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%202%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2032%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%203%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%204%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2028%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%205%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2026%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%206%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2022%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%207%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2018%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%208%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A",title:"A%20nightingale%20chart",type:"json"}),f,n(a,{id:"echarts-382ee1c9",config:"%7B%0A%20%20%22xAxis%22%3A%20%7B%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22symbolSize%22%3A%2020%2C%0A%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%5B10.0%2C%208.04%5D%2C%0A%20%20%20%20%20%20%20%20%5B8.07%2C%206.95%5D%2C%0A%20%20%20%20%20%20%20%20%5B13.0%2C%207.58%5D%2C%0A%20%20%20%20%20%20%20%20%5B9.05%2C%208.81%5D%2C%0A%20%20%20%20%20%20%20%20%5B11.0%2C%208.33%5D%2C%0A%20%20%20%20%20%20%20%20%5B14.0%2C%207.66%5D%2C%0A%20%20%20%20%20%20%20%20%5B13.4%2C%206.81%5D%2C%0A%20%20%20%20%20%20%20%20%5B10.0%2C%206.33%5D%2C%0A%20%20%20%20%20%20%20%20%5B14.0%2C%208.96%5D%2C%0A%20%20%20%20%20%20%20%20%5B12.5%2C%206.82%5D%2C%0A%20%20%20%20%20%20%20%20%5B9.15%2C%207.2%5D%2C%0A%20%20%20%20%20%20%20%20%5B11.5%2C%207.2%5D%2C%0A%20%20%20%20%20%20%20%20%5B3.03%2C%204.23%5D%2C%0A%20%20%20%20%20%20%20%20%5B12.2%2C%207.83%5D%2C%0A%20%20%20%20%20%20%20%20%5B2.02%2C%204.47%5D%2C%0A%20%20%20%20%20%20%20%20%5B1.05%2C%203.33%5D%2C%0A%20%20%20%20%20%20%20%20%5B4.05%2C%204.96%5D%2C%0A%20%20%20%20%20%20%20%20%5B6.03%2C%207.24%5D%2C%0A%20%20%20%20%20%20%20%20%5B12.0%2C%206.26%5D%2C%0A%20%20%20%20%20%20%20%20%5B12.0%2C%208.84%5D%2C%0A%20%20%20%20%20%20%20%20%5B7.08%2C%205.82%5D%2C%0A%20%20%20%20%20%20%20%20%5B5.02%2C%205.68%5D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22scatter%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A",title:"A%20scatter%20chart",type:"json"}),w,e("p",null,[S,e("a",j,[T,n(d)]),E])])}var I=v(A,[["render",V],["__file","echarts.html.vue"]]);export{I as default};
