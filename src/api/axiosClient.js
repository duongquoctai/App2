import axios from "axios";
import queryString from "query-string";



/**
 * Define variable in .env 
 * Ex: REACT_APP_API_URL= https://jsonplaceholder.typicode.com'
 *  axios.defaults.baseURL = process.env.REACT_APP_API_URL
 */



axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const axiosClient = axios.create({
  headers: { "content-type": "application/json" },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // handle error
    const statusCode = error.response.status
    console.log(statusCode)
    throw error;
  }
);


export { axiosClient }

