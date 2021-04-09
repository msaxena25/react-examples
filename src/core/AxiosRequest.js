import axios from "axios";
import { BASE_URL_GITHUB } from "../config/constant";

/**
 * Create an Axios Client with defaults
 *  headers: {
    "Authorize-token": "Bearer thisistoken",
    Key: "1234",
  },
 */
const client = axios.create({
  baseURL: BASE_URL_GITHUB,
});

client.interceptors.request.use(
  (request) => {
    console.log("Request released");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (request) => {
    console.log("Respose returned");
    return request;
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 503:
          //  props.history.push("/503"); //we will redirect user into 503 page
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export function AxiosRequest(options) {
  return client(options);
}
