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
    "revision": "b90f5864700b0431f488d27c97ad0433"
  },
  {
    "url": "404.png",
    "revision": "6d80a471e6df85952532eb9fd220d23c"
  },
  {
    "url": "about/index.html",
    "revision": "cf0862e11b3fc73a7329f6b18e97f749"
  },
  {
    "url": "assets/css/0.styles.0a4cbbe6.css",
    "revision": "cd97b83171bbe3ee74f13d4551853fee"
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
    "url": "assets/js/1.28bb2216.js",
    "revision": "f2b76978d78d30fbc6e2dd820334cb35"
  },
  {
    "url": "assets/js/10.9c4af8d8.js",
    "revision": "dcd07d5474a492e4f838d10d2dfa549d"
  },
  {
    "url": "assets/js/11.cf194083.js",
    "revision": "c8d4956cd84ca295b2df1f96e5343f9f"
  },
  {
    "url": "assets/js/12.d0ad61a6.js",
    "revision": "45192675ef45cab7182588f33d070cbd"
  },
  {
    "url": "assets/js/13.0db17bef.js",
    "revision": "aff6d81e46de8834172a737bb00b9277"
  },
  {
    "url": "assets/js/14.95f02a38.js",
    "revision": "8679f568dad040daf1e3ee6ecdd18a38"
  },
  {
    "url": "assets/js/15.5209c672.js",
    "revision": "1a82378f3370d93237fa625e6b36897b"
  },
  {
    "url": "assets/js/16.e22665df.js",
    "revision": "3870a1c8ae1e3a8d587d7df72a97baad"
  },
  {
    "url": "assets/js/17.10f25241.js",
    "revision": "53dcb41450859401dd8cf8093ac20603"
  },
  {
    "url": "assets/js/18.c282f890.js",
    "revision": "f37fd5f35dc4ebf461b15c7b72f09a7f"
  },
  {
    "url": "assets/js/19.3bc47c97.js",
    "revision": "bf9494a05bf5d1c308b724ac14906fa8"
  },
  {
    "url": "assets/js/2.d1419961.js",
    "revision": "9f19bdc6198fd127ec016c30956a4b85"
  },
  {
    "url": "assets/js/20.751abb51.js",
    "revision": "765e71438dcd5a0c609193123dc233f8"
  },
  {
    "url": "assets/js/21.78948472.js",
    "revision": "edfb8dfe38567727e474e4cc4ce5e2eb"
  },
  {
    "url": "assets/js/22.f2ba4d3d.js",
    "revision": "396ff80f8de0f1c12db05c89d70df4ac"
  },
  {
    "url": "assets/js/23.1a208023.js",
    "revision": "eae2271cefc6ef53b0037a939df4f9c6"
  },
  {
    "url": "assets/js/24.c583086b.js",
    "revision": "03489e853597e2815b032c652b8d8e8e"
  },
  {
    "url": "assets/js/25.70bb1331.js",
    "revision": "266202afd351d5839b3d248c713225cd"
  },
  {
    "url": "assets/js/26.9ca68995.js",
    "revision": "e42f4a540ff128822a47735c73a4a946"
  },
  {
    "url": "assets/js/27.f69f85e6.js",
    "revision": "2b1c556e86743afaad913579aa7fcbaf"
  },
  {
    "url": "assets/js/28.581337d2.js",
    "revision": "0acc7dad85b10325991e17936ee78513"
  },
  {
    "url": "assets/js/29.784c3353.js",
    "revision": "390eef91ee49861fc993aba71b06b0e3"
  },
  {
    "url": "assets/js/3.8c6a2c95.js",
    "revision": "7836cbee15c73bccb6f86dfdc3aa45e7"
  },
  {
    "url": "assets/js/30.17e181dc.js",
    "revision": "a42a33b9bc364c284035da6e5f1b54d5"
  },
  {
    "url": "assets/js/31.36b8e2cd.js",
    "revision": "71a5e08d677ddb5b801a240f966720ee"
  },
  {
    "url": "assets/js/32.8cdd6d3f.js",
    "revision": "5eb0e6a3ea662c3f88d1263de657c7e6"
  },
  {
    "url": "assets/js/33.6d44ba99.js",
    "revision": "b6d2806da31de3d86d6b0083bb084c4f"
  },
  {
    "url": "assets/js/34.e9da2eb8.js",
    "revision": "4cea1806f33dacb4fe86aeb14f918940"
  },
  {
    "url": "assets/js/35.410d2dc2.js",
    "revision": "72606ea47385f92355d3f4da4e835587"
  },
  {
    "url": "assets/js/4.ec0a47ab.js",
    "revision": "bcc254fb958ab6b6c1ccb4d3fca42cf4"
  },
  {
    "url": "assets/js/5.486bd66e.js",
    "revision": "b6c7abee3ad52c91d47492d8fccdfd86"
  },
  {
    "url": "assets/js/6.7fec2c3c.js",
    "revision": "c90eb64244169f1a130911152ca08676"
  },
  {
    "url": "assets/js/7.efc2d7bf.js",
    "revision": "728eacd17487c466117491eefaf02e77"
  },
  {
    "url": "assets/js/9.1f0aaf58.js",
    "revision": "ea7dfda98a0e89cc193a51555a7d5341"
  },
  {
    "url": "assets/js/app.d88c201b.js",
    "revision": "f300f5861d1f27d8a1a64707abab67e5"
  },
  {
    "url": "authors/fizzee.html",
    "revision": "9492d7369d3f2833a12257347d3a6f2d"
  },
  {
    "url": "authors/index.html",
    "revision": "a8a5e763261887e01271c781a7bb8a9b"
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
    "revision": "68c870adc5c2c62191638eefc0a58fc3"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "006d590985f448e46954bff909a9fdc0"
  },
  {
    "url": "comingsoon.png",
    "revision": "154829c8262da21ecc2b7e62e802e9ae"
  },
  {
    "url": "contact/index.html",
    "revision": "f5277922a5f07399f27f01b1ac78d924"
  },
  {
    "url": "favicon()/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon()/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon()/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon()/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon()/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon()/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon()/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon()/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon()/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon()/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon()/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon()/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon()/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon()/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon()/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon()/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon()/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon()/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon()/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon()/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon()/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon()/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon()/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon()/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon()/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon()/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon()/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon()/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon()/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon()/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon()/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon()/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon()/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon()/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/ms-icon-310×310.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "6ecf2f2c5ec26c80f89f7d8500124a42"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "e4ce0be54ca09cae4e4b53bbdece199d"
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
    "url": "index.html",
    "revision": "39a981ead6796d9be5232eaf67d9afe6"
  },
  {
    "url": "posts/index.html",
    "revision": "8fe27fcddbece2d873de47a031ac0a92"
  },
  {
    "url": "posts/test.html",
    "revision": "808d56c312f99f378dbda51e8d8144d2"
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
