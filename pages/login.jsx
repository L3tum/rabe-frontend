import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withBasics from '../components/HOC/withBasics';
import { authenticate } from '../store/auth/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);

    this.state = {
      error: '',
    };
  }

  login() {
    const { props } = this;

    if (this.email.value.length > 0 && this.password.value.length > 0) {

      const data = {
        email: this.email.value,
        password: this.password.value,
      };

      props.authenticate(data)
        .then(() => {
          console.log('Logged In');
        })
        .catch(() => {
          this.setState({
            error: 'Beim Anmelden ist ein Fehler aufgetretten.',
          });
        });
    } else {
      this.setState({
        error: 'Bitten füllen sie die die Felder aus.',
      });
    }
  }

  render() {
    const { auth } = this.props;
    const { error } = this.state;

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
                      ref={(email) => { this.email = email; }}
                      onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                          this.login();
                        }
                      }}
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
                      ref={(password) => { this.password = password; }}
                      onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                          this.login();
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={this.login}
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
  }),
};

Login.defaultProps = {
  authenticate: () => ({}),
  auth: {
    isLoading: false,
  },
};

export default connect(
  (state) => ({
    auth: state.auth,
  }),
  (dispatch) => ({
    authenticate: (data) => dispatch(authenticate(data)),
  }),
)(withBasics(Login, 'RaBe - Login'));
