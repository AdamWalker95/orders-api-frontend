import axios from "axios";

const API_URL = "http://localhost:3000/";

class AuthService {
  login(username: string, password: string) {
    return axios
      .post(API_URL + "login", {
        "email": username,
        "password": password
      })
      .then(response => {
        // TODO
      });
  }

  logout() {
    localStorage.removeItem("user");
    return axios
      .post(API_URL + "logout")
      .then(response => {
        // TODO
      });
  }

  register(username: string, email: string, password: string) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();

