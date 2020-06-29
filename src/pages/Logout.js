import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {logout} from '../redux/actions/authAction'
const Logout = (props) => {
    const {logout, history} = props;
    useEffect(() => {
     logout();
     history.push('/')
    }, [logout, history])
    return (
        <div>
          <h1>Logout</h1>
        </div>
    )
}


Logout.propTypes = {
    logout: PropTypes.func.isRequired,

  };
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errors:state.errors
  });
  export default connect(
    mapStateToProps,
    { logout }
  )(Logout);