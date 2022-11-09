import axios from "axios";

const LOGIN_API_URL = "http://localhost:8080/api/v1/login";

class LoginService {
 
  validateCredentials(admin) {
    return axios.post(LOGIN_API_URL, admin);
  }

  
}

export default new LoginService();
