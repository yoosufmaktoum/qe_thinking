var mysql= require('mysql');
var connection = mysql.createPool({

    host:'18.220.242.150',
    user:'dev_user',
    password:'password',
    database:'qe_thinking'

});
module.exports=connection;