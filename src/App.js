import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
// import { Router, browserHistory, Switch, Route} from 'react-router';
import axios from 'axios';

import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';

import AddFoodtypeFormContainer from './containers/AddFoodtypeFormContainer';
import AddFoodFormContainer from './containers/AddFoodFormContainer';
import AddFeedFormContainer from './containers/AddFeedFormContainer';
import AddScheduleFormContainer from './containers/AddScheduleFormContainer';

import DeleteFeedContainer from './containers/DeleteFeedContainer';
import DeleteScheduleContainer from './containers/DeleteScheduleContainer';
import DeleteFoodContainer from './containers/DeleteFoodContainer';
import DeleteFoodtypeContainer from './containers/DeleteFoodtypeContainer';

import AllFeedsContainer from './containers/AllFeedsContainer';
import AllSchedulesContainer from './containers/AllSchedulesContainer';
import AllFoodsContainer from './containers/AllFoodsContainer';
import AllFoodtypesContainer from './containers/AllFoodtypesContainer';

import SignupFormContainer from './containers/SignupFormContainer';
import SigninFormContainer from './containers/SigninFormContainer';
import SignoutContainer from './containers/SignoutContainer';

import NotImplementedYetComponent from './components/NotImplementedYetComponent';

import './App.css';

class App extends Component {

  componentDidMount() {
    axios.defaults.withCredentials = true;
  }

  render() {
    return (
      <BrowserRouter>
      <div className='container-fluid'>
      <div className='App'>
          <HeaderComponent/>
          <Switch>
              <Route exact path='/' component={HomeComponent}/>

              <Route exact path='/feed/add' component={AddFeedFormContainer}/>
              <Route exact path='/schedule/add' component={AddScheduleFormContainer}/>
              <Route exact path='/food/add' component={AddFoodFormContainer}/>
              <Route exact path='/foodtype/add' component={AddFoodtypeFormContainer}/>

              <Route exact path='/feed/detail/:id' component={NotImplementedYetComponent}/>
              <Route exact path='/schedule/detail/:id' component={NotImplementedYetComponent}/>
              <Route exact path='/food/detail/:id' component={NotImplementedYetComponent}/>
              <Route exact path='/foodtype/detail/:id' component={NotImplementedYetComponent}/>

              <Route exact path='/feed/update/:id' component={NotImplementedYetComponent}/>
              <Route exact path='/schedule/update/:id' component={NotImplementedYetComponent}/>
              <Route exact path='/food/update/:id' component={NotImplementedYetComponent}/>
              <Route exact path='/foodtype/update/:id' component={NotImplementedYetComponent}/>

              <Route exact path='/feed/delete/:id' component={DeleteFeedContainer}/>
              <Route exact path='/schedule/delete/:id' component={DeleteScheduleContainer}/>
              <Route exact path='/food/delete/:id' component={DeleteFoodContainer}/>
              <Route exact path='/foodtype/delete/:id' component={DeleteFoodtypeContainer}/>

              <Route exact path='/feed/all' component={AllFeedsContainer}/>
              <Route exact path='/schedule/all' component={AllSchedulesContainer}/>
              <Route exact path='/food/all' component={AllFoodsContainer}/>
              <Route exact path='/foodtype/all' component={AllFoodtypesContainer}/>

              <Route exact path='/schedule/confirm' component={NotImplementedYetComponent}/>
              <Route exact path='/schedule/cancel' component={NotImplementedYetComponent}/>

              <Route exact path='/user/signin' component={SigninFormContainer}/>
              <Route exact path='/user/signout' component={SignoutContainer}/>
              <Route exact path='/user/signup' component={SignupFormContainer}/>
          </Switch>
          </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
