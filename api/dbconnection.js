var mysql= require('mysql');
var connection = mysql.createPool({

    host:'qa-jenkins.leapset.com',
    user:'ctaf',
    password:'gvt123',
    database:'qe_thinking'

});
module.exports=connection;