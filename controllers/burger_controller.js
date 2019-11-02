let express = require("express") 

let router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let burgerObject = {
            burgers: data
        }
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
        "burger_name"
    ],[
        req.body.burgerBox
    ], function(data) {
        res.redirect("/")
    });
});

router.put("/burgers/:id", function(req,res) {
    let condition = "id = " + req.params.id;
    burger.updateOne({devoured: true}, condition, function(data) {
        if (data.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.redirect('/')
          }
    })
})
module.exports = router;
