import{h as o,A as l,i as u,D as i,k as e,Y as r,a0 as c,H as s,a1 as m}from"./app.29058a75.js";const v=()=>e(s,{name:"back"},()=>e("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),d=()=>e(s,{name:"home"},()=>e("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}));var h=o({name:"SlidePage",setup(){const n=l(),a=u(!1),t=()=>{a.value=!1};return i(()=>{document.querySelector("html").classList.remove("reveal-full-page"),document.body.classList.remove("reveal-viewport"),document.body.style.removeProperty("--slide-width"),document.body.style.removeProperty("--slide-height")}),()=>e("div",{class:"presentation"},[e(r),c(e("div",{class:["menu",{active:a.value}]},[e("button",{class:"menu-button",onClick:()=>{a.value=!a.value}},e("span",{class:"icon"})),e("button",{class:"back-button",onClick:()=>(t(),void window.history.go(-1))},e(v)),e("button",{class:"home-button",onClick:()=>(t(),void n.push("/"))},e(d))]),[[m,t]])])}}),b=o({name:"Slide",setup:()=>()=>e(h)});export{b as default};
