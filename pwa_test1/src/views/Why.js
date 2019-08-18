import React from 'react';



function ServiceWorker() {
  return (
    <React.Fragment>

      <h2>Why PWA comes into the picture</h2>

      <p>
        Web applications are available for the mobile devices for as long as 
        the mobile devices are existed.
        But it lack of some features that are available in mobile applications.        
      </p>

      <ul>
        <li>
          Ability to work offline
        </li>
        <li>Push Notification</li>
        <li>Device hardware access</li>
      </ul>


      <p>
        <b>Progressive web applications (PWAs)</b> are a type of mobile app delivered through the web
        , built using common web technologies including HTML, CSS and JavaScript.
      </p>
      <p>
        PWA includes the functionalities like 
      </p>
      <ul>
        <li>
          Working offline
        </li>
        <li>
          Push Notification
        </li>
        <li>
          Device hardware access
        </li>
        <li>
          Not require separate bundling and distributions
        </li>
        <li>
          PWA works on any browser ( Feature availablity depends on browser )
        </li>
      </ul>
      These feature enables user to fill experience like native mobile applications.

<br/><br/><br/>

<h2>Why <b>Progressive</b> before web application</h2>

<p>
  Becuase it follows the <b>Progressive enhacement principal</b>.
</p>

<p>
  PWA works for every user regardless of browser choice.
  <br/><br/>
  This stragegy emphasizes core content first. Then add features progressively as available.
</p>

    </React.Fragment>
  );
}

export default ServiceWorker;
