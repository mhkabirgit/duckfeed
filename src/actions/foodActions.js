import axios from 'axios';
import BASE_URL from '../backend/BaseUrl';

export const FETCH_FOOD_LIST = 'FETCH_FOOD_LIST';
export const FETCH_FOOD_LIST_SUCCESS = 'FETCH_FOOD_LIST_SUCCESS';
export const FETCH_FOOD_LIST_FAILURE = 'FETCH_FOOD_LIST_FAILURE';
export const RESET_FOOD_LIST = 'RESET_FOOD_LIST';

export const FETCH_FOOD = 'FETCH_FOOD';
export const FETCH_FOOD_SUCCESS = 'FETCH_FOOD_SUCCESS';
export const FETCH_FOOD_FAILURE = 'FETCH_FOOD_FAILURE';
export const RESET_ACTIVE_FOOD = 'RESET_ACTIVE_FOOD';

export const ADD_FOOD = 'ADD_FOOD';
export const ADD_FOOD_SUCCESS = 'ADD_FOOD_SUCCESS';
export const ADD_FOOD_FAILURE = 'ADD_FOOD_FAILURE';
export const RESET_NEW_FOOD = 'RESET_NEW_FOOD';

export const UPDATE_FOOD = 'UPDATE_FOOD';
export const UPDATE_FOOD_SUCCESS = 'UPDATE_FOOD_SUCCESS';
export const UPDATE_FOOD_FAILURE = 'UPDATE_FOOD_FAILURE';

export const DELETE_FOOD = 'DELETE_FOOD';
export const DELETE_FOOD_SUCCESS = 'DELETE_FOOD_SUCCESS';
export const DELETE_FOOD_FAILURE = 'DELETE_FOOD_FAILURE';
export const RESET_DELETED_FOOD = 'RESET_DELETED_FOOD';

export const TOP_FOODTYPES = 'TOP_FOODTYPES';
export const TOP_FOODTYPES_SUCCESS = 'TOP_FOODTYPES_SUCCESS';
export const TOP_FOODTYPES_FAILURE = 'TOP_FOODTYPES_FAILURE';
export const RESET_TOP_FOODTYPES = 'RESET_TOP_FOODTYPES';


export function fetchFoodList(){
  const request = axios.get(`${BASE_URL}/feeds/food/all`);
  return {
    type: FETCH_FOOD_LIST,
    payload: request
  }
}

export function fetchFoodListSuccess(foodList){
  return {
    type: FETCH_FOOD_LIST_SUCCESS,
    payload: foodList
  }
}

export function fetchFoodListFailure(error){
  return {
    type: FETCH_FOOD_LIST_FAILURE,
    payload: error
  }
}

export function resetFoodList (){
  return {
    type: RESET_FOOD_LIST
  }
}


export function fetchFood(id){
  const request = axios.get(`${BASE_URL}/feeds/food/detail/${id}`);
  return {
    type: FETCH_FOOD,
    payload: request
  }
}

export function fetchFoodSuccess(food){
  return {
    type: FETCH_FOOD_SUCCESS,
    payload: food
  }
}

export function fetchFoodFailure(error){
  return {
    type: FETCH_FOOD_FAILURE,
    payload: error
  }
}

export function resetActiveFood (){
  return {
    type: RESET_ACTIVE_FOOD
  }
}



export function addFood(formValues){
  const request = axios.post(`${BASE_URL}/feeds/food/add`, formValues);
  return {
    type: ADD_FOOD,
    payload: request
  }
}


export function addFoodSuccess(newFood){
  return {
    type: ADD_FOOD_SUCCESS,
    payload: newFood
  }
}


export function addFoodFailure(error){
  return {
    type: ADD_FOOD_FAILURE,
    payload: error
  }
}

export function resetNewFood (){
  return {
    type: RESET_NEW_FOOD
  }
}


export function updateFood(id, formValues){
  const request = axios.post(`${BASE_URL}/feeds/food/update/${id}`, formValues);
  return {
    type: UPDATE_FOOD,
    payload: request
  }
}


export function updateFoodSuccess(updatedFood){
  return {
    type: UPDATE_FOOD_SUCCESS,
    payload: updatedFood
  }
}


export function updateFoodFailure(error){
  return {
    type: UPDATE_FOOD_FAILURE,
    payload: error
  }
}


export function deleteFood(id){
  const request = axios.post(`${BASE_URL}/feeds/food/delete/${id}`);
  return {
    type: DELETE_FOOD,
    payload: request
  }
}


export function deleteFoodSuccess(deletedFood){
  return {
    type: DELETE_FOOD_SUCCESS,
    payload: deletedFood
  }
}


export function deleteFoodFailure(error){
  return {
    type: DELETE_FOOD_FAILURE,
    payload: error
  }
}

export function resetDeletedFood (){
  return {
    type: RESET_DELETED_FOOD
  }
}

export function topFoodtypes() {
  const request = axios.get(`${BASE_URL}/feeds/topfoodtypes`);
  return {
    type: TOP_FOODTYPES,
    payload: request
  }
}

export function topFoodtypesSuccess(topFoodtypes) {
  return {
    type: TOP_FOODTYPES_SUCCESS,
    payload: topFoodtypes
  }
}

export function topFoodtypesFailure(error) {
  return {
    type: TOP_FOODTYPES_FAILURE,
    payload: error
  }
}

export function resetTopFoodtypes() {
  return {
    type: RESET_TOP_FOODTYPES
  }
}
