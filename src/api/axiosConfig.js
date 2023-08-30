import axios from 'axios';

export default axios.create({
    baseURL:'http://192.168.1.11:8080',
    headers: {"ngrok-skip-browser-warning": "true"}

});