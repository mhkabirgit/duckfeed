import {connect} from 'react-redux';
import AddFoodForm from '../components/AddFoodForm';
import {topFoodtypes, topFoodtypesSuccess, topFoodtypesFailure, resetNewFood} from '../actions/foodActions';
import {fetchFoodtypeList, fetchFoodtypeListSuccess, fetchFoodtypeListFailure} from '../actions/foodtypeActions';

function mapStateToProps(state){
  return {
    user: state.user.user,
    authenticated: state.user.status,
    newFood: state.food.newFood,
    topFoodtypes: state.food.topFoodtypes,
    foodtypes: state.foodtype.foodtypeList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetNewFood());
    },

    fetchTopFoodtypes: () => {
      dispatch(topFoodtypes())
      .then( (result) => {
        if(result.payload.response && result.payload.response.status !== 200 ){
          dispatch(topFoodtypesFailure(result.payload.response.data));
        }
        dispatch(topFoodtypesSuccess(result.payload.data));
      });
    },

    fetchFoodtypes: () => {
      dispatch(fetchFoodtypeList())
      .then( (result) => {
        if(result.payload.response && result.payload.response.status !== 200 ){
          dispatch(fetchFoodtypeListFailure(result.payload.response.data));
        }
        dispatch(fetchFoodtypeListSuccess(result.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFoodForm);
