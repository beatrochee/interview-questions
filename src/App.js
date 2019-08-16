import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Responsive } from './responsive/responsive'
import { BrowserCompat } from './browser-compat/browser-compat';

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Responsive</Link>
          </li>
          <li>
            <Link to="/browser-compat">Browser Compat</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Responsive} />
        <Route path="/browser-compat" component={BrowserCompat} />
      </div>
    </Router>
  );
}
export default BasicExample;
