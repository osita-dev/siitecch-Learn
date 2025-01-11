// public/service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('siitecch-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/images/siitecch.png',
          '/images/siitecch_1.png',
          '/images/login.svg',
          '/images/No-Data.svg',
          '/images/notfound.svg',
          '/images/programing.svg',
          '/images/signup.svg',
          '/styles.css',
          '/api/languages.json',  // The JSON endpoint you're using
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    // Cache JSON dynamically
    if (event.request.url.includes('/api/languages.json')) {
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;  // Return the cached version if available
          }
          return fetch(event.request).then((response) => {
            return caches.open('siitecch-cache').then((cache) => {
              cache.put(event.request, response.clone());  // Cache the new response
              return response;
            });
          });
        })
      );
    }
  });
  
  