import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://duap-app-server.vercel.app',
  });
const UseAxios = () => {
    return   instance
};

export default UseAxios;