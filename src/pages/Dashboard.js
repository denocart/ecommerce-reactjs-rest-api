import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
const Dashboard = (props) => {
    const {user} = props;
    return (
        <div>
            <h1>Dashboard</h1>
         <h3> Welcome, {user.firstName}{user.lastName}</h3>  
        </div>
    )
}

Dashboard.propTypes = {
    user:PropTypes.object
  };
  const mapStateToProps = state => ({
    user: state.auth.user,

  });
  export default connect(
    mapStateToProps,
    {  }
  )(Dashboard);