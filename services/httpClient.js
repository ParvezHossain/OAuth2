const axios = require("axios");

class HttpClient {
  async post(url, data, headers = {}) {
    return await axios.post(url, data, { headers });
  }

  async get(url, headers = {}) {
    return await axios.get(url, { headers });
  }
}

module.exports = new HttpClient();
