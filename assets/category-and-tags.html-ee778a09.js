import{a3 as a,Z as t,_ as n,a4 as e,a1 as s,a5 as o}from"./framework-f408d5b9.js";const c="/assets/category-light-7f4a705e.png",d="/assets/category-dark-d7d44ac0.png",p="/assets/tag-light-9995aa19.png",r="/assets/tag-dark-d09f2692.png",l="/assets/info-ad92e395.png",i="/assets/sidebar-73d1cb4f.png",g={},m=s("p",null,"你可以通过 frontmatter 来为文章配置分类与标签，使它们出现在特定的分类与标签页面中。",-1),u=o(`<h2 id="分类设置" tabindex="-1"><a class="header-anchor" href="#分类设置" aria-hidden="true">#</a> 分类设置</h2><p>只需要在页面 frontmatter 中设置 <code>category</code> 数组，并设置一个或多个文章所属的分类，该文章会自动渲染在 <code>/category/&lt;分类名&gt;/</code> 分类页面的列表中。</p><p>比如在某个页面设置:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">category</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> HTML
  <span class="token punctuation">-</span> Web</span>
<span class="token punctuation">---</span></span>

页面内容...
</code></pre></div><p>你就可以在 <code>/category/html</code> 和 <code>/category/web</code> 页面下找到它。</p><p><img src="`+c+'" alt="Category" data-mode="lightmode-only" loading="lazy"><img src="'+d+`" alt="Category" data-mode="darkmode-only" loading="lazy"></p><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h2><p>只需要在页面的 frontmatter 中设置 <code>tag</code>，并设置一个或多个文章所属的标签，该文章会自动渲染在 <code>/tag/&lt;标签名&gt;/</code> 标签页面的列表中。</p><p>比如在某个页面设置:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">tag</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> HTML
  <span class="token punctuation">-</span> Web</span>
<span class="token punctuation">---</span></span>

页面内容...
</code></pre></div><p>你就可以在 <code>/tag/html</code> 和 <code>/tag/web</code> 页面下找到它。</p><p><img src="`+p+'" alt="Tag" data-mode="lightmode-only" loading="lazy"><img src="'+r+'" alt="Tag" data-mode="darkmode-only" loading="lazy"></p><h2 id="查看列表" tabindex="-1"><a class="header-anchor" href="#查看列表" aria-hidden="true">#</a> 查看列表</h2><p>除了直接访问对应的地址外，分类和标签名称会显示在文章开头的文章信息处，你可以点击它来导航到对应的列表查看相同分类或标签的文章。</p><figure><img src="'+l+'" alt="文章信息" tabindex="0" loading="lazy"><figcaption>文章信息</figcaption></figure><p>你也可以在博客主页侧边栏中选择分类或标签选项卡选择对应的项目进入列表。</p><figure><img src="'+i+'" alt="侧边栏选项卡" tabindex="0" loading="lazy"><figcaption>侧边栏选项卡</figcaption></figure>',17);function k(f,h){return t(),n("div",null,[m,e(" more "),u])}const y=a(g,[["render",k],["__file","category-and-tags.html.vue"]]);export{y as default};
