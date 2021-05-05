import {SIGN_IN, LOG_IN, LOG_OUT} from '../types';
import * as api from '../api';

export const signUp = values => ({
  type: SIGN_IN,
  payload: api.signUp(values),
});

export const logIn = values => ({
  type: LOG_IN,
  payload: api.logIn(values),
});

export const logOut = () => ({
  type: LOG_OUT,
  payload: api.logOut(),
});
