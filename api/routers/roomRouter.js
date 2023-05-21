const express = require("express");
const router = express.Router();
const roomControllers = require("./../controllers/roomController");
const verifyToken = require("./../utils/verifyToken");
//create
router.post("/:hotelId", verifyToken.verifyAdmin, roomControllers.createRoom);
//update
router.put("/:id", verifyToken.verifyAdmin, roomControllers.updateRoom);
//delete
router.delete(
  "/:id/:hotelId",
  verifyToken.verifyAdmin,
  roomControllers.deleteRoom
);
//get
router.get("/:id", roomControllers.getRoom);
//get all
router.get("/", roomControllers.getAllRoom);
module.exports = router;
