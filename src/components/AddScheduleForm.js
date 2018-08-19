import React, { Component} from 'react';
import {PropTypes} from 'prop-types';
import { Link } from 'react-router-dom';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from './renderField';
import { addSchedule, addScheduleSuccess, addScheduleFailure} from '../actions/scheduleActions';

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

const dispatchAddSchedule = (values, dispatch) => {
  return dispatch(addSchedule(values))
        .then((result) => {
          if(result.payload.respone && result.payload.response.status !== 200){
            dispatch(addScheduleFailure(result.payload.response.data));
            throw new SubmissionError(result.payload.response.data);
          }
          dispatch(addScheduleSuccess(result.payload.data));
        });
}

class AddScheduleForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
    this.props.resetMe();
    //Uncomment after populating data at the backend
    //this.props.fetchTopFoods();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newSchedule.schedule && !nextProps.newSchedule.error ){
      this.context.router.push('/');
    }
  }

  renderFoodOptions(){
    return this.props.topFoods.foods.map((food, i) =>{
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
        <form onSubmit={handleSubmit(dispatchAddSchedule)}>

        <Field
               name="user"
               type="hidden"
               component="input"
               value={this.props.user._id}/>

        <div>
        <label>Time &nbsp;&nbsp;</label>
        <Field
               name="time"
               type="time"
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
        <label>Start Date &nbsp;&nbsp;</label>
        <Field
               name="startDate"
               type="date"
               component="input"/>
        </div>
        <div>
        <label>End Date &nbsp;&nbsp;</label>
        <Field
               name="endDate"
               type="date"
               component="input"/>
        </div>
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
  form: 'AddScheduleForm',
  validate
})(AddScheduleForm);
