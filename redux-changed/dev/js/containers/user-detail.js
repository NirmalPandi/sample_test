import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modify } from '../actions/index';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {}
        };
    }


    ageChange(event) {
        this.state. newUser.age = event.target.value;
        this.setState({  newUser: this.state. newUser });
    }
    desChange(eventone) {
        this.state.newUser.description = eventone.target.value;
        this.setState({  newUser: this.state. newUser });
    }

    componentWillReceiveProps(nextProps) {
        console.log("receiveprops");
        this.setState({
            newUser: {
                first: nextProps.user.first,
                last: nextProps.user.last,
                age: nextProps.user.age,
                description: nextProps.user.description,
                id: nextProps.user.id,
                thumbnail: nextProps.user.thumbnail
            }
        })
    }


    render() {
        console.log("details---render");
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        else if(this.props.user.action=='USER_SELECTED'){
            return(
                <h1>found</h1>
            )
        }
        return (
            <div>
                <img src={this.state.newUser.thumbnail} />
                <h2>{this.state.newUser.first} {this.state.newUser.last}</h2>
                <h3>Age: <input type="text" placeholder={this.state.newUser.age} value={this.state.newUser.age}  onChange={this.ageChange.bind(this)}  ></input></h3>
               
                <h3>Description: <input type="text" placeholder={this.state.newUser.description} value={this.state.newUser.description} onChange={this.desChange.bind(this)}></input></h3>
                <button onClick={this.props.modify.bind(this,this.state.newUser)}> save</button>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ modify: modify}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);