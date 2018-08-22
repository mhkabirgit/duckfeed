import {connect} from 'react-redux';
import AllSchedulesComponent from '../components/AllSchedulesComponent';
import {fetchScheduleList, fetchScheduleListSuccess, fetchScheduleListFailure, resetScheduleList} from '../actions/scheduleActions';

function mapStateToProps(state){
  return {
    user: state.user.user,
    authenticated: state.user.status,
    scheduleList: state.schedule.scheduleList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    resetMe: () => {
      dispatch(resetScheduleList());
    },

    fetchScheduleList: () => {
      dispatch(fetchScheduleList())
      .then( (result) => {
        if(result.payload.response && result.payload.response.status !== 200 ){
          dispatch(fetchScheduleListFailure(result.payload.response.data));
        }
        dispatch(fetchScheduleListSuccess(result.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllSchedulesComponent);
