var me=Object.defineProperty,ge=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var Y=(e,t,o)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,z=(e,t)=>{for(var o in t||(t={}))be.call(t,o)&&Y(e,o,t[o]);if(J)for(var o of J(t))ke.call(t,o)&&Y(e,o,t[o]);return e},E=(e,t)=>ge(e,ye(t));import{i as A,h as f,u as N,j as c,t as xe,k as a,R as K,E as ze,K as H,L as X,o as G,a as Z,M as Q,w as ee,N as te,F as Le,P as d,q as I,G as R,y as ae,f as Be,m as Se,B as Pe,X as we,r as le,C as Ae,S as Ge,p as Ie,W as y,V as ne,Y as Te,Z as $e,_ as oe,s as je,v as Me,O as re,$ as se,a0 as Ee,T as U,H as ie,a1 as Ne,U as He,a2 as Re,a3 as Ue,A as De,J as Oe,x as qe}from"./app.e909f84c.js";import{v as Ce}from"./CommonWrapper.47740310.js";const k=()=>Ie(),b=()=>Se(),D=()=>c(()=>k().value.iconPrefix||""),O=(e="",t)=>Boolean(e)&&Ge.exports.compareSync(e,t),_e={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Fe=({docsRepo:e,docsBranch:t,docsDir:o,filePathRelative:r,editLinkPattern:l})=>{if(!r)return null;const n=!I(i=e)||/github\.com/.test(i)?"GitHub":/bitbucket\.org/.test(i)?"Bitbucket":/gitlab\.com/.test(i)?"GitLab":/gitee\.com/.test(i)?"Gitee":null;var i;let s;return l?s=l:n!==null&&(s=_e[n]),s?s.replace(/:repo/,I(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,Re(`${Ue(o)}/${r}`)):null},ue=(...e)=>{const t=De().resolve(...e),o=t.matched[t.matched.length-1];if(!(o==null?void 0:o.redirect))return t;const{redirect:r}=o,l=Oe(r)?r(t):r,n=ie(l)?{path:l}:l;return ue(z({hash:t.hash,query:t.query,params:t.params},n))},T="vuepress-theme-hope-path-token",$=A({}),j=A({}),Ve=()=>{const e=N(),t=(()=>{const n=k();return c(()=>n.value.encrypt||{})})(),o=n=>typeof t.value.config=="object"?Object.keys(t.value.config).filter(i=>n.startsWith(i)).sort((i,s)=>s.length-i.length):[],r=n=>{const i=o(n);if(i.length!==0){const{config:s={}}=t.value;return!i.some(u=>{const p=s[u];return(typeof p=="string"?[p]:p).some(v=>O($.value[u],v)||O(j.value[u],v))})}return!1},l=c(()=>r(e.path));return Ae(()=>{try{$.value=JSON.parse(localStorage.getItem(T)||"{}")}catch{}try{j.value=JSON.parse(sessionStorage.getItem(T)||"{}")}catch{}}),{isEncrypted:l,getPathEncryptStatus:r,validateToken:(n,i=!1)=>{const{config:s={}}=t.value,u=o(e.path);for(const p of u){const v=s[p];if((typeof v=="string"?[v]:v).filter(h=>O(n,h))){(i?$:j).value[p]=n,i?localStorage.setItem(T,JSON.stringify($.value)):sessionStorage.setItem(T,JSON.stringify(j.value));break}}}}},We=()=>{const e=b(),t=y(),o=d(),r=c(()=>{const{author:u}=d().value;if(u)return ne(u);if(u===!1)return[];const{author:p}=k().value;return ne(p,!1)}),l=c(()=>{const{category:u}=d().value,{categoryPath:p=""}=k().value.blog||{};return Te(u).map(v=>({name:v,path:p.replace(/\$category/g,decodeURI(v))}))}),n=c(()=>{const{tag:u}=d().value,{tagPath:p=""}=k().value.blog||{};return $e(u).map(v=>({name:v,path:p.replace(/\$tag/g,decodeURI(v))}))}),i=c(()=>{const{date:u}=d().value;if(u)return oe(u,{type:"date"});const{createdTime:p}=y().value.git||{};return p?oe(new Date(p),{type:"date"}):null}),s=c(()=>Boolean(k().value.pure||!1));return we({config:o.value.pageInfo!==!1&&(o.value.pageInfo||e.value.pageInfo),author:r.value,category:l.value,date:i.value,tag:n.value,original:o.value.original,readingTime:t.value.readingTime,visitor:o.value.visitor!==!1,hint:!s.value})};let q=null,L=null;const Je={wait:()=>q,pending:()=>{q=new Promise(e=>L=e)},resolve:()=>{L==null||L(),q=null,L=null}},Ye=()=>Je;var M=f({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:{type:Boolean,default:!1}},emits:["focusout"],setup(e,{attrs:t,emit:o,slots:r}){const l=N(),n=qe(),i=D(),s=xe(e,"config"),u=c(()=>I(s.value.link)),p=c(()=>je(s.value.link)||Me(s.value.link)),v=c(()=>p.value?void 0:s.value.target?s.value.target:u.value?"_blank":void 0),h=c(()=>v.value==="_blank"),B=c(()=>!u.value&&!p.value&&!h.value),S=c(()=>p.value?void 0:s.value.rel?s.value.rel:h.value?"noopener noreferrer":void 0),x=c(()=>s.value.ariaLabel||s.value.text),P=c(()=>{if(e.exact)return!1;const m=Object.keys(n.value.locales);return m.length?!m.some(w=>w===s.value.link):s.value.link!=="/"}),he=c(()=>!!B.value&&(s.value.activeMatch?new RegExp(s.value.activeMatch).test(l.path):P.value?l.path.startsWith(s.value.link):l.path===s.value.link)),F=m=>m.icon?a("i",{class:`icon ${i.value}${m.icon}`}):null;return()=>{var m,w;return B.value?a(K,E(z({to:s.value.link,ariaLabel:x.value},t),{class:["nav-link",{active:he.value},t.class],onFocusOut:()=>o("focusout")}),()=>{var V,W;return[((V=r.before)==null?void 0:V.call(r))||F(s.value),s.value.text,(W=r.after)==null?void 0:W.call(r)]}):a("a",E(z({href:s.value.link,rel:S.value,target:v.value,ariaLabel:x.value},t),{class:["nav-link external",t.class],onFocusOut:()=>o("focusout")}),[((m=r.before)==null?void 0:m.call(r))||F(s.value),s.value.text,h.value?a(ze):null,(w=r.after)==null?void 0:w.call(r)])}}});const Ke=Symbol.for("sidebarItems");var Xe=f({name:"FadeSlideY",setup(e,{slots:t}){const o=Ye(),r=o.resolve,l=o.pending;return()=>a(H,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:r,onBeforeLeave:l},()=>{var n;return(n=t.default)==null?void 0:n.call(t)})}}),g=f({name:"DropTransition",components:{Transition:H,TransitionGroup:X},props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25}},setup:e=>({setStyle:t=>{t.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0"},unsetStyle:t=>{t.style.transform="translateY(0)",t.style.opacity="1"}})});g.render=function(e,t,o,r,l,n){return G(),Z(Le,null,[e.type==="single"?(G(),Q(H,{key:0,name:"drop",appear:"",onAppear:e.setStyle,onAfterAppear:e.unsetStyle,onEnter:e.setStyle,onAfterEnter:e.unsetStyle,onBeforeLeave:e.setStyle},{default:ee(()=>[re(e.$slots,"default")]),_:3},8,["onAppear","onAfterAppear","onEnter","onAfterEnter","onBeforeLeave"])):te("v-if",!0),e.type==="group"?(G(),Q(X,{key:1,name:"drop",appear:"",onAppear:e.setStyle,onAfterAppear:e.unsetStyle,onEnter:e.setStyle,onAfterEnter:e.unsetStyle,onBeforeLeave:e.setStyle},{default:ee(()=>[re(e.$slots,"default")]),_:3},8,["onAppear","onAfterAppear","onEnter","onAfterEnter","onBeforeLeave"])):te("v-if",!0)],64)},g.__file="src/client/components/transitions/DropTransition.vue";var Ze=f({name:"HomeFeatures",setup(){const e=D(),t=d(),o=c(()=>se(t.value.features)?t.value.features:[]),r=(l="")=>I(l)?a("img",{class:"icon",src:l}):l.startsWith("/")?a("img",{class:"icon",src:R(l)}):l?a("span",{class:["icon",`${e.value}${l}`]}):null;return()=>{var l;return o.value.length?a("div",{class:"features"},(l=t.value.features)==null?void 0:l.map(n=>{const i=[r(n.icon),a("h2",n.title),a("p",n.details)];return n.link?a(K,{class:"feature link",to:n.link,role:"navigation"},()=>i):a("div",{class:"feature"},i)})):null}}});const C=({custom:e})=>a("div",{class:["theme-hope-content",{custom:e}]},a(Ee));C.displayName="MarkdownContent";var Qe=f({name:"ProjectHero",setup(){const e=d(),t=ae(),o=c(()=>e.value.heroImage?R(e.value.heroImage):null),r=c(()=>e.value.darkHeroImage?R(e.value.darkHeroImage):null),l=c(()=>e.value.heroText===null?null:e.value.heroText||t.value.title||"Hello"),n=c(()=>e.value.heroAlt||l.value||"hero"),i=c(()=>e.value.tagline===null?null:e.value.tagline||t.value.description||"Welcome to your VuePress site"),s=c(()=>se(e.value.actions)?e.value.actions.map(({text:u,link:p,type:v="primary"})=>({text:u,link:p,type:v})):[]);return()=>a("header",{class:"hero"},[a(g,{type:"group"},()=>[o.value?a("img",{key:"light",class:{light:r.value},src:o.value,alt:n}):null,r.value?a("img",{key:"dark",class:"dark",src:r.value,alt:n}):null]),a("div",{class:"hero-info"},[l.value?a(g,{delay:.04},()=>a("h1",{id:"main-title"},l.value)):null,i.value?a(g,{delay:.08},()=>a("p",{class:"description"},i.value)):null,s.value.length?a(g,{delay:.12},()=>a("p",{class:"actions"},s.value.map(u=>a(M,{class:["action-button",u.type],config:u})))):null])])}}),et=f({name:"ProjectHome",setup(){const e=d();return()=>a("main",{class:"home project","aria-labelledby":e.value.heroText===null?void 0:"main-title"},[a(Qe),a(g,{delay:.16},()=>a(Ze)),a(g,{delay:.24},()=>a(C,{custom:!0}))])}});const ce=()=>a(U,{name:"edit"},()=>a("path",{d:"M117.953 696.992 64.306 959.696l265.931-49.336 450.204-452.505-212.284-213.376-450.204 452.513zm496.384-296.326L219.039 797.993l-46.108-46.34L568.233 354.33l46.104 46.335zm345.357-122.99-114.45 115.04-212.288-213.377 114.45-115.035 212.288 213.371zm0 0"}));ce.displayName="EditIcon";const pe=()=>a(U,{name:"prev"},()=>a("path",{d:"M906.783 588.79c-.02 8.499-6.882 15.36-15.38 15.37l-443.7-.01 75.704 191.682c2.52 6.42.482 13.763-5.038 17.91-5.52 4.168-13.138 4.147-18.616-.092L123.228 524.175a15.362 15.362 0 0 1-6-12.165c0-4.782 2.222-9.277 6-12.185L499.753 210.35a15.388 15.388 0 0 1 9.38-3.195c3.236 0 6.502 1.034 9.236 3.103 5.52 4.147 7.578 11.49 5.038 17.91L447.683 419.84l443.72-.01c8.498.01 15.36 6.881 15.36 15.36l.02 153.6z"}));pe.displayName="PrevIcon";const ve=()=>a(U,{name:"next"},()=>a("path",{d:"M906.772 512c0 4.772-2.211 9.267-5.99 12.175L524.257 813.66a15.37 15.37 0 0 1-18.616.092 15.368 15.368 0 0 1-5.038-17.91l75.714-191.672h-443.73c-8.488 0-15.36-6.881-15.36-15.36v-153.6c0-8.489 6.872-15.36 15.36-15.36h443.73l-75.714-191.682a15.358 15.358 0 0 1 5.048-17.91c5.51-4.158 13.128-4.137 18.606.092l376.525 289.485a15.323 15.323 0 0 1 5.99 12.165z"}));ve.displayName="NextIcon";var de=f({name:"Page404"});const tt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"page-404-icon",viewBox:"0 0 178 130"},at=[Be('<defs><linearGradient id="b" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e9e9e9"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="c" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dcdcdc"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="d" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f1f1f1"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="e" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dedede"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="f" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e8e8e8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="g" x1=".213" y1="1.265" x2=".846" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#f5f5f5"></stop></linearGradient><linearGradient id="h" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c5c5c5"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="i" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#acacac"></stop><stop offset="1" stop-color="#f2f2f2" stop-opacity=".388"></stop></linearGradient><clipPath id="a"><path transform="translate(744 1111)" fill="none" d="M0 0h178v130H0z"></path></clipPath></defs><g transform="translate(-744 -1111)" clip-path="url(#a)"><g><path d="M0 10.795 36.6 0v93.779L0 104.574z" transform="translate(772.466 1122.142)" fill="url(#b)"></path><path d="M-8.492 10.642-26.361-.469v93.78l17.868 11.111z" transform="translate(780.958 1122.293)" fill="url(#c)"></path><path d="M-8.5 5.55 28.106-5.3 10.228-16.437l-36.6 10.845z" transform="translate(780.963 1127.438)" fill="url(#d)"></path><path d="M0 10.539 35.741 0v91.56L0 102.1z" transform="translate(870.158 1123.617)" fill="url(#d)"></path><path d="M-8.913 10.38-26.361-.469v91.562l17.448 10.848z" transform="translate(879.071 1123.775)" fill="url(#e)"></path><path d="m-8.918 5.032 35.741-10.59L9.366-16.437-26.375-5.848z" transform="translate(879.076 1129.175)" fill="url(#d)"></path><path d="M0 9.137 30.839 0v79.381L0 88.519z" transform="translate(799.678 1151.579)" fill="url(#f)"></path><path d="m-11.306 8.936-15.054-9.4v79.377l15.054 9.4z" transform="translate(810.985 1151.78)" fill="url(#c)"></path><path d="M-11.313 2.087 19.526-7.05 4.464-16.437-26.375-7.3z" transform="translate(810.991 1158.63)" fill="url(#g)"></path><path d="M178 53H0a51.361 51.361 0 0 1 10.453-20.952 74.532 74.532 0 0 1 19.742-16.811A103.3 103.3 0 0 1 57.089 4.058a127.515 127.515 0 0 1 63.823 0 103.3 103.3 0 0 1 26.894 11.179 74.532 74.532 0 0 1 19.741 16.811A51.363 51.363 0 0 1 178 53z" transform="translate(744 1187.549)" fill="url(#h)"></path><path d="m814.529 1199.586-1.272 1.212h2.3l1.2-1.212z" fill="#cbcbcb"></path><path d="m816.725 1194.909-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"></path><path d="m863.284 1199.585-1.272 1.212h2.3l1.2-1.212z" fill="#cbcbcb"></path><path d="m865.519 1194.9-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"></path><path d="m799.527 1191.21 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#c6c6c6"></path><path d="m798.306 1192.431 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#b2b2b2"></path><path d="m-27.694-19.435 10.182 14.517h4.381l-9.931-14.352h14.876v-2.606h-19.508zm13.081 6.273h4.152v-11.8h-4.152zM6.115-25.156q-4.256 0-6.457 1.5a4.8 4.8 0 0 0-2.2 4.191v9.113a4.784 4.784 0 0 0 2.212 4.2 11.511 11.511 0 0 0 6.447 1.5q4.256 0 6.457-1.489a4.786 4.786 0 0 0 2.2-4.2v-9.113a4.784 4.784 0 0 0-2.212-4.2 11.511 11.511 0 0 0-6.447-1.502zm0 2.675a5.705 5.705 0 0 1 3.328.779 2.6 2.6 0 0 1 1.074 2.24v9.113a2.607 2.607 0 0 1-1.064 2.24 5.7 5.7 0 0 1-3.338.779 5.7 5.7 0 0 1-3.338-.779 2.607 2.607 0 0 1-1.064-2.24v-9.113A2.6 2.6 0 0 1 2.788-21.7a5.705 5.705 0 0 1 3.327-.782zm14.927 3.047L31.224-4.918h4.381l-9.931-14.351H40.55v-2.606H21.043zm13.081 6.273h4.152v-11.8h-4.151z" transform="translate(826 1226.245)" opacity=".32" fill="url(#i)"></path><g fill="#e6e6e6"><path d="m858.428 1169.23-1.2 1.259h4.388l1.178-1.259z"></path><path d="m802.944 1192.187 1.288-1.375h7.143v1.375zm8.415-9.25 1.273-1.234h4.15l-1.235 1.234zm-2.855-12.469 1.198-1.259h4.367l-1.178 1.259z"></path><path d="m861.362 1181.678-1.27 1.3h4.188l1.236-1.3z"></path><path d="m865.519 1190.9-1.27 1.3h2.3l1.162-1.3z"></path><path d="m852.838 1190.791-1.207 1.508h8.447v-1.508z"></path></g></g></g>',2)];de.render=function(e,t,o,r,l,n){return G(),Z("svg",tt,at)},de.__file="src/client/components/icons/Page404.vue";var lt=f({name:"PageMeta",setup(){const e=b(),t=(()=>{const l=b(),n=y(),i=d();return c(()=>{var x,P;const{repo:s,docsRepo:u=s,docsBranch:p="main",docsDir:v="",editLink:h,editLinkPattern:B}=l.value;if(!((P=(x=i.value.editLink)!=null?x:h)!=null?P:1)||!u)return null;const S=Fe({docsRepo:u,docsBranch:p,docsDir:v,editLinkPattern:B,filePathRelative:n.value.filePathRelative});return S?{text:l.value.metaLocales.editLink,link:S}:null})})(),o=(()=>{const l=ae(),n=b(),i=y(),s=d();return c(()=>{var u,p,v,h;return((p=(u=s.value.lastUpdated)!=null?u:n.value.lastUpdated)!=null?p:1)&&((v=i.value.git)==null?void 0:v.updatedTime)?new Date((h=i.value.git)==null?void 0:h.updatedTime).toLocaleString(l.value.lang):null})})(),r=(()=>{const l=b(),n=y(),i=d();return c(()=>{var s,u,p,v;return((u=(s=i.value.contributors)!=null?s:l.value.contributors)!=null?u:1)&&(v=(p=n.value.git)==null?void 0:p.contributors)!=null?v:null})})();return()=>{const{metaLocales:l}=e.value;return a("footer",{class:"page-meta"},[t.value?a("div",{class:"meta-item edit-link"},a(M,{class:"label",config:t.value},{before:()=>a(ce)})):null,o.value?a("div",{class:"meta-item update-time"},[a("span",{class:"label"},`${l.lastUpdated}: `),a("span",{class:"info"},o.value)]):null,r.value&&r.value.length?a("div",{class:"meta-item contributors"},[a("span",{class:"label"},`${l.contributors}: `),r.value.map(({email:n,name:i},s)=>[a("span",{class:"contributor",title:`email: ${n}`},i),s!==r.value.length-1?",":""])]):null])}}});const fe=e=>e===!1?null:ie(e)?(t=>{const o=ue(t);return{icon:o.meta.icon,text:o.meta.title||t,link:o.name==="404"?t:o.fullPath}})(e):!!Ne(e)&&e,_=(e,t,o)=>{const r=e.findIndex(l=>l.link===t);if(r!==-1){const l=e[r+o];return(l==null?void 0:l.link)?l:null}for(const l of e)if(l.children){const n=_(l.children,t,o);if(n)return n}return null};var nt=f({name:"PageNav",setup(){const e=d(),t=(()=>{const n=Pe(Ke);if(!n)throw new Error("useSidebarItems() is called without provider.");return n})(),o=N(),r=c(()=>{const n=fe(e.value.prev);return n!==!1?n:_(t.value,o.path,-1)}),l=c(()=>{const n=fe(e.value.next);return n!==!1?n:_(t.value,o.path,1)});return()=>r.value||l.value?a("nav",{class:"page-nav"},a("p",{class:"inner"},[r.value?a("span",{class:"prev"},[a(pe),a(M,{config:r.value})]):null,l.value?a("span",{class:"next"},[a(M,{config:l.value}),a(ve)]):null])):null}}),ot=f({name:"PageTitle",setup(){const e=y(),t=d(),o=We(),r=b(),l=D();return()=>a("div",{class:"page-title"},[a("h1",[r.value.titleIcon&&t.value.icon?a("i",{class:["icon",`${l.value}${t.value.icon}`]}):null,e.value.title]),a(le("ArticleInfo"),z({},o)),a("hr")])}}),rt=f({name:"PasswordModal",props:{page:{type:Boolean,default:!1}},emits:["verify"],setup(e,{emit:t}){const o=d(),r=b(),l=A(""),n=A(!1),i=c(()=>r.value.encryptLocales),s=()=>{n.value=!1,t("verify",l.value),He().then(()=>{n.value=!0})};return()=>a("div",{class:["password-modal",{expand:e.page||o.value.home}]},[a("div",{class:["hint",{tried:n.value}]},n.value?i.value.errorHint:i.value.title),a("div",{class:"input"},[a("input",{type:"password",value:l.value,onInput:({target:u})=>{l.value=u.value},onKeydown:({key:u})=>{u==="Enter"&&s()}}),a("button",{onClick:()=>s()},"OK")])])}}),st=f({name:"NormalPage",setup(e,{slots:t}){const{isEncrypted:o,validateToken:r}=Ve();return()=>{var l,n;return a("main",{class:"page"},o.value?a(rt,{page:!0,onVerify:r}):[(l=t.top)==null?void 0:l.call(t),a(ot),a(C),a(lt),a(nt),a(le("PageComment")),(n=t.bottom)==null?void 0:n.call(t)])}}}),pt=f({name:"Layout",setup(){const e=y(),t=d();return()=>a(Ce,{},()=>t.value.home?a(et):a(Xe,{},()=>a(st,{key:e.value.path})))}});export{pt as default};
