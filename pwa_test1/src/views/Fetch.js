import React from 'react';



function Fetch() {
  return (
    <React.Fragment>
      <h2>Fetch Event</h2>

      <p>
      A fetch event is fired when a resource is requested on the network.
      </p>

      <p>
      This offers us the ability to look in the cache before making network requests.
      </p>

      <p>
      fetchEvent.respondWith()  <br/>
      Prevent the browser's default fetch handling, and provide (a promise for) 
      a response yourself.
      <br/>
      fetchEvent.waitUntil()  <br/>
      Extends the lifetime of the event. 
      Used to notify the browser of tasks that extend beyond the returning of a response, 
      such as streaming and caching.
      </p>
    </React.Fragment>
  );
}

export default Fetch;
