import {connect} from 'react-redux';
import AllFoodtypesComponent from '../components/AllFoodtypesComponent';
import {fetchFoodtypeList, fetchFoodtypeListSuccess, fetchFoodtypeListFailure, resetFoodtypeList} from '../actions/foodtypeActions';

function mapStateToProps(state){
  return {
    user: state.user.user,
    authenticated: state.user.status,
    foodtypeList: state.foodtype.foodtypeList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetFoodtypeList());
    },

    fetchAllFoodtypes: () => {
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

export default connect(mapStateToProps, mapDispatchToProps)(AllFoodtypesComponent);
