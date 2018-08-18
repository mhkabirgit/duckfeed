import React, {Component} from 'react';

export default class SignoutComponent extends Component {

  componentDidMount(){
    this.props.logout();
  }

  render(){
    return(
      <div> You have signed out </div>
    );
  }
}
