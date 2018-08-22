import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AllFoodtypesContainer from '../containers/AllFoodtypesContainer';

export default class AllFoodtypesComponent extends Component {

  componentDidMount() {
      this.props.resetMe();
      this.props.fetchAllFoodtypes();
  }

  foodtypeTableRows() {
    if(this.props.foodtypeList && this.props.foodtypeList.foodtypes.length > 0){
      return this.props.foodtypeList.foodtypes.map((foodtype, i) => {
          return (
            <tr>
              <td>{foodtype.name} </td>
              <td>
                  <Link to={{
                      pathname:`/foodtype/update/${foodtype._id}`,
                      foodtype:foodtype
                      }}>
                      <button type='button' class='btn btn-primary'>Update</button>
                  </Link>
              </td>
              <td>
                  <Link to={{
                      pathname:`/foodtype/delete/${foodtype._id}`,
                      foodtype:foodtype
                      }}>
                      <button type='button' class='btn btn-danger'>Delete</button>
                  </Link>
              </td>
            </tr>
          );
        }
      );
    }
  }

  render(){
    return (
        <div className="jumbotron jumbotron-fluid">
            <h5>All Foodtypes</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>Name</td><td/><td/>
                  </tr>
                </thead>
                <tbody>
                  {this.foodtypeTableRows()}
                </tbody>
              </table>
        </div>
      );
  }
}
