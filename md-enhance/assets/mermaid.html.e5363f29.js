import{a as e,o as r,b as t,e as a,F as l,j as n}from"./app.feb51c64.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const i={},c=n(`<p>\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301 <a href="https://mermaid-js.github.io/mermaid/#/" target="_blank" rel="noopener noreferrer">mermaid</a>\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;md-enhance&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// Enable mermaid</span>
        <span class="token literal-property property">mermaid</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">mermaid</span>
<span class="token code-block language-mermaid">
&lt;!-- \u5728\u6B64\u5904\u653E\u7F6E mermaid \u4EE3\u7801 --&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u8BE6\u89C1 <a href="https://mermaid-js.github.io/mermaid/#/" target="_blank" rel="noopener noreferrer">mermaid \u5B98\u65B9\u6587\u6863</a>\u3002</p><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><h3 id="\u6D41\u7A0B\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u56FE" aria-hidden="true">#</a> \u6D41\u7A0B\u56FE</h3>`,9),p=n(`<details class="custom-block details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">mermaid</span>
<span class="token code-block language-mermaid">flowchart TB
    c1--&gt;a2
    subgraph one
    a1--&gt;a2
    end
    subgraph two
    b1--&gt;b2
    end
    subgraph three
    c1--&gt;c2
    end
    one --&gt; two
    three --&gt; two
    two --&gt; c2</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details><h3 id="\u5FAA\u5E8F\u56FE" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u5E8F\u56FE" aria-hidden="true">#</a> \u5FAA\u5E8F\u56FE</h3>`,2),d=n(`<details class="custom-block details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">sequence</span>
<span class="token code-block language-sequence">Alice -&gt;&gt; Bob: Hello Bob, how are you?
Bob--&gt;&gt;John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long&lt;br/&gt;long time, so long&lt;br/&gt;that the text does&lt;br/&gt;not fit on a row.

Bob--&gt;Alice: Checking with John...
Alice-&gt;John: Yes... John, how are you?</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details><h3 id="\u7C7B\u56FE" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u56FE" aria-hidden="true">#</a> \u7C7B\u56FE</h3>`,2),b=n(`<details class="custom-block details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">class</span>
<span class="token code-block language-class">class Square~Shape~{
    int id
    List~int~ position
    setPoints(List~int~ points)
    getPoints() List~int~
}

Square : -List~string~ messages
Square : +setMessages(List~string~ messages)
Square : +getMessages() List~string~</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details><h3 id="\u72B6\u6001\u56FE" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u56FE" aria-hidden="true">#</a> \u72B6\u6001\u56FE</h3>`,2),u=n(`<details class="custom-block details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">state</span>
<span class="token code-block language-state">[*] --&gt; Active

