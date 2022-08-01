import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{o as b,c as m,b as n,a as e,w as d,d as i,e as s,r as l}from"./app.988efa2e.js";const q={},A=n("p",null,"\u8BA9\u4F60 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301\u56FE\u8868\u3002",-1),C=i("\u6B64\u63D2\u4EF6\u4F7F\u7528 "),B={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},p=i("chart.js"),g=i(" \u63D0\u4F9B\u76F8\u5E94\u529F\u80FD\u3002"),E=n("h2",{id:"\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E","aria-hidden":"true"},"#"),i(" \u914D\u7F6E")],-1),h=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // \u542F\u7528\u56FE\u8868
      chart: true,
    }),
  ],
};
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.js
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");

module.exports = {
  plugins: [
    mdEnhancePlugin({
      // \u542F\u7528\u56FE\u8868
      chart: true,
    }),
  ],
};
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=s(`<h2 id="\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F" aria-hidden="true">#</a> \u683C\u5F0F</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: chart \u6807\u9898

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // \u6B64\u5904\u4E3A\u56FE\u8868\u914D\u7F6E
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u4E5F\u652F\u6301 <code>js</code> \u548C <code>javascript</code> \u7684\u4EE3\u7801\u5757\uFF0C\u4F60\u5E94\u5F53\u5C06\u5BFC\u51FA\u5BF9\u8C61\u8D4B\u503C\u7ED9 <code>module.exports</code>\u3002</p><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><h3 id="\u5757\u72B6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u5757\u72B6\u56FE" aria-hidden="true">#</a> \u5757\u72B6\u56FE</h3>`,5),f=s(`<details class="custom-container details"><summary>\u5BF9\u5E94\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: chart \u4E00\u4E2A\u5757\u72B6\u56FE\u6848\u4F8B

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;bar&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;\u7EA2\u8272&quot;, &quot;\u84DD\u8272&quot;, &quot;\u9EC4\u8272&quot;, &quot;\u7EFF\u8272&quot;, &quot;\u7D2B\u8272&quot;, &quot;\u6A59\u8272&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;\u6295\u7968\u6570&quot;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u6C14\u6CE1\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6C14\u6CE1\u56FE" aria-hidden="true">#</a> \u6C14\u6CE1\u56FE</h3>`,2),_=s(`<details class="custom-container details"><summary>\u5BF9\u5E94\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: chart \u4E00\u4E2A\u6C14\u6CE1\u56FE\u6848\u4F8B

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;bubble&quot;,
  &quot;data&quot;: {
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;\u7B2C\u4E00\u4E2A\u6570\u636E\u96C6&quot;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u7EBF\u72B6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u72B6\u56FE" aria-hidden="true">#</a> \u7EBF\u72B6\u56FE</h3>`,2),x=s(`<details class="custom-container details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: chart \u4E00\u4E2A\u7EBF\u72B6\u56FE\u6848\u4F8B

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;line&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;\u4E00\u6708&quot;, &quot;\u4E8C\u6708&quot;, &quot;\u4E09\u6708&quot;, &quot;\u56DB\u6708&quot;, &quot;\u4E94\u6708&quot;, &quot;\u516D\u6708&quot;, &quot;\u4E03\u6708&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;\u6211\u7684\u7B2C\u4E00\u4E2A\u6570\u636E\u96C6&quot;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u73AB\u7470\u56FE" tabindex="-1"><a class="header-anchor" href="#\u73AB\u7470\u56FE" aria-hidden="true">#</a> \u73AB\u7470\u56FE</h3>`,2),y=s(`<details class="custom-container details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: chart \u4E00\u4E2A\u73AB\u7470\u56FE\u6848\u4F8B

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;polarArea&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;\u7EA2\u8272&quot;, &quot;\u7EFF\u8272&quot;, &quot;\u9EC4\u8272&quot;, &quot;\u7070\u8272&quot;, &quot;\u84DD\u8272&quot;],
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u96F7\u8FBE\u56FE" tabindex="-1"><a class="header-anchor" href="#\u96F7\u8FBE\u56FE" aria-hidden="true">#</a> \u96F7\u8FBE\u56FE</h3>`,2),j=s(`<details class="custom-container details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: chart \u4E00\u4E2A\u96F7\u8FBE\u56FE\u6848\u4F8B

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;radar&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;\u5403\u996D&quot;, &quot;\u559D\u6C34&quot;, &quot;\u7761\u89C9&quot;, &quot;\u8BBE\u8BA1&quot;, &quot;\u7F16\u7A0B&quot;, &quot;\u9A91\u8F66&quot;, &quot;\u8DD1\u6B65&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;\u6211\u7684\u7B2C\u4E00\u4E2A\u6570\u636E\u96C6&quot;,
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
        &quot;label&quot;: &quot;\u6211\u7684\u7B2C\u4E8C\u4E2A\u6570\u636E\u96C6&quot;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u6563\u70B9\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6563\u70B9\u56FE" aria-hidden="true">#</a> \u6563\u70B9\u56FE</h3>`,2),w=s(`<details class="custom-container details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: chart \u4E00\u4E2A\u6563\u70B9\u56FE\u6848\u4F8B

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;scatter&quot;,
  &quot;data&quot;: {
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;\u6563\u70B9\u6570\u636E\u96C6&quot;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863" aria-hidden="true">#</a> \u6587\u6863</h2>`,2),H=i("\u76F8\u5173\u8BE6\u60C5\uFF0C\u8BE6\u89C1 "),F={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},P=i("Chart.js \u6587\u6863"),S=i(".");function V(N,T){const o=l("ExternalLinkIcon"),t=l("CodeTabs"),a=l("ChartJS");return b(),m("div",null,[A,n("p",null,[C,n("a",B,[p,e(o)]),g]),E,e(t,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:d(({title:u,value:r,isActive:c})=>[h]),tab1:d(({title:u,value:r,isActive:c})=>[k]),_:1}),D,e(a,{id:"chart-382ee184",config:"%7B%0A%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22%E7%BA%A2%E8%89%B2%22%2C%20%22%E8%93%9D%E8%89%B2%22%2C%20%22%E9%BB%84%E8%89%B2%22%2C%20%22%E7%BB%BF%E8%89%B2%22%2C%20%22%E7%B4%AB%E8%89%B2%22%2C%20%22%E6%A9%99%E8%89%B2%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E6%8A%95%E7%A5%A8%E6%95%B0%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B12%2C%2019%2C%203%2C%205%2C%202%2C%203%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20206%2C%2086%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%200.2)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20206%2C%2086%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%201)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22borderWidth%22%3A%201%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22y%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22beginAtZero%22%3A%20true%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A",title:"%E4%B8%80%E4%B8%AA%E5%9D%97%E7%8A%B6%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),f,e(a,{id:"chart-382ee1a2",config:"%7B%0A%20%20%22type%22%3A%20%22bubble%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%95%B0%E6%8D%AE%E9%9B%86%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%2020%2C%20%22y%22%3A%2030%2C%20%22r%22%3A%2015%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%2040%2C%20%22y%22%3A%2010%2C%20%22r%22%3A%2010%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D%0A",title:"%E4%B8%80%E4%B8%AA%E6%B0%94%E6%B3%A1%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),_,e(a,{id:"chart-382ee1ab",config:"%7B%0A%20%20%22type%22%3A%20%22line%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22%E4%B8%80%E6%9C%88%22%2C%20%22%E4%BA%8C%E6%9C%88%22%2C%20%22%E4%B8%89%E6%9C%88%22%2C%20%22%E5%9B%9B%E6%9C%88%22%2C%20%22%E4%BA%94%E6%9C%88%22%2C%20%22%E5%85%AD%E6%9C%88%22%2C%20%22%E4%B8%83%E6%9C%88%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%95%B0%E6%8D%AE%E9%9B%86%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B65%2C%2059%2C%2080%2C%2081%2C%2056%2C%2055%2C%2040%5D%2C%0A%20%20%20%20%20%20%20%20%22fill%22%3A%20false%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%22rgb(75%2C%20192%2C%20192)%22%2C%0A%20%20%20%20%20%20%20%20%22tension%22%3A%200.1%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D%0A",title:"%E4%B8%80%E4%B8%AA%E7%BA%BF%E7%8A%B6%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),x,e(a,{id:"chart-382ee1c9",config:"%7B%0A%20%20%22type%22%3A%20%22polarArea%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22%E7%BA%A2%E8%89%B2%22%2C%20%22%E7%BB%BF%E8%89%B2%22%2C%20%22%E9%BB%84%E8%89%B2%22%2C%20%22%E7%81%B0%E8%89%B2%22%2C%20%22%E8%93%9D%E8%89%B2%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22My%20First%20Dataset%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B11%2C%2016%2C%207%2C%203%2C%2014%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgb(255%2C%2099%2C%20132)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(75%2C%20192%2C%20192)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(255%2C%20205%2C%2086)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(201%2C%20203%2C%20207)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(54%2C%20162%2C%20235)%22%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D%0A",title:"%E4%B8%80%E4%B8%AA%E7%8E%AB%E7%91%B0%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),y,e(a,{id:"chart-382ee1e7",config:"%7B%0A%20%20%22type%22%3A%20%22radar%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22%E5%90%83%E9%A5%AD%22%2C%20%22%E5%96%9D%E6%B0%B4%22%2C%20%22%E7%9D%A1%E8%A7%89%22%2C%20%22%E8%AE%BE%E8%AE%A1%22%2C%20%22%E7%BC%96%E7%A8%8B%22%2C%20%22%E9%AA%91%E8%BD%A6%22%2C%20%22%E8%B7%91%E6%AD%A5%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%95%B0%E6%8D%AE%E9%9B%86%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B65%2C%2059%2C%2090%2C%2081%2C%2056%2C%2055%2C%2040%5D%2C%0A%20%20%20%20%20%20%20%20%22fill%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgba(255%2C%2099%2C%20132%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%2C%0A%20%20%20%20%20%20%20%20%22pointBackgroundColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%2C%0A%20%20%20%20%20%20%20%20%22pointBorderColor%22%3A%20%22%23fff%22%2C%0A%20%20%20%20%20%20%20%20%22pointHoverBackgroundColor%22%3A%20%22%23fff%22%2C%0A%20%20%20%20%20%20%20%20%22pointHoverBorderColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E6%88%91%E7%9A%84%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%95%B0%E6%8D%AE%E9%9B%86%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B28%2C%2048%2C%2040%2C%2019%2C%2096%2C%2027%2C%20100%5D%2C%0A%20%20%20%20%20%20%20%20%22fill%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgba(54%2C%20162%2C%20235%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%22rgb(54%2C%20162%2C%20235)%22%2C%0A%20%20%20%20%20%20%20%20%22pointBackgroundColor%22%3A%20%22rgb(54%2C%20162%2C%20235)%22%2C%0A%20%20%20%20%20%20%20%20%22pointBorderColor%22%3A%20%22%23fff%22%2C%0A%20%20%20%20%20%20%20%20%22pointHoverBackgroundColor%22%3A%20%22%23fff%22%2C%0A%20%20%20%20%20%20%20%20%22pointHoverBorderColor%22%3A%20%22rgb(54%2C%20162%2C%20235)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22elements%22%3A%20%7B%0A%20%20%20%20%20%20%22line%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22borderWidth%22%3A%203%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A",title:"%E4%B8%80%E4%B8%AA%E9%9B%B7%E8%BE%BE%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),j,e(a,{id:"chart-382ee205",config:"%7B%0A%20%20%22type%22%3A%20%22scatter%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E6%95%A3%E7%82%B9%E6%95%B0%E6%8D%AE%E9%9B%86%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%20-10%2C%20%22y%22%3A%200%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200%2C%20%22y%22%3A%2010%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%2010%2C%20%22y%22%3A%205%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200.5%2C%20%22y%22%3A%205.5%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22x%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22linear%22%2C%0A%20%20%20%20%20%20%20%20%22position%22%3A%20%22bottom%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),w,n("p",null,[H,n("a",F,[P,e(o)]),S])])}var M=v(q,[["render",V],["__file","chart.html.vue"]]);export{M as default};
