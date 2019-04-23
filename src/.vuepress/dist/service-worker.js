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
    "revision": "7c67be5bdd81072509b1f53ffbd6c893"
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
    "revision": "f3f0314f4ca695de3ae9080fd92b861b"
  },
  {
    "url": "assets/css/0.styles.ec0c0d51.css",
    "revision": "68cc5e53a7beaa592050a26a671cbd04"
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
    "url": "assets/js/10.075cb0c1.js",
    "revision": "24bfe5231e233879d139895eba870fd1"
  },
  {
    "url": "assets/js/11.cf194083.js",
    "revision": "c8d4956cd84ca295b2df1f96e5343f9f"
  },
  {
    "url": "assets/js/12.bda6c4bc.js",
    "revision": "1715e740281a70003e86a5b79dfa7f3a"
  },
  {
    "url": "assets/js/13.c0090ce2.js",
    "revision": "3c1c93eb3ed1fda6a3aefedd5897a4fa"
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
    "url": "assets/js/16.327f2a81.js",
    "revision": "026d04514689110e9b5dd746e66401cd"
  },
  {
    "url": "assets/js/17.ba37166e.js",
    "revision": "0d15e2cf00f2d50a59710a792927d106"
  },
  {
    "url": "assets/js/18.3a21a850.js",
    "revision": "fead12d8482baf90a4462977c3bf74b9"
  },
  {
    "url": "assets/js/19.3bc47c97.js",
    "revision": "bf9494a05bf5d1c308b724ac14906fa8"
  },
  {
    "url": "assets/js/2.6fb4c99a.js",
    "revision": "e03d7e5a93f606a93feefeca190c318d"
  },
  {
    "url": "assets/js/20.c460caa9.js",
    "revision": "3370489c9b6e164b2e93aa02734ad4f8"
  },
  {
    "url": "assets/js/21.ec08d375.js",
    "revision": "c340b588c03aadef0a53e8f15d6ef6cc"
  },
  {
    "url": "assets/js/22.8b5b2716.js",
    "revision": "2136a68af868e52295a1de71402d960d"
  },
  {
    "url": "assets/js/23.8835c2c1.js",
    "revision": "f1113df4885785aa0791ecdf7582b332"
  },
  {
    "url": "assets/js/24.3bafa98c.js",
    "revision": "5b20f3a88109a89977f47b975320fd7f"
  },
  {
    "url": "assets/js/25.f5385865.js",
    "revision": "d20587b874d2f391be1313b310a77a13"
  },
  {
    "url": "assets/js/26.71a71d0b.js",
    "revision": "329f12f7715ccdd3c167d714fad61338"
  },
  {
    "url": "assets/js/27.7b559f64.js",
    "revision": "d4104e89171e98a63208078aad1f8803"
  },
  {
    "url": "assets/js/28.2d47079a.js",
    "revision": "dfc5ebd4cd8aa00263de41c804a0d174"
  },
  {
    "url": "assets/js/29.097952d6.js",
    "revision": "55cc50ef911288b663d14bd55651732a"
  },
  {
    "url": "assets/js/3.94910607.js",
    "revision": "aac4eac7b1a2234f195a23f3b9185901"
  },
  {
    "url": "assets/js/30.d883ef35.js",
    "revision": "0aef3ead2071fb8c4196eb4282b62c13"
  },
  {
    "url": "assets/js/31.d3d141c0.js",
    "revision": "493cafaeff59bc601fb8f8ce284780f2"
  },
  {
    "url": "assets/js/32.328e9f19.js",
    "revision": "74bb91558b337240cc540d444273451a"
  },
  {
    "url": "assets/js/33.61e674fd.js",
    "revision": "9265d78b536f8290523007c71d79aca5"
  },
  {
    "url": "assets/js/34.256b90a2.js",
    "revision": "349dbfd2a6effcd75bb78b80b6e067d4"
  },
  {
    "url": "assets/js/4.ec0a47ab.js",
    "revision": "bcc254fb958ab6b6c1ccb4d3fca42cf4"
  },
  {
    "url": "assets/js/5.735abe75.js",
    "revision": "195d5881894ae7fe7a329b78a24a341f"
  },
  {
    "url": "assets/js/6.9b579872.js",
    "revision": "7daa6749ed9b176f2a98281eec45ae58"
  },
  {
    "url": "assets/js/7.efc2d7bf.js",
    "revision": "728eacd17487c466117491eefaf02e77"
  },
  {
    "url": "assets/js/9.a74e267f.js",
    "revision": "1c0ac29892850369d6a0767718247b96"
  },
  {
    "url": "assets/js/app.b01f2c1f.js",
    "revision": "0aa870dd0d21beee738b08299e399e17"
  },
  {
    "url": "authors/index.html",
    "revision": "fcd186cedebecf3d5a32dd210f13e608"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "c6c9588e145500ab2fe534e502f33d8d"
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
    "revision": "97a1e0ee36b5d546baf710bfb8093285"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "dc9c29c2966b32041bdb6e760688e76e"
  },
  {
    "url": "comingsoon.png",
    "revision": "154829c8262da21ecc2b7e62e802e9ae"
  },
  {
    "url": "contact/index.html",
    "revision": "83d0f843e624f70faf8340423fb5196a"
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
    "revision": "9f11e76b138e0db14879afd0c7eec0da"
  },
  {
    "url": "posts/index.html",
    "revision": "177a768bb5fddd5648d207c2c1b63715"
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
