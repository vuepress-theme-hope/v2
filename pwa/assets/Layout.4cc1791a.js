var A=Object.defineProperty;var h=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var P=(a,t,r)=>t in a?A(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,k=(a,t)=>{for(var r in t||(t={}))F.call(t,r)&&P(a,r,t[r]);if(h)for(var r of h(t))N.call(t,r)&&P(a,r,t[r]);return a};import{h as o,y,l as c,n as u,k as e,J as $,v as g,R as S,a0 as b,t as D,B as d,Q as E,a1 as M,i as x,a2 as B,a3 as R,a4 as W,Y as w,x as Y,C as _,D as U,a5 as V,a6 as J,r as L,$ as I}from"./app.89db4967.js";import{D as v,E as O,a as Q,N as q,u as z,b as G,C as K}from"./CommonWrapper.7722dece.js";import{M as T,P as X}from"./PageAnchor.5a6f18a3.js";import"./plugin-vue_export-helper.21dcd24c.js";var Z=o({name:"HomeFeatures",setup(){const a=y(),t=c(),r=u(()=>b(t.value.features)?t.value.features:[]),s=(n="")=>$(n)?e("img",{class:"icon",src:n}):n.startsWith("/")?e("img",{class:"icon",src:g(n)}):n?e("span",{class:["icon",`${a.value}${n}`]}):null;return()=>{var n;return r.value.length?e("div",{class:"features"},(n=t.value.features)==null?void 0:n.map(l=>{const i=[s(l.icon),e("h2",l.title),e("p",l.details)];return l.link?e(S,{class:"feature link",to:l.link,role:"navigation"},()=>i):e("div",{class:"feature"},i)})):null}}}),ee=o({name:"ProjectHero",setup(){const a=c(),t=D(),r=u(()=>a.value.heroImage?g(a.value.heroImage):null),s=u(()=>a.value.darkHeroImage?g(a.value.darkHeroImage):null),n=u(()=>a.value.heroText===null?null:a.value.heroText||t.value.title||"Hello"),l=u(()=>a.value.heroAlt||n.value||"hero"),i=u(()=>a.value.tagline===null?null:a.value.tagline||t.value.description||"Welcome to your VuePress site"),m=u(()=>b(a.value.actions)?a.value.actions.map(({text:p,link:j,type:H="primary"})=>({text:p,link:j,type:H})):[]);return()=>e("header",{class:"hero"},[e(v,{type:"group"},()=>[r.value?e("img",{key:"light",class:{light:s.value},src:r.value,alt:l}):null,s.value?e("img",{key:"dark",class:"dark",src:s.value,alt:l}):null]),e("div",{class:"hero-info"},[n.value?e(v,{delay:.04},()=>e("h1",{id:"main-title"},n.value)):null,i.value?e(v,{delay:.08},()=>e("p",{class:"description"},i.value)):null,m.value.length?e(v,{delay:.12},()=>e("p",{class:"actions"},m.value.map(p=>e(d,{class:["action-button",p.type],config:p})))):null])])}});var ae=o({name:"ProjectHome",setup(){const a=c();return()=>e("main",{class:"home project","aria-labelledby":a.value.heroText===null?void 0:"main-title"},[e(ee),e(v,{delay:.16},()=>e(Z)),e(v,{delay:.24},()=>e(T,{custom:!0}))])}}),te=o({name:"FadeSlideY",setup(a,{slots:t}){const r=M(),s=r.resolve,n=r.pending;return()=>e(E,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:s,onBeforeLeave:n},()=>{var l;return(l=t.default)==null?void 0:l.call(t)})}}),ne=o({name:"PageMeta",setup(){const a=x(),t=B(),r=R(),s=W();return()=>{const{metaLocales:n}=a.value;return e("footer",{class:"page-meta"},[t.value?e("div",{class:"meta-item edit-link"},e(d,{class:"label",config:t.value},{before:()=>e(O)})):null,r.value?e("div",{class:"meta-item update-time"},[e("span",{class:"label"},`${n.lastUpdated}: `),e("span",{class:"info"},r.value)]):null,s.value&&s.value.length?e("div",{class:"meta-item contributors"},[e("span",{class:"label"},`${n.contributors}: `),s.value.map(({email:l,name:i},m)=>[e("span",{class:"contributor",title:`email: ${l}`},i),m!==s.value.length-1?",":""])]):null])}}});const C=a=>a===!1?null:_(a)?U(a):V(a)?a:!1,f=(a,t,r)=>{const s=a.findIndex(n=>n.link===t);if(s!==-1){const n=a[s+r];return(n==null?void 0:n.link)?n:null}for(const n of a)if(n.children){const l=f(n.children,t,r);if(l)return l}return null};var re=o({name:"PageNav",setup(){const a=c(),t=w(),r=Y(),s=u(()=>{const l=C(a.value.prev);return l!==!1?l:f(t.value,r.path,-1)}),n=u(()=>{const l=C(a.value.next);return l!==!1?l:f(t.value,r.path,1)});return()=>s.value||n.value?e("nav",{class:"page-nav"},e("p",{class:"inner"},[s.value?e("span",{class:"prev"},[e(Q),e(d,{config:s.value})]):null,n.value?e("span",{class:"next"},[e(d,{config:n.value}),e(q)]):null])):null}});var le=o({name:"PageTitle",setup(){const a=I(),t=c(),r=J(),s=x(),n=y();return()=>e("div",{class:"page-title"},[e("h1",[s.value.titleIcon!==!1&&t.value.icon?e("i",{class:["icon",`${n.value}${t.value.icon}`]}):null,a.value.title]),e(L("ArticleInfo"),k({},r)),e("hr")])}}),se=o({name:"NormalPage",setup(a,{slots:t}){const{isEncrypted:r,validateToken:s}=z();return()=>{var n,l;return e("main",{class:"page"},r.value?e(G,{page:!0,onVerify:s}):[(n=t.top)==null?void 0:n.call(t),e(le),e(X),e(T),e(ne),e(re),e(L("PageComment")),(l=t.bottom)==null?void 0:l.call(t)])}}}),me=o({name:"Layout",setup(){const a=I(),t=c();return()=>e(K,{},()=>t.value.home?e(ae):e(te,{},()=>e(se,{key:a.value.path})))}});export{me as default};
