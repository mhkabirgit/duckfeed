import {connect} from 'react-redux';
import AddFeedForm from '../components/AddFeedForm';
import {topFoods, topFoodsSuccess, topFoodsFailure, resetNewFeed} from '../actions/feedActions';
import {fetchFoodList, fetchFoodListSuccess, fetchFoodListFailure}from '../actions/foodActions';

function mapStateToProps(state){
  return {
    user: state.user.user,
    authenticated: state.user.status,
    newFeed: state.feed.newFeed,
    topfoods: state.feed.topFoods,
    foods: state.food.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetNewFeed());
    },

    fetchTopFoods: () => {
      dispatch(topFoods())
      .then( (result) => {
        if(result.payload.response && result.payload.response.status !== 200 ){
          console.log(result.payload.response.data);
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

export default connect(mapStateToProps, mapDispatchToProps)(AddFeedForm);
