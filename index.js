const mongoose = require("mongoose");
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

mongoose.connect(
  "mongodb+srv://prakhar:IXUr1S2b9FTEXdZc@cluster0.mmehvfp.mongodb.net/learn"
);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.post('/contract', function(req, res){
    console.log("Post request received");
})

app.listen(3000,
    function () {
        console.log("App is running on Port 3000");
    });