const express = require("express");
const router = express.Router();
const verifyToken = require("./../utils/verifyToken");
const userController = require("./../controllers/userController");

//update
router.put("/:id", verifyToken.verifyUser, userController.updateUser);
//delete
router.delete("/:id", verifyToken.verifyUser, userController.deleteUser);
//get
router.get("/:id", verifyToken.verifyUser, userController.getUser);
//get all
router.get("/", verifyToken.verifyAdmin, userController.getAllUser);
module.exports = router;
