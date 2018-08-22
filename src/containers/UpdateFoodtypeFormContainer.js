import {connect} from 'react-redux';
import UpdateFoodtypeForm from '../components/UpdateFoodtypeForm';
import {fetchFoodtype, fetchFoodtypeSuccess, fetchFoodtypeFailure, resetActiveFoodtype} from '../actions/foodtypeActions';

function mapStateToProps(state){
  return{
    user: state.user.user,
    authenticated: state.user.status,
    activeFoodtype: state.foodtype.activeFoodtype
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    resetMe: () => {
      dispatch(resetActiveFoodtype());
    },

    fetchActiveFoodtype: (foodtypeid) => {
      dispatch(fetchFoodtype(foodtypeid))
      .then((result) => {
        if(result.payload.response && result.payload.response.status !== 200){
          console.log(result.payload.response);
          dispatch(fetchFoodtypeFailure(result.payload.response.data));
        }
        console.log(result.payload.data);
        this.props.initialValues(result.payload.data.foodtype);
        dispatch(fetchFoodtypeSuccess(result.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFoodtypeForm);
