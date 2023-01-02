import{_ as t,Z as i,$ as l,a5 as c,a0 as e,a2 as s,a3 as d,a4 as a,I as o}from"./framework-b3333173.js";const r={},p=s("p",null,"在 Markdown 文件中嵌入视频。",-1),u=s("h2",{id:"案例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),d(" 案例")],-1),m=s("p",null,"一个视频播放器:",-1),v=a(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VideoPlayer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>一个包含了封面和字幕的播放器:</p>`,2),b=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VideoPlayer</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">poster</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/poster.svg<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:tracks</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
    {
      default: true,
      src: &#39;/assets/subtitles/en.vtt&#39;,
      kind: &#39;subtitles&#39;,
      label: &#39;English&#39;,
      srcLang: &#39;en&#39;,
    },
    {
      src: &#39;/assets/subtitles/fr.vtt&#39;,
      kind: &#39;subtitles&#39;,
      label: &#39;French&#39;,
      srcLang: &#39;fr&#39;,
    },
  ]<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="src" tabindex="-1"><a class="header-anchor" href="#src" aria-hidden="true">#</a> src</h3><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>视频文件地址</p><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h3><ul><li>类型: <code>string | number</code></li><li>默认值: <code>100%</code></li></ul><p>视频宽度。</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>视频类型。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你的服务器不能为视频文件返回正确的 mime 类型，你应该指定它。 (例如：<code>video/mp4</code>)</p></div><h3 id="poster" tabindex="-1"><a class="header-anchor" href="#poster" aria-hidden="true">#</a> poster</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>视频封面</p><h3 id="tracks" tabindex="-1"><a class="header-anchor" href="#tracks" aria-hidden="true">#</a> tracks</h3><ul><li><p>类型: <code>UseMediaTextTrackSource[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UseMediaTextTrackSource</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Indicates that the track should be enabled unless the user&#39;s preferences indicate
   * that another track is more appropriate
   */</span>
  <span class="token keyword">default</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * How the text track is meant to be used. If omitted the default kind is subtitles.
   */</span>
  kind<span class="token operator">:</span> TextTrackKind<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * A user-readable title of the text track which is used by the browser
   * when listing available text tracks.
   */</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Address of the track (.vtt file). Must be a valid URL. This attribute
   * must be specified and its URL value must have the same origin as the document
   */</span>
  src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Language of the track text data. It must be a valid BCP 47 language tag.
   * If the kind attribute is set to subtitles, then srclang must be defined.
   */</span>
  srcLang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>视频的音轨</p>`,18);function k(h,g){const n=o("VideoPlayer");return i(),l("div",null,[p,c(" more "),u,m,e(n,{src:"https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm"}),v,e(n,{src:"https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm",poster:"/poster.svg",tracks:[{default:!0,src:"/assets/subtitles/en.vtt",kind:"subtitles",label:"English",srcLang:"en"},{src:"/assets/subtitles/fr.vtt",kind:"subtitles",label:"French",srcLang:"fr"}]},null,8,["tracks"]),b])}const _=t(r,[["render",k],["__file","videoplayer.html.vue"]]);export{_ as default};
