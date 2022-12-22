/*
    Controllers are responsible to handle Request and Response
*/

const { Title } = require("../models");
const httpStatus = require("http-status");

// Implement create function
const create = async (req, res) => {
  try {
    const result = await Title.create(req.body);
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const findAll = async (req, res) => {
  try {
    console.log(req.query);
    const result = await Title.find(req.query).exec();
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const updateOne = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const updated = await Title.updateOne(
      { movieId: movieId },
      { $set: req.body }
    );
    res.json(updated);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const deleteOne = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const result = await Title.deleteOne({ movieId: movieId });
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const findOne = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const fetched = await Title.findOne({ movieId: movieId });
    res.json(fetched);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Export functions
module.exports = {
  create,
  findAll,
  deleteOne,
  updateOne,
  findOne,
};
