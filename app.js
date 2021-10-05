const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const regex6 = /^(\/about\/foo)$/;

app.get(regex6, (req, res) => {
  res.status(404);
  res.send("Something went wrong");
});

const regex5 = /(contact)$/;

app.get(regex5, (req, res) => {
  res.send("Contact");
});

const regex4 = /(bio)$/;

app.get(regex4, (req, res) => {
  res.send("Bio");
});

const regex3 = /^(\/capital-letters\/)/;

app.get(regex3, (req, res) => {
  const lowerLayer = req.path.split("/")[2];
  res.send(lowerLayer.toUpperCase());
});

const regex2 = /(xyz)$/;

app.get(regex2, (req, res) => {
  res.send("That's all I wrote.");
});

const regex1 = /[/w+][^\/]/;

app.get(regex1, (req, res) => {
  // console.log("log1:", req.method);
  // console.log("log2:", req.path);
  // console.log("log3:", Math.ceil(Math.random()*9));
  res.render("index", {
    method: req.method,
    path: req.path,
    randomNumber: Math.ceil(Math.random() * 9),
  });
});

app.post(regex1, (req, res) => {
  // console.log("log1:", req.method);
  // console.log("log2:", req.path);
  // console.log("log3:", Math.ceil(Math.random()*9));
  res.render("index", {
    method: req.method,
    path: req.path,
    randomNumber: Math.ceil(Math.random() * 9),
  });
});

// app.all("*", (req, res) => {
//   res.statusCode("404");
// });

app.set("view engine", "pug");

const port = 8081;

app.listen(port, () => {
  console.log(`Server is now listening on port: ${port}`);
});
