import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Nav = (props) => {
  const { auth } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a className="navbar-brand" href="#">RaBe</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {auth.isAuthenticated && (
          <>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Fehler
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Räume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </>
          )}
        </ul>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }),
};

Nav.defaultProps = {
  auth: {
    isAuthenticated: false,
  },
};

export default connect(
  (state) => ({
    auth: state.auth,
  }),
)(Nav);
