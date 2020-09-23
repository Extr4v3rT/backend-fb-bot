const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
//importing database framework
const mongoose = require('mongoose');
//Importing Routes
const routes = require('./routes/index');
const authRoute = require('./routes/auth');

const cors = require('cors');
const app = express();

app.use(cors())
dotenv.config();


app.use(express.static(path.join(__dirname, 'public')));


//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


//Connect to Database
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => 
console.log('Connected to DB!')
);

//Middleware
app.use(express.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Routes Middlewares
app.use('/', routes);
app.use('/', authRoute);
app.use('/ajaxcall', routes);


module.exports = app;