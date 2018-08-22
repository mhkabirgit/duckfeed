import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ScheduleListRowComponent extends Component {

  render() {
    return(
      <tr>
        <td>{this.props.schedule.user.username}</td>
        <td><Link to={`/food/detail/${this.props.schedule.food._id}`}>
            <button type='button' class='btn btn-primary'>{this.props.schedule.food.name}</button>
            </Link>
        </td>
        <td> {this.props.schedule.duckCount} </td>
        <td> {this.props.schedule.feedAmount}</td>
        <td> {this.props.schedule.longitude} </td>
        <td> {this.props.schedule.latitude} </td>
        <td> {this.props.schedule.hours}:{this.props.schedule.minutes} </td>
        <td> {this.props.schedule.startDate.split("T")[0]} </td>
        <td> {this.props.schedule.endDate.split("T")[0]} </td>
        <td>
            <Link to={{
                pathname:`/schedule/update/${this.props.schedule._id}`,
                schedule:this.props.schedule
                }}>
                <button type='button' class='btn btn-primary'>Update</button>
            </Link>
        </td>
        <td>
            <Link to={{
                pathname:`/schedule/delete/${this.props.schedule._id}`,
                schedule:this.props.schedule
                }}>
                <button type='button' class='btn btn-danger'>Delete</button>
            </Link>
        </td>
      </tr>
    );
  }

}
