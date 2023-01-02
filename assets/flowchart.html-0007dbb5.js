import{a3 as r,Z as u,_ as g,a4 as h,$ as e,a0 as o,a1 as a,a2 as n,a5 as t,q as c}from"./framework-f408d5b9.js";const k={},m=a("p",null,"Пусть файл Markdown поддерживает блок-схему на вашем сайте VuePress.",-1),b=a("h2",{id:"конфиг",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#конфиг","aria-hidden":"true"},"#"),n(" Конфиг")],-1),v=a("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[a("pre",{class:"language-typescript"},[a("code",null,[a("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" defineUserConfig "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"vuepress"'),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" hopeTheme "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"vuepress-theme-hope"'),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token function"},"defineUserConfig"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  theme`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token function"},"hopeTheme"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
    plugins`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"{"),n(`
      mdEnhance`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"{"),n(`
        flowchart`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("br"),a("br"),a("br")]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),w=a("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[a("pre",{class:"language-javascript"},[a("code",null,[a("span",{class:"token comment"},"// .vuepress/config.js"),n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" hopeTheme "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"vuepress-theme-hope"'),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token literal-property property"},"theme"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token function"},"hopeTheme"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
    `),a("span",{class:"token literal-property property"},"plugins"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"{"),n(`
      `),a("span",{class:"token literal-property property"},"mdEnhance"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"{"),n(`
        `),a("span",{class:"token literal-property property"},"flowchart"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("br"),a("br"),a("br")]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),f=t(`<h2 id="синтаксис" tabindex="-1"><a class="header-anchor" href="#синтаксис" aria-hidden="true">#</a> Синтаксис</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- ↓ :preset is optional --&gt;</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow:preset</span>
<span class="token code-block language-flow">
&lt;!-- Your flowchart code here. --&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div><p>Доступные пресеты на данный момент:</p><ul><li><code>vue</code> (по умолчанию)</li><li><code>ant</code></li><li><code>pie</code></li></ul><h2 id="демо" tabindex="-1"><a class="header-anchor" href="#демо" aria-hidden="true">#</a> Демо</h2>`,5),x=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="введение-в-блок-схему" tabindex="-1"><a class="header-anchor" href="#введение-в-блок-схему" aria-hidden="true">#</a> Введение в блок-схему</h2><h3 id="типы-узлов" tabindex="-1"><a class="header-anchor" href="#типы-узлов" aria-hidden="true">#</a> Типы узлов</h3><p>Определяет форму, которую примет узел.</p><h3 id="начало-и-конец" tabindex="-1"><a class="header-anchor" href="#начало-и-конец" aria-hidden="true">#</a> Начало и Конец</h3><p>Используется как первый узел, с которого начинаются потоки. Текст по умолчанию <code>Start</code>.</p><ul><li><code>[Variable]-&gt;start: [Text]</code></li></ul><p>Используется как последний узел, где заканчивается поток. Текст по умолчанию <code>End</code>.</p><ul><li><code>[Variable]-&gt;end: [Text]</code></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow</span>
<span class="token code-block language-flow">st=&gt;start: Start
e=&gt;end: End

