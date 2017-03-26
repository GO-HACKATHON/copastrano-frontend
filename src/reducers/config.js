import { POST_CONFIG } from '../constants';

export function config(state = {}, action) {
  switch (action.type) {
    case POST_CONFIG:
      return action.config;

    default:
      return state;
  }
}

export default config;
