const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Rossignol26#',
    database : 'xmen_project'
  });
   
  
  module.exports = connection;