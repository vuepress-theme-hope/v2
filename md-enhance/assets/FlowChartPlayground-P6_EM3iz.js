function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{h as f,a4 as w,O as h,k as i,x as g,_ as m,a5 as d,m as y,a6 as b,a7 as _,j as a}from"./app-UJ1r8UXi.js";const s="flowchart-playground",C=`st=>start: Start|past:>http://www.google.com[blank]
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
`,F={"/":{config:"Flowchart Config",preset:"Flowchart Preset",result:"Render Result"},"/zh/":{config:"流程图配置",preset:"流程图预设",result:"渲染结果"}},L=f({name:"FlowChartPlayground",setup(){const u=w(F);let l=null;const p=h(),r=i(C),t=i("vue"),n=i(1),c=e=>e<419?.8:e>1280?1:.9;return g(()=>{let e=null;Promise.all([m(()=>import("./flowchart-966sEcGG.js"),__vite__mapDeps([])),new Promise(o=>setTimeout(o,800))]).then(([{parse:o}])=>{e=o;try{l=o(r.value),n.value=c(window.innerWidth),l.draw(s,{...d[t.value],scale:n.value})}catch(v){console.log(v)}}),y([r,t],()=>{if(e)try{l=e(r.value),n.value=c(window.innerWidth),p.value.innerHTML="",l.draw(s,{...d[t.value],scale:n.value})}catch(o){console.log(o)}}),b("resize",_(()=>{if(l){const o=c(window.innerWidth);n.value!==o&&(n.value=o,l.draw(s,{...d[t.value],scale:o}))}},100))}),()=>a("div",{class:"flowchart-playground"},[a("label",{for:"flowchart-playground-config"},`${u.value.config}:`),a("textarea",{id:"flowchart-playground-config",value:r.value,onInput:({target:e})=>{r.value=e.value}}),a("div",[a("label",{for:"flowchart-playground-preset"},`${u.value.preset}:`),a("select",{id:"flowchart-playground-preset",value:t.value,onChange:({target:e})=>{t.value=e.value}},["ant","pie","vue"].map(e=>a("option",{value:e},e)))]),a("label",{for:s},`${u.value.result}:`),a("div",{ref:p,class:["flowchart-wrapper",t.value],id:s})])}});export{L as default};
