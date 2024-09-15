class HttpClientFactory {
  static createHttpClient(clientType) {
    switch (clientType) {
      case "axios":
        const AxiosHttpClient = require("./AxiosHttpClient");
        return new AxiosHttpClient();

      case "fetch":
        const FetchHttpClient = require("./FetchHttpClient");
        return new FetchHttpClient();

      default:
        throw new Error("Unknown HTTP client type");
    }
  }
}

module.exports = HttpClientFactory;
