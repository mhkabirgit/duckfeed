import {connect} from 'react-redux';
import DeleteScheduleComponent from '../components/DeleteScheduleComponent';
import {deleteSchedule, deleteScheduleSuccess, deleteScheduleFailure, resetDeletedSchedule} from '../actions/scheduleActions';

function mapStateToProps(state){
  return{
    user: state.user.user,
    authenticated: state.user.status,
    deletedSchedule: state.schedule.deletedSchedule
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    resetMe: () => {
      dispatch(resetDeletedSchedule());
    },

    callDeleteSchedule: (scheduleid) => {
      dispatch(deleteSchedule(scheduleid))
      .then((result) => {
        if(result.payload.response && result.payload.response.status !== 200){
          dispatch(deleteScheduleFailure(result.payload.response.data));
        }
        dispatch(deleteScheduleSuccess(result.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteScheduleComponent);
