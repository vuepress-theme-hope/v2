import{_ as g}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,a as i,h,e as s,b as l,d as n,f as c,r as p,o as B}from"./app-B2hbwghy.js";const m={},A={class:"hint-container tip"};function y(b,e){const r=p("RouteLink"),o=p("CodeTabs"),d=p("VuePlayground"),k=p("MdDemo");return B(),u("div",null,[e[15]||(e[15]=i("p",null,"The plugin provides you vue playground support.",-1)),h(" more "),i("div",A,[e[5]||(e[5]=i("p",{class:"hint-container-title"},"Tips",-1)),e[6]||(e[6]=i("p",null,[s("Since we are providing a runtime compiler, we are introducing the whole "),i("code",null,"@vue/compiler-sfc"),s(" package with typescript support, so the whole Vue Playground chunk is > 4MB. So you should only use this if you are heavily depending on interactive Vue Playground.")],-1)),i("p",null,[e[2]||(e[2]=s("You can use ")),l(r,{to:"/guide/code/demo/vue.html"},{default:n(()=>e[0]||(e[0]=[s("Vue Demo")])),_:1}),e[3]||(e[3]=s(" and ")),l(r,{to:"/guide/code/playground.html"},{default:n(()=>e[1]||(e[1]=[s("Playground Vue Preset")])),_:1}),e[4]||(e[4]=s(" as an alternative."))])]),h(" #region settings "),e[16]||(e[16]=i("h2",{id:"settings",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#settings"},[i("span",null,"Settings")])],-1)),e[17]||(e[17]=i("p",null,[s("Install "),i("code",null,"@vue/repl"),s(" in your project:")],-1)),l(o,{id:"19",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:n(({value:a,isActive:t})=>e[7]||(e[7]=[s("pnpm")])),title1:n(({value:a,isActive:t})=>e[8]||(e[8]=[s("yarn")])),title2:n(({value:a,isActive:t})=>e[9]||(e[9]=[s("npm")])),tab0:n(({value:a,isActive:t})=>e[10]||(e[10]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pnpm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vue/repl")])])])],-1)])),tab1:n(({value:a,isActive:t})=>e[11]||(e[11]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vue/repl")])])])],-1)])),tab2:n(({value:a,isActive:t})=>e[12]||(e[12]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," i"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @vue/repl")])])])],-1)])),_:1}),e[18]||(e[18]=i("p",null,"Then enabling via:",-1)),h(" #endregion settings "),e[19]||(e[19]=c(`<div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">mdEnhance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-plugin-md-enhance&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    mdEnhance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // enable vue playground</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      vuePlayground</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div>`,1)),h(" #region after "),e[20]||(e[20]=c(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>To use vue playground, you should use a container named <code>vue-playground</code>.</p><p>In it, you can use 3 directives:</p><ul><li><code>@file FileName</code> then a code block to add files</li><li><code>@import</code> then a json block to customize &quot;import map&quot;</li><li><code>@setting</code> then a json block to customize settings</li></ul><p>You can see the below demos to see more details.</p><p>You can import and call <code>defineVuePlaygroundConfig</code> in <a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">client config file</a> to customize <code>@vue/repl</code>:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/client.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineVuePlaygroundConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-plugin-md-enhance/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">defineVuePlaygroundConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // \`@vue/repl\` options here</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2>`,8)),l(k,{title:"Simple Vue Playground",id:"md-demo-72"},{default:n(()=>[l(d,{title:"Playground%201",key:"418ee9cb",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gUGxheWdyb3VuZCFcIik7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aDE%2Be3sgbXNnIH19PC9oMT5cbiAgPGlucHV0IHYtbW9kZWw9XCJtc2dcIiAvPlxuPC90ZW1wbGF0ZT5cbiJ9"})]),code:n(()=>e[13]||(e[13]=[i("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"::: vue-playground Playground 1")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"@file App.vue")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```vue")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<script setup>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},'import { ref } from "vue";')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},'const msg = ref("Hello Playground!");')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<\/script>")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<template>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  <h1>{{ msg }}</h1>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},'  <input v-model="msg" />')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"</template>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":::")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),l(k,{title:"Vue Playground with customized settings and import",id:"md-demo-82"},{default:n(()=>[l(d,{title:"Playground%202",key:"c92b57e6",settings:"%7B%22showCompileOutput%22%3Atrue%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBDb21wIGZyb20gXCIuL0NvbXAudnVlXCI7XG5cbmNvbnN0IG1zZyA9IHJlZihcIkhlbGxvIFBsYXlncm91bmQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbiAgPENvbXAgLz5cbjwvdGVtcGxhdGU%2BXG4iLCJDb21wLnZ1ZSI6IjxzY3JpcHQgc2V0dXA%2BXG5pbXBvcnQgeyB1c2VCYXR0ZXJ5IH0gZnJvbSBcIkB2dWV1c2UvY29yZVwiO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiO1xuXG5jb25zdCB7IGNoYXJnaW5nLCBsZXZlbCB9ID0gdXNlQmF0dGVyeSgpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPkJhdHRlcnkgc3RhdHVzPC9oMT5cbiAgPHA%2BQ2hhcmdpbmc6IHt7IGNoYXJnaW5nIH19PC9wPlxuICA8cD5MZXZlbDoge3sgbGV2ZWwgKiAxMDAgfX0lPC9wPlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcIkB2dWV1c2UvY29yZVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL0B2dWV1c2UvY29yZS9pbmRleC5tanNcIixcbiAgICBcIkB2dWV1c2Uvc2hhcmVkXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vQHZ1ZXVzZS9zaGFyZWQvaW5kZXgubWpzXCIsXG4gICAgXCJ2dWUtZGVtaVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL3Z1ZS1kZW1pL2xpYi9pbmRleC5tanNcIlxuICB9XG59XG4ifQ%3D%3D"})]),code:n(()=>e[14]||(e[14]=[i("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"::: vue-playground Playground 2")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"@file App.vue")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```vue")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<script setup>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},'import { ref } from "vue";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},'import Comp from "./Comp.vue";')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},'const msg = ref("Hello Playground!");')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<\/script>")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<template>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  <h1>{{ msg }}</h1>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},'  <input v-model="msg" />')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  <Comp />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"</template>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"@file Comp.vue")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```vue")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<script setup>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},'import { useBattery } from "@vueuse/core";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},'import { ref } from "vue";')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"const { charging, level } = useBattery();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<\/script>")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<template>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  <h1>Battery status</h1>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  <p>Charging: {{ charging }}</p>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  <p>Level: {{ level * 100 }}%</p>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"</template>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"@import")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```json")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'  "imports"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'    "@vueuse/core"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"https://unpkg.com/@vueuse/core/index.mjs"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'    "@vueuse/shared"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"https://unpkg.com/@vueuse/shared/index.mjs"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'    "vue-demi"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"https://unpkg.com/vue-demi/lib/index.mjs"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"@setting")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```json")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},'  "showCompileOutput"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#D19A66"}},"true")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":::")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),h(" #endregion after ")])}const C=g(m,[["render",y],["__file","vue-playground.html.vue"]]),f=JSON.parse('{"path":"/guide/code/vue-playground.html","title":"Vue Playground","lang":"en-US","frontmatter":{"title":"Vue Playground","icon":"fab fa-vuejs","description":"The plugin provides you vue playground support. Tips Since we are providing a runtime compiler, we are introducing the whole @vue/compiler-sfc package with typescript support, s...","head":[["link",{"rel":"canonical","href":"https://plugin-md-enhance.vuejs.press/guide/code/vue-playground.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/guide/code/vue-playground.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/md-enhance/guide/code/vue-playground.html"}],["meta",{"property":"og:site_name","content":"Markdown Enhance"}],["meta",{"property":"og:title","content":"Vue Playground"}],["meta",{"property":"og:description","content":"The plugin provides you vue playground support. Tips Since we are providing a runtime compiler, we are introducing the whole @vue/compiler-sfc package with typescript support, s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-28T16:56:34.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-28T16:56:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue Playground\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T16:56:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Settings","slug":"settings","link":"#settings","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]}],"git":{"createdTime":1662992789000,"updatedTime":1711644994000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":6}]},"readingTime":{"minutes":1.22,"words":366},"filePathRelative":"guide/code/vue-playground.md","localizedDate":"September 12, 2022","autoDesc":true}');export{C as comp,f as data};
