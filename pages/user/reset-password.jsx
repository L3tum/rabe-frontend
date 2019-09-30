import React from 'react';
import withBasics from '../../components/HOC/withBasics';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.changePassword = this.changePassword.bind(this);

    this.state = {
      error: '',
    };
  }

  changePassword() {
    const { password, passwordRepeat } = this;
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');

    if (password.value !== passwordRepeat.value) {
      this.setState({
        error: 'Passwörter stimmen nicht überein',
      });
    }

    if (!password.value.match(strongRegex)) {
      this.setState({
        error: 'Passwort entspricht nicht den Mindestanforderungen',
      });
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div className="container">
        {error.length > 0 && (
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10 col-12">
              <div className="alert alert-danger mt-lg-5 mt-2">
                {error}
              </div>
            </div>
          </div>
        )}
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-10 col-12">
            <div className={`card${error.length > 0 ? '' : ' mt-lg-5 mt-2'}`}>
              <div className="card-header bg-dark text-white">
                Passwort Ändern
              </div>
              <div className="card-body">
                <p className="font-weight-bold mb-0">
                  Passwort Anforderungen
                </p>
                <ul>
                  <li>
                    Mindestens acht Zeichen.
                  </li>
                  <li>
                    Mindestens eine Großbuchstabe.
                  </li>
                  <li>
                    Mindestens eine Zahl.
                  </li>
                  <li>
                    Mindestens ein der folgendenden Sonderzeichen:{' '}
                    <span className="font-weight-bold">!</span>
                    {', '}
                    <span className="font-weight-bold">@</span>
                    {', '}
                    <span className="font-weight-bold">#</span>
                    {' oder '}
                    <span className="font-weight-bold">&</span>
                    .
                  </li>
                </ul>
                <div className="form-group">
                  <label className="w-100" htmlFor="password">
                    Neues Passwort
                    <input id="password" className="form-control" type="password" ref={(password) => { this.password = password; }} />
                  </label>
                </div>
                <div className="form-group">
                  <label className="w-100" htmlFor="password">
                    Neues Passwort wiederholen
                    <input id="password_repeat" className="form-control" type="password" ref={(passwordRepeat) => { this.passwordRepeat = passwordRepeat; }} />
                  </label>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-end">
                <button type="button" className="btn btn-light mr-3">Zurück</button>
                <button type="button" className="btn btn-dark" onClick={this.changePassword}>Passwort ändern</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withBasics(ResetPassword, 'RaBe - Passwort Ändern');
