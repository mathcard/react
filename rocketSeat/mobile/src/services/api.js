import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-math.herokuapp.com',
});

export default api;