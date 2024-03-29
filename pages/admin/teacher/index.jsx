import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import withBasics from '../../../components/HOC/withBasics';
import Spinner from '../../../components/spinner';
import * as teacherActions from '../../../store/teachers/actions';

class Teacher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPage: false,
    };
  }

  componentDidMount() {
    const {
      teachers,
      getTeachers,
    } = this.props;

    if (teachers.data.length === 0) {
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
    const { teachers } = this.props;

    if (!showPage) {
      return <Spinner/>;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-3 d-flex justify-content-center">
            <div className="card w-100">
              <div className="card-img-top bg-dark p-3 d-flex justify-content-center text-white">
                <img src="/static/add.svg" alt="Hinzufügen" style={{ width: '80px', height: '80px' }} />
              </div>
              <div className="card-body d-flex align-items-start flex-column">
                <h1 className="card-title">Lehrer hinzufügen</h1>
                <Link href="/admin/teacher/create">
                  <button type="button" className="btn btn-dark btn-block mt-auto">Hinzufügen</button>
                </Link>
              </div>
            </div>
          </div>
          {teachers.data.map((teacher) => (
            <div key={`Teacher-${teacher.id}`} className="col-md-6 col-lg-4 mb-3 d-flex justify-content-center">
              <div className="card w-100">
                <div className="card-img-top bg-dark p-3 d-flex justify-content-center text-white">
                  <img src="/static/teacher.svg" alt="Lehrer" style={{ width: '80px', height: '80px' }}/>
                </div>
                <div className="card-body d-flex align-items-start flex-column">
                  <h1 className="card-title">{teacher.name}</h1>
                  <p className="card-text">{`E-Mail: ${teacher.email}`}</p>
                  <Link href="/admin/teacher/[id]" as={`/admin/teacher/${teacher.id}`}>
                    <button type="button" className="btn btn-dark btn-block mt-auto">Öffnen</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Teacher.propTypes = {
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

Teacher.defaultProps = {
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
)(withBasics(withRouter(Teacher), 'RaBe - Admin - Lehrerverwaltung'));
