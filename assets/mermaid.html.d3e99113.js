import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as v,c as b,b as e,a as n,w as o,f as i,g as a}from"./app.625f2658.js";const A={},h=i("Let the Markdown file support "),g={href:"https://mermaid-js.github.io/mermaid/#/",target:"_blank",rel:"noopener noreferrer"},p=i("mermaid"),k=i(" in your VuePress site."),C=e("h2",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),i(" Config")],-1),f=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        mermaid: true,
      },
    },
  }),
});
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        mermaid: true,
      },
    },
  }),
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),S=a('<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">mermaid</span>\n<span class="token code-block language-mermaid">\n&lt;!-- Your mermaid code here. --&gt;\n</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>',3),B=i("Please see "),E={href:"https://mermaid-js.github.io/mermaid/#/",target:"_blank",rel:"noopener noreferrer"},w=i("mermaid"),q=i("."),x=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),i(" Demo")],-1),_=e("h3",{id:"flowchart",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flowchart","aria-hidden":"true"},"#"),i(" Flowchart")],-1),D=a(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">mermaid</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="sequence-diagram" tabindex="-1"><a class="header-anchor" href="#sequence-diagram" aria-hidden="true">#</a> Sequence Diagram</h3>`,2),L=a(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">sequence</span>
<span class="token code-block language-sequence">Alice -&gt;&gt; Bob: Hello Bob, how are you?
Bob--&gt;&gt;John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long&lt;br/&gt;long time, so long&lt;br/&gt;that the text does&lt;br/&gt;not fit on a row.

Bob--&gt;Alice: Checking with John...
Alice-&gt;John: Yes... John, how are you?</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3>`,2),N=a(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">class</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="state-diagram" tabindex="-1"><a class="header-anchor" href="#state-diagram" aria-hidden="true">#</a> State Diagram</h3>`,2),M=a(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">state</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="entity-relationship-diagrams" tabindex="-1"><a class="header-anchor" href="#entity-relationship-diagrams" aria-hidden="true">#</a> Entity Relationship Diagrams</h3>`,2),O=a(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">er</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="user-journey-diagram" tabindex="-1"><a class="header-anchor" href="#user-journey-diagram" aria-hidden="true">#</a> User Journey Diagram</h3>`,2),R=a(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">journey</span>
<span class="token code-block language-journey">title My working day
section Go to work
  Make tea: 5: Me
  Go upstairs: 3: Me
  Do work: 1: Me, Cat
section Go home
  Go downstairs: 5: Me
  Sit down: 5: Me</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="gantt-diagrams" tabindex="-1"><a class="header-anchor" href="#gantt-diagrams" aria-hidden="true">#</a> Gantt diagrams</h3>`,2),P=a(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">gantt</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="pie-chart-diagrams" tabindex="-1"><a class="header-anchor" href="#pie-chart-diagrams" aria-hidden="true">#</a> Pie Chart Diagrams</h3>`,2),F=a('<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">pie</span>\n<span class="token code-block language-pie">title What Voldemort doesn\u2019t have?\n  &quot;FRIENDS&quot; : 2\n  &quot;FAMILY&quot; : 3\n  &quot;NOSE&quot; : 45</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="gitgraph-diagrams" tabindex="-1"><a class="header-anchor" href="#gitgraph-diagrams" aria-hidden="true">#</a> Gitgraph Diagrams</h3>',2),I={class:"custom-container details"},T=e("summary",null,"Code",-1),G=e("h3",{id:"c4c-diagrams",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#c4c-diagrams","aria-hidden":"true"},"#"),i(" C4C Diagrams")],-1),Y=a(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">c4c</span>
<span class="token code-block language-c4c">title System Context diagram for Internet Banking System

Person(customerA, &quot;Banking Customer A&quot;, &quot;A customer of the bank, with personal bank accounts.&quot;)
Person(customerB, &quot;Banking Customer B&quot;)
Person_Ext(customerC, &quot;Banking Customer C&quot;)
System(SystemAA, &quot;Internet Banking System&quot;, &quot;Allows customers to view information about their bank accounts, and make payments.&quot;)

Person(customerD, &quot;Banking Customer D&quot;, &quot;A customer of the bank, &lt;br/&gt; with personal bank accounts.&quot;)

Enterprise_Boundary(b1, &quot;BankBoundary&quot;) {

  SystemDb_Ext(SystemE, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)

  System_Boundary(b2, &quot;BankBoundary2&quot;) {
    System(SystemA, &quot;Banking System A&quot;)
    System(SystemB, &quot;Banking System B&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)
  }

  System_Ext(SystemC, &quot;E-mail system&quot;, &quot;The internal Microsoft Exchange e-mail system.&quot;)
  SystemDb(SystemD, &quot;Banking System D Database&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)

  Boundary(b3, &quot;BankBoundary3&quot;, &quot;boundary&quot;) {
    SystemQueue(SystemF, &quot;Banking System F Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)
    SystemQueue_Ext(SystemG, &quot;Banking System G Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)
  }
}

BiRel(customerA, SystemAA, &quot;Uses&quot;)
BiRel(SystemAA, SystemE, &quot;Uses&quot;)
Rel(SystemAA, SystemC, &quot;Sends e-mails&quot;, &quot;SMTP&quot;)
Rel(SystemC, customerA, &quot;Sends e-mails to&quot;)</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="a-complex-example" tabindex="-1"><a class="header-anchor" href="#a-complex-example" aria-hidden="true">#</a> A Complex Example</h3>`,2),J=a(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">mermaid</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function V(j,H){const d=t("ExternalLinkIcon"),r=t("CodeTabs"),s=t("Mermaid");return v(),b("div",null,[e("p",null,[h,e("a",g,[p,n(d)]),k]),C,n(r,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:o(({title:l,value:c,isActive:m})=>[f]),tab1:o(({title:l,value:c,isActive:m})=>[y]),_:1}),S,e("p",null,[B,e("a",E,[w,n(d)]),q]),x,_,n(s,{id:"mermaid-382ee184",code:"flowchart%20TB%0A%20%20%20%20c1--%3Ea2%0A%20%20%20%20subgraph%20one%0A%20%20%20%20a1--%3Ea2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20two%0A%20%20%20%20b1--%3Eb2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20three%0A%20%20%20%20c1--%3Ec2%0A%20%20%20%20end%0A%20%20%20%20one%20--%3E%20two%0A%20%20%20%20three%20--%3E%20two%0A%20%20%20%20two%20--%3E%20c2%0A"}),D,n(s,{id:"mermaid-382ee18b",code:"sequenceDiagram%0A%20%20Alice%20-%3E%3E%20Bob%3A%20Hello%20Bob%2C%20how%20are%20you%3F%0A%20%20Bob--%3E%3EJohn%3A%20How%20about%20you%20John%3F%0A%20%20Bob--x%20Alice%3A%20I%20am%20good%20thanks!%0A%20%20Bob-x%20John%3A%20I%20am%20good%20thanks!%0A%20%20Note%20right%20of%20John%3A%20Bob%20thinks%20a%20long%3Cbr%2F%3Elong%20time%2C%20so%20long%3Cbr%2F%3Ethat%20the%20text%20does%3Cbr%2F%3Enot%20fit%20on%20a%20row.%0A%0A%20%20Bob--%3EAlice%3A%20Checking%20with%20John...%0A%20%20Alice-%3EJohn%3A%20Yes...%20John%2C%20how%20are%20you%3F%0A"}),L,n(s,{id:"mermaid-382ee1a7",code:"classDiagram%0A%20%20class%20Square~Shape~%7B%0A%20%20%20%20%20%20int%20id%0A%20%20%20%20%20%20List~int~%20position%0A%20%20%20%20%20%20setPoints(List~int~%20points)%0A%20%20%20%20%20%20getPoints()%20List~int~%0A%20%20%7D%0A%0A%20%20Square%20%3A%20-List~string~%20messages%0A%20%20Square%20%3A%20%2BsetMessages(List~string~%20messages)%0A%20%20Square%20%3A%20%2BgetMessages()%20List~string~%0A"}),N,n(s,{id:"mermaid-382ee1c3",code:"stateDiagram-v2%0A%20%20%5B*%5D%20--%3E%20Active%0A%0A%20%20state%20Active%20%7B%0A%20%20%20%20%20%20%5B*%5D%20--%3E%20NumLockOff%0A%20%20%20%20%20%20NumLockOff%20--%3E%20NumLockOn%20%3A%20EvNumLockPressed%0A%20%20%20%20%20%20NumLockOn%20--%3E%20NumLockOff%20%3A%20EvNumLockPressed%0A%20%20%20%20%20%20--%0A%20%20%20%20%20%20%5B*%5D%20--%3E%20CapsLockOff%0A%20%20%20%20%20%20CapsLockOff%20--%3E%20CapsLockOn%20%3A%20EvCapsLockPressed%0A%20%20%20%20%20%20CapsLockOn%20--%3E%20CapsLockOff%20%3A%20EvCapsLockPressed%0A%20%20%20%20%20%20--%0A%20%20%20%20%20%20%5B*%5D%20--%3E%20ScrollLockOff%0A%20%20%20%20%20%20ScrollLockOff%20--%3E%20ScrollLockOn%20%3A%20EvScrollLockPressed%0A%20%20%20%20%20%20ScrollLockOn%20--%3E%20ScrollLockOff%20%3A%20EvScrollLockPressed%0A%20%20%7D%0A"}),M,n(s,{id:"mermaid-382ee1ca",code:"erDiagram%0A%20%20CAR%20%7C%7C--o%7B%20NAMED-DRIVER%20%3A%20allows%0A%20%20CAR%20%7B%0A%20%20%20%20%20%20string%20registrationNumber%0A%20%20%20%20%20%20string%20make%0A%20%20%20%20%20%20string%20model%0A%20%20%7D%0A%20%20PERSON%20%7C%7C--o%7B%20NAMED-DRIVER%20%3A%20is%0A%20%20PERSON%20%7B%0A%20%20%20%20%20%20string%20firstName%0A%20%20%20%20%20%20string%20lastName%0A%20%20%20%20%20%20int%20age%0A%20%20%7D%0A"}),O,n(s,{id:"mermaid-382ee1e6",code:"journey%0A%20%20title%20My%20working%20day%0A%20%20section%20Go%20to%20work%0A%20%20%20%20Make%20tea%3A%205%3A%20Me%0A%20%20%20%20Go%20upstairs%3A%203%3A%20Me%0A%20%20%20%20Do%20work%3A%201%3A%20Me%2C%20Cat%0A%20%20section%20Go%20home%0A%20%20%20%20Go%20downstairs%3A%205%3A%20Me%0A%20%20%20%20Sit%20down%3A%205%3A%20Me%0A"}),R,n(s,{id:"mermaid-382ee202",code:"gantt%0A%20%20dateFormat%20%20YYYY-MM-DD%0A%20%20title%20%20%20%20%20%20%20Adding%20GANTT%20diagram%20functionality%20to%20mermaid%0A%20%20excludes%20%20%20%20weekends%0A%20%20%25%25%20(%60excludes%60%20accepts%20specific%20dates%20in%20YYYY-MM-DD%20format%2C%20days%20of%20the%20week%20(%22sunday%22)%20or%20%22weekends%22%2C%20but%20not%20the%20word%20%22weekdays%22.)%0A%0A%20%20section%20A%20section%0A%20%20Completed%20task%20%20%20%20%20%20%20%20%20%20%20%20%3Adone%2C%20%20%20%20des1%2C%202014-01-06%2C2014-01-08%0A%20%20Active%20task%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aactive%2C%20%20des2%2C%202014-01-09%2C%203d%0A%20%20Future%20task%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%20%20%20%20%20%20%20%20des3%2C%20after%20des2%2C%205d%0A%20%20Future%20task2%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%20%20%20%20%20%20%20%20des4%2C%20after%20des3%2C%205d%0A%0A%20%20section%20Critical%20tasks%0A%20%20Completed%20task%20in%20the%20critical%20line%20%3Acrit%2C%20done%2C%202014-01-06%2C24h%0A%20%20Implement%20parser%20and%20jison%20%20%20%20%20%20%20%20%20%20%3Acrit%2C%20done%2C%20after%20des1%2C%202d%0A%20%20Create%20tests%20for%20parser%20%20%20%20%20%20%20%20%20%20%20%20%20%3Acrit%2C%20active%2C%203d%0A%20%20Future%20task%20in%20critical%20line%20%20%20%20%20%20%20%20%3Acrit%2C%205d%0A%20%20Create%20tests%20for%20renderer%20%20%20%20%20%20%20%20%20%20%20%3A2d%0A%20%20Add%20to%20mermaid%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A1d%0A%0A%20%20section%20Documentation%0A%20%20Describe%20gantt%20syntax%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aactive%2C%20a1%2C%20after%20des1%2C%203d%0A%20%20Add%20gantt%20diagram%20to%20demo%20page%20%20%20%20%20%20%3Aafter%20a1%20%20%2C%2020h%0A%20%20Add%20another%20diagram%20to%20demo%20page%20%20%20%20%3Adoc1%2C%20after%20a1%20%20%2C%2048h%0A%0A%20%20section%20Last%20section%0A%20%20Describe%20gantt%20syntax%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aafter%20doc1%2C%203d%0A%20%20Add%20gantt%20diagram%20to%20demo%20page%20%20%20%20%20%20%3A20h%0A%20%20Add%20another%20diagram%20to%20demo%20page%20%20%20%20%3A48h%0A"}),P,n(s,{id:"mermaid-382ee21e",code:"pie%0A%20%20title%20What%20Voldemort%20doesn%E2%80%99t%20have%3F%0A%20%20%20%20%22FRIENDS%22%20%3A%202%0A%20%20%20%20%22FAMILY%22%20%3A%203%0A%20%20%20%20%22NOSE%22%20%3A%2045%0A"}),F,n(s,{id:"mermaid-382ee225",code:"gitGraph%0A%20%20commit%0A%20%20branch%20hotfix%0A%20%20checkout%20hotfix%0A%20%20commit%0A%20%20branch%20develop%0A%20%20checkout%20develop%0A%20%20commit%20id%3A%22ash%22%20tag%3A%22abc%22%0A%20%20branch%20featureB%0A%20%20checkout%20featureB%0A%20%20commit%20type%3AHIGHLIGHT%0A%20%20checkout%20main%0A%20%20checkout%20hotfix%0A%20%20commit%20type%3ANORMAL%0A%20%20checkout%20develop%0A%20%20commit%20type%3AREVERSE%0A%20%20checkout%20featureB%0A%20%20commit%0A%20%20checkout%20main%0A%20%20merge%20hotfix%0A%20%20checkout%20featureB%0A%20%20commit%0A%20%20checkout%20develop%0A%20%20branch%20featureA%0A%20%20commit%0A%20%20checkout%20develop%0A%20%20merge%20hotfix%0A%20%20checkout%20featureA%0A%20%20commit%0A%20%20checkout%20featureB%0A%20%20commit%0A%20%20checkout%20develop%0A%20%20merge%20featureA%0A%20%20branch%20release%0A%20%20checkout%20release%0A%20%20commit%0A%20%20checkout%20main%0A%20%20commit%0A%20%20checkout%20release%0A%20%20merge%20main%0A%20%20checkout%20develop%0A%20%20merge%20release%0A"}),e("details",I,[T,n(s,{id:"mermaid-382ee227",code:"gitGraph%0A%20%20commit%0A%20%20branch%20hotfix%0A%20%20checkout%20hotfix%0A%20%20commit%0A%20%20branch%20develop%0A%20%20checkout%20develop%0A%20%20commit%20id%3A%22ash%22%20tag%3A%22abc%22%0A%20%20branch%20featureB%0A%20%20checkout%20featureB%0A%20%20commit%20type%3AHIGHLIGHT%0A%20%20checkout%20main%0A%20%20checkout%20hotfix%0A%20%20commit%20type%3ANORMAL%0A%20%20checkout%20develop%0A%20%20commit%20type%3AREVERSE%0A%20%20checkout%20featureB%0A%20%20commit%0A%20%20checkout%20main%0A%20%20merge%20hotfix%0A%20%20checkout%20featureB%0A%20%20commit%0A%20%20checkout%20develop%0A%20%20branch%20featureA%0A%20%20commit%0A%20%20checkout%20develop%0A%20%20merge%20hotfix%0A%20%20checkout%20featureA%0A%20%20commit%0A%20%20checkout%20featureB%0A%20%20commit%0A%20%20checkout%20develop%0A%20%20merge%20featureA%0A%20%20branch%20release%0A%20%20checkout%20release%0A%20%20commit%0A%20%20checkout%20main%0A%20%20commit%0A%20%20checkout%20release%0A%20%20merge%20main%0A%20%20checkout%20develop%0A%20%20merge%20release%0A"})]),G,n(s,{id:"mermaid-382ee241",code:"C4Context%0A%20%20title%20System%20Context%20diagram%20for%20Internet%20Banking%20System%0A%0A%20%20Person(customerA%2C%20%22Banking%20Customer%20A%22%2C%20%22A%20customer%20of%20the%20bank%2C%20with%20personal%20bank%20accounts.%22)%0A%20%20Person(customerB%2C%20%22Banking%20Customer%20B%22)%0A%20%20Person_Ext(customerC%2C%20%22Banking%20Customer%20C%22)%0A%20%20System(SystemAA%2C%20%22Internet%20Banking%20System%22%2C%20%22Allows%20customers%20to%20view%20information%20about%20their%20bank%20accounts%2C%20and%20make%20payments.%22)%0A%0A%20%20Person(customerD%2C%20%22Banking%20Customer%20D%22%2C%20%22A%20customer%20of%20the%20bank%2C%20%3Cbr%2F%3E%20with%20personal%20bank%20accounts.%22)%0A%0A%20%20Enterprise_Boundary(b1%2C%20%22BankBoundary%22)%20%7B%0A%0A%20%20%20%20SystemDb_Ext(SystemE%2C%20%22Mainframe%20Banking%20System%22%2C%20%22Stores%20all%20of%20the%20core%20banking%20information%20about%20customers%2C%20accounts%2C%20transactions%2C%20etc.%22)%0A%0A%20%20%20%20System_Boundary(b2%2C%20%22BankBoundary2%22)%20%7B%0A%20%20%20%20%20%20System(SystemA%2C%20%22Banking%20System%20A%22)%0A%20%20%20%20%20%20System(SystemB%2C%20%22Banking%20System%20B%22%2C%20%22A%20system%20of%20the%20bank%2C%20with%20personal%20bank%20accounts.%22)%0A%20%20%20%20%7D%0A%0A%20%20%20%20System_Ext(SystemC%2C%20%22E-mail%20system%22%2C%20%22The%20internal%20Microsoft%20Exchange%20e-mail%20system.%22)%0A%20%20%20%20SystemDb(SystemD%2C%20%22Banking%20System%20D%20Database%22%2C%20%22A%20system%20of%20the%20bank%2C%20with%20personal%20bank%20accounts.%22)%0A%0A%20%20%20%20Boundary(b3%2C%20%22BankBoundary3%22%2C%20%22boundary%22)%20%7B%0A%20%20%20%20%20%20SystemQueue(SystemF%2C%20%22Banking%20System%20F%20Queue%22%2C%20%22A%20system%20of%20the%20bank%2C%20with%20personal%20bank%20accounts.%22)%0A%20%20%20%20%20%20SystemQueue_Ext(SystemG%2C%20%22Banking%20System%20G%20Queue%22%2C%20%22A%20system%20of%20the%20bank%2C%20with%20personal%20bank%20accounts.%22)%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20BiRel(customerA%2C%20SystemAA%2C%20%22Uses%22)%0A%20%20BiRel(SystemAA%2C%20SystemE%2C%20%22Uses%22)%0A%20%20Rel(SystemAA%2C%20SystemC%2C%20%22Sends%20e-mails%22%2C%20%22SMTP%22)%0A%20%20Rel(SystemC%2C%20customerA%2C%20%22Sends%20e-mails%20to%22)%0A"}),Y,n(s,{id:"mermaid-64a570e8",code:"graph%20TB%0A%20%20%20%20sq%5BSquare%20shape%5D%20--%3E%20ci((Circle%20shape))%0A%0A%20%20%20%20subgraph%20A%0A%20%20%20%20%20%20%20%20od%3EOdd%20shape%5D--%20Two%20line%3Cbr%2F%3Eedge%20comment%20--%3E%20ro%0A%20%20%20%20%20%20%20%20di%7BDiamond%20with%20%3Cbr%2F%3E%20line%20break%7D%20-.-%3E%20ro(Rounded%3Cbr%3Esquare%3Cbr%3Eshape)%0A%20%20%20%20%20%20%20%20di%3D%3D%3Ero2(Rounded%20square%20shape)%0A%20%20%20%20end%0A%0A%20%20%20%20%25%25%20Notice%20that%20no%20text%20in%20shape%20are%20added%20here%20instead%20that%20is%20appended%20further%20down%0A%20%20%20%20e%20--%3E%20od3%3EReally%20long%20text%20with%20linebreak%3Cbr%3Ein%20an%20Odd%20shape%5D%0A%0A%20%20%20%20%25%25%20Comments%20after%20double%20percent%20signs%0A%20%20%20%20e((Inner%20%2F%20circle%3Cbr%3Eand%20some%20odd%20%3Cbr%3Especial%20characters))%20--%3E%20f(%2C.%3F!%2B-*%D8%B2)%0A%0A%20%20%20%20cyr%5BCyrillic%5D--%3Ecyr2((Circle%20shape%20%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE))%3B%0A%0A%20%20%20%20%20classDef%20green%20fill%3A%239f6%2Cstroke%3A%23333%2Cstroke-width%3A2px%3B%0A%20%20%20%20%20classDef%20orange%20fill%3A%23f96%2Cstroke%3A%23333%2Cstroke-width%3A4px%3B%0A%20%20%20%20%20class%20sq%2Ce%20green%0A%20%20%20%20%20class%20di%20orange%0A"}),J])}var W=u(A,[["render",V],["__file","mermaid.html.vue"]]);export{W as default};
