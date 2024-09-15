// httpClient.js
class HttpClient {
  async post(url, data, headers = {}) {
    throw new Error("Method not implemented");
  }

  async get(url, headers = {}) {
    throw new Error("Method not implemented");
  }
}

// Export the class, not an instance
module.exports = HttpClient;
