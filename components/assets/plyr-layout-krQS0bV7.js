var te=Object.defineProperty;var Q=e=>{throw TypeError(e)};var ae=(e,t,a)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var F=(e,t,a)=>ae(e,typeof t!="symbol"?t+"":t,a),G=(e,t,a)=>t.has(e)||Q("Cannot "+a);var h=(e,t,a)=>(G(e,t,"read from private field"),a?a.call(e):t.get(e)),x=(e,t,a)=>t.has(e)?Q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),V=(e,t,a,n)=>(G(e,t,"write to private field"),n?n.call(e,a):t.set(e,a),a),j=(e,t,a)=>(G(e,t,"access private method"),a);import{C as ne,j as _,p as se,k as M,q as k,z as le,u as re,aO as oe,T as ie,M as ue,_ as pe,i as ce,Q as de,D as me,v as _e,E as ye,U as $e,ax as H,R as K,Z as r}from"./app-Kd9JTTDm.js";import{e as be,g as fe,h as ve,j as ge,i as Te,k as we,l as he,E as ke,n as Me,o as xe,p as Pe,t as Ee,q as Ce,u as Le,v as Be,w as Se,x as Ae,y as Re,z as De,A as Ie,B as Fe,C as Ge,F as Ve,D as qe}from"./vidstack-D_DrbzHZ-BElr8mVT.js";import{L as Oe,x as s}from"./vidstack-CwTj4H1w-Bp4ARBvF.js";import{S as Qe,$ as l,L as je,I as Ne,o as U}from"./vidstack-7xep0lg7-DY7L9Hvt.js";import{MediaPosterElement as He}from"./vidstack-QR8zGkwr-DVhUwgP2.js";const z=le();function o(){return re(z)}const Ke={clickToPlay:!0,clickToFullscreen:!0,controls:["play-large","play","progress","current-time","mute+volume","captions","settings","pip","airplay","fullscreen"],customIcons:!1,displayDuration:!1,download:null,markers:null,invertTime:!0,thumbnails:null,toggleTime:!0,translations:null,seekTime:10,speed:[.5,.75,1,1.25,1.5,1.75,2,4]};var P;class Z extends ne{constructor(){super(...arguments);x(this,P)}onSetup(){V(this,P,_()),se(z,{...this.$props,previewTime:M(0)})}}P=new WeakMap,F(Z,"props",Ke);function Ue(e,t){const{canAirPlay:a,canFullscreen:n,canPictureInPicture:u,controlsHidden:m,currentTime:$,fullscreen:p,hasCaptions:d,isAirPlayConnected:y,paused:f,pictureInPicture:T,playing:B,pointer:S,poster:A,textTrack:R,viewType:c,waiting:g}=t.$state;e.classList.add("plyr"),e.classList.add("plyr--full-ui");const w={"plyr--airplay-active":y,"plyr--airplay-supported":a,"plyr--fullscreen-active":p,"plyr--fullscreen-enabled":n,"plyr--hide-controls":m,"plyr--is-touch":()=>S()==="coarse","plyr--loading":g,"plyr--paused":f,"plyr--pip-active":T,"plyr--pip-enabled":u,"plyr--playing":B,"plyr__poster-enabled":A,"plyr--stopped":()=>f()&&$()===0,"plyr--captions-active":R,"plyr--captions-enabled":d},D=oe();for(const v of Object.keys(w))D.add(k(()=>void e.classList.toggle(v,!!w[v]())));return D.add(k(()=>{const v=`plyr--${c()}`;return e.classList.add(v),()=>e.classList.remove(v)}),k(()=>{var O;const{$provider:v}=t,I=(O=v())==null?void 0:O.type,q=`plyr--${ze(I)?"html5":I}`;return e.classList.toggle(q,!!I),()=>e.classList.remove(q)})),()=>D.empty()}function ze(e){return e==="audio"||e==="video"}class Ze extends je{async loadIcons(){const t=(await pe(async()=>{const{icons:n}=await import("./vidstack-DXxIKXmd-Dge3KT8k.js");return{icons:n}},[])).icons,a={};for(const n of Object.keys(t))a[n]=Ne({name:n,paths:t[n],viewBox:"0 0 18 18"});return a}}function C(e,t){var a;return((a=e())==null?void 0:a[t])??t}function Je(){return et()}function We(){const e=_(),{load:t}=e.$props,{canLoad:a}=e.$state;return ce(()=>t()==="play"&&!a())()?[J(),N()]:[Xe(),Ye(),N(),tt(),$t(),bt()]}function J(){const e=_(),{translations:t}=o(),{title:a}=e.$state,n=l(()=>`${C(t,"Play")}, ${a()}`);return s`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${n}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function Xe(){const{controls:e}=o();return l(()=>e().includes("play-large")?J():null)}function Ye(){const{thumbnails:e,previewTime:t}=o();return s`
    <media-thumbnail
      .src=${l(e)}
      class="plyr__preview-scrubbing"
      time=${l(()=>t())}
    ></media-thumbnail>
  `}function N(){const e=_(),{poster:t}=e.$state,a=l(()=>`background-image: url("${t()}");`);return s`<div class="plyr__poster" style=${a}></div>`}function et(){const e=new Set(["captions","pip","airplay","fullscreen"]),{controls:t}=o(),a=l(()=>t().filter(n=>!e.has(n)).map(W));return s`<div class="plyr__controls">${a}</div>`}function tt(){const{controls:e}=o(),t=l(()=>e().map(W));return s`<div class="plyr__controls">${t}</div>`}function W(e){switch(e){case"airplay":return at();case"captions":return nt();case"current-time":return _t();case"download":return yt();case"duration":return X();case"fast-forward":return pt();case"fullscreen":return st();case"mute":case"volume":case"mute+volume":return dt(e);case"pip":return rt();case"play":return ot();case"progress":return ct();case"restart":return it();case"rewind":return ut();case"settings":return ft();default:return null}}function at(){const{translations:e}=o();return s`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${i(e,"AirPlay")}</span>
    </media-airplay-button>
  `}function nt(){const{translations:e}=o(),t=i(e,"Disable captions"),a=i(e,"Enable captions");return s`
    <media-caption-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="captions"
    >
      <slot name="captions-on-icon" data-class="icon--pressed"></slot>
      <slot name="captions-off-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${t}</span>
      <span class="label--not-pressed plyr__tooltip">${a}</span>
    </media-caption-button>
  `}function st(){const{translations:e}=o(),t=i(e,"Enter Fullscreen"),a=i(e,"Exit Fullscreen");return s`
    <media-fullscreen-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="fullscreen"
    >
      <slot name="enter-fullscreen-icon" data-class="icon--pressed"></slot>
      <slot name="exit-fullscreen-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-fullscreen-button>
  `}function lt(){const{translations:e}=o(),t=i(e,"Mute"),a=i(e,"Unmute");return s`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}function rt(){const{translations:e}=o(),t=i(e,"Enter PiP"),a=i(e,"Exit PiP");return s`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}function ot(){const{translations:e}=o(),t=i(e,"Play"),a=i(e,"Pause");return s`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}function it(){const{translations:e}=o(),{remote:t}=_(),a=i(e,"Restart");function n(u){H(u)&&!K(u)||t.seek(0,u)}return s`
    <button
      type="button"
      class="plyr__control"
      data-plyr="restart"
      @pointerup=${n}
      @keydown=${n}
    >
      <slot name="restart-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </button>
  `}function ut(){const{translations:e,seekTime:t}=o(),a=l(()=>`${C(e,"Rewind")} ${t()}s`),n=l(()=>-1*t());return s`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function pt(){const{translations:e,seekTime:t}=o(),a=l(()=>`${C(e,"Forward")} ${t()}s`),n=l(t);return s`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function ct(){let e=_(),{duration:t,viewType:a}=e.$state,{translations:n,markers:u,thumbnails:m,seekTime:$,previewTime:p}=o(),d=i(n,"Seek"),y=M(null),f=l(()=>{const c=y();return c?s`<span class="plyr__progress__marker-label">${U(c.label)}<br /></span>`:null});function T(c){p.set(c.detail)}function B(){y.set(this)}function S(){y.set(null)}function A(){const c=m(),g=l(()=>a()==="audio");return c?s`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${g}>
            <media-slider-thumbnail .src=${c} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${f}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:s`
          <span class="plyr__tooltip">
            ${f}
            <media-slider-value></media-slider-value>
          </span>
        `}function R(){var g;const c=t();return Number.isFinite(c)?(g=u())==null?void 0:g.map(w=>s`
        <span
          class="plyr__progress__marker"
          @mouseenter=${B.bind(w)}
          @mouseleave=${S}
          style=${`left: ${w.time/c*100}%;`}
        ></span>
      `):null}return s`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${l($)}
          aria-label=${d}
          @media-seeking-request=${T}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${l(A)}${l(R)}
        </media-time-slider>
      </div>
    </div>
  `}function dt(e){return l(()=>{const t=e==="mute"||e==="mute+volume",a=e==="volume"||e==="mute+volume";return s`
      <div class="plyr__controls__item plyr__volume">
        ${[t?lt():null,a?mt():null]}
      </div>
    `})}function mt(){const{translations:e}=o(),t=i(e,"Volume");return s`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${t}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function _t(){const e=_(),{translations:t,invertTime:a,toggleTime:n,displayDuration:u}=o(),m=M(de(a));function $(d){!n()||u()||H(d)&&!K(d)||m.set(y=>!y)}function p(){return l(()=>u()?X():null)}return l(()=>{const{streamType:d}=e.$state,y=i(t,"LIVE"),f=i(t,"Current time"),T=l(()=>!u()&&m());return d()==="live"||d()==="ll-live"?s`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${y}</span>
          </media-live-button>
        `:s`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${f}
            ?remainder=${T}
            @pointerup=${$}
            @keydown=${$}
          ></media-time>
          ${p()}
        `})}function X(){const{translations:e}=o(),t=i(e,"Duration");return s`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${t}
    ></media-time>
  `}function yt(){return l(()=>{const e=_(),{translations:t,download:a}=o(),{title:n,source:u}=e.$state,m=u(),$=a(),p=me({title:n(),src:m,download:$}),d=i(t,"Download");return _e(p==null?void 0:p.url)?s`
          <a
            class="plyr__controls__item plyr__control"
            href=${ye(p.url,{download:p.name})}
            download=${p.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${d}</span>
          </a>
        `:null})}function $t(){return l(()=>{const{clickToPlay:e,clickToFullscreen:t}=o();return[e()?s`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,t()?s`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})}function bt(){const e=_(),t=M(void 0),a=l(()=>{var n;return U((n=t())==null?void 0:n.text)});return k(()=>{const n=e.$state.textTrack();if(!n)return;function u(){t.set(n==null?void 0:n.activeCues[0])}return u(),$e(n,"cue-change",u)}),s`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${a}</span>
    </div>
  `}function ft(){const{translations:e}=o(),t=i(e,"Settings");return s`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${t}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[gt(),kt(),xt(),wt()]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}function L({label:e,children:t}){const a=M(!1);return s`
    <media-menu @open=${()=>a.set(!0)} @close=${()=>a.set(!1)}>
      ${vt({label:e,open:a})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function vt({open:e,label:t}){const{translations:a}=o(),n=l(()=>`plyr__control plyr__control--${e()?"back":"forward"}`);function u(){const m=i(a,"Go back to previous menu");return l(()=>e()?s`<span class="plyr__sr-only">${m}</span>`:null)}return s`
    <media-menu-button class=${n} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${Et(e)}>
        ${i(a,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${u()}
    </media-menu-button>
  `}function gt(){return L({label:"Audio",children:Tt()})}function Tt(){const{translations:e}=o();return s`
    <media-audio-radio-group empty-label=${i(e,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function wt(){return L({label:"Speed",children:ht()})}function ht(){const{translations:e,speed:t}=o();return s`
    <media-speed-radio-group .rates=${t} normal-label=${i(e,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function kt(){return L({label:"Captions",children:Mt()})}function Mt(){const{translations:e}=o();return s`
    <media-captions-radio-group off-label=${i(e,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function xt(){return L({label:"Quality",children:Pt()})}function Pt(){const{translations:e}=o();return s`
    <media-quality-radio-group auto-label=${i(e,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function Et(e){return l(()=>e()?"true":"false")}function i(e,t){return l(()=>C(e,t))}var b,E,ee;class Y extends ie(Oe,Z){constructor(){super(...arguments);x(this,E);x(this,b)}onSetup(){this.forwardKeepAlive=!1,V(this,b,_())}onConnect(){var a;(a=h(this,b).player.el)==null||a.setAttribute("data-layout","plyr"),ue(()=>{var n;return(n=h(this,b).player.el)==null?void 0:n.removeAttribute("data-layout")}),Ue(this,h(this,b)),k(()=>{this.$props.customIcons()?new Qe([this]).connect():new Ze([this]).connect()})}render(){return l(j(this,E,ee).bind(this))}}b=new WeakMap,E=new WeakSet,ee=function(){const{viewType:a}=h(this,b).$state;return a()==="audio"?Je():a()==="video"?We():null},F(Y,"tagName","media-plyr-layout");r(Y);r(He);r(be);r(fe);r(ve);r(ge);r(Te);r(we);r(he);r(ke);r(Me);r(xe);r(Pe);r(Ee);r(Ce);r(Le);r(Be);r(Se);r(Ae);r(Re);r(De);r(Ie);r(Fe);r(Ge);r(Ve);r(qe);
