const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/signup");
const login = require("../controllers/login");

const { isAuthenticated } = require("../middleware/authMiddleware");
const friendsList = require("../controllers/userDetails");

router.post('/signup', registerUser);
router.post('/login', login)
router.get('/all-users',isAuthenticated,friendsList)
module.exports=router