import{d as h,n as m,r as u,o as v,c as b,b as e,a as l,w as i,u as n,T as p,g,f,p as x}from"./app.afdcb3d7.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";const C=g(`<p>The theme allows you to customize theme color and even provide a picker.</p><h2 id="setting-default-theme-color" tabindex="-1"><a class="header-anchor" href="#setting-default-theme-color" aria-hidden="true">#</a> Setting Default Theme Color</h2><p>You should set the default theme color of your site in <code>.vuepress/styles/palette.scss</code>:</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="theme-color-picker" tabindex="-1"><a class="header-anchor" href="#theme-color-picker" aria-hidden="true">#</a> Theme Color Picker</h2><p>You need to set <code>themeColor</code> with <code>{ colorname1: colorvalue, colorname2: colorvalue, ... }</code> format:</p><p>The first color is the default theme color above.</p>`,7),T={class:"custom-container details"},A=e("summary",null,"Example",-1),k=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.ts
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
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`// .vuepress/config.js
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
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("h3",{id:"try-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#try-it","aria-hidden":"true"},"#"),f(" Try it")],-1),N=h({__name:"theme-color.html",setup(S){const a=x(),t=m(()=>{const{themeColor:s}=a.value;return s===!1?null:s});return(s,V)=>{const r=u("CodeTabs");return v(),b("div",null,[C,e("details",T,[A,l(r,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:i(({title:o,value:c,isActive:d})=>[k]),tab1:i(({title:o,value:c,isActive:d})=>[y]),_:1})]),w,l(n(p),{themeColor:n(t)},null,8,["themeColor"])])}}});var E=_(N,[["__file","theme-color.html.vue"]]);export{E as default};
