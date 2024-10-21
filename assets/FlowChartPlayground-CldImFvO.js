import{aA as w,aY as f,aZ as g,aB as i,aG as h,_ as y,a_ as m,a$ as d,w as b,b0 as _,b1 as C,aC as o}from"./app-3Fu3LGel.js";const s="flowchart-playground",F=`st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
`,L={"/":{config:"Flowchart Config",preset:"Flowchart Preset",result:"Render Result"},"/zh/":{config:"流程图配置",preset:"流程图预设",result:"渲染结果"}},A=w({name:"FlowChartPlayground",setup(){const u=f(L);let l=null;const p=g(),r=i(F),t=i("vue"),n=i(1),c=e=>e<419?.8:e>1280?1:.9;return h(()=>{let e=null;Promise.all([y(()=>import("./flowchart-CTwbLKUk.js"),[]),m(800)]).then(([{parse:a}])=>{e=a;try{l=a(r.value),n.value=c(window.innerWidth),l.draw(s,{...d[t.value],scale:n.value})}catch(v){console.log(v)}}),b([r,t],()=>{if(e)try{l=e(r.value),n.value=c(window.innerWidth),p.value.innerHTML="",l.draw(s,{...d[t.value],scale:n.value})}catch(a){console.log(a)}}),_("resize",C(()=>{if(l){const a=c(window.innerWidth);n.value!==a&&(n.value=a,l.draw(s,{...d[t.value],scale:a}))}},100))}),()=>o("div",{class:"flowchart-playground"},[o("label",{for:"flowchart-playground-config"},`${u.value.config}:`),o("textarea",{id:"flowchart-playground-config",value:r.value,onInput:({target:e})=>{r.value=e.value}}),o("div",[o("label",{for:"flowchart-playground-preset"},`${u.value.preset}:`),o("select",{id:"flowchart-playground-preset",value:t.value,onChange:({target:e})=>{t.value=e.value}},["ant","pie","vue"].map(e=>o("option",{value:e},e)))]),o("label",{for:s},`${u.value.result}:`),o("div",{ref:p,class:["flowchart-wrapper",t.value],id:s})])}});export{A as default};
