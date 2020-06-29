import axios from 'axios';
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_ERRORS,
  CLEAR_INITIAL_LOADING
} from './types';
import setAuthToken from '../../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    
    let user = JSON.parse(localStorage.user);
    
    dispatch({
      type: USER_LOADED,
      payload: user
    });
    dispatch({
      type: CLEAR_INITIAL_LOADING,
      payload: false
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload:{}
    });
    dispatch({
      type: CLEAR_INITIAL_LOADING,
      payload: false
    });
  }
};


// Login User
export const login = (loginData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const email = loginData.email;
  const password = loginData.password;

  const body = JSON.stringify({ email, password });
console.log(body)
  try {
    const res = await axios.post('/admin/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
      console.log(err)
    dispatch({
      type: GET_ERRORS,
      payload:err.response.data ? err.response.data.data ? err.response.data.data : {}:{}
    });
  }
};

// Login User
export const refreshToken = () => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    
    let body = {
        refreshToken : localStorage.refreshToken
    }
  
  console.log(body)
    try {
      const res = await axios.post('/admin/refreshtoken', body, config);
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
  
      dispatch(loadUser());
    } catch (err) {
        console.log(err)
      dispatch({
        type: GET_ERRORS,
        payload:err.response.data ? err.response.data.data ? err.response.data.data : {}:{}
      });
    }
  };
  


// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};