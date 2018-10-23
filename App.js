import {Scene,Router, Actions} from 'react-native-router-flux';

import React, { Component } from 'react';

import HomeView from './HomeView';

import DestinationList from './containers/DestinationList.js';

import DestinationDetail from './containers/DestinationDetail.js';

import VoucherView from './containers/VoucherView.js';

import PollsView from './containers/PollsView.js';

import ClaimsView from './containers/ClaimsView.js';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import logger from 'redux-logger';

import thunk from 'redux-thunk';

import reducer from './reducers';

import { setLoguedAccount } from './actions';

const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(logger, thunk)
  )
);

store.dispatch(setLoguedAccount({name: "Tomás", last_name: "Vidal", description: "asdasdasdlkdflskjfsdfsfjl"}));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="home" component={HomeView} hideNavBar />
            
            <Scene key="DestinationList" component={DestinationList} hideNavBar />
            
            <Scene key="DestinationDetail" component={DestinationDetail} hideNavBar />
            
            <Scene key="VoucherView" component={VoucherView} hideNavBar />
            
            <Scene key="PollsView" component={PollsView} hideNavBar />
            
            <Scene key="ClaimsView" component={ClaimsView} hideNavBar />
          </Scene>
        </Router>
      </Provider>
    );
  }
}