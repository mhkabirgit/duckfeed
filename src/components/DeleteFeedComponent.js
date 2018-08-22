import React, { Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PropTypes} from 'prop-types';

export default class DeleteFeedComponent extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
    if(this.props.user && this.props.authenticated === 'authenticated') {
      const { match: { params } } = this.props;
      this.props.resetMe();
      this.props.callDeleteFeed(params.id);
    }  
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.deletedFeed.feed && ! nextProps.deletedFeed.error){
      this.context.router.history.push('/feed/all');
    }
  }

  render() {

    if(!this.props.user || this.props.authenticated !== 'authenticated'){
        return (<div className='jumbotron jumbotron-fluid'>
                    <h5>Unauthorized</h5>
                </div>);
    }

    return (
      <div className='container'>
        <Redirect to={'/feed/all'}/>
      </div>
    );
  }
}
