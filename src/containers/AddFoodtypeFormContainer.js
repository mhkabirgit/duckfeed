import {connect} from 'react-redux';
import AddFoodtypeForm from '../components/AddFoodtypeForm';
import {resetNewFoodtype} from '../actions/foodtypeActions';

function mapStateToProps(state){
  return{
    user: state.user.user,
    authenticated: state.user.status,
    newFoodtype: state.foodtype.newFoodtype
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    resetMe: () => {
      dispatch(resetNewFoodtype());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFoodtypeForm);
