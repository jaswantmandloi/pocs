import React from 'react';



function ServiceWorker() {
  return (
    <React.Fragment>

      <h2>
        Service Worker
      </h2>
      
      <p>
      A service worker is a script that your browser runs in the background, 
      separate from a web page, opening the door to features <br/>
      that don't need a web page or user interaction.
      </p>

      <p>
        It enables the web application to use the features like <br/>
        1. Push notification<br/>
        2. Background Sync<br/>
        3. Intercept Network Request<br/>
        4. Periodic Sync ( Later in future )<br/>
      </p>


      <h2>
        Service Worker lifecycle
      </h2>

      <p>
        Service Worker is a javascript worker.
        It is run and handled by browser. It has below lifecycle.
      </p>

      <ul>
        <li>
          Register will trigger the Install event
        </li>
        <li>
          After install Activation event will fire
        </li>
        <li>
        After the activation step, the service worker will control all pages that fall under its scope
        </li>
      </ul>

      <img src="img/sw-lifecycle.png" />


      <p>
        <b>
          You need HTTPS
        </b> or you will run PWA on localhost
      </p>

      <h2>
        Scope and Control
      </h2>

      <p>
      The default scope of a service worker registration is ./  
      relative to the script URL. <br/>
      
      This means if you register a service worker at //example.com/foo/bar.js it has a default scope of //example.com/foo/.
      </p>

      <h2>
      Skip the waiting phase
      </h2>

      <p>
      The waiting phase means you're only running one version of your site at once, but if you don't need that feature, <br/>
      you can make your new service worker activate sooner by calling self.skipWaiting().
      </p>

      <h2>
        Channel Messaging
      </h2>

      <p>
      The Channel Messaging API allows iframes and workers to communicate with the main document thread, <br/> 
      by passing messages <br/>

      this.postMessage(messageHere)

      </p>

    </React.Fragment>
  );
}

export default ServiceWorker;
