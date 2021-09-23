const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey, Shivansh here");
  res.status(200).send("Hey, Shivansh here");//with status
});  

app.get("/ab+cd", (req, res) => {
    res.send(req.query);//sending the object received
    res.send('Hello');
    console.log(req.query);
});

app.listen(5000);