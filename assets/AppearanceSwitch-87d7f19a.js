import{A as l,D as n,L as r}from"./outlookIcon-63d57847.js";import"./index-a28b5645.js";import{a as c}from"./themeData-aef1e996.js";import"./chunk-E44UNXTX-d6442e1c.js";import{u as i}from"./darkmode-4c3a1cdd.js";import{d as p,c as u,h as e}from"./framework-f408d5b9.js";const f=p({name:"AppearanceSwitch",setup(){const t=c(),{status:a}=i(),o=u(()=>t.value.darkmode),s=()=>{o.value==="switch"?a.value={light:"dark",dark:"auto",auto:"light"}[a.value]:a.value=a.value==="light"?"dark":"light"};return()=>e("button",{id:"appearance-switch",onClick:()=>s()},[e(l,{style:{display:a.value==="auto"?"block":"none"}}),e(n,{style:{display:a.value==="dark"?"block":"none"}}),e(r,{style:{display:a.value==="light"?"block":"none"}})])}});export{f as A};