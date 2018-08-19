import axios from 'axios';
import BASE_URL from '../backend/BaseUrl';

export const FETCH_SCHEDULE_LIST = 'FETCH_SCHEDULE_LIST';
export const FETCH_SCHEDULE_LIST_SUCCESS = 'FETCH_SCHEDULE_LIST_SUCCESS';
export const FETCH_SCHEDULE_LIST_FAILURE = 'FETCH_SCHEDULE_LIST_FAILURE';
export const RESET_SCHEDULE_LIST = 'RESET_SCHEDULE_LIST';

export const FETCH_SCHEDULE = 'FETCH_SCHEDULE';
export const FETCH_SCHEDULE_SUCCESS = 'FETCH_SCHEDULE_SUCCESS';
export const FETCH_SCHEDULE_FAILURE = 'FETCH_SCHEDULE_FAILURE';
export const RESET_ACTIVE_SCHEDULE = 'RESET_ACTIVE_SCHEDULE';

export const ADD_SCHEDULE = 'ADD_SCHEDULE';
export const ADD_SCHEDULE_SUCCESS = 'ADD_SCHEDULE_SUCCESS';
export const ADD_SCHEDULE_FAILURE = 'ADD_SCHEDULE_FAILURE';
export const RESET_NEW_SCHEDULE = 'RESET_NEW_SCHEDULE';

export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const UPDATE_SCHEDULE_SUCCESS = 'UPDATE_SCHEDULE_SUCCESS';
export const UPDATE_SCHEDULE_FAILURE = 'UPDATE_SCHEDULE_FAILURE';

export const DELETE_SCHEDULE = 'DELETE_SCHEDULE';
export const DELETE_SCHEDULE_SUCCESS = 'DELETE_SCHEDULE_SUCCESS';
export const DELETE_SCHEDULE_FAILURE = 'DELETE_SCHEDULE_FAILURE';
export const RESET_DELETED_SCHEDULE = 'RESET_DELETED_SCHEDULE';

export const CONFIRM_SCHEDULE = 'CONFIRM_SCHEDULE';
export const CONFIRM_SCHEDULE_SUCCESS = 'CONFIRM_SCHEDULE_SUCCESS';
export const CONFIRM_SCHEDULE_FAILURE = 'CONFIRM_SCHEDULE_FAILURE';

export const CANCEL_SCHEDULE = 'CANCEL_SCHEDULE';
export const CANCEL_SCHEDULE_SUCCESS = 'CANCEL_SCHEDULE_SUCCESS';
export const CANCEL_SCHEDULE_FAILURE = 'CANCEL_SCHEDULE_FAILURE';


export function fetchScheduleList(){
  const request = axios.get(`${BASE_URL}/feeds/schedule/all`);
  return {
    type: FETCH_SCHEDULE_LIST,
    payload: request
  }
}

export function fetchScheduleListSuccess(scheduleList){
  return {
    type: FETCH_SCHEDULE_LIST_SUCCESS,
    payload: scheduleList
  }
}

export function fetchScheduleListFailure(error){
  return {
    type: FETCH_SCHEDULE_LIST_FAILURE,
    payload: error
  }
}

export function resetScheduleList (){
  return {
    type: RESET_SCHEDULE_LIST
  }
}


export function fetchSchedule(id){
  const request = axios.get(`${BASE_URL}/feeds/schedule/detail/${id}`);
  return {
    type: FETCH_SCHEDULE,
    payload: request
  }
}

export function fetchScheduleSuccess(schedule){
  return {
    type: FETCH_SCHEDULE_SUCCESS,
    payload: schedule
  }
}

export function fetchScheduleFailure(error){
  return {
    type: FETCH_SCHEDULE_FAILURE,
    payload: error
  }
}

export function resetActiveSchedule (){
  return {
    type: RESET_ACTIVE_SCHEDULE
  }
}

export function addSchedule(formValues){
  const request = axios.post(`${BASE_URL}/feeds/schedule/add`, formValues);
  return {
    type: ADD_SCHEDULE,
    payload: request
  }
}


export function addScheduleSuccess(newSchedule){
  return {
    type: ADD_SCHEDULE_SUCCESS,
    payload: newSchedule
  }
}


export function addScheduleFailure(error){
  return {
    type: ADD_SCHEDULE_FAILURE,
    payload: error
  }
}

export function resetNewSchedule (){
  return {
    type: RESET_NEW_SCHEDULE
  }
}


export function updateSchedule(id, formValues){
  const request = axios.post(`${BASE_URL}/feeds/schedule/update/${id}`, formValues);
  return {
    type: UPDATE_SCHEDULE,
    payload: request
  }
}


export function updateScheduleSuccess(updatedSchedule){
  return {
    type: UPDATE_SCHEDULE_SUCCESS,
    payload: updatedSchedule
  }
}


export function updateScheduleFailure(error){
  return {
    type: UPDATE_SCHEDULE_FAILURE,
    payload: error
  }
}


export function deleteSchedule(id){
  const request = axios.post(`${BASE_URL}/feeds/schedule/delete/${id}`);
  return {
    type: DELETE_SCHEDULE,
    payload: request
  }
}


export function deleteScheduleSuccess(deletedSchedule){
  return {
    type: DELETE_SCHEDULE_SUCCESS,
    payload: deletedSchedule
  }
}


export function deleteScheduleFailure(error){
  return {
    type: DELETE_SCHEDULE_FAILURE,
    payload: error
  }
}

export function resetDeletedSchedule (){
  return {
    type: RESET_DELETED_SCHEDULE
  }
}



export function confirmSchedule(id){
  const request = axios.post(`${BASE_URL}/feeds/schedule/confirm/${id}`);
  return {
    type: CONFIRM_SCHEDULE,
    payload: request
  }
}


export function confirmScheduleSuccess(confirmedSchedule){
  return {
    type: CONFIRM_SCHEDULE_SUCCESS,
    payload: confirmedSchedule
  }
}


export function confirmScheduleFailure(error){
  return {
    type: CONFIRM_SCHEDULE_FAILURE,
    payload: error
  }
}


export function cancelSchedule(id){
  const request = axios.post(`${BASE_URL}/feeds/schedule/cancel/${id}`);
  return {
    type: CANCEL_SCHEDULE,
    payload: request
  }
}


export function cancelScheduleSuccess(canceledSchedule){
  return {
    type: CANCEL_SCHEDULE_SUCCESS,
    payload: canceledSchedule
  }
}


export function cancelScheduleFailure(error){
  return {
    type: CANCEL_SCHEDULE_FAILURE,
    payload: error
  }
}
