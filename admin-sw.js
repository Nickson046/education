/* ================================================
   MarinGlobal Admin — Service Worker v2
   ================================================ */

const CACHE = 'mg-admin-v2';
const ASSETS = [
  '/education/pages/admin.html',
  '/education/js/firebase-config.js',
  '/education/admin-manifest.json',
  '/education/icon-192.png',
  '/education/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Skip Firebase & external API calls — always need live data
  const url = e.request.url;
  if (url.includes('firebasejs') || url.includes('firestore') ||
      url.includes('googleapis') || url.includes('gstatic')) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok && e.request.method === 'GET') {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});