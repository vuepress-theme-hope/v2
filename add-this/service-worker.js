if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const r=e=>a(e,d),b={module:{uri:d},exports:c,require:r};s[d]=Promise.all(f.map((e=>b[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-0519f318"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.c33a8d21.js",revision:"c64c552ea5bc919a53be0ed45dda5d43"},{url:"assets/404.html.229bc4e7.js",revision:"4f632b37b6a9e29187240d75e2ecf0b0"},{url:"assets/404.html.9f0ca264.js",revision:"f6e484afafad22d8089d98229404dbfb"},{url:"assets/app.3f02d947.js",revision:"05f801e991422791b4ca5a599311748d"},{url:"assets/Blog.c4c07972.js",revision:"1884d59e93848d40b114507b7b215378"},{url:"assets/CommonWrapper.1394d307.js",revision:"b29eaa307feb983064e1a3e55d727814"},{url:"assets/config.html.5a8b8f7a.js",revision:"adbcf24f7285eae30f2bb646368a8f3c"},{url:"assets/config.html.b6a1e1ab.js",revision:"94544e8b42e9b2790cfcea230be3913c"},{url:"assets/config.html.cd2b74d9.js",revision:"3277afce838beaff70ba4052c4e01d7e"},{url:"assets/config.html.d9ccaeaf.js",revision:"bd463e0b0794cbe3690cbdd86435c92a"},{url:"assets/default-skin.6dc726bc.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/guide.html.32f41019.js",revision:"a58b23d8be13b6a362e93f6da26fdc86"},{url:"assets/guide.html.98ddeb2b.js",revision:"f2ab6810153d0210b94541b2c15c6fef"},{url:"assets/guide.html.9d46fd00.js",revision:"96c846dc0494a3f42ebd7f9e7ca48357"},{url:"assets/guide.html.e6ada0eb.js",revision:"548d4ec4dda40a8a79d76af4777a3814"},{url:"assets/hope-palette.9afe5029.js",revision:"502a5da030629faa2b487d32d1f96fcd"},{url:"assets/index.fe984863.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/index.html.00b67e92.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.066dc36f.js",revision:"3738485c04d17f3b7fe8b1c656e5c876"},{url:"assets/index.html.086b5fc6.js",revision:"251d0cf9dee91a30b0161a0535d60149"},{url:"assets/index.html.08e36ea1.js",revision:"7e1f68c91f39b6699a4ef3019ad5baba"},{url:"assets/index.html.124f1adf.js",revision:"5d73fc41286a1b919a7f11d4ce4aaa62"},{url:"assets/index.html.18f2d540.js",revision:"a02398207071f4b987c6c971d5ad9133"},{url:"assets/index.html.277f3488.js",revision:"31b5ce09fa057fce019f3738b7d971a3"},{url:"assets/index.html.2af1977d.js",revision:"ec4ff89cdfcf5f40edb241803c100dbf"},{url:"assets/index.html.2b6d8d4e.js",revision:"5e11b0fa0a519f17365add06f17c308b"},{url:"assets/index.html.36df81f0.js",revision:"2b8beade1e07401c95980e49f01c53ec"},{url:"assets/index.html.43af64ca.js",revision:"ae15f58e4c61f0f7c6e78f080012233e"},{url:"assets/index.html.44e5db59.js",revision:"7ae72137ef8c04d85849b37f230db6ec"},{url:"assets/index.html.47949fab.js",revision:"0e25f769aa7e5fa4ceb7259a957b2b03"},{url:"assets/index.html.564f7745.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.64157586.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.67f2dbf7.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.79be6c78.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.7fce2222.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.83f9372d.js",revision:"91ade9ed9f9030b96b2c9ef75599300e"},{url:"assets/index.html.98366503.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.a30bca36.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.acfd86b6.js",revision:"bb1b1f773f1c443be5a6fa5f4f183b45"},{url:"assets/index.html.af25aaae.js",revision:"727ce927e811c587f75eb985e5667def"},{url:"assets/index.html.c69cf5e5.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.ccfa5799.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.d4647e90.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.d51c601d.js",revision:"6d8f589e4ba702927f0d7d46020787c7"},{url:"assets/index.html.db093286.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.ddedae0c.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.e047dc35.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.e588f89d.js",revision:"93290266281394f3d3321298489104a5"},{url:"assets/index.html.f2be0871.js",revision:"32c27dd3ee8dbff2bdf2c3c3b1fca1fe"},{url:"assets/Layout.6d751509.js",revision:"4acc55c1fed1031b3706911eb5659302"},{url:"assets/league-gothic.61c4806a.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/PageAnchor.8aef75a1.js",revision:"37e0f62045a81cb825fe633813d5497f"},{url:"assets/photoswipe-ui-default.ae9472fe.js",revision:"5174a65d696eb8b410f09231dbfd4bc5"},{url:"assets/photoswipe.c4d80e52.js",revision:"c0b46fa15994092e75e8c93e3407c209"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/slides.54699ed1.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/source-sans-pro.6c4a0995.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/style.9eae0d72.css",revision:"ea1572b7f67bf6ea862cece192c54934"},{url:"assets/Waline.min.015eea9d.js",revision:"e8063e11b09005289a112e9661de7279"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"404.html",revision:"1d6469621a902ba9265f85d866fba199"},{url:"article/index.html",revision:"aa92c4ea93d543b947c0e2fba65ef2ed"},{url:"category/index.html",revision:"9a4a0f0e3f6fd0f07223e20687915a7f"},{url:"config.html",revision:"a07dcf031f412b3a03c9049480207183"},{url:"encrypted/index.html",revision:"16b5a193feedc383111357bd63402735"},{url:"guide.html",revision:"6f63777935dcbc3ad2397b3b2b289c33"},{url:"index.html",revision:"0383fc22463694047150341bebe4628c"},{url:"slide/index.html",revision:"64963d894b0d22dec67828c328235115"},{url:"star/index.html",revision:"27e5d4cef19385d4686b4af12070a1d8"},{url:"tag/index.html",revision:"4d8aa581b72aa4a67793f1be6d8f6d76"},{url:"timeline/index.html",revision:"6fdc800565e0b64ca9ead9e905f18649"},{url:"zh/article/index.html",revision:"628e9e3243fa0e698b67f4b70c2aa8ce"},{url:"zh/category/index.html",revision:"dfc1605a053c4626a3e48c9eb48b3b70"},{url:"zh/config.html",revision:"8713283c703e32016591272a571e09f2"},{url:"zh/encrypted/index.html",revision:"3c519ab1ebecb6b6a5c0caca498ff6b4"},{url:"zh/guide.html",revision:"9359eec0ac2defaf8792b6c116428ece"},{url:"zh/index.html",revision:"ffc33dd88b327f21bbaf65c730e2bf9f"},{url:"zh/slide/index.html",revision:"f7077edd860ee4937072edaecd95fa35"},{url:"zh/star/index.html",revision:"de923baed6204064f00799e81e6c90fa"},{url:"zh/tag/index.html",revision:"9a1de1aa43c4f8e91b0e4220dc4f4bf0"},{url:"zh/timeline/index.html",revision:"8ed5cd7979609ea73a1a3cf985149483"},{url:"assets/hero.197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"175b2683ceab0c9df7fba92edbb8f175"},{url:"assets/icon/config-monochrome.png",revision:"b5167d8ef45438c0e9e39ff89230435c"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
