let express = require("express") 

let router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let burgerObject = {
            burgers: data
        }
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.get("/api/burgers", function(req, res) {
    burger.selectAll(function(data) {
        let burgerObject = {
            burgers: data
        }
        res.json(burgerObject);
    });
});

router.post("/burgers", function(req, res) {
    burger.insertOne(
        [
        ["burger_name"]
    ],[
        req.body.burger_name
    ], function(data) {
        res.json({ id: data.insertId });
    });
});

router.put("/burgers/:id", function(req,res) {
    let selection = "id = " + req.params.id;
    burger.updateOne("devoured", req.body.devoured, selection, function(data) {
        if (data.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          };
    });
});
router.delete("/burgers/:id", function(req, res) {
    let selection = "id = " + req.params.id;

    console.log(selection);
    burger.deleteOne(selection, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;
