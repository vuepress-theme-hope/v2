if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const d=e=>s(e,c),b={module:{uri:c},exports:r,require:d};a[c]=Promise.all(f.map((e=>b[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-0519f318"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html.13dff563.js",revision:"9c106fde11eb499850c01ee41d8ebe74"},{url:"assets/404.html.229bc4e7.js",revision:"4f632b37b6a9e29187240d75e2ecf0b0"},{url:"assets/app.fcc16dad.js",revision:"bd1356be0b9316eacac6877c863444e9"},{url:"assets/CommonWrapper.10d99f8d.js",revision:"1e2575d0e635023a6cc1a92422524c0b"},{url:"assets/default-skin.6dc726bc.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/hope-palette.9afe5029.js",revision:"502a5da030629faa2b487d32d1f96fcd"},{url:"assets/index.fe984863.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/index.html.1f20c545.js",revision:"91af5f9abc6fdb9286fe2873f7118cee"},{url:"assets/index.html.27682b2a.js",revision:"e56b751bdcbf85af3621443acb5ae4dd"},{url:"assets/index.html.47fd64ad.js",revision:"d87b15b8e1c0130a0d6ca972fdf4319e"},{url:"assets/index.html.48cad57b.js",revision:"fbcb98f950aaad94b9cf18cf4a76afcb"},{url:"assets/index.html.5a68fe3f.js",revision:"9b606d4afebf6f4bc55cf3d69ab1a311"},{url:"assets/index.html.60550c9f.js",revision:"5a48fa6cf1ea3e502da9881287502249"},{url:"assets/index.html.686a3912.js",revision:"ff1ec1256f4ba950f815551f40d3d973"},{url:"assets/index.html.959e8209.js",revision:"7f4e96d808641e3d3c04148ba9275ab4"},{url:"assets/index.html.a19b085b.js",revision:"a2016202cb0590af3e081c71b400b7a6"},{url:"assets/index.html.c6c3b668.js",revision:"99ec184164d8e5cec1e4cbc06126e8f9"},{url:"assets/index.html.ecd604ac.js",revision:"b8042c5315dab682601398fbcd5a694d"},{url:"assets/index.html.f1b59ff3.js",revision:"3881caa08034b58490e45f297583f92d"},{url:"assets/Layout.d.51d77ce9.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/Layout.d373d0f7.js",revision:"cbe4923cd377f5b68c5e19255ce2138f"},{url:"assets/league-gothic.61c4806a.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/Page404.20695191.js",revision:"f5bec3a2ee19f7c208ccf7739b9e6a11"},{url:"assets/Page404.d.d8fb7b3c.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/photoswipe-ui-default.b4cc99db.js",revision:"4691b344754a4000f822e8b169abe728"},{url:"assets/photoswipe.c6765a30.js",revision:"f193fc2fd6f6d96df0a7abb608d26e1a"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/Slide.d.035b1e09.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/Slide.e381d031.js",revision:"96730593b24bce36161fd051e2bd6b89"},{url:"assets/slides.54699ed1.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/source-sans-pro.6c4a0995.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/style.d9e8542e.css",revision:"4211844ec06f30d99d9b1ae40e2de865"},{url:"assets/waline.html.14d3f6a4.js",revision:"cf48b0794fa31beeaf385d75141e1abc"},{url:"assets/waline.html.1f935791.js",revision:"08b7d4376216de96bb71611b88d8ef3e"},{url:"assets/waline.html.24e33e8c.js",revision:"9ff8cea2be0e95d5b6253c9bc01f4940"},{url:"assets/waline.html.315f03ce.js",revision:"33190ea9db6c8dc923a77a233a284cc1"},{url:"assets/waline.html.5fefce73.js",revision:"31b6b9a92fcb27002d928809b03cb0ae"},{url:"assets/waline.html.af0f4923.js",revision:"ad2a9b2663e8ccc593b694477f5e05c7"},{url:"assets/waline.html.af2c0ee2.js",revision:"caa648f049aeeffb143c76a7dd74bf62"},{url:"assets/waline.html.c7364326.js",revision:"103d7e6dd5fe23a6d2f71a10511c9494"},{url:"assets/Waline.min.89876206.js",revision:"e312565ad41d06a76a75e7b6734544ee"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"404.html",revision:"09c0399699245e2746b2de2715b08b1f"},{url:"config/index.html",revision:"23cb9e1a6780ae1b7f7f1adfbfe87005"},{url:"config/waline.html",revision:"58c758b59aaee1b309ef1e203414bd20"},{url:"guide/index.html",revision:"35190f35bae5ba0c591c84491b831f24"},{url:"guide/waline.html",revision:"e82400c938e72faeaa0ca8438329522f"},{url:"index.html",revision:"8ef0a1027e23efec8b67962cafd9e59d"},{url:"zh/config/index.html",revision:"29931ca0c2d2fc1f9e54e65e9e6cf4e3"},{url:"zh/config/waline.html",revision:"a400a227c0bc51c5e6c6783dfd99e6c2"},{url:"zh/guide/index.html",revision:"d36db5db013bb38f5a6501ac4634c13d"},{url:"zh/guide/waline.html",revision:"998af83c7bedad0358cd70951373c978"},{url:"zh/index.html",revision:"1676042235df6dd5d1864aa00e7668bb"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"8fb998d2c4b2f220ffe160bec5a8b7e8"},{url:"assets/icon/config-monochrome.png",revision:"9b595baf417a780a9303b27cbbd90b08"},{url:"assets/icon/guide-maskable.png",revision:"5cb5beea2e1d662315456d0ae0d5b859"},{url:"assets/icon/guide-monochrome.png",revision:"e7cdce40205b69056052c55ede7ee4b0"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/leancloud-1.6a59236c.jpeg",revision:"ed55a501bd566638e7807d8739b853fa"},{url:"assets/leancloud-2.ed7c4bdd.jpeg",revision:"d26cacd13f9a54a5a9908cda54d01722"},{url:"assets/leancloud-3.3ae5fb8d.png",revision:"f30a97728b9b1f43a27f456519c7ba0c"},{url:"assets/leancloud-app-1.b4109b08.jpg",revision:"40863cdbd1a942d92479797180bc1cfd"},{url:"assets/leancloud-app-2.735a3493.jpg",revision:"eb605e505ef189756f8ed0699bad513c"},{url:"assets/vercel-1.95586b73.png",revision:"3ada188f654e9b96a57b1ca5f0b076e2"},{url:"assets/vercel-2.d95a9368.png",revision:"35cde26e009b0a0d0ee7e310de8d6d71"},{url:"assets/vercel-3.0918fcee.png",revision:"600bb9eee1db4446b931f1a33aa67a43"},{url:"assets/vercel-4.042cdcf5.png",revision:"3f804e6df5de9650f295b179c4d78b23"},{url:"assets/vercel-5.c125eea6.png",revision:"e46d16f707fdef1121d32e5c7a472d85"},{url:"assets/vercel-6.22983473.png",revision:"6a902d6618e2ff0978b2064f3f6d4765"},{url:"assets/vercel-7.2478902b.png",revision:"34313f4892818ec3ab1ace7fc327204a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
