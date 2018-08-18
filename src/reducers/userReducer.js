
import {
	SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, RESET_USER,
	SIGNIN_USER, SIGNIN_USER_SUCCESS,  SIGNIN_USER_FAILURE,
	LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE
} from '../actions/userActions';

//user = userobj,
// status can be:
// 1. 'signup' (signing up)
// 2. 'signin' (signing in)
// 3. 'authenticated'(after signin)
// 4. 'logout' (after logout)

const INITIAL_STATE = {user: null, status:null, error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case SIGNUP_USER:// sign up user, set loading = true and status = signup
        return { ...state, user: null, status:'signup', error:null, loading: true};
    case SIGNUP_USER_SUCCESS://return user, status = authenticated and make loading = false
        return { ...state, user: action.payload.user, status:'authenticated', error:null, loading: false}; //<-- authenticated
    case SIGNUP_USER_FAILURE:// return error and make loading = false
        error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
        return { ...state, user: null, status:'signup', error:error, loading: false};
    case RESET_USER:// reset authenticated user to initial state
        return { ...state, user: null, status:null, error:null, loading: false};

    case SIGNIN_USER:// sign in user,  set loading = true and status = signin
        return { ...state, user: null, status:'signin', error:null, loading: true};
    case SIGNIN_USER_SUCCESS://return authenticated user,  make loading = false and status = authenticated
        return { ...state, user: action.payload.user, status:'authenticated', error:null, loading: false}; //<-- authenticated
    case SIGNIN_USER_FAILURE:// return error and make loading = false
        error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
        return { ...state, user: null, status:'signin', error:error, loading: false};

    case LOGOUT_USER_SUCCESS:
        return {...state, user:null, status:'logout', error:null, loading: false};
    case LOGOUT_USER:
    case LOGOUT_USER_FAILURE:
    default:
    return state;
  }
}
