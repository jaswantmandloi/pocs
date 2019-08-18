// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

var pk = 'BJQ18IXSBnhBzN-PC8tJh0WJP-dzulli5I0zie3xhGGcuaiK_slrRKhVvbY_BTla_IxZ8vz2sqbIFzBGvWIU-G0';


function urlB64ToUint8Array(base64String) {
  var padding = "=".repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
  var rawData = atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
};


function askNotification(registration) {
  window.Notification.requestPermission().then(function () {

    var applicationServerKey = urlB64ToUint8Array(pk);
    var options = {
      applicationServerKey: applicationServerKey,
      userVisibleOnly: true
    };

    registration.pushManager.subscribe(options).then(function (subscription) {
      console.log('subscription', subscription);

      console.log('stringify version subscription', JSON.stringify(subscription));

    });


  }).catch(function (error) {
    console.log('Error requestPermission', error);
  });
}

window.addEventListener('beforeinstallprompt', (deferredPrompt) => {
  
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
  .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the  prompt');
      } else {
        console.log('User dismissed the prompt');
      }
      deferredPrompt = null;
  });

});

window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs installed');
});


export function register(config) {
  // if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  //   // The URL constructor is available in all browsers that support SW.
  //   const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
  //   if (publicUrl.origin !== window.location.origin) {
  //     // Our service worker won't work if PUBLIC_URL is on a different origin
  //     // from what our page is served on. This might happen if a CDN is used to
  //     // serve assets; see https://github.com/facebook/create-react-app/issues/2374
  //     return;
  //   }


  // }

  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/my-service-worker.js`;

    if (isLocalhost) {
      // This is running on localhost. Let's check if a service worker still exists or not.
      checkValidServiceWorker(swUrl, config);

      // Add some additional logging to localhost, pointing developers to the
      // service worker/PWA documentation.
      navigator.serviceWorker.ready.then(() => {
        console.log(
          'This web app is being served cache-first by a service ' +
          'worker. To learn more, visit https://bit.ly/CRA-PWA'
        );
      });
    } else {
      // Is not localhost. Just register service worker
      registerValidSW(swUrl, config);
    }
  });
}

function send_message_to_sw(msg){
  return new Promise(function(resolve, reject){
      // Create a Message Channel
      var msg_chan = new MessageChannel();

      // Handler for recieving message reply from service worker
      msg_chan.port1.onmessage = function(event){
          if(event.data.error){
              reject(event.data.error);
          }else{
              resolve(event.data);
          }
      };

      // Send message to service worker along with port for reply
      navigator.serviceWorker.controller.postMessage("Client 1 says '"+msg+"'", [msg_chan.port2]);
  });
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl, {
      scope: '.'
    })
    .then(registration => {

      askNotification(registration);

      if(registration.sync) {
        registration.sync.register('event1')
      }

      
      send_message_to_sw('Hello sent from window client').then((obj) =>{
        console.log('Reply from service worker', obj);
      });

      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                'New content is available and will be used when all ' +
                'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
