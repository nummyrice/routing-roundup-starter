const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Express!");

})
const regex = /[/w+][^\/]/;


app.get(regex, (req, res) => {
    // console.log("log1:", req.method);
    // console.log("log2:", req.path);
    // console.log("log3:", Math.ceil(Math.random()*9));
    res.render("index", {method: req.method, path: req.path, randomNumber: Math.ceil(Math.random()*9)});
})

app.set("view engine", "pug");


const port = 8081;

app.listen(port, () => {
    console.log(`Server is now listening on port: ${port}`);
})
