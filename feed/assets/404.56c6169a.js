import{h as u,u as c,i as l,j as m,k as o}from"./app.7457b292.js";import{P as i,C as p}from"./CommonWrapper.2a4a8522.js";import"./plugin-vue_export-helper.21dcd24c.js";var b=u({name:"404",setup(){var a;const s=c(),e=l(),n=()=>{const t=e.value.routeLocales["404msg"];return t[Math.floor(Math.random()*t.length)]},{navigate:r}=m({to:(a=e.value.home)!=null?a:s.value});return()=>o(p,{sidebar:!1},()=>o("main",{class:"page not-found"},[o(i),o("blockquote",n()),o("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},e.value.routeLocales.back),o("button",{class:"action-button",onClick:()=>r()},e.value.routeLocales.home)]))}});export{b as default};
