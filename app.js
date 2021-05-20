var express = require('express');
var app = express();
var db = require('./db');
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller');
//var bcrypt = require('bcryptjs');


db.sync();
app.use(express.json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(4000, function () {
    console.log("App is listening on 4000");
    //console.log(bcrypt.hashSync("123", 10));
})