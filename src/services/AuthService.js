import axios from "axios";

const API_URL = "http://localhost:8070/project-x/api/auth/";


//const [role, setRole] = useState([{id:'1',name:'user'}])

const register = (firstName, userName, email, password, role) => {
  const roles = {
    id:1,
    name:role
  }
  return axios.post(API_URL + "signup", {
    firstName,
    userName,
    email,
    password,
    roles
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