import Config from './Config';
import axios from 'axios';
import Cookie from 'js-cookie';

const token = Cookie.get('family_portrait_access_token');
if(!!token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const axiosInstance = axios.create({
  baseURL: Config.API_END_POINT,
  timeout: 30000, // 30 secs.
  withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

export default axiosInstance;
