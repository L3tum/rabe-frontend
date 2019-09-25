import React from 'react';
import Head from 'next/head';
import {Stylesheets} from '../components/stylesheets';
import {Scripts} from '../components/scripts';

export default class Login extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Rabe - Login</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        </Head>
        <div className={"container"}>
          <div className={"row justify-content-center align-items-center"}>
            <div className={"col-4"}>
              <div className={"card"}>
                <div className="card-body">
                  This is some text within a card body.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Scripts/>
      </>
    );
  }
}
