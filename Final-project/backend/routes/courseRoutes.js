const express = require("express");
const router = express.Router();
const User = require("../models/Course");

//data insert
router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

//all data view

router.get("/", async (req, res) => {
    const user = await User.find();
    res.json(user);
})

//single view

router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
})

//updated
router.put("/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(user);
})

//delete
router.delete("/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "course deleted sucessfully" });
});

module.exports = router;

