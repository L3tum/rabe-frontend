import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import withBasics from '../components/HOC/withBasics';


class Rooms extends React.Component {
  componentDidMount() {
    const { auth, router } = this.props;

    if (!auth.isAuthenticated) {
      router.push('/');
    } else if (!auth.passwordChanged) {
      router.push('/reset-password');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            Rooms
          </div>
        </div>
      </div>
    );
  }
}

Rooms.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    passwordChanged: PropTypes.bool,
  }),
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Rooms.defaultProps = {
  auth: {
    isAuthenticated: false,
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
)(withRouter(withBasics(Rooms, 'RaBe - Räume')));
