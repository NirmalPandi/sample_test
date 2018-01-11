
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {deleteUser} from '../action/action'


class Home extends Component{

    renderList() {
        
                console.log("props contenttttttt",this.props.user);
                return this.props.users.map((user) => {
                    return (
                        <div key={user.id}>
                            <input value={user.id} type="radio" ></input>
                            {user.id}{user.name} {user.description}
                            <button onClick={this.props.deleteUser.bind(this,user)}>delete</button>
                        </div>
                    );
                });
            }
        

    render(){

        return(
            <ul>
            {this.renderList()}
        </ul>
        );
    }
}


function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ deleteUser:deleteUser }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps,matchDispatchToProps)(Home);