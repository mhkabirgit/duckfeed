import {connect} from 'react-redux';
import AddScheduleForm from '../components/AddScheduleForm';
import {topFoods, topFoodsSuccess, topFoodsFailure} from '../actions/feedActions';
import {resetNewSchedule} from '../actions/scheduleActions';

function mapStateToProps(state){
  return {
    user: state.user.user,
    authenticated: state.user.status,
    newSchedule: state.schedule.newSchedule,
    topFoods: state.feed.topFoods
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleForm);
