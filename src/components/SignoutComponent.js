import React, {Component} from 'react';

export default class SignoutComponent extends Component {

  componentDidMount(){
    this.props.logout();
  }

  render(){
    if(this.props.user.user && this.props.user.status === 'loggedout'){
      return(
        <div> {this.props.user.user.username}, you  have signed out successfully! </div>
      );
    }
    else {
      return (
        <div> You were not signed in </div>
      );
    }
  }
}
