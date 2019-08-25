import axios from 'axios';

const instance = axios.create ({
    baseURL: 'http://localhost:8080'
    // 'https://mighty-wildwood-75803.herokuapp.com/'
    // 'https://todo-form.firebaseio.com'
});

export default instance 