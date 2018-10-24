import React from "react";

import { Platform, StatusBar } from "react-native";

import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";

// import SignIn from "./containers/SignIn";

import HomeView from './containers/HomeView';

import DestinationList from './containers/DestinationList';

import DestinationDetail from './containers/DestinationDetail';

import VoucherView from './containers/VoucherView';

import PollsView from './containers/PollsView';

import ClaimsView from './containers/ClaimsView';

export const SignedOut = createStackNavigator({
  SignIn: {
    screen: DestinationList
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}
);

export const SignedIn = createStackNavigator({
  Home: {
    screen: HomeView
  },
  DestinationList: {
    screen: DestinationList
  },
  DestinationDetail: {
    screen: DestinationDetail
  },
  Voucher: {
    screen: VoucherView
  },
  Polls: {
    screen: PollsView
  },
  Claims: {
    screen: ClaimsView
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn,
      },
      SignedOut: {
        screen: SignedOut
      },
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut",
    }
  );
};