import React, { Component} from 'react';
import {PropTypes} from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from './renderField';
import { addFoodtype, addFoodtypeSuccess, addFoodtypeFailure} from '../actions/foodtypeActions';

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

const dispatchAddFoodtype = (values, dispatch) => {
  return dispatch(addFoodtype(values))
        .then((result) => {
          if(result.payload.respone && result.payload.response.status !== 200){
            dispatch(addFoodtypeFailure(result.payload.response.data));
            throw new SubmissionError(result.payload.response.data);
          }
          dispatch(addFoodtypeSuccess(result.payload.data));
        });
}

class AddFoodtypeForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
    this.props.resetMe();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newFoodtype.foodtype && ! nextProps.newFoodtype.error){
      this.context.router.history.push('/');
    }
  }

  render(){
    // if(!this.props.user && this.props.authenticated !== 'authenticated'){
    //     return (<div className='jumbotron jumbotron-fluid'>
    //                 <h5>Unauthorized</h5>
    //             </div>);
    // }
    const {handleSubmit, submitting} = this.props;
    return (
      <div className='container'>
        <form onSubmit={handleSubmit(dispatchAddFoodtype)}>
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
  form: 'AddFoodtypeForm',
  validate
})(AddFoodtypeForm);
