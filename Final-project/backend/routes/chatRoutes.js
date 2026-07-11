const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const Groq = require("groq-sdk");
const dotenv = require("dotenv");
dotenv.config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

router.post("/", async (req, res) => {
    
    try {
        const { message } = req.body;

        const courses = await Course.find();

        const courselist = courses.map((course, index) => `
        
        Course ${index + 1}
        Title:${course.title}
        Price:${course.price}
     `
        )
            .join("\n");
        
        const completion = await groq.chat.completion.create({
            model: "llama-3.1-8b-instant",
            messages: [
                {
                    role: "system",
                    content: `
                    elearning course recomendation system
                    mention:
                    1.recomended course name
                    2.course price

                    ${courselist}
                    
                    `
                },
                {
                    role: "user",
                    content: message
                }
            ],
            temperature: 0.5,
            max_tokens: 300
        });

        const reply = completion.choices[0]?.message?.content ||
            "sorry, not genarated";
        
        res.json(reply);


    } catch (err) {
        console.error(err);
    }
});

module.exports = router;