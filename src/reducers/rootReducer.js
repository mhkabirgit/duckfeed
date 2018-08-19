import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UserReducer from './userReducer';
import FoodtypeReducer from './foodtypeReducer';
import FoodReducer from './foodReducer';
import FeedReducer from './feedReducer';
import ScheduleReducer from './scheduleReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  foodtype: FoodtypeReducer,
  food: FoodReducer,
  feed: FeedReducer,
  schedule: ScheduleReducer,
  form: formReducer
});

export default rootReducer;
