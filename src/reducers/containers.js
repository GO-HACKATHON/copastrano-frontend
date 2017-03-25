import { REQUEST_CONTAINERS } from '../constants';

export function containers(state = [], action) {
  switch (action.type) {
    case REQUEST_CONTAINERS:
      return action.containers;

    default:
      return state;
  }
}

export default containers;
