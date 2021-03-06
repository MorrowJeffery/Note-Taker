var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('db'));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, function() {
    console.log("App started on port: " + PORT);
  });