var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345",
  database: "mydb"
});

// connection.connect(function(err) {
  // con.query("CREATE DATABASE mydb", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });
  // var sql = "SELECT * FROM mydb.customers";
  // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // var sql = "DELETE FROM customers";
  // connection.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("DELETED records");
  // });
  // var sql = "INSERT INTO customers (id, name, address) VALUES ?";
  // var values = [
  //   ['1', 'John', 'Highway 71'],
  //   ['2', 'John', 'Highway 72']
  // ];
  // connection.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records inserted: " + result.affectedRows);
  // });
// });

connection.connect((err) => {
  if (err) throw err;
  console.log('Database connected');
});

module.exports = connection;