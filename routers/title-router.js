const {create, findAll, findOne, updateOne, deleteOne} = require("../controllers/title-controller");
const express = require('express')
const router = express.Router()

// endpoints here
router.post("/", create);
router.get("/", findAll);
router.get("/:movieId", findOne);
router.put("/:movieId", updateOne);
router.delete("/:movieId", deleteOne);

module.exports = {
    router
}