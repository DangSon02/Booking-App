const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./api/routers/authRouter");
const hotelRouter = require("./api/routers/hotelRouter");
const roomRouter = require("./api/routers/roomRouter");
const userRouter = require("./api/routers/userRouter");
const cookieParser = require("cookie-parser");
const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.DATA_BASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongodb!");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
//middleware
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/hotel", hotelRouter);
app.use("/api/rooms", roomRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: "false",
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8080, () => {
  connect();
  console.log("Connect To BackEnd!");
});
