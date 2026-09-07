import{D as e,L as t,f as n,h as r,j as i,l as a,m as o,p as s}from"./app-TYE7e5Qy.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/zh/guide/code/sandpack.html","title":"Sandpack 交互演示","lang":"zh-CN","frontmatter":{"title":"Sandpack 交互演示","icon":"code","description":"基于 sandpack-vue3 的 Sandpack 交互演示支持。 提示 如果你需要重度依赖 Sandpack 交互演示，你才应该使用本插件。 配置 在你的项目中安装 sandpack-vue3: 之后启用它: .vuepress/config.js 使用 要使用交互演示，你应该使用一个名为 sandpack#template 的容器。 在其中，你...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Sandpack 交互演示\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-04T13:34:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.gitee.io/v2/md-enhance/zh/guide/code/sandpack.html"}],["meta",{"property":"og:site_name","content":"Markdown 增强"}],["meta",{"property":"og:title","content":"Sandpack 交互演示"}],["meta",{"property":"og:description","content":"基于 sandpack-vue3 的 Sandpack 交互演示支持。 提示 如果你需要重度依赖 Sandpack 交互演示，你才应该使用本插件。 配置 在你的项目中安装 sandpack-vue3: 之后启用它: .vuepress/config.js 使用 要使用交互演示，你应该使用一个名为 sandpack#template 的容器。 在其中，你..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-06-04T13:34:02.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-04T13:34:02.000Z"}],["link",{"rel":"canonical","href":"https://plugin-md-enhance.vuejs.press/zh/guide/code/sandpack.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.gitee.io/v2/md-enhance/guide/code/sandpack.html"}]]},"git":{"createdTime":1704545104000,"updatedTime":1749044042000,"contributors":[{"name":"Mr.Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":7,"avatar":"https://avatars.githubusercontent.com/Mister-Hope?v=4","url":"https://github.com/Mister-Hope"},{"name":"ZhaoBin","username":"ZhaoBin","email":"413853119@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/ZhaoBin?v=4","url":"https://github.com/ZhaoBin"},{"name":"renovate[bot]","username":"renovate[bot]","email":"29139614+renovate[bot]@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/renovate[bot]?v=4","url":"https://github.com/renovate[bot]"}],"changelog":[{"hash":"1bd5f5e5939f5f8fd6adb083fbfea0bb9cf62021","time":1749044042000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"build: bump deps"},{"hash":"b17415642c7cb31b1f6708eb0fd1088a71ee11ac","time":1744606391000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: tweaks"},{"hash":"22787ac127e25c078638b854eec74f2caa44598c","time":1733510882000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat!: replace plugins with official ones and rebuild markdown options (#4553)"},{"hash":"671db4985962538768ea07703bb3e2c7dad13068","time":1711644994000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs(md-enhance): update docs"},{"hash":"54c46e02b710e103d2a2ed2ae2e9fc1a6945bc66","time":1706265017000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: update docs"},{"hash":"05f917d5d74059ee55457334d568f07b5af76074","time":1706263244000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat: bump to vp2rc2"},{"hash":"95198e1a20d76a4560a2aaebb5567c311c1890ab","time":1704545104000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"feat(md-enhance): add sandpack (#3587)","coAuthors":[{"name":"ZhaoBin","email":"413853119@qq.com"},{"name":"renovate[bot]","email":"29139614+renovate[bot]@users.noreply.github.com"}]}]},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"zh/guide/code/sandpack.md","autoDesc":true}`),u={name:`sandpack.md`};function d(c,l,u,d,f,p){let m=i(`CodeTabs`),h=i(`SandPack`),g=i(`VPPreview`);return e(),n(`div`,null,[l[10]||=a(`p`,null,[o(`基于 `),a(`code`,null,`sandpack-vue3`),o(` 的 Sandpack 交互演示支持。`)],-1),l[11]||=a(`div`,{class:`hint-container tip`},[a(`p`,{class:`hint-container-title`},`提示`),a(`p`,null,`如果你需要重度依赖 Sandpack 交互演示，你才应该使用本插件。`)],-1),l[12]||=a(`h2`,{id:`配置`,tabindex:`-1`},[a(`a`,{class:`header-anchor`,href:`#配置`},[a(`span`,null,`配置`)])],-1),l[13]||=a(`p`,null,[o(`在你的项目中安装 `),a(`code`,null,`sandpack-vue3`),o(`:`)],-1),r(m,{data:[{id:`pnpm`},{id:`yarn`},{id:`npm`}],"tab-id":`shell`},{title0:t(({value:e,isActive:t})=>[...l[0]||=[o(`pnpm`,-1)]]),title1:t(({value:e,isActive:t})=>[...l[1]||=[o(`yarn`,-1)]]),title2:t(({value:e,isActive:t})=>[...l[2]||=[o(`npm`,-1)]]),tab0:t(({value:e,isActive:t})=>[...l[3]||=[a(`div`,{class:`language-bash`,"data-highlighter":`shiki`,"data-ext":`bash`,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-bash`},[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},`pnpm`),a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` add`),a(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` -D`),a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` sandpack-vue3`)])])])],-1)]]),tab1:t(({value:e,isActive:t})=>[...l[4]||=[a(`div`,{class:`language-bash`,"data-highlighter":`shiki`,"data-ext":`bash`,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-bash`},[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},`yarn`),a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` add`),a(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` -D`),a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` sandpack-vue3`)])])])],-1)]]),tab2:t(({value:e,isActive:t})=>[...l[5]||=[a(`div`,{class:`language-bash`,"data-highlighter":`shiki`,"data-ext":`bash`,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-bash`},[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#4078F2`,"--shiki-dark":`#61AFEF`}},`npm`),a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` i`),a(`span`,{style:{"--shiki-light":`#986801`,"--shiki-dark":`#D19A66`}},` -D`),a(`span`,{style:{"--shiki-light":`#50A14F`,"--shiki-dark":`#98C379`}},` sandpack-vue3`)])])])],-1)]]),_:1}),l[14]||=s(`<p>之后启用它:</p><div class="code-block-with-title"><div class="code-block-title-bar" data-title=".vuepress/config.js"><span>.vuepress/config.js</span></div><div class="language-js" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-js"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">mdEnhancePlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-plugin-md-enhance&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    mdEnhancePlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 启用 Sandpack 交互演示</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      sandpack</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>要使用交互演示，你应该使用一个名为 <code>sandpack#template</code> 的容器。</p><p>在其中，你可以使用 3 个指令：</p><ul><li><code>@file FullPathFile</code> 紧跟文件的代码块，同时也支持文件选项，例如：<code>@file FullPathFile [active readOnly hidden]</code></li><li><code>@options</code> 紧跟一个自定义 &quot;options&quot; 的 javascript 代码块</li><li><code>@setup</code> 紧跟一个自定义 &quot;customSetup&quot; 的 javascript 代码块</li></ul><p>你可以查看以下演示以查看更多详细信息。</p><p>你可以在客户端配置文件中引入并调用 <code>defineSandpackConfig</code> 来自定义 <code>sandpack-vue3</code> ：</p><div class="code-block-with-title"><div class="code-block-title-bar" data-title=".vuepress/client.ts"><span>.vuepress/client.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-ts"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineSandpackConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-plugin-md-enhance/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">defineSandpackConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 这里是 sandpack 配置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>`,10),r(g,{title:`Vue 示例`},{content:t(()=>[r(h,{title:`Vue%20%E7%A4%BA%E4%BE%8B`,template:`vue`,files:`eJxNjD0OwjAMRq9iPMEAESuESmyMHMBL1aalUv6UOJVQlLtjysL4/D2/iiqnQd1jPK3F4AV1HtISGbLhEjvyi4shMVRIZoIGUwoOCMUlvJInPwSfGVye4fZV9oQPY22Ap+3fcwrFjzvCg6ha/crSFGDjou3ZCAHo17mrdYu0ppXQdl18LAzr0YXR2Buh7ISgZNTq7x/bB3CyQ8s=`,options:`eJyrrgUAAXUA+Q==`,customSetup:`eJyrrgUAAXUA+Q==`})]),code:t(()=>[...l[6]||=[a(`div`,{class:`language- line-numbers-mode`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: sandpack#vue Vue 示例`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`@file /src/App.vue`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```vue")]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<script setup>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`import { ref } from "vue";`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`const msg = ref("Hello Playground!");`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<\/script>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<template>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <h1>{{ msg }}</h1>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <input v-model="msg" />`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`</template>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})])],-1)]]),_:1}),r(g,{title:`带自定义设置的 Vue 示例`},{content:t(()=>[r(h,{title:`%E5%B8%A6%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AE%BE%E7%BD%AE%E7%9A%84%20Vue%20%E7%A4%BA%E4%BE%8B`,template:`vue`,files:`eJyNUMtOwzAQ/JXFElJBpW6vJYmAXjhw4AN8iVI3jeSX7HWkKsq/s3YIbQ9UvXl3xjM7MzAefMPfnVv1UbItK0LjO4cQJEZXCdNpZz3CAF4eYISDtxoEI65gr3/ozmo3QyuepqSWGcI01gQEHVook8hCsE+plIVvVZ9ab6PZPwj2RNSCT97kSgNK7VSNkiaA4riphiGLjGPBacrbzriI0L9ou5eqFIxwwYBPYD4qvQt+ocWWU+L5yFuRY5AfNaL0p3PyN/pDe95Yf1XBPwXN8QdojrVvO9MuQcleKqKWFwaLOwqYbwlYYwznFly1+9XeApU0G+WmUp5M+UqmGZ/sn2GzXhPlceJcdzT+AChvt8k=`,options:`eJyrVkpMLsksS3XLzElVslLSLy5K1nfOzy3QKytNVaoFAKIqCmo=`,customSetup:`eJyrVkpJLUjNS0nNS85MLVayqlZyKCtNLS1O1U/OL0pVslLKSSxJLS5R0oGLF2ckFqWmIMsAJXRTUnMzEWK1tQBugx7v`})]),code:t(()=>[...l[7]||=[a(`div`,{class:`language- line-numbers-mode`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: sandpack#vue 带自定义设置的 Vue 示例`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`@file /src/App.vue`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```vue")]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<script setup>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`import { ref } from "vue";`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`import Comp from "./Comp.vue";`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`const msg = ref("Hello Playground!");`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<\/script>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<template>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <h1>{{ msg }}</h1>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <input v-model="msg" />`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <Comp />`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`</template>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`@file /src/Comp.vue`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```vue")]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<script setup>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`import { useBattery } from "@vueuse/core";`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`import { ref } from "vue";`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`const { charging, level } = useBattery();`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<\/script>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<template>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <h1>Battery status</h1>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <p>Charging: {{ charging }}</p>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <p>Level: {{ level * 100 }}%</p>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`</template>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`@options`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```js")]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  activeFile: "/src/Comp.vue",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`@setup`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```js")]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  dependencies: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "@vueuse/core": "latest",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "@vueuse/shared": "latest",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "vue-demi": "latest",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})])],-1)]]),_:1}),r(g,{title:`带文件选项的 Vue 示例`},{content:t(()=>[r(h,{title:`%E5%B8%A6%E6%96%87%E4%BB%B6%E9%80%89%E9%A1%B9%E7%9A%84%20Vue%20%E7%A4%BA%E4%BE%8B`,template:`vue`,files:`eJyNkE1OwzAQha8yWEICFOp2W9IK6IYFEhzAGyuZppEc2/JPpCrK3Rk7pC2Loq6SmXl+b+YbGPeu4m/WLvqIbD2wytT0ZaWvXGsDeAzRboVuO2tcgAEc7mGEvTMdCEZvBHs5TXems/NowVOVXLNC6MpoH6DzDWySyYNgH6iUgW8lj40zUdd3gj2StORTNqVSEbCzSgakCqA8rLbDkE3GseRU5W6rbQzQP3e0u9oIRnPBgE/DvFT6L/mFFyuYrELb0617qTwW7NDWNepT6VDWX1od2Tq4iGMxgZpvuoVU9PguQ0B3PAN7pbfU55Vxf8hd4TpTG6A6SNe0uilAYY+KpJuLgIcbuM27+CBD9Gd4drv79V4DsZ2DMuB0T5Z8ptA8n+KfYLVckuR+0lxDm9D9QzY3xvEH49nd3w==`,options:`eJyrrgUAAXUA+Q==`,customSetup:`eJyrVkpJLUjNS0nNS85MLVayqlZyKCtNLS1O1U/OL0pVslLKSSxJLS5R0oGLF2ckFqWmIMsAJXRTUnMzEWK1tQBugx7v`})]),code:t(()=>[...l[8]||=[a(`div`,{class:`language- line-numbers-mode`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: sandpack#vue 带文件选项的 Vue 示例`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`@file /src/App.vue [readOnly]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```vue")]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<script setup>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`import { ref } from "vue";`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`import Comp from "./Comp.vue";`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`const msg = ref("Hello Playground!");`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<\/script>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<template>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <h1>{{ msg }}</h1>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <input v-model="msg" />`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <Comp />`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`</template>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`@file /src/Comp.vue [active]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```vue")]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<script setup>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`import { useBattery } from "@vueuse/core";`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`import { ref } from "vue";`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`const { charging, level } = useBattery();`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<\/script>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<template>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <h1>Battery status</h1>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <p>Charging: {{ charging }}</p>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <p>Level: {{ level * 100 }}%</p>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`</template>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`@setup`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```js")]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  dependencies: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "@vueuse/core": "latest",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "@vueuse/shared": "latest",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`    "vue-demi": "latest",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})])],-1)]]),_:1}),r(g,{title:`React 示例`},{content:t(()=>[r(h,{rtl:``,theme:`dark`,title:`React%20%E7%A4%BA%E4%BE%8B%20`,template:`react`,files:`eJyrVtJ3LCjQyypWslJKrSjILypRSElNSyzNKVFIK81LLsnMz1MAKtDQVKiOyVNQKEotKS3KU7DJMLTzSM3JyVcozy/KSbHRB/KtY/JqY/KUagGNKBwX`,options:`eJyrrgUAAXUA+Q==`,customSetup:`eJyrrgUAAXUA+Q==`})]),code:t(()=>[...l[9]||=[a(`div`,{class:`language-`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`::: sandpack#react React 示例 [rtl theme=dark]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`@file /App.js`)]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```js")]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`export default function App() {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  return <h1>Hello world</h1>;`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`:::`)])])])],-1)]]),_:1})])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};