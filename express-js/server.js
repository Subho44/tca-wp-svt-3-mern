const express = require("express");

const app = express();

const products = [
    { id: 1, name: "laptop", price: 9000 },
    { id: 2, name: "tab", price: 9000 },
    { id: 3, name: "mobile", price: 9000 },
];


app.get('/', (req, res) => {
    res.send("api is working");
});
app.get('/api/products', (req, res) => {
    res.json(products);
});

const port = 5600;

app.listen(port, () => {
    console.log("server is running on port 5600");
});