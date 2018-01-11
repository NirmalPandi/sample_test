import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import {Home} from './home.js'
import {addUser} from '../action/action'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Add extends Component{

    constructor(props){
        super(props);
        this.state={newUser: {}};
    }
change(event){
  let newUser=this.state.newUser;
   let name=event.target.name;
   let value=event.target.value;
   newUser[name]=value;
   this.setState({newUser});
   
}
show(){
    console.log(this.state.newUser);
   
}
    render(){
        return(
            <div>
            Name : <input type="text" name="name" onChange={this.change.bind(this)}/>
            
            Age  : <input name="age" type="number" onChange={this.change.bind(this)}/>
            Description : <input type="text" name="description" onChange={this.change.bind(this)}/>
            <button onClick={this.props.addUser.bind(this,this.state.newUser)}><Link to="/">Save</Link></button>

            </div>

        );
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addUser:addUser }, dispatch);
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}
export default connect(mapStateToProps,matchDispatchToProps)(Add);