const express = require("express");
const getAllUsersController = require("../controllers/users/getAllUsers");
const getUserByIdController = require("../controllers/users/getUserById");
const createUserController = require("../controllers/users/createUser");
const updateUserByIdController = require("../controllers/users/updateuserbyid");
const deleteUserByFirstNameController = require("../controllers/users/deleteuserbyfirstname");
const createUserCredentialsController = require("../controllers/users/createusercredentials");
// const { checkJwt } = require("../middleware");
const { authenticate } = require("../middleware");
const router = express.Router();

// basic user functions
router.get("/", getAllUsersController.getAllUsers);
router.get("/:id", getUserByIdController.getUserById);
router.post("/", createUserController.createUser);
router.put("/:id", authenticate, updateUserByIdController.updateUserById);
router.delete(
  "/:first_name",
  authenticate,
  deleteUserByFirstNameController.deleteUserByFirstName
);

// user credentials functions (username and password)
router.post(
  "/credentials",
  authenticate,
  createUserCredentialsController.createUserCredentials
);

module.exports = router;
