import{f as e}from"./app.4e777abd.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},t=e(`<p>You can control the generation of each feed item individually by configuring the frontmatter of each page.</p><p>By default, all articles will be added to the feed stream. To remove a specific page from the feed, you can set <code>feed.enable</code> to <code>false</code> in frontmatter.</p><h2 id="frontmatter-options" tabindex="-1"><a class="header-anchor" href="#frontmatter-options" aria-hidden="true">#</a> FrontMatter options</h2><p>The frontmatter options that affect the generation of feed items are as follows:</p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>Type: <code>string</code></li></ul><p>Automatically generated by VuePress, the default is the h1 content of the page</p><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3><ul><li>Type: <code>string</code></li></ul><p>Description of the page</p><h2 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> article</h2><ul><li>Type: <code>boolean</code></li></ul><p>Whether this page is an article</p><blockquote><p>If this option is set to <code>false</code>, the page will not be included in the final feed.</p></blockquote><h3 id="copyrighttext" tabindex="-1"><a class="header-anchor" href="#copyrighttext" aria-hidden="true">#</a> copyrightText</h3><ul><li>Type: <code>string</code></li></ul><p>Copyright information of the page</p><h3 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h3><ul><li>Type: <code>Date</code></li></ul><p>The publication date of the page</p><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><ul><li>Type: <code>string</code> (full or absolute link of the picture)</li></ul><p>Cover/share image of the page</p><h2 id="feed-configuration-in-frontmatter" tabindex="-1"><a class="header-anchor" href="#feed-configuration-in-frontmatter" aria-hidden="true">#</a> Feed configuration in FrontMatter</h2><h3 id="feed-enable" tabindex="-1"><a class="header-anchor" href="#feed-enable" aria-hidden="true">#</a> feed.enable</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether this page is a feed item</p><h3 id="feed-title" tabindex="-1"><a class="header-anchor" href="#feed-title" aria-hidden="true">#</a> feed.title</h3><ul><li>Type: <code>string</code></li></ul><p>The title of the feed item</p><h3 id="feed-description" tabindex="-1"><a class="header-anchor" href="#feed-description" aria-hidden="true">#</a> feed.description</h3><ul><li>Type: <code>string</code></li></ul><p>Description of the feed item</p><h3 id="feed-content" tabindex="-1"><a class="header-anchor" href="#feed-content" aria-hidden="true">#</a> feed.content</h3><ul><li>Type: <code>string</code></li></ul><p>Content of the feed item</p><h3 id="feed-author" tabindex="-1"><a class="header-anchor" href="#feed-author" aria-hidden="true">#</a> feed.author</h3><ul><li>Type: <code>FeedAuthor[] | FeedAuthor</code></li></ul><p>The author of the feed item</p><details class="custom-block details"><summary>\`FeedAuthor\` format</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Author name */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Author\u2019s email */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Author\u2019s website */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Author\u2019s avatar address
   *
   * Square, preferably not less than 128\xD7128, transparent background
   */</span>
  avator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details><h3 id="feed-contributor" tabindex="-1"><a class="header-anchor" href="#feed-contributor" aria-hidden="true">#</a> feed.contributor</h3><ul><li>Type: <code>FeedContributor[] | FeedContributor</code></li></ul><p>Contributors to the feed item</p><details class="custom-block details"><summary>\`FeedContributor\` format</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FeedContributor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Name of ontributor */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Contributor\u2019s email */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Sharer website */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Sharer\u2019s avatar address
   *
   * Square, preferably not less than 128\xD7128, transparent background
   */</span>
  avator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details><h3 id="feed-guid" tabindex="-1"><a class="header-anchor" href="#feed-guid" aria-hidden="true">#</a> feed.guid</h3><ul><li>Type: <code>string</code></li></ul><p>The identifier of the feed item, used to identify the feed item.</p><h2 id="default-generation-logic" tabindex="-1"><a class="header-anchor" href="#default-generation-logic" aria-hidden="true">#</a> Default generation logic</h2><ul><li><p><strong>title</strong></p><ul><li>Type: <code>string</code></li><li>Meaning: The title of the feed item</li><li>Value: <ul><li><code>frontmatter.feed.title</code></li><li>If the above is not provided, fall back to <code>frontmatter.title</code></li></ul></li></ul></li><li><p><strong>link</strong></p><ul><li>Type: <code>string</code></li><li>Meaning: Link to feed item</li><li>Value: <ul><li>Permalink of the page</li><li>If the above does not exist, fall back to the page link</li></ul></li></ul></li><li><p><strong>description</strong></p><ul><li>Type: <code>string</code></li><li>Meaning: the description of the feed item</li><li>Value: <ul><li><code>frontmatter.feed.description</code></li><li>If the above is not provided, fall back to <code>frontmatter.description</code></li><li>If the above is not provided, fall back to <code>$page.excerpt</code></li></ul></li></ul></li><li><p><strong>author</strong></p><ul><li><p>Type: <code>FeedAuthor[] | FeedAuthor</code></p></li><li><p>Meaning: the author of the feed item</p></li><li><p>Value:</p><ul><li><p><code>frontmatter.feed.author</code></p></li><li><p>If the above is not provided, fall back to <code>frontmatter.author</code></p><p>(<code>string</code> type, only <code>name</code> is generated)</p></li><li><p>If the above is not provided, fall back to <code>themeConfig.author</code></p><p>(<code>string</code> type, only <code>name</code> is generated)</p></li></ul></li></ul></li><li><p><strong>contributor</strong></p><ul><li><p>Type: <code>FeedContributor[] | FeedContributor</code></p></li><li><p>Meaning: Contributor to the Feed project</p></li><li><p>Value:</p><ul><li><p><code>frontmatter.feed.contributor</code></p></li><li><p>If the above is not provided, fall back to <code>frontmatter.author</code></p><p>(<code>string</code> type, only <code>name</code> is generated)</p></li><li><p>If the above is not provided, fall back to <code>themeConfig.author</code></p><p>(<code>string</code> type, only <code>name</code> is generated)</p></li></ul></li></ul></li><li><p><strong>category</strong></p><ul><li><p>Type: <code>FeedCategory[] | FeedCategory</code></p></li><li><p>Meaning: Category of feed items</p></li><li><p>Value:</p><ul><li><p><code>frontmatter.feed.category</code></p></li><li><p>If the above is not provided, fall back to <code>frontmatter.category</code></p><p>(<code>string</code> type, only <code>name</code> is generated)</p></li></ul></li></ul></li><li><p><strong>pubDate</strong></p><ul><li>Type: <code>Date</code></li><li>Meaning: The release date of the feed item</li><li>Value: <code>frontmatter.time</code></li></ul></li><li><p><strong>lastUpdated</strong></p><ul><li>Type: <code>Date</code></li><li>Meaning: The update date of the feed item</li><li>Value: Generated by Git</li></ul></li><li><p><strong>content</strong></p><ul><li>Type: <code>string</code></li><li>Meaning: the content of the feed item</li><li>Value: HTML content of the page</li></ul></li><li><p><strong>image</strong></p><ul><li>Type: <code>string</code></li><li>Meaning: The cover of the feed item</li><li>Value: <ul><li><code>frontmatter.image</code></li><li>If the above is not provided, fall back to the first non-relative image link in the page content</li></ul></li></ul></li><li><p><strong>enclosure</strong></p><ul><li>Type: <code>string</code></li><li>Meaning: media of the feed item</li><li>Value: Generated by the image option above</li></ul></li><li><p><strong>copyright</strong></p><ul><li>Type: <code>string</code></li><li>Meaning: Copyright information of the feed item</li><li>Value: <ul><li><code>frontmatter.copyrightText</code></li><li>If the above is not provided, try to generate the copyright information of <code>Copyright by author</code></li></ul></li></ul></li></ul>`,49);function i(o,s){return t}var p=a(n,[["render",i]]);export{p as default};