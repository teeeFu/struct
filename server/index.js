var express = require("express")
var cors = require("cors");
const { randomInt } = require("crypto");
var app = express();
app.use(cors());
app.get("/quote", function(request, response){
    var fs = require("fs");
    var fileContent = fs.readFileSync("server/db.txt", "utf8");
    var strings = fileContent.split("\r\n")
    var randomNum = randomInt(strings.length)
    var dict_quote = {
        number: (randomNum + 1),
        quote: strings[randomNum]
    };
    var data = JSON.stringify(dict_quote);
    response.send (data);
});
app.listen(591);