var express = require("express")
var cors = require("cors");
var app = express();
app.use(cors());
app.get("/", function(request, response){
    response.send("000");
});
app.listen(591);