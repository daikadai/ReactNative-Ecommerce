import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://100.84.119.168:9000/api'
})

export default apiClient;
