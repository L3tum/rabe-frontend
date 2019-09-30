import React from 'react';
import withBasics from '../../components/HOC/withBasics';

class Admin extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-lg-5 mt-2">
          <div className="col-12">
            <h2 className="text-center">
              Willkommen zum Admin Bereichen
            </h2>
            <p className="text-center">
              Hier haben Sie die Möglichkeit die bestehenden Räume zu verwalten
              so wie neue Räume anzulegen.
              <br />
              Darüber hinaus können Sie hier die Lehrer verwalten und neue anlegen.
              <br />
              Sie können außerdem die Raumbetreuer für die jeweiligen Räume auswählen.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-12 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <h5>
                  Raumverwaltung
                </h5>
                <p>
                  Hier haben Sie die Möglichkeit neue Räume anzulegen,
                  bestehende Räume zu bearbeiten.
                  Dazu zählt der Austausch der Geräte so wie das ändern des Layouts.
                </p>
                <button className="btn btn-dark btn-block" type="button">Räume verwalten</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card">
              <div className="card-body text-center">
                <h5>
                  Lehrerverwaltung
                </h5>
                <p>
                  Hier haben sie die Möglichkeit neue Räume anzulegen,
                  bestehende Räume zu bearbeiten.
                  Dazu zählt der Austausch der Geräte so wie das ändern des Layouts.
                </p>
                <button className="btn btn-dark btn-block" type="button">Lehrer verwalten</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withBasics(Admin, 'RaBe - Admin Panel');
