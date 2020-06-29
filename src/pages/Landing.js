import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MainLayout from '../pages/layouts/MainLayout';
import InitialLoader from '../pages/components/InitialLoader';
import AnonymousRoute from '../routes/AnonymousRoute';

const Landing = (props) => {
  const {isAuthenticated, initialLoading} = props;
  useEffect(() => {
console.log(isAuthenticated)
  }, [isAuthenticated])


  if(initialLoading){
  return  (<InitialLoader/>)
  }else{
    if(isAuthenticated){
      return(  <MainLayout/>)
    
    }else{
      return(<AnonymousRoute/>)
    
    }
  }
  
  


};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  errors:PropTypes.object
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  initialLoading: state.loading.initialLoading,
  errors:state.errors
});
export default connect(
  mapStateToProps,
  {  }
)(Landing);