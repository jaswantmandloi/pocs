import React from 'react';

function Sync() {
  return (
    <React.Fragment>
      <h2>
      Background Sync
      </h2>

      <p>
      Background sync allows outgoing connections to be deferred until the user has a working network connection.
      </p>

      <p>
      This is key to ensure a user can use the app offline, and take actions on it, <br/>
      and queue server-side updates for when there is a connection open, <br/>
      instead of showing an endless spinning wheel trying to get a signal.
      </p>
    </React.Fragment>
  );
}

export default Sync;
