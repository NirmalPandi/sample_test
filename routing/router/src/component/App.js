import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from '../container/home';
import Add from '../container/adduser';
import {Topics} from '../container/topic';
const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">List of users</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/Add">Add-User</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/Add" component={Add} />
    </div>
  </Router>
)


const About = ({match}) => (
  <div>
    {console.log(`${match.url}`)}
    <h2>About</h2>
  </div>
)



export default App