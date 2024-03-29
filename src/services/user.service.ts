import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/login';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}

export default new UserService();

