import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://burgermaker-ba191.firebaseio.com/'
});

export default instance;