import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import { containers } from './containers';
import { config } from './config';

export default combineReducers({
  user,
  runtime,
  containers,
  config,
});
