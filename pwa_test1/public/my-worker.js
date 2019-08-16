onmessage = function(e) {
  this.console.log(e.data.message, e.data.a, e.data.b);
  this.console.log('OK i am working...');
  let a = e.data.a;
  let b = e.data.b;

  this.postMessage({ result: a * b})
}