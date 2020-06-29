import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
} from "../actions/types";
import jwt from "jsonwebtoken";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: localStorage.getItem("token") ? true : false,
  loading: false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticated: localStorage.getItem("token") ? true : false,
        loading: false,
        user: localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user"))
          : {},
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      localStorage.setItem(
        "user",
        JSON.stringify(jwt.decode(payload.refreshToken))
      );
      localStorage.setItem("refreshToken", payload.refreshToken);
      return {
        ...state,
        ...payload,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
        user: jwt.decode(payload.refreshToken),
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
      return {
        ...state,
        errors: payload,
      };
    case LOGOUT:
        localStorage.clear();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: {},
      };
    case ACCOUNT_DELETED:
        localStorage.clear();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
