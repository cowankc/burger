let mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createPool({
    connectionLimit: 15,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});
}
connection.getConnection(function(err, connection) {
    if (err) {
        console.error("error connecting: " + err.stack);
    return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
