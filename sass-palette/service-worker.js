if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const b=e=>a(e,d),f={module:{uri:d},exports:r,require:b};s[d]=Promise.all(c.map((e=>f[e]||b(e)))).then((e=>(i(...e),r)))}}define(["./workbox-a774d07d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-8c9aedf1.js",revision:"68d3131e22714c5cf5b940632c5322dd"},{url:"assets/404.html-cc6a1e55.js",revision:"b9cf895de2e072a01851e459f67a49de"},{url:"assets/app-fa1f4ccb.js",revision:"fbb424bf093b43505c2dfc73e56ba18c"},{url:"assets/Catalog-3871a5c4.js",revision:"875df886f40e6ffc4ef98e15f651815b"},{url:"assets/config.html-87fcb7a1.js",revision:"89d8ebb2d1c41462732f8a0e9f091b06"},{url:"assets/config.html-a504b348.js",revision:"15a63cf7bbd670cc8d36cfd0c59aa562"},{url:"assets/config.html-e82d8f4b.js",revision:"c01d2236b02bc9f0ceef3daaaab6bd64"},{url:"assets/config.html-f6188a8f.js",revision:"1e43cd72c1b692c21df35c4f1226a5de"},{url:"assets/demo.html-4b3b3ed5.js",revision:"9c1b982964d9fe729add998e5c80e6d3"},{url:"assets/demo.html-af695979.js",revision:"d6ee02d56c120f1b7cfad882ac43e868"},{url:"assets/demo.html-f1038189.js",revision:"3b8b72ba41e0ed2d4851614e8b33c638"},{url:"assets/demo.html-f5b3edee.js",revision:"4d9143f36b90042012cbc0ba8129adeb"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/framework-eb069dea.js",revision:"9356ea6731ba96965bde379a4f4a36b7"},{url:"assets/giscus-cb5b3b13.js",revision:"55c6133d523779a1a33f415a1903244a"},{url:"assets/guide.html-2e0bdd7e.js",revision:"e15f4ef1eee0e25ad4566412151bb656"},{url:"assets/guide.html-36cc04e9.js",revision:"aa11e4530151c7c9b55c3b42b55fdc25"},{url:"assets/guide.html-623635ce.js",revision:"849cb5b09e532fc9587417ac90e21aad"},{url:"assets/guide.html-68e1547b.js",revision:"ae0bdb89487a4cb214fcef77900fba7f"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-17c9bd36.js",revision:"aac9801b9f68c96e01a125ffc7dd040b"},{url:"assets/index.html-6c044f7e.js",revision:"98c9c949e14eb11e6a0b100cb8388c7c"},{url:"assets/index.html-bb225344.js",revision:"511922993018b7a132d95749cb69f757"},{url:"assets/index.html-c540e482.js",revision:"0203f04e29771152651d6076aaf3d8b6"},{url:"assets/OrbitControls-0acc8727.js",revision:"654a0325d180ead88b361aa054844c0b"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/STLLoader-024569b3.js",revision:"149cfa7657a51694576a3d20e7933a05"},{url:"assets/style-3e2a3384.css",revision:"d3e9928bded71f51787cae383ea46fe0"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/three.module-2e64a78b.js",revision:"eb00feba797a3f5ba8b3b968912996de"},{url:"logo.svg",revision:"5e6edad3be298954c87eb993750cabb0"},{url:"index.html",revision:"f1a63a131d4d6ec2e7c289d5c3acced5"},{url:"404.html",revision:"446464547a8a1aa8deafdc98c520d639"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
