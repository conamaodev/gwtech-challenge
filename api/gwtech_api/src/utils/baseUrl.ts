import axios from "axios";

export default axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/',
    timeout: 60000,
    headers: { 'Content-Type': 'application/json' },
});