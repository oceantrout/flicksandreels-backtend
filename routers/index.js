/*
    Routers are responsible to document APIs
*/
const path = require("path");
const express = require("express");

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
const { router: TitleRouter } = require("./title-router");
const { router: ReviewRouter } = require("./review-router");
const { router: AuthRouter } = require("./auth-router");
const dbo = require("../db/conn");

// Middleware
app.use(cors(corsOptions)); // Use this after the variable declaration
app.use(express.json());

// Routers
app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.send("Weclcome to the root directory");
});

// Endpoints
app.use("/title", TitleRouter);
app.use("/review", ReviewRouter);

// app.post("/shows", createShow);
// app.get("/shows", findAllShow);

// app.put("/shows/:id", updateOneShow);
// app.delete("/shows/:id", deleteOneShow);

app.use(express.static("public"));

// Start server
app.listen(process.env.PORT, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function(err) {
    if (err) console.error(err);
  });
  console.log("Listening to...", process.env.PORT);
});
