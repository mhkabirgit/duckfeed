import React, {Component} from 'react';
import ScheduleListRowComponent from './ScheduleListRowComponent';

export default class AllSchedulesComponent extends Component {

  componentDidMount() {
      this.props.resetMe();
      this.props.fetchScheduleList();
  }

  scheduleTableRows() {
    if(this.props.scheduleList.schedules && this.props.scheduleList.schedules.length>0){
      return this.props.scheduleList.schedules.map((schedule, i) => {
          return <ScheduleListRowComponent schedule={schedule} key={i} />;
        }
      );
    }
  }

  render(){
    return (
        <div className="jumbotron jumbotron-fluid">
            <h5>All Schedules</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>User</td>
                    <td>Food</td>
                    <td>Ducks</td>
                    <td>Food Amount</td>
                    <td>Longitude</td>
                    <td>Latitude</td>
                    <td>Scheduled Time</td>
                    <td>Starts</td>
                    <td>Ends</td>
                    <td/>
                    <td/>
                  </tr>
                </thead>
                <tbody>
                  {this.scheduleTableRows()}
                </tbody>
              </table>
        </div>
      );
  }
}
