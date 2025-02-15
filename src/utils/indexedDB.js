export function openDatabase() {
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
  
  export async function storeData(key, value) {
    const db = await openDatabase();
    const transaction = db.transaction('cache', 'readwrite');
    const store = transaction.objectStore('cache');
    store.put({ id: key, value });
    return transaction.complete;
  }
  
  export async function getData(key) {
    const db = await openDatabase();
    const transaction = db.transaction('cache', 'readonly');
    const store = transaction.objectStore('cache');
    const data = await store.get(key);
    return data ? data.value : null;
  }
  