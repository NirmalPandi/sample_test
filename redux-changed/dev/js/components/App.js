import React,{ Component } from 'react';
import UserList from '../containers/user-list';
import EditUser from '../containers/user-edit';
import AddUser from '../containers/user-add';
import ViewUser from '../containers/user-view';
import { connect } from 'react-redux';

class App extends Component{
    render(){
        return(
    <div>
        <h1>Employee List...</h1>
        <UserList />
        {this.props.showContent.showContent==2 ? <div>
        <EditUser /></div>:null}
        {this.props.showContent.showContent==1 ? <div>
        <AddUser /></div>:null}
        {this.props.showContent.showContent==3 ? <div>
        <ViewUser/></div>:null}
    </div>
);}}



function mapStateToProps(state) {
    return {
        
        showContent:state.showContent
    };
}

export default connect(mapStateToProps)(App);