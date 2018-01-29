import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link} from "react-router-dom";

import {Home} from '../component/home';
import {One} from '../component/page-one.js';
import {Two} from '../component/page-two.js';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
class App extends Component{


    render(){
        return(
            <div>
            <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/one" component={One} />
                <Route path="/two" component={Two} />
            </div>
            </Router>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));