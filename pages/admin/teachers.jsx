import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import withBasics from '../../components/HOC/withBasics';
import Spinner from '../../components/spinner';
import * as teacherActions from '../../store/teachers/actions';

class Teachers extends React.Component {
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
      teachers,
      getTeachers,
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

      if (teachers.data.length === 0) {
        getTeachers();
      }
    }
  }

  render() {
    const { showPage } = this.state;
    const { teachers } = this.props;

    if (!showPage) {
      return <Spinner />;
    }

    return (
      <div className="container">
        <div className="row">
          {teachers.data.forEach((teacher) => (
            <div className="col-md-6 col-lg-4 mb-3 d-flex justify-content-center">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-img-top bg-dark p-3 d-flex justify-content-center text-white">
                  <img src="/static/teacher.svg" alt="Lehrer" style={{ width: '80px', height: '80px' }} />
                </div>
                <div className="card-body">
                  <h1 className="card-title">{teacher.name}</h1>
                  <p className="card-text">{`E-Mail: ${teacher.email}`}</p>
                  <a href="#" className="btn btn-dark btn-block">Öffnen</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Teachers.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    isAdmin: PropTypes.bool,
    passwordChanged: PropTypes.bool,
  }),
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
  teachers: PropTypes.shape({
    isLoading: PropTypes.bool,
    data: PropTypes.array,
  }),
  getTeachers: PropTypes.func,
};

Teachers.defaultProps = {
  auth: {
    isAuthenticated: false,
    isAdmin: false,
    passwordChanged: false,
  },
  teachers: {
    isLoading: false,
    data: [],
  },
  router: {
    push: () => ({}),
  },
  getTeachers: () => ({}),
};

export default connect(
  (state) => ({
    auth: state.auth,
    teachers: state.teachers,
  }),
  (dispatch) => ({
    getTeachers: () => dispatch(teacherActions.getTeachers()),
  }),
)(withBasics(withRouter(Teachers), 'RaBe - Admin - Lehrerverwaltung'));
