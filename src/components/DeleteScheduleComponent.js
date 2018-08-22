import React, { Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PropTypes} from 'prop-types';

export default class DeleteScheduleComponent extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
    if(this.props.user && this.props.authenticated === 'authenticated') {
      const { match: { params } } = this.props;
      this.props.resetMe();
      this.props.callDeleteSchedule(params.id);
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.deletedSchedule.schedule && ! nextProps.deletedSchedule.error){
      this.context.router.history.push('/schedule/all');
    }
  }

  render(){

    if(!this.props.user || this.props.authenticated !== 'authenticated'){
        return (<div className='jumbotron jumbotron-fluid'>
                    <h5>Unauthorized</h5>
                </div>);
    }

    return (
      <div className='container'>
        <Redirect to={'/schedule/all'}/>
      </div>
    );
  }
}
