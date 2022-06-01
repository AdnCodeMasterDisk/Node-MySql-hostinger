var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql536.main-hosting.eu", // host od hostinger
    user: "u526059037_testuser", // user mysql user 
    password: "Lovesong1993", 
    database: "u526059037_test" // name daba base
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to the database!");

    //1 crear la base de datos
    //let query ="CREATE DATABASE IF NOT EXISTS todo_db ";
    //con.query(query, (err, result)=>{
        //if (err) throw err;
        //console.log(result)
    //})

    //crear la tabla
    let query ="CREATE TABLE IF NOT EXISTS Todo (task_id int NOT NULL AUTO_INCREMENT, task VARCHAR(255) NOT NULL, status VARCHAR(255), PRIMARY KEY (task_id))";
    con.query(query, (err, result)=>{
        if (err) throw err;
        //console.log(result)
    })
});

module.exports = con;