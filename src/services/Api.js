import axios from 'axios';

//Comunicação Front - Back
const api = () => axios.create({
    baseURL: 'http://localhost:3333/api',
});

export default api;