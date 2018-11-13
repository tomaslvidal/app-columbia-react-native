import React from "react";

import { Platform, StatusBar } from "react-native";

import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";

import LoginContainer from "./containers/LoginContainer";

import HomeContainer from './containers/HomeContainer';

import DestinationListContainer from './containers/DestinationContainer/List';

import DestinationDetailContainer from './containers/DestinationContainer/Detail';

import VoucherContainer from './containers/VoucherContainer';

import SurveysContainer from './containers/SurveysContainer';

import ClaimsContainer from './containers/ClaimsContainer';

export const SignedOut = createStackNavigator({
  SignIn: {
    screen: HomeContainer
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
    screen: HomeContainer
  },
  SignIn_: {
    screen: LoginContainer
  },
  DestinationList: {
    screen: DestinationListContainer
  },
  DestinationDetail: {
    screen: DestinationDetailContainer
  },
  Voucher: {
    screen: VoucherContainer
  },
  Surveys: {
    screen: SurveysContainer
  },
  Claims: {
    screen: ClaimsContainer
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