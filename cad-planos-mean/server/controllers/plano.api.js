var express = require("express"),
    router = express.Router(),
    plano = require("../models/plano.js");

router.get("/", function (req, res) {
    console.log('exucutando... find')
    plano.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).get("/:id", function (req, res) {
    var id = req.params.id;
    plano.find({ _id: id }, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
}).post("/", function (req, res) {
    console.log('exucutando...')
    var obj = req.body;
    var model = new plano(obj);
    model.save(function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("created");
    });
}).put("/:id", function (req, res) {
    var id = req.params.id;
    var obj = req.body;

    plano.findByIdAndUpdate(id, { name: obj.name, contactNo: obj.contactNo, address: obj.address },
        function (err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
}).delete("/:id", function (req, res) {
    var id = req.params.id;
    plano.findByIdAndRemove(id, function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;