var fs = require("fs");
var data = require("../db/db.json");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        // console.log("started");
        // fs.readFile('../db/db.json', (err, data) => {
        //     if (err) {console.log(err);}
        //     else {
        //         console.log(data);
        //         res.json(data);
        //     }
        // })
        console.log("test");
        res.status(200).send(data)

    });

    app.post("/api/notes", function(req, res) {
        
    });

    app.delete("/api/notes/:id", function (req, res) {

    })

}