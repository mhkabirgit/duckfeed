import SignUpForm from '../components/SignUpForm.js';
import { resetUser } from '../actions/userActions';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetUser());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
