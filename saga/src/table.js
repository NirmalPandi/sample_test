import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class Table extends Component{

    

    render(){
        

        const row = () => {
            
                
            return(
                this.props.detail.map((item)=><h1>{item.name}</h1>)
            )
           
        }
        return(
            <div>
            
            {this.props.flag?row():<h4>Please click on the button to generate api call ... </h4>}
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        detail: state.users,
        flag:state.flag
    };
  }

export default connect(mapStateToProps)(Table);