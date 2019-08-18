/****************************************Lifecycle*************************************** */

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

self.addEventListener('activate', () => {
  console.log('Activated');
});


/****************************************Communicator*************************************** */

this.addEventListener('message', event => {
  console.log('A new message arrived!')
  console.log(event.data)
  const data = { someData: 'hey' }
  event.ports[0].postMessage(data)
})




/****************************************Fetch*************************************** */

self.addEventListener('fetch', function (event) {

  // var url = new URL(event.request.url);

  // if (url.origin == location.origin && url.pathname == '/dog.svg') {
  //   event.respondWith(caches.match('/cat.svg'));
  // }

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


/****************************************Sync*************************************** */

function doSomething() {
  return new Promise((resolve, reject) => {
    resolve();
  });
}

self.addEventListener('sync', (event) => {
  if (event.tag == 'event1') {
    event.waitUntil(doSomething())
  }
});


/****************************************PUSH PART*************************************** */


self.addEventListener("push", function (event) {
  if (event.data) {
    console.log("Push event!! ", event.data.text());
    self.registration.showNotification(event.data.text(), options);
  } else {
    self.registration.showNotification('Some Error', options);
  }
});

self.addEventListener('pushsubscriptionchange', function (event) {
  console.log('pushsubscriptionchange', event)
});


/****************************************Notification PART*************************************** */

var options = {
  body: 'Body of notification',
  icon: 'favicon.ico',
  vibrate: [100, 50, 100],
  data: {
    dateOfArrival: Date.now(),
    primaryKey: 1
  },
  actions: [
    {
      action: 'explore', title: 'Push available',
      icon: 'favicon.ico'
    },
    {
      action: 'close', title: 'Close notification',
      icon: 'favicon.ico'
    },
  ]
};

function openOrFocus() {
  var examplePage = 'http://localhost:3000';

  var urlToOpen = new URL(examplePage, self.location.origin).href;

  var promiseChain = clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  }).then((windowClients) => {
    var matchingClient = null;

    for (var i = 0; i < windowClients.length; i++) {
      var windowClient = windowClients[i];
      if (windowClient.url === urlToOpen) {
        matchingClient = windowClient;
        break;
      }
    }

    if (matchingClient) {
      return matchingClient.focus();
    } else {
      return clients.openWindow(urlToOpen);
    }
  });

  return promiseChain;
}


self.addEventListener('notificationclose', function (event) {
  const dismissedNotification = event.notification;
  dismissedNotification.close();
});


self.addEventListener('notificationclick', function (event) {
  var clickedNotification = event.notification;
  clickedNotification.close();
  var promiseChain = openOrFocus();
  event.waitUntil(promiseChain);
});


