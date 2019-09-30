import React from 'react';
import Head from 'next/dist/next-server/lib/head';
import Scripts from '../scripts';
import Nav from '../nav';

const withBasics = (Component, title) => class extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>{title}</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
          <link rel="stylesheet" href="../static/rabe.css" />
        </Head>
        <Nav />
        <Component {...this.props} />
        <Scripts />
      </>
    );
  }
};

export default withBasics;
