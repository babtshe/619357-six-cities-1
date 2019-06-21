import axios from 'axios';
import {setAuthRequiredStatus} from './redux/actions';

const BASE_URL = `https://es31-server.appspot.com/six-cities`;
const TIMEOUT = `5000`;
const UNAUTHORIZED = 403;

const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });
  const onSuccess = (response) => {
    dispatch(setAuthRequiredStatus(false));
    return response;
  };
  const onFail = (err) => {
    if (err.response.status === UNAUTHORIZED) {
      // запрос то не обязательно связан с текущей страницей,
      // логично было бы убрать эту штуку отсюда.
      // dispatch(setAuthRequiredStatus(true));
    }
    return err;
  };
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {configureAPI};
