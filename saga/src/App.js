import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {selects,flagg} from './action/index';



class App extends Component {

  generate = () =>{
    this.props.selects();
    this.props.flagg(!this.props.flag);
    // console.log(this.props.detail.data);
  }

  render() {
    
    return (
      <div>
        <h1>Hello I'm working with SAGA..!</h1>
        <button onClick={this.generate}>Generate Api call</button>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      
      flag:state.flag
  };
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({selects:selects,flagg:flagg }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(App);
