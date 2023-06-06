const express = require("express");

//controllers
const userController = require("./../controllers/user.controller");

//middlewares
// const validationMiddleware = require("./../middlewares/validation.middleware");

const router = express.Router();

router.route("/").get(userController.findUsers).post(userController.createUser);

router
  .route("/:id")
  .get(userController.findUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
