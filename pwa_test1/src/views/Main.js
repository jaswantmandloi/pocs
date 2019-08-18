import React from 'react';

import { Link } from "react-router-dom";
import Routes from '../Routes'

function Main() {
  return (
    <nav>
      <ul>
        {Routes.map((Rt) => {
          return <li key={Rt.route}>
            <Link  to={Rt.route}>{Rt.name}</Link>
          </li>
        })}
      </ul>
    </nav>
  );
}

export default Main;
