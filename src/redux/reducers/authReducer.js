import {SIGN_IN, LOG_IN, LOG_OUT} from '../types';

const INITIAL_STATE = {
  user: {},
  isAuth: false,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case LOG_IN:
      return {
        ...state,
        // user: action.payload,
      };
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default authReducer;
