self.addEventListener('install', (event) => {

  let urlsToCache = [
    'https://jsonplaceholder.typicode.com/todos/1',
  ];

  event.waitUntil(
    caches.open('pwa-testing-cache').then((cache) => {
      cache.addAll(urlsToCache);
    }).catch((event) => {
      console.log(event);
    })
  );
});


self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        console.log(event)
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});


/** Testing service worker 123 */

// self.addEventListener('activate', () => {
//   self.clients.matchAll({ type: 'window' }).then(windowClients => {

//     console.log(windowClients);


//     for (let windowClient of windowClients) {
      
//       windowClient.navigate(windowClient.url);
//     }
//   });
// });
