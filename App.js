/*import {Scene,Router, Actions} from 'react-native-router-flux';
import React, { Component } from 'react';
import HomeView from './HomeView';

export default class App extends Component {
  render() {
    return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar />
      </Scene>
    </Router>
    );
  }
}*/

import {Scene,Router, Actions} from 'react-native-router-flux';
import React, { Component } from 'react';
import HomeView from './HomeView';
import DestinationList from './containers/DestinationList.js'
import DestinationDetail from './containers/DestinationDetail.js'
import VoucherView from './containers/VoucherView.js'
import PollsView from './containers/PollsView.js'
import ClaimsView from './containers/ClaimsView.js'

export default class App extends Component {
  render() {
    return (
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
    );
  }
}

