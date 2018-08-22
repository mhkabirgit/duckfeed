import React, { Component} from 'react';
import {PropTypes} from 'prop-types';
import { Link } from 'react-router-dom';
import { reduxForm, Field, change, SubmissionError } from 'redux-form';
import renderField from './renderField';
import { addFeed, addFeedSuccess, addFeedFailure} from '../actions/feedActions';

//Client side validation
function validate(values){
  let errors = {};
  let hasError = false;
  if(!values.time || values.time.trim() === ''){
    errors.time = 'Enter time';
    hasError = true;
  }

  if(!values.food || values.food.trim() === ''){
    errors.food = 'Enter food';
    hasError = true;
  }

  if(!values.longitude || values.longitude.trim() === ''){
    errors.longitude = 'Enter longitude';
    hasError = true;
  }

  if(!values.latitude || values.latitude.trim() === ''){
    errors.latitude = 'Enter latitude';
    hasError = true;
  }

  if(!values.duckCount || values.duckCount.trim() === ''){
    errors.duckCount = 'Enter duck count';
    hasError = true;
  }
  if(!values.feedAmount || values.feedAmount.trim() === ''){
    errors.feedAmount = 'Enter feedAmount';
    hasError = true;
  }
  return hasError && errors;
}

const dispatchAddFeed = (values, dispatch) => {
  return dispatch(addFeed(values))
        .then((result) => {
          if(result.payload.respone && result.payload.response.status !== 200){
            dispatch(addFeedFailure(result.payload.response.data));
            throw new SubmissionError(result.payload.response.data);
          }
          dispatch(addFeedSuccess(result.payload.data));
        });
}

class AddFeedForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
    this.props.resetMe();
    this.props.change('user', this.props.user._id)
    // this.props.fetchTopFoods();
    this.props.fetchFoods();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newFeed.feed && !nextProps.newFeed.error ){
      this.context.router.history.push('/');
    }
  }

  renderFoodOptions(){
    // return this.props.topfoods.foods.map((food, i) =>{
    //   return (<option value={food._id}>{food.name}</option>);
    // });
    return this.props.foods.foods.map((food, i) =>{
      return (<option value={food._id}>{food.name}</option>);
    });
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
        <form onSubmit={handleSubmit(dispatchAddFeed)}>

        <Field
               name="user"
               type="hidden"
               component="input"/>


        <div>
        <label>Date and Time &nbsp;&nbsp;</label>
        <Field
               name="time"
               type="datetime-local"
               component="input"/>
        </div>

        <div>
        <label>Food &nbsp;&nbsp;</label>
        <Field
              name="food"
              component="select">
              {this.renderFoodOptions()}
        </Field>
        </div>

        <Field
              name="longitude"
              type="text"
              component={ renderField }
              label="@longitude*" />
        <Field
              name="latitude"
              type="text"
              component={ renderField }
              label="@latitude*" />

        <Field
              name="duckCount"
              type="text"
              component={ renderField }
              label="@duckCount*" />
        <Field
              name="feedAmount"
              type="text"
              component={ renderField }
              label="@feedAmount*" />
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
  form: 'AddFeedForm',
  validate
})(AddFeedForm);
