// console.log("hello world using NOde");
//this is console based application
// But we want to make a web based application

//Web based application requires a server to host the website
const http = require("htpp");
const PORT = 9999;
http.createServer(function(request, response) {
    response.end("<h1> Hello world using Node Js </h1>");
}).listen(PORT, () => console.log("Server started at : ", PORT));

// cookie handling handles through headers
