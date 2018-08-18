import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
