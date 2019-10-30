let express = require("express") 

let router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", data);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burgers"
    ],[
        "burger_name"
    ],[
        req.body.burger_name
    ], function(result) {
        res.json({ id: result.insertId })
    });
});

router.put("/api/cats/:burger_name", function(req,res) {
    let condition = req.params.burger_name;
    burger.updateOne("burgers", devoured, req.body.devoured, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})