var fs = require("fs");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        fs.readFile("./db/db.json", function(err, data) {
            if (err) {console.log (err)}

            else {
                res.status(200).send(JSON.parse(data))};
        })
        //res.status(200).send(data)
    });

    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        let newJSON = [];
        let tracker = 0;
        let rawdata = fs.readFileSync('./db/db.json');
        let data = JSON.parse(rawdata);

        for (var i = 1; i < data.length + 1; i++)
        {
            data[i-1].id = i;
            newJSON.push(data[i-1]);
        }
        newNote.id = (i);
        newJSON.push(newNote);
        console.log(newJSON);

        fs.writeFile("./db/db.json", JSON.stringify(newJSON), function(err) {
            if (err) {console.log(err);}
            else {}
        })
        res.json(data);
    });

    app.delete("/api/notes/:id", function (req, res) {
        let id = req.params.id;
        let newJSON = [];

        let rawdata = fs.readFileSync('./db/db.json');
        let data = JSON.parse(rawdata);

        for (var i = 0; i < data.length; i++) {
            if (data[i].id != id ) {newJSON.push(data[i])}
        }

        fs.writeFile("./db/db.json", JSON.stringify(newJSON), function(err) {
            if (err) {console.log(err);}
            else {}
        })
        res.json(data);
    })

}