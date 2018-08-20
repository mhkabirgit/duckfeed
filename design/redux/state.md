state: {
          user: {user: null, status: null, error: null, loading: false},

          foodtype: {
            foodtypeList: {foodtypes: [], error: null, loading: false},
            activeFoodtype: {foodtype: null, error: null, loading: false},
            newFoodtype: {foodtype: null, error: null, loading: false},
            deletedFoodtype: {foodtype: null, error: null, loading: false}
          },

          food: {
            foodList: {foods: [], error: null, loading: false},
            topTypes: {types: [], error: null, loading: false},
            activeFood: {food: null, error: null, loading: false},
            newFood: {food: null, error: null, loading: false},
            deletedFood: {food: null, error: null, loading: false}
          },

          feed: {
            feedList: {feeds: [], error: null, loading: false},
            topFoods: {foods: [], error: null, loading: false},
            activeFeed: {feed: null, error: null, loading: false},
            newFeed: {feed: null, error: null, loading: false},
            deletedFeed: {feed: null, error: null, loading: false}
          },

          schedule: {
            scheduleList: {schedules: [], error: null, loading: false},
            activeSchedule: {schedule: null, error: null, loading: false},
            newSchedule: {schedule: null, error: null, loading: false},
            deletedSchedule: {schedule: null, error: null, loading: false}
          },
          
          form: formReducer
}
