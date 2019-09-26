import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    /* eslint-disable */
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
    /* eslint-enable */
  }
}

export default withReduxStore(MyApp);
