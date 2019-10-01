import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import withBasics from '../../../components/HOC/withBasics';
import Spinner from '../../../components/spinner';
import * as teacherActions from '../../../store/teachers/actions';

class TeacherInfo extends React.Component {
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
    } else if (teachers.data.length === 0) {
      getTeachers()
        .then(() => {
          this.setState({
            showPage: true,
          });
        });
    } else {
      this.setState({
        showPage: true,
      });
    }
  }

  render() {
    const { showPage } = this.state;
    const { teachers, router } = this.props;

    const teacher = teachers.data.find((object) => (
      object.id === parseInt(router.query.id, 10)
    ));

    if (!showPage) {
      return <Spinner />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-3 d-flex justify-content-center">
            <div className="card w-100">
              <div className="card-img-top bg-dark p-3 d-flex justify-content-center text-white">
                <img src="/static/teacher.svg" alt="Lehrer" style={{ width: '80px', height: '80px' }} />
              </div>
              <div className="card-body d-flex align-items-start flex-column">
                <h1 className="card-title">{teacher.name}</h1>
                <p className="card-text">{`E-Mail: ${teacher.email}`}</p>
                <button type="button" className="btn btn-dark btn-block mt-auto">Öffnen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TeacherInfo.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    isAdmin: PropTypes.bool,
    passwordChanged: PropTypes.bool,
  }),
  router: PropTypes.shape({
    push: PropTypes.func,
    query: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  teachers: PropTypes.shape({
    isLoading: PropTypes.bool,
    data: PropTypes.array,
  }),
  getTeachers: PropTypes.func,
};

TeacherInfo.defaultProps = {
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
    query: {
      id: '',
    },
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
)(withBasics(withRouter(TeacherInfo), 'RaBe - Admin - Lehrerverwaltung'));
