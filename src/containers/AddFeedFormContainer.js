import {connect} from 'react-redux';
import AddFeedForm from '../components/AddFeedForm';
import {topFoods, topFoodsSuccess, topFoodsFailure, resetNewFeed} from '../actions/feedActions';

function mapStateToProps(state){
  return {
    user: state.user.user,
    authenticated: state.user.status,
    newFeed: state.feed.newFeed,
    topFoods: state.feed.topFoods
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetNewFeed());
    },

    fetchTopFoods: () => {
      dispatch(topFoods())
      .then( (result) => {
        if(result.payload.response && result.payload.response.status !== 200 ){
          dispatch(topFoodsFailure(result.payload.response.data));
        }
        dispatch(topFoodsSuccess(result.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFeedForm);
