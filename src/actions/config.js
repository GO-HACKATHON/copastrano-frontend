import { POST_CONFIG } from '../constants';

export function postConfigSuccess(config) {
  return {
    type: POST_CONFIG,
    config,
  };
}

export function postConfig(url, gitUrl, file) {
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        git_repo_url: gitUrl,
        yml: file,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.message);
      }

      return response;
    })
    .then(response => response.json())
    .then(config => dispatch(postConfigSuccess(config)));
  };
}
