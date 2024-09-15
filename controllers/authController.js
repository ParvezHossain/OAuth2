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
      res.status(500).json({
        message: "Authentication failed",
        error: error.message,
      });
    }
  }
  async consentScreen(req, res) {
    try {
      const url = await authService.consentScreen();
      // Redirect user to Google's OAuth 2.0 consent screen
      res.redirect(`${url}`);
    } catch (error) {
      res.status(500).json({
        message: "Conset Screen failed",
        error: error.message,
      });
    }
  }
}

module.exports = new AuthContoller();
