const e={key:"v-5d7259d4",path:"/guide.html",title:"Guide",lang:"en-US",frontmatter:{title:"Guide",icon:"creative",head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope.github.io/v2/feed/guide.html"}],["meta",{property:"og:title",content:"Guide"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"en-US"}],["meta",{property:"og:locale:alternate",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"Guide","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<p><code>vuepress-plugin-feed2</code> plugin will automatically generate feed in the following three formats for you:</p>
<ul>
<li>Atom 1.0</li>
<li>JSON 1.1</li>
<li>RSS 2.0</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Tips</p>
<p>Atom and JSON are provided to improve more feed software adaptation.</p>
<p>Please use RSS by default.</p>
</div>
<p>Considering that rare people stick to feed now, this plugin provides a minimal configuration to adjust the automatic generation of detailed feed files. Also it allows you to freely define the output content of the feed.</p>
<p>To generate the link address correctly, you need to provide <code>hostname</code> (deployment domain name) in the plugin options. All other options are optional.</p>
<h2 id="channel-settings" tabindex="-1"><a class="header-anchor" href="#channel-settings" aria-hidden="true">#</a> Channel Settings</h2>
<p>You can customize information of feed channel by setting the <code>channel</code> option.</p>
<p>We recommend you to set the following options:</p>
<ul>
<li>Convert the date when the feed was created to ISOString and write it to <code>channel.pubDate</code></li>
<li>Set the content update cycle (unit: minute) in <code>channel.ttl</code></li>
<li>Set your copyright information through <code>channel.copyright</code></li>
<li>Set channel author via <code>channel.author</code>, or set <code>themeConfig.author</code> as the author name.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Default channel settings</p>
<ul>
<li>
<p>The title and description of the channel is the name and description of the site by default</p>
</li>
<li>
<p>The link of the channel, the last update time will be automatically generated by the plugin.</p>
</li>
<li>
<p>The plugin will try to generate copyright information by reading the copyright information in the footer.</p>
</li>
</ul>
</div>
<p>For detailed options and their values, please see <RouterLink to="/config/channel.html">Configuration \u2192 Channel Settings</RouterLink></p>
<h2 id="project-settings" tabindex="-1"><a class="header-anchor" href="#project-settings" aria-hidden="true">#</a> Project Settings</h2>
<h3 id="default-generation-logic" tabindex="-1"><a class="header-anchor" href="#default-generation-logic" aria-hidden="true">#</a> Default generation logic</h3>
<p>By default, all articles will be added to the feed stream.</p>
<div class="custom-container info"><p class="custom-container-title">Article</p>
<p>All pages whose <code>frontmatter.article</code> is not <code>false</code> and are not the homepage will be regarded as articles.</p>
</div>
<p><code>vuepress-plugin-feed2</code> will read the following options from frontmatter:</p>
<ul>
<li>
<p><code>description</code>: the description of the article</p>
</li>
<li>
<p><code>author</code>: the name of the author of the article</p>
</li>
<li>
<p><code>copyrightText</code>: the copyright information of the article</p>
</li>
</ul>
<p>-<code>time</code>: the publication time of the article</p>
<p>-<code>image</code>: the cover of the article</p>
<p><code>vuepress-plugin-feed2</code> also use the following items:</p>
<ul>
<li><code>page.excerpt</code>: any content before \`</li>
</ul>
`,headers:[{level:2,title:"Usage",slug:"usage",children:[]},{level:2,title:"Channel Settings",slug:"channel-settings",children:[]},{level:2,title:"Project Settings",slug:"project-settings",children:[{level:3,title:"Default generation logic",slug:"default-generation-logic",children:[]},{level:3,title:"Customize",slug:"customize",children:[]}]},{level:2,title:"Output configuration",slug:"output-configuration",children:[]}],git:{createdTime:1643273221e3,updatedTime:1643273221e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:2.02,words:607},filePathRelative:"guide.md"};export{e as data};
