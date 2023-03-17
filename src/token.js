import axios from 'axios';
import { connectionsAPIAxios } from './axiosRequests';
export const token = {
  set(token) {
    connectionsAPIAxios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token}`;
  },
  unset() {
    connectionsAPIAxios.defaults.headers.common['Authorization'] = '';
  },
};
