import React from 'react';
import './App.css';

function getJsonData() {
  
  fetch('/todos/1')
  .then((data) => {
    console.log('getJsonData', data);
  })
  .catch((error) => {
    console.log('getJsonData', error);
  });
}


function App() {
  return (
    <div className="App">
     Test PWA

     <div>
        <button onClick={getJsonData}>Get json</button>
     </div>
    </div>
  );
}

export default App;
