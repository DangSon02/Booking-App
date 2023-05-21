const room = require("../models/roomModel");
const hotel = require("../models/hotelModel");

exports.createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new room(req.body);
  try {
    const saveRoom = await newRoom.save();
    try {
      await hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: saveRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(saveRoom);
  } catch (error) {
    next(error);
  }
};

// update room
exports.updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};
// delete room
exports.deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await room.findByIdAndDelete(req.params.id);
    try {
      await hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }

    res.status(200).json("Room has been delete!");
  } catch (error) {
    next(error);
  }
};
// get room
exports.getRoom = async (req, res, next) => {
  try {
    const Room = await room.findById(req.params.id);

    res.status(200).json(Room);
  } catch (error) {
    next(error);
  }
};
// get all room
exports.getAllRoom = async (req, res, next) => {
  try {
    const allRooms = await room.find();

    res.status(200).json(allRooms);
  } catch (error) {
    next(error);
  }
};
