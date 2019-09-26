import React from 'react';
import withBasics from '../components/HOC/withBasics';

class Welcome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="display-4 text-center text-muted mt-5">
              Willkommen zum RaBe Tool
            </p>
            <h5 className="text-center text-muted mt-3">
              Mit diesem Tool können Sie Probleme an Arbeitsplätzen in Räumen verwalten.
              <br />
              Sie können bestehende Fehler einsehen und neue Fehler eintragen.
              <br />
              Diese Fehler werden dann an den entsprechenden Betreuer weitergeleitet
            </h5>
            <div className="row justify-content-center mt-3">
              <div className="col-2">
                <button type="button" className="btn btn-light">
                  Fehler anzeigen
                </button>
              </div>
              <div className="col-2">
                <button type="button" className="btn btn-dark">
                  Fehler melden
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withBasics(Welcome);
