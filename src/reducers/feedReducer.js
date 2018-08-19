import {
  FETCH_FEED_LIST, FETCH_FEED_LIST_SUCCESS, FETCH_FEED_LIST_FAILURE, RESET_FEED_LIST,
  FETCH_FEED, FETCH_FEED_SUCCESS, FETCH_FEED_FAILURE, RESET_ACTIVE_FEED,
  ADD_FEED, ADD_FEED_SUCCESS, ADD_FEED_FAILURE, RESET_NEW_FEED,
  UPDATE_FEED, UPDATE_FEED_SUCCESS, UPDATE_FEED_FAILURE,
  DELETE_FEED, DELETE_FEED_SUCCESS, DELETE_FEED_FAILURE, RESET_DELETED_FEED,
  TOP_FOODS, TOP_FOODS_SUCCESS, TOP_FOODS_FAILURE, RESET_TOP_FOODS
} from '../actions/feedActions';

const INITIAL_STATE = {
  feedList: {feeds: [], error: null, loading: false},
  topFoods: {foods: [{_id:1, name:"Rice", type: "Grain", description:"cracked rice" }, {_id:2, name:"Wheat", type: "Grain", description:"cracked wheat" }], error: null, loading: false},
  activeFeed: {feed: null, error: null, loading: false},
  newFeed: {feed: null, error: null, loading: false},
  deletedFeed: {feed: null, error: null, loading: false}
};

export default function(state=INITIAL_STATE, action){
  let error;
  switch(action.type) {
    case FETCH_FEED_LIST:
        return {...state, feedList: {feeds: [], error: null, loading: true} };
    case FETCH_FEED_LIST_SUCCESS:
        return {...state, feedList: {feeds: action.payload, error: null, loading: false} };
    case FETCH_FEED_LIST_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, feedList: {feeds: [], error: error, loading: false} };
    case RESET_FEED_LIST:
        return {...state, feedList: {feeds: [], error: null, loading: false} };
    case FETCH_FEED:
        return {...state, activeFeed: {feed: null, error: null, loading: true} };
    case FETCH_FEED_SUCCESS:
        return {...state, activeFeed: {feed: action.payload, error: null, loading: false} };
    case FETCH_FEED_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, activeFeed: {feed: null, error: error, loading: false} };
    case RESET_ACTIVE_FEED:
        return {...state, activeFeed: {feed: null, error: null, loading: false} };
    case ADD_FEED:
        return {...state, newFeed: {feed: null, error: null, loading: true} };
    case ADD_FEED_SUCCESS:
        return {...state, newFeed: {feed: action.payload, error: null, loading: false} };
    case ADD_FEED_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, newFeed: {feed: null, error: error, loading: false} };
    case RESET_NEW_FEED:
        return {...state, newFeed: {feed: null, error: null, loading: false} };
    case UPDATE_FEED:
        return {...state, activeFeed: {feed: null, error: null, loading: true} };
    case UPDATE_FEED_SUCCESS:
        return {...state, activeFeed: {feed: action.payload, error: null, loading: false} };
    case UPDATE_FEED_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, activeFeed: {feed: null, error: error, loading: false} };
    case DELETE_FEED:
        return {...state, deletedFeed: {feed: null, error: null, loading: true} };
    case DELETE_FEED_SUCCESS:
        return {...state, deletedFeed: {feed: action.payload, error: null, loading: false} };
    case DELETE_FEED_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, deletedFeed: {feed: null, error: error, loading: false} };
    case RESET_DELETED_FEED:
        return {...state, deletedFeed: {feed: null, error: null, loading: false} };
    case TOP_FOODS:
        return {...state, topFoods: {foods: [], error: null, loading: true} };
    case TOP_FOODS_SUCCESS:
        return {...state, topFoods: {foods: action.payload, error: null, loading: false} };
    case TOP_FOODS_FAILURE:
        error=action.payload || {message: action.payload.message};
        return {...state, topFoods: {foods: [], error: error, loading: false} };
    case RESET_TOP_FOODS:
        return {...state, topFoods: {foods: [], error: null, loading: false} };

    default:
        return state;
  }
}
