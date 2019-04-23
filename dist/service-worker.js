/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d81231140e2217696396296a1a06c8a0"
  },
  {
    "url": "404.png",
    "revision": "6d80a471e6df85952532eb9fd220d23c"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "1da080ecb5d922ac02e781213388c81f"
  },
  {
    "url": "assets/css/0.styles.7d2d1aea.css",
    "revision": "f8a3de6799a2d0c6dbc912f7d1538cc4"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/ktquez.06665560.eot",
    "revision": "066655605108d4a0ae74dcc69bbe7547"
  },
  {
    "url": "assets/fonts/ktquez.87607358.woff",
    "revision": "876073588156b8e621394e0705ed0695"
  },
  {
    "url": "assets/fonts/ktquez.9d97d905.ttf",
    "revision": "9d97d905fd7b9fc68d637ac83de00744"
  },
  {
    "url": "assets/img/ktquez.8ef6334d.svg",
    "revision": "8ef6334db409a3a48aea2e38db558893"
  },
  {
    "url": "assets/js/1.7d52569b.js",
    "revision": "59b76a54ab4ae2965471ef95b7570223"
  },
  {
    "url": "assets/js/10.165d861b.js",
    "revision": "b34853fb60cb4224e53cf13f5405c2b0"
  },
  {
    "url": "assets/js/11.71af7fa1.js",
    "revision": "56f1995e8ff401c505563a56a4fa19b6"
  },
  {
    "url": "assets/js/12.7c9ad5f0.js",
    "revision": "412752f7847d0618986e90c4bfa7669b"
  },
  {
    "url": "assets/js/13.9ceeec26.js",
    "revision": "f9d6b6a665f312424ebce2834c3fac9d"
  },
  {
    "url": "assets/js/14.74ce146c.js",
    "revision": "48c8adb4a13fd52d4bf316fbd2997b84"
  },
  {
    "url": "assets/js/15.de691ca5.js",
    "revision": "d95b24f51c789956215635824fb2a3b1"
  },
  {
    "url": "assets/js/16.399b2c5e.js",
    "revision": "6ca2628ad295411e212bc25938fc7a08"
  },
  {
    "url": "assets/js/17.81641bb6.js",
    "revision": "b8a7d618e4c4aa6c2925320f36aa9314"
  },
  {
    "url": "assets/js/18.2dd5ca43.js",
    "revision": "1f07ab1c31e3b7e89087abb41300fb85"
  },
  {
    "url": "assets/js/19.73ea2e7f.js",
    "revision": "5a6828ddb20243394b566a0434a39e95"
  },
  {
    "url": "assets/js/2.83c82384.js",
    "revision": "79220a96f290e7a7e138a3d999ba0ce8"
  },
  {
    "url": "assets/js/20.86c7b19d.js",
    "revision": "815b73e0b5f11bdf26f3e726d26b9540"
  },
  {
    "url": "assets/js/21.8f3399ba.js",
    "revision": "777d4c2ca2261ef2afd0de80f909683e"
  },
  {
    "url": "assets/js/22.66571ca7.js",
    "revision": "4f6312a178c0ab63b1015d0fb7d1359f"
  },
  {
    "url": "assets/js/23.c6046fc0.js",
    "revision": "d9992214c42d4ee5bf32d403dbf712da"
  },
  {
    "url": "assets/js/24.a8de9b68.js",
    "revision": "8ebbeb68d67847797e1384745fbd9fe2"
  },
  {
    "url": "assets/js/25.84dcd295.js",
    "revision": "d41cf7d8fbeba6a09a27f0a3e70db2fc"
  },
  {
    "url": "assets/js/26.0003843b.js",
    "revision": "ad161b4ec778f3a95728749df10851c6"
  },
  {
    "url": "assets/js/27.c221be4a.js",
    "revision": "13164cd2afbc487c5dd11b6d881ffa50"
  },
  {
    "url": "assets/js/28.0cd01812.js",
    "revision": "c336da99ebe71f8bb6a83c9b95668215"
  },
  {
    "url": "assets/js/29.f1630d9f.js",
    "revision": "0b10015e4d133f5b9d8ec02d1ec2f2ce"
  },
  {
    "url": "assets/js/3.5c2cfdfe.js",
    "revision": "24d67395d3de818a042ecd3d7b6e4b1a"
  },
  {
    "url": "assets/js/30.d1285bab.js",
    "revision": "b4c605dd9f90a7e1078a046969184a36"
  },
  {
    "url": "assets/js/31.a78b78ef.js",
    "revision": "b87f8bc6adcb90feb79c7eeedba719be"
  },
  {
    "url": "assets/js/32.0d416725.js",
    "revision": "1aa735dbc556411bbaaf89b384f48375"
  },
  {
    "url": "assets/js/33.3dbacf24.js",
    "revision": "19056b8242e30817b7df78654eec6f4c"
  },
  {
    "url": "assets/js/4.ea9cd395.js",
    "revision": "01dcedc71a8d2e864b779d7d34c6f222"
  },
  {
    "url": "assets/js/5.a13d0efc.js",
    "revision": "45ea1159811ae8c1e18b0da5ea2b0c70"
  },
  {
    "url": "assets/js/6.3dcd2380.js",
    "revision": "9c999fcf9cb2ac2962fe4d27f53e0099"
  },
  {
    "url": "assets/js/7.9cac569e.js",
    "revision": "1c385f172aac852183f39a65e12208b9"
  },
  {
    "url": "assets/js/9.307a88fc.js",
    "revision": "f25962130e6684b58fc1b174b05c7287"
  },
  {
    "url": "assets/js/app.6eca3108.js",
    "revision": "bfdf9c2194c346153db441b4615c7c4e"
  },
  {
    "url": "authors/index.html",
    "revision": "7dccefc90fafb15024e118156a98d7bf"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "63bb63008a10e65b0372dfe098cab6ae"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "avatar/ogi.png",
    "revision": "20d83422204ffd4d32a971c955e870d7"
  },
  {
    "url": "avatar/yamamoto.jpg",
    "revision": "d7adbce3fe9f1424b0482038ca08c7b7"
  },
  {
    "url": "categories/index.html",
    "revision": "1359d7d18cff93ed6bc27d0e2ceb23b7"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "9c91ad6739836e9b5866b77049379b7f"
  },
  {
    "url": "comingsoon.png",
    "revision": "154829c8262da21ecc2b7e62e802e9ae"
  },
  {
    "url": "contact/index.html",
    "revision": "c04b4f6ac100287a8189df8e067086bc"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "fizzee-bg.png",
    "revision": "e2e2f8515a510280357e3b5ec0ea392b"
  },
  {
    "url": "fizzee-icon.png",
    "revision": "f2001a05b39948683cc1ec63cfc0cb46"
  },
  {
    "url": "fizzee-logo-icon.png",
    "revision": "550a1869532e7dccd902ed5e10fc2c73"
  },
  {
    "url": "fizzee-logo.png",
    "revision": "a715ff0429bd4a72cac9e845b37586f2"
  },
  {
    "url": "fizzee-logo.svg",
    "revision": "8c00a119984a5ebb4c7134ef431ea159"
  },
  {
    "url": "fizzee-logo@2x.png",
    "revision": "852d721ec3b6f85f6a5d39167a0f6680"
  },
  {
    "url": "fizzee-logo@2x.svg",
    "revision": "8c00a119984a5ebb4c7134ef431ea159"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "images/posts/2019/4/fizzee-icon.png",
    "revision": "f2001a05b39948683cc1ec63cfc0cb46"
  },
  {
    "url": "index.html",
    "revision": "b7090efbe403802e80476bfe70aab55c"
  },
  {
    "url": "posts/index.html",
    "revision": "4beec29ed222ca6794634bac746b3797"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
