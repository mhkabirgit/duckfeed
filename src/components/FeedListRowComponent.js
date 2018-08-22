import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class FeedListRowComponent extends Component {

  render() {
    return(
      <tr>
        <td>{this.props.feed.user.username}</td>
        <td><Link to={`/food/detail/${this.props.feed.food._id}`}>
            <button type='button' class='btn btn-primary'>{this.props.feed.food.name}</button>
            </Link>
        </td>
        <td> {this.props.feed.duckCount} </td>
        <td> {this.props.feed.feedAmount}</td>
        <td> {this.props.feed.longitude} </td>
        <td> {this.props.feed.latitude} </td>
        <td> {this.props.feed.time} </td>
        <td>
            <Link to={{
                pathname:`/feed/update/${this.props.feed._id}`,
                feed:this.props.feed
                }}>
                <button type='button' class='btn btn-primary'>Update</button>
            </Link>
        </td>
        <td>
            <Link to={{
                pathname:`/feed/delete/${this.props.feed._id}`,
                feed:this.props.feed
                }}>
                <button type='button' class='btn btn-danger'>Delete</button>
            </Link>
        </td>
      </tr>
    );
  }

}
