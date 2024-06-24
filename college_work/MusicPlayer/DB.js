const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

mongoose.connect("mongodb://localhost:27017/NewCollection", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const contactSchema = {
    email: String,
    query: String,
};

const Contact = mongoose.model("contact", contactSchema);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get("/contact", function(req, res) {
    res.render(path.join(__dirname, "contact"));
});

app.post("/contact", async function(req, res) {
    console.log(req.body.email);
    const contact = new Contact({
        email: req.body.email,
        query: req.body.query,
    });
    try {
        await contact.save();
        res.render(path.join(__dirname, "contact"));
    } catch (err) {
        throw err;
    }
});

app.listen(3000, function() {
    console.log("App is running on Port 3000");
});