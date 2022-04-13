import axios from 'axios';

const customAxios = axios.create({
  /* eslint-disable-next-line */
  baseURL: 'https://62286b649fd6174ca82321f1.mockapi.io/',
});

customAxios.defaults.headers.common['Accept'] = 'application/json'
customAxios.defaults.headers.common['Content-Type'] = 'application/json'

export default customAxios;