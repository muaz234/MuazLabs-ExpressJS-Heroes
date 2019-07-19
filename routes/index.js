var express = require('express');
const FeedbackRoutes = require('../routes/feedback')
const HeroesRoutes = require('../routes/heroes')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/feedback', FeedbackRoutes);
router.use('/heroes', HeroesRoutes);
module.exports = router;
