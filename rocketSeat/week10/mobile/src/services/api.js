import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.72:3333',
});
// No emulador podo utilizar localhost

export default api;