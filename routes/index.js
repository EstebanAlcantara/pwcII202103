var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author:'Esteban Torres' });
});

router.get('/itgam', function(req, res, next) {
  res.status(200).json({message:'Bienvenido al mundo de la programacion fullstack'});
});

module.exports = router;
