import {connect} from 'react-redux';
import SignoutComponent from '../components/SignoutComponent';
import {logoutUser, logoutUserSuccess, logoutUserFailure} from '../actions/userActions';

function mapStateToProps(state){
  return {
    user:state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logoutUser())
      .then( (result) =>{
        if(result.payload.response && result.payload.response.status !== 200){
          dispatch(logoutUserFailure(result.payload.response.data));
        }
        else {
          dispatch(logoutUserSuccess());
        }
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignoutComponent);
