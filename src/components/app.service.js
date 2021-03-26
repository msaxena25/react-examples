import axios from "axios";

// Get all Users from API > https://jsonplaceholder.typicode.com/guide/
class AppService {
  async getUsers() {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.data;
      });
  }

  async postUsers(data) {
    return axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((response) => {
        return response.data;
      });
  }
}

export default AppService;
