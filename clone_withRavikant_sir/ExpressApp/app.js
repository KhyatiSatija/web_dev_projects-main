const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
// app.use("/", (req, res, next) => {
//     res.send("<h1> Hello World from Express </h1>");
// });

app.use(bodyParser.urlencoded()); //to be able to see the data in the body of the req.body that we are receiving

app.use("/register", (req, res, next) => {
    res.send("<h1> Register now to order food </h1>");
});

app.use("/products", (req, res, next) => {
    res.send("<h1> Look at the food items </h1>");
});

app.use("/cart", (req, res, next) => {
    res.send("<h1> This is your cart  </h1>");
});

app.use("/login", (req, res, next) => {
    res.send("<h1> Login here </h1>");
    res.send(`
    <h1> Login Page ...!! </h1>
    <form action = "/loginUser" method = 'get'>
    <label for = "username"> Enter your username </label>
    <input type = 'text' placeholder = "Enter your username" name = "username" id = "username" />
    <label for = "userpwd" > Enter your password </label>
    <input type = "password" placeholder = "Enter your password" name = "userpwd" id = "userpwd" />
    <input type = "submit" />
    `)
});
app.use("/loginUser", (req, res, next) => {
    console.log(req.body);
    res.send("<h1> Login Success </h1>");
})
app.use("/", (req, res, next) => {
    res.send("<h1> Hello World from Express </h1>");
});
//putting the just / slash at the end because it reads and when it finds it, it stops searching so this home page should be placed at the end
app.listen(PORT, () => {
    console.log("Server started at :", PORT);
});
