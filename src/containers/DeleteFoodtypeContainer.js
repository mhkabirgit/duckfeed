import {connect} from 'react-redux';
import DeleteFoodtypeComponent from '../components/DeleteFoodtypeComponent';
import {deleteFoodtype, deleteFoodtypeSuccess, deleteFoodtypeFailure, resetDeletedFoodtype} from '../actions/foodtypeActions';

function mapStateToProps(state){
  return{
    user: state.user.user,
    authenticated: state.user.status,
    deletedFoodtype: state.foodtype.deletedFoodtype
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    resetMe: () => {
      dispatch(resetDeletedFoodtype());
    },
    callDeleteFoodtype: (foodtypeid) => {
      dispatch(deleteFoodtype(foodtypeid))
      .then((result) => {
        if(result.payload.response && result.payload.response.status !== 200){
          dispatch(deleteFoodtypeFailure(result.payload.response.data));
        }
        dispatch(deleteFoodtypeSuccess(result.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFoodtypeComponent);
