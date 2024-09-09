const jwt = require("jsonwebtoken");
const config = require("../config/config");
module.exports = {
  generateToken: (user) => {
    return jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      config.jwtSecret,
      {
        expiresIn: "1h",
      }
    );
  },
  verifyToken: (token) => {
    try {
      return jwt.verify(token, config.jwtSecret);
    } catch (error) {
      throw new Error("Invalid Token");
    }
  },
};
