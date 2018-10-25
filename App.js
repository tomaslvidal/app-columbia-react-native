import React from "react";

import { createRootNavigator } from "./router";

import { isSignedIn } from "./auth";

import { Provider } from 'react-redux';

import { setLoguedAccount } from './actions';

import store from './store';

// store.dispatch(setLoguedAccount({name: "Tomás", last_name: "Vidal", description: "asd"}));

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
    };
  }

  componentDidMount() {
    isSignedIn()
    .then(res => this.setState({ signedIn: res }));
  }

  render(){
    const { signedIn } = this.state, Layout = createRootNavigator(signedIn);
    
    return(
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}