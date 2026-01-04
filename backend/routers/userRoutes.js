const express = require("express");

const userController = require("../controllers/userController");
const watchController = require("../controllers/watchController");
const router = express.Router();

router("/")
  .get(userController.getAllUsers)
  .post(userController.createUser)
 
router("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
