import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';

class UserHeader extends React.Component{
    componentDidMount(){
        //this.props.fetchUsers(this.props.userId);
    }
    render(){
        const user = this.props.user;
        if(!user){
            return null;
        }
        return (<div className="header">{user.name}</div>);
    }
}

const mapStateToProps = (state,ownProps) => {
    //console.log(state.users);
    return {user:state.users.find(user=>user.id===ownProps.userId)};
    //return {users:state.users};
};


export default connect(mapStateToProps,{fetchUsers})(UserHeader);