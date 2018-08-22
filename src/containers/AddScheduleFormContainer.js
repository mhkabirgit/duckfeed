import {connect} from 'react-redux';
import AddScheduleForm from '../components/AddScheduleForm';
import {topFoods, topFoodsSuccess, topFoodsFailure} from '../actions/feedActions';
import {fetchFoodList, fetchFoodListSuccess, fetchFoodListFailure} from '../actions/foodActions';
import {resetNewSchedule} from '../actions/scheduleActions';

function mapStateToProps(state){
  return {
    user: state.user.user,
    authenticated: state.user.status,
    newSchedule: state.schedule.newSchedule,
    topfoods: state.feed.topFoods,
    foods: state.food.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetNewSchedule());
    },

    fetchTopFoods: () => {
      dispatch(topFoods())
      .then( (result) => {
        if(result.payload.response && result.payload.response.status !== 200 ){
          dispatch(topFoodsFailure(result.payload.response.data));
        }
        dispatch(topFoodsSuccess(result.payload.data));
      });
    },

    fetchFoods: () => {
      dispatch(fetchFoodList())
      .then( (result) => {
        if(result.payload.response && result.payload.response.status !== 200 ){
          console.log(result.payload.response.data);
          dispatch(fetchFoodListFailure(result.payload.response.data));
        }
        dispatch(fetchFoodListSuccess(result.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleForm);