st-&gt;e</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div>`,10),q=t('<h3 id="операция" tabindex="-1"><a class="header-anchor" href="#операция" aria-hidden="true">#</a> Операция</h3><p>Указывает, что в потоке должна быть выполнена операция.</p><ul><li><code>[Variable]-&gt;operation: [Text]</code></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">flow</span>\n<span class="token code-block language-flow">process=&gt;operation: Operation\ne=&gt;end: End\n\nprocess-&gt;e</span>\n<span class="token punctuation">```</span></span>\n</code></pre></div>',4),V=t('<h3 id="ввод-вывод" tabindex="-1"><a class="header-anchor" href="#ввод-вывод" aria-hidden="true">#</a> Ввод / Вывод</h3><p>Указывает, что ввод-вывод происходит в потоке.</p><ul><li><code>[Variable]-&gt;inputoutput: [Text]</code></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">flow</span>\n<span class="token code-block language-flow">process=&gt;inputoutput: Inputoutput\ne=&gt;end: End\n\nprocess-&gt;e</span>\n<span class="token punctuation">```</span></span>\n</code></pre></div>',4),y=t('<h3 id="подпрограмма" tabindex="-1"><a class="header-anchor" href="#подпрограмма" aria-hidden="true">#</a> Подпрограмма</h3><p>Указывает, что в потоке происходит подпрограмма и что должна быть другая блок-схема, документирующая эту подпрограмму.</p><ul><li><code>[Variable]-&gt;subroutine: [Text]</code></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">flow</span>\n<span class="token code-block language-flow">process=&gt;subroutine: Subroutine\ne=&gt;end: End\n\nprocess-&gt;e</span>\n<span class="token punctuation">```</span></span>\n</code></pre></div>',4),C=t(`<h3 id="условие" tabindex="-1"><a class="header-anchor" href="#условие" aria-hidden="true">#</a> Условие</h3><p>Позволяет условному или логическому оператору направить поток по одному из двух или более путей.</p><ul><li><p><code>[Variable]-&gt;condition: [Text]</code></p></li><li><p><code>[Variable]([yesText])-&gt;[Position]</code></p></li><li><p><code>[Variable]([noText])-&gt;[Position]</code></p></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow</span>
<span class="token code-block language-flow">cond=&gt;condition: Process?
process=&gt;operation: Process
e=&gt;end: End

cond(yes)-&gt;process-&gt;e
cond(no)-&gt;e</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div>`,4),E=t(`<h3 id="параллельно" tabindex="-1"><a class="header-anchor" href="#параллельно" aria-hidden="true">#</a> Параллельно</h3><p>Позволяет одновременно выполнять несколько потоков.</p><ul><li><code>[Variable]-&gt;parallel: [Text]</code></li><li><code>[Variable](path1, direction)-&gt;[Position]</code></li><li><code>[Variable](path1, direction)-&gt;[Position]</code></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow</span>
<span class="token code-block language-flow">para=&gt;parallel: parallel tasks
process=&gt;operation: Process
e=&gt;end: End

