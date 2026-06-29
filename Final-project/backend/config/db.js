const mongoose = require("mongoose");

const connectdb = async () => {
    
    await mongoose.connect(process.env.DBURL);
    console.log("mongodb connected");
}

module.exports = connectdb;