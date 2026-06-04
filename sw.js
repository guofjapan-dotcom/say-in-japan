var CACHE = 'jpsp-v4-1';
var ASSETS = [
  '/',
  'index.html',
  'css/style.css',
  'js/data/scenes.js',
  'js/data/phrases.js',
  'js/data/emergency.js',
  'js/data/icons.js',
  'js/core/storage.js',
  'js/core/speak.js',
  'js/core/router.js',
  'js/app.js',
  'manifest.json'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; }).map(function(k) {
          return caches.delete(k);
        })
      );
    })
  );
});
