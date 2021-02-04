import axios from 'axios';

const REST_BASE_API_URL = 'http://localhost:8081/api';
const REST_USERS_API_URL = `${REST_BASE_API_URL}/users`;

class UserService {
  getUsers() {
    return axios.get(REST_USERS_API_URL);
  }
}

export default new UserService();