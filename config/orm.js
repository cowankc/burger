let connection = require("./connection");

let orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) {
            throw err;
            }
            cb(results)
        })
    },
    insertOne: function (tableInput, cols, vals, cb){
        let queryString = "INSERT INTO " + tableInput;
        
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
              }
              cb(result);
        })
    },
    updateOne: function (tableInput, col, value, selection, CB){
        let queryString = "UPDATE" + tableInput;
        queryString += " SET" + col;
        queryString += " = " + value;
        queryString += " WHERE burger_name = " + selection;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
              }
        
              cb(result);
            });
    }
}

module.exports = orm