import React from 'react';
import Head from 'next/head';
import { Scripts } from '../components/scripts';
import Nav from '../components/nav';

export default class Login extends React.Component {
  render() {
    const emailKey = 'email';
    return (
      <>
        <Head>
          <title>Rabe - Login</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
        </Head>
        <Nav />
        <div className="container">
          <div className="row justify-content-center align-items-center ">
            <div className="col-6">
              <div className="card mt-lg-5 mt-2">
                <div className="card-header bg-dark text-white">
                  Login
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label className="w-100" htmlFor="email">
                      E-Mail
                      <input id="email" className="form-control" ref={(email) => this.email === email} />
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="w-100" htmlFor="password">
                      Passwort
                      <input id="password" className="form-control" type="password" ref={(password) => this.password = password} />
                    </label>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-end">
                  <button type="button" className="btn btn-dark">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Scripts />
      </>
    );
  }
}
