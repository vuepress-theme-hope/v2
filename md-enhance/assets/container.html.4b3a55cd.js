import{j as n}from"./app.649afb4b.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>The plugin adds tip, note, info, warning, danger and detail container.</p><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;md-enhance&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// Enable container</span>
        <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><div class="custom-container info"><p class="custom-container-title">Info</p><p>Information container</p></div><div class="custom-container note"><p class="custom-container-title">Note</p><p>Note container</p></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Tip container</p></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Warning container</p></div><div class="custom-container danger"><p class="custom-container-title">Warning</p><p>Dangerous container</p></div><details class="custom-block details"><summary>Details</summary><p>Details container</p></details><div class="custom-container info"><p class="custom-container-title">custom title</p><p>A custom information container</p></div><div class="custom-container note"><p class="custom-container-title">custom title</p><p>A custom note container</p></div><div class="custom-container tip"><p class="custom-container-title">custom title</p><p>A custom tip container</p></div><div class="custom-container warning"><p class="custom-container-title">custom title</p><p>A custom warning container</p></div><div class="custom-container danger"><p class="custom-container-title">custom Title</p><p>A custom danger container</p></div><details class="custom-block details"><summary>custom title</summary><p>A custom details container</p></details><div class="custom-container info"><p class="custom-container-title">Custom info</p></div><div class="custom-container note"><p class="custom-container-title">Custom note</p></div><div class="custom-container tip"><p class="custom-container-title">Custom tip</p></div><div class="custom-container warning"><p class="custom-container-title">Custom warning</p></div><div class="custom-container danger"><p class="custom-container-title">Custom danger</p></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: info
Information container
:::

::: note
Note container
:::

::: tip
Tip container
:::

::: warning
Warning container
:::

::: danger
Dangerous container
:::

::: details
Details container
:::

::: info custom title
A custom information container
:::

::: note custom title
A custom note container
:::

::: tip custom title
A custom tip container
:::

::: warning custom title
A custom warning container
:::

::: danger custom Title
A custom danger container
:::

::: details custom title
A custom details container
:::

::: info Custom info
:::

::: note Custom note
:::

::: tip Custom tip
:::

::: warning Custom warning
:::

::: danger Custom danger
:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div>`,22);function t(i,p){return e}var l=s(a,[["render",t]]);export{l as default};
