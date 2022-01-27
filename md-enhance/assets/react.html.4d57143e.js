import{j as n}from"./app.5a922f92.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F" aria-hidden="true">#</a> \u683C\u5F0F</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: demo [react] \u53EF\u9009\u7684\u6807\u9898\u6587\u5B57

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token comment">// \u653E\u7F6E\u811A\u672C\uFF0C\u5E76\u901A\u8FC7 \`export default\` \u5BFC\u51FA\u4F60\u7684 react \u7EC4\u4EF6</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">css</span>
<span class="token code-block language-css"><span class="token comment">/* \u4F60\u7684 css \u5185\u5BB9 */</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">// \u914D\u7F6E (\u53EF\u9009)</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><ul><li>\u4F7F\u7528 React \u7684\u65F6\u5019\uFF0C\u4E3A\u4E86\u89E3\u6790 JSX \u5FC5\u987B\u5F15\u5165 Babel\uFF0C\u6B64\u8FC7\u7A0B\u7531\u63D2\u4EF6\u81EA\u52A8\u5B8C\u6210\u3002</li><li>\u5FC5\u987B\u5C06\u7EC4\u4EF6\u901A\u8FC7 <code>export default</code> \u9ED8\u8BA4\u5BFC\u51FA</li><li>\u6211\u4EEC\u4F7F\u7528 &quot;ShadowDOM&quot; \u8FDB\u884C\u6837\u5F0F\u9694\u79BB\uFF0C\u5E76\u5DF2\u7ECF\u5C06 <code>document</code> \u66FF\u6362\u4E3A\u4E86 <code>shadowRoot</code> \u5BF9\u8C61\u3002\u5982\u679C\u9700\u8981\u8BBF\u95EE\u9875\u9762\u7684 document\uFF0C\u8BF7\u8BBF\u95EE <code>window.document</code>\u3002</li></ul></div><h2 id="\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u6F14\u793A" aria-hidden="true">#</a> \u6F14\u793A</h2><div id="code-demo-f5d21806" class="code-demo-wrapper" data-type="react" data-title="%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E5%BC%8F%20React%20Demo" data-code="%7B%22js%22%3A%22export%20default%20()%20%3D%3E%20%7B%5Cn%20%20const%20message%20%3D%20%5C%22%E5%8D%81%E5%88%86%E5%B8%85%5C%22%3B%5Cn%5Cn%20%20const%20handler%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20alert(message)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3Cdiv%20className%3D%5C%22box%5C%22%3E%5Cn%20%20%20%20%20%20Mr.Hope%5Cn%20%20%20%20%20%20%3Cspan%20id%3D%5C%22very%5C%22%20onClick%3D%7Bhandler%7D%3E%5Cn%20%20%20%20%20%20%20%20%7Bmessage%7D%5Cn%20%20%20%20%20%20%3C%2Fspan%3E%5Cn%20%20%20%20%3C%2Fdiv%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%22%2C%22css%22%3A%22.box%20span%20%7B%5Cn%20%20color%3A%20blue%3B%5Cn%7D%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;\u5341\u5206\u5E05&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;box&quot;</span><span class="token operator">&gt;</span>
      Mr<span class="token punctuation">.</span>Hope
      <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">&quot;very&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handler<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>message<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></div><div class="code-demo-footer"></div></div><details class="custom-block details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: demo [react] \u4E00\u4E2A\u51FD\u6570\u5F0F React Demo

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;\u5341\u5206\u5E05&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;box&quot;</span><span class="token operator">&gt;</span>
      Mr<span class="token punctuation">.</span>Hope
      <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">&quot;very&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handler<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>message<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">css</span>
<span class="token code-block language-css"><span class="token selector">.box span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></details><div id="code-demo-3bd62d1a" class="code-demo-wrapper" data-type="react" data-title="%E4%B8%80%E4%B8%AA%E7%B1%BB%E5%BC%8F%20React%20Demo" data-code="%7B%22js%22%3A%22export%20default%20class%20App%20extends%20React.Component%20%7B%5Cn%20%20constructor(props)%20%7B%5Cn%20%20%20%20super(props)%3B%5Cn%20%20%20%20this.state%20%3D%20%7B%20message%3A%20%5C%22%E5%8D%81%E5%88%86%E5%B8%85%5C%22%20%7D%3B%5Cn%20%20%7D%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3Cdiv%20className%3D%5C%22box%5C%22%3E%5Cn%20%20%20%20%20%20%20%20Mr.Hope%5Cn%20%20%20%20%20%20%20%20%3Cspan%20id%3D%5C%22very%5C%22%20onClick%3D%7Bthis.handler%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%7Bthis.state.message%7D%5Cn%20%20%20%20%20%20%20%20%3C%2Fspan%3E%5Cn%20%20%20%20%20%20%3C%2Fdiv%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%20%20handler()%20%7B%5Cn%20%20%20%20alert(this.state.message)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%22%2C%22css%22%3A%22.box%20span%20%7B%5Cn%20%20color%3A%20blue%3B%5Cn%7D%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u5341\u5206\u5E05&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;box&quot;</span><span class="token operator">&gt;</span>
        Mr<span class="token punctuation">.</span>Hope
        <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">&quot;very&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handler<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></div><div class="code-demo-footer"></div></div><details class="custom-block details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: demo [react] \u4E00\u4E2A\u7C7B\u5F0F React Demo

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u5341\u5206\u5E05&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;box&quot;</span><span class="token operator">&gt;</span>
        Mr<span class="token punctuation">.</span>Hope
        <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">&quot;very&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handler<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">css</span>
<span class="token code-block language-css"><span class="token selector">.box-react span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></details>`,8);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
