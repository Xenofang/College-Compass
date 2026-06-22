const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getUser,
} = require("../controller/auth");

const {
  protect,
} = require("../middleware/authMiddle");

router.post("/register", register);
router.post("/login", login);

router.get("/user", protect, getUser);  

module.exports = router;