if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const d=e=>a(e,i),b={module:{uri:i},exports:r,require:d};s[i]=Promise.all(c.map((e=>b[e]||d(e)))).then((e=>(f(...e),r)))}}define(["./workbox-0519f318"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html.229bc4e7.js",revision:"4f632b37b6a9e29187240d75e2ecf0b0"},{url:"assets/404.html.7ec5b4fb.js",revision:"5ca8d2c4e3d457fee36e1133f2642983"},{url:"assets/app.47faed14.js",revision:"40e71d7dbd43ac374eb926c9aae11376"},{url:"assets/channel.html.31e62e46.js",revision:"638d17e0a57c13448891c07e90194851"},{url:"assets/channel.html.7dc1df35.js",revision:"96ac492e02878ee39969a00540311741"},{url:"assets/channel.html.88de40f8.js",revision:"13f35414a99444acc42757ba047adc8a"},{url:"assets/channel.html.c4905544.js",revision:"3e1a60a67832fa9d7aae22cc2aa22738"},{url:"assets/CommonWrapper.9778bdc5.js",revision:"fa4935d52faceb08859ebd817b2c69d9"},{url:"assets/default-skin.6dc726bc.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/guide.html.7c219d9b.js",revision:"7c2771278122bec33f095415ce2f795a"},{url:"assets/guide.html.7d834c98.js",revision:"7b3953b37c66325982609f5435224b6e"},{url:"assets/guide.html.d61d48ac.js",revision:"044081680b8381179c2f783adea30a9e"},{url:"assets/guide.html.da51c28a.js",revision:"0849b3180bffd74673acd6099c7b9fda"},{url:"assets/hope-palette.9afe5029.js",revision:"502a5da030629faa2b487d32d1f96fcd"},{url:"assets/index.fe984863.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/index.html.48bb7f08.js",revision:"144954c45ed63cc01f1d9cfb2f0a0f41"},{url:"assets/index.html.4b86abbe.js",revision:"ab270214095a8cc018b2023c6566864e"},{url:"assets/index.html.9441d28f.js",revision:"94676d1c97c58ed49763a68210374478"},{url:"assets/index.html.98fb4e39.js",revision:"1c188320f1aa4967cc725357cdcf41cc"},{url:"assets/index.html.cdcb12db.js",revision:"8079ad08819c77e0b5d8bd32c599978c"},{url:"assets/index.html.db930d36.js",revision:"636e1b3e18c52e9f4f690e1e30c139e4"},{url:"assets/index.html.dc600750.js",revision:"e7ac848b749ed5491eeaedb812c380f1"},{url:"assets/index.html.e4cb40c0.js",revision:"5c6b6da6512c3edcde8698b50a92e878"},{url:"assets/item.html.1c7af5b7.js",revision:"9ac5d87e9e7e9fc47a362f582e3eb640"},{url:"assets/item.html.44e84723.js",revision:"61a7af890a1e300f83ebbb1a736101a1"},{url:"assets/item.html.63094cfd.js",revision:"e95b063266e6c85fcf827dc3dfc045f7"},{url:"assets/item.html.e09c99d8.js",revision:"423a4ba1dbcb3e8b5aedf735dab8253a"},{url:"assets/Layout.0ca263c8.js",revision:"509bfe02a36237869377351e94eeb582"},{url:"assets/Layout.d.51d77ce9.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/league-gothic.61c4806a.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/Page404.d.d8fb7b3c.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/Page404.e5231284.js",revision:"61b6cbec416b2b98d15bdf8b1d9586c6"},{url:"assets/photoswipe-ui-default.01690d51.js",revision:"efe37870895e9cb4c0f94c26d10c4e42"},{url:"assets/photoswipe.f12380c4.js",revision:"b2bd640f4d524fa52b38ef29155b40d0"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/Slide.5f6cdc12.js",revision:"90653a68c33c3b099cc62a01c448b764"},{url:"assets/Slide.d.035b1e09.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/slides.54699ed1.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/source-sans-pro.6c4a0995.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/style.8e0516e7.css",revision:"89f96ef0d69d07424b6ac78bb3938451"},{url:"assets/Waline.min.ab959182.js",revision:"f6bf690545743b40bf3d3d6b830de6bc"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"404.html",revision:"14a01d8e7bbd611baa8c3964960e5d39"},{url:"config/channel.html",revision:"6fe1cdcaace5739cb2841dfd9fea92c6"},{url:"config/index.html",revision:"46be2798e550547737a597a631c3d15c"},{url:"config/item.html",revision:"2063918f63536d58d88116742ac11b2f"},{url:"guide.html",revision:"f6a56c492d27c6b754532070c57343b8"},{url:"index.html",revision:"083ed22bfdbecd945530a61955a301cd"},{url:"zh/config/channel.html",revision:"250d70c4f6f73e1c96c3719d6d3ac14e"},{url:"zh/config/index.html",revision:"d00ecfb2aba9f9bdfec0fb91ad7e87db"},{url:"zh/config/item.html",revision:"cfe6d1ef557f06f1441b773695538252"},{url:"zh/guide.html",revision:"bebced6717a9ab7526bfa9d9e3da0670"},{url:"zh/index.html",revision:"f4a88b7f477a1727b11aaa709f77bbc8"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"2f08061e28d534808dee39e2ba05b92d"},{url:"assets/icon/config-monochrome.png",revision:"bd3bacddddc4a2938375880bdd506af9"},{url:"assets/icon/guide-maskable.png",revision:"08ed31fafa239f372b8f1eb5877e46b7"},{url:"assets/icon/guide-monochrome.png",revision:"32a3bb35c073c6c910c8a5570350ce55"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
