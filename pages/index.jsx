import React from 'react';
import Link from 'next/link';
import withBasics from '../components/HOC/withBasics';

class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="display-4 text-center text-muted mt-5">
              Willkommen zum Raum-Betreuungs Tool
              <br />
              <span className="display-2 font-weight-bolder text-dark rabe-logo">
              RaBe
              </span>
            </p>
            <div className="text-center">
              <img src="/static/favicon.ico" />
            </div>
            <h5 className="text-center text-muted mt-3">
              Mit diesem Tool können Sie Probleme an Arbeitsplätzen in Räumen verwalten.
              <br />
              Sie können bestehende Fehler einsehen und neue Fehler eintragen.
              <br />
              Diese Fehler werden dann an den entsprechenden Betreuer weitergeleitet
            </h5>
            <div className="row justify-content-center mt-3">
              <div className="col-12 col-md-6">
                <Link href="/login">
                  <button type="button" className="btn btn-dark btn-block btn-lg">
                    Einloggen
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withBasics(Index, 'RaBe - Willkommen');
