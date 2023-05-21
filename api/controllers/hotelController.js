const Hotel = require("../models/hotelModel");

// tạo hotel
exports.creatHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    next(error);
  }
};

// update hotel
exports.updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};
// delete hotel
exports.deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json("Hotel has been delete!");
  } catch (error) {
    next(error);
  }
};
// get hotel
exports.getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
// get all hotel
exports.getAllHotel = async (req, res, next) => {
  try {
    const allHotels = await Hotel.find();

    res.status(200).json(allHotels);
  } catch (error) {
    next(error);
  }
};
