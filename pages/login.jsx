import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import withBasics from '../components/HOC/withBasics';
import * as authActions from '../store/auth/actions';
import Spinner from '../components/spinner';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);

    this.state = {
      error: '',
      wrongPassword: 0,
      showPage: false,
    };
  }

  componentDidMount() {
    const { auth } = this.props;

    this.setState({
      showPage: true,
    });
    if (auth.isBlocked) {
      this.setState({
        error: 'Ihr Account wurde auf Grund zu vieler fehlgeschlagener Login Versuche gesperrt. Bitte wenden Sie einen Administrator',
      });
    }
  }

  login() {
    const { authenticate, router, blockTeacher } = this.props;

    this.setState({
      error: '',
    });

    if (this.email.value.length > 0 && this.password.value.length > 0) {
      const data = {
        email: this.email.value,
        password: this.password.value,
      };
      const { wrongPassword } = this.state;

      authenticate(data)
        .then((response) => {
          if (!response.data.passwordGeaendert) {
            router.push('/reset-password');
          } else {
            router.push('/rooms');
          }
        })
        .catch((error) => {
          // const { status } = error.response;
          console.log(error);
          if (error.response.status === 401) {
            const newValue = wrongPassword + 1;
            if (newValue === 3) {
              blockTeacher();
              this.setState({
                error: 'Ihr Account wurde auf Grund zu vieler fehlgeschlagener Login Versuche gesperrt. Bitte wenden Sie sich an einen Administrator',
              });
            } else {
              this.setState({
                wrongPassword: newValue,
                error: 'Benutzerdaten falsch.',
              });
            }
          }
          if (error.response.status === 404) {
            this.setState({
              error: 'Benutzerdaten falsch.',
            });
          } else {
            this.setState({
              error: 'Beim Anmelden ist ein Fehler aufgetretten.',
            });
          }
        });
    } else {
      this.setState({
        error: 'Bitten füllen sie die die Felder aus.',
      });
    }
  }

  render() {
    const { auth } = this.props;
    const { error, showPage } = this.state;

    if (!showPage) {
      return <Spinner/>;
    }

    return (
      <div className="container">
        {error.length > 0 && (
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10 col-12">
              <div className="alert alert-danger">
                {error}
              </div>
            </div>
          </div>
        )}
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="card">
              <div className="card-header bg-dark text-white">
                Anmelden
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label className="w-100" htmlFor="email">
                    E-Mail
                    <input
                      id="email"
                      className="form-control"
                      ref={(email) => {
                        this.email = email;
                      }}
                      onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                          this.login();
                        }
                      }}
                      disabled={auth.isBlocked}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label className="w-100" htmlFor="password">
                    Passwort
                    <input
                      id="password"
                      className="form-control"
                      type="password"
                      ref={(password) => {
                        this.password = password;
                      }}
                      onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                          this.login();
                        }
                      }}
                      disabled={auth.isBlocked}
                    />
                  </label>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={this.login}
                  disabled={auth.isBlocked}
                >
                  {auth.isLoading ? 'Lädt...' : 'Anmelden'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  authenticate: PropTypes.func,
  auth: PropTypes.shape({
    isLoading: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    isBlocked: PropTypes.bool,
  }),
  blockTeacher: PropTypes.func,
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
};


Login.defaultProps = {
  authenticate: () => ({}),
  auth: {
    isLoading: false,
    isBlocked: false,
    isAuthenticated: false,
  },
  blockTeacher: () => ({}),
  router: {
    push: () => ({}),
  },
};

export default connect(
  (state) => ({
    auth: state.auth,
  }),
  (dispatch) => ({
    authenticate: (data) => dispatch(authActions.authenticate(data)),
    blockTeacher: () => dispatch(authActions.blockTeacher()),
  }),
)(withBasics(withRouter(Login), 'RaBe - Login'));
