// Offline-Cache: bei neuer Version CACHE-Namen erhöhen
const CACHE = 'trainingsplan-v6';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-180.png', './icon-512.png',
  './barcode-detector.js', './zxing_reader.wasm', './datenschutz.html'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Nur eigene App-Dateien cachen. Anfragen an fremde Server (z. B. Open Food Facts) gehen immer direkt ans Netz.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
  );
});
