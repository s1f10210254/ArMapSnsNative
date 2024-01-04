import {base_URL} from '@env';
import api from '../api/$api';
import aspida from '@aspida/axios';
const apiClient = api(
  aspida(undefined, {
    // baseURL: `${base_URL}/api`,
    baseURL: 'http://localhost:31577/api',
  }),
);
export default apiClient;
