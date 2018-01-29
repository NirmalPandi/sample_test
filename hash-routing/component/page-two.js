import React, { Component } from 'react';
import {HashRouter as Router,Route,Link} from "react-router-dom";

export class Two extends Component{


    render(){
        return(
            <div>
           <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-md">
           <div className="container">
             <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleContainer" aria-controls="navbarsExampleContainer" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
             <a className="navbar-brand" href="#">Container</a>
     
             <div className="navbar-collapse collapse" id="navbarsExampleContainer" aria-expanded="false" style="">
               <ul className="navbar-nav mr-auto">
                 <li className="nav-item active">
                   <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#">Link</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link disabled" href="#">Disabled</a>
                 </li>
                 <li className="nav-item dropdown">
                   <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                   <div className="dropdown-menu" aria-labelledby="dropdown02">
                     <a className="dropdown-item" href="#">Action</a>
                     <a className="dropdown-item" href="#">Another action</a>
                     <a className="dropdown-item" href="#">Something else here</a>
                   </div>
                 </li>
               </ul>
               <form className="form-inline my-2 my-md-0">
                 <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
               </form>
             </div>
           </div>
         </nav>
            <h1>This is my second-page...!</h1>
            </div>
        );
    }
}