let orm = require("../config/orm.js")

let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        })
    },
    updateOne: function(col, value, selection, cb) {
        orm.updateOne("burgers", col, value, selection, function(res) {
            cb(res);
        })
    }
};

module.exports = burger