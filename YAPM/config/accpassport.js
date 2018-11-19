var LocalStrategy = require("passport-local").Strategy;

var mysql = require('mysql');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('noob');

var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);


connection.query('USE ' + dbconfig.database);

module.exports = function(passport) {



passport.use(
  'local-add',
  new LocalStrategy({
    
    
   usernameField : 'username',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, username, password, done){
    console.log("I/m at add");
     var newUserMysql = {
      username: req.body.user,
      accname : req.body.account,
      accid: req.body.username,
      accpass: req.body.password,
      accurl: req.body.url,
     
     };

     var insertQuery = "INSERT INTO accounts (username, accname, accid, accpass, accurl) values (?, ?, ?, ?, ?)";
     const encryptedString = cryptr.encrypt(newUserMysql.accpass);
     connection.query(insertQuery, [newUserMysql.username, newUserMysql.accname, newUserMysql.accid, encryptedString, newUserMysql.accurl ],
      function(err, rows){
        if(err) throw err;
       newUserMysql.id = rows.insertId;
       return done(err);    
     //  return done(null, newUserMysql);
      });
    })
  );



};











/*
var LocalStrategy = require("passport-local").Strategy;

var mysql = require('mysql');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);


module.exports = function(passport) {
 passport.serializeUser(function(user, done){
  done(null, user.id);
 });

 passport.deserializeUser(function(id, done){
  connection.query("SELECT * FROM users WHERE id = ? ", [id],
   function(err, rows){
    done(err, rows[0]);
   });
 });

 passport.use(
  'local-add',
  new LocalStrategy({
    
   usernameField : 'username',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, username, password, done){
   
     var newUserMysql = {
      username: req.body.username,
      accname : req.body.aacount,
      accid: req.body.username,
      accpass: req.body.password,
      accurl: req.body.url

     };

     var insertQuery = "INSERT INTO users (username, email, password) values (?, ?, ?)";

     connection.query(insertQuery, [newUserMysql.username,newUserMysql.accname, newUserMysql.accid, newUserMysql.accpass, newUserMysql.accurl ],
      function(err, rows){
        if(err) throw err;
       newUserMysql.id = rows.insertId;

       return done(null, newUserMysql);
      });
    })
  );
 */ 

 /*
 passport.use(
  'local-login',
  new LocalStrategy({
   usernameField : 'username',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, username, password, done){
   connection.query("SELECT * FROM users WHERE username = ? ", [username],
   function(err, rows){
    if(err)
     return done(err);
    if(!rows.length){
     return done(null, false, req.flash('loginMessage', 'No User Found'));
    }
    if(!bcrypt.compareSync(password, rows[0].password))
     return done(null, false, req.flash('loginMessage', 'Wrong Password'));

    return done(null, rows[0]);
   });
  })
 );
 */
//};






/*


const Cryptr = require('cryptr');
const cryptr = new Cryptr('Noob');
console.log("Stage1");

const decryptedString = cryptr.decrypt(encryptedString);

var mysql = require('mysql');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);
app.post('/addEntry',function(req,res){
console.log("posting"); 
  var account=req.body.account;
  var username=req.body.username;
  var url=req.body.url;
  var password= req.body.password;
  const encryptedString = cryptr.encrypt(password); 

     var insertQuery = "INSERT INTO users (username, accname, accid, accpass, accurl) values (?, ?, ?, ?, ?)";
console.log("insertion");
     connection.query(insertQuery, ['asda1',account, username, password, url ],
      function(err, rows){
        if(err) throw err;
       console.log("Done");

       
      });
    });
    */
   
 