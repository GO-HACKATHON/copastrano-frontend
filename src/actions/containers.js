import { REQUEST_CONTAINERS } from '../constants';

export function requestContainersSuccess(containers) {
  return {
    type: REQUEST_CONTAINERS,
    containers,
  };
}

export function fetchAllContainers(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.message);
        }

        return response;
      })
      .then(response => response.json())
      .then(containers => dispatch(requestContainersSuccess(containers.data)));
  };
}
