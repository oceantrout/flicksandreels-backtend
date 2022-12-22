const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const titleSchema = new Schema(
    {
        movieId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        runtimeMins: {
            type: String,
            required: true,
        },
        plot: {
            type: String,
            required: true,
        }
    }
)


const Title = mongoose.model("Title", titleSchema);

module.exports = Title;