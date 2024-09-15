const HttpClient = require("../httpClient");

class FetchHttpClient extends HttpClient {
  async post(url, data, headers = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async get(url, headers = {}) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
    return await response.json();
  }
}

module.exports = FetchHttpClient