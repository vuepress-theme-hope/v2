import{h as u,u as c,i as l,j as m,k as e}from"./app.fa06c844.js";import{P as i,C as p}from"./CommonWrapper.6ba7daed.js";import"./plugin-vue_export-helper.21dcd24c.js";var v=u({name:"404",setup(){var a;const s=c(),o=l(),n=()=>{const t=o.value.routeLocales["404msg"];return t[Math.floor(Math.random()*t.length)]},{navigate:r}=m({to:(a=o.value.home)!=null?a:s.value});return()=>e(p,{sidebar:!1},()=>e("main",{class:"page not-found"},[e(i),e("blockquote",n()),e("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},o.value.routeLocales.back),e("button",{class:"action-button",onClick:()=>r()},o.value.routeLocales.home)]))}});export{v as default};
