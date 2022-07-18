import{d as o,n as h,r as m,o as v,c as b,b as e,a as u,w as n,u as i,T as p,g,f as B,p as E}from"./app.afdcb3d7.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const C=g(`<p>\u4E3B\u9898\u5141\u8BB8\u60A8\u81EA\u5B9A\u4E49\u4E3B\u9898\u989C\u8272\uFF0C\u751A\u81F3\u63D0\u4F9B\u9009\u62E9\u5668\u3002</p><h2 id="\u8BBE\u7F6E\u9ED8\u8BA4\u4E3B\u9898\u8272" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u9ED8\u8BA4\u4E3B\u9898\u8272" aria-hidden="true">#</a> \u8BBE\u7F6E\u9ED8\u8BA4\u4E3B\u9898\u8272</h2><p>\u60A8\u5E94\u8BE5\u5728 <code>.vuepress/styles/palette.scss</code> \u4E2D\u8BBE\u7F6E\u7AD9\u70B9\u7684\u9ED8\u8BA4\u4E3B\u9898\u989C\u8272\uFF1A</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4E3B\u9898\u8272\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u8272\u9009\u62E9\u5668" aria-hidden="true">#</a> \u4E3B\u9898\u8272\u9009\u62E9\u5668</h2><p>\u4F60\u9700\u8981\u6309\u7167 <code>{ \u989C\u8272\u540D1: \u989C\u8272\u503C, \u989C\u8272\u540D2: \u989C\u8272\u503C, ... }</code> \u7684\u683C\u5F0F\u5728\u4E3B\u9898\u9009\u9879\u4E2D\u914D\u7F6E <code>themeColor</code>:</p><p>\u7B2C\u4E00\u4E2A\u989C\u8272\u4E3A\u4E0A\u65B9\u8BBE\u7F6E\u7684\u9ED8\u8BA4\u4E3B\u9898\u8272\u3002</p>`,7),x={class:"custom-container details"},A=e("summary",null,"\u4F8B\u5B50",-1),_=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },
  }),
});
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),D=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },
  }),
};
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),F=e("h3",{id:"\u5C1D\u8BD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5C1D\u8BD5","aria-hidden":"true"},"#"),B(" \u5C1D\u8BD5")],-1),T=o({__name:"theme-color.html",setup(k){const l=E(),a=h(()=>{const{themeColor:s}=l.value;return s===!1?null:s});return(s,N)=>{const t=m("CodeTabs");return v(),b("div",null,[C,e("details",x,[A,u(t,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:r,value:c,isActive:d})=>[_]),tab1:n(({title:r,value:c,isActive:d})=>[D]),_:1})]),F,u(i(p),{themeColor:i(a)},null,8,["themeColor"])])}}});var S=f(T,[["__file","theme-color.html.vue"]]);export{S as default};
