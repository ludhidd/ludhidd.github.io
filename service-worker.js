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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "83a2a30c6f0895d76f5f5e7a835f23fb"
  },
  {
    "url": "about/index.html",
    "revision": "12e3b7b369b2f9efe5c0b182d4de0fcf"
  },
  {
    "url": "assets/css/0.styles.fd7062e5.css",
    "revision": "adb2736464f8a7273667ea9f0ff61b78"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/iconfont.051ee1c0.svg",
    "revision": "051ee1c0370838753e121ce16fa56200"
  },
  {
    "url": "assets/js/1.f65b4641.js",
    "revision": "525aa312546fd7c41e53a275c069049d"
  },
  {
    "url": "assets/js/10.db89a59b.js",
    "revision": "7e50d7c8787816ea7f415900e502346e"
  },
  {
    "url": "assets/js/11.341c37d8.js",
    "revision": "00d4f993219e48bc5876d91fb3e9b3e9"
  },
  {
    "url": "assets/js/12.e42045a1.js",
    "revision": "f1cc87773dde5d532e3f111c857a2daa"
  },
  {
    "url": "assets/js/13.d641fa4a.js",
    "revision": "fea692a554870d4a1cc442b3744579dd"
  },
  {
    "url": "assets/js/14.ae529630.js",
    "revision": "b57332c2c40d2e6d47051ebdc5e9d85a"
  },
  {
    "url": "assets/js/15.b2da61f2.js",
    "revision": "24fd737b30f58b5eda62f984886088bb"
  },
  {
    "url": "assets/js/2.a30677e6.js",
    "revision": "8031c9358d6ce369810c73de388e6344"
  },
  {
    "url": "assets/js/4.20b23e19.js",
    "revision": "3ed3d9436db5aacd6194e55b768ae1c1"
  },
  {
    "url": "assets/js/5.0c7a771a.js",
    "revision": "ddf7c218fe3634fc3499f6118deca648"
  },
  {
    "url": "assets/js/6.f999bf48.js",
    "revision": "7d4046e8673d257f0ccc185779aa1c9d"
  },
  {
    "url": "assets/js/7.29ef0eea.js",
    "revision": "bde32b6d891175513e02f6802dc741ac"
  },
  {
    "url": "assets/js/8.cfb17b07.js",
    "revision": "6bee532f709548cd60cf5aa30ba4eaa3"
  },
  {
    "url": "assets/js/9.931aa3e2.js",
    "revision": "057132dab89ca96d4322662b0c618c3f"
  },
  {
    "url": "assets/js/app.8d0e82d3.js",
    "revision": "6f9e5c14f8472c1240f8f36155ee719a"
  },
  {
    "url": "blog/index.html",
    "revision": "cf2b0e5365a9d3d8bec878fc224c7d21"
  },
  {
    "url": "images/bgImg/404.jpg",
    "revision": "384fe508a5a8f46cdbb01e85c4df0048"
  },
  {
    "url": "images/bgImg/indexBg.jpg",
    "revision": "2b4c42de7268995d8e9e81098f8f1c8f"
  },
  {
    "url": "images/funky-lines.png",
    "revision": "7c2eac8723aa1d62fc78876d36bb3833"
  },
  {
    "url": "images/goTop.png",
    "revision": "b0605bbb765779aa0d422643acfdc3bf"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "4167f29e688a80e0dda7dc1f43f59371"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "1db0639926bd7b443796f9f7482103e9"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "654920374c77e072ad84943f68e5dd32"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "c7dd7e414e142c9c2c4b97e74b4b8c91"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "7abc396f34b473d9e1e7897f7c48a768"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "57931bf89dbdaad3a56300ee8327a687"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "bb3282639a7242c06f0546a9b43e7feb"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "89597562b0983e8786a0efb0c6f2e273"
  },
  {
    "url": "images/logo.png",
    "revision": "57931bf89dbdaad3a56300ee8327a687"
  },
  {
    "url": "images/postsImg/49b5c620jw1e0vnjfotxuj_07 拷贝.jpg",
    "revision": "d04832b9682673b9cb960c9a8f68453b"
  },
  {
    "url": "images/postsImg/49b5c620jw1e0vnjfotxuj_09 拷贝.jpg",
    "revision": "70e27348acb4a4db08c54dadb05ecb93"
  },
  {
    "url": "images/postsImg/49b5c620jw1e0vnjfotxuj_11 拷贝.jpg",
    "revision": "6fce5d1eabc2f22d745b83da6c377725"
  },
  {
    "url": "images/postsImg/49b5c620jw1e0vnjfotxuj_13 拷贝.jpg",
    "revision": "a1a41ae466cd11e871af6bea199336d0"
  },
  {
    "url": "images/postsImg/49b5c620jw1e0vnjfotxuj_15 拷贝.jpg",
    "revision": "8a07e662f80f13376d53b50ee4f1b5d1"
  },
  {
    "url": "images/postsImg/49b5c620jw1e0ww66hxtgj.jpg",
    "revision": "bc470d3c846437d4ef5c630938b87584"
  },
  {
    "url": "images/postsImg/49b5c620jw1e1187pbfsgj 拷贝.jpg",
    "revision": "28629e18375ef25ea40247e3beb44bfb"
  },
  {
    "url": "images/postsImg/49b5c620jw1e12csqy315j 拷贝.jpg",
    "revision": "9490f0f89a843c7e21312aa4a6ae1d04"
  },
  {
    "url": "images/postsImg/49b5c620jw1e13qgh3jttj 拷贝.jpg",
    "revision": "f158b2d09bb5f82b74d2991a0b7e8d58"
  },
  {
    "url": "images/postsImg/49b5c620jw1e13qhby8zcj 拷贝.jpg",
    "revision": "4e19aa4230faf55d2e3b4029b7bd2b04"
  },
  {
    "url": "images/postsImg/49b5c620jw1e163hvp5a4j 拷贝.jpg",
    "revision": "93d00cd6ffeb85d24cabbc767e6d8d8b"
  },
  {
    "url": "images/postsImg/49b5c620jw1e163hvp5a4j.jpg",
    "revision": "10e8e35ad5c3e0a620f264a072c0c59e"
  },
  {
    "url": "images/postsImg/49b5c620jw1e1ak7naz3hj.jpg",
    "revision": "f18ec7843137790811470ff35d0afcfa"
  },
  {
    "url": "images/postsImg/49b5c620jw1e1cv9z1h3bj 拷贝.jpg",
    "revision": "04c3316d01781d9d1f2efc5e0607d58f"
  },
  {
    "url": "images/postsImg/49b5c620jw1e1inkrozp0j 拷贝.jpg",
    "revision": "fb4ec9e46f897a7be19b1eb4fe4eee41"
  },
  {
    "url": "images/postsImg/49b5c620jw1e1vd7etsp3j.jpg",
    "revision": "46997dece54479b5ad849e64ebe867c9"
  },
  {
    "url": "images/postsImg/49b5c620jw1e1wjds2mv8j 拷贝.jpg",
    "revision": "11172c1c09228daff176f07d225ce1c0"
  },
  {
    "url": "images/postsImg/49b5c620jw1e1wjduhi8ej 拷贝.jpg",
    "revision": "2e2a419d7277cf07d43a671c463b380e"
  },
  {
    "url": "images/postsImg/49b5c620jw1e1wjduhi8ej.jpg",
    "revision": "63b026bd507f6f4ee18a7794a50527bc"
  },
  {
    "url": "images/postsImg/49b5c620jw1e283kum3x5j 拷贝.jpg",
    "revision": "33c0d101ea3e0f70d4eeb4d3218bb21c"
  },
  {
    "url": "images/postsImg/49b5c620jw1e2lrckzhnsj 拷贝.jpg",
    "revision": "836efbb9ad290a952f4dfb8833cf96f1"
  },
  {
    "url": "images/postsImg/49b5c620jw1e2rr9vn2i1j 拷贝.jpg",
    "revision": "4128a6c75c0d88cd07b30e7e2b1e2914"
  },
  {
    "url": "images/postsImg/49b5c620jw1e2yujov6gxj 拷贝.jpg",
    "revision": "6e0d0258cf898ab0fc95ec961aab39bb"
  },
  {
    "url": "images/postsImg/49b5c620jw1e34k2hk1jbj 拷贝.jpg",
    "revision": "ffa42fe56c4607e7b755d56fa08ea7ed"
  },
  {
    "url": "images/postsImg/49b5c620jw1e3lwqdoz84j 拷贝.jpg",
    "revision": "dd4f0f7678c470c7822cbe2e265d2fe7"
  },
  {
    "url": "images/postsImg/49b5c620jw1e3u2frbtjdj20e80lcq6k 拷贝.jpg",
    "revision": "d99ab76ff9ca303155bbe94518f1bf9a"
  },
  {
    "url": "images/postsImg/49b5c620jw1e4jn4fdfzdj20e80lctcz 拷贝.jpg",
    "revision": "832699e173abd508a9584d2953d1fe10"
  },
  {
    "url": "images/postsImg/49b5c620jw1e644x6ub1wj20e80lcq4y 拷贝.jpg",
    "revision": "b4906916323271511a4645ff086950f0"
  },
  {
    "url": "images/postsImg/49b5c620jw1e6vvh8jrtlj20e80lcaem 拷贝.jpg",
    "revision": "398f01232571e55d6d43f6e0350b60e1"
  },
  {
    "url": "images/postsImg/49b5c620jw1e7mfpdwi1oj20e80lcwi4 拷贝.jpg",
    "revision": "a25de58a3b25d9aa69cf2202eb84eb30"
  },
  {
    "url": "images/postsImg/49b5c620jw1eb5nb2m3dbj20e80lcq4x 拷贝.jpg",
    "revision": "484736260802c816d0ce3117c3d69363"
  },
  {
    "url": "images/postsImg/49b5c620jw1eb5nb5r6kaj20e80lcdiv 拷贝.jpg",
    "revision": "11f0234f144e2f94ec1dd5b04235fe01"
  },
  {
    "url": "images/postsImg/posts1.jpg",
    "revision": "25f1464d2c2284fa8553bf527e8c0dd9"
  },
  {
    "url": "images/postsImg/posts2.jpg",
    "revision": "572c5c3a7daed637deb1e476a667d5bb"
  },
  {
    "url": "images/postsImg/posts3.jpg",
    "revision": "9c33271985ed674d36b18bc6e1f350bc"
  },
  {
    "url": "images/postsImg/posts4.jpg",
    "revision": "1ea72a97dfd05cc7ecf13ad0e4d7b020"
  },
  {
    "url": "index.html",
    "revision": "7e08acb16df61579b417aeea4e1beef5"
  },
  {
    "url": "music/cover/nogiveup.png",
    "revision": "8e5b70dd43ca60f59de2576d95f506c9"
  },
  {
    "url": "music/cover/yujian.jpg",
    "revision": "312f6f7281b2d16fbb5c19d27b41062d"
  },
  {
    "url": "posts/git语法简记.html",
    "revision": "81e670b2a9449a2a98ce4ffdb93f1886"
  },
  {
    "url": "posts/Markdown语法简记.html",
    "revision": "ee2fb6723c4510ee7ec75589f21edaf3"
  }
].concat(self.__precacheManifest || []);
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
