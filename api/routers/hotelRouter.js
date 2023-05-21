const express = require("express");
const router = express.Router();
const hotelController = require("./../controllers/hotelController");
const verifyToken = require("./../utils/verifyToken");
//create
router.post("/", verifyToken.verifyAdmin, hotelController.creatHotel);
//update
router.put("/:id", verifyToken.verifyAdmin, hotelController.updateHotel);
//delete
router.delete("/:id", verifyToken.verifyAdmin, hotelController.deleteHotel);
//get
router.get("/:id", hotelController.getHotel);
//get all
router.get("/", hotelController.getAllHotel);
module.exports = router;
