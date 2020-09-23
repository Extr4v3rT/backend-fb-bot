const express = require('express');
const router = express.Router();
app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const PagesController = require('../controllers/PagesController');
const verify = require('./verifyToken');

router.post('/home', PagesController.bot)
router.get('/home', verify, PagesController.home);
router.get('/ajaxcall', PagesController.callajax);

module.exports = router;