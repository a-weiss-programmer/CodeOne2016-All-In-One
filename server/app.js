
let express = require("express");

let app = express();

app.use( express.static(__dirname + "/../views") );

let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();


app.get("/test", (request, response) => {
    response.json( ["Hello", "World"]);
});
app.listen(81, 'codeone2016.erikshafer.me');
