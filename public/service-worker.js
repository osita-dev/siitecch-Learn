gitself.addEventListener('install', (event) => {
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
      ]);
    })
  );
  console.log('Service Worker Installed');
});

// Open IndexedDB
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('SiitecchDB', 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('cache')) {
        db.createObjectStore('cache', { keyPath: 'id' });
      }
    };

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
}

// Store data in IndexedDB
async function storeData(key, value) {
  const db = await openDatabase();
  const transaction = db.transaction('cache', 'readwrite');
  const store = transaction.objectStore('cache');
  store.put({ id: key, value });
  return transaction.complete;
}

// Retrieve data from IndexedDB
async function getData(key) {
  const db = await openDatabase();
  const transaction = db.transaction('cache', 'readonly');
  const store = transaction.objectStore('cache');
  const data = await store.get(key);
  return data ? data.value : null;
}

// Intercept fetch requests
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Only handle JSON API requests dynamically
  if (url.includes('/api/languages.json')) {
    event.respondWith(
      (async () => {
        const cachedData = await getData(url);
        if (cachedData) {
          console.log('Serving from IndexedDB:', url);
          return new Response(JSON.stringify(cachedData), {
            headers: { 'Content-Type': 'application/json' },
          });
        }

        console.log('Fetching from network:', url);
        const response = await fetch(event.request);
        const data = await response.json();

        // Store fetched data in IndexedDB
        await storeData(url, data);

        return new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' },
        });
      })()
    );
  } else {
    // For other requests, fallback to cache or network
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  }
});
