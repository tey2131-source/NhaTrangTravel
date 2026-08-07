// This Service Worker simply allows the browser to recognize the app as installable
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // Basic fetch passthrough - required for PWA installation criteria
});
