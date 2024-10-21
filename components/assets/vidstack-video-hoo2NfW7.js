var O=Object.defineProperty;var E=i=>{throw TypeError(i)};var U=(i,t,e)=>t in i?O(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var m=(i,t,e)=>U(i,typeof t!="symbol"?t+"":t,e),I=(i,t,e)=>t.has(i)||E("Cannot "+e);var s=(i,t,e)=>(I(i,t,"read from private field"),e?e.call(i):t.get(i)),r=(i,t,e)=>t.has(i)?E("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),c=(i,t,e,n)=>(I(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),p=(i,t,e)=>(I(i,t,"access private method"),e);import{N as $,aV as V,aW as A,aX as Y,M as C,aY as q,aZ as v,a6 as F,U as W,ao as X}from"./app-BcZrfIto.js";import{H as Z,a as _}from"./vidstack-CGXAe0PE-BE6-wot1.js";import"./vidstack-DSYpsFWk-CXiEnJmC.js";var P,f,k,H,S;class j{constructor(t,e){r(this,k);r(this,P);r(this,f);c(this,P,t),c(this,f,e),t.textTracks.onaddtrack=p(this,k,H).bind(this),C(p(this,k,S).bind(this))}}P=new WeakMap,f=new WeakMap,k=new WeakSet,H=function(t){const e=t.track;if(!e||z(s(this,P),e))return;const n=new q({id:e.id,kind:e.kind,label:e.label??"",language:e.language,type:"vtt"});n[v.native]={track:e},n[v.readyState]=2,n[v.nativeHLS]=!0;let a=0;const b=N=>{if(e.cues)for(let w=a;w<e.cues.length;w++)n.addCue(e.cues[w],N),a++};b(t),e.oncuechange=b,s(this,f).textTracks.add(n,t),n.setMode(e.mode,t)},S=function(){var t;s(this,P).textTracks.onaddtrack=null;for(const e of s(this,f).textTracks){const n=(t=e[v.native])==null?void 0:t.track;n!=null&&n.oncuechange&&(n.oncuechange=null)}};function z(i,t){return Array.from(i.children).find(e=>e.track===t)}var d,y,x,D,L,T;class B{constructor(t,e){r(this,x);r(this,d);r(this,y);r(this,T,(t,e)=>{s(this,y).notify("picture-in-picture-change",t,e)});c(this,d,t),c(this,y,e),new F(t).add("enterpictureinpicture",p(this,x,D).bind(this)).add("leavepictureinpicture",p(this,x,L).bind(this))}get active(){return document.pictureInPictureElement===s(this,d)}get supported(){return A(s(this,d))}async enter(){return s(this,d).requestPictureInPicture()}exit(){return document.exitPictureInPicture()}}d=new WeakMap,y=new WeakMap,x=new WeakSet,D=function(t){s(this,T).call(this,!0,t)},L=function(t){s(this,T).call(this,!1,t)},T=new WeakMap;var l,g,o,M,R;class G{constructor(t,e){r(this,M);r(this,l);r(this,g);r(this,o,"inline");c(this,l,t),c(this,g,e),W(t,"webkitpresentationmodechanged",p(this,M,R).bind(this))}get mode(){return s(this,o)}get supported(){return V(s(this,l))}async setPresentationMode(t){s(this,o)!==t&&s(this,l).webkitSetPresentationMode(t)}}l=new WeakMap,g=new WeakMap,o=new WeakMap,M=new WeakSet,R=function(t){var n;const e=s(this,o);c(this,o,s(this,l).webkitPresentationMode),(n=s(this,g).player)==null||n.dispatch(new X("video-presentation-change",{detail:s(this,o),trigger:t})),["fullscreen","picture-in-picture"].forEach(a=>{(s(this,o)===a||e===a)&&s(this,g).notify(`${a}-change`,s(this,o)===a,t)})};var u;class J{constructor(t){r(this,u);c(this,u,t)}get active(){return s(this,u).mode==="fullscreen"}get supported(){return s(this,u).supported}async enter(){s(this,u).setPresentationMode("fullscreen")}async exit(){s(this,u).setPresentationMode("inline")}}u=new WeakMap;var h;class K{constructor(t){r(this,h);c(this,h,t)}get active(){return s(this,h).mode==="picture-in-picture"}get supported(){return s(this,h).supported}async enter(){s(this,h).setPresentationMode("picture-in-picture")}async exit(){s(this,h).setPresentationMode("inline")}}h=new WeakMap;class st extends Z{constructor(e,n){super(e,n);m(this,"$$PROVIDER_TYPE","VIDEO");m(this,"airPlay");m(this,"fullscreen");m(this,"pictureInPicture");$(()=>{if(this.airPlay=new _(e,n),V(e)){const a=new G(e,n);this.fullscreen=new J(a),this.pictureInPicture=new K(a)}else A(e)&&(this.pictureInPicture=new B(e,n))},this.scope)}get type(){return"video"}setup(){super.setup(),Y(this.video)&&new j(this.video,this.ctx),this.ctx.textRenderers.attachVideo(this.video),C(()=>{this.ctx.textRenderers.attachVideo(null)}),this.type==="video"&&this.ctx.notify("provider-setup",this)}get video(){return this.media}}export{st as VideoProvider};
