const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController')

// create an user
router.post("/", userController.createUser);

module.exports = router;
