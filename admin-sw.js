/* ================================================
   MarinGlobal Admin — Service Worker
   Enables offline access + "Install App" prompt
   ================================================ */

const CACHE_NAME = 'mg-admin-v1';
const CACHE_URLS = [
  './pages/admin.html',
  './js/firebase-config.js',
  './js/main.js',
  './js/components.js',
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Mono&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js'
];

/* Install — cache key files */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_URLS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

/* Activate — clean old caches */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* Fetch — network first, fallback to cache */
self.addEventListener('fetch', event => {
  // Skip Firebase API requests — always need live data
  if (event.request.url.includes('firebasejs') ||
      event.request.url.includes('googleapis.com/firebase') ||
      event.request.url.includes('firestore.googleapis.com')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache a copy of fresh responses
        if (response.ok && event.request.method === 'GET') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});