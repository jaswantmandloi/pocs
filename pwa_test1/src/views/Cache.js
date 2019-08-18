import React from 'react';



function Cache() {
  return (
    <React.Fragment>
      <h2>Cache</h2>
      <p>
      The Cache API is part of the Service Worker specification, <br/>
      and is a great way to have more power on resources caching.
      </p>
      <p>
      It allows you to cache URL-addressable resources, which means assets, web pages, HTTP APIs responses.
      </p>


      <h2>Detect if the Cache API is available Initialize it</h2>
      <p>
      if ('caches' in window) {"{"} <br/>
      
      caches.open('mycache').then(cache => {"{"} <br/>
          // you can start using the cache <br/>
          {"}"})<br/>

      {"}"} <br/>
      </p>

      <h2>Add cache</h2>

      <p>
      cache.add('/api/todos') <br/>
      cache.add(new Request('/api/todos', options)) <br/>
      cache.addAll(['/api/todos', '/api/todos/today']).then(() => {"{"} <br/>
        //all requests were cached
        {"})"} <br/>
        cache.put(url, res)<br/><br/>

      </p>

      <h2>Get cache</h2>

      <p>
        cache.match('/api/todos').then(res => {"{"} <br/>
            //res is the Response Object<br/>
        {"})"} <br/>

        cache.keys().then(cachedItems => {"{"} <br/>
          // <br/>
          {"})"} <br/><br/>

      </p>

      <h2>Delete cache or an item</h2>

      <p>
      cache.delete('/api/todos')
      <br/>
      caches.delete('mycache').then(() => {"{"} <br/>
  // deleted successfully<br/>
{"})"} <br/>

      </p>

    </React.Fragment>
  );
}

export default Cache;
