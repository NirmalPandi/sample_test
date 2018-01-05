import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser, editUser, deleteUser } from '../actions/index'


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSel: {}
        };
    }

    select(user) {
        this.state.newSel = user;
        this.setState({
            newSel: this.state.newSel
        });
        console.log(this.state.newSel);
    }

    renderList() {
        return (this.props.users.map((user) => {
            return (<div>

                <input value={user.id} type="radio" onClick={this.select.bind(this, user)} />
                {user.first}, {user.last}, {user.age}, {user.description}

            </div>
            );
        }));
    }

    render() {
        console.log("userlist---render");
        return (
            <ul>
                {this.renderList()}
                <button>add</button>
                <button>view</button>
                <button onClick={() => { this.props.deleteUser(this.state.newSel) }}>delete</button>
                <button onClick={() => { this.props.selectUser(this.state.newSel) }}>edit</button>
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser, deleteUser: deleteUser }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
