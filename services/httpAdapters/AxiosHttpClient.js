const axios = require("axios");
const HttpClient = require("../httpClient");

class AxiosHttpClient extends HttpClient {
  async post(url, data, headers = {}) {
    return await axios.post(url, data, headers);
  }

  async get(url, headers = {}) {
    return await axios.get(url, headers);
  }
}

module.exports = AxiosHttpClient;
