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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a09381d3ebc1384ec521b2ab8c32d52a"
  },
  {
    "url": "About/index.html",
    "revision": "f360741678d955c661e8741deb37d2a5"
  },
  {
    "url": "About/test.html",
    "revision": "ed727162cc50e76392e042fc511fabe5"
  },
  {
    "url": "assets/css/5.styles.462f14c1.css",
    "revision": "82ec041eb61bf86cb7ef91c5edcc420f"
  },
  {
    "url": "assets/img/image.1560810b.png",
    "revision": "1560810b9de46ee54e5d682b4604e40e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.57aa7fcf.js",
    "revision": "a8dff25c7de482c0bd55c98ca91ce2e6"
  },
  {
    "url": "assets/js/1.84ef3644.js",
    "revision": "4537d46ef76700540979fb644caa77e9"
  },
  {
    "url": "assets/js/2.66a88d8a.js",
    "revision": "dee4583b536332d6534fae6a87309211"
  },
  {
    "url": "assets/js/3.d8734eab.js",
    "revision": "447639c5f46109b5b95baabceb68d2bc"
  },
  {
    "url": "assets/js/4.cc230da3.js",
    "revision": "c647971c8839ce30fd5934095717dd70"
  },
  {
    "url": "assets/js/app.9cfad044.js",
    "revision": "6096ecd71b43ee7a50f5883a25922a6e"
  },
  {
    "url": "hero.png",
    "revision": "bffa99b58ec02725d7244d876ed6baed"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "25165e377284ab9972acd4cb3dd6b569"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "6ba05d32a78e8d89a6e9683282aa5e8c"
  },
  {
    "url": "index.html",
    "revision": "0ac6aa0a54e85f7b5be4019cc9ad1869"
  },
  {
    "url": "Tools/index.html",
    "revision": "05ac2c7d1410af99095e9f91e2d52d3f"
  },
  {
    "url": "Workflow/index.html",
    "revision": "f992c8d9ac58d0559a46f30cb2739ed4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
