import{j as n}from"./app.d96d765f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: demo [react] Optional title text

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token comment">// your script, exporting your react component through \`export default\`</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">css</span>
<span class="token code-block language-css"><span class="token comment">/* Your css content */</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">// Config (Optional)</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">Attention</p><ul><li>Babel must be loaded when using react to parse JSX, this is done by the plugin automaticaly</li><li>You must export your component through <code>export default</code></li><li>We use &quot;ShadowDOM&quot; to make style isolation, and we already replace <code>document</code> with <code>shadowRoot</code>. To access the page document, please visit <code>window.document</code>.</li></ul></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><div id="code-demo-91128758" class="code-demo-wrapper" data-type="react" data-title="A%20function-based%20React%20Demo" data-code="%7B%22js%22%3A%22export%20default%20()%20%3D%3E%20%7B%5Cn%20%20const%20message%20%3D%20%5C%22very%20handsome%5C%22%3B%5Cn%5Cn%20%20const%20handler%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20alert(message)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3Cdiv%20className%3D%5C%22box%5C%22%3E%5Cn%20%20%20%20%20%20Mr.Hope%20is%5Cn%20%20%20%20%20%20%3Cspan%20id%3D%5C%22very%5C%22%20onClick%3D%7Bhandler%7D%3E%5Cn%20%20%20%20%20%20%20%20%7Bmessage%7D%5Cn%20%20%20%20%20%20%3C%2Fspan%3E%5Cn%20%20%20%20%3C%2Fdiv%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%22%2C%22css%22%3A%22.box%20span%20%7B%5Cn%20%20color%3A%20blue%3B%5Cn%7D%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;very handsome&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;box&quot;</span><span class="token operator">&gt;</span>
      Mr<span class="token punctuation">.</span>Hope is
      <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">&quot;very&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handler<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>message<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></div><div class="code-demo-footer"></div></div><details class="custom-block details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: demo [react] A function-based React Demo

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;very handsome&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;box&quot;</span><span class="token operator">&gt;</span>
      Mr<span class="token punctuation">.</span>Hope is
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></details><div id="code-demo-316b37b8" class="code-demo-wrapper" data-type="react" data-title="A%20class-based%20React%20Demo" data-code="%7B%22js%22%3A%22export%20default%20class%20App%20extends%20React.Component%20%7B%5Cn%20%20constructor(props)%20%7B%5Cn%20%20%20%20super(props)%3B%5Cn%20%20%20%20this.state%20%3D%20%7B%20message%3A%20%5C%22very%20handsome%5C%22%20%7D%3B%5Cn%20%20%7D%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3Cdiv%20className%3D%5C%22box%5C%22%3E%5Cn%20%20%20%20%20%20%20%20Mr.Hope%20is%5Cn%20%20%20%20%20%20%20%20%3Cspan%20id%3D%5C%22very%5C%22%20onClick%3D%7Bthis.handler%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%7Bthis.state.message%7D%5Cn%20%20%20%20%20%20%20%20%3C%2Fspan%3E%5Cn%20%20%20%20%20%20%3C%2Fdiv%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%20%20handler()%20%7B%5Cn%20%20%20%20alert(this.state.message)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%22%2C%22css%22%3A%22.box%20span%20%7B%5Cn%20%20color%3A%20blue%3B%5Cn%7D%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;very handsome&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;box&quot;</span><span class="token operator">&gt;</span>
        Mr<span class="token punctuation">.</span>Hope is
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></div><div class="code-demo-footer"></div></div><details class="custom-block details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: demo [react] A class-based React Demo

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;very handsome&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;box&quot;</span><span class="token operator">&gt;</span>
        Mr<span class="token punctuation">.</span>Hope is
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
<span class="token code-block language-css"><span class="token selector">.box span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></details>`,8);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
