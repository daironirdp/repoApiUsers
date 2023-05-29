import axios from 'axios';
export const mycustomAxios = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/",
    });