const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-BEi14iNw2-jD0WhsWF.js","assets/vidstack-D9mvYVIz-DzTu1mqH.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-Dec5VI56.js";import{Ct as t,Et as n,Ft as r,G as i,It as a,K as o,Lt as s,Mt as c,Nt as l,Ot as u,St as d,Tt as f,W as p,X as m,Z as h,at as g,bt as _,jt as v,kt as y,lt as ee,mt as b,n as x,nt as S,o as te,ot as ne,rt as re,wt as ie,yt as ae}from"./vidstack-D9mvYVIz-DzTu1mqH.js";import{n as oe,t as se}from"./vidstack-mvRkf9tF-Drs7Wf_4.js";import{n as ce}from"./vidstack-B1Z6f96t-BqZFY0KY.js";import{A as C,C as le,E as ue,T as de,g as fe,j as w,o as pe,u as me,w as he}from"./app-BY0MP6x9.js";import{n as T,o as E,t as ge}from"./vidstack-DM8v4Khu-B-ZM-eGf.js";import{c as _e,i as ve,l as ye,n as be,o as xe,r as Se,s as Ce,t as D,u as we}from"./vidstack-B1rlsgcu-CB0F6s7_.js";var O=new WeakMap,k=_e(class extends Ce{render(e){return T}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=e.options?.host,this.ot(this.lt=e.element)),T}ot(e){if(typeof this.G==`function`){let t=this.dt??globalThis,n=O.get(t);n===void 0&&(n=new WeakMap,O.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){return typeof this.G==`function`?O.get(this.dt??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Te=o();function A(){return s(Te)}var Ee={colorScheme:`system`,download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:`bottom`,noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1},De=class extends x{static props=Ee;#e;#t=i(()=>{let e=this.$props.when();return this.#r(e)});#n=i(()=>{let e=this.$props.smallWhen();return this.#r(e)});get isMatch(){return this.#t()}get isSmallLayout(){return this.#n()}onSetup(){this.#e=C(),this.setAttributes({"data-match":this.#t,"data-sm":()=>this.#n()?``:null,"data-lg":()=>this.#n()?null:``,"data-size":()=>this.#n()?`sm`:`lg`,"data-no-scrub-gesture":this.$props.noScrubGesture}),n(Te,{...this.$props,when:this.#t,smallWhen:this.#n,userPrefersAnnouncements:v(!0),userPrefersKeyboardAnimations:v(!0),menuPortal:v(null)})}onAttach(e){ue(e,this.$props.colorScheme)}#r(e){return e!==`never`&&(re(e)?e:i(()=>e(this.#e.player.state))())}},Oe=De.prototype;f(Oe,`isMatch`),f(Oe,`isSmallLayout`);function ke(e,t){h(()=>{let{player:n}=C(),r=n.el;return r&&y(r,`data-layout`,t()&&e),()=>r?.removeAttribute(`data-layout`)})}function j(e,t){return e()?.[t]??t}function M(){return D(()=>{let{translations:e,userPrefersAnnouncements:t}=A();return t()?E`<media-announcer .translations=${D(e)}></media-announcer>`:null})}function N(e,t=``){return E`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:``}`}
  ></slot>`}function P(e){return e.map(e=>N(e))}function F(e,t){return D(()=>j(e,t))}function I({tooltip:e}){let{translations:t}=A(),{remotePlaybackState:n}=w(),r=D(()=>`${j(t,`AirPlay`)} ${a(n())}`),i=F(t,`AirPlay`);return E`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${r}>
          ${N(`airplay`)}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ae({tooltip:e}){let{translations:t}=A(),{remotePlaybackState:n}=w(),r=D(()=>`${j(t,`Google Cast`)} ${a(n())}`),i=F(t,`Google Cast`);return E`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${r}>
          ${N(`google-cast`)}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function L({tooltip:e}){let{translations:t}=A(),n=F(t,`Play`),r=F(t,`Pause`);return E`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${F(t,`Play`)}
        >
          ${P([`play`,`pause`,`replay`])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${n}</span>
        <span class="vds-pause-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function je({tooltip:e,ref:t=d}){let{translations:n}=A(),r=F(n,`Mute`),i=F(n,`Unmute`);return E`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${F(n,`Mute`)}
          ${k(t)}
        >
          ${P([`mute`,`volume-low`,`volume-high`])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${i}</span>
        <span class="vds-unmute-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function R({tooltip:e}){let{translations:t}=A(),n=F(t,`Closed-Captions On`),r=F(t,`Closed-Captions Off`);return E`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${F(t,`Captions`)}
        >
          ${P([`cc-on`,`cc-off`])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${r}</span>
        <span class="vds-cc-off-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Me(){let{translations:e}=A(),t=F(e,`Enter PiP`),n=F(e,`Exit PiP`);return E`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${F(e,`PiP`)}
        >
          ${P([`pip-enter`,`pip-exit`])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ne({tooltip:e}){let{translations:t}=A(),n=F(t,`Enter Fullscreen`),r=F(t,`Exit Fullscreen`);return E`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${F(t,`Fullscreen`)}
        >
          ${P([`fs-enter`,`fs-exit`])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${n}</span>
        <span class="vds-fs-exit-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Pe({backward:e,tooltip:t}){let{translations:n,seekStep:r}=A(),i=e?`Seek Backward`:`Seek Forward`,a=F(n,i);return E`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${D(()=>(e?-1:1)*r())}
          aria-label=${a}
        >
          ${N(e?`seek-backward`:`seek-forward`)}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${F(n,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function Fe(){let{translations:e}=A(),{live:t}=w(),n=F(e,`Skip To Live`),r=F(e,`LIVE`);return t()?E`
        <media-live-button class="vds-live-button" aria-label=${n}>
          <span class="vds-live-button-text">${r}</span>
        </media-live-button>
      `:null}function z(){return D(()=>{let{download:e,translations:t}=A(),n=e();if(ee(n))return null;let{source:r,title:i}=w(),a=r(),o=oe({title:i(),src:a,download:n});return b(o?.url)?E`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${F(t,`Download`)}
                href=${se(o.url,{download:o.name})}
                download=${o.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${F(t,`Download`)}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function B(){let{translations:e}=A();return E`
    <media-captions
      class="vds-captions"
      .exampleText=${F(e,`Captions look like this`)}
    ></media-captions>
  `}function V(){return E`<div class="vds-controls-spacer"></div>`}function Ie(e,t){return E`
    <media-menu-portal .container=${D(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function Le(e,t,n,r){let i=b(t)?document.querySelector(t):t;i||=e?.closest(`dialog`),i||=document.body;let a=document.createElement(`div`);a.style.display=`contents`,a.classList.add(n),i.append(a),h(()=>{if(!a)return;let{viewType:e}=w(),t=r();y(a,`data-view-type`,e()),y(a,`data-sm`,t),y(a,`data-lg`,!t),y(a,`data-size`,t?`sm`:`lg`)});let{colorScheme:o}=A();return ue(a,o),a}function Re({placement:e,tooltip:t,portal:n}){let{textTracks:a}=C(),{viewType:o,seekableStart:s,seekableEnd:c}=w(),{translations:l,thumbnails:u,menuPortal:d,noModal:f,menuGroup:p,smallWhen:m}=A();if(i(()=>{let e=s(),t=c(),n=v(null);return ce(a,`chapters`,n.set),!n()?.cues.filter(n=>n.startTime<=t&&n.endTime>=e)?.length})())return null;let h=i(()=>f()?r(e):m()?null:r(e)),_=i(()=>!m()&&p()===`bottom`&&o()===`video`?26:0),y=v(!1);function ee(){y.set(!0)}function b(){y.set(!1)}let x=E`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${D(h)}
      offset=${D(_)}
    >
      ${D(()=>y()?E`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${D(u)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `:null)}
    </media-menu-items>
  `;return E`
    <media-menu class="vds-chapters-menu vds-menu" @open=${ee} @close=${b}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${F(l,`Chapters`)}
          >
            ${N(`menu-chapters`)}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${g(t)?D(t):t}
        >
          ${F(l,`Chapters`)}
        </media-tooltip-content>
      </media-tooltip>
      ${n?Ie(d,x):x}
    </media-menu>
  `}function H(e){let{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g,` `)}var U={type:`color`},ze={type:`radio`,values:{"Monospaced Serif":`mono-serif`,"Proportional Serif":`pro-serif`,"Monospaced Sans-Serif":`mono-sans`,"Proportional Sans-Serif":`pro-sans`,Casual:`casual`,Cursive:`cursive`,"Small Capitals":`capitals`}},Be={type:`slider`,min:0,max:400,step:25,upIcon:null,downIcon:null},Ve={type:`slider`,min:0,max:100,step:5,upIcon:null,downIcon:null},He={type:`radio`,values:[`None`,`Drop Shadow`,`Raised`,`Depressed`,`Outline`]},W={fontFamily:`pro-sans`,fontSize:`100%`,textColor:`#ffffff`,textOpacity:`100%`,textShadow:`none`,textBg:`#000000`,textBgOpacity:`100%`,displayBg:`#000000`,displayBgOpacity:`0%`},G=Object.keys(W).reduce((e,t)=>({...e,[t]:v(W[t])}),{});for(let e of Object.keys(G)){let t=localStorage.getItem(`vds-player:${p(e)}`);b(t)&&G[e].set(t)}function Ue(){for(let e of Object.keys(G)){let t=W[e];G[e].set(t)}}var We=!1,K=new Set;function Ge(){let{player:e}=C();K.add(e),Ke(e),t(()=>K.delete(e)),We||=(u(()=>{for(let e of ae(G)){let t=G[e],n=W[e],r=`vds-player:${p(e)}`;h(()=>{let i=t(),a=i===n;for(let t of K)qe(t,e,i);a?localStorage.removeItem(r):localStorage.setItem(r,i)})}},null),!0)}function Ke(e){for(let t of ae(G))qe(e,t,G[t]())}function qe(e,t,n){let r=W[t],i=`--media-user-${p(t)}`,a=n===r?null:Je(t,n);if(t===`fontFamily`){let t=n===`capitals`?`small-caps`:null;e.el?.style.setProperty(`--media-user-font-variant`,t)}e.el?.style.setProperty(i,a)}function Je(e,t){switch(e){case`fontFamily`:return Xe(t);case`fontSize`:case`textOpacity`:case`textBgOpacity`:case`displayBgOpacity`:return Ye(t);case`textColor`:return`rgb(${H(t)} / var(--media-user-text-opacity, 1))`;case`textShadow`:return Ze(t);case`textBg`:return`rgb(${H(t)} / var(--media-user-text-bg-opacity, 1))`;case`displayBg`:return`rgb(${H(t)} / var(--media-user-display-bg-opacity, 1))`}}function Ye(e){return(parseInt(e)/100).toString()}function Xe(e){switch(e){case`mono-serif`:return`"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace`;case`mono-sans`:return`"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace`;case`pro-sans`:return`Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif`;case`casual`:return`"Comic Sans MS", Impact, Handlee, fantasy`;case`cursive`:return`"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive`;case`capitals`:return`"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps`;default:return`"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif`}}function Ze(e){switch(e){case`drop shadow`:return`rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px`;case`raised`:return`rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px`;case`depressed`:return`rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px`;case`outline`:return`rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px`;default:return``}}var Qe=0;function q({label:e=``,value:t=``,children:n}){if(!e)return E`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${n}</div>
      </div>
    `;let r=`vds-menu-section-${++Qe}`;return E`
    <section class="vds-menu-section" role="group" aria-labelledby=${r}>
      <div class="vds-menu-section-title">
        <header id=${r}>${e}</header>
        ${t?E`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${n}</div>
    </section>
  `}function J({label:e,children:t}){return E`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function Y({label:e,icon:t,hint:n}){return E`
    <media-menu-button class="vds-menu-item">
      ${N(`menu-arrow-left`,`vds-menu-close-icon`)}
      ${t?N(t,`vds-menu-item-icon`):null}
      <span class="vds-menu-item-label">${D(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${n?D(n):null} </span>
      ${N(`menu-arrow-right`,`vds-menu-open-icon`)}
    </media-menu-button>
  `}function $e({value:e=null,options:t,hideLabel:n=!1,children:r=null,onChange:i=null}){function a(e){let{value:t,label:i}=e;return E`
      <media-radio class="vds-radio" value=${t}>
        ${N(`menu-radio-check`)}
        ${n?null:E`
              <span class="vds-radio-label" data-part="label">
                ${b(i)?i:D(i)}
              </span>
            `}
        ${g(r)?r(e):r}
      </media-radio>
    `}return E`
    <media-radio-group
      class="vds-radio-group"
      value=${b(e)?e:e?D(e):``}
      @change=${i}
    >
      ${S(t)?t.map(a):D(()=>t().map(a))}
    </media-radio-group>
  `}function et(e){return S(e)?e.map(e=>({label:e,value:e.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function X(){return E`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function tt(){return E`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function nt({label:e=null,value:t=null,upIcon:n=``,downIcon:r=``,children:i,isMin:a,isMax:o}){let s=e||t,c=[r?N(r,`down`):null,i,n?N(n,`up`):null];return E`
    <div
      class=${`vds-menu-item vds-menu-slider-item${s?` group`:``}`}
      data-min=${D(()=>a()?``:null)}
      data-max=${D(()=>o()?``:null)}
    >
      ${s?E`
            <div class="vds-menu-slider-title">
              ${[e?E`<div>${e}</div>`:null,t?E`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}var rt={...Be,upIcon:`menu-opacity-up`,downIcon:`menu-opacity-down`},it={...Ve,upIcon:`menu-opacity-up`,downIcon:`menu-opacity-down`};function at(){return D(()=>{let{hasCaptions:e}=w(),{translations:t}=A();return e()?E`
      <media-menu class="vds-font-menu vds-menu">
        ${Y({label:()=>j(t,`Caption Styles`)})}
        <media-menu-items class="vds-menu-items">
          ${[q({label:F(t,`Font`),children:[ot(),st()]}),q({label:F(t,`Text`),children:[ct(),ut(),lt()]}),q({label:F(t,`Text Background`),children:[dt(),ft()]}),q({label:F(t,`Display Background`),children:[pt(),mt()]}),q({children:[ht()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function ot(){return Z({label:`Family`,option:ze,type:`fontFamily`})}function st(){return Z({label:`Size`,option:rt,type:`fontSize`})}function ct(){return Z({label:`Color`,option:U,type:`textColor`})}function lt(){return Z({label:`Opacity`,option:it,type:`textOpacity`})}function ut(){return Z({label:`Shadow`,option:He,type:`textShadow`})}function dt(){return Z({label:`Color`,option:U,type:`textBg`})}function ft(){return Z({label:`Opacity`,option:it,type:`textBgOpacity`})}function pt(){return Z({label:`Color`,option:U,type:`displayBg`})}function mt(){return Z({label:`Opacity`,option:it,type:`displayBgOpacity`})}function ht(){let{translations:e}=A();return E`
    <button class="vds-menu-item" role="menuitem" @click=${Ue}>
      <span class="vds-menu-item-label">${D(()=>j(e,`Reset`))}</span>
    </button>
  `}function Z({label:e,option:t,type:n}){let{player:r}=C(),{translations:i}=A(),a=G[n],o=()=>j(i,e);function s(){c(),r.dispatchEvent(new Event(`vds-font-change`))}if(t.type===`color`){function e(e){a.set(e.target.value),s()}return J({label:D(o),children:E`
        <input
          class="vds-color-picker"
          type="color"
          .value=${D(a)}
          @input=${e}
        />
      `})}if(t.type===`slider`){let{min:e,max:n,step:r,upIcon:i,downIcon:c}=t;function l(e){a.set(e.detail+`%`),s()}return nt({label:D(o),value:D(a),upIcon:i,downIcon:c,isMin:()=>a()===e+`%`,isMax:()=>a()===n+`%`,children:E`
        <media-slider
          class="vds-slider"
          min=${e}
          max=${n}
          step=${r}
          key-step=${r}
          .value=${D(()=>parseInt(a()))}
          aria-label=${D(o)}
          @value-change=${l}
          @drag-value-change=${l}
        >
          ${X()}${tt()}
        </media-slider>
      `})}let l=et(t.values);return E`
    <media-menu class=${`vds-${p(n)}-menu vds-menu`}>
      ${Y({label:o,hint:()=>{let e=a(),t=l.find(t=>t.value===e)?.label||``;return j(i,b(t)?t:t())}})}
      <media-menu-items class="vds-menu-items">
        ${$e({value:a,options:l,onChange({detail:e}){a.set(e),s()}})}
      </media-menu-items>
    </media-menu>
  `}function gt({label:e,checked:t,defaultChecked:n=!1,storageKey:r,onChange:i}){let{translations:a}=A(),o=v(!!((r?localStorage.getItem(r):null)??n)),s=v(!1),c=D(pe(o)),l=F(a,e);r&&i(ie(o)),t&&h(()=>void o.set(t()));function u(e){e?.button!==1&&(o.set(e=>!e),r&&localStorage.setItem(r,o()?`1`:``),i(o(),e),s.set(!1))}function d(e){ne(e)&&u()}function f(e){e.button===0&&s.set(!0)}return E`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${l}
      aria-checked=${c}
      data-active=${D(()=>s()?``:null)}
      @pointerup=${u}
      @pointerdown=${f}
      @keydown=${d}
    ></div>
  `}function _t(){return D(()=>{let{translations:e}=A();return E`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${Y({label:()=>j(e,`Accessibility`),icon:`menu-accessibility`})}
        <media-menu-items class="vds-menu-items">
          ${[q({children:[vt(),yt()]}),q({children:[at()]})]}
        </media-menu-items>
      </media-menu>
    `})}function vt(){let{userPrefersAnnouncements:e,translations:t}=A(),n=`Announcements`;return J({label:F(t,n),children:gt({label:n,storageKey:`vds-player::announcements`,onChange(t){e.set(t)}})})}function yt(){return D(()=>{let{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:n}=A(),{viewType:r}=w();if(i(()=>r()!==`video`||n())())return null;let a=`Keyboard Animations`;return J({label:F(e,a),children:gt({label:a,defaultChecked:!0,storageKey:`vds-player::keyboard-animations`,onChange(e){t.set(e)}})})})}function bt(){return D(()=>{let{noAudioGain:e,translations:t}=A(),{audioTrack:n,audioTracks:r,canSetAudioGain:a}=w();return i(()=>!(a()&&!e())&&r().length<=1)()?null:E`
      <media-menu class="vds-audio-menu vds-menu">
        ${Y({label:()=>j(t,`Audio`),icon:`menu-audio`,hint:()=>n()?.label??``})}
        <media-menu-items class="vds-menu-items">
          ${[xt(),St()]}
        </media-menu-items>
      </media-menu>
    `})}function xt(){return D(()=>{let{translations:e}=A(),{audioTracks:t}=w(),n=F(e,`Default`);return i(()=>t().length<=1)()?null:q({children:E`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${Y({label:()=>j(e,`Track`)})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${n}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})})}function St(){return D(()=>{let{noAudioGain:e,translations:t}=A(),{canSetAudioGain:n}=w();if(i(()=>!n()||e())())return null;let{audioGain:r}=w();return q({label:F(t,`Boost`),value:D(()=>Math.round(((r()??1)-1)*100)+`%`),children:[nt({upIcon:`menu-audio-boost-up`,downIcon:`menu-audio-boost-down`,children:Ct(),isMin:()=>((r()??1)-1)*100<=wt(),isMax:()=>((r()??1)-1)*100===Tt()})]})})}function Ct(){let{translations:e}=A(),t=F(e,`Boost`),n=wt,r=Tt,i=Et;return E`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${D(n)}
      max=${D(r)}
      step=${D(i)}
      key-step=${D(i)}
    >
      ${X()}${tt()}
    </media-audio-gain-slider>
  `}function wt(){let{audioGains:e}=A(),t=e();return S(t)?t[0]??0:t.min}function Tt(){let{audioGains:e}=A(),t=e();return S(t)?t[t.length-1]??300:t.max}function Et(){let{audioGains:e}=A(),t=e();return S(t)?t[1]-t[0]||25:t.step}function Dt(){return D(()=>{let{translations:e}=A(),{hasCaptions:t}=w(),n=F(e,`Off`);return t()?E`
      <media-menu class="vds-captions-menu vds-menu">
        ${Y({label:()=>j(e,`Captions`),icon:`menu-captions`})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${n}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null})}function Ot(){return D(()=>{let{hideQualityBitrate:e,translations:t}=A(),{canSetQuality:n,qualities:r}=w();if(!n()||r().length<=1)return null;let i=F(t,`Auto`);return E`
      <media-menu class="vds-quality-menu vds-menu">
        ${Y({label:()=>j(t,`Quality`),icon:`menu-quality-up`})}
        <media-menu-items class="vds-menu-items">
          <media-quality-radio-group
            class="vds-quality-radio-group vds-radio-group"
            auto-label=${i}
            ?hide-bitrate=${D(e)}
          >
            <template>
              <media-radio class="vds-quality-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
                <span class="vds-radio-hint" data-part="bitrate"></span>
              </media-radio>
            </template>
          </media-quality-radio-group>
        </media-menu-items>
      </media-menu>
    `})}function kt(){return D(()=>{let{translations:e}=A(),{canSetPlaybackRate:t,playbackRate:n}=w();return t()?E`
      <media-menu class="vds-speed-menu vds-menu">
        ${Y({label:()=>j(e,`Speed`),icon:`menu-speed-up`,hint:()=>n()===1?j(e,`Normal`):n()+`x`})}
        <media-menu-items class="vds-menu-items">
          ${q({label:F(e,`Speed`),value:D(()=>n()===1?j(e,`Normal`):n()+`x`),children:nt({upIcon:`menu-font-size-up`,downIcon:`menu-font-size-down`,children:Nt(),isMin:()=>n()===At(),isMax:()=>n()===jt()})})}
        </media-menu-items>
      </media-menu>
    `:null})}function At(){let{playbackRates:e}=A(),t=e();return S(t)?t[0]??0:t.min}function jt(){let{playbackRates:e}=A(),t=e();return S(t)?t[t.length-1]??2:t.max}function Mt(){let{playbackRates:e}=A(),t=e();return S(t)?t[1]-t[0]||.25:t.step}function Nt(){let{translations:e}=A(),t=F(e,`Speed`),n=At,r=jt,i=Mt;return E`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${D(n)}
      max=${D(r)}
      step=${D(i)}
      key-step=${D(i)}
    >
      ${X()}${tt()}
    </media-speed-slider>
  `}function Pt({placement:e,portal:t,tooltip:n}){return D(()=>{let{viewType:a}=w(),{translations:o,menuPortal:s,noModal:c,menuGroup:l,smallWhen:u}=A(),d=i(()=>c()?r(e):u()?null:r(e)),f=i(()=>!u()&&l()===`bottom`&&a()===`video`?26:0),p=v(!1);Ge();function m(){p.set(!0)}function h(){p.set(!1)}let _=E`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${D(d)}
        offset=${D(f)}
      >
        ${D(()=>p()?[kt(),Ot(),_t(),bt(),Dt()]:null)}
      </media-menu-items>
    `;return E`
      <media-menu class="vds-settings-menu vds-menu" @open=${m} @close=${h}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${F(o,`Settings`)}
            >
              ${N(`menu-settings`,`vds-rotate-icon`)}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${g(n)?D(n):n}
          >
            ${F(o,`Settings`)}
          </media-tooltip-content>
        </media-tooltip>
        ${t?Ie(s,_):_}
      </media-menu>
    `})}function Ft({orientation:e,tooltip:t}){return D(()=>{let{pointer:n,muted:r,canSetVolume:i}=w();if(n()===`coarse`&&!r())return null;if(!i())return je({tooltip:t});let a=v(void 0);return E`
      <div class="vds-volume" ?data-active=${D(le(a))} ${k(a.set)}>
        ${je({tooltip:t})}
        <div class="vds-volume-popup">${It({orientation:e})}</div>
      </div>
    `})}function It({orientation:e}={}){let{translations:t}=A();return E`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${F(t,`Volume`)}
      orientation=${xe(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function Lt(){let e=v(void 0),t=v(0),{thumbnails:n,translations:r,sliderChaptersMinWidth:i,disableTimeSlider:a,seekStep:o,noScrubGesture:s}=A(),c=F(r,`Seek`),l=D(a),u=D(()=>t()<i()),d=D(n);return he(e,()=>{let n=e();n&&t.set(n.clientWidth)}),E`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${D(o)}
      ?disabled=${l}
      ?no-swipe-gesture=${D(s)}
      ${k(e.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${u}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${d}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function Rt(){return E`
    <div class="vds-time-group">
      ${D(()=>{let{duration:e}=w();return e()?[E`<media-time class="vds-time" type="current"></media-time>`,E`<div class="vds-time-divider">/</div>`,E`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function zt(){return D(()=>{let{live:e,duration:t}=w();return e()?Fe():t()?E`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function Bt(){return D(()=>{let{live:e}=w();return e()?Fe():Rt()})}function Vt(){return D(()=>{let{textTracks:e}=C(),{title:t,started:n}=w(),r=v(null);return ce(e,`chapters`,r.set),r()&&(n()||!t())?Ht():E`<media-title class="vds-chapter-title"></media-title>`})}function Ht(){return E`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}var Ut=class extends Se{async loadIcons(){let t=(await e(async()=>{let{icons:e}=await import(`./vidstack-BEi14iNw2-jD0WhsWF.js`);return{icons:e}},__vite__mapDeps([0,1]))).icons,n={};for(let e of Object.keys(t))n[e]=be({name:e,paths:t[e]});return n}},Wt=class extends De{static props={...super.props,when:({viewType:e})=>e===`audio`,smallWhen:({width:e})=>e<576}};function Gt(){return[M(),B(),E`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Pe({backward:!0,tooltip:`top start`}),L({tooltip:`top`}),Pe({tooltip:`top`}),Kt(),Lt(),zt(),Ft({orientation:`vertical`,tooltip:`top`}),R({tooltip:`top`}),z(),I({tooltip:`top`}),qt()]}
        </media-controls-group>
      </media-controls>
    `]}function Kt(){return D(()=>{let e=v(void 0),t=v(!1),n=C(),{title:r,started:i,currentTime:a,ended:o}=w(),{translations:s}=A(),c=de(e),u=()=>i()||a()>0,d=()=>`${j(s,o()?`Replay`:u()?`Continue`:`Play`)}: ${r()}`;h(()=>{c()&&document.activeElement===document.body&&n.player.el?.focus({preventScroll:!0})});function f(){let n=e(),r=!!n&&!c()&&n.clientWidth<n.children[0].clientWidth;n&&l(n,`vds-marquee`,r),t.set(r)}function p(){return E`
        <span class="vds-title-text">
          ${D(d)}${D(()=>u()?Ht():null)}
        </span>
      `}return he(e,f),r()?E`
          <span class="vds-title" title=${D(d)} ${k(e.set)}>
            ${[p(),D(()=>t()&&!c()?p():null)]}
          </span>
        `:V()})}function qt(){let e=`top end`;return[Re({tooltip:`top`,placement:e,portal:!0}),Pt({tooltip:`top end`,placement:e,portal:!0})]}var Jt=class extends te(ge,Wt){static tagName=`media-audio-layout`;static attrs={smallWhen:{converter(e){return e!==`never`&&!!e}}};#e;#t=v(!1);onSetup(){this.forwardKeepAlive=!1,this.#e=C(),this.#r(),this.#a()}onConnect(){this.#r(),ke(`audio`,()=>this.isMatch),this.#i()}render(){return D(this.#n.bind(this))}#n(){return this.isMatch?Gt():null}#r(){this.classList.add(`vds-audio-layout`)}#i(){let{menuPortal:e}=A();h(()=>{if(!this.isMatch)return;let t=Le(this,this.menuContainer,`vds-audio-layout`,()=>this.isSmallLayout),n=t?[this,t]:[this];return(this.$props.customIcons()?new ve(n):new Ut(n)).connect(),e.set(t),()=>{t.remove(),e.set(null)}})}#a(){let{pointer:e}=this.#e.$state;h(()=>{e()===`coarse`&&h(this.#o.bind(this))})}#o(){if(!this.#t()){_(this,`pointerdown`,this.#s.bind(this),{capture:!0});return}_(this,`pointerdown`,e=>e.stopPropagation()),_(window,`pointerdown`,this.#c.bind(this))}#s(e){let{target:t}=e;fe(t)&&t.closest(`.vds-time-slider`)&&(e.stopImmediatePropagation(),this.setAttribute(`data-scrubbing`,``),this.#t.set(!0))}#c(){this.#t.set(!1),this.removeAttribute(`data-scrubbing`)}},Yt=_e(class extends ye{constructor(){super(...arguments),this.key=T}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(we(e),this.key=t),n}}),Xt=class extends De{static props={...super.props,when:({viewType:e})=>e===`video`,smallWhen:({width:e,height:t})=>e<576||t<380}};function Zt(){return D(()=>{let e=C(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:n}=A();if(i(()=>t()||!n())())return null;let r=v(!1),{lastKeyboardAction:a}=e.$state;h(()=>{r.set(!!a());let e=setTimeout(()=>r.set(!1),500);return()=>{r.set(!1),window.clearTimeout(e)}});let o=i(()=>{let e=a()?.action;return e&&r()?p(e):null}),s=i(()=>`vds-kb-action${r()?``:` hidden`}`),c=i(Qt),l=i(()=>{let e=en();return e?me(e):null});function u(){let e=l();return e?E`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${e}</div>
        </div>
      `:null}return E`
      <div class=${D(s)} data-action=${D(o)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${D(c)}</div>
        </div>
        ${D(()=>Yt(a(),u()))}
      </div>
    `})}function Qt(){let{$state:e}=C(),t=e.lastKeyboardAction()?.action,n=e.audioGain()??1;switch(t){case`toggleMuted`:return e.muted()?`0%`:$t(e.volume(),n);case`volumeUp`:case`volumeDown`:return $t(e.volume(),n);default:return``}}function $t(e,t){return`${Math.round(e*t*100)}%`}function en(){let{$state:e}=C();switch(e.lastKeyboardAction()?.action){case`togglePaused`:return e.paused()?`kb-pause-icon`:`kb-play-icon`;case`toggleMuted`:return e.muted()||e.volume()===0?`kb-mute-icon`:e.volume()>=.5?`kb-volume-up-icon`:`kb-volume-down-icon`;case`toggleFullscreen`:return`kb-fs-${e.fullscreen()?`enter`:`exit`}-icon`;case`togglePictureInPicture`:return`kb-pip-${e.pictureInPicture()?`enter`:`exit`}-icon`;case`toggleCaptions`:return e.hasCaptions()?`kb-cc-${e.textTrack()?`on`:`off`}-icon`:null;case`volumeUp`:return`kb-volume-up-icon`;case`volumeDown`:return`kb-volume-down-icon`;case`seekForward`:return`kb-seek-forward-icon`;case`seekBackward`:return`kb-seek-backward-icon`;default:return null}}function tn(){return[M(),cn(),Q(),Zt(),B(),E`<div class="vds-scrim"></div>`,E`
      <media-controls class="vds-controls">
        ${[rn(),V(),E`<media-controls-group class="vds-controls-group"></media-controls-group>`,V(),E`
            <media-controls-group class="vds-controls-group">
              ${Lt()}
            </media-controls-group>
          `,E`
            <media-controls-group class="vds-controls-group">
              ${[L({tooltip:`top start`}),Ft({orientation:`horizontal`,tooltip:`top`}),Bt(),Vt(),R({tooltip:`top`}),nn(),I({tooltip:`top`}),Ae({tooltip:`top`}),z(),Me(),Ne({tooltip:`top end`})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function nn(){return D(()=>{let{menuGroup:e}=A();return e()===`bottom`?$():null})}function rn(){return E`
    <media-controls-group class="vds-controls-group">
      ${D(()=>{let{menuGroup:e}=A();return e()===`top`?[V(),$()]:null})}
    </media-controls-group>
  `}function an(){return[M(),cn(),Q(),B(),Zt(),E`<div class="vds-scrim"></div>`,E`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[I({tooltip:`top start`}),Ae({tooltip:`bottom start`}),V(),R({tooltip:`bottom`}),z(),$(),Ft({orientation:`vertical`,tooltip:`bottom end`})]}
        </media-controls-group>

        ${V()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[V(),L({tooltip:`top`}),V()]}
        </media-controls-group>

        ${V()}

        <media-controls-group class="vds-controls-group">
          ${[Bt(),Vt(),Ne({tooltip:`top end`})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${Lt()}
        </media-controls-group>
      </media-controls>
    `,sn()]}function on(){return E`
    <div class="vds-load-container">
      ${[Q(),L({tooltip:`top`})]}
    </div>
  `}function sn(){return D(()=>{let{duration:e}=w();return e()===0?null:E`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function Q(){return E`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function $(){let{menuGroup:e,smallWhen:t}=A(),n=()=>e()===`top`||t()?`bottom`:`top`,r=i(()=>`${n()} ${e()===`top`?`end`:`center`}`),a=i(()=>`${n()} end`);return[Re({tooltip:r,placement:a,portal:!0}),Pt({tooltip:r,placement:a,portal:!0})]}function cn(){return D(()=>{let{noGestures:e}=A();return e()?null:E`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `})}var ln=class extends te(ge,Xt){static tagName=`media-video-layout`;static attrs={smallWhen:{converter(e){return e!==`never`&&!!e}}};#e;onSetup(){this.forwardKeepAlive=!1,this.#e=C(),this.#t()}onConnect(){this.#t(),ke(`video`,()=>this.isMatch),this.#n()}render(){return D(this.#r.bind(this))}#t(){this.classList.add(`vds-video-layout`)}#n(){let{menuPortal:e}=A();h(()=>{if(!this.isMatch)return;let t=Le(this,this.menuContainer,`vds-video-layout`,()=>this.isSmallLayout),n=t?[this,t]:[this];return(this.$props.customIcons()?new ve(n):new Ut(n)).connect(),e.set(t),()=>{t.remove(),e.set(null)}})}#r(){let{load:e}=this.#e.$props,{canLoad:t,streamType:n,nativeControls:r}=this.#e.$state;return!r()&&this.isMatch?e()===`play`&&!t()?on():n()===`unknown`?Q():this.isSmallLayout?an():tn():null}};m(Jt),m(ln);