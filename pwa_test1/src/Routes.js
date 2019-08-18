import Main from './views/Main'
import Intro from './views/Intro';
import Why from './views/Why';
import Menifest from './views/Menifest';

import Worker from './views/Worker';

import ServiceWorker from './views/ServiceWorker';
import Fetch from './views/Fetch';
import Cache from './views/Cache';
import Sync from './views/Sync';

import PushNotification from './views/PushNotification';

// https://flaviocopes.com/service-workers/
// https://serviceworke.rs/
// https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil
//  https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope 


export default [
  {
    route: '/',
    component: Main,
    name: 'Main'
  },
  {
    route: '/intro',
    component: Intro,
    name: 'Introduction'
  },
  {
    route: '/why',
    component: Why,
    name: 'why'
  },
  {
    route: '/menifest',
    component: Menifest,
    name: 'Menifest'
  },
  {
    route: '/web-worker',
    component: Worker,
    name: 'Web Worker'
  },
  {
    route: '/service-worker',
    component: ServiceWorker,
    name: 'Service Worker'
  },
  {
    route: '/fetch',
    component: Fetch,
    name: 'Fetch'
  },
  {
    route: '/cache',
    component: Cache,
    name: 'Cache'
  },
  {
    route: '/sync',
    component: Sync,
    name: 'Background Sync'
  },
  {
    route: '/push-notification',
    component: PushNotification,
    name: 'Push Notification'
  }
];
