import React, { Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PropTypes} from 'prop-types';

export default class DeleteFoodtypeComponent extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
    if(this.props.user && this.props.authenticated === 'authenticated') {
      const { match: { params } } = this.props;
      this.props.resetMe();
      this.props.callDeleteFoodtype(params.id);
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.deletedFoodtype.foodtype && ! nextProps.deletedFoodtype.error){
      this.context.router.history.push('/foodtype/all');
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
        <Redirect to={'/foodtype/all'}/>
      </div>
    );
  }
}
