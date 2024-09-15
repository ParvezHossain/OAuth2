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
    this.GRANT_TYPE = process.env.GRANT_TYPE;
    this.O_AUTH_PROVIDER = process.env.O_AUTH_PROVIDER;
    this.CONSENT_SCREEN_PROMPT = process.env.CONSENT_SCREEN_PROMPT;
    this.CONSENT_SCREEN_ACCESS_TYPE = process.env.CONSENT_SCREEN_ACCESS_TYPE;
    this.EXPIRES_IN = process.env.EXPIRES_IN;
    this.RESPONSE_TYPE = process.env.RESPONSE_TYPE;
    this.HTTP_CLIENT_TYPE = process.env.HTTP_CLIENT_TYPE;
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
  getGrantType() {
    return this.GRANT_TYPE;
  }

  getOAuthProvider() {
    return this.O_AUTH_PROVIDER;
  }

  getConsentScreenPrompt() {
    return this.CONSENT_SCREEN_PROMPT;
  }

  getConsentScreenAccessType() {
    return this.CONSENT_SCREEN_ACCESS_TYPE;
  }
  getExpiresIn() {
    return this.EXPIRES_IN;
  }
  getResponseType() {
    return this.RESPONSE_TYPE;
  }
  getHTTPClientType() {
    return this.HTTP_CLIENT_TYPE;
  }
}

module.exports = new OAuthConfig();
