var vt=Object.defineProperty;var Y=n=>{throw TypeError(n)};var wt=(n,t,e)=>t in n?vt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var H=(n,t,e)=>wt(n,typeof t!="symbol"?t+"":t,e),b=(n,t,e)=>t.has(n)||Y("Cannot "+e);var i=(n,t,e)=>(b(n,t,"read from private field"),e?e.call(n):t.get(n)),f=(n,t,e)=>t.has(n)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),l=(n,t,e,r)=>(b(n,t,"write to private field"),r?r.call(n,e):t.set(n,e),e),h=(n,t,e)=>(b(n,t,"access private method"),e);import{t as Et,h as _,p as Lt,j as At,Q as z,l as J,k as Dt,D as N,f as O,T as xt,L as q,u as Mt,v as Ct,b as Nt,I as Rt,i as Z,m as Ft,n as Pt,q as qt,r as _t}from"./app-3Fu3LGel.js";import{VideoProvider as $t}from"./vidstack-video-BJ_e3wUH.js";import{R as It}from"./vidstack-DSYpsFWk-D5I23PZM.js";import"./vidstack-CGXAe0PE-goLy0lTx.js";function W(n){try{return new Intl.DisplayNames(navigator.languages,{type:"language"}).of(n)??null}catch{return null}}const jt=n=>`dash-${_t(n)}`;var L,d,o,R,F,s,x,k,tt,it,w,P,et,st,nt,rt,ot,at,ht,dt,A,ut,Q,G,ct,V,pt,lt,U;class Ht{constructor(t,e){f(this,s);f(this,L);f(this,d);f(this,o,null);f(this,R,new Set);f(this,F,null);H(this,"config",{});f(this,w,null);f(this,P,{});f(this,A,-1);l(this,L,t),l(this,d,e)}get instance(){return i(this,o)}setup(t){l(this,o,t().create());const e=h(this,s,it).bind(this);for(const r of Object.values(t.events))i(this,o).on(r,e);i(this,o).on(t.events.ERROR,h(this,s,at).bind(this));for(const r of i(this,R))r(i(this,o));i(this,d).player.dispatch("dash-instance",{detail:i(this,o)}),i(this,o).initialize(i(this,L),void 0,!1),i(this,o).updateSettings({streaming:{text:{defaultEnabled:!1,dispatchForManualRendering:!0},buffer:{fastSwitchEnabled:!0}},...this.config}),i(this,o).on(t.events.FRAGMENT_LOADING_STARTED,h(this,s,ht).bind(this)),i(this,o).on(t.events.FRAGMENT_LOADING_COMPLETED,h(this,s,dt).bind(this)),i(this,o).on(t.events.MANIFEST_LOADED,h(this,s,ot).bind(this)),i(this,o).on(t.events.QUALITY_CHANGE_RENDERED,h(this,s,rt).bind(this)),i(this,o).on(t.events.TEXT_TRACKS_ADDED,h(this,s,st).bind(this)),i(this,o).on(t.events.TRACK_CHANGE_RENDERED,h(this,s,nt).bind(this)),i(this,d).qualities[z.enableAuto]=h(this,s,ct).bind(this),J(i(this,d).qualities,"change",h(this,s,pt).bind(this)),J(i(this,d).audioTracks,"change",h(this,s,lt).bind(this)),l(this,F,Dt(h(this,s,k).bind(this)))}onInstance(t){return i(this,R).add(t),()=>i(this,R).delete(t)}loadSource(t){var e;h(this,s,U).call(this),_(t.src)&&((e=i(this,o))==null||e.attachSource(t.src))}destroy(){var t,e;h(this,s,U).call(this),(t=i(this,o))==null||t.destroy(),l(this,o,null),(e=i(this,F))==null||e.call(this),l(this,F,null)}}L=new WeakMap,d=new WeakMap,o=new WeakMap,R=new WeakMap,F=new WeakMap,s=new WeakSet,x=function(t){return new N(jt(t.type),{detail:t})},k=function(){if(!i(this,d).$state.live())return;const t=new It(h(this,s,tt).bind(this));return t.start(),t.stop.bind(t)},tt=function(){if(!i(this,o))return;const t=i(this,o).duration()-i(this,o).time();i(this,d).$state.liveSyncPosition.set(isNaN(t)?1/0:t)},it=function(t){var e;(e=i(this,d).player)==null||e.dispatch(h(this,s,x).call(this,t))},w=new WeakMap,P=new WeakMap,et=function(t){var u;const e=(u=i(this,w))==null?void 0:u[O.native],r=(e==null?void 0:e.track).cues;if(!e||!r)return;const p=i(this,w).id,g=i(this,P)[p]??0,y=h(this,s,x).call(this,t);for(let m=g;m<r.length;m++){const c=r[m];c.positionAlign||(c.positionAlign="auto"),i(this,w).addCue(c,y)}i(this,P)[p]=r.length},st=function(t){var g;if(!i(this,o))return;const e=t.tracks,r=[...i(this,L).textTracks].filter(y=>"manualMode"in y),p=h(this,s,x).call(this,t);for(let y=0;y<r.length;y++){const u=e[y],m=r[y],c=`dash-${u.kind}-${y}`,E=new xt({id:c,label:(u==null?void 0:u.label)??((g=u.labels.find(a=>a.text))==null?void 0:g.text)??((u==null?void 0:u.lang)&&W(u.lang))??(u==null?void 0:u.lang)??void 0,language:u.lang??void 0,kind:u.kind,default:u.defaultTrack});E[O.native]={managed:!0,track:m},E[O.readyState]=2,E[O.onModeChange]=()=>{i(this,o)&&(E.mode==="showing"?(i(this,o).setTextTrack(y),l(this,w,E)):(i(this,o).setTextTrack(-1),l(this,w,null)))},i(this,d).textTracks.add(E,p)}},nt=function(t){const{mediaType:e,newMediaInfo:r}=t;if(e==="audio"){const p=i(this,d).audioTracks.getById(`dash-audio-${r.index}`);if(p){const g=h(this,s,x).call(this,t);i(this,d).audioTracks[q.select](p,!0,g)}}},rt=function(t){if(t.mediaType!=="video")return;const e=i(this,d).qualities[t.newQuality];if(e){const r=h(this,s,x).call(this,t);i(this,d).qualities[q.select](e,!0,r)}},ot=function(t){if(i(this,d).$state.canPlay()||!i(this,o))return;const{type:e,mediaPresentationDuration:r}=t.data,p=h(this,s,x).call(this,t);i(this,d).notify("stream-type-change",e!=="static"?"live":"on-demand",p),i(this,d).notify("duration-change",r,p),i(this,d).qualities[z.setAuto](!0,p);const g=i(this,o).getVideoElement(),y=i(this,o).getTracksForTypeFromManifest("video",t.data),u=[...new Set(y.map(a=>a.mimeType))].find(a=>a&&Mt(g,a)),m=y.filter(a=>u===a.mimeType)[0];let c=i(this,o).getTracksForTypeFromManifest("audio",t.data);const E=[...new Set(c.map(a=>a.mimeType))].find(a=>a&&Ct(g,a));if(c=c.filter(a=>E===a.mimeType),m.bitrateList.forEach((a,j)=>{var C;const B={id:((C=a.id)==null?void 0:C.toString())??`dash-bitrate-${j}`,width:a.width??0,height:a.height??0,bitrate:a.bandwidth??0,codec:m.codec,index:j};i(this,d).qualities[q.add](B,p)}),Nt(m.index)){const a=i(this,d).qualities[m.index];a&&i(this,d).qualities[q.select](a,!0,p)}c.forEach((a,j)=>{const C=a.labels.find(K=>navigator.languages.some(St=>K.lang&&St.toLowerCase().startsWith(K.lang.toLowerCase())))||a.labels[0],Tt={id:`dash-audio-${a==null?void 0:a.index}`,label:(C==null?void 0:C.text)??(a.lang&&W(a.lang))??a.lang??"",language:a.lang??"",kind:"main",mimeType:a.mimeType,codec:a.codec,index:j};i(this,d).audioTracks[q.add](Tt,p)}),g.dispatchEvent(new N("canplay",{trigger:p}))},at=function(t){const{type:e,error:r}=t;switch(r.code){case 27:h(this,s,ut).call(this,r);break;default:h(this,s,G).call(this,r);break}},ht=function(){i(this,A)>=0&&h(this,s,Q).call(this)},dt=function(t){t.mediaType==="text"&&requestAnimationFrame(h(this,s,et).bind(this,t))},A=new WeakMap,ut=function(t){var e;h(this,s,Q).call(this),(e=i(this,o))==null||e.play(),l(this,A,window.setTimeout(()=>{l(this,A,-1),h(this,s,G).call(this,t)},5e3))},Q=function(){clearTimeout(i(this,A)),l(this,A,-1)},G=function(t){i(this,d).notify("error",{message:t.message??"",code:1,error:t})},ct=function(){var e;h(this,s,V).call(this,"video",!0);const{qualities:t}=i(this,d);(e=i(this,o))==null||e.setQualityFor("video",t.selectedIndex,!0)},V=function(t,e){var r;(r=i(this,o))==null||r.updateSettings({streaming:{abr:{autoSwitchBitrate:{[t]:e}}}})},pt=function(){const{qualities:t}=i(this,d);!i(this,o)||t.auto||!t.selected||(h(this,s,V).call(this,"video",!1),i(this,o).setQualityFor("video",t.selectedIndex,t.switch==="current"),Rt&&(i(this,L).currentTime=i(this,L).currentTime))},lt=function(){if(!i(this,o))return;const{audioTracks:t}=i(this,d),e=i(this,o).getTracksFor("audio").find(r=>t.selected&&t.selected.id===`dash-audio-${r.index}`);e&&i(this,o).setCurrentTrack(e)},U=function(){h(this,s,Q).call(this),l(this,w,null),l(this,P,{})};var M,S,$,v,gt,ft,yt,mt;class Ot{constructor(t,e,r){f(this,v);f(this,M);f(this,S);f(this,$);l(this,M,t),l(this,S,e),l(this,$,r),h(this,v,gt).call(this)}}M=new WeakMap,S=new WeakMap,$=new WeakMap,v=new WeakSet,gt=async function(){const t={onLoadStart:h(this,v,ft).bind(this),onLoaded:h(this,v,yt).bind(this),onLoadError:h(this,v,mt).bind(this)};let e=await bt(i(this,M),t);if(Z(e)&&!_(i(this,M))&&(e=await Qt(i(this,M),t)),!e)return null;if(!window.dashjs.supportsMediaSource()){const r="[vidstack] `dash.js` is not supported in this environment";return i(this,S).player.dispatch(new N("dash-unsupported")),i(this,S).notify("error",{message:r,code:4}),null}return e},ft=function(){i(this,S).player.dispatch(new N("dash-lib-load-start"))},yt=function(t){i(this,S).player.dispatch(new N("dash-lib-loaded",{detail:t})),i(this,$).call(this,t)},mt=function(t){const e=Ft(t);i(this,S).player.dispatch(new N("dash-lib-load-error",{detail:e})),i(this,S).notify("error",{message:e.message,code:4,error:e})};async function Qt(n,t={}){var e,r,p,g,y,u,m;if(!Z(n)){if((e=t.onLoadStart)==null||e.call(t),Gt(n))return(r=t.onLoaded)==null||r.call(t,n),n;if(X(n)){const c=n.MediaPlayer;return(p=t.onLoaded)==null||p.call(t,c),c}try{const c=(g=await n())==null?void 0:g.default;if(X(c))return(y=t.onLoaded)==null||y.call(t,c.MediaPlayer),c.MediaPlayer;if(c)(u=t.onLoaded)==null||u.call(t,c);else throw Error("");return c}catch(c){(m=t.onLoadError)==null||m.call(t,c)}}}async function bt(n,t={}){var e,r,p;if(_(n)){(e=t.onLoadStart)==null||e.call(t);try{if(await Pt(n),!qt(window.dashjs.MediaPlayer))throw Error("");const g=window.dashjs.MediaPlayer;return(r=t.onLoaded)==null||r.call(t,g),g}catch(g){(p=t.onLoadError)==null||p.call(t,g)}}}function Gt(n){return n&&n.prototype&&n.prototype!==Function}function X(n){return n&&"MediaPlayer"in n}const Vt="https://cdn.jsdelivr.net";var I,T,D;class Ut extends $t{constructor(){super(...arguments);H(this,"$$PROVIDER_TYPE","DASH");f(this,I,null);f(this,T,new Ht(this.video,this.ctx));f(this,D,`${Vt}/npm/dashjs@4.7.4/dist/dash.all.min.js`)}get ctor(){return i(this,I)}get instance(){return i(this,T).instance}get type(){return"dash"}get canLiveSync(){return!0}get config(){return i(this,T).config}set config(e){i(this,T).config=e}get library(){return i(this,D)}set library(e){l(this,D,e)}preconnect(){_(i(this,D))&&Lt(i(this,D))}setup(){super.setup(),new Ot(i(this,D),this.ctx,e=>{l(this,I,e),i(this,T).setup(e),this.ctx.notify("provider-setup",this);const r=At(this.ctx.$state.source);r&&this.loadSource(r)})}async loadSource(e,r){if(!_(e.src)){this.removeSource();return}this.media.preload=r||"",this.appendSource(e,"application/x-mpegurl"),i(this,T).loadSource(e),this.currentSrc=e}onInstance(e){const r=i(this,T).instance;return r&&e(r),i(this,T).onInstance(e)}destroy(){i(this,T).destroy()}}I=new WeakMap,T=new WeakMap,D=new WeakMap,H(Ut,"supported",Et());export{Ut as DASHProvider};
