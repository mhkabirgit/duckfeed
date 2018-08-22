import React, {Component} from 'react';
import FeedListRowComponent from './FeedListRowComponent';

export default class AllFeedsComponent extends Component {

  componentDidMount() {
      this.props.resetMe();
      this.props.fetchFeedList();
  }

  feedTableRows() {
    if(this.props.feedList.feeds && this.props.feedList.feeds.length>0){
      return this.props.feedList.feeds.map((feed, i) => {
          return <FeedListRowComponent feed={feed} key={i} />;
        }
      );
    }
  }

  render(){
    return (
        <div className="jumbotron jumbotron-fluid">
            <h5>All Feeds</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>User</td>
                    <td>Food</td>
                    <td>Ducks</td>
                    <td>Food Amount</td>
                    <td>Longitude</td>
                    <td>Latitude</td>
                    <td>Time</td>
                    <td/>
                    <td/>
                  </tr>
                </thead>
                <tbody>
                  {this.feedTableRows()}
                </tbody>
              </table>
        </div>
      );
  }
}
