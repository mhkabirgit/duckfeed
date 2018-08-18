import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class HomeComponent extends Component {

  render(){
    return (
      <div className='jumbotron jumbotron-fluid'>
        <h5>Duck Feed Home </h5>
        <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                        <Link to={'/feed/all'} className='nav-link'> All Feeds</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <Link to={'/schedule/all'} className='nav-link'> All Schedules</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <Link to={'/food/all'} className='nav-link'> All Foods</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <Link to={'/foodtype/all'} className='nav-link'> All Food Types</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
      </div>
    );
  }
}
