const express = require("express");
const router = express.Router();

const {
    getProfile,
    updateProfile,
} = require("../controller/usercontroller");

const { protect } = require("../middleware/authMiddle");


router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

module.exports = router;