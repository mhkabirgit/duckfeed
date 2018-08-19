import {
  FETCH_FOODTYPE_LIST, FETCH_FOODTYPE_LIST_SUCCESS, FETCH_FOODTYPE_LIST_FAILURE, RESET_FOODTYPE_LIST,
  FETCH_FOODTYPE, FETCH_FOODTYPE_SUCCESS, FETCH_FOODTYPE_FAILURE, RESET_ACTIVE_FOODTYPE,
  ADD_FOODTYPE, ADD_FOODTYPE_SUCCESS, ADD_FOODTYPE_FAILURE, RESET_NEW_FOODTYPE,
  UPDATE_FOODTYPE, UPDATE_FOODTYPE_SUCCESS, UPDATE_FOODTYPE_FAILURE,
  DELETE_FOODTYPE, DELETE_FOODTYPE_SUCCESS, DELETE_FOODTYPE_FAILURE, RESET_DELETED_FOODTYPE
} from '../actions/foodtypeActions';

const INITIAL_STATE = {
  foodtypeList: {foodtypes: [], error: null, loading: false},
  activeFoodtype: {foodtype: null, error: null, loading: false},
  newFoodtype: {foodtype: null, error: null, loading: false},
  deletedFoodtype: {foodtype: null, error: null, loading: false}
};

export default function(state=INITIAL_STATE, action){
  let error;
  switch(action.type) {
    case FETCH_FOODTYPE_LIST:
        return {...state, foodtypeList: {foodtypes: [], error: null, loading: true} };
    case FETCH_FOODTYPE_LIST_SUCCESS:
        return {...state, foodtypeList: {foodtypes: action.payload, error: null, loading: false} };
    case FETCH_FOODTYPE_LIST_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, foodtypeList: {foodtypes: [], error: error, loading: false} };
    case RESET_FOODTYPE_LIST:
        return {...state, foodtypeList: {foodtypes: [], error: null, loading: false} };
    case FETCH_FOODTYPE:
        return {...state, activeFoodtype: {foodtype: null, error: null, loading: true} };
    case FETCH_FOODTYPE_SUCCESS:
        return {...state, activeFoodtype: {foodtype: action.payload, error: null, loading: false} };
    case FETCH_FOODTYPE_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, activeFoodtype: {foodtype: null, error: error, loading: false} };
    case RESET_ACTIVE_FOODTYPE:
        return {...state, activeFoodtype: {foodtype: null, error: null, loading: false} };
    case ADD_FOODTYPE:
        return {...state, newFoodtype: {foodtype: null, error: null, loading: true} };
    case ADD_FOODTYPE_SUCCESS:
        return {...state, newFoodtype: {foodtype: action.payload, error: null, loading: false} };
    case ADD_FOODTYPE_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, newFoodtype: {foodtype: null, error: error, loading: false} };
    case RESET_NEW_FOODTYPE:
        return {...state, newFoodtype: {foodtype: null, error: null, loading: false} };
    case UPDATE_FOODTYPE:
        return {...state, activeFoodtype: {foodtype: null, error: null, loading: true} };
    case UPDATE_FOODTYPE_SUCCESS:
        return {...state, activeFoodtype: {foodtype: action.payload, error: null, loading: false} };
    case UPDATE_FOODTYPE_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, activeFoodtype: {foodtype: null, error: error, loading: false} };
    case DELETE_FOODTYPE:
        return {...state, deletedFoodtype: {foodtype: null, error: null, loading: true} };
    case DELETE_FOODTYPE_SUCCESS:
        return {...state, deletedFoodtype: {foodtype: action.payload, error: null, loading: false} };
    case DELETE_FOODTYPE_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, deletedFoodtype: {foodtype: null, error: error, loading: false} };
    case RESET_DELETED_FOODTYPE:
        return {...state, deletedFoodtype: {foodtype: null, error: null, loading: false} };
    default:
        return state;
  }
}
