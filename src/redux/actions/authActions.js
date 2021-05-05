import {SIGN_IN, LOG_IN, LOG_OUT} from '../types';
import * as api from '../api';

export const signIn = values => ({
  type: SIGN_IN,
  payload: api.signIn(values),
});

export const logIn = values => ({
  type: LOG_IN,
  payload: api.logIn(values),
});

export const logOut = () => ({
  type: LOG_OUT,
  payload: api.logOut(),
});
