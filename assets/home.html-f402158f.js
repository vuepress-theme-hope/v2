import{a3 as t,Z as i,_ as l,a4 as o,a1 as n,a2 as s,$ as p,a0 as c,a5 as a,q as u}from"./framework-f408d5b9.js";const d="/assets/home-light-9f940e79.png",r="/assets/home-dark-2ade198f.png",k={},v=n("p",null,[n("code",null,"vuepress-theme-hope"),s(" improves the default home page.")],-1),m=n("p",null,[s("To use it, set "),n("code",null,"home: true"),s(" in page frontmatter. Any extra content after the "),n("code",null,"YAML front matter"),s(" will be parsed as normal Markdown and rendered after the features section.")],-1),b=n("p",null,[n("img",{src:d,alt:"Screenshot","data-mode":"lightmode-only",loading:"lazy"}),n("img",{src:r,alt:"Screenshot","data-mode":"darkmode-only",loading:"lazy"})],-1),y=a('<h2 id="site-information" tabindex="-1"><a class="header-anchor" href="#site-information" aria-hidden="true">#</a> Site Information</h2><p>You can use <code>heroText</code> to set the main title and <code>tagline</code> to set the subtitle.</p><p>If you have a logo, you can place it in the <code>public</code> folder and set it via <code>heroImage</code>, if you want to display another logo in night mode, you can use <code>heroImageDark</code>. For better A11y, we recommend that you set the description of Logo to <code>heroAlt</code>.</p><h2 id="home-button" tabindex="-1"><a class="header-anchor" href="#home-button" aria-hidden="true">#</a> Home button</h2><p>You can display some important links in the form of buttons on the home page.</p><p>You can set them via <code>actions</code> which is an array where each element is an object with the following keys:</p><ul><li><code>text</code>: button text</li><li><code>link</code>: button link</li><li><code>type</code>: button type (only <code>&quot;primary&quot;</code> and <code>&quot;default&quot;</code> (default) are supported)</li></ul><h2 id="project-features" tabindex="-1"><a class="header-anchor" href="#project-features" aria-hidden="true">#</a> Project features</h2><p>You can set and display item features through <code>features</code>, which is an array, each element is an object, containing the following keys:</p><ul><li><code>title</code>: title</li><li><code>details</code>: details</li><li><code>icon</code> (optional): can be filled with full path or absolute path image link, or FontClass</li><li><code>link</code> (optional): link address</li></ul>',10),h={class:"hint-container info"},g=n("p",{class:"hint-container-title"},"Info",-1),f=a(`<h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">icon</span><span class="token punctuation">:</span> home
<span class="token key atrule">title</span><span class="token punctuation">:</span> Home
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.svg
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> VuePress Theme Hope
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> A VuePress theme with tons of features✨
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Tutorial 🧭
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /cookbook/tutorial/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Intro 💡
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/get<span class="token punctuation">-</span>started/intro.html

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Config 🛠
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /config/

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Online Demo 🪀
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//stackblitz.com/fork/vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope

<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Markdown Enhance
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> markdown
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Add align<span class="token punctuation">,</span> sup/sub script<span class="token punctuation">,</span> footnote<span class="token punctuation">,</span> tasklist<span class="token punctuation">,</span> tex<span class="token punctuation">,</span> flowchart<span class="token punctuation">,</span> diagram<span class="token punctuation">,</span> mark and presentation support in Markdown
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/markdown/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Slide Page
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> slides
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Adding slide pages to display things you like
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/layout/slides

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Layout Enhancement
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> layout
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Adding breadcrumb<span class="token punctuation">,</span> footer<span class="token punctuation">,</span> improved navbar<span class="token punctuation">,</span> improved page nav and etc.
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/layout/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Pageviews and Comments
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> comment
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Start pageview statistics and comment support with Waline
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/comment.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Article Information
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> info
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Add author<span class="token punctuation">,</span> writing date<span class="token punctuation">,</span> reading time<span class="token punctuation">,</span> word count and other information to your article
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/page<span class="token punctuation">-</span>info.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Blog Support
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> blog
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Listing your articles with their dates<span class="token punctuation">,</span> tags and categories with some awesome layouts
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/blog/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Customizable Theme Color
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> palette
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Customize theme color
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/interface/theme<span class="token punctuation">-</span>color.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Dark Mode
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> contrast
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Switch between light and dark modes freely
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/interface/darkmode.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Full A11y support
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> support
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Full support of accessibility in your site
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/interface/accessibility.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Article Encryption
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> lock
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Encrypt you articles based on page links<span class="token punctuation">,</span> so that only the one you want could see them
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/encrypt.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Search
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> search
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Support docsearch and client search
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/search.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Copy Code Blocks
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> copy
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Copy codes with one click in code blocks
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/copy<span class="token punctuation">-</span>code.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Image Preview
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> pic
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Support viewing<span class="token punctuation">,</span> zooming<span class="token punctuation">,</span> sharing your page images like a gallery
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/photo<span class="token punctuation">-</span>swipe.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> SEO Enhancement
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> config
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Optimize pages for search engines
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/advanced/seo.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Sitemap
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> sitemap
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Generate a Sitemap for your site
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/advanced/sitemap.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Feed
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> rss
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Generate feed to allow users to subscribe it
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/advanced/feed.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> PWA
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> mobile
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Make your site more like an APP
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/advanced/pwa.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> More New Features
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> more
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Including icon support<span class="token punctuation">,</span> fullscreen button<span class="token punctuation">,</span> etc.
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/

<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2019<span class="token punctuation">-</span>present Mr.Hope</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function w(_,x){const e=u("RouterLink");return i(),l("div",null,[v,m,b,o(" more "),y,n("div",h,[g,n("p",null,[s("For complete configuration items, see "),p(e,{to:"/config/frontmatter/home.html"},{default:c(()=>[s("Home Frontmatter Configuration")]),_:1}),s(".")])]),f])}const C=t(k,[["render",w],["__file","home.html.vue"]]);export{C as default};
