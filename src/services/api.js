import axios from 'axios';

const api = axios.create({
    baseURL: 'https://back-omni.herokuapp.com',

});

export default api;