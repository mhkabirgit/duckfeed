import {connect} from 'react-redux';
import AllFeedsComponent from '../components/AllFeedsComponent';
import {fetchFeedList, fetchFeedListSuccess, fetchFeedListFailure, resetFeedList} from '../actions/feedActions';

function mapStateToProps(state){
  return {
    feedList: state.feed.feedList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    resetMe: () => {
      dispatch(resetFeedList());
    },

    fetchFeedList: () => {
      dispatch(fetchFeedList())
      .then( (result) => {
        if(result.payload.response && result.payload.response.status !== 200 ){
          dispatch(fetchFeedListFailure(result.payload.response.data));
        }
        dispatch(fetchFeedListSuccess(result.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllFeedsComponent);
