const CACHE_NAME = 'tosai-app-v26';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json?v=26',
  'https://cdn.jsdelivr.net/gh/gilson12345barbosa-debug/tosai-assets@main/icon-192x192.png',
  'https://cdn.jsdelivr.net/gh/gilson12345barbosa-debug/tosai-assets@main/icon-512x512.png'
];

// Instalação
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Ativação
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Intercepta requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
