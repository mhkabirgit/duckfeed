import React, { Component} from 'react';
import {PropTypes} from 'prop-types';
import { Link } from 'react-router-dom';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from './renderField';
import { addFood, addFoodSuccess, addFoodFailure} from '../actions/foodActions';

//Client side validation
function validate(values){
  let errors = {};
  let hasError = false;
  if(!values.name || values.name.trim() === ''){
    errors.name = 'Enter name';
    hasError = true;
  }
  if(!values.foodtype || values.foodtype.trim() === ''){
    errors.time = 'Enter type';
    hasError = true;
  }

  if(!values.description || values.description.trim() === ''){
    errors.time = 'Enter description';
    hasError = true;
  }
  return hasError && errors;
}

const dispatchAddFood = (values, dispatch) => {
  return dispatch(addFood(values))
        .then((result) => {
          if(result.payload.respone && result.payload.response.status !== 200){
            dispatch(addFoodFailure(result.payload.response.data));
            throw new SubmissionError(result.payload.response.data);
          }
          dispatch(addFoodSuccess(result.payload.data));
        });
}

class AddFoodForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
    if(this.props.user && this.props.authenticated === 'authenticated'){
      this.props.resetMe();
      // this.props.fetchTopFoodtypes();
      this.props.fetchFoodtypes();
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newFood.food && !nextProps.newFood.error ){
      this.context.router.history.push('/food/all');
    }
  }

  renderFoodtypeOptions(){
    // return this.props.topFoodtypes.foodtypes.map((foodtype, i) =>{
    //   return (<option value={foodtype._id}>{foodtype.name}</option>);
    // });
    return this.props.foodtypes.foodtypes.map((foodtype, i) =>{
      return (<option value={foodtype._id}>{foodtype.name}</option>);
    });
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
        <form onSubmit={handleSubmit(dispatchAddFood)}>
        <label>Food Type &nbsp;</label>
        <Field
              name="foodtype"
              component="select">
              {this.renderFoodtypeOptions()}
              label="@type*"
        </Field>

        <Field
               name="name"
               type="text"
               component={ renderField }
               label="@name*" />

        <Field
              name="description"
              type="text"
              component={ renderField }
              label="@description*" />
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
  form: 'AddFoodForm',
  validate
})(AddFoodForm);
