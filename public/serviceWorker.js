let CACHE_NAME = "spacex-explorer-cache";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(["/", "/index.html"]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request)
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          throw error;
        });
    })
  );
});
