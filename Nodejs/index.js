const http = require("http");
 
const server =  http.createServer(function(request, response){
    response.end("Сервер создан!");
});
server.listen(3000, function(){ console.log("Сервер запущен по адресу http://localhost:3000")});
