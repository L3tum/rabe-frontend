import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import withBasics from '../../components/HOC/withBasics';
import Spinner from '../../components/spinner';

class Rooms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPage: false,
    };
  }


  componentDidMount() {
    const { auth, router } = this.props;

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
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            Raum 1
          </div>
        </div>
      </div>
    );
  }
}

Rooms.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    isAdmin: PropTypes.bool,
    passwordChanged: PropTypes.bool,
  }),
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Rooms.defaultProps = {
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
)(withBasics(withRouter(Rooms), 'RaBe - Admin - Raumverwaltung'));
