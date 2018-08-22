import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AllFoodsContainer from '../containers/AllFoodsContainer';

export default class AllFoodsComponent extends Component {

  componentDidMount() {
      this.props.resetMe();
      this.props.fetchAllFoods();
  }

  foodTableRows() {
    if(this.props.foodList && this.props.foodList.foods.length > 0){
      return this.props.foodList.foods.map((food, i) => {
          return (
            <tr>
            <td>{food.name}</td>
            <td><Link to={`/foodtype/detail/${food.foodtype._id}`}>
                <button type='button' class='btn btn-primary'>{food.foodtype.name}</button>
                </Link>
            </td>
              <td>{food.description}</td>
              <td>
                  <Link to={{
                      pathname:`/food/update/${food._id}`,
                      food:food
                      }}>
                      <button type='button' class='btn btn-primary'>Update</button>
                  </Link>
              </td>
              <td>
                  <Link to={{
                      pathname:`/food/delete/${food._id}`,
                      food:food
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
            <h5>All Foods</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Foodtype</td>
                    <td>Description</td>
                    <td/><td/>
                  </tr>
                </thead>
                <tbody>
                  {this.foodTableRows()}
                </tbody>
              </table>
        </div>
      );
  }
}
