const { Review } = require("../models");
const httpStatus = require("http-status");
// const { response } = require("express");
const dbo = require("../db/conn");

const create = async (req, response) => {
  try {
    let db_connect = dbo.getDb("movieData");
    let myobj = {
      movieId: req.body.movieId,
      title: req.body.title,
      items: req.body.items,
    };

    db_connect.collection("reviews").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  } catch (e) {
    console.error(e);
    response.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const findAll = async (req, res) => {
  try {
    console.log(req.query);
    const result = await Review.find(req.query).exec();
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const updateOne = async (req, response) => {
  try {
    console.log(req.body);
    let db_connect = dbo.getDb("movieData");
    let movieId = req.params.movieId;
    let newReview = {
      $push: { items: req.body },
    };

    db_connect
      .collection("reviews")
      .updateOne({ movieId: movieId }, newReview, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  } catch (e) {
    console.error(e);
    response.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const deleteOne = async (req, response) => {
  try {
    let db_connect = dbo.getDb("movieData");
    console.log(req.params);
    const movieId = req.params.movieId;
    console.log(movieId);
    const userName = req.params.userName;
    console.log(userName);
    db_connect
      .collection("reviews")
      .updateMany(
        { movieId: movieId },
        { $pull: { items: { $elemMatch: { username: userName } } } },
        { multi: true },
        function (err, res) {
          if (err) throw err;
          console.log("1 document updated");
          response.json(res);
        }
      );
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const findOne = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const fetched = await Review.findOne({ movieId: movieId });
    res.json(fetched);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  create,
  findAll,
  updateOne,
  deleteOne,
  findOne,
};