para(path1, bottom)-&gt;process-&gt;e
para(path2)-&gt;e</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div>`,4),J=t(`<h2 id="соединения" tabindex="-1"><a class="header-anchor" href="#соединения" aria-hidden="true">#</a> Соединения</h2><p>Соединения определяются в отдельном разделе под определениями узлов.</p><p>Оператор <code>-&gt;</code> указывает соединение от одного узла к другому, например <code>nodeVar1-&gt;nodeVar2-&gt;nodeVar3</code>.</p><p>Не все узлы должны быть указаны в одной строке и могут быть разделены таким образом</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>nodeVar1-&gt;nodeVar2
nodeVar2-&gt;nodeVar3
</code></pre></div><p>Синтаксис подключения следующий:</p><p><code>&lt;node variable name&gt;[(&lt;specification1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;[[(&lt;specification1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;]</code></p><p>Элементы в <code>[]</code> являются необязательными.</p><h3 id="направления" tabindex="-1"><a class="header-anchor" href="#направления" aria-hidden="true">#</a> Направления</h3><p>Доступны следующие направления, которые определяют направление, из которого соединение выйдет из узла. Если имеется более одного спецификатора, он всегда будет последним. Все узлы имеют направление по умолчанию, поэтому это необязательная спецификация. Будет использоваться. <code>&lt;direction&gt;</code>, и вместо него следует использовать один из приведенных ниже списков.</p><ul><li><code>left</code></li><li><code>right</code></li><li><code>top</code></li><li><code>bottom</code></li></ul><h3 id="специфичные-для-узла-спецификаторы-по-типу" tabindex="-1"><a class="header-anchor" href="#специфичные-для-узла-спецификаторы-по-типу" aria-hidden="true">#</a> Специфичные для узла спецификаторы по типу</h3><p>Каждая переменная узла имеет необязательные спецификаторы, такие как направление, а некоторые имеют специальные спецификаторы в зависимости от типа узла, которые определены ниже. Спецификаторы добавляются после имени переменной в <code>()</code> и разделяются символом <code>,</code>, например, <code>nodeVar(spec1, spec2)</code>.</p><ul><li><p><strong>start</strong><strong>operation</strong><strong>inputoutput</strong><strong>subroutine</strong></p><p>Дополнительное направление</p><p><code>startVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>operationVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>inputoutputVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>subroutineVar(&lt;direction&gt;)-&gt;nextNode</code></p></li><li><p><strong>condition</strong></p><p>Требуемая логическая спецификация <code>yes</code> или <code>no</code></p><p>Дополнительное направление</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>conditionalVar(yes, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode1
conditionalVar(no, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode2
</code></pre></div></li><li><p><strong>parallel</strong></p><p>Требуемая спецификация пути <code>path1</code>, <code>path2</code>, или <code>path3</code></p><p>Дополнительное направление</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>parallelVar(path1, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode1
parallelVar(path2, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode2
parallelVar(path3, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode3
</code></pre></div></li></ul><h3 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки" aria-hidden="true">#</a> Ссылки</h3><p>Внешняя ссылка может быть добавлена к узлу с помощью оператора <code>:&gt;</code>.</p><p>Узел <code>st</code> связан с <code>http://www.google.com</code> и откроет новую вкладку, потому что <code>[blank]</code> находится в конце URL-адреса.</p><p>Узел <code>e</code> связан с <code>http://www.yahoo.com</code> и заставит страницу перейти на эту страницу вместо открытия новой вкладки.</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>st=&gt;start: Start:&gt;http://www.google.com[blank]
e=&gt;end: End:&gt;http://www.yahoo.com
</code></pre></div><h2 id="совет" tabindex="-1"><a class="header-anchor" href="#совет" aria-hidden="true">#</a> Совет</h2><p>Символы, которые, возможно, не следует использовать в тексте: <code>=&gt;</code> и <code>-&gt;</code> и <code>:&gt;</code> и <code>|</code> и <code>@&gt;</code> и <code>:$</code></p><p>Чтобы выделить конкретный путь в блок-схеме, вы можете определить его следующим образом:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>st@&gt;op1({&quot;stroke&quot;:&quot;Red&quot;})@&gt;cond({&quot;stroke&quot;:&quot;Red&quot;,&quot;stroke-width&quot;:6,&quot;arrow-end&quot;:&quot;classic-wide-long&quot;})@&gt;c2({&quot;stroke&quot;:&quot;Red&quot;})@&gt;op2({&quot;stroke&quot;:&quot;Red&quot;})@&gt;e({&quot;stroke&quot;:&quot;Red&quot;})
</code></pre></div>`,23);function S(R,_){const l=c("CodeTabs"),s=c("FlowChart");return u(),g("div",null,[m,h(" more "),b,e(l,{id:"7",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:o(({title:d,value:i,isActive:p})=>[v]),tab1:o(({title:d,value:i,isActive:p})=>[w]),_:1}),f,e(s,{id:"flowchart-42",code:"eJx1ULFOwzAQ3f0VHotEUrWjpZgJMQFDJoQYXPuSGFKfZZ8bVfLHY6dQwdDlrHd+7927i9TJSCqQ4H19sleRhJyIvNhul2VpR8Rxhlbj8f0wK/f1waCT4Izgj87kIVEKcEPA0O86iR6CIotO8Oczf/1F66TC2P9j9JSGIesUAjhiMR2KQakBE1kHq0N/hdm6k5qtYRqd6WSt9mLzBpFh4C/4kJX3AU9gbmXUJcAf5ROi4daAygE+QRMYZrGT1vlEZWqpgmtFeuIRj0CTdWPbtj93YCxSU9bZbYIdJ7prVuc13uYM8Z5f2/tL02EBdcvNDEP9KNqSqJILsNhIqHCllVNV+A2yapmT",preset:"vue"}),e(s,{id:"flowchart-43",code:"eJx1ULFOwzAQ3f0VHotEUrWjpZgJMQFDJoQYXPuSGFKfZZ8bVfLHY6dQwdDlrHd+7927i9TJSCqQ4H19sleRhJyIvNhul2VpR8Rxhlbj8f0wK/f1waCT4Izgj87kIVEKcEPA0O86iR6CIotO8Oczf/1F66TC2P9j9JSGIesUAjhiMR2KQakBE1kHq0N/hdm6k5qtYRqd6WSt9mLzBpFh4C/4kJX3AU9gbmXUJcAf5ROi4daAygE+QRMYZrGT1vlEZWqpgmtFeuIRj0CTdWPbtj93YCxSU9bZbYIdJ7prVuc13uYM8Z5f2/tL02EBdcvNDEP9KNqSqJILsNhIqHCllVNV+A2yapmT",preset:"ant"}),e(s,{id:"flowchart-44",code:"eJx1ULFOwzAQ3f0VHotEUrWjpZgJMQFDJoQYXPuSGFKfZZ8bVfLHY6dQwdDlrHd+7927i9TJSCqQ4H19sleRhJyIvNhul2VpR8Rxhlbj8f0wK/f1waCT4Izgj87kIVEKcEPA0O86iR6CIotO8Oczf/1F66TC2P9j9JSGIesUAjhiMR2KQakBE1kHq0N/hdm6k5qtYRqd6WSt9mLzBpFh4C/4kJX3AU9gbmXUJcAf5ROi4daAygE+QRMYZrGT1vlEZWqpgmtFeuIRj0CTdWPbtj93YCxSU9bZbYIdJ7prVuc13uYM8Z5f2/tL02EBdcvNDEP9KNqSqJILsNhIqHCllVNV+A2yapmT",preset:"pie"}),x,e(s,{id:"flowchart-79",code:"eJwrLrG1Ky5JLCqxUggGUVyptnapeSlWCq55KVxcxSW6dqlcAOP4C2A=",preset:"vue"}),q,e(s,{id:"flowchart-94",code:"eJwrKMpPTi0utrXLL0gtSizJzM+zUvCHMblSbe1S81KsFFzzUri4oEp17VK5ACXfEtY=",preset:"vue"}),V,e(s,{id:"flowchart-109",code:"eJwrKMpPTi0utrXLzCsoLckvLQGSVgqeCA5Xqq1dal6KlYJrXgoXF1S5rl0qFwCSlRT2",preset:"vue"}),y,e(s,{id:"flowchart-124",code:"eJwrKMpPTi0utrUrLk0qyi8tycxLtVIIhrO5Um3tUvNSrBRc81K4uKCKde1SuQBZbhPU",preset:"vue"}),C,e(s,{id:"flowchart-149",code:"eJxLzs9LsbUDkZklmfl5VgoBRfnJqcXF9lwFEIatXX5BalEiiiRXqq1dal6KlYJrXgoXF0izRmVqsaauHVSPrl0qRDQvHyiYygUAPWgiyQ==",preset:"vue"}),E,e(s,{id:"flowchart-174",code:"eJxFizEKgDAMRfecIqOCDjoWms3dK0QNKNamtLk/Kioun897vMSZPd0bggSH30PjshdIWWcpxZMmyWybRofjw0A8SVwcDnEBuLsqsa1dg5Oa6VG39NYtye/7iwucDNwpNA==",preset:"vue"}),J])}const T=r(k,[["render",S],["__file","flowchart.html.vue"]]);export{T as default};
