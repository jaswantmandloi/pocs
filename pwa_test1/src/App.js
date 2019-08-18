import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes from './Routes'


function App() {
  return (
    <div className="container-fluid ">
      <Router>{
        Routes.map((Rt) => {
          return <Route key={Rt.route} path={Rt.route} exact component={Rt.component} />
        })
      }
      </Router>
    </div>
  );
}

export default App;
