import{k as e,a7 as l,h as c,x as i,O as d,R as h,$ as u}from"./app.89db4967.js";const t=({custom:a})=>e("div",{class:["theme-hope-content",{custom:a}]},e(l));t.displayName="MarkdownContent";var m=t;const p=({text:a,link:s,level:n})=>e(h,{to:s,class:["anchor-link",n?`heading${n}`:""]},()=>e("div",a)),r=a=>{const s=i();return e("ul",{class:"anchor-list"},a.map(n=>{const o=d(s,`#${n.slug}`);return e("li",{class:["anchor",{active:o}]},[p({text:n.title,link:`#${n.slug}`,level:n.level})])}))};var g=c({name:"PageAnchor",props:{items:{type:Array,default:()=>[]}},setup(a){const s=u();return()=>e("div",{class:"anchor-place-holder"},[e("aside",{id:"anchor"},[e("div",{class:"anchor-wrapper"},[a.items.length?r(a.items):s.value.headers?r(s.value.headers):null])])])}});export{m as M,g as P};
