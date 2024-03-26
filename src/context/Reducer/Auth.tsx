import {
    CLEAR_AUTH_STATE,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_USER,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
  } from '../../Constants/actionTypes';
  
  const auth = (state:any, {type, payload}:any) => {
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          userDetails: payload,
          error:null,
        };
  
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          userDetails: payload,
          isLoggedIn: true,
         
        };
  
      case LOGOUT_USER:
        return {
          ...state,
          loading: false,
          isLoggedIn: false,
        };
  
      case REGISTER_FAIL:
        return {
          ...state,
          loading: false,
          error: payload,
        };
  
      case CLEAR_AUTH_STATE:
        return {
          ...state,
          
          loading: false,
          userDetails: null,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  export default auth;
  