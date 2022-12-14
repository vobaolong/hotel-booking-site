const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookiesParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const morgan = require("morgan");

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookiesParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(morgan("dev"));

// all routes imports
const room = require("./routes/roomRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", room);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// để chạy frontend và backend trên một server
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors Handling.
app.use(errorMiddleware);

module.exports = app;
