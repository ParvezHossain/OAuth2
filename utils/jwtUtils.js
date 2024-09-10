const jwt = require("jsonwebtoken");
const OAuthConfig = require("../config/oauthConfig");
module.exports = {
  generateToken: (user) => {
    return jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      OAuthConfig.getClientSecret(),
      {
        expiresIn: "1h",
      }
    );
  },
  verifyToken: (token) => {
    try {
      return jwt.verify(token, OAuthConfig.getClientSecret());
    } catch (error) {
      throw new Error("Invalid Token");
    }
  },
};
