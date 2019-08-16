let newW = new Worker('/my-worker.js');

newW.postMessage({
  message: 'Wecome Worker please multiply these values',
  a: 2345,
  b: 8980
});

newW.onmessage = function(e) {  
  console.log('Worker returned the result', e.data.result);
}