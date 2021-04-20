import axios from "axios";

const API_URL = "http://localhost:8070/project-x/api/auth/";

const register = (firstName, username, email, password, role) => {
  return axios.post(API_URL + "signup", {
    firstName,
    username,
    email,
    password,
    role
  });
};

const login = (usernameOrEmail, password) => {
  return axios
    .post(API_URL + "signin", {
      usernameOrEmail,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};