state Active {
    [*] --&gt; NumLockOff
    NumLockOff --&gt; NumLockOn : EvNumLockPressed
    NumLockOn --&gt; NumLockOff : EvNumLockPressed
    --
    [*] --&gt; CapsLockOff
    CapsLockOff --&gt; CapsLockOn : EvCapsLockPressed
    CapsLockOn --&gt; CapsLockOff : EvCapsLockPressed
    --
    [*] --&gt; ScrollLockOff
    ScrollLockOff --&gt; ScrollLockOn : EvScrollLockPressed
    ScrollLockOn --&gt; ScrollLockOff : EvScrollLockPressed
}</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></details><h3 id="\u5173\u7CFB\u56FE" tabindex="-1"><a class="header-anchor" href="#\u5173\u7CFB\u56FE" aria-hidden="true">#</a> \u5173\u7CFB\u56FE</h3>`,2),m=n(`<details class="custom-block details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">er</span>
<span class="token code-block language-er">CAR ||--o{ NAMED-DRIVER : allows
CAR {
    string registrationNumber
    string make
    string model
}
PERSON ||--o{ NAMED-DRIVER : is
PERSON {
    string firstName
    string lastName
    int age
}</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details><h3 id="\u7528\u6237\u65E5\u8BB0\u56FE" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u65E5\u8BB0\u56FE" aria-hidden="true">#</a> \u7528\u6237\u65E5\u8BB0\u56FE</h3>`,2),g=n(`<details class="custom-block details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">journey</span>
<span class="token code-block language-journey">title My working day
section Go to work
  Make tea: 5: Me
  Go upstairs: 3: Me
  Do work: 1: Me, Cat
section Go home
  Go downstairs: 5: Me
  Sit down: 5: Me</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details><h3 id="\u7518\u7279\u56FE" tabindex="-1"><a class="header-anchor" href="#\u7518\u7279\u56FE" aria-hidden="true">#</a> \u7518\u7279\u56FE</h3>`,2),A=n(`<details class="custom-block details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">gantt</span>
<span class="token code-block language-gantt">dateFormat  YYYY-MM-DD
title       Adding GANTT diagram functionality to mermaid
excludes    weekends
%% (\`excludes\` accepts specific dates in YYYY-MM-DD format, days of the week (&quot;sunday&quot;) or &quot;weekends&quot;, but not the word &quot;weekdays&quot;.)

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2              :         des4, after des3, 5d

section Critical tasks
Completed task in the critical line :crit, done, 2014-01-06,24h
Implement parser and jison          :crit, done, after des1, 2d
Create tests for parser             :crit, active, 3d
Future task in critical line        :crit, 5d
Create tests for renderer           :2d
Add to mermaid                      :1d

section Documentation
Describe gantt syntax               :active, a1, after des1, 3d
Add gantt diagram to demo page      :after a1  , 20h
Add another diagram to demo page    :doc1, after a1  , 48h

section Last section
Describe gantt syntax               :after doc1, 3d
Add gantt diagram to demo page      :20h
Add another diagram to demo page    :48h</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></details><h3 id="\u997C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u997C\u56FE" aria-hidden="true">#</a> \u997C\u56FE</h3>`,2),h=n('<details class="custom-block details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">pie</span>\n<span class="token code-block language-pie">title What Voldemort doesn&#39;t have?\n  &quot;FRIENDS&quot; : 2\n  &quot;FAMILY&quot; : 3\n  &quot;NOSE&quot; : 45</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><h3 id="\u4E00\u4E2A\u590D\u6742\u7684\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u590D\u6742\u7684\u6848\u4F8B" aria-hidden="true">#</a> \u4E00\u4E2A\u590D\u6742\u7684\u6848\u4F8B</h3>',2),k=n(`<details class="custom-block details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">mermaid</span>
<span class="token code-block language-mermaid">graph TB
    sq[Square shape] --&gt; ci((Circle shape))

    subgraph A
        od&gt;Odd shape]-- Two line&lt;br/&gt;edge comment --&gt; ro
        di{Diamond with &lt;br/&gt; line break} -.-&gt; ro(Rounded&lt;br&gt;square&lt;br&gt;shape)
        di==&gt;ro2(Rounded square shape)
    end

    %% Notice that no text in shape are added here instead that is appended further down
    e --&gt; od3&gt;Really long text with linebreak&lt;br&gt;in an Odd shape]

    %% Comments after double percent signs
    e((Inner / circle&lt;br&gt;and some odd &lt;br&gt;special characters)) --&gt; f(,.?!+-*\u0632)

    cyr[Cyrillic]--&gt;cyr2((Circle shape \u041D\u0430\u0447\u0430\u043B\u043E));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></details>`,1);function f(C,v){const s=e("MermaidChart");return r(),t(l,null,[c,a(s,{id:"mermaid-382ee168","data-code":"flowchart%20TB%0A%20%20%20%20c1--%3Ea2%0A%20%20%20%20subgraph%20one%0A%20%20%20%20a1--%3Ea2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20two%0A%20%20%20%20b1--%3Eb2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20three%0A%20%20%20%20c1--%3Ec2%0A%20%20%20%20end%0A%20%20%20%20one%20--%3E%20two%0A%20%20%20%20three%20--%3E%20two%0A%20%20%20%20two%20--%3E%20c2%0A"}),p,a(s,{id:"mermaid-382ee184","data-code":"sequenceDiagram%0A%20%20%20%20Alice%20-%3E%3E%20Bob%3A%20Hello%20Bob%2C%20how%20are%20you%3F%0A%20%20%20%20Bob--%3E%3EJohn%3A%20How%20about%20you%20John%3F%0A%20%20%20%20Bob--x%20Alice%3A%20I%20am%20good%20thanks!%0A%20%20%20%20Bob-x%20John%3A%20I%20am%20good%20thanks!%0A%20%20%20%20Note%20right%20of%20John%3A%20Bob%20thinks%20a%20long%3Cbr%2F%3Elong%20time%2C%20so%20long%3Cbr%2F%3Ethat%20the%20text%20does%3Cbr%2F%3Enot%20fit%20on%20a%20row.%0A%0A%20%20%20%20Bob--%3EAlice%3A%20Checking%20with%20John...%0A%20%20%20%20Alice-%3EJohn%3A%20Yes...%20John%2C%20how%20are%20you%3F%0A"}),d,a(s,{id:"mermaid-382ee18b","data-code":"classDiagram%0A%20%20%20%20class%20Square~Shape~%7B%0A%20%20%20%20%20%20%20%20int%20id%0A%20%20%20%20%20%20%20%20List~int~%20position%0A%20%20%20%20%20%20%20%20setPoints(List~int~%20points)%0A%20%20%20%20%20%20%20%20getPoints()%20List~int~%0A%20%20%20%20%7D%0A%0A%20%20%20%20Square%20%3A%20-List~string~%20messages%0A%20%20%20%20Square%20%3A%20%2BsetMessages(List~string~%20messages)%0A%20%20%20%20Square%20%3A%20%2BgetMessages()%20List~string~%0A"}),b,a(s,{id:"mermaid-382ee1a7","data-code":"stateDiagram-v2%0A%20%20%20%20%5B*%5D%20--%3E%20Active%0A%0A%20%20%20%20state%20Active%20%7B%0A%20%20%20%20%20%20%20%20%5B*%5D%20--%3E%20NumLockOff%0A%20%20%20%20%20%20%20%20NumLockOff%20--%3E%20NumLockOn%20%3A%20EvNumLockPressed%0A%20%20%20%20%20%20%20%20NumLockOn%20--%3E%20NumLockOff%20%3A%20EvNumLockPressed%0A%20%20%20%20%20%20%20%20--%0A%20%20%20%20%20%20%20%20%5B*%5D%20--%3E%20CapsLockOff%0A%20%20%20%20%20%20%20%20CapsLockOff%20--%3E%20CapsLockOn%20%3A%20EvCapsLockPressed%0A%20%20%20%20%20%20%20%20CapsLockOn%20--%3E%20CapsLockOff%20%3A%20EvCapsLockPressed%0A%20%20%20%20%20%20%20%20--%0A%20%20%20%20%20%20%20%20%5B*%5D%20--%3E%20ScrollLockOff%0A%20%20%20%20%20%20%20%20ScrollLockOff%20--%3E%20ScrollLockOn%20%3A%20EvScrollLockPressed%0A%20%20%20%20%20%20%20%20ScrollLockOn%20--%3E%20ScrollLockOff%20%3A%20EvScrollLockPressed%0A%20%20%20%20%7D%0A"}),u,a(s,{id:"mermaid-382ee1c3","data-code":"erDiagram%0A%20%20%20%20CAR%20%7C%7C--o%7B%20NAMED-DRIVER%20%3A%20allows%0A%20%20%20%20CAR%20%7B%0A%20%20%20%20%20%20%20%20string%20registrationNumber%0A%20%20%20%20%20%20%20%20string%20make%0A%20%20%20%20%20%20%20%20string%20model%0A%20%20%20%20%7D%0A%20%20%20%20PERSON%20%7C%7C--o%7B%20NAMED-DRIVER%20%3A%20is%0A%20%20%20%20PERSON%20%7B%0A%20%20%20%20%20%20%20%20string%20firstName%0A%20%20%20%20%20%20%20%20string%20lastName%0A%20%20%20%20%20%20%20%20int%20age%0A%20%20%20%20%7D%0A"}),m,a(s,{id:"mermaid-382ee1ca","data-code":"journey%0A%20%20%20%20title%20My%20working%20day%0A%20%20%20%20section%20Go%20to%20work%0A%20%20%20%20%20%20Make%20tea%3A%205%3A%20Me%0A%20%20%20%20%20%20Go%20upstairs%3A%203%3A%20Me%0A%20%20%20%20%20%20Do%20work%3A%201%3A%20Me%2C%20Cat%0A%20%20%20%20section%20Go%20home%0A%20%20%20%20%20%20Go%20downstairs%3A%205%3A%20Me%0A%20%20%20%20%20%20Sit%20down%3A%205%3A%20Me%0A"}),g,a(s,{id:"mermaid-382ee1e6","data-code":"gantt%0A%20%20%20%20dateFormat%20%20YYYY-MM-DD%0A%20%20%20%20title%20%20%20%20%20%20%20Adding%20GANTT%20diagram%20functionality%20to%20mermaid%0A%20%20%20%20excludes%20%20%20%20weekends%0A%20%20%20%20%25%25%20(%60excludes%60%20accepts%20specific%20dates%20in%20YYYY-MM-DD%20format%2C%20days%20of%20the%20week%20(%22sunday%22)%20or%20%22weekends%22%2C%20but%20not%20the%20word%20%22weekdays%22.)%0A%0A%20%20%20%20section%20A%20section%0A%20%20%20%20Completed%20task%20%20%20%20%20%20%20%20%20%20%20%20%3Adone%2C%20%20%20%20des1%2C%202014-01-06%2C2014-01-08%0A%20%20%20%20Active%20task%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aactive%2C%20%20des2%2C%202014-01-09%2C%203d%0A%20%20%20%20Future%20task%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%20%20%20%20%20%20%20%20des3%2C%20after%20des2%2C%205d%0A%20%20%20%20Future%20task2%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%20%20%20%20%20%20%20%20des4%2C%20after%20des3%2C%205d%0A%0A%20%20%20%20section%20Critical%20tasks%0A%20%20%20%20Completed%20task%20in%20the%20critical%20line%20%3Acrit%2C%20done%2C%202014-01-06%2C24h%0A%20%20%20%20Implement%20parser%20and%20jison%20%20%20%20%20%20%20%20%20%20%3Acrit%2C%20done%2C%20after%20des1%2C%202d%0A%20%20%20%20Create%20tests%20for%20parser%20%20%20%20%20%20%20%20%20%20%20%20%20%3Acrit%2C%20active%2C%203d%0A%20%20%20%20Future%20task%20in%20critical%20line%20%20%20%20%20%20%20%20%3Acrit%2C%205d%0A%20%20%20%20Create%20tests%20for%20renderer%20%20%20%20%20%20%20%20%20%20%20%3A2d%0A%20%20%20%20Add%20to%20mermaid%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A1d%0A%0A%20%20%20%20section%20Documentation%0A%20%20%20%20Describe%20gantt%20syntax%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aactive%2C%20a1%2C%20after%20des1%2C%203d%0A%20%20%20%20Add%20gantt%20diagram%20to%20demo%20page%20%20%20%20%20%20%3Aafter%20a1%20%20%2C%2020h%0A%20%20%20%20Add%20another%20diagram%20to%20demo%20page%20%20%20%20%3Adoc1%2C%20after%20a1%20%20%2C%2048h%0A%0A%20%20%20%20section%20Last%20section%0A%20%20%20%20Describe%20gantt%20syntax%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aafter%20doc1%2C%203d%0A%20%20%20%20Add%20gantt%20diagram%20to%20demo%20page%20%20%20%20%20%20%3A20h%0A%20%20%20%20Add%20another%20diagram%20to%20demo%20page%20%20%20%20%3A48h%0A"}),A,a(s,{id:"mermaid-382ee202","data-code":"pie%0A%20%20%20%20title%20What%20Voldemort%20doesn't%20have%3F%0A%20%20%20%20%20%20%22FRIENDS%22%20%3A%202%0A%20%20%20%20%20%20%22FAMILY%22%20%3A%203%0A%20%20%20%20%20%20%22NOSE%22%20%3A%2045%0A"}),h,a(s,{id:"mermaid-382ee21e","data-code":"graph%20TB%0A%20%20%20%20sq%5BSquare%20shape%5D%20--%3E%20ci((Circle%20shape))%0A%0A%20%20%20%20subgraph%20A%0A%20%20%20%20%20%20%20%20od%3EOdd%20shape%5D--%20Two%20line%3Cbr%2F%3Eedge%20comment%20--%3E%20ro%0A%20%20%20%20%20%20%20%20di%7BDiamond%20with%20%3Cbr%2F%3E%20line%20break%7D%20-.-%3E%20ro(Rounded%3Cbr%3Esquare%3Cbr%3Eshape)%0A%20%20%20%20%20%20%20%20di%3D%3D%3Ero2(Rounded%20square%20shape)%0A%20%20%20%20end%0A%0A%20%20%20%20%25%25%20Notice%20that%20no%20text%20in%20shape%20are%20added%20here%20instead%20that%20is%20appended%20further%20down%0A%20%20%20%20e%20--%3E%20od3%3EReally%20long%20text%20with%20linebreak%3Cbr%3Ein%20an%20Odd%20shape%5D%0A%0A%20%20%20%20%25%25%20Comments%20after%20double%20percent%20signs%0A%20%20%20%20e((Inner%20%2F%20circle%3Cbr%3Eand%20some%20odd%20%3Cbr%3Especial%20characters))%20--%3E%20f(%2C.%3F!%2B-*%D8%B2)%0A%0A%20%20%20%20cyr%5BCyrillic%5D--%3Ecyr2((Circle%20shape%20%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE))%3B%0A%0A%20%20%20%20%20classDef%20green%20fill%3A%239f6%2Cstroke%3A%23333%2Cstroke-width%3A2px%3B%0A%20%20%20%20%20classDef%20orange%20fill%3A%23f96%2Cstroke%3A%23333%2Cstroke-width%3A4px%3B%0A%20%20%20%20%20class%20sq%2Ce%20green%0A%20%20%20%20%20class%20di%20orange%0A"}),k],64)}var D=o(i,[["render",f]]);export{D as default};
