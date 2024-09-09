const authService = require("../services/authService");

class AuthContoller {
  async login(req, res) {
    try {
      const { code } = req.query;
      const { user, token } = await authService.loginUser(code);
      res.json({
        user,
        token,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Authentication failed", error: error.message });
    }
  }
}

module.exports = new AuthContoller();
