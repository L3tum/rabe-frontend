import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withBasics from '../components/HOC/withBasics';
import { authenticate } from '../store/auth/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login() {
    const { props } = this;

    const data = {
      email: this.email.value,
      password: this.password.value,
    };

    props.authenticate(data);
  }

  render() {
    const { auth } = this.props;

    return (
      <div className="container">
        <div className="row justify-content-center align-items-center ">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="card mt-lg-5 mt-2">
              <div className="card-header bg-dark text-white">
                  Login
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label className="w-100" htmlFor="email">
                      E-Mail
                    <input id="email" className="form-control" ref={(email) => { this.email = email; }} />
                  </label>
                </div>
                <div className="form-group">
                  <label className="w-100" htmlFor="password">
                      Passwort
                    <input id="password" className="form-control" type="password" ref={(password) => { this.password = password; }} />
                  </label>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={this.login}
                >
                  {auth.isLoading ? 'Lädt' : 'Login'}
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
