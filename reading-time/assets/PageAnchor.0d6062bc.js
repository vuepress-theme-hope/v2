import{j as e,a6 as c,g as l,v as i,N as d,R as u,_ as h}from"./app.aedc0407.js";const t=({custom:a})=>e("div",{class:["theme-hope-content",{custom:a}]},e(c));t.displayName="MarkdownContent";var g=t;const p=({text:a,link:s,level:n})=>e(u,{to:s,class:["anchor-link",n?`heading${n}`:""]},()=>e("div",a)),r=a=>{const s=i();return e("ul",{class:"anchor-list"},a.map(n=>{const o=d(s,`#${n.slug}`);return e("li",{class:["anchor",{active:o}]},[p({text:n.title,link:`#${n.slug}`,level:n.level})])}))};var m=l({name:"PageAnchor",props:{items:{type:Array,default:()=>[]}},setup(a){const s=h();return()=>e("div",{class:"anchor-place-holder"},[e("aside",{id:"anchor"},[e("div",{class:"anchor-wrapper"},[a.items.length?r(a.items):s.value.headers?r(s.value.headers):null])])])}});export{g as M,m as P};
