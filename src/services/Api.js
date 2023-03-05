import axios from 'axios';

//Comunicação Front - Back
export default () => axios.create({
    baseURL: 'http://localhost:3000/api',
});