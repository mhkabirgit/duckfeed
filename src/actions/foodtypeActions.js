import axios from 'axios';
import BASE_URL from '../backend/BaseUrl';

export const FETCH_FOODTYPE_LIST = 'FETCH_FOODTYPE_LIST';
export const FETCH_FOODTYPE_LIST_SUCCESS = 'FETCH_FOODTYPE_LIST_SUCCESS';
export const FETCH_FOODTYPE_LIST_FAILURE = 'FETCH_FOODTYPE_LIST_FAILURE';

export const FETCH_FOODTYPE = 'FETCH_FOODTYPE';
export const FETCH_FOODTYPE_SUCCESS = 'FETCH_FOODTYPE_SUCCESS';
export const FETCH_FOODTYPE_FAILURE = 'FETCH_FOODTYPE_FAILURE';

export const ADD_FOODTYPE = 'ADD_FOODTYPE';
export const ADD_FOODTYPE_SUCCESS = 'ADD_FOODTYPE_SUCCESS';
export const ADD_FOODTYPE_FAILURE = 'ADD_FOODTYPE_FAILURE';

export const UPDATE_FOODTYPE = 'UPDATE_FOODTYPE';
export const UPDATE_FOODTYPE_SUCCESS = 'UPDATE_FOODTYPE_SUCCESS';
export const UPDATE_FOODTYPE_FAILURE = 'UPDATE_FOODTYPE_FAILURE';

export const DELETE_FOODTYPE = 'DELETE_FOODTYPE';
export const DELETE_FOODTYPE_SUCCESS = 'DELETE_FOODTYPE_SUCCESS';
export const DELETE_FOODTYPE_FAILURE = 'DELETE_FOODTYPE_FAILURE';

export const RESET_FOODTYPE = 'RESET_FOODTYPE';


export function fetchFoodtypeList(){
  const request = axios.get(`${BASE_URL}/foodtype/all`);
  return {
    type: FETCH_FOODTYPE_LIST,
    payload: request
  }
}

export function fetchFoodtypeListSuccess(foodtypeList){
  return {
    type: FETCH_FOODTYPE_LIST_SUCCESS,
    payload: foodtypeList
  }
}

export function fetchFoodtypeListFailure(error){
  return {
    type: FETCH_FOODTYPE_LIST_FAILURE,
    payload: error
  }
}

export function fetchFoodtype(id){
  const request = axios.get(`${BASE_URL}/foodtype/detail/${id}`);
  return {
    type: FETCH_FOODTYPE,
    payload: request
  }
}

export function fetchFoodtypeSuccess(foodtype){
  return {
    type: FETCH_FOODTYPE_SUCCESS,
    payload: foodtype
  }
}

export function fetchFoodtypeFailure(error){
  return {
    type: FETCH_FOODTYPE_FAILURE,
    payload: error
  }
}


export function addFoodtype(formValues){
  const request = axios.post(`${BASE_URL}/foodtype/add`, formValues);
  return {
    type: ADD_FOODTYPE,
    payload: request
  }
}


export function addFoodtypeSuccess(newFoodtype){
  return {
    type: ADD_FOODTYPE_SUCCESS,
    payload: newFoodtype
  }
}


export function addFoodtypeFailure(error){
  return {
    type: ADD_FOODTYPE_FAILURE,
    payload: error
  }
}

export function updateFoodtype(id, formValues){
  const request = axios.post(`${BASE_URL}/foodtype/update/${id}`, formValues);
  return {
    type: UPDA_FOODTYPE,
    payload: request
  }
}


export function updateFoodtypeSuccess(updatedFoodtype){
  return {
    type: UPDATE_FOODTYPE_SUCCESS,
    payload: updatedFoodtype
  }
}


export function updateFoodtypeFailure(error){
  return {
    type: UPDATE_FOODTYPE_FAILURE,
    payload: error
  }
}


export function deleteFoodtype(id){
  const request = axios.post(`${BASE_URL}/foodtype/delete/${id}`);
  return {
    type: DELETE_FOODTYPE,
    payload: request
  }
}


export function deleteFoodtypeSuccess(deletedFoodtype){
  return {
    type: DELETE_FOODTYPE_SUCCESS,
    payload: deletedFoodtype
  }
}


export function deleteFoodtypeFailure(error){
  return {
    type: DELETE_FOODTYPE_FAILURE,
    payload: error
  }
}

export function resetFoodtype (){
  return {
    type: RESET_FOODTYPE
  }
}
