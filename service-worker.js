const CACHE_NAME = "korklar-sample-v32";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=32",
  "./data/batch1-raw.js?v=32",
  "./data/batch1-ar.js?v=32",
  "./data/batch1-review-ar.js?v=32",
  "./data/remaining-enriched.js?v=32",
  "./data/resolved-review.js?v=32",
  "./data/prov1-gpt-ar.js?v=32",
  "./data/prov2-gpt-ar.js?v=32",
  "./data/rules100-gpt-ar.js?v=32",
  "./app.js?v=32",
  "./manifest.webmanifest",
  "./assets/app-icon.svg",
  "./assets/accessible-parking.webp",
  "./assets/airbag-warning.webp",
  "./assets/bridge-line.webp",
  "./assets/cycle-moped-ban.webp",
  "./assets/lane-direction.webp",
  "./assets/loftbacken-sign.webp",
  "./assets/right-turn-signal.webp",
  "./assets/roadwork-barrier.webp",
  "./assets/shared-path.webp",
  "./assets/steering-grip.webp",
  "./assets/tire-wear.webp",
  "./assets/vehicle-weights.webp",
  "./assets/batch1/review-q008.jpg",
  "./assets/batch1/review-q041.jpg",
  "./assets/batch1/review-q049.jpg",
  "./assets/batch1/review-q059.jpg",
  "./assets/batch1/review-q064.jpg",
  "./assets/batch1/review-q067.jpg",
  "./assets/batch1/review-q098.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }))
  );
});
