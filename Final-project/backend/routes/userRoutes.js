const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


//register

router.post('/register', async (req, res) => {
    
    try {
        const { name, email, password } = req.body;
        const hashedpswd = await bcrypt.hash(password, 15);

        const user = await User.create({ name, email, password: hashedpswd });
        res.json({ message: "user register successfully" });

    } catch (err) {
        console.error(err);
    }
});

//login
router.post('/login', async (req, res) => {
    
    try {
        const {email, password } = req.body;

        const user = await User.find({ email });
        if (!user) return res.json({ error: "invalid user" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.json({ error: "invalid user" });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({token});

    } catch (err) {
        console.error(err);
    }
});

module.exports = router;