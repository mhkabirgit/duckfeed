import {
  FETCH_SCHEDULE_LIST, FETCH_SCHEDULE_LIST_SUCCESS, FETCH_SCHEDULE_LIST_FAILURE, RESET_SCHEDULE_LIST,
  FETCH_SCHEDULE, FETCH_SCHEDULE_SUCCESS, FETCH_SCHEDULE_FAILURE, RESET_ACTIVE_SCHEDULE,
  ADD_SCHEDULE, ADD_SCHEDULE_SUCCESS, ADD_SCHEDULE_FAILURE, RESET_NEW_SCHEDULE,
  UPDATE_SCHEDULE, UPDATE_SCHEDULE_SUCCESS, UPDATE_SCHEDULE_FAILURE,
  DELETE_SCHEDULE, DELETE_SCHEDULE_SUCCESS, DELETE_SCHEDULE_FAILURE, RESET_DELETED_SCHEDULE,
  CONFIRM_SCHEDULE, CONFIRM_SCHEDULE_SUCCESS, CONFIRM_SCHEDULE_FAILURE,
  CANCEL_SCHEDULE, CANCEL_SCHEDULE_SUCCESS, CANCEL_SCHEDULE_FAILURE
} from '../actions/scheduleActions';

const INITIAL_STATE = {
  scheduleList: {schedules: [], error: null, loading: false},
  activeSchedule: {schedule: null, error: null, loading: false},
  newSchedule: {schedule: null, error: null, loading: false},
  deletedSchedule: {schedule: null, error: null, loading: false}
};

export default function(state=INITIAL_STATE, action){
  let error;
  switch(action.type) {
    case FETCH_SCHEDULE_LIST:
        return {...state, scheduleList: {schedules: [], error: null, loading: true} };
    case FETCH_SCHEDULE_LIST_SUCCESS:
        return {...state, scheduleList: {schedules: action.payload, error: null, loading: false} };
    case FETCH_SCHEDULE_LIST_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, scheduleList: {schedules: [], error: error, loading: false} };
    case RESET_SCHEDULE_LIST:
        return {...state, scheduleList: {schedules: [], error: null, loading: false} };
    case FETCH_SCHEDULE:
        return {...state, activeSchedule: {schedule: null, error: null, loading: true} };
    case FETCH_SCHEDULE_SUCCESS:
        return {...state, activeSchedule: {schedule: action.payload, error: null, loading: false} };
    case FETCH_SCHEDULE_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, activeSchedule: {schedule: null, error: error, loading: false} };
    case RESET_ACTIVE_SCHEDULE:
        return {...state, activeSchedule: {schedule: null, error: null, loading: false} };
    case ADD_SCHEDULE:
        return {...state, newSchedule: {schedule: null, error: null, loading: true} };
    case ADD_SCHEDULE_SUCCESS:
        return {...state, newSchedule: {schedule: action.payload, error: null, loading: false} };
    case ADD_SCHEDULE_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, newSchedule: {schedule: null, error: error, loading: false} };
    case RESET_NEW_SCHEDULE:
        return {...state, newSchedule: {schedule: null, error: null, loading: false} };
    case UPDATE_SCHEDULE:
        return {...state, activeSchedule: {schedule: null, error: null, loading: true} };
    case UPDATE_SCHEDULE_SUCCESS:
        return {...state, activeSchedule: {schedule: action.payload, error: null, loading: false} };
    case UPDATE_SCHEDULE_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, activeSchedule: {schedule: null, error: error, loading: false} };
    case DELETE_SCHEDULE:
        return {...state, deletedSchedule: {schedule: null, error: null, loading: true} };
    case DELETE_SCHEDULE_SUCCESS:
        return {...state, deletedSchedule: {schedule: action.payload, error: null, loading: false} };
    case DELETE_SCHEDULE_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, deletedSchedule: {schedule: null, error: error, loading: false} };
    case RESET_DELETED_SCHEDULE:
        return {...state, deletedSchedule: {schedule: null, error: null, loading: false} };
    case CONFIRM_SCHEDULE:
        return {...state, activeSchedule: {schedule: null, error: null, loading: true} };
    case CONFIRM_SCHEDULE_SUCCESS:
        return {...state, activeSchedule: {schedule: action.payload, error: null, loading: false} };
    case CONFIRM_SCHEDULE_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, activeSchedule: {schedule: null, error: error, loading: false} };
    case CANCEL_SCHEDULE:
            return {...state, activeSchedule: {schedule: null, error: null, loading: true} };
    case CANCEL_SCHEDULE_SUCCESS:
            return {...state, activeSchedule: {schedule: action.payload, error: null, loading: false} };
    case CANCEL_SCHEDULE_FAILURE:
            error=action.payload || {message: action.payload.message};
            return {...state, activeSchedule: {schedule: null, error: error, loading: false} };
    default:
        return state;
  }
}
