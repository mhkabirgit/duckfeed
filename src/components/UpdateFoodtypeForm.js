import React, { Component} from 'react';
import {PropTypes} from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { reduxForm, Field, initialValues, SubmissionError } from 'redux-form';
import renderField from './renderField';
import { updateFoodtype, updateFoodtypeSuccess, updateFoodtypeFailure} from '../actions/foodtypeActions';

//Client side validation
function validate(values){
  let errors = {};
  let hasError = false;
  if(!values.name || values.name.trim() === ''){
    errors.name = 'Enter name';
    hasError = true;
  }

  return hasError && errors;
}

const dispatchUpdateFoodtype = (values, dispatch) => {
  return dispatch(updateFoodtype(values))
        .then((result) => {
          if(result.payload.respone && result.payload.response.status !== 200){
            dispatch(updateFoodtypeFailure(result.payload.response.data));
            throw new SubmissionError(result.payload.response.data);
          }
          dispatch(updateFoodtypeSuccess(result.payload.data));
        });
}

class UpdateFoodtypeForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
    if(this.props.user && this.props.authenticated === 'authenticated') {
      const { match: { params } } = this.props;
      this.props.resetMe();
      this.props.fetchActiveFoodtype(params.id);
      // this.props.initialValues(this.props.activefoodtype);
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.activeFoodtype.foodtype && ! nextProps.activeFoodtype.error){
      this.context.router.history.push('/');
    }
  }

  render(){

    if(!this.props.user || this.props.authenticated !== 'authenticated'){
        return (<div className='jumbotron jumbotron-fluid'>
                    <h5>Unauthorized</h5>
                </div>);
    }
    const {handleSubmit, submitting} = this.props;
    return (
      <div className='container'>
        <h5>Update Foodtype</h5>
        <form onSubmit={handleSubmit(dispatchUpdateFoodtype)}>
        <Field
               name="name"
               type="text"
               component={ renderField }
               label="@name*" />
        <div>
            <button
                type="submit"
                className="btn btn-primary"
                disabled={ submitting }>
                Submit
            </button>
            <Link
                to="/"
                className="btn btn-error"> Cancel
            </Link>
        </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'UpdateFoodtypeForm',
  validate
})(UpdateFoodtypeForm);
