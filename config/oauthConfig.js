require("dotenv").config();

// src/config/oauthConfig.js
class OAuthConfig {
  constructor() {
    this.clientId = process.env.CLIENT_ID;
    this.clientSecret = process.env.CLIENT_SECRET;
    this.redirectUri = process.env.REDIRECT_URI;
    this.tokenEndpoint = process.env.TOKEN_ENDPOINT;
    this.userInfoEndpoint = process.env.USER_INFO_ENDPOINT;
    this.googleOAuthURL = process.env.GOOGLE_O_AUTH_URL;
  }

  getClientId() {
    return this.clientId;
  }

  getClientSecret() {
    return this.clientSecret;
  }

  getRedirectUri() {
    return this.redirectUri;
  }

  getTokenEndpoint() {
    return this.tokenEndpoint;
  }

  getUserInfoEndpoint() {
    return this.userInfoEndpoint;
  }

  getGoogleOAuthURL() {
    return this.googleOAuthURL;
  }
}

module.exports = new OAuthConfig();
