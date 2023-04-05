const mysql = require("mysql");
require('dotenv').config();

const db_host = process.env.HOSTNAME;
const db_user = process.env.DATABASE_USER_NAME;
const db_password = process.env.DATABASE_PASSWORD;
const db_name = process.env.DATABASE;

var mysqlConnection = mysql.createConnection({
    host : db_host,
    user : db_user,
    password : db_password,
    database : db_name,
    multipleStatements : true
});

mysqlConnection.connect((err) => {
   if(!err)
   {
    console.log(`Server Started At Port ${process.env.PORT}`);
    console.log("Connected With MYSQL Database");
   }
   else
   {
    console.log("Connection Failed");
    return console.error("error" + err.message);
   }

});

module.exports = mysqlConnection;