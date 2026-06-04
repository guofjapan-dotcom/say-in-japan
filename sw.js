var CACHE = 'jpsp-v9-033';
var ASSETS = [
  '/say-in-japan/',
  'index.html',
  'css/style.css',
  'js/data/scenes.js',
  'js/data/phrases.js',
  'js/data/emergency.js',
  'js/data/icons.js',
  'js/core/storage.js',
  'js/core/speak.js',
  'js/core/router.js',
  'js/core/converter.js',
  'js/app.js',
  'js/vendor/cn2t.js',
  'manifest.json'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
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
    }).then(function() {
      return self.clients.matchAll().then(function(clients) {
        clients.forEach(function(client) {
          client.postMessage({ type: 'version', version: '0.33', cache: CACHE });
        });
      });
    })
  );
});

self.addEventListener('message', function(e) {
  if (e.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
