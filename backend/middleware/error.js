const ErrorHandle = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Lỗi máy chủ";

  // if wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Tài nguyên không hợp lệ: ${err.path}`;
    err = new ErrorHandle(message, 400);
  }

  // mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Oops! Lỗi trùng lặp ${Object.keys(err.keyValue)}`;
    err = new ErrorHandle(message, 400);
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `JWT không hợp lệ, hãy thử lại`;
    err = new ErrorHandle(message, 400);
  }

  // JWT Expire error
  if (err.name === "TokenExpiredError") {
    const message = `JWT đã hết hạn, hãy thử lại`;
    err = new ErrorHandle(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
