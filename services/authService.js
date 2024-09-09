const axios = require("axios");
const User = require("../models/userModel");
const jwtUtils = require("../utils/jwtUtils");
const config = require("../config/config");

class AuthService {
  async exchangeCodeForToken(code) {
    const response = await axios.post(config.tokenEndpoint, {
      code,
      client_id: config.clientID,
      client_secret: config.clientSecret,
      redirect_uri: config.redirectUri,
      grant_type: "authorization_code",
    });
    return response.data.access_token;
  }
  async fetchUserProfile(accessToken) {
    const response = await axios.get(config.userInfoEndpoint, {
      headers: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    return response.data;
  }

  async findOrCreateUser(profile) {
    let user = await User.findOne({
      oauthId: profile.id,
    });

    if (!user) {
      user = new User({
        email: profile.email,
        name: profile.name,
        oauthProvider: "google",
        oauthId: profile.id,
      });
    }
    await user.save();
  }

  async loginUser(code) {
    const accessToken = await this.exchangeCodeForToken(code);
    const profile = await this.fetchUserProfile(accessToken);
    const user = await this.findOrCreateUser(profile);
    const token = jwtUtils.generateToken(user);

    return {
      user,
      token,
    };
  }
}

module.exports = new AuthService();
