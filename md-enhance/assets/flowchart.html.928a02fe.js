import{a as e,o,b as t,e as s,F as p,j as n}from"./app.38083ded.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const c={},r=n(`<p>\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301\u6D41\u7A0B\u56FE\u3002</p><p>\u672C\u63D2\u4EF6\u5229\u7528\u4E86 <a href="https://github.com/adrai/flowchart.js" target="_blank" rel="noopener noreferrer">flowchart.js</a> \u6765\u652F\u6301\u8FD9\u4E00\u529F\u80FD\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;md-enhance&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u542F\u7528\u6D41\u7A0B\u56FE</span>
        <span class="token literal-property property">flowchart</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- \u2193 :preset \u662F\u53EF\u9009\u7684 --&gt;</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow:preset</span>
<span class="token code-block language-flow">
&lt;!-- \u653E\u7F6E\u4F60\u7684\u6D41\u7A0B\u56FE\u4EE3\u7801 --&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u76EE\u524D\u53EF\u7528\u7684\u9884\u8BBE:</p><ul><li><code>vue</code> (\u9ED8\u8BA4)</li><li><code>ant</code></li></ul><h2 id="\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u6F14\u793A" aria-hidden="true">#</a> \u6F14\u793A</h2>`,9),i=n(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow</span>
<span class="token code-block language-flow">st=&gt;start: Start|past:&gt;http://www.google.com[blank]
e=&gt;end: End|future:&gt;http://www.google.com
op1=&gt;operation: My Operation|past
op2=&gt;operation: Stuff|current
sub1=&gt;subroutine: My Subroutine|invalid
cond=&gt;condition: Yes
or No?|approved:&gt;http://www.google.com
c2=&gt;condition: Good idea|rejected
io=&gt;inputoutput: catch something...|future

st-&gt;op1(right)-&gt;cond
cond(yes, right)-&gt;c2
cond(no)-&gt;sub1(left)-&gt;op1
c2(yes)-&gt;io-&gt;e
c2(no)-&gt;op2-&gt;e</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u6D41\u7A0B\u56FE\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u56FE\u4ECB\u7ECD" aria-hidden="true">#</a> \u6D41\u7A0B\u56FE\u4ECB\u7ECD</h2><h3 id="\u8282\u70B9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u7C7B\u578B" aria-hidden="true">#</a> \u8282\u70B9\u7C7B\u578B</h3><p>\u5B9A\u4E49\u4E86\u7ED3\u70B9\u5F62\u72B6</p><h4 id="\u5F00\u59CB-\u7ED3\u675F" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB-\u7ED3\u675F" aria-hidden="true">#</a> \u5F00\u59CB &amp; \u7ED3\u675F</h4><p>\u88AB\u7528\u4E8E\u6D41\u7A0B\u5F00\u59CB\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u3002 \u9ED8\u8BA4\u6587\u5B57\u4E3A <code>Start</code>.</p><ul><li><code>[Variable]-&gt;start: [Text]</code></li></ul><p>\u88AB\u7528\u4E8E\u6D41\u7A0B\u7ED3\u675F\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u3002 \u9ED8\u8BA4\u6587\u5B57\u4E3A <code>End</code>.</p><ul><li><code>[Variable]-&gt;end: [Text]</code></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow</span>
<span class="token code-block language-flow">st=&gt;start: Start
e=&gt;end: End

