let connection = require("./connection");

function questionMarks(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

let orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) {
            throw err;
            }
            cb(result)
        })
    },
    insertOne: function (tableInput, cols, vals, cb){
        let queryString = "INSERT INTO " + tableInput;
        
        queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += questionMarks(vals.length);
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
        let queryString = "UPDATE " + tableInput;
        queryString += " SET " + col;
        queryString += " = " + value;
        queryString += " WHERE "; 
        queryString += selection;
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