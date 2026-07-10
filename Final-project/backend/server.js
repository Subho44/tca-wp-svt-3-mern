const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const courseroutes = require("./routes/courseRoutes");
const userroutes = require("./routes/userRoutes");



dotenv.config();


const app = express();
app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use(cors());
connectdb();
app.use("/api/courses", courseroutes);
app.use("/api/auth", userroutes);
app.get('/', (req, res) => {
    res.send("api is working");
});

const port = process.env.PORT 
app.listen(port, () => {
    console.log("server is running port 5500");
});

