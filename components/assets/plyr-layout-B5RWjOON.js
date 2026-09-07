import{t as e}from"./preload-helper-Dec5VI56.js";import{Ct as t,Et as n,G as r,K as i,Lt as a,X as o,Z as s,bt as c,jt as l,mt as u,n as d,o as f,ot as p,q as m,st as h,wt as g}from"./vidstack-D9mvYVIz-DzTu1mqH.js";import{n as _,t as v}from"./vidstack-mvRkf9tF-Drs7Wf_4.js";import{A as y}from"./app-BY0MP6x9.js";import{MediaPosterElement as b}from"./vidstack-CmeWC2k2-O63HLqfB.js";import{C as x,S,_ as C,a as w,b as T,c as E,d as ee,f as te,g as ne,h as re,i as ie,l as ae,m as oe,n as se,o as ce,p as D,r as O,s as k,t as A,u as j,v as M,w as N,x as P,y as F}from"./vidstack-DWkX3Edw-C_FBeSU4.js";import{o as I,t as L}from"./vidstack-DM8v4Khu-B-ZM-eGf.js";import{a as R,i as z,n as B,r as V,t as H}from"./vidstack-B1rlsgcu-CB0F6s7_.js";var U=i();function W(){return a(U)}var G={clickToPlay:!0,clickToFullscreen:!0,controls:[`play-large`,`play`,`progress`,`current-time`,`mute+volume`,`captions`,`settings`,`pip`,`airplay`,`fullscreen`],customIcons:!1,displayDuration:!1,download:null,markers:null,invertTime:!0,thumbnails:null,toggleTime:!0,translations:null,seekTime:10,speed:[.5,.75,1,1.25,1.5,1.75,2,4]},le=class extends d{static props=G;#e;onSetup(){this.#e=y(),n(U,{...this.$props,previewTime:l(0)})}};function ue(e,t){let{canAirPlay:n,canFullscreen:r,canPictureInPicture:i,controlsHidden:a,currentTime:o,fullscreen:c,hasCaptions:l,isAirPlayConnected:u,paused:d,pictureInPicture:f,playing:p,pointer:h,poster:g,textTrack:_,viewType:v,waiting:y}=t.$state;e.classList.add(`plyr`),e.classList.add(`plyr--full-ui`);let b={"plyr--airplay-active":u,"plyr--airplay-supported":n,"plyr--fullscreen-active":c,"plyr--fullscreen-enabled":r,"plyr--hide-controls":a,"plyr--is-touch":()=>h()===`coarse`,"plyr--loading":y,"plyr--paused":d,"plyr--pip-active":f,"plyr--pip-enabled":i,"plyr--playing":p,"plyr__poster-enabled":g,"plyr--stopped":()=>d()&&o()===0,"plyr--captions-active":_,"plyr--captions-enabled":l},x=m();for(let t of Object.keys(b))x.add(s(()=>void e.classList.toggle(t,!!b[t]())));return x.add(s(()=>{let t=`plyr--${v()}`;return e.classList.add(t),()=>e.classList.remove(t)}),s(()=>{let{$provider:n}=t,r=n()?.type,i=`plyr--${de(r)?`html5`:r}`;return e.classList.toggle(i,!!r),()=>e.classList.remove(i)})),()=>x.empty()}function de(e){return e===`audio`||e===`video`}var fe=class extends V{async loadIcons(){let t=(await e(async()=>{let{icons:e}=await import(`./vidstack-BILrshkt2-DFAGhqLc.js`);return{icons:e}},[])).icons,n={};for(let e of Object.keys(t))n[e]=B({name:e,paths:t[e],viewBox:`0 0 18 18`});return n}};function K(e,t){return e()?.[t]??t}function pe(){return _e()}function me(){let e=y(),{load:t}=e.$props,{canLoad:n}=e.$state;return r(()=>t()===`play`&&!n())()?[q(),J()]:[he(),ge(),J(),ve(),Ne(),Pe()]}function q(){let e=y(),{translations:t}=W(),{title:n}=e.$state;return I`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${H(()=>`${K(t,`Play`)}, ${n()}`)}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function he(){let{controls:e}=W();return H(()=>e().includes(`play-large`)?q():null)}function ge(){let{thumbnails:e,previewTime:t}=W();return I`
    <media-thumbnail
      .src=${H(e)}
      class="plyr__preview-scrubbing"
      time=${H(()=>t())}
    ></media-thumbnail>
  `}function J(){let{poster:e}=y().$state;return I`<div class="plyr__poster" style=${H(()=>`background-image: url("${e()}");`)}></div>`}function _e(){let e=new Set([`captions`,`pip`,`airplay`,`fullscreen`]),{controls:t}=W();return I`<div class="plyr__controls">${H(()=>t().filter(t=>!e.has(t)).map(Y))}</div>`}function ve(){let{controls:e}=W();return I`<div class="plyr__controls">${H(()=>e().map(Y))}</div>`}function Y(e){switch(e){case`airplay`:return ye();case`captions`:return be();case`current-time`:return je();case`download`:return Me();case`duration`:return X();case`fast-forward`:return De();case`fullscreen`:return xe();case`mute`:case`volume`:case`mute+volume`:return ke(e);case`pip`:return Ce();case`play`:return we();case`progress`:return Oe();case`restart`:return Te();case`rewind`:return Ee();case`settings`:return Fe();default:return null}}function ye(){let{translations:e}=W();return I`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${$(e,`AirPlay`)}</span>
    </media-airplay-button>
  `}function be(){let{translations:e}=W();return I`
    <media-caption-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="captions"
    >
      <slot name="captions-on-icon" data-class="icon--pressed"></slot>
      <slot name="captions-off-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${$(e,`Disable captions`)}</span>
      <span class="label--not-pressed plyr__tooltip">${$(e,`Enable captions`)}</span>
    </media-caption-button>
  `}function xe(){let{translations:e}=W(),t=$(e,`Enter Fullscreen`);return I`
    <media-fullscreen-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="fullscreen"
    >
      <slot name="enter-fullscreen-icon" data-class="icon--pressed"></slot>
      <slot name="exit-fullscreen-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${$(e,`Exit Fullscreen`)}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-fullscreen-button>
  `}function Se(){let{translations:e}=W(),t=$(e,`Mute`);return I`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${$(e,`Unmute`)}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}function Ce(){let{translations:e}=W(),t=$(e,`Enter PiP`);return I`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${$(e,`Exit PiP`)}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}function we(){let{translations:e}=W(),t=$(e,`Play`);return I`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${$(e,`Pause`)}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}function Te(){let{translations:e}=W(),{remote:t}=y(),n=$(e,`Restart`);function r(e){(!h(e)||p(e))&&t.seek(0,e)}return I`
    <button
      type="button"
      class="plyr__control"
      data-plyr="restart"
      @pointerup=${r}
      @keydown=${r}
    >
      <slot name="restart-icon"></slot>
      <span class="plyr__tooltip">${n}</span>
    </button>
  `}function Ee(){let{translations:e,seekTime:t}=W(),n=H(()=>`${K(e,`Rewind`)} ${t()}s`);return I`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${H(()=>-1*t())}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${n}</span>
    </media-seek-button>
  `}function De(){let{translations:e,seekTime:t}=W(),n=H(()=>`${K(e,`Forward`)} ${t()}s`);return I`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${H(t)}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${n}</span>
    </media-seek-button>
  `}function Oe(){let{duration:e,viewType:t}=y().$state,{translations:n,markers:r,thumbnails:i,seekTime:a,previewTime:o}=W(),s=$(n,`Seek`),c=l(null),u=H(()=>{let e=c();return e?I`<span class="plyr__progress__marker-label">${R(e.label)}<br /></span>`:null});function d(e){o.set(e.detail)}function f(){c.set(this)}function p(){c.set(null)}function m(){let e=i(),n=H(()=>t()===`audio`);return e?I`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${n}>
            <media-slider-thumbnail .src=${e} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${u}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:I`
          <span class="plyr__tooltip">
            ${u}
            <media-slider-value></media-slider-value>
          </span>
        `}function h(){let t=e();return Number.isFinite(t)?r()?.map(e=>I`
        <span
          class="plyr__progress__marker"
          @mouseenter=${f.bind(e)}
          @mouseleave=${p}
          style=${`left: ${e.time/t*100}%;`}
        ></span>
      `):null}return I`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${H(a)}
          aria-label=${s}
          @media-seeking-request=${d}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${H(m)}${H(h)}
        </media-time-slider>
      </div>
    </div>
  `}function ke(e){return H(()=>{let t=e===`mute`||e===`mute+volume`,n=e===`volume`||e===`mute+volume`;return I`
      <div class="plyr__controls__item plyr__volume">
        ${[t?Se():null,n?Ae():null]}
      </div>
    `})}function Ae(){let{translations:e}=W();return I`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${$(e,`Volume`)}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function je(){let e=y(),{translations:t,invertTime:n,toggleTime:r,displayDuration:i}=W(),a=l(g(n));function o(e){!r()||i()||h(e)&&!p(e)||a.set(e=>!e)}function s(){return H(()=>i()?X():null)}return H(()=>{let{streamType:n}=e.$state,r=$(t,`LIVE`),c=$(t,`Current time`),l=H(()=>!i()&&a());return n()===`live`||n()===`ll-live`?I`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${r}</span>
          </media-live-button>
        `:I`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${c}
            ?remainder=${l}
            @pointerup=${o}
            @keydown=${o}
          ></media-time>
          ${s()}
        `})}function X(){let{translations:e}=W();return I`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${$(e,`Duration`)}
    ></media-time>
  `}function Me(){return H(()=>{let e=y(),{translations:t,download:n}=W(),{title:r,source:i}=e.$state,a=i(),o=n(),s=_({title:r(),src:a,download:o}),c=$(t,`Download`);return u(s?.url)?I`
          <a
            class="plyr__controls__item plyr__control"
            href=${v(s.url,{download:s.name})}
            download=${s.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${c}</span>
          </a>
        `:null})}function Ne(){return H(()=>{let{clickToPlay:e,clickToFullscreen:t}=W();return[e()?I`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,t()?I`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})}function Pe(){let e=y(),t=l(void 0),n=H(()=>R(t()?.text));return s(()=>{let n=e.$state.textTrack();if(!n)return;function r(){t.set(n?.activeCues[0])}return r(),c(n,`cue-change`,r)}),I`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${n}</span>
    </div>
  `}function Fe(){let{translations:e}=W();return I`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${$(e,`Settings`)}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[Ie(),Be(),He(),Re()]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}function Z({label:e,children:t}){let n=l(!1);return I`
    <media-menu @open=${()=>n.set(!0)} @close=${()=>n.set(!1)}>
      ${Q({label:e,open:n})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function Q({open:e,label:t}){let{translations:n}=W(),r=H(()=>`plyr__control plyr__control--${e()?`back`:`forward`}`);function i(){let t=$(n,`Go back to previous menu`);return H(()=>e()?I`<span class="plyr__sr-only">${t}</span>`:null)}return I`
    <media-menu-button class=${r} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${We(e)}>
        ${$(n,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${i()}
    </media-menu-button>
  `}function Ie(){return Z({label:`Audio`,children:Le()})}function Le(){let{translations:e}=W();return I`
    <media-audio-radio-group empty-label=${$(e,`Default`)}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function Re(){return Z({label:`Speed`,children:ze()})}function ze(){let{translations:e,speed:t}=W();return I`
    <media-speed-radio-group .rates=${t} normal-label=${$(e,`Normal`)}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function Be(){return Z({label:`Captions`,children:Ve()})}function Ve(){let{translations:e}=W();return I`
    <media-captions-radio-group off-label=${$(e,`Disabled`)}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function He(){return Z({label:`Quality`,children:Ue()})}function Ue(){let{translations:e}=W();return I`
    <media-quality-radio-group auto-label=${$(e,`Auto`)}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function We(e){return H(()=>e()?`true`:`false`)}function $(e,t){return H(()=>K(e,t))}var Ge=class extends f(L,le){static tagName=`media-plyr-layout`;#e;onSetup(){this.forwardKeepAlive=!1,this.#e=y()}onConnect(){this.#e.player.el?.setAttribute(`data-layout`,`plyr`),t(()=>this.#e.player.el?.removeAttribute(`data-layout`)),ue(this,this.#e),s(()=>{this.$props.customIcons()?new z([this]).connect():new fe([this]).connect()})}render(){return H(this.#t.bind(this))}#t(){let{viewType:e}=this.#e.$state;return e()===`audio`?pe():e()===`video`?me():null}};o(Ge),o(b),o(D),o(ee),o(O),o(te),o(w),o(ne),o(A),o(ce),o(N),o(x),o(C),o(M),o(F),o(E),o(k),o(j),o(ae),o(se),o(ie),o(T),o(oe),o(re),o(S),o(P);