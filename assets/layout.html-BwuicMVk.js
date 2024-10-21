import{aj as p,ak as r,ao as s,an as o,ap as a,aq as e,as as t,am as h,ar as d,al as k}from"./app-3Fu3LGel.js";const c={},u={id:"navbar",tabindex:"-1"},B={class:"header-anchor",href:"#navbar"},g={id:"logo",tabindex:"-1"},y={class:"header-anchor",href:"#logo"},b={id:"sidebar",tabindex:"-1"},v={class:"header-anchor",href:"#sidebar"},A={id:"sidebarsorter",tabindex:"-1"},m={class:"header-anchor",href:"#sidebarsorter"};function C(f,i){const l=d("Badge"),n=d("RouteLink");return k(),r("div",null,[i[15]||(i[15]=s("p",null,"以下选项控制主题布局。",-1)),o(" more "),i[16]||(i[16]=s("h2",{id:"导航栏",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#导航栏"},[s("span",null,"导航栏")])],-1)),s("h3",u,[s("a",B,[s("span",null,[i[0]||(i[0]=a("navbar ")),e(l,{text:"建议配置",type:"tip"})])])]),s("ul",null,[i[4]||(i[4]=s("li",null,[a("类型: "),s("code",null,"NavbarConfig | false")],-1)),i[5]||(i[5]=s("li",null,[a("默认值: "),s("code",null,"false")],-1)),s("li",null,[i[3]||(i[3]=a("详情: ")),s("ul",null,[s("li",null,[e(n,{to:"/zh/guide/layout/navbar.html#%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5"},{default:t(()=>i[1]||(i[1]=[a("布局 → 导航栏 → 导航栏链接")])),_:1})]),s("li",null,[e(n,{to:"/zh/guide/layout/navbar.html#%E7%A6%81%E7%94%A8%E5%AF%BC%E8%88%AA%E6%A0%8F"},{default:t(()=>i[2]||(i[2]=[a("布局 → 导航栏 → 禁用导航栏")])),_:1})])])])]),i[17]||(i[17]=s("p",null,"导航栏配置。",-1)),i[18]||(i[18]=s("h3",{id:"navbarlayout",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#navbarlayout"},[s("span",null,"navbarLayout")])],-1)),s("ul",null,[i[8]||(i[8]=h(`<li><p>类型: <code>NavbarLayoutOptions</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 内置导航栏组件</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> NavbarComponent</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Brand&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Links&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Language&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Search&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Outlook&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Repo&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 导航栏布局选项</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> NavbarLayoutOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  start</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">NavbarComponent</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)[];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  center</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">NavbarComponent</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)[];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  end</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">NavbarComponent</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)[];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>{ start: [&quot;Brand&quot;], center: [&quot;Links&quot;], end: [&quot;Language&quot;, &quot;Repo&quot;, &quot;Outlook&quot;, &quot;Search&quot;] }</code></p></li>`,2)),s("li",null,[i[7]||(i[7]=s("p",null,"详情:",-1)),s("ul",null,[s("li",null,[e(n,{to:"/zh/guide/layout/navbar.html#%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE"},{default:t(()=>i[6]||(i[6]=[a("布局 → 导航栏 → 导航栏布局")])),_:1})])])])]),i[19]||(i[19]=s("p",null,"自定义导航栏布局。",-1)),s("h3",g,[s("a",y,[s("span",null,[i[9]||(i[9]=a("logo ")),e(l,{text:"建议配置",type:"tip"})])])]),i[20]||(i[20]=h('<ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>导航栏图标，应为基于 <code>.vuepress/public</code> 文件夹的绝对路径。</p><h3 id="logodark" tabindex="-1"><a class="header-anchor" href="#logodark"><span>logoDark</span></a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>logo</code></li></ul><p>夜间模式下导航栏图标，应为基于 <code>.vuepress/public</code> 文件夹的绝对路径。</p><h3 id="navbartitle" tabindex="-1"><a class="header-anchor" href="#navbartitle"><span>navbarTitle</span></a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>$siteLocale.title</code></li></ul><p>导航栏标题，你可以设置为 <code>&#39;&#39;</code> 来隐藏它。</p><h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo"><span>repo</span></a></h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>仓库配置，用于在导航栏中显示仓库链接。</p><h3 id="repodisplay" tabindex="-1"><a class="header-anchor" href="#repodisplay"><span>repoDisplay</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在导航栏显示仓库链接。</p><h3 id="repolabel" tabindex="-1"><a class="header-anchor" href="#repolabel"><span>repoLabel</span></a></h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>用于导航栏仓库按钮的无障碍标签。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>主题可以正确识别 GitHub, Gitlab, Gitee, Bitbucket 的链接。</p></div><h3 id="navbarautohide" tabindex="-1"><a class="header-anchor" href="#navbarautohide"><span>navbarAutoHide</span></a></h3><ul><li>类型: <code>&quot;always&quot; | &quot;mobile&quot; | &quot;none&quot;</code></li><li>默认值: <code>&quot;mobile&quot;</code></li></ul><p>是否在向下滚动时自动隐藏导航栏。</p><h3 id="hidesitenameonmobile" tabindex="-1"><a class="header-anchor" href="#hidesitenameonmobile"><span>hideSiteNameOnMobile</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在移动视图下隐藏站点名称。</p><h2 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏"><span>侧边栏</span></a></h2>',25)),s("p",null,[i[11]||(i[11]=a("关于配置指南，详见 ")),e(n,{to:"/zh/guide/layout/sidebar.html"},{default:t(()=>i[10]||(i[10]=[a("布局 → 侧边栏")])),_:1}),i[12]||(i[12]=a("。"))]),s("h3",b,[s("a",v,[s("span",null,[i[13]||(i[13]=a("sidebar ")),e(l,{text:"建议配置",type:"tip"})])])]),i[21]||(i[21]=s("ul",null,[s("li",null,[a("类型: "),s("code",null,'SidebarConfig | "structure" | false')]),s("li",null,[a("默认值: "),s("code",null,'"structure"')])],-1)),i[22]||(i[22]=s("p",null,"侧边栏配置。",-1)),s("h3",A,[s("a",m,[s("span",null,[i[14]||(i[14]=a("sidebarSorter ")),e(l,{text:"仅限 Root",type:"warning"})])])]),i[23]||(i[23]=h(`<ul><li><p>类型: <code>SidebarSorter</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarFileInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;file&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  filename</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  title</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  order</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  path</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  frontmatter</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ThemeNormalPageFrontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  pageData</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ThemePageData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarDirInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;dir&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  dirname</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  children</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  title</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  order</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  groupInfo</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    icon</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    collapsible</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    link</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  frontmatter</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ThemeNormalPageFrontmatter</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  pageData</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ThemePageData</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarInfo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarFileInfo</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarDirInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarSorterKeyword</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;readme&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;order&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;date&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;date-desc&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;filename&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarSorterFunction</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  infoA</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  infoB</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarSorter</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarSorterFunction</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarSorterFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarSorterKeyword</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SidebarSorterKeyword</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[];</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>[&quot;readme&quot;, &quot;order&quot;, &quot;title&quot;, &quot;filename&quot;]</code></p></li></ul><p>结构侧边栏排序器。</p><p>你可以:</p><ul><li>填写自定义函数</li><li>提供一个排序器关键字</li><li>提供一组自定义函数或排序器关键字</li></ul><p>可用的关键字有:</p><ul><li><code>readme</code>: <code>README.md</code> 或 <code>readme.md</code> 在前</li><li><code>order</code>: 正序在前并按其值升序排列，负序在后并按其值降序排列</li><li><code>date</code>: 按日期升序排序</li><li><code>date-desc</code>: 按日期降序排序</li><li><code>title</code>: 按标题字母顺序排序</li><li><code>filename</code>: 按文件名字母顺序排序</li></ul><h3 id="headerdepth" tabindex="-1"><a class="header-anchor" href="#headerdepth"><span>headerDepth</span></a></h3><ul><li>类型: <code>number</code></li><li>默认值: <code>2</code></li></ul><p>侧边栏嵌套的标题深度。</p><h2 id="路径导航" tabindex="-1"><a class="header-anchor" href="#路径导航"><span>路径导航</span></a></h2><h3 id="breadcrumb" tabindex="-1"><a class="header-anchor" href="#breadcrumb"><span>breadcrumb</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否全局启用路径导航。</p><h3 id="breadcrumbicon" tabindex="-1"><a class="header-anchor" href="#breadcrumbicon"><span>breadcrumbIcon</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在路径导航显示图标。</p><h3 id="prevlink" tabindex="-1"><a class="header-anchor" href="#prevlink"><span>prevLink</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在页面底部显示上一篇链接。</p><h3 id="nextlink" tabindex="-1"><a class="header-anchor" href="#nextlink"><span>nextLink</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在页面底部显示下一篇链接。</p><h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题"><span>标题</span></a></h2><h3 id="titleicon" tabindex="-1"><a class="header-anchor" href="#titleicon"><span>titleIcon</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在页面标题旁显示图标。</p><h3 id="pageinfo" tabindex="-1"><a class="header-anchor" href="#pageinfo"><span>pageInfo</span></a></h3><ul><li>类型: <code>ArticleInfo[] | false</code></li><li>默认值: <code>[&quot;Author&quot;, &quot;Original&quot;, &quot;Date&quot;, &quot;Category&quot;, &quot;Tag&quot;, &quot;ReadingTime&quot;]</code></li></ul><p>文章信息，可以填入数组，数组的顺序是各条目显示的顺序。填入 <code>false</code> 使其被禁用。</p><p>可以填入的条目如下:</p><ul><li><code>&quot;Author&quot;</code>: 作者</li><li><code>&quot;Date&quot;</code>: 写作日期</li><li><code>&quot;Original&quot;</code>: 是否原创</li><li><code>&quot;Category&quot;</code>: 分类</li><li><code>&quot;Tag&quot;</code>: 标签</li><li><code>&quot;ReadingTime&quot;</code>: 预计阅读时间</li><li><code>&quot;Word&quot;</code>: 字数</li><li><code>&quot;PageView&quot;</code>: 页面浏览量</li></ul><h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta"><span>Meta</span></a></h2><h3 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated"><span>lastUpdated</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否显示页面最后更新时间</p><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors"><span>contributors</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否显示页面贡献者</p><h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink"><span>editLink</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否展示编辑此页链接</p><h3 id="editlinkpattern" tabindex="-1"><a class="header-anchor" href="#editlinkpattern"><span>editLinkPattern</span></a></h3><ul><li>类型: <code>string</code></li></ul><p>编辑链接的匹配。其中 <code>:repo</code> <code>:branch</code> <code>:path</code> 会被自动替换为 <code>docsRepo</code> <code>docsBranch</code> 和 <code>docsDir + filePath</code>。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>主题已经为 GitHub、Gitlab、Gitee 和 Bitbucket 提供了内置支持。</p></div><h3 id="docsrepo" tabindex="-1"><a class="header-anchor" href="#docsrepo"><span>docsRepo</span></a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>repo</code></li></ul><p>文档仓库</p><h3 id="docsbranch" tabindex="-1"><a class="header-anchor" href="#docsbranch"><span>docsBranch</span></a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;main&quot;</code></li></ul><p>文档所在分支</p><h3 id="docsdir" tabindex="-1"><a class="header-anchor" href="#docsdir"><span>docsDir</span></a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;&quot;</code></li></ul><p>文档在仓库中的目录</p><h2 id="页脚" tabindex="-1"><a class="header-anchor" href="#页脚"><span>页脚</span></a></h2><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>footer</span></a></h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>页脚的默认内容，可输入 HTMLString。</p><h3 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright"><span>copyright</span></a></h3><ul><li>类型: <code>string | false</code></li><li>默认值: <code>&quot;Copyright © &lt;作者&gt;&quot;</code></li></ul><p>默认的版权信息，设置为 <code>false</code> 来默认禁用它。</p><h3 id="displayfooter" tabindex="-1"><a class="header-anchor" href="#displayfooter"><span>displayFooter</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否默认显示页脚</p><h2 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项"><span>杂项</span></a></h2><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home"><span>home</span></a></h3><ul><li>类型: <code>string</code></li><li>默认值: 当前 <code>locale</code> 的键名</li></ul><p>当前语言的主页路径，用于导航栏图标和返回主页按钮的链接。</p><h3 id="rtl" tabindex="-1"><a class="header-anchor" href="#rtl"><span>rtl</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否使用 RTL 布局</p><h3 id="toc-heading" tabindex="-1"><a class="header-anchor" href="#toc-heading"><span>toc</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否显示标题列表</p>`,74))])}const E=p(c,[["render",C],["__file","layout.html.vue"]]),q=JSON.parse('{"path":"/zh/config/theme/layout.html","title":"主题布局选项","lang":"zh-CN","frontmatter":{"title":"主题布局选项","icon":"object-group","order":3,"category":["配置"],"tag":["主题配置","布局"],"description":"以下选项控制主题布局。","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/zh/config/theme/layout.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope.github.io/v2/config/theme/layout.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/v2/zh/config/theme/layout.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"主题布局选项"}],["meta",{"property":"og:description","content":"以下选项控制主题布局。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-30T18:11:21.000Z"}],["meta",{"property":"article:tag","content":"主题配置"}],["meta",{"property":"article:tag","content":"布局"}],["meta",{"property":"article:modified_time","content":"2024-09-30T18:11:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"主题布局选项\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-30T18:11:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://vuepress-theme-hope.github.io/v2/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://vuepress-theme-hope.github.io/v2/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"导航栏","slug":"导航栏","link":"#导航栏","children":[{"level":3,"title":"navbar","slug":"navbar","link":"#navbar","children":[]},{"level":3,"title":"navbarLayout","slug":"navbarlayout","link":"#navbarlayout","children":[]},{"level":3,"title":"logo","slug":"logo","link":"#logo","children":[]},{"level":3,"title":"logoDark","slug":"logodark","link":"#logodark","children":[]},{"level":3,"title":"navbarTitle","slug":"navbartitle","link":"#navbartitle","children":[]},{"level":3,"title":"repo","slug":"repo","link":"#repo","children":[]},{"level":3,"title":"repoDisplay","slug":"repodisplay","link":"#repodisplay","children":[]},{"level":3,"title":"repoLabel","slug":"repolabel","link":"#repolabel","children":[]},{"level":3,"title":"navbarAutoHide","slug":"navbarautohide","link":"#navbarautohide","children":[]},{"level":3,"title":"hideSiteNameOnMobile","slug":"hidesitenameonmobile","link":"#hidesitenameonmobile","children":[]}]},{"level":2,"title":"侧边栏","slug":"侧边栏","link":"#侧边栏","children":[{"level":3,"title":"sidebar","slug":"sidebar","link":"#sidebar","children":[]},{"level":3,"title":"sidebarSorter","slug":"sidebarsorter","link":"#sidebarsorter","children":[]},{"level":3,"title":"headerDepth","slug":"headerdepth","link":"#headerdepth","children":[]}]},{"level":2,"title":"路径导航","slug":"路径导航","link":"#路径导航","children":[{"level":3,"title":"breadcrumb","slug":"breadcrumb","link":"#breadcrumb","children":[]},{"level":3,"title":"breadcrumbIcon","slug":"breadcrumbicon","link":"#breadcrumbicon","children":[]},{"level":3,"title":"prevLink","slug":"prevlink","link":"#prevlink","children":[]},{"level":3,"title":"nextLink","slug":"nextlink","link":"#nextlink","children":[]}]},{"level":2,"title":"标题","slug":"标题","link":"#标题","children":[{"level":3,"title":"titleIcon","slug":"titleicon","link":"#titleicon","children":[]},{"level":3,"title":"pageInfo","slug":"pageinfo","link":"#pageinfo","children":[]}]},{"level":2,"title":"Meta","slug":"meta","link":"#meta","children":[{"level":3,"title":"lastUpdated","slug":"lastupdated","link":"#lastupdated","children":[]},{"level":3,"title":"contributors","slug":"contributors","link":"#contributors","children":[]},{"level":3,"title":"editLink","slug":"editlink","link":"#editlink","children":[]},{"level":3,"title":"editLinkPattern","slug":"editlinkpattern","link":"#editlinkpattern","children":[]},{"level":3,"title":"docsRepo","slug":"docsrepo","link":"#docsrepo","children":[]},{"level":3,"title":"docsBranch","slug":"docsbranch","link":"#docsbranch","children":[]},{"level":3,"title":"docsDir","slug":"docsdir","link":"#docsdir","children":[]}]},{"level":2,"title":"页脚","slug":"页脚","link":"#页脚","children":[{"level":3,"title":"footer","slug":"footer","link":"#footer","children":[]},{"level":3,"title":"copyright","slug":"copyright","link":"#copyright","children":[]},{"level":3,"title":"displayFooter","slug":"displayfooter","link":"#displayfooter","children":[]}]},{"level":2,"title":"杂项","slug":"杂项","link":"#杂项","children":[{"level":3,"title":"home","slug":"home","link":"#home","children":[]},{"level":3,"title":"rtl","slug":"rtl","link":"#rtl","children":[]},{"level":3,"title":"toc","slug":"toc-heading","link":"#toc-heading","children":[]}]}],"git":{"createdTime":1644936187000,"updatedTime":1727719881000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":28}]},"readingTime":{"minutes":3.79,"words":1137},"filePathRelative":"zh/config/theme/layout.md","localizedDate":"2022年2月15日","excerpt":"<p>以下选项控制主题布局。</p>\\n","autoDesc":true}');export{E as comp,q as data};
