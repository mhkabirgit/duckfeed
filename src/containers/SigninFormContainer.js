import { connect } from 'react-redux';
import SignInForm from '../components/SignInForm.js';
import {resetUser} from '../actions/userActions';

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
   resetMe: () =>{
     dispatch(resetUser());
   }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
