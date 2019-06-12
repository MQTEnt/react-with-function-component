import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import List from './List';
import Blog from './Blog';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={List} />
        <Route path="/blog" component={Blog} />
      </div>
    </Router>
  )
}
 
export default App;