
const mongoose = require("mongoose");

const courseschema = new mongoose.Schema(
    {
        title: String,
        price: Number,
        image:String
    });

module.exports = mongoose.model("course", courseschema);