// Import express framework
const express = require("express");
// Import dotenv
const dotenv = require("dotenv");
// Import middleware
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const cors = require("cors");
dotenv.config({ path: "./config.env" });
// Import routes
const homeRouter = require("./routes/home-route");
const usersRouter = require("./routes/users-route");

// Setup default port
const PORT = process.env.PORT || 4000;

// Create express app
const app = express();

// Implement middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));

if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Implement route for '/api' endpoint
app.use("/api", homeRouter);

// Implement route for '/users' endpoint
// ! Note:
// '/users' will prefix all post routes
// with '/users' => '/all' will become '/users/all'
app.use("/users", usersRouter);

// Implement route for errors
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send("Something broke!");
});

// Start express app
app.listen(PORT, function () {
  console.log(`Server is running on: ${PORT}`);
});
