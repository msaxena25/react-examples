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

  data = {
    terminalDataList: [
      {
        rowId: 110463,
        terminalId: 1669,
        terminalName: "Motiva San Antonio Branded Rack",
        terminalCode: "MOTIVA-MOTVSNAN-SHL-BRD",
      },
      {
        rowId: 119603,
        terminalId: 1672,
        terminalName: "Citgo San Antonio Branded Rack",
        terminalCode: "CITGO-CITGSNAN-CIT-BRD",
      },
      {
        rowId: 119490,
        terminalId: 1697,
        terminalName: "Citgo San Antonio Discounted Unbranded Rack",
        terminalCode: "CITGO-CITGSNAN-CIT-UBD",
      },
      {
        rowId: 119995,
        terminalId: 1698,
        terminalName: "Western Albuquerque Unbranded Rack",
        terminalCode: "WESTERN-WESTALBQ-NON-UBD",
      },
    ],
  };

  getStaticData() {
    return this.data;
  }
}

export default AppService;
