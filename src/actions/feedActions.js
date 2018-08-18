import axios from 'axios';
import BASE_URL from '../backend/BaseUrl';

export const FETCH_FEED_LIST = 'FETCH_FEED_LIST';
export const FETCH_FEED_LIST_SUCCESS = 'FETCH_FEED_LIST_SUCCESS';
export const FETCH_FEED_LIST_FAILURE = 'FETCH_FEED_LIST_FAILURE';

export const FETCH_FEED = 'FETCH_FEED';
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';
export const FETCH_FEED_FAILURE = 'FETCH_FEED_FAILURE';

export const ADD_FEED = 'ADD_FEED';
export const ADD_FEED_SUCCESS = 'ADD_FEED_SUCCESS';
export const ADD_FEED_FAILURE = 'ADD_FEED_FAILURE';

export const UPDATE_FEED = 'UPDATE_FEED';
export const UPDATE_FEED_SUCCESS = 'UPDATE_FEED_SUCCESS';
export const UPDATE_FEED_FAILURE = 'UPDATE_FEED_FAILURE';

export const DELETE_FEED = 'DELETE_FEED';
export const DELETE_FEED_SUCCESS = 'DELETE_FEED_SUCCESS';
export const DELETE_FEED_FAILURE = 'DELETE_FEED_FAILURE';

export const RESET_FEED = 'RESET_FEED';


export function fetchFeedList(){
  const request = axios.get(`${BASE_URL}/feed/all`);
  return {
    type: FETCH_FEED_LIST,
    payload: request
  }
}

export function fetchFeedListSuccess(feedList){
  return {
    type: FETCH_FEED_LIST_SUCCESS,
    payload: feedList
  }
}

export function fetchFeedListFailure(error){
  return {
    type: FETCH_FEED_LIST_FAILURE,
    payload: error
  }
}

export function fetchFeed(id){
  const request = axios.get(`${BASE_URL}/feed/detail/${id}`);
  return {
    type: FETCH_FEED,
    payload: request
  }
}

export function fetchFeedSuccess(feed){
  return {
    type: FETCH_FEED_SUCCESS,
    payload: feed
  }
}

export function fetchFeedFailure(error){
  return {
    type: FETCH_FEED_FAILURE,
    payload: error
  }
}


export function addFeed(formValues){
  const request = axios.post(`${BASE_URL}/feed/add`, formValues);
  return {
    type: ADD_FEED,
    payload: request
  }
}


export function addFeedSuccess(newFeed){
  return {
    type: ADD_FEED_SUCCESS,
    payload: newFeed
  }
}


export function addFeedFailure(error){
  return {
    type: ADD_FEED_FAILURE,
    payload: error
  }
}

export function updateFeed(id, formValues){
  const request = axios.post(`${BASE_URL}/feed/update/${id}`, formValues);
  return {
    type: UPDATE_FEED,
    payload: request
  }
}


export function updateFeedSuccess(updatedFeed){
  return {
    type: UPDATE_FEED_SUCCESS,
    payload: updatedFEED
  }
}


export function updateFeedFailure(error){
  return {
    type: UPDATE_FEED_FAILURE,
    payload: error
  }
}


export function deleteFeed(id){
  const request = axios.post(`${BASE_URL}/feed/delete/${id}`);
  return {
    type: DELETE_FEED,
    payload: request
  }
}


export function deleteFeedSuccess(deletedFeed){
  return {
    type: DELETE_FEED_SUCCESS,
    payload: deletedFeed
  }
}


export function deleteFeedFailure(error){
  return {
    type: DELETE_FEED_FAILURE,
    payload: error
  }
}

export function resetFeed (){
  return {
    type: RESET_FEED
  }
}