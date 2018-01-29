import React, { Component } from 'react';
import {HashRouter as Router,Route,Link} from "react-router-dom";

export class Home extends Component{

    render(){
        return(
            <div className="container">
            <h1>Welcome,This is Home-page...!</h1>
            <Link to="/one"><button className='btn'>REGISTER</button></Link>
            

            </div>
        )
    }
}