st-&gt;e</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,10),d=n('<h4 id="\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a> \u64CD\u4F5C</h4><ul><li><code>[Variable]-&gt;operation: [Text]</code></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">flow</span>\n<span class="token code-block language-flow">process=&gt;operation: Operation\ne=&gt;end: End\n\nprocess-&gt;e</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',3),u=n('<h4 id="\u8F93\u5165\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u5165\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u5165\u8F93\u51FA</h4><ul><li><code>[Variable]-&gt;inputoutput: [Text]</code></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">flow</span>\n<span class="token code-block language-flow">process=&gt;inputoutput: Inputoutput\ne=&gt;end: End\n\nprocess-&gt;e</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',3),b=n('<h4 id="\u5B50\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7A0B\u5E8F" aria-hidden="true">#</a> \u5B50\u7A0B\u5E8F</h4><ul><li><code>[Variable]-&gt;subroutine: [Text]</code></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">flow</span>\n<span class="token code-block language-flow">process=&gt;subroutine: Subroutine\ne=&gt;end: End\n\nprocess-&gt;e</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',3),g=n(`<h4 id="\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6" aria-hidden="true">#</a> \u6761\u4EF6</h4><ul><li><p><code>[Variable]-&gt;condition: [Text]</code></p></li><li><p><code>[Variable]([yesText])-&gt;[Position]</code></p></li><li><p><code>[Variable]([noText])-&gt;[Position]</code></p></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow</span>
<span class="token code-block language-flow">cond=&gt;condition: Process?
process=&gt;operation: Process
e=&gt;end: End

cond(yes)-&gt;process-&gt;e
cond(no)-&gt;e</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,3),m=n(`<h4 id="\u5E73\u884C" tabindex="-1"><a class="header-anchor" href="#\u5E73\u884C" aria-hidden="true">#</a> \u5E73\u884C</h4><p>\u5B9A\u4E49\u540C\u65F6\u5F00\u59CB\u7684\u591A\u4E2A\u7A0B\u5E8F\u3002</p><ul><li><code>[Variable]-&gt;parallel: [Text]</code></li><li><code>[Variable](path1, direction)-&gt;[Position]</code></li><li><code>[Variable](path1, direction)-&gt;[Position]</code></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow</span>
<span class="token code-block language-flow">para=&gt;parallel: parallel tasks
process=&gt;operation: Process
e=&gt;end: End

para(path1, bottom)-&gt;process-&gt;e
para(path2)-&gt;e</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4),h=n(`<h3 id="\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5" aria-hidden="true">#</a> \u94FE\u63A5</h3><p>\u8FDE\u63A5\u65B9\u5F0F\u5728\u6D41\u7A0B\u56FE\u4E2D\u8282\u70B9\u5B9A\u4E49\u540E\u63CF\u8FF0\uFF0C\u4F7F\u7528 <code>-&gt;</code> \u6307\u5B9A\u4E00\u4E2A\u8282\u70B9\u4E4B\u95F4\u7684\u94FE\u63A5\uFF0C\u4F8B\u5982 <code>nodeVar1-&gt;nodeVar2-&gt;nodeVar3</code></p><p>\u6D41\u7A0B\u53EF\u4EE5\u88AB\u5206\u5F00:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>nodeVar1-&gt;nodeVar2
nodeVar2-&gt;nodeVar3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FDE\u63A5\u683C\u5F0F\u5B9A\u4E49\u5982\u4E0B:</p><p><code>&lt;node variable name&gt;[(&lt;specificaion1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;[[(&lt;specificaion1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;]</code></p><p>\u5728 <code>[]</code> \u4E2D\u7684\u9879\u662F\u53EF\u9009\u7684\u3002</p><h3 id="\u65B9\u5411" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5411" aria-hidden="true">#</a> \u65B9\u5411</h3><p>\u4EE5\u4E0B\u65B9\u5411\u53EF\u7528\uFF0C\u5E76\u5B9A\u4E49\u4E86\u8FDE\u63A5\u5C06\u4ECE\u8282\u70B9\u79BB\u5F00\u7684\u65B9\u5411\u3002\u5982\u679C\u6307\u5B9A\u7B26\u4E0D\u6B62\u4E00\u4E2A\uFF0C\u5219\u603B\u662F\u6700\u540E\u4E00\u4E2A\u3002\u6240\u6709\u8282\u70B9\u90FD\u6709\u9ED8\u8BA4\u65B9\u5411\uFF0C\u8FD9\u4F7F\u5176\u6210\u4E3A\u53EF\u9009\u89C4\u8303\u3002<code>&lt;direction&gt;</code> \u7684\u53EF\u9009\u503C\u4E3A:</p><ul><li><code>left</code></li><li><code>right</code></li><li><code>top</code></li><li><code>bottom</code></li></ul><h3 id="\u8282\u70B9\u7279\u5B9A\u8BF4\u660E\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u7279\u5B9A\u8BF4\u660E\u7B26" aria-hidden="true">#</a> \u8282\u70B9\u7279\u5B9A\u8BF4\u660E\u7B26</h3><p>\u6BCF\u4E2A\u8282\u70B9\u53D8\u91CF\u90FD\u6709\u53EF\u9009\u7684\u8BF4\u660E\u7B26\uFF0C\u4F8B\u5982\u65B9\u5411\uFF0C\u6709\u4E9B\u53D8\u91CF\u6709\u7279\u6B8A\u7684\u8BF4\u660E\u7B26\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u4E0B\u9762\u5B9A\u4E49\u7684\u8282\u70B9\u7C7B\u578B\u3002\u5728 <code>()</code> \u4E2D\u7684\u53D8\u91CF\u540D\u540E\u6DFB\u52A0\u8BF4\u660E\u7B26\uFF0C\u5E76\u7528<code>,</code> \u5206\u9694\uFF0C\u4F8B\u5982 <code>nodeVar (spec1\uFF0Cspec2)</code>\u3002</p><ul><li><p><strong>start</strong><strong>operation</strong><strong>inputoutput</strong><strong>subroutine</strong></p><p>\u53EF\u9009\u65B9\u5411</p><p><code>startVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>operationVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>inputoutputVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>subroutineVar(&lt;direction&gt;)-&gt;nextNode</code></p></li><li><p><strong>condition</strong></p><p>\u5FC5\u9700\u6307\u5B9A <code>yes</code> or <code>no</code></p><p>\u53EF\u9009\u65B9\u5411</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>conditionalVar(yes, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode1
conditionalVar(no, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p><strong>parallel</strong></p><p>\u5FC5\u9700\u6307\u5B9A\u8DEF\u5F84\u65B9\u5411 <code>path1</code>, <code>path2</code>, \u6216 <code>path3</code></p><p>\u53EF\u9009\u65B9\u5411</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>parallelVar(path1, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode1
parallelVar(path2, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode2
parallelVar(path3, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h3 id="\u7F51\u5740" tabindex="-1"><a class="header-anchor" href="#\u7F51\u5740" aria-hidden="true">#</a> \u7F51\u5740</h3><p>\u53EF\u4EE5\u4F7F\u7528 <code>:&gt;</code> \u8FD0\u7B97\u7B26\u5C06\u5916\u90E8\u94FE\u63A5\u6DFB\u52A0\u5230\u8282\u70B9\u3002</p><p><code>[blank]</code> \u6307\u5B9A\u6253\u5F00\u65B0\u7684\u9875\u9762</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>st=&gt;start: Start:&gt;http://www.google.com[blank]
e=&gt;end: End:&gt;http://www.yahoo.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u8BAE" aria-hidden="true">#</a> \u5EFA\u8BAE</h3><p>\u6587\u672C\u4E2D\u53EF\u80FD\u4E0D\u5E94\u8BE5\u4F7F\u7528\u7684\u7B26\u53F7: <code>=&gt;</code>\u3001<code>-&gt;</code>\u3001 <code>:&gt;</code>\u3001<code>|</code>\u3001<code>@&gt;</code> \u548C <code>:$</code></p><p>\u5982\u679C\u8981\u5728\u6D41\u7A0B\u56FE\u4E2D\u5F3A\u8C03\u7279\u5B9A\u8DEF\u5F84\uFF0C\u5219\u53EF\u4EE5\u53E6\u5916\u5B9A\u4E49\u5B83\uFF0C\u5982\u4E0B\u6240\u793A:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>st@&gt;op1({&quot;stroke&quot;:&quot;Red&quot;})@&gt;cond({&quot;stroke&quot;:&quot;Red&quot;,&quot;stroke-width&quot;:6,&quot;arrow-end&quot;:&quot;classic-wide-long&quot;})@&gt;c2({&quot;stroke&quot;:&quot;Red&quot;})@&gt;op2({&quot;stroke&quot;:&quot;Red&quot;})@&gt;e({&quot;stroke&quot;:&quot;Red&quot;})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,21);function k(w,v){const a=e("FlowChart");return o(),t(p,null,[r,s(a,{id:"flowchart-382ee186","data-code":"st%3D%3Estart%3A%20Start%7Cpast%3A%3Ehttp%3A%2F%2Fwww.google.com%5Bblank%5D%0Ae%3D%3Eend%3A%20End%7Cfuture%3A%3Ehttp%3A%2F%2Fwww.google.com%0Aop1%3D%3Eoperation%3A%20My%20Operation%7Cpast%0Aop2%3D%3Eoperation%3A%20Stuff%7Ccurrent%0Asub1%3D%3Esubroutine%3A%20My%20Subroutine%7Cinvalid%0Acond%3D%3Econdition%3A%20Yes%0Aor%20No%3F%7Capproved%3A%3Ehttp%3A%2F%2Fwww.google.com%0Ac2%3D%3Econdition%3A%20Good%20idea%7Crejected%0Aio%3D%3Einputoutput%3A%20catch%20something...%7Cfuture%0A%0Ast-%3Eop1(right)-%3Econd%0Acond(yes%2C%20right)-%3Ec2%0Acond(no)-%3Esub1(left)-%3Eop1%0Ac2(yes)-%3Eio-%3Ee%0Ac2(no)-%3Eop2-%3Ee%0A",preset:"vue"}),i,s(a,{id:"flowchart-382ee1e8","data-code":"st%3D%3Estart%3A%20Start%0Ae%3D%3Eend%3A%20End%0A%0Ast-%3Ee%0A",preset:"vue"}),d,s(a,{id:"flowchart-382ee21e","data-code":"process%3D%3Eoperation%3A%20Operation%0Ae%3D%3Eend%3A%20End%0A%0Aprocess-%3Ee%0A",preset:"vue"}),u,s(a,{id:"flowchart-382ee23f","data-code":"process%3D%3Einputoutput%3A%20Inputoutput%0Ae%3D%3Eend%3A%20End%0A%0Aprocess-%3Ee%0A",preset:"vue"}),b,s(a,{id:"flowchart-64a570e2","data-code":"process%3D%3Esubroutine%3A%20Subroutine%0Ae%3D%3Eend%3A%20End%0A%0Aprocess-%3Ee%0A",preset:"vue"}),g,s(a,{id:"flowchart-64a57062","data-code":"cond%3D%3Econdition%3A%20Process%3F%0Aprocess%3D%3Eoperation%3A%20Process%0Ae%3D%3Eend%3A%20End%0A%0Acond(yes)-%3Eprocess-%3Ee%0Acond(no)-%3Ee%0A",preset:"vue"}),m,s(a,{id:"flowchart-64a56fb2","data-code":"para%3D%3Eparallel%3A%20parallel%20tasks%0Aprocess%3D%3Eoperation%3A%20Process%0Ae%3D%3Eend%3A%20End%0A%0Apara(path1%2C%20bottom)-%3Eprocess-%3Ee%0Apara(path2)-%3Ee%0A",preset:"vue"}),h],64)}var E=l(c,[["render",k]]);export{E as default};