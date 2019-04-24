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
    "revision": "a6de283d66c6dfc7b33415c432b36049"
  },
  {
    "url": "404.png",
    "revision": "6d80a471e6df85952532eb9fd220d23c"
  },
  {
    "url": "about/index.html",
    "revision": "eb8c675c525d5a97dd23c0fe934bd818"
  },
  {
    "url": "assets/css/0.styles.f04fa232.css",
    "revision": "f8d8d9d673fa57d9580e7bae6cba62e9"
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
    "url": "assets/js/12.eda322f6.js",
    "revision": "12d84b0092d7175f48b4d79aa05e4ba5"
  },
  {
    "url": "assets/js/13.cfd42152.js",
    "revision": "593f5051dabc88e34aadcb6b0fa9aeab"
  },
  {
    "url": "assets/js/14.95f02a38.js",
    "revision": "8679f568dad040daf1e3ee6ecdd18a38"
  },
  {
    "url": "assets/js/15.c15098e7.js",
    "revision": "76f6e682f922060758b28d8d0fe40242"
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
    "url": "assets/js/21.0518d22e.js",
    "revision": "93be42a29a4d0efe494345e912e2691d"
  },
  {
    "url": "assets/js/22.550d7a49.js",
    "revision": "cc293b98c1fca90e847ff583cb2f12d9"
  },
  {
    "url": "assets/js/23.5b05d3be.js",
    "revision": "4b50ea992910b4be7a79ee07af15f891"
  },
  {
    "url": "assets/js/24.cb8412e6.js",
    "revision": "380a8e165b71cee9933525fa1f81a100"
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
    "url": "assets/js/29.0b0506cf.js",
    "revision": "852c5ad4633e2e864f5a9a6c0cf3fdbc"
  },
  {
    "url": "assets/js/3.8c6a2c95.js",
    "revision": "7836cbee15c73bccb6f86dfdc3aa45e7"
  },
  {
    "url": "assets/js/30.c00214e8.js",
    "revision": "594109b19737dad560adb954eff66285"
  },
  {
    "url": "assets/js/31.2b6db468.js",
    "revision": "8b5ad6fd02d11da6f00945475abe6c51"
  },
  {
    "url": "assets/js/32.85dd7821.js",
    "revision": "6ade195f29c4879de764f0d1b3ba1812"
  },
  {
    "url": "assets/js/33.94416dfb.js",
    "revision": "7db4a04e18244dea2407a9d52caa8939"
  },
  {
    "url": "assets/js/34.2faa2403.js",
    "revision": "caedc4bb8c4bd6c94e9228f49051302c"
  },
  {
    "url": "assets/js/35.f0b1d90b.js",
    "revision": "ab225b1da1b86c5313715a88a98f8508"
  },
  {
    "url": "assets/js/36.849c1ca2.js",
    "revision": "37edba8a287ea1d09b1553a6684c62d8"
  },
  {
    "url": "assets/js/4.7c710ef0.js",
    "revision": "2fc0d5f4cd5d6afc41f39ada6ad39170"
  },
  {
    "url": "assets/js/5.c5daf6a0.js",
    "revision": "60c13c6c12c79cfffaa6bb2cf5349cbe"
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
    "url": "assets/js/app.0f935715.js",
    "revision": "e9ff211403af7a8b9c08444d7db03d17"
  },
  {
    "url": "authors/fizzee.html",
    "revision": "4e60cb7e62fa4d972e76ba31688f9589"
  },
  {
    "url": "authors/index.html",
    "revision": "14f447a5025d6ecb16fdda2d9590ee4a"
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
    "revision": "b450bfaf493ac1df7d4b848ed6f098e7"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "dbfe3663800f516fb655ea0b9e831ff2"
  },
  {
    "url": "comingsoon.png",
    "revision": "154829c8262da21ecc2b7e62e802e9ae"
  },
  {
    "url": "contact/index.html",
    "revision": "37ab78ef99d7260fb5eee3ce4e7fc160"
  },
  {
    "url": "fallback.svg",
    "revision": "8c00a119984a5ebb4c7134ef431ea159"
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
    "revision": "ed1d0605febf5db9631b2a3239d97d43"
  },
  {
    "url": "posts/index.html",
    "revision": "d7c1741eb624d39d7c9ec369d97949e7"
  },
  {
    "url": "posts/test.html",
    "revision": "76225876bd474fbe3be90c26f73eeefb"
  },
  {
    "url": "posts/test2.html",
    "revision": "f2be7b62d2eec092183c1265357ffcfc"
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
