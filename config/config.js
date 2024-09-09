require("dotenv").config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
  tokenEndpoint: process.env.TOKEN_ENDPOINT,
  userInfoEndpoint: process.env.USER_INFO_ENDPOINT,
};
