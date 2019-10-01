import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import withBasics from '../../../components/HOC/withBasics';
import Spinner from '../../../components/spinner';
import * as teacherActions from '../../../store/teachers/actions';

class TeacherCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPage: false,
    };
  }

  componentDidMount() {
    const {
      auth,
      router,
    } = this.props;

    if (!auth.passwordChanged && auth.isAuthenticated) {
      router.push('/reset-password');
    } else if (!auth.isAdmin && auth.isAuthenticated) {
      router.push('/rooms');
    } else if (!auth.isAuthenticated) {
      router.push('/login');
    } else {
      this.setState({
        showPage: true,
      });
    }
  }

  render() {
    const { showPage } = this.state;

    if (!showPage) {
      return <Spinner />;
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>
              Lehrer hinzufügen
            </h2>
            <p>
              Hier können Sie neue Lehrer zum System hinzufügen.
              Dazu müssen Sie den Namen des Lehrers, seine E-Mail Adresse angeben.
            </p>
            <p>
              Hinzu kommt noch ein Passwort wo mit sich der Lehrer einloggen kann.
              Dieses Passwort muss er beim erstmaligen anmelden ändern.
            </p>
            <p>
              Außerdem können Sie festlegen ober der Lehrer Admin Rechte haben soll oder nicht.
            </p>
          </div>
        </div>
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-8">
            <form className="w-100">
              <div className="form-group">
                <label className="w-100" htmlFor="name">
                  Name
                  <input
                    id="name"
                    className="form-control"
                    ref={(name) => { this.name = name; }}
                  />
                </label>
              </div>
              <div className="form-group">
                <label className="w-100" htmlFor="email">
                  E-Mail
                  <input
                    id="email"
                    className="form-control"
                    ref={(email) => { this.email = email; }}
                  />
                </label>
              </div>
              <div className="form-group">
                <label className="w-100" htmlFor="email">
                  Initiales Passwort
                  <input
                    id="password"
                    className="form-control"
                    ref={(password) => { this.password = password; }}
                  />
                </label>
              </div>
              <div className="form-group form-check">
                <label htmlFor="email" className="form-check-input ml-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    ref={(isAdmin) => { this.isAdmin = isAdmin; }}
                  />
                  Ist Admin?
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 d-flex justify-content-end">
            <button type="button" className="btn btn-dark">Hinzufügen</button>
          </div>
        </div>
      </div>
    );
  }
}

TeacherCreate.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    isAdmin: PropTypes.bool,
    passwordChanged: PropTypes.bool,
  }),
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
};

TeacherCreate.defaultProps = {
  auth: {
    isAuthenticated: false,
    isAdmin: false,
    passwordChanged: false,
  },
  router: {
    push: () => ({}),
  },
};

export default connect(
  (state) => ({
    auth: state.auth,
  }),
  (dispatch) => ({
    createTeacher: (data) => dispatch(teacherActions.createTeacher(data)),
  }),
)(withBasics(withRouter(TeacherCreate), 'RaBe - Admin - Lehrerverwaltung'));
