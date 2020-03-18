import axios from 'axios';
import App from '../routes';

const api = axios.create({
    baseURL: 'https://rocketseat-node.herokuapp.com/api'
});

export default api; 