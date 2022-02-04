import{f as e}from"./app.249d53c4.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=e(`<p>The channel option is used to config the feed channel. The configurable options and default value are as follows:</p><h2 id="channel-title" tabindex="-1"><a class="header-anchor" href="#channel-title" aria-hidden="true">#</a> channel.title</h2><ul><li>Type: <code>string</code></li><li>Default: <code>SiteConfig.title</code></li></ul><p>Channel title</p><h2 id="channel-link" tabindex="-1"><a class="header-anchor" href="#channel-link" aria-hidden="true">#</a> channel.link</h2><ul><li>Type: <code>string</code></li><li>Default: Deployment link (generated by <code>options.hostname</code> and <code>context.base</code>)</li></ul><p>Channel address</p><h2 id="channel-desciption" tabindex="-1"><a class="header-anchor" href="#channel-desciption" aria-hidden="true">#</a> channel.desciption</h2><ul><li>Type: <code>string</code></li><li>Default: <code>SiteConfig.description</code></li></ul><p>Channel description</p><h2 id="channel-language" tabindex="-1"><a class="header-anchor" href="#channel-language" aria-hidden="true">#</a> channel.language</h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li><code>siteConfig.locales[&#39;/&#39;].lang</code></li><li>If the above is not provided, fall back to <code>themeConfig.locales[&#39;/&#39;].lang</code></li><li>If the above is not provided, fall back to <code>&#39;en-US&#39;</code></li></ul></li></ul><p>The language of the channel</p><h2 id="channel-copyright" tabindex="-1"><a class="header-anchor" href="#channel-copyright" aria-hidden="true">#</a> channel.copyright</h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default: -<code>themeConfig.footer.copyright</code> (footer copyright information)</p><ul><li>If the above is not provided, try to read the <code>author.name</code> in <code>themeConfig.author</code> and channel options, and fall back to <code>Copyright by $author</code></li></ul></li><li><p>Recommended to set manually: <strong>Yes</strong></p></li></ul><p>Channel copyright information</p><h2 id="channel-pubdate" tabindex="-1"><a class="header-anchor" href="#channel-pubdate" aria-hidden="true">#</a> channel.pubDate</h2><ul><li>Type: <code>string</code> (must be a valid Date ISOString)</li><li>Default: time when the plugin is called each time</li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>Publish date of the Channe</p><h2 id="channel-lastupdated" tabindex="-1"><a class="header-anchor" href="#channel-lastupdated" aria-hidden="true">#</a> channel.lastUpdated</h2><ul><li>Type: <code>string</code> (must be a valid Date ISOString)</li><li>Default: time when the plugin is called each time</li></ul><p>Last update time of channel content</p><h2 id="channel-ttl" tabindex="-1"><a class="header-anchor" href="#channel-ttl" aria-hidden="true">#</a> channel.ttl</h2><ul><li>Type: <code>number</code></li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>The effective time of the content. It\u2019s the time to keep the cache after request without making new requests.</p><h2 id="channel-image" tabindex="-1"><a class="header-anchor" href="#channel-image" aria-hidden="true">#</a> channel.image</h2><ul><li>Type: <code>string</code></li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>A picture presenting the channel. A square picture with a size not smaller than 512\xD7512 is recommended.</p><h2 id="channel-icon" tabindex="-1"><a class="header-anchor" href="#channel-icon" aria-hidden="true">#</a> channel.icon</h2><ul><li>Type: <code>string</code></li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>An icon representing a channel, a square picture, with not less than 128\xD7128 in size, and transparent background color is recommended .</p><h2 id="channel-author" tabindex="-1"><a class="header-anchor" href="#channel-author" aria-hidden="true">#</a> channel.author</h2><ul><li><p>Type: <code>FeedAuthor</code></p></li><li><p>Default: Try to read <code>themeConfig.author</code> and generate with name option</p></li><li><p>Recommended to set manually: <strong>Yes</strong></p></li></ul><p>The author of the channel.</p><details class="custom-block details"><summary>FeedAuthor format</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Author name */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Author\u2019s email */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Author\u2019s website */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Author\u2019s avatar address
   *
   * Square, preferably not less than 128\xD7128 with transparent background
   */</span>
  avator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="channel-hub" tabindex="-1"><a class="header-anchor" href="#channel-hub" aria-hidden="true">#</a> channel.hub</h2><ul><li>Type: <code>string</code></li></ul><p>Link to Websub. Websub requires a server backend, which is inconsistent with VuePress, so ignore it if there is no special need.</p><div class="custom-container info"><p class="custom-container-title">WebSub</p><p>For details, see <a href="https://w3c.github.io/websub/#subscription-migration" target="_blank" rel="noopener noreferrer">Websub</a>.</p></div></details>`,35);function t(l,i){return s}var r=n(a,[["render",t]]);export{r as default};