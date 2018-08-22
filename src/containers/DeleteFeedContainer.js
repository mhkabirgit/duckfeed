import {connect} from 'react-redux';
import DeleteFeedComponent from '../components/DeleteFeedComponent';
import {deleteFeed, deleteFeedSuccess, deleteFeedFailure, resetDeletedFeed} from '../actions/feedActions';

function mapStateToProps(state){
  return{
    user: state.user.user,
    authenticated: state.user.status,
    deletedFeed: state.feed.deletedFeed
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    resetMe: () => {
      dispatch(resetDeletedFeed());
    },

    callDeleteFeed: (feedid) => {
      dispatch(deleteFeed(feedid))
      .then((result) => {
        if(result.payload.response && result.payload.response.status !== 200){
          dispatch(deleteFeedFailure(result.payload.response.data));
        }
        dispatch(deleteFeedSuccess(result.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFeedComponent);
