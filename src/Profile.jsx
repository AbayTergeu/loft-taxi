import React, { Component } from "react";
import {connect} from 'react-redux';
import {logIn, logOut} from './actions';

export class Profile extends Component {
    unauthenticate = (event) => {
      event.preventDefault();
      this.props.logOut();
    };
    
    render(){
        return <p>Profile 
            <button onClick={this.unauthenticate}>Log out</button> 
            </p>
    }    
}

export const ProfileWithConnect = connect(
    null,
    { logIn, logOut }
  )(Profile);