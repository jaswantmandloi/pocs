import React from 'react';



function PushNotification() {
  return (
    <React.Fragment>
      <h2>Push</h2>
      <h2>Notification</h2>

<p>Push and notification use different, but complementary, APIs:

<a href="#">
<strong>push</strong>
</a> is
invoked when a server supplies information to a service worker; a
<a href="#">
<strong>notification</strong></a>
is the action of a service worker or web page script showing information
to a user.

</p>


<figure className="highlight">
<code>
serviceWorkerRegistration.showNotification(title, options);
</code>
</figure>


<figure className="highlight">
<code>
{"{"}
  "body": "Did you make a $1,000,000 purchase at Dr. Evil...", <br/>
  "icon": "images/ccard.png",<br/>
  "vibrate": [200, 100, 200, 100, 200, 100, 400], <br/>
  "tag": "request",<br/>
  "actions": [ <br/>
    {"{"} "action": "yes", "title": "Yes", "icon": "images/yes.png" {"}"}, <br/>
    {"{"} "action": "no", "title": "No", "icon": "images/no.png" {"}"} <br/>
  ] <br/>
{"}"}
</code>
</figure>


<h2>
  How Push works
</h2>

<ul>
  <li>
  Adding the client side logic to subscribe a user to push
  <br/>
  Push Permission
  <br/>
  Push Subscription
  <br/>
  Send Push Subscription to server
  <br/>

  <img src="img/browser-to-server.svg" />

  <br/>

  <figure className="highlight">
  <code>

  const subscribeOptions = {"{"} <br/>
      userVisibleOnly: true, <br/>
      applicationServerKey: urlBase64ToUint8Array( <br/>
        'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U' <br/>
      ) <br/>
  {"}"};
  <br/><br/>
  registration.pushManager.subscribe(subscribeOptions) <br/>
  .then(function (subscription) {"{"} <br/>
      console.log('subscription', subscription); <br/>
    {"}"});
  </code>
</figure>

  <br/><br/>
  </li>



  <li>
  The API call from your back-end / application that triggers a push message
<br/>
Push Service
<br/>
<img src="img/server-to-push-service.svg" />
<br/><br/>
  </li>




  <li>
  The service worker JavaScript file that will receive a "push event"

  <br/>
  <img src="img/push-service-to-sw-event.svg" />
  </li>
</ul>


      
    </React.Fragment>
  );
}

export default PushNotification;
