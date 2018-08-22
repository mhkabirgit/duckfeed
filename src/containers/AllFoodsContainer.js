import {connect} from 'react-redux';
import AllFoodsComponent from '../components/AllFoodsComponent';
import {fetchFoodList, fetchFoodListSuccess, fetchFoodListFailure, resetFoodList} from '../actions/foodActions';

function mapStateToProps(state){
  return {
    foodList: state.food.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetFoodList());
    },

    fetchAllFoods: () => {
      dispatch(fetchFoodList())
      .then( (result) => {
        if(result.payload.response && result.payload.response.status !== 200 ){
          dispatch(fetchFoodListFailure(result.payload.response.data));
        }
        dispatch(fetchFoodListSuccess(result.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllFoodsComponent);
