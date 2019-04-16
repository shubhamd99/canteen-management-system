import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2bd9e.firebaseio.com/'
});

export default instance;