var ue=Object.defineProperty,ce=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var U=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))ve.call(t,n)&&U(e,n,t[n]);if(D)for(var n of D(t))de.call(t,n)&&U(e,n,t[n]);return e},j=(e,t)=>ce(e,pe(t));import{h as d,u as F,i,t as fe,j as a,R as _,E as he,T as M,K as C,o as P,a as O,L as W,w as V,M as Y,F as me,O as m,p as A,G as $,x as J,f as ge,l as ye,B as be,r as K,n as xe,q as ke,s as ze,N as X,U as Q,V as Le,H as E,I as Z,W as Be,S as G,A as Pe,J as Ae,X as Ge,Y as Se,v as we}from"./app.3e04afd1.js";import{o as je}from"./CommonWrapper.3ad967af.js";const ee=()=>xe(),S=()=>ye(),te=()=>i(()=>ee().value.iconPrefix||""),ae=(...e)=>{const t=Pe().resolve(...e),n=t.matched[t.matched.length-1];if(!(n==null?void 0:n.redirect))return t;const{redirect:o}=n,l=Ae(o)?o(t):o,s=Z(l)?{path:l}:l;return ae(b({hash:t.hash,query:t.query,params:t.params},s))},Me={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},$e=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:o,editLinkPattern:l})=>{if(!o)return null;const s=!A(u=e)||/github\.com/.test(u)?"GitHub":/bitbucket\.org/.test(u)?"Bitbucket":/gitlab\.com/.test(u)?"GitLab":/gitee\.com/.test(u)?"Gitee":null;var u;let r;return l?r=l:s!==null&&(r=Me[s]),r?r.replace(/:repo/,A(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,Ge(`${Se(n)}/${o}`)):null};let I=null,x=null;const Ee={wait:()=>I,pending:()=>{I=new Promise(e=>x=e)},resolve:()=>{x==null||x(),I=null,x=null}},Ie=()=>Ee;var w=d({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:{type:Boolean,default:!1}},emits:["focusout"],setup(e,{attrs:t,emit:n,slots:o}){const l=F(),s=we(),u=te(),r=fe(e,"config"),c=i(()=>A(r.value.link)),p=i(()=>ke(r.value.link)||ze(r.value.link)),v=i(()=>p.value?void 0:r.value.target?r.value.target:c.value?"_blank":void 0),f=i(()=>v.value==="_blank"),k=i(()=>!c.value&&!p.value&&!f.value),z=i(()=>p.value?void 0:r.value.rel?r.value.rel:f.value?"noopener noreferrer":void 0),y=i(()=>r.value.ariaLabel||r.value.text),L=i(()=>{if(e.exact)return!1;const h=Object.keys(s.value.locales);return h.length?!h.some(B=>B===r.value.link):r.value.link!=="/"}),ie=i(()=>!!k.value&&(r.value.activeMatch?new RegExp(r.value.activeMatch).test(l.path):L.value?l.path.startsWith(r.value.link):l.path===r.value.link)),N=h=>h.icon?a("i",{class:`icon ${u.value}${h.icon}`}):null;return()=>{var h,B;return k.value?a(_,j(b({to:r.value.link,ariaLabel:y.value},t),{class:["nav-link",{active:ie.value},t.class],onFocusOut:()=>n("focusout")}),()=>{var R,q;return[((R=o.before)==null?void 0:R.call(o))||N(r.value),r.value.text,(q=o.after)==null?void 0:q.call(o)]}):a("a",j(b({href:r.value.link,rel:z.value,target:v.value,ariaLabel:y.value},t),{class:["nav-link external",t.class],onFocusOut:()=>n("focusout")}),[((h=o.before)==null?void 0:h.call(o))||N(r.value),r.value.text,f.value?a(he):null,(B=o.after)==null?void 0:B.call(o)])}}});const Te=Symbol.for("sidebarItems");var He=d({name:"FadeSlideY",setup(e,{slots:t}){const n=Ie(),o=n.resolve,l=n.pending;return()=>a(M,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:o,onBeforeLeave:l},()=>{var s;return(s=t.default)==null?void 0:s.call(t)})}}),g=d({name:"DropTransition",components:{Transition:M,TransitionGroup:C},props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25}},setup:e=>({setStyle:t=>{t.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0"},unsetStyle:t=>{t.style.transform="translateY(0)",t.style.opacity="1"}})});g.render=function(e,t,n,o,l,s){return P(),O(me,null,[e.type==="single"?(P(),W(M,{key:0,name:"drop",appear:"",onAppear:e.setStyle,onAfterAppear:e.unsetStyle,onEnter:e.setStyle,onAfterEnter:e.unsetStyle,onBeforeLeave:e.setStyle},{default:V(()=>[X(e.$slots,"default")]),_:3},8,["onAppear","onAfterAppear","onEnter","onAfterEnter","onBeforeLeave"])):Y("v-if",!0),e.type==="group"?(P(),W(C,{key:1,name:"drop",appear:"",onAppear:e.setStyle,onAfterAppear:e.unsetStyle,onEnter:e.setStyle,onAfterEnter:e.unsetStyle,onBeforeLeave:e.setStyle},{default:V(()=>[X(e.$slots,"default")]),_:3},8,["onAppear","onAfterAppear","onEnter","onAfterEnter","onBeforeLeave"])):Y("v-if",!0)],64)},g.__file="src/client/components/transitions/DropTransition.vue";var Ne=d({name:"HomeFeatures",setup(){const e=te(),t=m(),n=i(()=>Q(t.value.features)?t.value.features:[]),o=(l="")=>A(l)?a("img",{class:"icon",src:l}):l.startsWith("/")?a("img",{class:"icon",src:$(l)}):l?a("span",{class:["icon",`${e.value}${l}`]}):null;return()=>{var l;return n.value.length?a("div",{class:"features"},(l=t.value.features)==null?void 0:l.map(s=>{const u=[o(s.icon),a("h2",s.title),a("p",s.details)];return s.link?a(_,{class:"feature link",to:s.link,role:"navigation"},()=>u):a("div",{class:"feature"},u)})):null}}});const T=({custom:e})=>a("div",{class:["theme-hope-content",{custom:e}]},a(Le));T.displayName="MarkdownContent";var Re=d({name:"ProjectHero",setup(){const e=m(),t=J(),n=i(()=>e.value.heroImage?$(e.value.heroImage):null),o=i(()=>e.value.darkHeroImage?$(e.value.darkHeroImage):null),l=i(()=>e.value.heroText===null?null:e.value.heroText||t.value.title||"Hello"),s=i(()=>e.value.heroAlt||l.value||"hero"),u=i(()=>e.value.tagline===null?null:e.value.tagline||t.value.description||"Welcome to your VuePress site"),r=i(()=>Q(e.value.actions)?e.value.actions.map(({text:c,link:p,type:v="primary"})=>({text:c,link:p,type:v})):[]);return()=>a("header",{class:"hero"},[a(g,{type:"group"},()=>[n.value?a("img",{key:"light",class:{light:o.value},src:n.value,alt:s}):null,o.value?a("img",{key:"dark",class:"dark",src:o.value,alt:s}):null]),a("div",{class:"hero-info"},[l.value?a(g,{delay:.04},()=>a("h1",{id:"main-title"},l.value)):null,u.value?a(g,{delay:.08},()=>a("p",{class:"description"},u.value)):null,r.value.length?a(g,{delay:.12},()=>a("p",{class:"actions"},r.value.map(c=>a(w,{class:["action-button",c.type],config:c})))):null])])}}),qe=d({name:"ProjectHome",setup(){const e=m();return()=>a("main",{class:"home project","aria-labelledby":e.value.heroText===null?void 0:"main-title"},[a(Re),a(g,{delay:.16},()=>a(Ne)),a(g,{delay:.24},()=>a(T,{custom:!0}))])}});const le=()=>a(E,{name:"edit"},()=>a("path",{d:"M117.953 696.992 64.306 959.696l265.931-49.336 450.204-452.505-212.284-213.376-450.204 452.513zm496.384-296.326L219.039 797.993l-46.108-46.34L568.233 354.33l46.104 46.335zm345.357-122.99-114.45 115.04-212.288-213.377 114.45-115.035 212.288 213.371zm0 0"}));le.displayName="EditIcon";const ne=()=>a(E,{name:"next"},()=>a("path",{d:"M906.772 512c0 4.772-2.211 9.267-5.99 12.175L524.257 813.66a15.37 15.37 0 0 1-18.616.092 15.368 15.368 0 0 1-5.038-17.91l75.714-191.672h-443.73c-8.488 0-15.36-6.881-15.36-15.36v-153.6c0-8.489 6.872-15.36 15.36-15.36h443.73l-75.714-191.682a15.358 15.358 0 0 1 5.048-17.91c5.51-4.158 13.128-4.137 18.606.092l376.525 289.485a15.323 15.323 0 0 1 5.99 12.165z"}));ne.displayName="NextIcon";const oe=()=>a(E,{name:"prev"},()=>a("path",{d:"M906.783 588.79c-.02 8.499-6.882 15.36-15.38 15.37l-443.7-.01 75.704 191.682c2.52 6.42.482 13.763-5.038 17.91-5.52 4.168-13.138 4.147-18.616-.092L123.228 524.175a15.362 15.362 0 0 1-6-12.165c0-4.782 2.222-9.277 6-12.185L499.753 210.35a15.388 15.388 0 0 1 9.38-3.195c3.236 0 6.502 1.034 9.236 3.103 5.52 4.147 7.578 11.49 5.038 17.91L447.683 419.84l443.72-.01c8.498.01 15.36 6.881 15.36 15.36l.02 153.6z"}));oe.displayName="PrevIcon";var se=d({name:"Page404"});const De={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"page-404-icon",viewBox:"0 0 178 130"},Ue=[ge('<defs><linearGradient id="b" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e9e9e9"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="c" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dcdcdc"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="d" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f1f1f1"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="e" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dedede"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="f" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e8e8e8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="g" x1=".213" y1="1.265" x2=".846" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#f5f5f5"></stop></linearGradient><linearGradient id="h" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c5c5c5"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="i" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#acacac"></stop><stop offset="1" stop-color="#f2f2f2" stop-opacity=".388"></stop></linearGradient><clipPath id="a"><path transform="translate(744 1111)" fill="none" d="M0 0h178v130H0z"></path></clipPath></defs><g transform="translate(-744 -1111)" clip-path="url(#a)"><g><path d="M0 10.795 36.6 0v93.779L0 104.574z" transform="translate(772.466 1122.142)" fill="url(#b)"></path><path d="M-8.492 10.642-26.361-.469v93.78l17.868 11.111z" transform="translate(780.958 1122.293)" fill="url(#c)"></path><path d="M-8.5 5.55 28.106-5.3 10.228-16.437l-36.6 10.845z" transform="translate(780.963 1127.438)" fill="url(#d)"></path><path d="M0 10.539 35.741 0v91.56L0 102.1z" transform="translate(870.158 1123.617)" fill="url(#d)"></path><path d="M-8.913 10.38-26.361-.469v91.562l17.448 10.848z" transform="translate(879.071 1123.775)" fill="url(#e)"></path><path d="m-8.918 5.032 35.741-10.59L9.366-16.437-26.375-5.848z" transform="translate(879.076 1129.175)" fill="url(#d)"></path><path d="M0 9.137 30.839 0v79.381L0 88.519z" transform="translate(799.678 1151.579)" fill="url(#f)"></path><path d="m-11.306 8.936-15.054-9.4v79.377l15.054 9.4z" transform="translate(810.985 1151.78)" fill="url(#c)"></path><path d="M-11.313 2.087 19.526-7.05 4.464-16.437-26.375-7.3z" transform="translate(810.991 1158.63)" fill="url(#g)"></path><path d="M178 53H0a51.361 51.361 0 0 1 10.453-20.952 74.532 74.532 0 0 1 19.742-16.811A103.3 103.3 0 0 1 57.089 4.058a127.515 127.515 0 0 1 63.823 0 103.3 103.3 0 0 1 26.894 11.179 74.532 74.532 0 0 1 19.741 16.811A51.363 51.363 0 0 1 178 53z" transform="translate(744 1187.549)" fill="url(#h)"></path><path d="m814.529 1199.586-1.272 1.212h2.3l1.2-1.212z" fill="#cbcbcb"></path><path d="m816.725 1194.909-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"></path><path d="m863.284 1199.585-1.272 1.212h2.3l1.2-1.212z" fill="#cbcbcb"></path><path d="m865.519 1194.9-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"></path><path d="m799.527 1191.21 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#c6c6c6"></path><path d="m798.306 1192.431 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#b2b2b2"></path><path d="m-27.694-19.435 10.182 14.517h4.381l-9.931-14.352h14.876v-2.606h-19.508zm13.081 6.273h4.152v-11.8h-4.152zM6.115-25.156q-4.256 0-6.457 1.5a4.8 4.8 0 0 0-2.2 4.191v9.113a4.784 4.784 0 0 0 2.212 4.2 11.511 11.511 0 0 0 6.447 1.5q4.256 0 6.457-1.489a4.786 4.786 0 0 0 2.2-4.2v-9.113a4.784 4.784 0 0 0-2.212-4.2 11.511 11.511 0 0 0-6.447-1.502zm0 2.675a5.705 5.705 0 0 1 3.328.779 2.6 2.6 0 0 1 1.074 2.24v9.113a2.607 2.607 0 0 1-1.064 2.24 5.7 5.7 0 0 1-3.338.779 5.7 5.7 0 0 1-3.338-.779 2.607 2.607 0 0 1-1.064-2.24v-9.113A2.6 2.6 0 0 1 2.788-21.7a5.705 5.705 0 0 1 3.327-.782zm14.927 3.047L31.224-4.918h4.381l-9.931-14.351H40.55v-2.606H21.043zm13.081 6.273h4.152v-11.8h-4.151z" transform="translate(826 1226.245)" opacity=".32" fill="url(#i)"></path><g fill="#e6e6e6"><path d="m858.428 1169.23-1.2 1.259h4.388l1.178-1.259z"></path><path d="m802.944 1192.187 1.288-1.375h7.143v1.375zm8.415-9.25 1.273-1.234h4.15l-1.235 1.234zm-2.855-12.469 1.198-1.259h4.367l-1.178 1.259z"></path><path d="m861.362 1181.678-1.27 1.3h4.188l1.236-1.3z"></path><path d="m865.519 1190.9-1.27 1.3h2.3l1.162-1.3z"></path><path d="m852.838 1190.791-1.207 1.508h8.447v-1.508z"></path></g></g></g>',2)];se.render=function(e,t,n,o,l,s){return P(),O("svg",De,Ue)},se.__file="src/client/components/icons/Page404.vue";var Fe=d({name:"PageMeta",setup(){const e=S(),t=(()=>{const l=S(),s=G(),u=m();return i(()=>{var y,L;const{repo:r,docsRepo:c=r,docsBranch:p="main",docsDir:v="",editLink:f,editLinkPattern:k}=l.value;if(!((L=(y=u.value.editLink)!=null?y:f)!=null?L:1)||!c)return null;const z=$e({docsRepo:c,docsBranch:p,docsDir:v,editLinkPattern:k,filePathRelative:s.value.filePathRelative});return z?{text:l.value.metaLocales.editLink,link:z}:null})})(),n=(()=>{const l=J(),s=S(),u=G(),r=m();return i(()=>{var c,p,v,f;return((p=(c=r.value.lastUpdated)!=null?c:s.value.lastUpdated)!=null?p:1)&&((v=u.value.git)==null?void 0:v.updatedTime)?new Date((f=u.value.git)==null?void 0:f.updatedTime).toLocaleString(l.value.lang):null})})(),o=(()=>{const l=S(),s=G(),u=m();return i(()=>{var r,c,p,v;return((c=(r=u.value.contributors)!=null?r:l.value.contributors)!=null?c:1)&&(v=(p=s.value.git)==null?void 0:p.contributors)!=null?v:null})})();return()=>{const{metaLocales:l}=e.value;return a("footer",{class:"page-meta"},[t.value?a("div",{class:"meta-item edit-link"},a(w,{class:"label",config:t.value},{before:()=>a(le)})):null,n.value?a("div",{class:"meta-item update-time"},[a("span",{class:"label"},`${l.lastUpdated}: `),a("span",{class:"info"},n.value)]):null,o.value&&o.value.length?a("div",{class:"meta-item contributors"},[a("span",{class:"label"},`${l.contributors}: `),o.value.map(({email:s,name:u},r)=>[a("span",{class:"contributor",title:`email: ${s}`},u),r!==o.value.length-1?",":""])]):null])}}});const re=e=>e===!1?null:Z(e)?(t=>{const n=ae(t);return{text:n.meta.title||t,link:n.name==="404"?t:n.fullPath}})(e):!!Be(e)&&e,H=(e,t,n)=>{const o=e.findIndex(l=>l.link===t);if(o!==-1){const l=e[o+n];return(l==null?void 0:l.link)?l:null}for(const l of e)if(l.children){const s=H(l.children,t,n);if(s)return s}return null};var _e=d({name:"PageNav",setup(){const e=m(),t=(()=>{const s=be(Te);if(!s)throw new Error("useSidebarItems() is called without provider.");return s})(),n=F(),o=i(()=>{const s=re(e.value.prev);return s!==!1?s:H(t.value,n.path,-1)}),l=i(()=>{const s=re(e.value.next);return s!==!1?s:H(t.value,n.path,1)});return()=>o.value||l.value?a("nav",{class:"page-nav"},a("p",{class:"inner"},[o.value?a("span",{class:"prev"},[a(oe),a(w,{config:o.value})]):null,l.value?a("span",{class:"next"},[a(w,{config:l.value}),a(ne)]):null])):null}}),Ce=d({name:"NormalPage",setup(e,{slots:t}){const n=ee(),o=i(()=>({titleIcon:!0,titleIconPrefix:n.value.iconPrefix,items:n.value.pageInfo,categoryPath:"/category/$category/",tagPath:"/tag/$tag/",defaultAuthor:n.value.author,hint:n.value.pure!==!1}));return()=>{var l,s;return a("main",{class:"page"},[(l=t.top)==null?void 0:l.call(t),a(K("PageInfo"),b({},o.value)),a(T),a(Fe),a(_e),a(K("PageComment")),(s=t.bottom)==null?void 0:s.call(t)])}}}),Ye=d({name:"Layout",setup(){const e=G(),t=m();return()=>a(je,{},()=>t.value.home?a(qe):a(He,{},()=>a(Ce,{key:e.value.path})))}});export{Ye as default};
