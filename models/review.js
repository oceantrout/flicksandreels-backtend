const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  movieId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  items: [{
    username: {
      type: String,
      required: false,
    },
    userUrl: {
      type: String,
      required: false,
    },
    reviewLink: {
      type: String,
      required: false,
    },
    warningSpoilers: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    rate: {
      type: String,
      required: false,
    },
    helpful: {
      type: String,
      required: false,
    },
    heading: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
  }]

});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
