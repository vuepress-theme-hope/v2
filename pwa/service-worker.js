if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const r=e=>a(e,c),b={module:{uri:c},exports:f,require:r};s[c]=Promise.all(d.map((e=>b[e]||r(e)))).then((e=>(i(...e),f)))}}define(["./workbox-0519f318"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.6f1a4096.js",revision:"c16ccc20b20367be04570bcf87b19d73"},{url:"assets/404.html.229bc4e7.js",revision:"4f632b37b6a9e29187240d75e2ecf0b0"},{url:"assets/404.html.b955d58b.js",revision:"1ab17553ad37eb7ba92564a408a09368"},{url:"assets/app.e8149f5c.js",revision:"c9b9535815e9ce8c4ede038e4753bd64"},{url:"assets/Blog.40dd0bc1.js",revision:"43ebfac53a05776922adfb159eebd3f8"},{url:"assets/CommonWrapper.7c6f95b8.js",revision:"5a210a21d24bce6d13c9d64954470d59"},{url:"assets/config.html.61e08786.js",revision:"c765147c9dd3cc59160f53f5d62fc27b"},{url:"assets/config.html.926ba824.js",revision:"08d1a607414b5c0db7f02c5d1a4ee7e5"},{url:"assets/config.html.c018a383.js",revision:"51ddff0cf78163baf69c8da0e2d4dc99"},{url:"assets/config.html.eaccec3a.js",revision:"e207b8d6baecc028b3f0e292a3a03502"},{url:"assets/default-skin.6dc726bc.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/footnote.c795fcb9.js",revision:"6284fd4521d66768b8f3eae27dd9ab46"},{url:"assets/guide.html.41eeacbf.js",revision:"5fd7dcbf4ec10b6c99f266ac9398b18a"},{url:"assets/guide.html.93cd12f5.js",revision:"3be33ca0ab99506f1e081e3bdcaab524"},{url:"assets/guide.html.a2046cdb.js",revision:"0c7c1993b5792731cbe75facc0393c4e"},{url:"assets/guide.html.aa974849.js",revision:"c432edcf0a3f039a800076f144aaf5db"},{url:"assets/hope-palette.9afe5029.js",revision:"502a5da030629faa2b487d32d1f96fcd"},{url:"assets/index.fe984863.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/index.html.00b67e92.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.031dc3e4.js",revision:"7035429a6038d0254d8cf8cde17660b2"},{url:"assets/index.html.0fb16c6d.js",revision:"eed36b3e5c52c612a4261fcf8d3256e4"},{url:"assets/index.html.1f283401.js",revision:"d3b074f4d23a630d33421a626c9f96fc"},{url:"assets/index.html.24674bc8.js",revision:"9aa2d024d23579d3bbd58b3a36a5cb14"},{url:"assets/index.html.2827d18b.js",revision:"e8cd134fbf49994ad08ca0903f59f5a2"},{url:"assets/index.html.329c1301.js",revision:"9a1f9baa211de9e0cf376f61d371a335"},{url:"assets/index.html.564f7745.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.63489d47.js",revision:"5c98d67c3352fac3030fb050bb0c2f9c"},{url:"assets/index.html.64157586.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.642cb84a.js",revision:"ca3553bc255898f835c79d90838e6da1"},{url:"assets/index.html.649941c6.js",revision:"013c43b36c7be44c4d40754b70aeda4b"},{url:"assets/index.html.67f2dbf7.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.71b67028.js",revision:"baec1cd42b66412e6bdfa37bdaec6efd"},{url:"assets/index.html.79be6c78.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.7e89a181.js",revision:"d13fea7c5d4aeb0fb87a5d96787bee13"},{url:"assets/index.html.7fce2222.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.8134d8b9.js",revision:"5cabfd6d64b2f8907faad2c26709d1e7"},{url:"assets/index.html.98366503.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.a30bca36.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.b02b44b3.js",revision:"935dea6af28afe7352b2ecd1fad438a0"},{url:"assets/index.html.c69cf5e5.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.ccd9c9af.js",revision:"8750ad5504006d589b20305b30dab607"},{url:"assets/index.html.ccfa5799.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.d4647e90.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.db093286.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.ddedae0c.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.e047dc35.js",revision:"571cbb89ae82d24ac10f25d4d7347601"},{url:"assets/index.html.e74aeb22.js",revision:"12be687845edb866209f8cfd6a3ed5e9"},{url:"assets/index.html.ead245a0.js",revision:"f4711e12f99da0406d436bdc36f5723c"},{url:"assets/index.html.f19a6629.js",revision:"f7deb3843cccd9b20041710d0ad18397"},{url:"assets/index.html.ffde3ba7.js",revision:"3a2407ff3ce800fcb7ee9a8c460e348e"},{url:"assets/Layout.6e54c82e.js",revision:"da11f549bd821b0285490bde07652458"},{url:"assets/league-gothic.61c4806a.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/PageAnchor.e0dbee31.js",revision:"bc6ca74e0fa47600f1417502adddaa8d"},{url:"assets/photoswipe-ui-default.565d7619.js",revision:"2cfcd845e39dedbcce119a41fb5dd4df"},{url:"assets/photoswipe.614534dd.js",revision:"eab1396863592e2512a953901d8cd256"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/slides.54699ed1.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/source-sans-pro.6c4a0995.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/style.e372cbc6.css",revision:"d88817e3034f8a4ae05d9ea976e8acaa"},{url:"assets/Waline.min.f025ef54.js",revision:"60379d7c97d12da153e9e3b3fd2bc334"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"404.html",revision:"c5971d0a5b78bcf8a6224486fad2d4f0"},{url:"article/index.html",revision:"97cfa2ffd8f76ff37cd53794200e35a1"},{url:"category/index.html",revision:"6d69c7345395a6e3aabf6d844b4884c0"},{url:"config.html",revision:"7bc8be6262400fbbe7ec412e8c74bb58"},{url:"encrypted/index.html",revision:"1c6de9e4ebe3fed972d68f3e48031639"},{url:"guide.html",revision:"aeca38f850723e0895f1fb803a6bf8e5"},{url:"index.html",revision:"f032a4ae629f2c08bc9a76f4383e876c"},{url:"slide/index.html",revision:"8ee346f3c9f800a9e7a70a27c9cf97b7"},{url:"star/index.html",revision:"15c43af0eaaedc21517aa2de97dddb94"},{url:"tag/index.html",revision:"842c6ce6ca360afd59692a30b965e928"},{url:"timeline/index.html",revision:"7a62bf04b34044bd731123ab1019bf0b"},{url:"zh/article/index.html",revision:"aa5cb5e444253290c215ffdcbdbc59d0"},{url:"zh/category/index.html",revision:"f9debe40fea826c4240132c99e463b74"},{url:"zh/config.html",revision:"7714103c8411db6eb87fc139638b9b01"},{url:"zh/encrypted/index.html",revision:"23d5381d06ca82ba1f9e97e93d452dd8"},{url:"zh/guide.html",revision:"21d6b3e5fdad42b2035b772e509ba734"},{url:"zh/index.html",revision:"a9f161b8380f2ab24cbe0ce5cfed09fc"},{url:"zh/slide/index.html",revision:"389717d8895e75c78b0cfdf3f5a40dcc"},{url:"zh/star/index.html",revision:"98fa2c204aaa628cfdc6ab9adf3f2b7b"},{url:"zh/tag/index.html",revision:"1c72b310a1366cefd1bf5d22370f2b8b"},{url:"zh/timeline/index.html",revision:"50c5ce7c9551f06f1a3d32a769a7ca8c"},{url:"assets/hero.197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"492db50fd944ce74f319bfd142c61c0a"},{url:"assets/icon/config-monochrome.png",revision:"82cd504110dad5d766925814933d61e1"},{url:"assets/icon/guide-maskable.png",revision:"f14c9571658250dffcda5ed9fb84b457"},{url:"assets/icon/guide-monochrome.png",revision:"931bf2b6692ee8086aab6ba2b1be5d11"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
