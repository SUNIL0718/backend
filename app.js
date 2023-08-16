const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

//Route imports
const products = require("./router/productRoute");
const user = require("./router/userRoute");

app.use("/api/v1", products);
app.use("/api/v1", user);

//Middleware for error
app.use(errorMiddleware);

module.exports = app;
