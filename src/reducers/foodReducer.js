import {
  FETCH_FOOD_LIST, FETCH_FOOD_LIST_SUCCESS, FETCH_FOOD_LIST_FAILURE, RESET_FOOD_LIST,
  FETCH_FOOD, FETCH_FOOD_SUCCESS, FETCH_FOOD_FAILURE, RESET_ACTIVE_FOOD,
  ADD_FOOD, ADD_FOOD_SUCCESS, ADD_FOOD_FAILURE, RESET_NEW_FOOD,
  UPDATE_FOOD, UPDATE_FOOD_SUCCESS, UPDATE_FOOD_FAILURE,
  DELETE_FOOD, DELETE_FOOD_SUCCESS, DELETE_FOOD_FAILURE, RESET_DELETED_FOOD
} from '../actions/foodActions';

const INITIAL_STATE = {
  foodList: {foods: [], error: null, loading: false},
  activeFood: {food: null, error: null, loading: false},
  newFood: {food: null, error: null, loading: false},
  deletedFood: {food: null, error: null, loading: false}
};

export default function(state=INITIAL_STATE, action){
  let error;
  switch(action.type) {
    case FETCH_FOOD_LIST:
        return {...state, foodList: {foods: [], error: null, loading: true} };
    case FETCH_FOOD_LIST_SUCCESS:
        return {...state, foodList: {foods: action.payload, error: null, loading: false} };
    case FETCH_FOOD_LIST_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, foodList: {foods: [], error: error, loading: false} };
    case RESET_FOOD_LIST:
        return {...state, foodList: {foods: [], error: null, loading: false} };
    case FETCH_FOOD:
        return {...state, activeFood: {food: null, error: null, loading: true} };
    case FETCH_FOOD_SUCCESS:
        return {...state, activeFood: {food: action.payload, error: null, loading: false} };
    case FETCH_FOOD_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, activeFood: {food: null, error: error, loading: false} };
    case RESET_ACTIVE_FOOD:
        return {...state, activeFood: {food: null, error: null, loading: false} };
    case ADD_FOOD:
        return {...state, newFood: {food: null, error: null, loading: true} };
    case ADD_FOOD_SUCCESS:
        return {...state, newFood: {food: action.payload, error: null, loading: false} };
    case ADD_FOOD_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, newFood: {food: null, error: error, loading: false} };
    case RESET_NEW_FOOD:
        return {...state, newFood: {food: null, error: null, loading: false} };
    case UPDATE_FOOD:
        return {...state, activeFood: {food: null, error: null, loading: true} };
    case UPDATE_FOOD_SUCCESS:
        return {...state, activeFood: {food: action.payload, error: null, loading: false} };
    case UPDATE_FOOD_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, activeFood: {food: null, error: error, loading: false} };
    case DELETE_FOOD:
        return {...state, deletedFood: {food: null, error: null, loading: true} };
    case DELETE_FOOD_SUCCESS:
        return {...state, deletedFood: {food: action.payload, error: null, loading: false} };
    case DELETE_FOOD_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, deletedFood: {food: null, error: error, loading: false} };
    case RESET_DELETED_FOOD:
        return {...state, deletedFood: {food: null, error: null, loading: false} };
    default:
        return state;
  }
}
