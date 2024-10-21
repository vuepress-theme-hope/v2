const S="npm2url/dist/index.cjs",b={jsdelivr:e=>`https://cdn.jsdelivr.net/npm/${e}`,unpkg:e=>`https://unpkg.com/${e}`};async function k(e,t){const n=await fetch(e,{signal:t});if(!n.ok)throw n;await n.text()}class J{constructor(){this.providers={...b},this.provider="jsdelivr"}async getFastestProvider(t=5e3,n=S){const r=new AbortController;let s=0;try{return await new Promise((o,i)=>{Promise.all(Object.entries(this.providers).map(async([a,v])=>{try{await k(v(n),r.signal),o(a)}catch{}})).then(()=>i(new Error("All providers failed"))),s=setTimeout(i,t,new Error("Timed out"))})}finally{r.abort(),clearTimeout(s)}}async findFastestProvider(t,n){return this.provider=await this.getFastestProvider(t,n),this.provider}setProvider(t,n){n?this.providers[t]=n:delete this.providers[t]}getFullUrl(t,n=this.provider){if(t.includes("://"))return t;const r=this.providers[n];if(!r)throw new Error(`Provider ${n} not found`);return r(t)}}class z{constructor(){this.listeners=[]}tap(t){return this.listeners.push(t),()=>this.revoke(t)}revoke(t){const n=this.listeners.indexOf(t);n>=0&&this.listeners.splice(n,1)}revokeAll(){this.listeners.splice(0)}call(...t){for(const n of this.listeners)n(...t)}}const N=Math.random().toString(36).slice(2,8);let f=0;function B(){return f+=1,`mm-${N}-${f}`}function R(){}function Y(e,t){const n=(r,s)=>t(r,()=>{var o;return(o=r.children)==null?void 0:o.map(i=>n(i,r))},s);return n(e)}function q(e,...t){const n=(e||"").split(" ").filter(Boolean);return t.forEach(r=>{r&&n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function G(e){if(typeof e=="string"){const n=e;e=r=>r.tagName===n}const t=e;return function(){let r=Array.from(this.childNodes);return t&&(r=r.filter(s=>t(s))),r}}function K(e,t){return(...n)=>t(e,...n)}function w(){const e={};return e.promise=new Promise((t,n)=>{e.resolve=t,e.reject=n}),e}function T(e){const t={};return function(...r){const s=`${r[0]}`;let o=t[s];return o||(o={value:e(...r)},t[s]=o),o.value}}function W(e,t){const n={timer:0};function r(){n.timer&&(window.clearTimeout(n.timer),n.timer=0)}function s(){r(),n.args&&(n.result=e(...n.args))}return function(...i){return r(),n.args=i,n.timer=window.setTimeout(s,t),n.result}}/*! @gera2ld/jsx-dom v2.2.2 | ISC License */const g=1,m=2,A="http://www.w3.org/2000/svg",l="http://www.w3.org/1999/xlink",j={show:l,actuate:l,href:l},E=e=>typeof e=="string"||typeof e=="number",P=e=>(e==null?void 0:e.vtype)===g,x=e=>(e==null?void 0:e.vtype)===m;function C(e,t,...n){return t=Object.assign({},t,{children:n.length===1?n[0]:n}),F(e,t)}function F(e,t){let n;if(typeof e=="string")n=g;else if(typeof e=="function")n=m;else throw new Error("Invalid VNode type");return{vtype:n,type:e,props:t}}function I(e){return e.children}const _={isSvg:!1};function h(e,t){Array.isArray(t)||(t=[t]),t=t.filter(Boolean),t.length&&e.append(...t)}function L(e,t,n){for(const r in t)if(!(r==="key"||r==="children"||r==="ref"))if(r==="dangerouslySetInnerHTML")e.innerHTML=t[r].__html;else if(r==="innerHTML"||r==="textContent"||r==="innerText"||r==="value"&&["textarea","select"].includes(e.tagName)){const s=t[r];s!=null&&(e[r]=s)}else r.startsWith("on")?e[r.toLowerCase()]=t[r]:M(e,r,t[r],n.isSvg)}const O={className:"class",labelFor:"for"};function M(e,t,n,r){if(t=O[t]||t,n===!0)e.setAttribute(t,"");else if(n===!1)e.removeAttribute(t);else{const s=r?j[t]:void 0;s!==void 0?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}}function V(e){return e.reduce((t,n)=>t.concat(n),[])}function u(e,t){return Array.isArray(e)?V(e.map(n=>u(n,t))):d(e,t)}function d(e,t=_){if(e==null||typeof e=="boolean")return null;if(e instanceof Node)return e;if(x(e)){const{type:n,props:r}=e;if(n===I){const o=document.createDocumentFragment();if(r.children){const i=u(r.children,t);h(o,i)}return o}const s=n(r);return d(s,t)}if(E(e))return document.createTextNode(`${e}`);if(P(e)){let n;const{type:r,props:s}=e;if(!t.isSvg&&r==="svg"&&(t=Object.assign({},t,{isSvg:!0})),t.isSvg?n=document.createElementNS(A,r):n=document.createElement(r),L(n,s,t),s.children){let i=t;t.isSvg&&r==="foreignObject"&&(i=Object.assign({},i,{isSvg:!1}));const a=u(s.children,i);a!=null&&h(n,a)}const{ref:o}=s;return typeof o=="function"&&o(n),n}throw new Error("mount: Invalid Vnode!")}function $(e){return d(e)}function c(...e){return $(C(...e))}const U=T(e=>{document.head.append(c("link",{rel:"preload",as:"script",href:e}))}),p={},y={};async function D(e,t){var n;const r=e.type==="script"&&((n=e.data)==null?void 0:n.src)||"";if(e.loaded||(e.loaded=p[r]),!e.loaded){const s=w();if(e.loaded=s.promise,e.type==="script"&&(document.head.append(c("script",{...e.data,onLoad:()=>s.resolve(),onError:s.reject})),r?p[r]=e.loaded:s.resolve()),e.type==="iife"){const{fn:o,getParams:i}=e.data;o(...(i==null?void 0:i(t))||[]),s.resolve()}}await e.loaded}async function H(e){const t=e.type==="stylesheet"&&e.data.href||"";if(e.loaded||(e.loaded=y[t]),!e.loaded){const n=w();e.loaded=n.promise,t&&(y[t]=e.loaded),e.type==="style"?(document.head.append(c("style",{textContent:e.data})),n.resolve()):t&&(document.head.append(c("link",{rel:"stylesheet",...e.data})),fetch(t).then(r=>{if(r.ok)return r.text();throw r}).then(()=>n.resolve(),n.reject))}await e.loaded}async function X(e,t){e.forEach(n=>{var r;n.type==="script"&&((r=n.data)!=null&&r.src)&&U(n.data.src)}),t={getMarkmap:()=>window.markmap,...t};for(const n of e)await D(n,t)}async function Q(e){await Promise.all(e.map(t=>H(t)))}function Z(e){return{type:"script",data:{src:e}}}function ee(e){return{type:"stylesheet",data:{href:e}}}export{z as H,J as U,q as a,X as b,G as c,W as d,Z as e,K as f,B as g,ee as h,Q as l,R as n,Y as w};
