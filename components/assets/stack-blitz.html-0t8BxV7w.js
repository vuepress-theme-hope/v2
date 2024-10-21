import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as e,g as a,b as t,d as l,f as r,r as h,o as p}from"./app-Kd9JTTDm.js";const c={};function u(k,i){const o=h("StackBlitz"),d=h("MdDemo");return p(),n("div",null,[i[2]||(i[2]=e("p",null,"Embed StackBlitz demo in Markdown files.",-1)),a(" more "),i[3]||(i[3]=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo"},[e("span",null,"Demo")])],-1)),a(" #region demo "),t(d,{title:"A StackBlitz project",id:"md-demo-8"},{default:l(()=>[t(o,{id:"vuepress-theme-hope"})]),code:l(()=>i[0]||(i[0]=[e("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"StackBlitz"),e("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," id"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"vuepress-theme-hope"'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," />")])])])],-1)])),_:1}),t(d,{title:"A StackBlitz project with custom settings",id:"md-demo-15"},{default:l(()=>[t(o,{id:"vuepress-theme-hope",hideExplorer:"",hideNavigation:"",hideDevtools:""})]),code:l(()=>i[1]||(i[1]=[e("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"StackBlitz"),e("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," id"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"vuepress-theme-hope"'),e("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," hideExplorer"),e("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," hideNavigation"),e("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," hideDevtools"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," />")])])])],-1)])),_:1}),a(" #endregion demo "),i[4]||(i[4]=r('<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>StackBlitz id</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><ul><li>Type: <code>&quot;project&quot; | &quot;github&quot;</code></li><li>Default: <code>&quot;project&quot;</code></li></ul><p>Type of StackBlitz project.</p><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width"><span>width</span></a></h3><ul><li>Type: <code>string | number</code></li><li>Default: <code>100%</code></li></ul><p>Stackblitz component width.</p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height"><span>height</span></a></h3><ul><li>Type: <code>string | number</code></li><li>Required: No</li></ul><p>Stackblitz component height</p><h3 id="ratio" tabindex="-1"><a class="header-anchor" href="#ratio"><span>ratio</span></a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>16 / 9</code></li></ul><p>Stackblitz component ratio, ONLY valid when <code>height</code> not set.</p><h3 id="file" tabindex="-1"><a class="header-anchor" href="#file"><span>file</span></a></h3><ul><li>Type: <code>string[] | string</code></li><li>Required: No</li></ul><p>The default file to have open in the editor.</p><h3 id="initialpath" tabindex="-1"><a class="header-anchor" href="#initialpath"><span>initialPath</span></a></h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>The initial URL path the preview should open.</p><h3 id="embed" tabindex="-1"><a class="header-anchor" href="#embed"><span>embed</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Embed StackBlitz editor instead of displaying a button.</p><h3 id="load" tabindex="-1"><a class="header-anchor" href="#load"><span>load</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether load embed demo directly. (Only available with <code>embed</code>)</p><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme"><span>theme</span></a></h3><ul><li>Type: <code>&quot;dark&quot; | &quot;light&quot;</code></li><li>Default: <code>&quot;dark&quot;</code></li></ul><p>Editor theme. (Only available with <code>embed</code>)</p><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text"><span>text</span></a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;Open in StackBlitz&quot;</code></li></ul><p>Text to display on the button. (Only available without <code>embed</code>)</p><h3 id="view" tabindex="-1"><a class="header-anchor" href="#view"><span>view</span></a></h3><ul><li>Type: <code>&quot;default&quot; | &quot;editor&quot; | &quot;preview&quot;</code></li><li>Default: <code>&quot;preview&quot;</code></li></ul><p>Which view to open by default.</p><h3 id="hideexplorer" tabindex="-1"><a class="header-anchor" href="#hideexplorer"><span>hideExplorer</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Hide file explorer panel in embed view.</p><h3 id="hidenavigation" tabindex="-1"><a class="header-anchor" href="#hidenavigation"><span>hideNavigation</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Hide navigation panel in embed view.</p><h3 id="hidedevtools" tabindex="-1"><a class="header-anchor" href="#hidedevtools"><span>hideDevtools</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Hide the debugging console in the editor preview.</p>',46))])}const b=s(c,[["render",u],["__file","stack-blitz.html.vue"]]),f=JSON.parse('{"path":"/guide/code/stack-blitz.html","title":"StackBlitz","lang":"en-US","frontmatter":{"title":"StackBlitz","description":"Embed StackBlitz demo in Markdown files. Demo Props id Type: string Required: Yes StackBlitz id type Type: \\"project\\" | \\"github\\" Default: \\"project\\" Type of StackBlitz project. wi...","head":[["link",{"rel":"canonical","href":"https://plugin-components.vuejs.press/guide/code/stack-blitz.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope.github.io/v2/components/zh/guide/code/stack-blitz.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/components/guide/code/stack-blitz.html"}],["meta",{"property":"og:site_name","content":"Components Lib"}],["meta",{"property":"og:title","content":"StackBlitz"}],["meta",{"property":"og:description","content":"Embed StackBlitz demo in Markdown files. Demo Props id Type: string Required: Yes StackBlitz id type Type: \\"project\\" | \\"github\\" Default: \\"project\\" Type of StackBlitz project. wi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-10T07:38:58.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-10T07:38:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"StackBlitz\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-10T07:38:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]},{"level":3,"title":"width","slug":"width","link":"#width","children":[]},{"level":3,"title":"height","slug":"height","link":"#height","children":[]},{"level":3,"title":"ratio","slug":"ratio","link":"#ratio","children":[]},{"level":3,"title":"file","slug":"file","link":"#file","children":[]},{"level":3,"title":"initialPath","slug":"initialpath","link":"#initialpath","children":[]},{"level":3,"title":"embed","slug":"embed","link":"#embed","children":[]},{"level":3,"title":"load","slug":"load","link":"#load","children":[]},{"level":3,"title":"theme","slug":"theme","link":"#theme","children":[]},{"level":3,"title":"text","slug":"text","link":"#text","children":[]},{"level":3,"title":"view","slug":"view","link":"#view","children":[]},{"level":3,"title":"hideExplorer","slug":"hideexplorer","link":"#hideexplorer","children":[]},{"level":3,"title":"hideNavigation","slug":"hidenavigation","link":"#hidenavigation","children":[]},{"level":3,"title":"hideDevtools","slug":"hidedevtools","link":"#hidedevtools","children":[]}]}],"git":{"createdTime":1653495670000,"updatedTime":1699601938000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.76,"words":227},"filePathRelative":"guide/code/stack-blitz.md","localizedDate":"May 25, 2022","autoDesc":true}');export{b as comp,f as data};
