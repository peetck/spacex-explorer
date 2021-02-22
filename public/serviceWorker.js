let CACHE_NAME = "spacex-explorer-cache";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(["/", "/index.html", "/offline.html"]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      try {
        const response = await caches.match(event.request);
        if (response) {
          return response;
        }
        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match("/offline.html");
        return cachedResponse;
      }
    })()
  );
});
