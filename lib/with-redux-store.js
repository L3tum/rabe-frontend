/* eslint-disable */
import React from 'react';
import axios from 'axios';
import { initializeStore } from '../store';
import initialize from "../components/initialize";

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

axios.default = {
  headers: { Authorization: `Bearer ${getOrCreateStore().getState().auth.token}` }
};

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

export default (App) => class AppWithRedux extends React.Component {
  static async getInitialProps(appContext) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const reduxStore = getOrCreateStore();

    // Provide the store to getInitialProps of pages
    appContext.ctx.reduxStore = reduxStore;

    initialize(appContext.ctx);

    let appProps = {};
    if (typeof App.getInitialProps === 'function') {
      appProps = await App.getInitialProps(appContext);
    }

    return {
      ...appProps,
      initialReduxState: reduxStore.getState(),
    };
  }

  constructor(props) {
    super(props);
    this.reduxStore = getOrCreateStore(props.initialReduxState);
  }

  render() {
    return <App {...this.props} reduxStore={this.reduxStore} />;
  }
};
