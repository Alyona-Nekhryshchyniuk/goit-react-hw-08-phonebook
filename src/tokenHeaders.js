import { connectionsAPIAxios } from './axiosRequests';
export const tokenHeaders = {
  set(token) {
    connectionsAPIAxios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token}`;
  },
  unset() {
    connectionsAPIAxios.defaults.headers.common['Authorization'] = '';
  },
};
