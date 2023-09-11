import axios from 'axios';

export default axios.create({
    baseURL:'http://10.45.31.31:8080',
    headers: {"ngrok-skip-browser-warning": "true"}

});