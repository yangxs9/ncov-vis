import axios from 'axios';

const request = (url: string, options?: Object | undefined) => {
  return axios({
    ...options,
    url,
  })
    .then(response => response.data);
};

export default request;
