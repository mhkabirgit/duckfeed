import {connect} from 'react-redux';
import DeleteFoodComponent from '../components/DeleteFoodComponent';
import {deleteFood, deleteFoodSuccess, deleteFoodFailure, resetDeletedFood} from '../actions/foodActions';

function mapStateToProps(state){
  return{
    user: state.user.user,
    authenticated: state.user.status,
    deletedFood: state.food.deletedFood
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    resetMe: () => {
      dispatch(resetDeletedFood());
    },

    callDeleteFood: (foodid) => {
      dispatch(deleteFood(foodid))
      .then((result) => {
        if(result.payload.response && result.payload.response.status !== 200){
          dispatch(deleteFoodFailure(result.payload.response.data));
        }
        dispatch(deleteFoodSuccess(result.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFoodComponent);
