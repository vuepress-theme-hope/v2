import{_ as n,W as s,X as a,a1 as e}from"./framework-eb069dea.js";const t={},o=e(`<p>The following functions are available on both node and client.</p><h2 id="props-related" tabindex="-1"><a class="header-anchor" href="#props-related" aria-hidden="true">#</a> Props Related</h2><p>Encode/decode and zip/unzip props.</p><p>This is useful in markdown plugins when you want to encode string content and pass it to the component through props.</p><p>You may simply achieve this with <code>encodeURIComponent</code> and <code>decodeURIComponent</code>, but it can be very large if the content contains lots of special characters.</p><p>So we provide <code>utoa</code> and <code>atou</code> to zip and encode content.</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> utoa<span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> level<span class="token operator">:</span> DeflateOptions<span class="token punctuation">[</span><span class="token string">&quot;level&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">atou</span><span class="token operator">:</span> <span class="token punctuation">(</span>base64<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div><details class="hint-container details"><summary>Details</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
{
  &quot;type&quot;: &quot;bar&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;Red&quot;, &quot;Blue&quot;, &quot;Yellow&quot;, &quot;Green&quot;, &quot;Purple&quot;, &quot;Orange&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;# of Votes&quot;,
        &quot;data&quot;: [12, 19, 3, 5, 2, 3],
        &quot;backgroundColor&quot;: [
          &quot;rgba(255, 99, 132, 0.2)&quot;,
          &quot;rgba(54, 162, 235, 0.2)&quot;,
          &quot;rgba(255, 206, 86, 0.2)&quot;,
          &quot;rgba(75, 192, 192, 0.2)&quot;,
          &quot;rgba(153, 102, 255, 0.2)&quot;,
          &quot;rgba(255, 159, 64, 0.2)&quot;
        ],
        &quot;borderColor&quot;: [
          &quot;rgba(255, 99, 132, 1)&quot;,
          &quot;rgba(54, 162, 235, 1)&quot;,
          &quot;rgba(255, 206, 86, 1)&quot;,
          &quot;rgba(75, 192, 192, 1)&quot;,
          &quot;rgba(153, 102, 255, 1)&quot;,
          &quot;rgba(255, 159, 64, 1)&quot;
        ],
        &quot;borderWidth&quot;: 1
      }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;y&quot;: {
        &quot;beginAtZero&quot;: true
      }
    }
  }
}
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> prop <span class="token operator">=</span> <span class="token function">utoa</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;eJyNUsFOwzAMve8rrHABKZqWlg5WxAE4cARxAMHEIV1NmQhNlaaCCe3fcdKtW0sLWGpjxy/v+UV512mlcIyfhTa2hHP4GgHYVYExsEQaxqlMpZWxbwAomaAqY5izO0wZB3apKnTrIyqlP1x2bRBzl9xWplC+eWNkniF7dmw1X4nWsfgaNtwNP2kfgH6Be22x9CPUUQ8yFwEHMeMQcog4UBFuiF0kcvGWGV3l6ZVW2uw0XDCTJfIwiOjYjAhESIcn4+BoT2MLio6pP6V+EBJ6AOSZgsmUwyl9A6ATwoiZn3lYTkTkRkycnuP8TU9ENPqUxuuA9i9BmxTNPy9A/G2/F9I23wtpW++FdIwPKzW2W5Afph+WqX2NQWz313XicT7XhV3qnB5f/ejKhVTYVACrXUqUmC3zC/uERsdgTYUdVr/Qb302+gZxe7S/&quot;</span>

<span class="token function">atou</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// will be the original content</span>

<span class="token comment">// if you use \`encodeURIComponent\`, it will be much longer</span>
<span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;%0A%7B%0A%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22Red%22%2C%20%22Blue%22%2C%20%22Yellow%22%2C%20%22Green%22%2C%20%22Purple%22%2C%20%22Orange%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%23%20of%20Votes%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B12%2C%2019%2C%203%2C%205%2C%202%2C%203%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20206%2C%2086%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%200.2)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20206%2C%2086%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%201)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22borderWidth%22%3A%201%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22y%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22beginAtZero%22%3A%20true%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="utils" tabindex="-1"><a class="header-anchor" href="#utils" aria-hidden="true">#</a> Utils</h2><h3 id="deepmerge" tabindex="-1"><a class="header-anchor" href="#deepmerge" aria-hidden="true">#</a> deepMerge</h3><p>Deep merge objects to the first one, useful for merging user options with default options.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Deep merge objects to the first one
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> deepMerge<span class="token operator">:</span> <span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">IAnyObject</span><span class="token punctuation">,</span>
  <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name">IAnyObject</span> <span class="token operator">=</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token constant">V</span> <span class="token keyword">extends</span> <span class="token class-name">Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">&amp;</span> Partial<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token operator">&amp;</span> <span class="token constant">U</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  originObject<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>overrideObjects<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">V</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Example</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// or vuepress-shared/client</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> deepMerge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  optionA<span class="token operator">:</span> <span class="token punctuation">{</span>
    optionA1<span class="token operator">:</span> <span class="token string">&quot;defaultOptionA1&quot;</span><span class="token punctuation">,</span>
    optionA2<span class="token operator">:</span> <span class="token string">&quot;defaultOptionA2&quot;</span><span class="token punctuation">,</span>
    optionA3<span class="token operator">:</span> <span class="token string">&quot;defaultOptionA3&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  optionB<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  optionC<span class="token operator">:</span> <span class="token string">&quot;optionC&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> userOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  optionA<span class="token operator">:</span> <span class="token punctuation">{</span>
    optionA1<span class="token operator">:</span> <span class="token string">&quot;optionA1&quot;</span><span class="token punctuation">,</span>
    optionA2<span class="token operator">:</span> <span class="token string">&quot;optionA2&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  optionB<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">deepMerge</span><span class="token punctuation">(</span>defaultOptions<span class="token punctuation">,</span> userOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//   optionA: {</span>
<span class="token comment">//     optionA1: &quot;optionA1&quot;,</span>
<span class="token comment">//     optionA2: &quot;optionA2&quot;,</span>
<span class="token comment">//     optionA3: &quot;defaultOptionA3&quot;,</span>
<span class="token comment">//   },</span>
<span class="token comment">//   optionB: false,</span>
<span class="token comment">//   optionC: &quot;optionC&quot;,</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="getdate" tabindex="-1"><a class="header-anchor" href="#getdate" aria-hidden="true">#</a> getDate</h3><p>Get date info from a string or Date object.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>The function returns null instead of throw error when the date is invalid.</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">DateDetail</span> <span class="token punctuation">{</span>
  year<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  month<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  day<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  hour<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  minute<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  second<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">DateInfo</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;date&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;time&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;full&quot;</span><span class="token punctuation">;</span>
  info<span class="token operator">:</span> DateDetail<span class="token punctuation">;</span>
  value<span class="token operator">:</span> Date <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Get Date info
 *
 * <span class="token keyword">@param</span> <span class="token parameter">date</span> Date or date info
 * <span class="token keyword">@param</span> <span class="token parameter">timezone</span> (optional) date timezone
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getDate</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  date<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Date <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  timezone<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DateInfo <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Example</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// or vuepress-shared/client</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token function">getDate</span><span class="token punctuation">(</span><span class="token string">&quot;2021-01-01 12:34:56&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//   value: Date(&quot;2021-01-01 12:34:56&quot;),</span>
<span class="token comment">//   info: {</span>
<span class="token comment">//     year: 2021,</span>
<span class="token comment">//     month: 1,</span>
<span class="token comment">//     day: 1,</span>
<span class="token comment">//     hour: 12,</span>
<span class="token comment">//     minute: 34,</span>
<span class="token comment">//     second: 56,</span>
<span class="token comment">//   },</span>
<span class="token comment">//   type: &quot;full&quot;,</span>
<span class="token comment">// }</span>

<span class="token function">getDate</span><span class="token punctuation">(</span><span class="token string">&quot;2021-01-01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//   value: Date(&quot;2021-01-01&quot;),</span>
<span class="token comment">//   info: {</span>
<span class="token comment">//     year: 2021,</span>
<span class="token comment">//     month: 1,</span>
<span class="token comment">//     day: 1,</span>
<span class="token comment">//   },</span>
<span class="token comment">//   type: &quot;date&quot;,</span>
<span class="token comment">// }</span>

<span class="token function">getDate</span><span class="token punctuation">(</span><span class="token string">&quot;12:34:56&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//   value: undefined,</span>
<span class="token comment">//   info: {</span>
<span class="token comment">//     hour: 12,</span>
<span class="token comment">//     minute: 34,</span>
<span class="token comment">//     second: 56,</span>
<span class="token comment">//   },</span>
<span class="token comment">//   type: &quot;time&quot;,</span>
<span class="token comment">// }</span>

<span class="token comment">// if you are in UTC</span>
<span class="token comment">// Asia/Shanghai is +8</span>
<span class="token function">getDate</span><span class="token punctuation">(</span><span class="token string">&quot;12:34:56&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Asia/Shanghai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// It will be 4AM in UTC</span>
<span class="token comment">// {</span>
<span class="token comment">//   value: undefined,</span>
<span class="token comment">//   info: {</span>
<span class="token comment">//     hour: 4,</span>
<span class="token comment">//     minute: 34,</span>
<span class="token comment">//     second: 56,</span>
<span class="token comment">//   },</span>
<span class="token comment">//   type: &quot;time&quot;,</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="comparedate" tabindex="-1"><a class="header-anchor" href="#comparedate" aria-hidden="true">#</a> compareDate</h3><p>Compare dates and sort them from latest to oldest.</p><p>Invalid date will appear at last.</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Recent date will returns positive value, so dates will be latest to oldest after sorting
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">compareDate</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  dateA<span class="token operator">:</span> Date <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  dateB<span class="token operator">:</span> Date <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre></div><details class="hint-container details"><summary>Example</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// or vuepress-shared/client</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> compareDate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dates <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;2021-01-01&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;2022-04-05 08:00:00&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;04:38:45&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;19999&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;2022-03-08&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

dates<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>compareDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [</span>
<span class="token comment">//   &quot;2022-04-05 08:00:00&quot;,</span>
<span class="token comment">//   &quot;2022-03-08&quot;,</span>
<span class="token comment">//   &quot;2021-01-01&quot;,</span>
<span class="token comment">//   &quot;04:38:45&quot;,</span>
<span class="token comment">//   &quot;19999&quot;,</span>
<span class="token comment">// ];</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="isurl" tabindex="-1"><a class="header-anchor" href="#isurl" aria-hidden="true">#</a> isUrl</h3><p>Whether a variable is a valid url.</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Whether a variable is a valid url
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isUrl</span><span class="token operator">:</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="isabsoluteurl" tabindex="-1"><a class="header-anchor" href="#isabsoluteurl" aria-hidden="true">#</a> isAbsoluteUrl</h3><p>Whether a variable is a valid absolute url.</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Whether a variable is a valid absolute url
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isAbsoluteUrl</span><span class="token operator">:</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div>`,29),p=[o];function i(l,c){return s(),a("div",null,p)}const r=n(t,[["render",i],["__file","shared.html.vue"]]);export{r as default};
