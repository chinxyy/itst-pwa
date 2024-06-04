
/* Ito yung Service Worker - Ang primary function nito siya yung nagsasave ng files ng nakadeclare para if ever offline ang app yung nakasave ang iloload and if ever na online ulit si SW ang magccheck sa server if may changes sa data and maguupdate */

/* Ito yung name ng Cache (mit502-pwa) kapag sinave yung data/files sa browser */
var cacheName = 'itst-pwa';
/* Ito yung name mga files na iccache/ issave sa browser */
var filesToCache = [
  '/',
  '/index.html',
  '/script.js',
  '/sw.js',
  '/styles.css',
  '/js/main.js',
  '/manifest.json',
  '/img/ay.jpg',
  '/img/csharp.jpg',
  '/img/el.jpg',
  '/img/fb.jpg',
  '/img/hobby1.jpg',
  '/img/hobby2.jpg',
  '/img/hobby3.jpg',
  '/img/hobby4.jpg',
  '/img/hobby5.jpg',
  '/img/hotarubinomorie.jpg',
  '/img/ig.jpg',
  '/img/ih.jpg',
  '/img/js.jpg',
  '/img/ih.jpg',
  '/img/logo.jpg',
  '/img/logo1.jpg',
  '/img/logo2.jpg',
  '/img/logo3.jpg',
  '/img/logo4.jpg',
  '/img/lovelyrunner.jpg',
  '/img/luffy.jpg',
  '/img/luffyred.jpg',
  '/img/onepiece.jpg',
  '/img/palagi.jpg',
  '/img/paulo.jpg',
  '/img/python.jpg',
  '/img/phone.jpg',
  '/img/zel.jpg',
  '/img/zi.jpg',
];

/* Once nagload ang page/file iccache lahat ng nakaedeclare na files sa taas filesToCache */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Kapag nagoffline ang app mo ito yung mga iloload nya na nakacache doon sa var filesToCache */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
