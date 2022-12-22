const {
  create,
  findAll,
  findOne,
  updateOne,
  deleteOne,
} = require("../controllers/review-controller");
const express = require("express");
const router = express.Router();

// endpoints here
router.post("/create", create);
router.get("/", findAll);
router.get("/find/:movieId", findOne);
router.put("/update/:movieId", updateOne);
router.delete("/delete/:movieId/:userName", deleteOne);

module.exports = {
  router,
};
