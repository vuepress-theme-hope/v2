import{j as n}from"./app.0e03aa29.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F" aria-hidden="true">#</a> \u683C\u5F0F</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: demo [vue] \u53EF\u9009\u7684\u6807\u9898\u6587\u5B57

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;!-- \u2191 \u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 html --&gt;
&lt;template&gt;
  &lt;!-- vue \u6A21\u677F --&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  // vue \u7EC4\u4EF6
};
&lt;/script&gt;
&lt;style&gt;
/* css \u4EE3\u7801 */
&lt;/style&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">// \u914D\u7F6E (\u53EF\u9009)</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><ul><li>\u7531\u4E8E API \u4E0D\u540C\uFF0C\u4E14\u63D2\u4EF6\u5BF9\u5E94\u57FA\u4E8E Vue2 \u7684 VuePress@v1\uFF0C\u53EA\u80FD\u4F7F\u7528 Vue2\u3002</li><li>\u5FC5\u987B\u5C06\u7EC4\u4EF6\u901A\u8FC7 <code>export default</code> \u9ED8\u8BA4\u5BFC\u51FA</li><li>\u6211\u4EEC\u4F7F\u7528 &quot;ShadowDOM&quot; \u8FDB\u884C\u6837\u5F0F\u9694\u79BB\uFF0C\u5E76\u5DF2\u7ECF\u5C06 <code>document</code> \u66FF\u6362\u4E3A\u4E86 <code>shadowRoot</code> \u5BF9\u8C61\u3002\u5982\u679C\u9700\u8981\u8BBF\u95EE\u9875\u9762\u7684 document\uFF0C\u8BF7\u8BBF\u95EE <code>window.document</code>\u3002</li></ul></div><h2 id="\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u6F14\u793A" aria-hidden="true">#</a> \u6F14\u793A</h2><div id="code-demo-2de101de" class="code-demo-wrapper" data-type="vue" data-title="%E4%B8%80%E4%B8%AA%20Vue%20Demo" data-code="%7B%22vue%22%3A%22%3Ctemplate%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22box%5C%22%3E%5Cn%20%20%20%20Mr.Hope%20%3Cspan%20%40click%3D%5C%22handler%5C%22%3E%7B%7B%20message%20%7D%7D%3C%2Fspan%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%3Cscript%3E%5Cnexport%20default%20%7B%5Cn%20%20data%3A%20()%20%3D%3E%20(%7B%20message%3A%20%5C%22%E5%8D%81%E5%88%86%E5%B8%85%5C%22%20%7D)%2C%5Cn%20%20methods%3A%20%7B%5Cn%20%20%20%20handler()%20%7B%5Cn%20%20%20%20%20%20alert(this.message)%3B%5Cn%20%20%20%20%7D%2C%5Cn%20%20%7D%2C%5Cn%7D%3B%5Cn%3C%2Fscript%3E%5Cn%3Cstyle%3E%5Cn.box%20span%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%3C%2Fstyle%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Mr.Hope <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handler<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u5341\u5206\u5E05&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.box span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></div></div><div class="code-demo-footer"></div></div><details class="custom-block details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: demo [vue] \u4E00\u4E2A Vue Demo

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    Mr.Hope &lt;span @click=&quot;handler&quot;&gt;{{ message }}&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  data: () =&gt; ({ message: &quot;\u5341\u5206\u5E05&quot; }),
  methods: {
    handler() {
      alert(this.message);
    },
  },
};
&lt;/script&gt;
&lt;style&gt;
.box span {
  color: red;
}
&lt;/style&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></details>`,6);function e(t,l){return p}var u=s(a,[["render",e]]);export{u as default};
