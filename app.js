const express = require("express");
const bodyParser = require("body-parser");

const app = express(); // defining app
const port = process.env.PORT || 3000 ;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

app.get("/", function(req, res){
    res.render("login");
})

app.get("/signup", function(req, res){
    res.render("signup");
})

app.post("/", function(req, res){
    res.render("success",{value: "logged in to"});
})

app.post("/signup", function(req, res){
    res.render("success",{value: "registered in"});
})

app.listen(port,() => {
    console.log(`listening to the port at ${port}`);
});