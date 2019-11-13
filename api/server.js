const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

const server = express();

const sessionConfiguration = {
  name: "viper",
  secret: process.env.COOKIE_SECRET || "life is fair 4 me",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: process.env.NODE_ENV === "development" ? false : true,
    httpOnly: true // prevent javascript from accessing cookie
  },
  resave: false, // save sessions even when they have not changed
  saveUninitialized: true // read documentation, respect GDPR, default to false
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfiguration));

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up", session: req.session });
});

module.exports = server;
