import React, { Component } from 'react';
import {HashRouter as Router,Route,Link} from "react-router-dom";

// import {Button} from 'react-bootstrap';
export class One extends Component{


    render(){
        return(
            <div className="container">
            <h1>This is my First-page...!</h1>
            <Link to="/two"><button className="btn">Navigate to next page</button></Link>
            </div>
        );
    }
}