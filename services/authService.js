const axios = require("axios");
const User = require("../models/userModel");
const jwtUtils = require("../utils/jwtUtils");
const OAuthConfig = require("../config/oauthConfig");
const qs = require("qs");

class AuthService {
  async exchangeAuthorizationCodeForToken(authorizationCode) {
    try {
      const response = await axios.post(
        OAuthConfig.getTokenEndpoint(),
        qs.stringify({
          client_id: OAuthConfig.getClientId(),
          client_secret: OAuthConfig.getClientSecret(),
          grant_type: "authorization_code",
          code: authorizationCode,
          redirect_uri: OAuthConfig.getRedirectUri(),
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  }
  async getUserInfo(accessToken) {
    const response = await axios.get(OAuthConfig.getUserInfoEndpoint(), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }

  async findOrCreateUser(profile) {
    try {
      let user = await User.findOne({ oauthId: profile.sub });

      if (!user) {
        user = new User({
          email: profile.email,
          name: profile.name,
          oauthProvider: "google",
          oauthId: profile.sub,
        });
        await user.save();
      }

      return user;
    } catch (error) {
      console.error("Error in findOrCreateUser:", error);
      throw error;
    }
  }

  async loginUser(authorizationCode) {
    try {
      const googleToken = await this.exchangeAuthorizationCodeForToken(
        authorizationCode
      );
      const { access_token } = googleToken;
      const profile = await this.getUserInfo(access_token);

      const user = await this.findOrCreateUser(profile);
      const token = jwtUtils.generateToken(user);

      return {
        user,
        token,
      };
    } catch (error) {
      console.log("error message:: ", error.message);
    }
  }

  async consentScreen() {
    const queryParams = new URLSearchParams({
      client_id: process.env.CLIENT_ID,
      redirect_uri: process.env.REDIRECT_URI,
      response_type: "code",
      scope: "openid email profile", // Scopes determine what information you're requesting
      access_type: "offline",
      prompt: "consent", // This forces Google to ask the user to grant permissions
    });
    // Redirect user to Google's OAuth 2.0 consent screen
    return `${OAuthConfig.googleOAuthURL}?${queryParams}`;
  }
}

module.exports = new AuthService();
