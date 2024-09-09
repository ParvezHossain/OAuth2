const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

// OAuth2 login route
router.get("/login", authController.login);
module.exports = router;
