const router = require('express').Router();
//Importing schema
const User = require('../model/user');
//Importing Validation
const { registerValidation, loginValidation } = require('../validation');
//Importing bcrypt
const bcrypt = require('bcryptjs');
//Web token
const jwt = require('jsonwebtoken');

const fs = require('fs');
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "127.0.0.1:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.get('/login', (req,res) => {
    res.render('../views/login');
});
router.get('/register', (req,res) => {
    res.render('../views/register');
});
router.post('/register', async (req, res) => {
    //validate the data before making user
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    //checking if the user is alredy in the database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send("Email already exists");
    
    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        businessName: req.body.businessName,
        password: hashedPassword,
    });
    try {
        const savedUser = await user.save();
        fs.mkdir("../usersFolders/" + req.body.email,{recursive: true}, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Folder stworzony pomyślnie");
            }
        })
        res.send('Zarejestrowano');
    } catch(e){
        res.status(400).send(e);
    }
    

});

//Login
router.post('/login', async (req, res) => {
    
   //validate the data before login
   const {error} = loginValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);
   
    //checking if the user is alredy in the database
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send("Email doesn't exists");
    //Chacking password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Password is wrong');

    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

});

module.exports = router;