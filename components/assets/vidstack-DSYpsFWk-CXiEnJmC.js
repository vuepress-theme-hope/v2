var l=i=>{throw TypeError(i)};var c=(i,t,s)=>t.has(i)||l("Cannot "+s);var a=(i,t,s)=>(c(i,t,"read from private field"),s?s.call(i):t.get(i)),e=(i,t,s)=>t.has(i)?l("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,s),h=(i,t,s,f)=>(c(i,t,"write to private field"),f?f.call(i,s):t.set(i,s),s),m=(i,t,s)=>(c(i,t,"access private method"),s);import{aU as p,aj as u}from"./app-BcZrfIto.js";var o,r,n,d;class F{constructor(t){e(this,n);e(this,o);e(this,r);h(this,r,t)}start(){p(a(this,o))&&m(this,n,d).call(this)}stop(){u(a(this,o))&&window.cancelAnimationFrame(a(this,o)),h(this,o,void 0)}}o=new WeakMap,r=new WeakMap,n=new WeakSet,d=function(){h(this,o,window.requestAnimationFrame(()=>{p(a(this,o))||(a(this,r).call(this),m(this,n,d).call(this))}))};export{F as R};
