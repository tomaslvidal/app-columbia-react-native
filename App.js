import React from "react";

import { createRootNavigator } from "./router";

import { isSignedIn } from "./auth";

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

// store.dispatch(setLoguedAccount({name: "Tomás", last_name: "Vidal", description: "asd"}));

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return(
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
